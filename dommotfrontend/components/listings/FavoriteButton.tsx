'use client';

import React from 'react';
import { Heart } from 'lucide-react';

interface FavoriteButtonProps {
    isFavorite: boolean;
    onToggleFavorite: () => void;
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({ isFavorite, onToggleFavorite }) => {
    return (
        <button
            onClick={onToggleFavorite}
            className="absolute top-3 right-3 p-2 hover:scale-125 transition-all duration-300 bg-white/20 backdrop-blur-sm rounded-full"
        >
            <Heart
                className={`w-5 h-5 transition-all duration-300 ${isFavorite
                    ? 'fill-red-500 text-red-500 scale-125'
                    : 'text-white fill-black/30 hover:fill-red-500/50 hover:text-red-500'
                    }`}
            />
        </button>
    );
};