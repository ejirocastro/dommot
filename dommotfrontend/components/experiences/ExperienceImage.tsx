/**
 * ExperienceImage Component
 * 
 * Interactive image carousel component for experience listings featuring navigation controls,
 * animated transitions, and contextual badges. Provides smooth image browsing experience
 * with hover-activated controls and visual feedback elements. Supports responsive design
 * and optimized image loading for various device sizes.
 * 
 * Key Features:
 * - Responsive image display with object-cover for consistent aspect ratios
 * - Hover-activated navigation controls with smooth opacity transitions
 * - Image zoom effect on hover for enhanced visual engagement
 * - Dynamic badge display with color-coded experience types
 * - Glass morphism design elements with backdrop blur effects
 * - Gradient overlay for improved text readability
 * - Accessible navigation with proper button labeling
 * 
 * @author Dommot Development Team
 * @version 1.0.0
 */

import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Experience, ExperienceBadge } from '../../types';

/**
 * ExperienceImageProps - Props interface for the ExperienceImage component
 * 
 * @interface ExperienceImageProps
 * @property {Experience} experience - Complete experience object containing images and metadata
 * @property {number} currentImageIndex - Zero-based index of currently displayed image
 * @property {function} onImageNext - Handler for advancing to next image in carousel
 * @property {function} onImagePrev - Handler for going to previous image in carousel
 * @property {function} getBadgeColor - Function to get badge color based on badge type
 */
interface ExperienceImageProps {
    experience: Experience;
    currentImageIndex: number;
    onImageNext: () => void;
    onImagePrev: () => void;
    getBadgeColor: (badge: ExperienceBadge) => string;
}

/**
 * ExperienceImage - Interactive experience image carousel
 * 
 * Renders the main image display for experience listings with navigation controls,
 * experience badges, and interactive hover effects. Manages image transitions and
 * provides visual feedback for user interactions.
 * 
 * @param {ExperienceImageProps} props - Component props containing experience data and navigation handlers
 * @returns {JSX.Element} Rendered image carousel component
 */
const ExperienceImage: React.FC<ExperienceImageProps> = ({
    experience,
    currentImageIndex,
    onImageNext,
    onImagePrev,
    getBadgeColor
}) => {
    return (
        // Image container with relative positioning for overlays
        <div className="relative">
            {/* Main experience image with hover zoom effect */}
            <img
                src={experience.images[currentImageIndex]}
                alt={experience.title}
                className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            
            {/* Gradient overlay for improved contrast on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Experience type badge with dynamic color coding */}
            {experience.badge && (
                <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-semibold shadow-lg backdrop-blur-sm ${getBadgeColor(experience.badge)}`}>
                    {experience.badge}
                </div>
            )}

            {/* Image Navigation Controls - Show on hover */}
            {experience.images.length > 1 && (
                <>
                    {/* Previous image button */}
                    <button
                        onClick={onImagePrev}
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110"
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="w-4 h-4 text-gray-800" />
                    </button>
                    
                    {/* Next image button */}
                    <button
                        onClick={onImageNext}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110"
                        aria-label="Next image"
                    >
                        <ChevronRight className="w-4 h-4 text-gray-800" />
                    </button>
                </>
            )}
        </div>
    );
};

export default ExperienceImage;