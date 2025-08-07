'use client';

import React from 'react';
import { ListingImage } from './ListingImage';
import { FavoriteButton } from './FavoriteButton';
import { ImageIndicators } from './ImageIndicators';
import { ListingInfo } from './ListingInfo';
import { Listing } from '../../types';

interface ListingCardProps {
    listing: Listing;
    index: number;
    currentImageIndex: number;
    isFavorite: boolean;
    onImageNext: () => void;
    onImagePrev: () => void;
    onToggleFavorite: () => void;
}

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
        <div
            className="group cursor-pointer transform hover:scale-105 transition-all duration-500"
            style={{ animationDelay: `${index * 100}ms` }}
        >
            <div className="relative overflow-hidden rounded-2xl mb-3 shadow-lg hover:shadow-2xl transition-all duration-500">
                <ListingImage
                    listing={listing}
                    currentImageIndex={currentImageIndex}
                    onImageNext={onImageNext}
                    onImagePrev={onImagePrev}
                />
                <FavoriteButton isFavorite={isFavorite} onToggleFavorite={onToggleFavorite} />
                <ImageIndicators images={listing.images} currentIndex={currentImageIndex} />
            </div>
            <ListingInfo listing={listing} />
        </div>
    );
};