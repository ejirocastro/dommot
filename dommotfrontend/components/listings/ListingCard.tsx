/**
 * ListingCard Component
 * 
 * Complete property listing card component that combines image carousel, favorite functionality,
 * and property information into a cohesive, interactive card. Features smooth animations,
 * hover effects, and comprehensive state management for optimal user experience.
 * This is the primary component for displaying property listings across the platform.
 * 
 * Key Features:
 * - Composite card structure with image carousel and property details
 * - Staggered animation entrance based on card index position
 * - Interactive hover effects with scale transformations and shadow enhancements
 * - Integrated favorite button with heart animation
 * - Image navigation with visual indicators
 * - Responsive design with consistent aspect ratios
 * - Smooth transitions and modern card styling
 * 
 * @author Dommot Development Team
 * @version 1.0.0
 */

'use client';

import React from 'react';
import { ListingImage } from './ListingImage';
import { FavoriteButton } from './FavoriteButton';
import { ImageIndicators } from './ImageIndicators';
import { ListingInfo } from './ListingInfo';
import { Listing } from '../../types';

/**
 * ListingCardProps - Props interface for the ListingCard component
 * 
 * @interface ListingCardProps
 * @property {Listing} listing - Complete listing data including images, pricing, and details
 * @property {number} index - Position index for staggered animation timing
 * @property {number} currentImageIndex - Currently displayed image index in carousel
 * @property {boolean} isFavorite - Whether this listing is marked as favorite
 * @property {function} onImageNext - Handler for advancing to next image
 * @property {function} onImagePrev - Handler for going to previous image
 * @property {function} onToggleFavorite - Handler for toggling favorite status
 */
interface ListingCardProps {
    listing: Listing;
    index: number;
    currentImageIndex: number;
    isFavorite: boolean;
    onImageNext: () => void;
    onImagePrev: () => void;
    onToggleFavorite: () => void;
}

/**
 * ListingCard - Complete property listing display card
 * 
 * Renders a comprehensive property listing card combining image carousel,
 * favorite functionality, and detailed property information. Includes
 * interactive elements, smooth animations, and responsive design patterns.
 * 
 * @param {ListingCardProps} props - Component props containing listing data and handlers
 * @returns {JSX.Element} Rendered listing card component
 */
export const ListingCard: React.FC<ListingCardProps> = ({
    listing,
    index,
    currentImageIndex,
    isFavorite,
    onImageNext,
    onImagePrev,
    onToggleFavorite
}) => {
    return (
        // Main card container with hover effects and staggered animation timing
        <div
            className="group cursor-pointer transform hover:scale-105 transition-all duration-500"
            style={{ animationDelay: `${index * 100}ms` }} // Staggered entrance animation
        >
            {/* Image section container with overlay elements */}
            <div className="relative overflow-hidden rounded-2xl mb-3 shadow-lg hover:shadow-2xl transition-all duration-500">
                {/* Main image carousel component */}
                <ListingImage
                    listing={listing}
                    currentImageIndex={currentImageIndex}
                    onImageNext={onImageNext}
                    onImagePrev={onImagePrev}
                />
                
                {/* Favorite button overlay - positioned absolutely in top right */}
                <FavoriteButton isFavorite={isFavorite} onToggleFavorite={onToggleFavorite} />
                
                {/* Image position indicators - positioned absolutely at bottom center */}
                <ImageIndicators images={listing.images} currentIndex={currentImageIndex} />
            </div>
            
            {/* Property information section below image */}
            <ListingInfo listing={listing} />
        </div>
    );
};