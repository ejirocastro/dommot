/**
 * ExperienceInfo Component
 * 
 * Detailed experience information display component showing title, rating, duration,
 * pricing, and special designations. Provides comprehensive experience details in a
 * clean, organized layout with interactive hover effects and visual hierarchy.
 * 
 * Key Features:
 * - Experience title with hover color transitions
 * - Star rating display with filled yellow star icon
 * - Location and duration information
 * - Nigerian Naira pricing with proper formatting
 * - Host information with verification badges
 * - Available time slots display
 * - Responsive typography and spacing
 * - Color-coded information hierarchy
 * 
 * @author Dommot Development Team
 * @version 1.0.0
 */

import React from 'react';
import { Star, MapPin, Clock, Shield, Users } from 'lucide-react';
import { Experience } from '../../types';

/**
 * ExperienceInfoProps - Props interface for the ExperienceInfo component
 * 
 * @interface ExperienceInfoProps
 * @property {Experience} experience - Complete experience object containing all details
 */
interface ExperienceInfoProps {
    experience: Experience;
}

/**
 * ExperienceInfo - Experience details and information display
 * 
 * Renders comprehensive experience information including title, rating, location,
 * duration, pricing, host details, and availability. Provides clear information hierarchy
 * with appropriate typography and spacing for optimal readability.
 * 
 * @param {ExperienceInfoProps} props - Component props containing experience data
 * @returns {JSX.Element} Rendered experience information component
 */
const ExperienceInfo: React.FC<ExperienceInfoProps> = ({ experience }) => {
    return (
        // Main information container with vertical spacing
        <div className="space-y-3 px-3 py-4">
            {/* Title and Rating Row */}
            <div className="flex justify-between items-start">
                {/* Experience title with hover effect */}
                <h3 className="font-semibold text-gray-900 group-hover:text-sky-800 transition-colors duration-300 leading-relaxed">
                    {experience.title}
                </h3>
                
                {/* Star rating display */}
                <div className="flex items-center space-x-1 ml-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium text-gray-700">{experience.rating}</span>
                </div>
            </div>
            
            {/* Location information */}
            <div className="flex items-center text-sm text-gray-500">
                <MapPin className="w-4 h-4 mr-1" />
                <span className="leading-relaxed">{experience.location}</span>
            </div>
            
            {/* Duration and category information */}
            <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{experience.duration}</span>
                </div>
                <span className="font-medium text-sky-600">{experience.category}</span>
            </div>

            {/* Host information */}
            <div className="flex items-center text-sm">
                <img
                    src={experience.host.avatar}
                    alt={experience.host.name}
                    className="w-5 h-5 rounded-full mr-2"
                />
                <span className="text-gray-700">{experience.host.name}</span>
                {experience.host.isVerified && (
                    <Shield className="w-3 h-3 text-sky-500 ml-1" />
                )}
            </div>
            
            {/* Price and Availability Row */}
            <div className="flex items-center justify-between pt-2">
                {/* Price display with Nigerian Naira currency */}
                <div className="flex items-baseline space-x-1">
                    <span className="font-semibold text-gray-900">₦{experience.price.toLocaleString()}</span>
                    <span className="text-sm text-gray-500">per person</span>
                </div>
                
                {/* Available slots indicator */}
                <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span className="text-xs font-medium text-gray-500">
                        {experience.availableSlots.length} slots
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ExperienceInfo;