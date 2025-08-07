import React from 'react';
import { Star, Award } from 'lucide-react';
import { Listing } from '../../types';

interface ListingInfoProps {
    listing: Listing;
}

export const ListingInfo: React.FC<ListingInfoProps> = ({ listing }) => {
    return (
        <div className="space-y-1">
            <div className="flex justify-between items-start">
                <h3 className="font-semibold text-gray-900 group-hover:text-sky-800 transition-colors duration-300">
                    {listing.title}
                </h3>
                <div className="flex items-center space-x-1 ml-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium text-gray-700">{listing.rating}</span>
                </div>
            </div>
            <p className="text-sm text-gray-500">{listing.distance}</p>
            <p className="text-sm text-gray-500">{listing.date}</p>
            <div className="flex items-center justify-between pt-1">
                <div className="flex items-baseline space-x-1">
                    <span className="font-semibold text-gray-900">${listing.price}</span>
                    <span className="text-sm text-gray-500">night</span>
                </div>
                {listing.isGuestFavorite && (
                    <div className="flex items-center space-x-1">
                        <Award className="w-4 h-4 text-sky-600" />
                        <span className="text-xs font-medium text-sky-600">Guest favorite</span>
                    </div>
                )}
            </div>
        </div>
    );
};