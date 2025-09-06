export interface User {
  id: string;
  email: string;
  name: string;
  bio?: string;
  profilePicture: string;
  location: string;
  languages: string[];
  joinDate: string;
  userType: 'guest' | 'host' | 'lifestyle_host';
  isVerified: boolean;
  verifications: Verification[];
  phone?: string;
  website?: string;
}

export interface Verification {
  type: VerificationType;
  isVerified: boolean;
  verifiedDate?: string;
}

export type VerificationType = 
  | 'email'
  | 'phone'
  | 'identity'
  | 'work_email'
  | 'offline_id'
  | 'selfie';

export interface HostProfile {
  responseRate: number;
  responseTime: string;
  acceptanceRate: number;
  hostingSince: string;
  totalListings: number;
  totalReviews: number;
  averageRating: number;
  isSuperhost: boolean;
  completedStays: number;
  hostingDescription?: string;
  hostingLanguages: string[];
}

export interface LifestyleHostProfile {
  experiencesOffered: ExperienceOffering[];
  totalExperiences: number;
  totalExperienceReviews: number;
  averageExperienceRating: number;
  specialties: ExperienceCategory[];
  aboutHost: string;
}

export interface ExperienceOffering {
  id: string;
  title: string;
  category: ExperienceCategory;
  images: string[];
  price: number;
  duration: string;
  rating: number;
  reviewCount: number;
  description: string;
}

export interface GuestProfile {
  tripsCompleted: number;
  reviewsWritten: number;
  wishlistsCount: number;
  memberSince: string;
  aboutGuest?: string;
  travelStyle: string[];
  favoriteDestinations: string[];
}

export interface Trip {
  id: string;
  listingId: string;
  listingTitle: string;
  listingImage: string;
  location: string;
  checkIn: string;
  checkOut: string;
  status: 'upcoming' | 'completed' | 'cancelled';
  totalAmount: number;
  guests: number;
}

export interface Review {
  id: string;
  listingId?: string;
  experienceId?: string;
  listingTitle?: string;
  experienceTitle?: string;
  rating: number;
  comment: string;
  date: string;
  photos?: string[];
  response?: {
    comment: string;
    date: string;
  };
}

export interface Wishlist {
  id: string;
  name: string;
  description?: string;
  listings: WishlistItem[];
  createdDate: string;
  isPublic: boolean;
}

export interface WishlistItem {
  listingId: string;
  addedDate: string;
  listing: {
    title: string;
    images: string[];
    price: number;
    location: string;
  };
}

export type ExperienceCategory = 
  | 'Restaurants'
  | 'Clubs & Nightlife'
  | 'Cruises'
  | 'Museums'
  | 'Adventure & Nature'
  | 'Boat and Yacht rentals'
  | 'Food & Drink'
  | 'Entertainment'
  | 'Sports & Wellness'
  | 'Art & Culture'
  | 'Shopping'
  | 'Local Experiences';