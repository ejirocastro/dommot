/**
 * Error Handler Utility
 *
 * Provides centralized error handling, logging, and conversion utilities
 * for consistent error management across the application.
 */

import { AppError, NetworkError, AuthenticationError, ValidationError, ErrorCategory, ErrorSeverity, ErrorInfo } from '../types/error';

/**
 * Error logging service
 * In production, this would send to a service like Sentry, LogRocket, etc.
 */
class ErrorLogger {
  private isDevelopment = process.env.NODE_ENV === 'development';

  /**
   * Log error to console (dev) or external service (prod)
   */
  log(error: AppError | Error, context?: Record<string, any>): void {
    const errorInfo = this.formatError(error, context);

    if (this.isDevelopment) {
      this.logToConsole(errorInfo);
    } else {
      this.logToService(errorInfo);
    }
  }

  /**
   * Format error for logging
   */
  private formatError(error: AppError | Error, context?: Record<string, any>): ErrorInfo {
    if (error instanceof AppError) {
      return {
        ...error.toErrorInfo(),
        metadata: {
          ...error.metadata,
          ...context
        }
      };
    }

    // Convert native Error to ErrorInfo
    return {
      message: error.message,
      userMessage: 'An unexpected error occurred',
      category: ErrorCategory.UNKNOWN,
      severity: ErrorSeverity.MEDIUM,
      timestamp: Date.now(),
      stack: error.stack,
      metadata: context
    };
  }

  /**
   * Log to console with formatting (development)
   */
  private logToConsole(errorInfo: ErrorInfo): void {
    const style = this.getConsoleStyle(errorInfo.severity);

    console.group(`%c[${errorInfo.category.toUpperCase()}] ${errorInfo.message}`, style);
    console.log('User Message:', errorInfo.userMessage);
    console.log('Severity:', errorInfo.severity);
    console.log('Timestamp:', new Date(errorInfo.timestamp).toISOString());

    if (errorInfo.metadata) {
      console.log('Metadata:', errorInfo.metadata);
    }

    if (errorInfo.stack) {
      console.log('Stack:', errorInfo.stack);
    }

    console.groupEnd();
  }

  /**
   * Get console style based on severity
   */
  private getConsoleStyle(severity: ErrorSeverity): string {
    const styles: Record<ErrorSeverity, string> = {
      [ErrorSeverity.LOW]: 'color: #0ea5e9; font-weight: bold',
      [ErrorSeverity.MEDIUM]: 'color: #f59e0b; font-weight: bold',
      [ErrorSeverity.HIGH]: 'color: #ef4444; font-weight: bold',
      [ErrorSeverity.CRITICAL]: 'color: #dc2626; font-weight: bold; font-size: 14px'
    };

    return styles[severity];
  }

  /**
   * Log to external service (production)
   * Replace with actual service like Sentry
   */
  private logToService(errorInfo: ErrorInfo): void {
    // Example: Send to error tracking service
    // Sentry.captureException(errorInfo);

    // For now, still log to console in production
    console.error('[Error]', errorInfo);
  }
}

// Singleton instance
export const errorLogger = new ErrorLogger();

/**
 * Handle errors with logging and user notification
 */
export const handleError = (
  error: unknown,
  context?: Record<string, any>
): AppError => {
  let appError: AppError;

  // Convert to AppError if needed
  if (error instanceof AppError) {
    appError = error;
  } else if (error instanceof Error) {
    appError = new AppError(
      error.message,
      ErrorCategory.UNKNOWN,
      ErrorSeverity.MEDIUM,
      undefined,
      { originalError: error.name }
    );
  } else {
    appError = new AppError(
      'An unknown error occurred',
      ErrorCategory.UNKNOWN,
      ErrorSeverity.MEDIUM,
      undefined,
      { error: String(error) }
    );
  }

  // Log the error
  errorLogger.log(appError, context);

  return appError;
};

/**
 * Convert fetch errors to AppError
 */
export const handleFetchError = async (response: Response): Promise<never> => {
  const statusCode = response.status;
  let message = `HTTP ${statusCode}: ${response.statusText}`;
  let category = ErrorCategory.NETWORK;
  let severity = ErrorSeverity.MEDIUM;

  // Try to parse error response
  try {
    const data = await response.json();
    message = data.message || message;
  } catch {
    // Response body is not JSON, use status text
  }

  // Categorize by status code
  if (statusCode === 401 || statusCode === 403) {
    category = ErrorCategory.AUTHENTICATION;
    severity = ErrorSeverity.HIGH;
  } else if (statusCode === 404) {
    category = ErrorCategory.NOT_FOUND;
    severity = ErrorSeverity.LOW;
  } else if (statusCode >= 500) {
    category = ErrorCategory.SERVER;
    severity = ErrorSeverity.HIGH;
  } else if (statusCode >= 400) {
    category = ErrorCategory.CLIENT;
    severity = ErrorSeverity.MEDIUM;
  }

  const error = new AppError(message, category, severity, undefined, {
    statusCode,
    url: response.url
  });

  errorLogger.log(error);
  throw error;
};

/**
 * Wrap async functions with error handling
 */
export const withErrorHandling = <T extends (...args: any[]) => Promise<any>>(
  fn: T,
  context?: Record<string, any>
): T => {
  return (async (...args: Parameters<T>) => {
    try {
      return await fn(...args);
    } catch (error) {
      throw handleError(error, context);
    }
  }) as T;
};

/**
 * Safe async wrapper that returns [error, data] tuple
 */
export const safeAsync = async <T>(
  promise: Promise<T>
): Promise<[AppError | null, T | null]> => {
  try {
    const data = await promise;
    return [null, data];
  } catch (error) {
    const appError = handleError(error);
    return [appError, null];
  }
};

/**
 * Assert condition or throw error
 */
export const assert = (
  condition: boolean,
  message: string,
  category: ErrorCategory = ErrorCategory.VALIDATION
): void => {
  if (!condition) {
    const error = new AppError(message, category, ErrorSeverity.MEDIUM);
    errorLogger.log(error);
    throw error;
  }
};

/**
 * Create user-friendly error message
 */
export const getUserErrorMessage = (error: unknown): string => {
  if (error instanceof AppError) {
    return error.userMessage;
  }

  if (error instanceof Error) {
    return 'An unexpected error occurred. Please try again.';
  }

  return 'Something went wrong. Please try again later.';
};

export { AuthenticationError, ValidationError };
