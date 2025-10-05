/**
 * VisuallyHidden Component
 *
 * Hides content visually but keeps it accessible to screen readers.
 * Used for labels, skip links, and other SR-only content.
 */

import React from 'react';

interface VisuallyHiddenProps {
  children: React.ReactNode;
  as?: React.ElementType;
}

export const VisuallyHidden: React.FC<VisuallyHiddenProps> = ({
  children,
  as = 'span'
}) => {
  const Component = as as React.ElementType;

  return (
    <Component className="sr-only">
      {children}
    </Component>
  );
};
