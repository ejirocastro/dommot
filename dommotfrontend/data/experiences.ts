import { Experience } from '../types/experience';

export const experiences: Experience[] = [
  // Restaurants
  {
    id: 1,
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&h=300&fit=crop"
    ],
    title: "Fine Dining at Sky Restaurant",
    location: "Victoria Island, Lagos",
    category: "Restaurants",
    duration: "2-3 hours",
    price: 25000,
    rating: 4.8,
    reviewCount: 156,
    badge: "Premium",
    description: "Experience culinary excellence with panoramic views of Lagos skyline",
    highlights: ["Rooftop dining", "International cuisine", "Premium wine selection", "Live jazz music"],
    availableSlots: ["7:00 PM", "8:30 PM", "9:00 PM"],
    host: {
      name: "Chef Adebayo",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      isVerified: true
    }
  },
  {
    id: 2,
    images: [
      "https://images.unsplash.com/photo-1559329007-40df8b9345d8?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=400&h=300&fit=crop"
    ],
    title: "Traditional Suya & Grill Experience",
    location: "Ikeja, Lagos",
    category: "Restaurants",
    duration: "1.5 hours",
    price: 8000,
    rating: 4.9,
    reviewCount: 203,
    badge: "Local Favorite",
    description: "Authentic Nigerian grilled meats prepared by master suya chefs",
    highlights: ["Fresh grilled meats", "Traditional spices", "Local ambiance", "Cultural experience"],
    availableSlots: ["6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM"],
    host: {
      name: "Mallam Ibrahim",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      isVerified: true
    }
  },

  // Clubs & Nightlife
  {
    id: 3,
    images: [
      "https://images.unsplash.com/photo-1566737236500-c8ac43014a8e?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1574391884720-bbc428f851b5?w=400&h=300&fit=crop"
    ],
    title: "VIP Table at Quilox Nightclub",
    location: "Victoria Island, Lagos",
    category: "Clubs & Nightlife",
    duration: "4-6 hours",
    price: 150000,
    rating: 4.6,
    reviewCount: 89,
    badge: "Premium",
    description: "Reserve exclusive VIP tables with bottle service at Lagos' premier nightclub",
    highlights: ["VIP table service", "Premium bottle packages", "DJ performances", "Celebrity appearances"],
    availableSlots: ["10:00 PM", "11:00 PM", "12:00 AM"],
    host: {
      name: "Club Manager",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face",
      isVerified: true
    }
  },
  {
    id: 4,
    images: [
      "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1574391884720-bbc428f851b5?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1566737236500-c8ac43014a8e?w=400&h=300&fit=crop"
    ],
    title: "Rooftop Lounge Experience",
    location: "Ikoyi, Lagos",
    category: "Clubs & Nightlife",
    duration: "3-4 hours",
    price: 35000,
    rating: 4.7,
    reviewCount: 124,
    badge: "Popular",
    description: "Enjoy cocktails and city views at an exclusive rooftop lounge",
    highlights: ["Panoramic city views", "Craft cocktails", "Live music", "Elegant atmosphere"],
    availableSlots: ["7:00 PM", "8:00 PM", "9:00 PM"],
    host: {
      name: "Sarah Adebisi",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=100&h=100&fit=crop&crop=face",
      isVerified: true
    }
  },

  // Adventure & Nature
  {
    id: 5,
    images: [
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
    ],
    title: "Lekki Conservation Centre Adventure",
    location: "Lekki, Lagos",
    category: "Adventure & Nature",
    duration: "4-5 hours",
    price: 12000,
    rating: 4.9,
    reviewCount: 267,
    badge: "Eco-Friendly",
    description: "Explore Nigeria's premier nature reserve with canopy walks and wildlife viewing",
    highlights: ["Canopy walkway", "Wildlife spotting", "Nature trails", "Educational tours"],
    availableSlots: ["9:00 AM", "11:00 AM", "2:00 PM"],
    host: {
      name: "Nature Guide Team",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      isVerified: true
    }
  },
  {
    id: 6,
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=300&fit=crop"
    ],
    title: "Lagos Lagoon Boat Tour",
    location: "Lagos Island, Lagos",
    category: "Adventure & Nature",
    duration: "3 hours",
    price: 18000,
    rating: 4.7,
    reviewCount: 142,
    badge: "Popular",
    description: "Scenic boat tour through Lagos lagoons with stops at historic sites",
    highlights: ["Lagoon exploration", "Historic landmarks", "Sunset views", "Photography opportunities"],
    availableSlots: ["10:00 AM", "2:00 PM", "5:00 PM"],
    host: {
      name: "Captain Tunde",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      isVerified: true
    }
  },

  // Cultural Tours
  {
    id: 7,
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop"
    ],
    title: "Lagos Heritage Walking Tour",
    location: "Lagos Island, Lagos",
    category: "Cultural Tours",
    duration: "3 hours",
    price: 15000,
    rating: 4.8,
    reviewCount: 189,
    badge: "Local Favorite",
    description: "Discover Lagos' rich history through guided tours of historic landmarks",
    highlights: ["National Museum", "Freedom Park", "Tafawa Balewa Square", "Local stories"],
    availableSlots: ["10:00 AM", "2:00 PM", "4:00 PM"],
    host: {
      name: "Dr. Folake Adeyemi",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=100&h=100&fit=crop&crop=face",
      isVerified: true
    }
  },
  {
    id: 8,
    images: [
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
    ],
    title: "Abuja Cultural Center Experience",
    location: "Garki, Abuja",
    category: "Cultural Tours",
    duration: "2.5 hours",
    price: 12000,
    rating: 4.6,
    reviewCount: 98,
    badge: "New",
    description: "Immerse yourself in Nigerian arts, crafts, and cultural performances",
    highlights: ["Traditional crafts", "Cultural performances", "Art galleries", "Local artisans"],
    availableSlots: ["11:00 AM", "2:00 PM", "4:00 PM"],
    host: {
      name: "Cultural Team",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      isVerified: true
    }
  },

  // Food & Drink
  {
    id: 9,
    images: [
      "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1559329007-40df8b9345d8?w=400&h=300&fit=crop"
    ],
    title: "Lagos Street Food Safari",
    location: "Various Locations, Lagos",
    category: "Food & Drink",
    duration: "4 hours",
    price: 20000,
    rating: 4.9,
    reviewCount: 234,
    badge: "Best Value",
    description: "Taste authentic Lagos street food with a local guide",
    highlights: ["Local street vendors", "Authentic flavors", "Food history", "Hidden gems"],
    availableSlots: ["11:00 AM", "3:00 PM", "6:00 PM"],
    host: {
      name: "Foodie Lagos",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face",
      isVerified: true
    }
  },
  {
    id: 10,
    images: [
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1559329007-40df8b9345d8?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=400&h=300&fit=crop"
    ],
    title: "Wine Tasting at Terra Kulture",
    location: "Victoria Island, Lagos",
    category: "Food & Drink",
    duration: "2 hours",
    price: 35000,
    rating: 4.7,
    reviewCount: 87,
    badge: "Premium",
    description: "Premium wine tasting experience with cultural performances",
    highlights: ["Premium wines", "Cultural ambiance", "Art gallery", "Expert sommelier"],
    availableSlots: ["6:00 PM", "7:30 PM", "8:00 PM"],
    host: {
      name: "Terra Kulture Team",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=100&h=100&fit=crop&crop=face",
      isVerified: true
    }
  },

  // Entertainment
  {
    id: 11,
    images: [
      "https://images.unsplash.com/photo-1574391884720-bbc428f851b5?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1566737236500-c8ac43014a8e?w=400&h=300&fit=crop"
    ],
    title: "Nollywood Film Studio Tour",
    location: "Surulere, Lagos",
    category: "Entertainment",
    duration: "3 hours",
    price: 25000,
    rating: 4.8,
    reviewCount: 145,
    badge: "Popular",
    description: "Behind-the-scenes look at Nigeria's thriving film industry",
    highlights: ["Studio tours", "Meet actors", "Film production", "Industry insights"],
    availableSlots: ["10:00 AM", "2:00 PM", "4:00 PM"],
    host: {
      name: "Nollywood Guide",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      isVerified: true
    }
  },
  {
    id: 12,
    images: [
      "https://images.unsplash.com/photo-1566737236500-c8ac43014a8e?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1574391884720-bbc428f851b5?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=300&fit=crop"
    ],
    title: "Lagos Comedy Club Night",
    location: "Ikeja, Lagos",
    category: "Entertainment",
    duration: "2.5 hours",
    price: 15000,
    rating: 4.6,
    reviewCount: 167,
    badge: "Limited Slots",
    description: "Laugh out loud with Nigeria's top comedians in an intimate setting",
    highlights: ["Top comedians", "Intimate venue", "Local humor", "Interactive shows"],
    availableSlots: ["7:00 PM", "9:00 PM"],
    host: {
      name: "Comedy Central Lagos",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      isVerified: true
    }
  },

  // Sports & Wellness
  {
    id: 13,
    images: [
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
    ],
    title: "Lagos Beach Yoga Session",
    location: "Elegushi Beach, Lagos",
    category: "Sports & Wellness",
    duration: "1.5 hours",
    price: 8000,
    rating: 4.9,
    reviewCount: 198,
    badge: "Eco-Friendly",
    description: "Rejuvenating yoga session with ocean views and fresh sea breeze",
    highlights: ["Beach setting", "Sunrise/sunset sessions", "All skill levels", "Meditation included"],
    availableSlots: ["6:00 AM", "7:00 AM", "6:00 PM", "7:00 PM"],
    host: {
      name: "Yoga Master Kemi",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=100&h=100&fit=crop&crop=face",
      isVerified: true
    }
  },
  {
    id: 14,
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
    ],
    title: "Premium Spa Day Experience",
    location: "Victoria Island, Lagos",
    category: "Sports & Wellness",
    duration: "4 hours",
    price: 45000,
    rating: 4.8,
    reviewCount: 156,
    badge: "Premium",
    description: "Luxury spa treatments and wellness therapies for complete relaxation",
    highlights: ["Full body massage", "Facial treatments", "Sauna access", "Healthy refreshments"],
    availableSlots: ["10:00 AM", "2:00 PM", "4:00 PM"],
    host: {
      name: "Wellness Spa Lagos",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face",
      isVerified: true
    }
  }
];

export interface FilterOption {
    id: string;
    name: string;
    icon: string;
}

export const experienceCategories: FilterOption[] = [
  { id: 'all', name: 'All Experiences', icon: '🎯' },
  { id: 'restaurants', name: 'Restaurants', icon: '🍽️' },
  { id: 'clubs-nightlife', name: 'Clubs & Nightlife', icon: '🌃' },
  { id: 'adventure-nature', name: 'Adventure & Nature', icon: '🌿' },
  { id: 'cultural-tours', name: 'Cultural Tours', icon: '🏛️' },
  { id: 'food-drink', name: 'Food & Drink', icon: '🍻' },
  { id: 'entertainment', name: 'Entertainment', icon: '🎭' },
  { id: 'sports-wellness', name: 'Sports & Wellness', icon: '🧘' }
];