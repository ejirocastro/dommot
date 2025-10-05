/**
 * SkipLink Component
 *
 * Allows keyboard users to skip to main content, bypassing navigation.
 * Required for WCAG 2.1 AA compliance.
 */

'use client';

import React from 'react';

export const SkipLink: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-sky-600 focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
    >
      Skip to main content
    </a>
  );
};
