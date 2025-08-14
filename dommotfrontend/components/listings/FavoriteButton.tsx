/**
 * FavoriteButton Component
 * 
 * Interactive heart-shaped button for toggling favorite status on property listings.
 * Features smooth animations, visual feedback, and glass morphism design elements.
 * Provides clear visual distinction between favorited and non-favorited states
 * with engaging hover effects and scale transformations.
 * 
 * Key Features:
 * - Dynamic heart icon with fill/outline states based on favorite status
 * - Smooth scale animations on hover and active states
 * - Glass morphism background with backdrop blur effects
 * - Color transitions between inactive, hover, and active states
 * - Accessible button design with clear visual feedback
 * - Positioned absolutely for overlay placement on listing images
 * 
 * @author Dommot Development Team
 * @version 1.0.0
 */

'use client';

import React from 'react';
import { Heart } from 'lucide-react';

/**
 * FavoriteButtonProps - Props interface for the FavoriteButton component
 * 
 * @interface FavoriteButtonProps
 * @property {boolean} isFavorite - Current favorite state of the associated listing
 * @property {function} onToggleFavorite - Callback function to toggle favorite status
 */
interface FavoriteButtonProps {
    isFavorite: boolean;
    onToggleFavorite: () => void;
}

/**
 * FavoriteButton - Interactive favorite toggle button
 * 
 * Renders a heart-shaped button with dynamic styling based on favorite state.
 * Includes smooth animations, hover effects, and visual feedback for user interactions.
 * Designed to overlay on listing images with glass morphism aesthetics.
 * 
 * @param {FavoriteButtonProps} props - Component props containing favorite state and handler
 * @returns {JSX.Element} Rendered favorite button component
 */
export const FavoriteButton: React.FC<FavoriteButtonProps> = ({ isFavorite, onToggleFavorite }) => {
    return (
        // Absolute positioned button with glass morphism background and scale animations
        <button
            onClick={onToggleFavorite}
            className="absolute top-3 right-3 p-2 hover:scale-125 transition-all duration-300 bg-white/20 backdrop-blur-sm rounded-full"
        >
            {/* Heart icon with dynamic styling based on favorite state */}
            <Heart
                className={`w-5 h-5 transition-all duration-300 ${
                    // Favorited state: filled red heart with enlarged scale
                    isFavorite
                        ? 'fill-red-500 text-red-500 scale-125'
                        // Non-favorited state: outline heart with hover effects
                        : 'text-white fill-black/30 hover:fill-red-500/50 hover:text-red-500'
                }`}
            />
        </button>
    );
};