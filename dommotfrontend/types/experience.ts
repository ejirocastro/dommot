import { BaseItem } from './baseItem';

/**
 * Experience category types
 */
export type ExperienceCategory =
  | 'Restaurants'
  | 'Clubs & Nightlife'
  | 'Adventure & Nature'
  | 'Boat and Yacht rentals'
  | 'Food & Drink'
  | 'Entertainment'
  | 'Sports & Wellness';

/**
 * Experience-specific badge types
 */
export type ExperienceBadge =
  | 'Premium'
  | 'Popular'
  | 'New'
  | 'Limited Slots'
  | 'Best Value'
  | 'Eco-Friendly'
  | 'Local Favorite';

/**
 * Host information for experiences
 */
export interface ExperienceHost {
  name: string;
  avatar: string;
  isVerified: boolean;
}

/**
 * Experience interface extending BaseItem
 */
export interface Experience extends Omit<BaseItem, 'badge' | 'category'> {
  /** Experience category */
  category: ExperienceCategory;

  /** Duration of the experience */
  duration: string;

  /** Number of reviews */
  reviewCount: number;

  /** Optional experience-specific badge */
  badge?: ExperienceBadge;

  /** Detailed description */
  description: string;

  /** Key highlights of the experience */
  highlights: string[];

  /** Available time slots */
  availableSlots: string[];

  /** Host information */
  host: ExperienceHost;
}