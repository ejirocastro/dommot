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
import { Star, Award } from 'lucide-react';
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
 * Renders experience information exactly like listing info for consistency.
 * Provides clear information hierarchy with appropriate typography and spacing.
 * 
 * @param {ExperienceInfoProps} props - Component props containing experience data
 * @returns {JSX.Element} Rendered experience information component
 */
const ExperienceInfo: React.FC<ExperienceInfoProps> = ({ experience }) => {
    return (
        // Main information container with vertical spacing - matches listing pattern exactly
        <div className="space-y-1.5 px-3 py-3">
            {/* Title and Rating Row */}
            <div className="flex justify-between items-start">
                {/* Experience title with hover effect - same as listing */}
                <h3 className="text-sm font-medium text-gray-900 group-hover:text-sky-800 transition-colors duration-300 leading-snug truncate pr-2">
                    {experience.title}
                </h3>

                {/* Star rating display - same as listing */}
                <div className="flex items-center space-x-0.5 ml-2 flex-shrink-0">
                    <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-medium text-gray-700">{experience.rating}</span>
                </div>
            </div>

            {/* Price and Badge Row - matches listing pattern exactly */}
            <div className="flex items-center justify-between pt-1">
                {/* Price display with Nigerian Naira currency - same as listing */}
                <div className="flex items-baseline space-x-1">
                    <span className="text-sm font-semibold text-gray-900">₦{experience.price.toLocaleString()}</span>
                    <span className="text-xs text-gray-500">per person</span>
                </div>

                {/* Experience badge - similar to guest favorite badge */}
                {experience.badge && (
                    <div className="flex items-center space-x-0.5">
                        <Award className="w-3.5 h-3.5 text-sky-600" />
                        <span className="text-xs font-medium text-sky-600">{experience.badge}</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ExperienceInfo;