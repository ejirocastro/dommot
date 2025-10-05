/**
 * Error Types and Interfaces
 *
 * Defines custom error classes and types for comprehensive error handling
 * across the application. Supports error categorization, user-friendly messages,
 * and developer debugging information.
 */

/**
 * Error severity levels for categorization and logging
 */
export enum ErrorSeverity {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  CRITICAL = 'critical'
}

/**
 * Error categories for better error handling and routing
 */
export enum ErrorCategory {
  NETWORK = 'network',
  AUTHENTICATION = 'authentication',
  VALIDATION = 'validation',
  NOT_FOUND = 'not_found',
  PERMISSION = 'permission',
  SERVER = 'server',
  CLIENT = 'client',
  UNKNOWN = 'unknown'
}

/**
 * Base error information interface
 */
export interface ErrorInfo {
  message: string;
  userMessage?: string;
  category: ErrorCategory;
  severity: ErrorSeverity;
  timestamp: number;
  stack?: string;
  metadata?: Record<string, any>;
}

/**
 * Custom Application Error class
 * Extends native Error with additional context for better debugging
 */
export class AppError extends Error {
  public readonly category: ErrorCategory;
  public readonly severity: ErrorSeverity;
  public readonly userMessage: string;
  public readonly timestamp: number;
  public readonly metadata?: Record<string, any>;

  constructor(
    message: string,
    category: ErrorCategory = ErrorCategory.UNKNOWN,
    severity: ErrorSeverity = ErrorSeverity.MEDIUM,
    userMessage?: string,
    metadata?: Record<string, any>
  ) {
    super(message);
    this.name = 'AppError';
    this.category = category;
    this.severity = severity;
    this.userMessage = userMessage || this.getDefaultUserMessage(category);
    this.timestamp = Date.now();
    this.metadata = metadata;

    // Maintains proper stack trace for where error was thrown
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, AppError);
    }
  }

  /**
   * Get user-friendly message based on error category
   */
  private getDefaultUserMessage(category: ErrorCategory): string {
    const messages: Record<ErrorCategory, string> = {
      [ErrorCategory.NETWORK]: 'Network error. Please check your connection and try again.',
      [ErrorCategory.AUTHENTICATION]: 'Authentication failed. Please log in again.',
      [ErrorCategory.VALIDATION]: 'Please check your input and try again.',
      [ErrorCategory.NOT_FOUND]: 'The requested resource was not found.',
      [ErrorCategory.PERMISSION]: 'You do not have permission to perform this action.',
      [ErrorCategory.SERVER]: 'Server error. Please try again later.',
      [ErrorCategory.CLIENT]: 'Something went wrong. Please refresh and try again.',
      [ErrorCategory.UNKNOWN]: 'An unexpected error occurred. Please try again.'
    };

    return messages[category];
  }

  /**
   * Convert error to ErrorInfo for logging
   */
  toErrorInfo(): ErrorInfo {
    return {
      message: this.message,
      userMessage: this.userMessage,
      category: this.category,
      severity: this.severity,
      timestamp: this.timestamp,
      stack: this.stack,
      metadata: this.metadata
    };
  }
}

/**
 * Network Error - for API and fetch failures
 */
export class NetworkError extends AppError {
  constructor(message: string, userMessage?: string, metadata?: Record<string, any>) {
    super(message, ErrorCategory.NETWORK, ErrorSeverity.MEDIUM, userMessage, metadata);
    this.name = 'NetworkError';
  }
}

/**
 * Authentication Error - for auth failures
 */
export class AuthenticationError extends AppError {
  constructor(message: string, userMessage?: string, metadata?: Record<string, any>) {
    super(message, ErrorCategory.AUTHENTICATION, ErrorSeverity.HIGH, userMessage, metadata);
    this.name = 'AuthenticationError';
  }
}

/**
 * Validation Error - for form and input validation
 */
export class ValidationError extends AppError {
  constructor(message: string, userMessage?: string, metadata?: Record<string, any>) {
    super(message, ErrorCategory.VALIDATION, ErrorSeverity.LOW, userMessage, metadata);
    this.name = 'ValidationError';
  }
}

/**
 * Not Found Error - for missing resources
 */
export class NotFoundError extends AppError {
  constructor(message: string, userMessage?: string, metadata?: Record<string, any>) {
    super(message, ErrorCategory.NOT_FOUND, ErrorSeverity.MEDIUM, userMessage, metadata);
    this.name = 'NotFoundError';
  }
}
