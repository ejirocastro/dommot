/**
 * SearchField Component
 * 
 * Individual search input field component used within the SearchBar.
 * Provides consistent styling, hover effects, and responsive behavior
 * for different search criteria (location, dates, guests).
 * 
 * Features:
 * - Consistent visual design with hover effects
 * - Optional right border for field separation
 * - Controlled input with external state management
 * - Smooth color transitions and animations
 * - Responsive typography and spacing
 * 
 * @author Dommot Development Team
 * @version 1.0.0
 */

'use client';

import React from 'react';
import { SearchFieldProps } from '../../types';

/**
 * SearchField - Individual search input field
 * 
 * Renders a single search input field with label, placeholder text,
 * and consistent styling. Integrates with parent SearchBar component
 * for cohesive search interface design.
 * 
 * @param props - Component props from SearchFieldProps interface
 * @param props.label - Display label for the input field
 * @param props.placeholder - Placeholder text for empty input
 * @param props.value - Current input value (controlled component)
 * @param props.onChange - Input change handler for state updates
 * @param props.hasBorder - Whether to show right border for field separation
 * @returns Rendered search field component
 */
export const SearchField: React.FC<SearchFieldProps> = ({
    label,
    placeholder,
    value,
    onChange,
    hasBorder
}) => {
    return (
        /* Field container with hover effects and conditional border */
        <div className={`w-full px-6 py-4 hover:bg-sky-50/50 transition-all duration-300 group ${
            hasBorder ? 'border-r border-sky-100/50' : '' // Optional right border for field separation
        }`}>
            {/* Field label with hover color transition */}
            <div className="text-xs font-semibold text-sky-800 mb-1 group-hover:text-sky-700 transition-colors">
                {label}
            </div>
            
            {/* Main input field with transparent background */}
            <input
                type="text"
                placeholder={placeholder}
                className="w-full text-sm text-gray-700 placeholder-gray-400 bg-transparent outline-none font-medium"
                value={value}
                onChange={onChange}
            />
        </div>
    );
};