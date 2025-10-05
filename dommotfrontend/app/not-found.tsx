/**
 * 404 Not Found Page
 *
 * Custom 404 page for handling missing routes and resources.
 * Provides helpful navigation and search options for users.
 */

'use client';

import React from 'react';
import Link from 'next/link';
import { Search, Home, ArrowLeft, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-sky-100 to-blue-100 rounded-full mb-6">
            <Compass className="w-16 h-16 text-sky-600" />
          </div>
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600 mb-4">
            404
          </h1>
        </div>

        {/* Message */}
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Quick Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
          <Link
            href="/"
            className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-gray-100"
          >
            <Home className="w-8 h-8 text-sky-600 mb-3" />
            <span className="font-semibold text-gray-900">Home</span>
            <span className="text-sm text-gray-500">Browse Stays</span>
          </Link>

          <Link
            href="/experiences"
            className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-gray-100"
          >
            <Compass className="w-8 h-8 text-sky-600 mb-3" />
            <span className="font-semibold text-gray-900">Experiences</span>
            <span className="text-sm text-gray-500">Discover More</span>
          </Link>

          <Link
            href="/search"
            className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-gray-100"
          >
            <Search className="w-8 h-8 text-sky-600 mb-3" />
            <span className="font-semibold text-gray-900">Search</span>
            <span className="text-sm text-gray-500">Find Listings</span>
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-700 rounded-xl hover:bg-gray-50 transition-colors border-2 border-gray-200 font-semibold shadow-lg"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-sky-500 to-sky-600 text-white rounded-xl hover:from-sky-600 hover:to-sky-700 transition-all shadow-lg hover:shadow-xl font-semibold"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
        </div>

        {/* Help Text */}
        <p className="text-sm text-gray-500 mt-8">
          Need help? Contact us at{' '}
          <a href="mailto:support@dommot.com" className="text-sky-600 hover:text-sky-700 font-medium">
            support@dommot.com
          </a>
        </p>
      </div>
    </div>
  );
}
