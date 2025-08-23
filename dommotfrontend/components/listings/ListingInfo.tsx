/**
 * ListingInfo Component
 * 
 * Detailed property information display component showing title, rating, availability,
 * pricing, and special designations. Provides comprehensive listing details in a
 * clean, organized layout with interactive hover effects and visual hierarchy.
 * 
 * Key Features:
 * - Property title with hover color transitions
 * - Star rating display with filled yellow star icon
 * - Distance and availability date information
 * - Nigerian Naira pricing with proper formatting
 * - "Guest favorite" badge with award icon for highly-rated properties
 * - Responsive typography and spacing
 * - Color-coded information hierarchy
 * 
 * @author Dommot Development Team
 * @version 1.0.0
 */

import React from 'react';
import { Star, Award } from 'lucide-react';
import { Listing } from '../../types';

/**
 * ListingInfoProps - Props interface for the ListingInfo component
 * 
 * @interface ListingInfoProps
 * @property {Listing} listing - Complete listing object containing all property details
 */
interface ListingInfoProps {
    listing: Listing;
}

/**
 * ListingInfo - Property details and information display
 * 
 * Renders comprehensive property information including title, rating, location,
 * availability, pricing, and special badges. Provides clear information hierarchy
 * with appropriate typography and spacing for optimal readability.
 * 
 * @param {ListingInfoProps} props - Component props containing listing data
 * @returns {JSX.Element} Rendered property information component
 */
export const ListingInfo: React.FC<ListingInfoProps> = ({ listing }) => {
    return (
        // Main information container with vertical spacing
        <div className="space-y-3 px-3 py-4">
            {/* Title and Rating Row */}
            <div className="flex justify-between items-start">
                {/* Property title with hover effect */}
                <h3 className="font-semibold text-gray-900 group-hover:text-sky-800 transition-colors duration-300 leading-relaxed">
                    {listing.title}
                </h3>
                
                {/* Star rating display */}
                <div className="flex items-center space-x-1 ml-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium text-gray-700">{listing.rating}</span>
                </div>
            </div>
            
            {/* Distance/Location information */}
            <p className="text-sm text-gray-500 leading-relaxed">{listing.distance}</p>
            
            {/* Availability date information */}
            <p className="text-sm text-gray-500 leading-relaxed">{listing.date}</p>
            
            {/* Price and Badge Row */}
            <div className="flex items-center justify-between pt-2">
                {/* Price display with Nigerian Naira currency */}
                <div className="flex items-baseline space-x-1">
                    <span className="font-semibold text-gray-900">₦{listing.price.toLocaleString()}</span>
                    <span className="text-sm text-gray-500">night</span>
                </div>
                
                {/* Conditional Guest Favorite Badge */}
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