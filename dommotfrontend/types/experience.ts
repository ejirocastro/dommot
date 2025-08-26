export interface Experience {
  id: number;
  images: string[];
  title: string;
  location: string;
  category: ExperienceCategory;
  duration: string;
  price: number;
  rating: number;
  reviewCount: number;
  badge?: ExperienceBadge;
  description: string;
  highlights: string[];
  availableSlots: string[];
  host: {
    name: string;
    avatar: string;
    isVerified: boolean;
  };
}

export type ExperienceCategory = 
  | 'Restaurants'
  | 'Clubs & Nightlife' 
  | 'Adventure & Nature'
  | 'Cultural Tours'
  | 'Food & Drink'
  | 'Entertainment'
  | 'Sports & Wellness';

export type ExperienceBadge = 
  | 'Premium'
  | 'Popular'
  | 'New'
  | 'Limited Slots'
  | 'Best Value'
  | 'Eco-Friendly'
  | 'Local Favorite';