/**
 * CategoryRow Component
 * 
 * Horizontal scrolling container that displays property listings grouped by category.
 * Features smooth scrolling navigation, touch/swipe gestures, image carousel management,
 * and favorites functionality. Provides an Airbnb-style browsing experience with
 * optimized performance and responsive design.
 * 
 * Key Features:
 * - Horizontal scrolling with smooth animations and scroll indicators
 * - Touch/swipe gesture support for mobile devices
 * - Dynamic scroll arrow visibility based on scroll position
 * - Image carousel state management for individual listings
 * - Favorites toggle functionality with Set-based state management
 * - Responsive card sizing and spacing across device breakpoints
 * - Performance optimizations with scroll event debouncing
 * 
 * @author Dommot Development Team
 * @version 1.0.0
 */

'use client';

import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { ListingCard } from './ListingCard';
import { Listing } from '../../types';

/**
 * CategoryRowProps - Props interface for the CategoryRow component
 * 
 * @interface CategoryRowProps
 * @property {string} categoryName - Display name for the category section
 * @property {string} categoryIcon - Emoji or icon string representing the category
 * @property {Listing[]} listings - Array of property listings to display in this row
 * @property {Record<number, number>} currentImageIndex - Current image index for each listing's carousel
 * @property {function} setCurrentImageIndex - State setter for updating image indices
 * @property {Set<number>} favorites - Set of favorited listing IDs for quick lookups
 * @property {function} setFavorites - State setter for updating favorites set
 */
interface CategoryRowProps {
    categoryName: string;
    categoryIcon: string;
    listings: Listing[];
    currentImageIndex: Record<number, number>;
    setCurrentImageIndex: React.Dispatch<React.SetStateAction<Record<number, number>>>;
    favorites: Set<number>;
    setFavorites: React.Dispatch<React.SetStateAction<Set<number>>>;
}

/**
 * CategoryRow - Horizontal scrolling property listings container
 * 
 * Renders a categorized section of property listings with horizontal scrolling,
 * navigation controls, and interactive features. Manages scroll state, touch gestures,
 * and listing-specific interactions like image carousels and favorites.
 * 
 * @param {CategoryRowProps} props - Component props containing listings and state management
 * @returns {JSX.Element|null} Rendered category row or null if no listings
 */
