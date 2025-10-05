/**
 * Providers Component
 *
 * Wraps the application with necessary providers and error boundaries.
 * This keeps the root layout clean and separates concerns.
 */

'use client';

import React from 'react';
import { ErrorBoundary } from '../components/common/ErrorBoundary';

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ErrorBoundary>
      {children}
    </ErrorBoundary>
  );
}
