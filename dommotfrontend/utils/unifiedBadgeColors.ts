/**
 * Unified Badge Color Utility
 *
 * Centralized badge styling for all item types across the platform.
 * Provides consistent visual design while supporting type-specific variations.
 *
 * @author Dommot Development Team
 * @version 1.0.0
 */

import { AllBadgeTypes } from '../types/baseItem';

/**
 * Badge style variants
 */
export type BadgeStyleVariant = 'gradient' | 'solid' | 'outlined';

/**
 * Badge color configuration
 */
interface BadgeColorConfig {
    gradient?: string;
    solid?: string;
    outlined?: string;
}

/**
 * Complete badge color mapping for all badge types
 */
const BADGE_COLOR_MAP: Record<AllBadgeTypes, BadgeColorConfig> = {
    // Luxury/Premium tier
    'Luxury': {
        gradient: 'bg-gradient-to-r from-yellow-400 to-amber-500 text-black',
        solid: 'bg-amber-500 text-white',
        outlined: 'bg-amber-50 text-amber-800 border border-amber-200',
    },
    'Premium': {
        gradient: 'bg-gradient-to-r from-purple-500 to-violet-600 text-white',
        solid: 'bg-purple-600 text-white',
        outlined: 'bg-purple-100 text-purple-800 border border-purple-200',
    },

    // Quality/Trust badges
    'Superhost': {
        gradient: 'bg-gradient-to-r from-sky-500 to-sky-600 text-white',
        solid: 'bg-sky-600 text-white',
        outlined: 'bg-sky-100 text-sky-800 border border-sky-200',
    },
    'Popular': {
        gradient: 'bg-gradient-to-r from-orange-500 to-red-500 text-white',
        solid: 'bg-orange-600 text-white',
        outlined: 'bg-orange-100 text-orange-800 border border-orange-200',
    },
    'Local Favorite': {
        gradient: 'bg-gradient-to-r from-amber-500 to-orange-500 text-white',
        solid: 'bg-amber-600 text-white',
        outlined: 'bg-amber-100 text-amber-800 border border-amber-200',
    },

    // Scarcity/Urgency badges
    'Rare Find': {
        gradient: 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white',
        solid: 'bg-emerald-600 text-white',
        outlined: 'bg-emerald-100 text-emerald-800 border border-emerald-200',
    },
    'Limited Slots': {
        gradient: 'bg-gradient-to-r from-red-500 to-rose-600 text-white',
        solid: 'bg-red-600 text-white',
        outlined: 'bg-red-100 text-red-800 border border-red-200',
    },

    // Freshness badges
    'New': {
        gradient: 'bg-gradient-to-r from-sky-400 to-cyan-500 text-white',
        solid: 'bg-cyan-600 text-white',
        outlined: 'bg-green-100 text-green-800 border border-green-200',
    },
    'Trending': {
        gradient: 'bg-gradient-to-r from-orange-500 to-red-500 text-white',
        solid: 'bg-orange-600 text-white',
        outlined: 'bg-orange-100 text-orange-800 border border-orange-200',
    },

    // Value badges
    'Budget Friendly': {
        gradient: 'bg-gradient-to-r from-sky-600 to-sky-700 text-white',
        solid: 'bg-sky-700 text-white',
        outlined: 'bg-sky-100 text-sky-800 border border-sky-200',
    },
    'Best Value': {
        gradient: 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white',
        solid: 'bg-blue-600 text-white',
        outlined: 'bg-blue-100 text-blue-800 border border-blue-200',
    },

    // Sustainability badges
    'Eco-Friendly': {
        gradient: 'bg-gradient-to-r from-green-500 to-lime-500 text-white',
        solid: 'bg-green-600 text-white',
        outlined: 'bg-emerald-100 text-emerald-800 border border-emerald-200',
    },
};

/**
 * Default badge style configuration
 */
const DEFAULT_BADGE_STYLES: BadgeColorConfig = {
    gradient: 'bg-gradient-to-r from-gray-500 to-gray-600 text-white',
    solid: 'bg-gray-600 text-white',
    outlined: 'bg-gray-100 text-gray-800 border border-gray-200',
};

/**
 * Gets the appropriate Tailwind CSS classes for a badge
 * @param badge - The badge type
 * @param variant - The style variant to use (default: 'gradient' for listings, 'outlined' for experiences)
 * @returns Tailwind CSS classes string for badge styling
 */
export const getUnifiedBadgeColor = (
    badge: AllBadgeTypes,
    variant: BadgeStyleVariant = 'gradient'
): string => {
    const config = BADGE_COLOR_MAP[badge] || DEFAULT_BADGE_STYLES;
    return config[variant] || config.gradient || DEFAULT_BADGE_STYLES.gradient!;
};

/**
 * Gets badge colors for listings (using gradient style)
 * @param badge - The badge type
 * @returns Tailwind CSS classes for gradient badge styling
 */
export const getListingBadgeColor = (badge: AllBadgeTypes): string => {
    return getUnifiedBadgeColor(badge, 'gradient');
};

/**
 * Gets badge colors for experiences (using outlined style)
 * @param badge - The badge type
 * @returns Tailwind CSS classes for outlined badge styling
 */
export const getExperienceBadgeColorNew = (badge: AllBadgeTypes): string => {
    return getUnifiedBadgeColor(badge, 'outlined');
};

/**
 * Gets badge colors for services (using solid style)
 * @param badge - The badge type
 * @returns Tailwind CSS classes for solid badge styling
 */
export const getServiceBadgeColor = (badge: AllBadgeTypes): string => {
    return getUnifiedBadgeColor(badge, 'solid');
};