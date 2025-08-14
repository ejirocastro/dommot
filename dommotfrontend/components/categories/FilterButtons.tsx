/**
 * FilterButtons Component
 * 
 * Desktop-only filter action buttons providing advanced filtering and display options.
 * Features glass morphism design with interactive hover effects and professional styling.
 * Offers users additional control over listing display and filtering criteria.
 * 
 * Key Features:
 * - Desktop-only visibility (hidden on smaller screens)
 * - Glass morphism background with backdrop blur effects
 * - Interactive hover states with border and background transitions
 * - Professional button styling with consistent spacing
 * - Filter icon integration for clear functionality indication
 * - Shadow effects for depth and visual hierarchy
 * 
 * @author Dommot Development Team
 * @version 1.0.0
 */

import React from 'react';
import { Filter } from 'lucide-react';

/**
 * FilterButtons - Desktop filter action buttons
 * 
 * Renders a set of action buttons for advanced filtering and display options.
 * Only visible on desktop screens (lg and above) to maintain clean mobile layout.
 * Provides users with additional tools for customizing their browsing experience.
 * 
 * @returns {JSX.Element} Rendered filter buttons component
 */
export const FilterButtons: React.FC = () => {
    return (
        // Desktop-only container with horizontal layout and spacing
        <div className="hidden lg:flex items-center space-x-3 ml-6 flex-shrink-0">
            {/* Filters button with icon */}
            <button className="flex items-center space-x-2 border-2 border-sky-200/50 rounded-xl px-4 py-3 hover:border-sky-400 hover:bg-sky-50 transition-all duration-300 bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg">
                <Filter className="w-4 h-4 text-sky-700" />
                <span className="text-sm font-medium text-sky-800">Filters</span>
            </button>
            
            {/* Display total button */}
            <button className="flex items-center space-x-2 border-2 border-sky-200/50 rounded-xl px-4 py-3 hover:border-sky-400 hover:bg-sky-50 transition-all duration-300 bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg">
                <span className="text-sm font-medium text-sky-800">Display total</span>
            </button>
        </div>
    );
};
