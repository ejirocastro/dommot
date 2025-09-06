/**
 * Categories Data
 * 
 * Static data configuration for property category filters used throughout the Dommot platform.
 * Defines the available property types and categories that users can filter by, complete with
 * emoji icons and active states for UI rendering. This data drives the category filter
 * component behavior and visual appearance.
 * 
 * Key Features:
 * - Comprehensive list of property categories and types
 * - Emoji icons for visual representation and intuitive categorization
 * - Active state management for current filter selection
 * - Organized from popular/featured to specialized categories
 * - Consistent with Airbnb-style category patterns
 * - Easy to extend with new categories as needed
 * 
 * @author Dommot Development Team
 * @version 1.0.0
 */

import { Category } from '../types';

/**
 * Property categories configuration array
 * 
 * Contains all available property categories for filtering and display.
 * Each category includes a name, emoji icon, and active state indicator.
 * The 'Trending' category is set as active by default.
 */
export const categories: Category[] = [
  // Lagos area-based property categories
  { name: 'Stays in Lekki', icon: '🏖️', active: true },
  
  { name: 'Stays in Victoria Island', icon: '🏙️', active: false },
  
  { name: 'Stays in Ikoyi', icon: '🏛️', active: false },
  
  { name: 'Stays in Banana Island', icon: '🍌', active: false },
  
  { name: 'Stays in Eko Atlantic', icon: '🌊', active: false },
  
  { name: 'Stays in Maryland', icon: '🏘️', active: false },
  
  // Other Lagos areas and general category for non-Lagos locations
  { name: 'Other Lagos Areas', icon: '🏢', active: false },
  
  { name: 'Outside Lagos', icon: '🌍', active: false }
];