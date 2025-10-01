/**
 * Category URL Mapping Utility
 *
 * Centralized category-to-URL mapping for consistent navigation across the application.
 * Provides a single source of truth for all category routing to prevent inconsistencies.
 *
 * @author Dommot Development Team
 * @version 1.0.0
 */

/**
 * Category type definitions
 */
export type ItemType = 'stays' | 'experiences' | 'services';

/**
 * Maps category identifiers to their URL paths
 * Supports both display names and slug IDs for flexibility
 */
interface CategoryUrlMap {
    [key: string]: string;
}

/**
 * Stays category URL mappings
 */
const STAYS_CATEGORY_MAP: CategoryUrlMap = {
    // Normalized slugs
    'victoria-island': '/stays/victoria-island',
    'lekki': '/stays/lekki',
    'ikoyi': '/stays/ikoyi',
    'banana-island': '/stays/banana-island',
    'eko-atlantic': '/stays/eko-atlantic',
    'maryland': '/stays/maryland',
    'other-lagos-areas': '/stays/other-lagos',
    'outside-lagos': '/stays/outside-lagos',

    // Display names (for backward compatibility)
    'Stays in Victoria Island': '/stays/victoria-island',
    'Stays in Lekki': '/stays/lekki',
    'Stays in Ikoyi': '/stays/ikoyi',
    'Stays in Banana Island': '/stays/banana-island',
    'Stays in Eko Atlantic': '/stays/eko-atlantic',
    'Stays in Maryland': '/stays/maryland',
    'Other Lagos Areas': '/stays/other-lagos',
    'Outside Lagos': '/stays/outside-lagos',
};

/**
 * Experiences category URL mappings
 */
const EXPERIENCES_CATEGORY_MAP: CategoryUrlMap = {
    // Normalized slugs
    'all': '/experiences',
    'restaurants': '/experiences/restaurants',
    'clubs-nightlife': '/experiences/clubs-nightlife',
    'adventure-nature': '/experiences/adventure-nature',
    'boat-yacht-rentals': '/experiences/boat-yacht-rentals',
    'food-drink': '/experiences/food-drink',
    'entertainment': '/experiences/entertainment',
    'sports-wellness': '/experiences/sports-wellness',

    // Display names (for backward compatibility)
    'Restaurants': '/experiences/restaurants',
    'Clubs & Nightlife': '/experiences/clubs-nightlife',
    'Adventure & Nature': '/experiences/adventure-nature',
    'Boat and Yacht rentals': '/experiences/boat-yacht-rentals',
    'Food & Drink': '/experiences/food-drink',
    'Entertainment': '/experiences/entertainment',
    'Sports & Wellness': '/experiences/sports-wellness',
};

/**
 * Services category URL mappings
 */
const SERVICES_CATEGORY_MAP: CategoryUrlMap = {
    'all': '/online',
    'chef-services': '/online/chef-services',
    'massage-services': '/online/massage-services',
    'makeup-artist': '/online/makeup-artist',
    'chauffeur-service': '/online/chauffeur-service',
    'hair-stylist': '/online/hair-stylist',
    'laundry-services': '/online/laundry-services',

    // Display names
    'Chef Services': '/online/chef-services',
    'Massage Services': '/online/massage-services',
    'Make up artist': '/online/makeup-artist',
    'Chauffeur Service': '/online/chauffeur-service',
    'Hair Stylist': '/online/hair-stylist',
    'Laundry Services': '/online/laundry-services',
};

/**
 * Converts a category name to a URL-safe slug
 * @param categoryName - The category display name
 * @returns URL-safe slug
 */
export const categoryToSlug = (categoryName: string): string => {
    return categoryName
        .toLowerCase()
        .replace(/^stays in\s+/i, '')  // Remove "Stays in" prefix
        .replace(/[^a-z0-9]+/g, '-')   // Replace non-alphanumeric with hyphens
        .replace(/(^-|-$)/g, '');       // Remove leading/trailing hyphens
};

/**
 * Gets the URL path for a given category
 * @param categoryId - Category identifier (can be slug or display name)
 * @param itemType - Type of item (stays, experiences, services)
 * @returns URL path for the category
 */
export const getCategoryUrl = (categoryId: string, itemType: ItemType = 'stays'): string => {
    let categoryMap: CategoryUrlMap;
    let defaultUrl: string;

    switch (itemType) {
        case 'experiences':
            categoryMap = EXPERIENCES_CATEGORY_MAP;
            defaultUrl = '/experiences';
            break;
        case 'services':
            categoryMap = SERVICES_CATEGORY_MAP;
            defaultUrl = '/online';
            break;
        case 'stays':
        default:
            categoryMap = STAYS_CATEGORY_MAP;
            defaultUrl = '/stays';
            break;
    }

    // Try direct lookup first
    if (categoryMap[categoryId]) {
        return categoryMap[categoryId];
    }

    // Try slug conversion
    const slug = categoryToSlug(categoryId);
    if (categoryMap[slug]) {
        return categoryMap[slug];
    }

    // Fallback: construct URL from slug
    return `/${itemType}/${slug}` || defaultUrl;
};

/**
 * Gets all category URLs for a specific item type
 * @param itemType - Type of item
 * @returns Record of category IDs to URLs
 */
export const getAllCategoryUrls = (itemType: ItemType): CategoryUrlMap => {
    switch (itemType) {
        case 'experiences':
            return EXPERIENCES_CATEGORY_MAP;
        case 'services':
            return SERVICES_CATEGORY_MAP;
        case 'stays':
        default:
            return STAYS_CATEGORY_MAP;
    }
};