export const CategoryRow: React.FC<CategoryRowProps> = ({
    categoryName,
    categoryIcon,
    listings,
    currentImageIndex,
    setCurrentImageIndex,
    favorites,
    setFavorites
}) => {
    // DOM reference for scroll container manipulation
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Scroll state management for navigation arrow visibility
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false); // Prevents rapid scroll triggering

    /**
     * Evaluates current scroll position and updates navigation arrow visibility
     * Calculates whether content can be scrolled in either direction
     */
    const checkScrollPosition = () => {
        if (!scrollContainerRef.current) return;

        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        setCanScrollLeft(scrollLeft > 0); // Can scroll left if not at start
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1); // Can scroll right if not at end (with 1px buffer)
    };

    /**
     * Performs smooth horizontal scrolling in the specified direction
     * @param {('left'|'right')} direction - Direction to scroll the container
     */
    const scrollTo = (direction: 'left' | 'right') => {
        if (!scrollContainerRef.current || isScrolling) return;

        setIsScrolling(true); // Prevent multiple simultaneous scroll operations
        const container = scrollContainerRef.current;
        const scrollAmount = container.clientWidth * 0.8; // Scroll 80% of visible width for optimal UX
        const targetScroll = direction === 'left'
            ? container.scrollLeft - scrollAmount
            : container.scrollLeft + scrollAmount;

        // Smooth scroll animation
        container.scrollTo({
            left: targetScroll,
            behavior: 'smooth'
        });

        // Reset scrolling flag after animation completes (500ms matches typical smooth scroll duration)
        setTimeout(() => setIsScrolling(false), 500);
    };

    // Touch/swipe gesture state management for mobile interactions
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    /**
     * Handles touch start event for swipe gesture detection
     * @param {React.TouchEvent} e - Touch start event
     */
    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null); // Reset end position
        setTouchStart(e.targetTouches[0].clientX); // Capture starting X coordinate
    };

    /**
     * Tracks touch movement for swipe distance calculation
     * @param {React.TouchEvent} e - Touch move event
     */
    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX); // Update end position continuously
    };

    /**
     * Evaluates completed touch gesture and triggers appropriate scroll action
     * Requires minimum 50px swipe distance to prevent accidental triggers
     */
    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;  // Swipe left to scroll right (show next items)
        const isRightSwipe = distance < -50; // Swipe right to scroll left (show previous items)

        // Execute scroll only if direction is valid and scrolling is possible
        if (isLeftSwipe && canScrollRight) {
            scrollTo('right');
        }
        if (isRightSwipe && canScrollLeft) {
            scrollTo('left');
        }
    };

    /**
     * Initialize scroll position checking and set up scroll event listener
     * Cleans up event listener on component unmount or listings change
     */
    useEffect(() => {
        checkScrollPosition(); // Initial check
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', checkScrollPosition);
            return () => container.removeEventListener('scroll', checkScrollPosition);
        }
    }, [listings]); // Re-run when listings change

    /**
     * Advances to the next image in a listing's carousel
     * @param {number} listingId - ID of the listing to update
     */
    const handleImageNext = (listingId: number) => {
        setCurrentImageIndex(prev => {
            const listing = listings.find(l => l.id === listingId);
            if (!listing) return prev; // Safety check - listing not found

            const current = prev[listingId] || 0; // Default to first image if not set
            const next = current >= listing.images.length - 1 ? 0 : current + 1; // Wrap to first image at end
            return { ...prev, [listingId]: next };
        });
    };

    /**
     * Goes back to the previous image in a listing's carousel
     * @param {number} listingId - ID of the listing to update
     */
    const handleImagePrev = (listingId: number) => {
        setCurrentImageIndex(prev => {
            const listing = listings.find(l => l.id === listingId);
            if (!listing) return prev; // Safety check - listing not found

            const current = prev[listingId] || 0; // Default to first image if not set
            const prev_index = current <= 0 ? listing.images.length - 1 : current - 1; // Wrap to last image at start
            return { ...prev, [listingId]: prev_index };
        });
    };

    /**
     * Toggles favorite status for a specific listing
     * @param {number} listingId - ID of the listing to toggle
     */
    const toggleFavorite = (listingId: number) => {
        setFavorites(prev => {
            const newFavorites = new Set(prev); // Create new Set to maintain immutability
            if (newFavorites.has(listingId)) {
                newFavorites.delete(listingId); // Remove if already favorited
            } else {
                newFavorites.add(listingId); // Add if not favorited
            }
            return newFavorites;
        });
    };

    // Early return if no listings to display
    if (listings.length === 0) return null;

    return (
        // Main category section with responsive bottom margin
        <div className="mb-8 lg:mb-12">
            {/* Category Header Section */}
            <div className="flex items-center mb-4 lg:mb-6 px-4 sm:px-6 lg:px-8">
                {/* Category icon (emoji) */}
                <span className="text-2xl mr-3">{categoryIcon}</span>

                {/* Category title with responsive text sizing */}
                <h2 className="text-xl lg:text-2xl font-semibold text-gray-900">
                    {categoryName}
                </h2>

                {/* Show all button - positioned at the right end */}
                <div className="ml-auto">
                    <Link 
                        href={`/stays/${categoryName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}
                        className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        Show all
                    </Link>
                </div>
            </div>

            {/* Horizontal Scrolling Container with Navigation */}
            <div className="relative group">
                {/* Left Navigation Arrow - Shows on hover when scrolling is possible */}
                <button
                    onClick={() => scrollTo('left')}
                    className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 flex items-center justify-center ${
                        // Show only when can scroll left and on group hover
                        canScrollLeft ? 'opacity-0 group-hover:opacity-100' : 'opacity-0 pointer-events-none'
                        }`}
                    aria-label="Scroll left"
                >
                    <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>

                {/* Right Navigation Arrow - Shows on hover when scrolling is possible */}
                <button
                    onClick={() => scrollTo('right')}
                    className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 flex items-center justify-center ${
                        // Show only when can scroll right and on group hover
                        canScrollRight ? 'opacity-0 group-hover:opacity-100' : 'opacity-0 pointer-events-none'
                        }`}
                    aria-label="Scroll right"
                >
                    <ChevronRight className="w-5 h-5 text-gray-700" />
                </button>

                {/* Main Scrolling Container with Touch Support */}
                <div
                    ref={scrollContainerRef}
                    className="overflow-x-auto scrollbar-hide scroll-smooth"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {/* Inner flex container for horizontal layout */}
                    <div className="flex gap-4 lg:gap-5 px-4 sm:px-6 lg:px-8 pb-2">
                        {/* Individual listing cards with responsive sizing */}
                        {listings.map((listing, index) => (
                            <div
                                key={listing.id}
                                className="flex-shrink-0 w-56 sm:w-60 lg:w-64" // Reduced card widths for Airbnb-like compactness
                            >
                                {/* ListingCard component with all necessary props */}
                                <ListingCard
                                    listing={listing}
                                    index={index}
                                    currentImageIndex={currentImageIndex[listing.id] || 0} // Default to first image
                                    isFavorite={favorites.has(listing.id)} // Check if listing is favorited
                                    onImageNext={() => handleImageNext(listing.id)}
                                    onImagePrev={() => handleImagePrev(listing.id)}
                                    onToggleFavorite={() => toggleFavorite(listing.id)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};