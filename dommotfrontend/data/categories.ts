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
  // Iconic/landmark properties
  { name: 'Icons', icon: '🏛️', active: false },
  
  // Coastal and beach properties
  { name: 'Beachfront', icon: '🏖️', active: false },
  
  // Unique and surprising properties
  { name: 'OMG!', icon: '😱', active: false },
  
  // Rustic cabin experiences
  { name: 'Cabins', icon: '🏕️', active: false },
  
  // Currently popular properties (default active)
  { name: 'Trending', icon: '🔥', active: true },
  
  // Tropical paradise locations
  { name: 'Tropical', icon: '🌴', active: false },
  
  // Luxury accommodations
  { name: 'Luxe', icon: '💎', active: false },
  
  // Scenic view properties
  { name: 'Amazing views', icon: '🌄', active: false },
  
  // Large estate properties
  { name: 'Mansions', icon: '🏰', active: false },
  
  // Historic castle properties
  { name: 'Castles', icon: '🏰', active: false },
  
  // Rural countryside settings
  { name: 'Countryside', icon: '🌾', active: false },
  
  // Compact/minimalist homes
  { name: 'Tiny homes', icon: '🏠', active: false },
  
  // Lake-adjacent properties
  { name: 'Lakefront', icon: '🏞️', active: false },
  
  // Architecturally distinctive properties
  { name: 'Design', icon: '🎨', active: false },
  
  // Underground/cave accommodations
  { name: 'Caves', icon: '🕳️', active: false },
  
  // Dome-shaped structures
  { name: 'Domes', icon: '⛺', active: false },
  
  // Boat/houseboat accommodations
  { name: 'Boats', icon: '⛵', active: false },
  
  // Tree-based accommodations
  { name: 'Treehouse', icon: '🌳', active: false }
];