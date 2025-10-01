/**
 * Design Tokens
 *
 * Centralized design system tokens for consistent spacing, sizing, and styling
 * across all components in the application.
 *
 * @author Dommot Development Team
 * @version 1.0.0
 */

/**
 * Card dimension configurations for different screen sizes
 */
export const CARD_DIMENSIONS = {
    /** Stays/Listings cards - compact Airbnb-style */
    stays: {
        mobile: 'w-56',      // 224px
        tablet: 'sm:w-60',   // 240px
        desktop: 'lg:w-64',  // 256px
    },

    /** Experience cards - slightly wider for more content */
    experiences: {
        mobile: 'w-56',
        tablet: 'sm:w-60',
        desktop: 'lg:w-64',
    },

    /** Service cards - matching experiences */
    services: {
        mobile: 'w-56',
        tablet: 'sm:w-60',
        desktop: 'lg:w-64',
    },
} as const;

/**
 * Horizontal scroll gap spacing
 */
export const SCROLL_GAP = {
    mobile: 'gap-4',         // 16px
    desktop: 'lg:gap-5',     // 20px
} as const;

/**
 * Container padding for scrollable sections
 */
export const CONTAINER_PADDING = {
    horizontal: 'px-4 sm:px-6 lg:px-8',
    vertical: 'py-6 lg:py-8',
} as const;

/**
 * Category section spacing
 */
export const CATEGORY_SPACING = {
    marginBottom: 'mb-8 lg:mb-12',
    headerMarginBottom: 'mb-4 lg:mb-6',
} as const;

/**
 * Card image aspect ratios
 */
export const CARD_IMAGE_ASPECT = {
    stays: 'aspect-[4/3]',         // Standard property photos
    experiences: 'aspect-[4/3]',   // Activity photos
    services: 'aspect-[16/9]',     // Service banners
} as const;

/**
 * Card border radius
 */
export const CARD_RADIUS = {
    image: 'rounded-xl',
    card: 'rounded-xl',
    badge: 'rounded-lg',
} as const;

/**
 * Card shadow configurations
 */
export const CARD_SHADOWS = {
    default: 'shadow-md',
    hover: 'hover:shadow-xl hover:shadow-sky-500/20',
    transition: 'transition-all duration-400',
} as const;

/**
 * Card hover effects
 */
export const CARD_HOVER = {
    scale: 'hover:scale-[1.02]',
    transition: 'transition-all duration-500',
} as const;

/**
 * Typography sizes for card content
 */
export const CARD_TYPOGRAPHY = {
    title: 'text-sm font-semibold',
    subtitle: 'text-sm text-gray-600',
    price: 'text-sm font-semibold',
    rating: 'text-xs',
} as const;

/**
 * Navigation arrow configurations
 */
export const NAV_ARROWS = {
    size: 'w-10 h-10',
    iconSize: 'w-5 h-5',
    background: 'bg-white/90 hover:bg-white',
    shadow: 'shadow-lg',
    blur: 'backdrop-blur-sm',
    transition: 'transition-all duration-300',
    position: {
        left: 'absolute left-2 top-1/2 -translate-y-1/2 z-10',
        right: 'absolute right-2 top-1/2 -translate-y-1/2 z-10',
    },
} as const;

/**
 * Scroll amount for horizontal navigation (percentage of container width)
 */
export const SCROLL_AMOUNT = 0.8; // 80% of visible width

/**
 * Animation delays for staggered entrance
 */
export const ANIMATION_DELAY_STEP = 100; // milliseconds per item

/**
 * Touch/swipe gesture thresholds
 */
export const SWIPE_THRESHOLD = 50; // pixels

/**
 * Scroll event debounce timing
 */
export const SCROLL_DEBOUNCE = 500; // milliseconds

/**
 * Gets responsive card width classes for a specific item type
 * @param itemType - The type of item (stays, experiences, services)
 * @returns Combined Tailwind classes string
 */
export const getCardWidth = (itemType: keyof typeof CARD_DIMENSIONS): string => {
    const dimensions = CARD_DIMENSIONS[itemType];
    return `flex-shrink-0 ${dimensions.mobile} ${dimensions.tablet} ${dimensions.desktop}`;
};

/**
 * Gets complete card container classes
 * @param itemType - The type of item
 * @returns Combined Tailwind classes string
 */
export const getCardContainerClasses = (itemType: keyof typeof CARD_DIMENSIONS): string => {
    return `${getCardWidth(itemType)} ${CARD_HOVER.scale} ${CARD_HOVER.transition} group cursor-pointer`;
};

/**
 * Gets card image classes
 * @param itemType - The type of item
 * @returns Combined Tailwind classes string
 */
export const getCardImageClasses = (itemType: keyof typeof CARD_IMAGE_ASPECT): string => {
    return `relative overflow-hidden ${CARD_RADIUS.image} mb-2 ${CARD_SHADOWS.default} ${CARD_SHADOWS.hover} ${CARD_SHADOWS.transition}`;
};

/**
 * Gets scroll container gap classes
 * @returns Combined Tailwind classes string
 */
export const getScrollGapClasses = (): string => {
    return `${SCROLL_GAP.mobile} ${SCROLL_GAP.desktop}`;
};

/**
 * Gets navigation arrow classes
 * @param direction - left or right
 * @param visible - whether the arrow should be visible
 * @returns Combined Tailwind classes string
 */
export const getNavArrowClasses = (direction: 'left' | 'right', visible: boolean): string => {
    const position = direction === 'left' ? NAV_ARROWS.position.left : NAV_ARROWS.position.right;
    const visibility = visible
        ? 'opacity-0 group-hover:opacity-100'
        : 'opacity-0 pointer-events-none';

    return `${position} ${NAV_ARROWS.size} ${NAV_ARROWS.background} ${CARD_RADIUS.card} ${NAV_ARROWS.shadow} ${NAV_ARROWS.blur} ${NAV_ARROWS.transition} flex items-center justify-center ${visibility}`;
};