/**
 * LoadMoreButton Component
 * 
 * Interactive call-to-action button for loading additional property listings.
 * Features an engaging gradient design with animated sparkle icon and hover effects.
 * Provides visual feedback through scale transformations and shadow enhancements
 * to encourage user engagement and content discovery.
 * 
 * Key Features:
 * - Gradient background with sky color palette
 * - Animated sparkle icon with pulse effect
 * - Hover effects including scale, shadow, and vertical translation
 * - Centered positioning with responsive spacing
 * - Professional typography and consistent button styling
 * - Enhanced visual feedback for improved user experience
 * 
 * @author Dommot Development Team
 * @version 1.0.0
 */

import React from 'react';
import { Sparkles } from 'lucide-react';

/**
 * LoadMoreButton - Pagination and content discovery button
 * 
 * Renders an attractive call-to-action button that encourages users to
 * load more property listings. Features engaging animations and hover
 * effects to enhance user interaction and content discovery.
 * 
 * @returns {JSX.Element} Rendered load more button component
 */
export const LoadMoreButton: React.FC = () => {
    return (
        // Centered container with top margin for spacing
        <div className="flex justify-center mt-12">
            {/* Main call-to-action button with gradient and hover effects */}
            <button className="bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                {/* Button content with icon and text */}
                <div className="flex items-center space-x-2">
                    <span>Show more places</span>
                    {/* Animated sparkle icon for visual appeal */}
                    <Sparkles className="w-5 h-5 animate-pulse" />
                </div>
            </button>
        </div>
    );
};
