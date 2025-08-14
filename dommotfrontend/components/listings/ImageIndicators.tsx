/**
 * ImageIndicators Component
 * 
 * Visual indicator dots that display the current position within an image carousel.
 * Provides users with context about image navigation and total image count.
 * Features smooth animations, hover effects, and responsive design optimized
 * for overlay placement on listing images.
 * 
 * Key Features:
 * - Dynamic dot generation based on image array length
 * - Active state highlighting with scale and opacity variations
 * - Smooth transitions between different indicator states
 * - Centered positioning with transform-based alignment
 * - Hover effects for enhanced interactivity
 * - Minimalist design that doesn't obstruct image content
 * 
 * @author Dommot Development Team
 * @version 1.0.0
 */

import React from 'react';

/**
 * ImageIndicatorsProps - Props interface for the ImageIndicators component
 * 
 * @interface ImageIndicatorsProps
 * @property {string[]} images - Array of image URLs to generate indicators for
 * @property {number} currentIndex - Zero-based index of the currently displayed image
 */
interface ImageIndicatorsProps {
    images: string[];
    currentIndex: number;
}

/**
 * ImageIndicators - Carousel position indicator dots
 * 
 * Renders a row of small circular indicators showing the current position
 * within an image carousel. Each dot represents one image, with the active
 * image highlighted through increased opacity and scale.
 * 
 * @param {ImageIndicatorsProps} props - Component props containing images and current index
 * @returns {JSX.Element} Rendered indicator dots component
 */
export const ImageIndicators: React.FC<ImageIndicatorsProps> = ({ images, currentIndex }) => {
    return (
        // Absolute positioned container centered horizontally at bottom of image
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1">
            {/* Dynamic indicator dot generation for each image */}
            {images.map((_, idx) => (
                <div
                    key={idx}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        // Active indicator styling: full opacity white with scale increase
                        idx === currentIndex
                            ? 'bg-white scale-125'
                            // Inactive indicator styling: semi-transparent with hover effect
                            : 'bg-white/50 hover:bg-white/80'
                    }`}
                />
            ))}
        </div>
    );
};
