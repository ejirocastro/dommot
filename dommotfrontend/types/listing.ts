export interface Listing {
  id: number;
  images: string[];
  title: string;
  distance: string;
  date: string;
  price: number;
  rating: number;
  isGuestFavorite: boolean;
  badge: BadgeType;
  category: string;
}

export type BadgeType = 
  | 'Luxury' 
  | 'Superhost' 
  | 'Rare Find' 
  | 'New' 
  | 'Trending' 
  | 'Eco-Friendly' 
  | 'Budget Friendly';