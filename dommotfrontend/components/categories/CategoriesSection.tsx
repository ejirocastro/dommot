/**
 * CategoriesSection Component
 * 
 * Sticky navigation section that combines category filters and filter controls.
 * Features dynamic styling based on scroll position for enhanced visual feedback
 * and optimal user experience. Provides a comprehensive filtering interface
 * with glass morphism design elements.
 * 
 * Key Features:
 * - Sticky positioning with dynamic scroll-based styling
 * - Glass morphism background with backdrop blur effects
 * - Responsive layout with proper spacing and alignment
 * - Integration of category filters and action buttons
 * - Smooth transitions between scroll states
 * - Enhanced shadow and backdrop effects based on scroll position
 * 
 * @author Dommot Development Team
 * @version 1.0.0
 */

'use client';

import React from 'react';
import { Categories } from './Categories';
import { FilterButtons } from './FilterButtons';
import { Category } from '../../types';

/**
 * CategoriesSectionProps - Props interface for the CategoriesSection component
 * 
 * @interface CategoriesSectionProps
 * @property {number} scrollY - Current vertical scroll position for dynamic styling
 * @property {Category[]} categories - Array of category objects for filtering
 */
interface CategoriesSectionProps {
    scrollY: number;
    categories: Category[];
}

/**
 * CategoriesSection - Sticky category filtering section
 * 
 * Renders a sticky section containing category filters and filter controls.
 * Adapts styling based on scroll position to provide visual feedback and
 * maintain usability throughout the user's browsing experience.
 * 
 * @param {CategoriesSectionProps} props - Component props containing scroll position and categories
 * @returns {JSX.Element} Rendered categories section
 */
export const CategoriesSection: React.FC<CategoriesSectionProps> = ({ scrollY, categories }) => {
    return (
        // Sticky section with dynamic styling based on scroll position
        <div className={`border-b border-sky-200/50 sticky z-40 transition-all duration-300 ${
            // Enhanced styling when scrolled down for better visibility
            scrollY > 100 
                ? 'top-16 lg:top-20 bg-white/95 backdrop-blur-xl shadow-lg' 
                // Default styling for top of page
                : 'top-16 lg:top-20 bg-white/90 backdrop-blur-md shadow-sm'
        }`}>
            {/* Content container with responsive padding */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main content layout with space-between alignment */}
                <div className="flex items-center justify-between py-4 lg:py-6">
                    {/* Category filters on the left */}
                    <Categories categories={categories} />
                    
                    {/* Filter action buttons on the right */}
                    <FilterButtons />
                </div>
            </div>
        </div>
    );
};