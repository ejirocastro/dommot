/**
 * CategoryRow Component
 *
 * Wrapper component for listing-specific category rows.
 * Uses GenericCategoryRow for implementation, eliminating code duplication.
 *
 * @author Dommot Development Team
 * @version 2.0.0
 */

'use client';

import React from 'react';
import { GenericCategoryRow } from '../common/GenericCategoryRow';
import { ListingCard } from './ListingCard';
import { Listing } from '../../types';

/**
 * CategoryRowProps - Props interface for the CategoryRow component
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
    return (
        <GenericCategoryRow
            categoryName={categoryName}
            categoryIcon={categoryIcon}
            items={listings}
            itemType="stays"
            currentImageIndex={currentImageIndex}
            setCurrentImageIndex={setCurrentImageIndex}
            favorites={favorites}
            setFavorites={setFavorites}
            CardComponent={ListingCard}
        />
    );
};
