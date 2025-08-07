'use client';

import React from 'react';
import { ListingCard } from './ListingCard';
import { LoadMoreButton } from './LoadMoreButton';
import { Listing } from '../../types';

interface ListingsGridProps {
    listings: Listing[];
    currentImageIndex: Record<number, number>;
    setCurrentImageIndex: React.Dispatch<React.SetStateAction<Record<number, number>>>;
    favorites: Set<number>;
    setFavorites: React.Dispatch<React.SetStateAction<Set<number>>>;
}

export const ListingsGrid: React.FC<ListingsGridProps> = ({
    listings,
    currentImageIndex,
    setCurrentImageIndex,
    favorites,
    setFavorites
}) => {
    const handleImageNext = (listingId: number) => {
        setCurrentImageIndex(prev => {
            const listing = listings.find(l => l.id === listingId);
            if (!listing) return prev;
            const current = prev[listingId] || 0;
            const next = current >= listing.images.length - 1 ? 0 : current + 1;
            return { ...prev, [listingId]: next };
        });
    };

    const handleImagePrev = (listingId: number) => {
        setCurrentImageIndex(prev => {
            const listing = listings.find(l => l.id === listingId);
            if (!listing) return prev;
            const current = prev[listingId] || 0;
            const prev_index = current <= 0 ? listing.images.length - 1 : current - 1;
            return { ...prev, [listingId]: prev_index };
        });
    };

    const toggleFavorite = (listingId: number) => {
        setFavorites(prev => {
            const newFavorites = new Set(prev);
            if (newFavorites.has(listingId)) {
                newFavorites.delete(listingId);
            } else {
                newFavorites.add(listingId);
            }
            return newFavorites;
        });
    };

    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 lg:gap-8">
                {listings.map((listing, index) => (
                    <ListingCard
                        key={listing.id}
                        listing={listing}
                        index={index}
                        currentImageIndex={currentImageIndex[listing.id] || 0}
                        isFavorite={favorites.has(listing.id)}
                        onImageNext={() => handleImageNext(listing.id)}
                        onImagePrev={() => handleImagePrev(listing.id)}
                        onToggleFavorite={() => toggleFavorite(listing.id)}
                    />
                ))}
            </div>
            <LoadMoreButton />
        </main>
    );
};