/**
 * Base Item Types
 *
 * Shared interfaces and types for all browsable items in the platform
 * (listings, experiences, services, etc.)
 *
 * @author Dommot Development Team
 * @version 1.0.0
 */

/**
 * Common badge types shared across different item types
 */
export type CommonBadgeType =
    | 'New'
    | 'Trending'
    | 'Eco-Friendly';

/**
 * All possible badge types across the platform
 */
export type AllBadgeTypes =
    | CommonBadgeType
    | 'Luxury'
    | 'Superhost'
    | 'Rare Find'
    | 'Budget Friendly'
    | 'Premium'
    | 'Popular'
    | 'Limited Slots'
    | 'Best Value'
    | 'Local Favorite';

/**
 * Base interface for all browsable items
 * Contains common properties shared by listings, experiences, services, etc.
 */
export interface BaseItem {
    /** Unique identifier */
    id: number;

    /** Array of image URLs for the item */
    images: string[];

    /** Display title/name */
    title: string;

    /** Physical or virtual location */
    location: string;

    /** Category classification */
    category: string;

    /** Price per unit (night, person, session, etc.) */
    price: number;

    /** Average rating (0-5 scale) */
    rating: number;

    /** Optional badge for highlighting special features */
    badge?: AllBadgeTypes;
}

/**
 * Display configuration for item cards
 */
export interface ItemDisplayConfig {
    /** Type identifier for routing and styling */
    itemType: 'stays' | 'experiences' | 'services';

    /** URL path for the item detail page */
    detailPath: string;

    /** Primary info line (e.g., "50 km away", "2 hours", "Available now") */
    primaryInfo: string;

    /** Secondary info line (e.g., "Nov 2-7", "Includes lunch", "10 slots left") */
    secondaryInfo?: string;

    /** Additional info line (e.g., number of guests) */
    tertiaryInfo?: string;

    /** Whether to show review count */
    showReviewCount?: boolean;

    /** Number of reviews (if showReviewCount is true) */
    reviewCount?: number;
}

/**
 * Helper type for item card props
 */
export interface BaseItemCardData extends BaseItem {
    displayConfig: ItemDisplayConfig;
}