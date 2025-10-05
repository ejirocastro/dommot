/**
 * Global Error Page
 *
 * Next.js error boundary for the entire application.
 * Catches unhandled errors in the app directory and displays
 * a user-friendly error page with recovery options.
 */

'use client';

import React, { useEffect } from 'react';
import { AlertTriangle, RefreshCw, Home, Bug } from 'lucide-react';
import { handleError, getUserErrorMessage } from '../utils/errorHandler';

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // Log error when component mounts
    handleError(error, {
      digest: error.digest,
      source: 'app/error.tsx'
    });
  }, [error]);

  const userMessage = getUserErrorMessage(error);
  const isDevelopment = process.env.NODE_ENV === 'development';

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        {/* Main Error Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header with Icon */}
          <div className="bg-gradient-to-r from-red-500 to-red-600 p-8 text-white">
            <div className="flex items-center justify-center mb-4">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <AlertTriangle className="w-10 h-10" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-center mb-2">
              Something Went Wrong
            </h1>
            <p className="text-red-100 text-center text-lg">
              We encountered an unexpected error
            </p>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* User-friendly Message */}
            <div className="mb-6">
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <p className="text-gray-700">{userMessage}</p>
              </div>
            </div>

            {/* Developer Info */}
            {isDevelopment && (
              <details className="mb-6 bg-gray-50 rounded-lg overflow-hidden">
                <summary className="px-4 py-3 bg-gray-100 cursor-pointer font-medium text-gray-700 flex items-center gap-2 hover:bg-gray-200 transition-colors">
                  <Bug className="w-4 h-4" />
                  Developer Information
                </summary>
                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-1">Error Message:</h3>
                    <pre className="bg-white p-3 rounded border border-gray-200 text-xs overflow-auto">
                      {error.message}
                    </pre>
                  </div>
                  {error.digest && (
                    <div>
                      <h3 className="text-sm font-semibold text-gray-700 mb-1">Digest:</h3>
                      <code className="bg-white px-2 py-1 rounded border border-gray-200 text-xs">
                        {error.digest}
                      </code>
                    </div>
                  )}
                  {error.stack && (
                    <div>
                      <h3 className="text-sm font-semibold text-gray-700 mb-1">Stack Trace:</h3>
                      <pre className="bg-white p-3 rounded border border-gray-200 text-xs overflow-auto max-h-60">
                        {error.stack}
                      </pre>
                    </div>
                  )}
                </div>
              </details>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={reset}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-sky-500 to-sky-600 text-white rounded-xl hover:from-sky-600 hover:to-sky-700 transition-all shadow-lg hover:shadow-xl font-semibold"
              >
                <RefreshCw className="w-5 h-5" />
                Try Again
              </button>
              <a
                href="/"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-white text-gray-700 rounded-xl hover:bg-gray-50 transition-colors border-2 border-gray-200 font-semibold"
              >
                <Home className="w-5 h-5" />
                Back to Home
              </a>
            </div>

            {/* Help Text */}
            <p className="text-center text-sm text-gray-500 mt-6">
              If this problem persists, please contact support at{' '}
              <a href="mailto:support@dommot.com" className="text-sky-600 hover:text-sky-700 font-medium">
                support@dommot.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
