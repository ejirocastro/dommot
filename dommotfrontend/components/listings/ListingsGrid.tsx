/**
 * ListingsGrid Component
 * 
 * Main container component that organizes and displays property listings grouped by categories.
 * Handles data transformation, category-based organization, and state management coordination
 * between parent and child components. Provides the primary layout structure for the
 * listings display with responsive design and load more functionality.
 * 
 * Key Features:
 * - Dynamic listing categorization and grouping
 * - State management propagation to child components
 * - Category-based listing organization with horizontal scrolling
 * - Load more functionality for pagination
 * - Responsive container with max-width constraints
 * - Proper z-index layering for overlay elements
 * 
 * @author Dommot Development Team
 * @version 1.0.0
 */

'use client';

import React from 'react';
import { CategoryRow } from './CategoryRow';
import { LoadMoreButton } from './LoadMoreButton';
import { Listing, Category } from '../../types';

/**
 * ListingsGridProps - Props interface for the ListingsGrid component
 * 
 * @interface ListingsGridProps
 * @property {Listing[]} listings - Array of all property listings to display
 * @property {Category[]} categories - Array of category definitions for organization
 * @property {Record<number, number>} currentImageIndex - Image indices for all listings
 * @property {function} setCurrentImageIndex - State setter for image index updates
 * @property {Set<number>} favorites - Set of favorited listing IDs
 * @property {function} setFavorites - State setter for favorites management
 */
interface ListingsGridProps {
    listings: Listing[];
    categories: Category[];
    currentImageIndex: Record<number, number>;
    setCurrentImageIndex: React.Dispatch<React.SetStateAction<Record<number, number>>>;
    favorites: Set<number>;
    setFavorites: React.Dispatch<React.SetStateAction<Set<number>>>;
}

/**
 * ListingsGrid - Main listings display and organization container
 * 
 * Manages the display of property listings organized by categories. Handles
 * data transformation, state coordination, and provides the main layout
 * structure for the listings interface.
 * 
 * @param {ListingsGridProps} props - Component props containing listings, categories, and state
 * @returns {JSX.Element} Rendered listings grid component
 */
export const ListingsGrid: React.FC<ListingsGridProps> = ({
    listings,
    categories,
    currentImageIndex,
    setCurrentImageIndex,
    favorites,
    setFavorites
}) => {
    /**
     * Transform flat listings array into category-grouped object
     * Creates efficient lookup structure for category-based rendering
     */
    const listingsByCategory = listings.reduce((acc, listing) => {
        if (!acc[listing.category]) {
            acc[listing.category] = [];
        }
        acc[listing.category].push(listing);
        return acc;
    }, {} as Record<string, Listing[]>);

    return (
        // Main content container with responsive padding and z-index for layering
        <main className="max-w-7xl mx-auto py-6 lg:py-8 relative z-10">
            {/* Dynamic category row generation */}
            {categories.map((category) => {
                const categoryListings = listingsByCategory[category.name] || []; // Default to empty array if no listings
                return (
                    <CategoryRow
                        key={category.name}
                        categoryName={category.name}
                        categoryIcon={category.icon}
                        listings={categoryListings}
                        currentImageIndex={currentImageIndex}
                        setCurrentImageIndex={setCurrentImageIndex}
                        favorites={favorites}
                        setFavorites={setFavorites}
                    />
                );
            })}
            
            {/* Load more button section with responsive spacing */}
            <div className="mt-8 lg:mt-12 px-4 sm:px-6 lg:px-8">
                <LoadMoreButton />
            </div>
        </main>
    );
};