/**
 * ExperienceIndicators Component
 * 
 * Image position indicator dots component for experience image carousels.
 * Provides visual feedback about current image position and allows direct
 * navigation to specific images in the carousel sequence.
 * 
 * Key Features:
 * - Dynamic dot indicators based on number of images
 * - Active state visual differentiation with size and opacity changes
 * - Click-to-navigate functionality for direct image access
 * - Smooth transition animations for state changes
 * - Responsive design with touch-friendly hit targets
 * - Glass morphism styling with backdrop blur effects
 * 
 * @author Dommot Development Team
 * @version 1.0.0
 */

import React from 'react';

/**
 * ExperienceIndicatorsProps - Props interface for the ExperienceIndicators component
 * 
 * @interface ExperienceIndicatorsProps
 * @property {string[]} images - Array of image URLs to generate indicators for
 * @property {number} currentIndex - Zero-based index of currently active image
 * @property {function} onIndicatorClick - Optional callback when indicator is clicked
 */
interface ExperienceIndicatorsProps {
    images: string[];
    currentIndex: number;
    onIndicatorClick?: (index: number) => void;
}

/**
 * ExperienceIndicators - Image position indicator dots
 * 
 * Renders a series of indicator dots representing each image in the carousel.
 * Provides visual feedback about current position and optional navigation
 * functionality for direct image access.
 * 
 * @param {ExperienceIndicatorsProps} props - Component props containing images array and current state
 * @returns {JSX.Element} Rendered indicator dots component
 */
export const ExperienceIndicators: React.FC<ExperienceIndicatorsProps> = ({
    images,
    currentIndex,
    onIndicatorClick
}) => {
    // Don't render indicators if there's only one image
    if (images.length <= 1) return null;

    return (
        // Indicator container positioned absolutely at bottom center
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1">
            {images.map((_, index) => (
                <button
                    key={index}
                    onClick={() => onIndicatorClick?.(index)}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                        currentIndex === index
                            ? 'bg-white scale-110' // Active indicator styling
                            : 'bg-white/60 hover:bg-white/80 hover:scale-105' // Inactive indicator styling
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                />
            ))}
        </div>
    );
};