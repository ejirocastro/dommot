import { BaseItem } from './baseItem';

/**
 * Listing-specific badge types
 */
export type BadgeType =
  | 'Luxury'
  | 'Superhost'
  | 'Rare Find'
  | 'New'
  | 'Trending'
  | 'Eco-Friendly'
  | 'Budget Friendly';

/**
 * Property listing interface extending BaseItem
 */
export interface Listing extends Omit<BaseItem, 'badge'> {
  /** Distance from user's search location */
  distance: string;

  /** Available date range */
  date: string;

  /** Whether this is marked as a guest favorite */
  isGuestFavorite: boolean;

  /** Listing-specific badge */
  badge: BadgeType;

  /** Number of guests the property can accommodate */
  guests: number;
}