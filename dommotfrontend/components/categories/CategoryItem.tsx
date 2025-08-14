/**
 * CategoryItem Component
 * 
 * Individual category filter button with interactive states and visual feedback.
 * Features dynamic styling based on active state, smooth animations, and engaging
 * hover effects. Provides clear visual hierarchy with icon and text elements
 * for intuitive category selection.
 * 
 * Key Features:
 * - Active state indication with gradient background and bottom border
 * - Interactive hover effects with scale transformations
 * - Icon and text layout with proper spacing and alignment
 * - Smooth color and opacity transitions
 * - Responsive text sizing and layout
 * - Visual feedback through scale and color changes
 * 
 * @author Dommot Development Team
 * @version 1.0.0
 */

import React from 'react';
import { Category } from '../../types';

/**
 * CategoryItemProps - Props interface for the CategoryItem component
 * 
 * @interface CategoryItemProps
 * @property {Category} category - Category object containing name, icon, and active state
 */
interface CategoryItemProps {
    category: Category;
}

/**
 * CategoryItem - Interactive category filter button
 * 
 * Renders an individual category filter with icon and label. Provides
 * visual feedback for active and hover states with smooth animations
 * and professional styling consistent with the overall design system.
 * 
 * @param {CategoryItemProps} props - Component props containing category data
 * @returns {JSX.Element} Rendered category item button
 */
export const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {
    return (
        // Interactive category button with dynamic styling
        <button
            className={`flex flex-col items-center min-w-0 flex-shrink-0 group pb-3 px-2 rounded-lg transition-all duration-300 relative ${
                // Active state styling with gradient background
                category.active
                    ? 'border-b-2 border-transparent bg-gradient-to-t from-sky-50 to-transparent'
                    // Inactive state with hover effects
                    : 'border-b-2 border-transparent hover:bg-gradient-to-t hover:from-sky-50 hover:to-transparent'
            }`}
        >
            {/* Active state indicator - bottom accent line */}
            {category.active && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-sky-500 to-sky-600 rounded-full"></div>
            )}
            
            {/* Category icon with responsive sizing and hover effects */}
            <div className={`text-xl lg:text-2xl mb-2 transition-all duration-300 ${
                // Active icon styling: full opacity and enlarged scale
                category.active 
                    ? 'opacity-100 transform scale-110' 
                    // Inactive icon styling: reduced opacity with hover effects
                    : 'opacity-60 group-hover:opacity-100 group-hover:transform group-hover:scale-105'
            }`}>
                {category.icon}
            </div>
            
            {/* Category name with dynamic styling */}
            <span className={`text-xs font-medium whitespace-nowrap transition-colors duration-300 ${
                // Active text styling: sky color and semibold weight
                category.active 
                    ? 'text-sky-800 font-semibold' 
                    // Inactive text styling: gray with hover transition
                    : 'text-gray-500 group-hover:text-sky-700'
            }`}>
                {category.name}
            </span>
        </button>
    );
};