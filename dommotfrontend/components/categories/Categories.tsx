/**
 * Categories Component
 * 
 * Horizontal scrolling container that displays property category filters.
 * Provides users with quick access to different property types and categories
 * through an intuitive, scrollable interface with proper overflow handling.
 * 
 * Key Features:
 * - Horizontal scrolling with hidden scrollbar for clean aesthetics
 * - Responsive spacing between category items
 * - Dynamic category rendering from data source
 * - Optimized for touch and mouse interactions
 * - Consistent visual alignment and spacing
 * 
 * @author Dommot Development Team
 * @version 1.0.0
 */

import React from 'react';
import { CategoryItem } from './CategoryItem';
import { Category } from '../../types';

/**
 * CategoriesProps - Props interface for the Categories component
 * 
 * @interface CategoriesProps
 * @property {Category[]} categories - Array of category objects to display
 */
interface CategoriesProps {
    categories: Category[];
}

/**
 * Categories - Horizontal category filter container
 * 
 * Renders a scrollable list of category filter items, allowing users
 * to browse and select different property categories. Handles overflow
 * gracefully with horizontal scrolling capabilities.
 * 
 * @param {CategoriesProps} props - Component props containing category data
 * @returns {JSX.Element} Rendered categories container
 */
export const Categories: React.FC<CategoriesProps> = ({ categories }) => {
    return (
        // Horizontal scrolling container with responsive spacing
        <div className="flex items-center space-x-4 lg:space-x-8 overflow-x-auto scrollbar-hide">
            {/* Dynamic category item generation */}
            {categories.map((category) => (
                <CategoryItem key={category.name} category={category} />
            ))}
        </div>
    );
};
