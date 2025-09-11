import { Experience } from '../types/experience';

export type { Experience } from '../types/experience';

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

  // Boat and Yacht rentals
  {
    id: 7,
    images: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=400&h=300&fit=crop"
    ],
    title: "Luxury Yacht Charter Experience",
    location: "Victoria Island, Lagos",
    category: "Boat and Yacht rentals",
    duration: "4-6 hours",
    price: 250000,
    rating: 4.9,
    reviewCount: 89,
    badge: "Premium",
    description: "Enjoy luxury yacht charter with professional crew and premium amenities",
    highlights: ["Professional crew", "Premium amenities", "Ocean views", "Catering available"],
    availableSlots: ["10:00 AM", "2:00 PM", "4:00 PM"],
    host: {
      name: "Lagos Marine Charter",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      isVerified: true
    }
  },
  {
    id: 8,
    images: [
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop"
    ],
    title: "Speed Boat Adventure Tour",
    location: "Lekki, Lagos",
    category: "Boat and Yacht rentals",
    duration: "2-3 hours",
    price: 85000,
    rating: 4.7,
    reviewCount: 124,
    badge: "Popular",
    description: "Thrilling speed boat tour exploring Lagos coastline and waterways",
    highlights: ["High-speed adventure", "Coastal exploration", "Professional captain", "Safety equipment included"],
    availableSlots: ["9:00 AM", "12:00 PM", "3:00 PM"],
    host: {
      name: "Aqua Adventure Lagos",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
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
  },

  // Additional Restaurants
  {
    id: 15,
    images: [
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1511081692775-05d0f180a065?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop"
    ],
    title: "Amala & Ewedu at Bukka House",
    location: "Surulere, Lagos",
    category: "Restaurants",
    duration: "1-2 hours",
    price: 6000,
    rating: 4.8,
    reviewCount: 312,
    badge: "Local Favorite",
    description: "Authentic Yoruba cuisine in a traditional setting",
    highlights: ["Traditional recipes", "Local atmosphere", "Fresh ingredients", "Cultural dining"],
    availableSlots: ["12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM"],
    host: {
      name: "Mama Bukka",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=100&h=100&fit=crop&crop=face",
      isVerified: true
    }
  },
  {
    id: 16,
    images: [
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop"
    ],
    title: "Continental Buffet at Eko Hotel",
    location: "Victoria Island, Lagos",
    category: "Restaurants",
    duration: "2-3 hours",
    price: 35000,
    rating: 4.7,
    reviewCount: 189,
    badge: "Premium",
    description: "Luxurious buffet experience with international cuisine",
    highlights: ["International buffet", "Ocean views", "Premium service", "Live cooking stations"],
    availableSlots: ["7:00 PM", "8:00 PM", "9:00 PM"],
    host: {
      name: "Eko Hotel Team",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      isVerified: true
    }
  },
  {
    id: 17,
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1559329007-40df8b9345d8?w=400&h=300&fit=crop"
    ],
    title: "Jollof Rice Masterclass",
    location: "Ikeja, Lagos",
    category: "Restaurants",
    duration: "3 hours",
    price: 15000,
    rating: 4.9,
    reviewCount: 245,
    badge: "Popular",
    description: "Learn to cook authentic Nigerian Jollof rice from experts",
    highlights: ["Hands-on cooking", "Traditional techniques", "Take home recipes", "Cultural stories"],
    availableSlots: ["10:00 AM", "2:00 PM", "5:00 PM"],
    host: {
      name: "Chef Ngozi",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=100&h=100&fit=crop&crop=face",
      isVerified: true
    }
  },

  // Additional Clubs & Nightlife
  {
    id: 18,
    images: [
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1574391884720-bbc428f851b5?w=400&h=300&fit=crop"
    ],
    title: "Skybar 37 VIP Experience",
    location: "Victoria Island, Lagos",
    category: "Clubs & Nightlife",
    duration: "4-5 hours",
    price: 80000,
    rating: 4.8,
    reviewCount: 167,
    badge: "Premium",
    description: "Exclusive rooftop bar with 360-degree city views",
    highlights: ["Panoramic views", "Craft cocktails", "VIP service", "City lights"],
    availableSlots: ["8:00 PM", "9:00 PM", "10:00 PM"],
    host: {
      name: "Skybar Management",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face",
      isVerified: true
    }
  },
  {
    id: 19,
    images: [
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1574391884720-bbc428f851b5?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=300&fit=crop"
    ],
    title: "Live Jazz at Freedom Park",
    location: "Lagos Island, Lagos",
    category: "Clubs & Nightlife",
    duration: "3 hours",
    price: 12000,
    rating: 4.6,
    reviewCount: 198,
    badge: "Local Favorite",
    description: "Intimate jazz performances in a historic setting",
    highlights: ["Live jazz music", "Historic venue", "Cultural atmosphere", "Outdoor setting"],
    availableSlots: ["7:00 PM", "8:30 PM"],
    host: {
      name: "Freedom Park Team",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      isVerified: true
    }
  },

  // Additional Adventure & Nature
  {
    id: 20,
    images: [
      "https://images.unsplash.com/photo-1501436513145-30f24e19fcc4?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop"
    ],
    title: "Hiking at Aso Rock",
    location: "Abuja, FCT",
    category: "Adventure & Nature",
    duration: "5-6 hours",
    price: 22000,
    rating: 4.7,
    reviewCount: 134,
    badge: "Popular",
    description: "Challenging hike up Nigeria's iconic Aso Rock with guided tour",
    highlights: ["Rock climbing", "City panorama", "Photography spots", "Expert guides"],
    availableSlots: ["6:00 AM", "7:00 AM"],
    host: {
      name: "Adventure Guides FCT",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      isVerified: true
    }
  },
  {
    id: 21,
    images: [
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop"
    ],
    title: "Badagry Beach Horseback Riding",
    location: "Badagry, Lagos",
    category: "Adventure & Nature",
    duration: "2-3 hours",
    price: 28000,
    rating: 4.8,
    reviewCount: 156,
    badge: "Premium",
    description: "Scenic horseback riding along historic Badagry coastline",
    highlights: ["Beach riding", "Historic sites", "Professional instruction", "Sunset rides"],
    availableSlots: ["9:00 AM", "4:00 PM", "5:30 PM"],
    host: {
      name: "Badagry Stables",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      isVerified: true
    }
  },

  // Additional Boat and Yacht rentals
  {
    id: 22,
    images: [
      "https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=400&h=300&fit=crop"
    ],
    title: "Catamaran Sunset Cruise",
    location: "Lagos Lagoon, Lagos",
    category: "Boat and Yacht rentals",
    duration: "3-4 hours",
    price: 120000,
    rating: 4.8,
    reviewCount: 156,
    badge: "Popular",
    description: "Relaxing catamaran cruise with stunning sunset views over Lagos lagoon",
    highlights: ["Sunset views", "Spacious deck", "Refreshments included", "Perfect for groups"],
    availableSlots: ["4:00 PM", "5:00 PM", "6:00 PM"],
    host: {
      name: "Sunset Marine Services",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      isVerified: true
    }
  },
  {
    id: 23,
    images: [
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop"
    ],
    title: "Deep Sea Fishing Charter",
    location: "Lagos Atlantic Coast",
    category: "Boat and Yacht rentals",
    duration: "6-8 hours",
    price: 180000,
    rating: 4.9,
    reviewCount: 78,
    badge: "Premium",
    description: "Professional deep sea fishing experience with experienced crew and equipment",
    highlights: ["Professional equipment", "Experienced crew", "Fish cleaning service", "Ocean adventure"],
    availableSlots: ["6:00 AM", "7:00 AM"],
    host: {
      name: "Atlantic Fishing Charters",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      isVerified: true
    }
  },

  // Additional Food & Drink
  {
    id: 24,
    images: [
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1559329007-40df8b9345d8?w=400&h=300&fit=crop"
    ],
    title: "Pepper Soup & Palm Wine Tasting",
    location: "Nsukka, Enugu",
    category: "Food & Drink",
    duration: "2.5 hours",
    price: 9000,
    rating: 4.8,
    reviewCount: 167,
    badge: "Local Favorite",
    description: "Authentic Igbo cuisine and traditional palm wine experience",
    highlights: ["Traditional preparation", "Local ingredients", "Cultural stories", "Rural setting"],
    availableSlots: ["12:00 PM", "3:00 PM", "5:00 PM"],
    host: {
      name: "Nsukka Village Tours",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=100&h=100&fit=crop&crop=face",
      isVerified: true
    }
  },
  {
    id: 25,
    images: [
      "https://images.unsplash.com/photo-1559329007-40df8b9345d8?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=400&h=300&fit=crop"
    ],
    title: "Lagos Island Food Crawl",
    location: "Lagos Island, Lagos",
    category: "Food & Drink",
    duration: "5 hours",
    price: 25000,
    rating: 4.9,
    reviewCount: 203,
    badge: "Popular",
    description: "Comprehensive food tour covering Lagos Island's best eateries",
    highlights: ["Multiple restaurants", "Diverse cuisines", "Local favorites", "Food history"],
    availableSlots: ["11:00 AM", "2:00 PM"],
    host: {
      name: "Lagos Food Tours",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face",
      isVerified: true
    }
  },

  // Additional Entertainment
  {
    id: 26,
    images: [
      "https://images.unsplash.com/photo-1574391884720-bbc428f851b5?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1566737236500-c8ac43014a8e?w=400&h=300&fit=crop"
    ],
    title: "Afrobeats Concert Experience",
    location: "National Theatre, Lagos",
    category: "Entertainment",
    duration: "4 hours",
    price: 45000,
    rating: 4.9,
    reviewCount: 278,
    badge: "Popular",
    description: "Live Afrobeats concert with top Nigerian artists",
    highlights: ["Live performances", "Top artists", "Cultural venue", "VIP access"],
    availableSlots: ["7:00 PM", "8:00 PM"],
    host: {
      name: "Lagos Entertainment",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      isVerified: true
    }
  },
  {
    id: 27,
    images: [
      "https://images.unsplash.com/photo-1566737236500-c8ac43014a8e?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1574391884720-bbc428f851b5?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=300&fit=crop"
    ],
    title: "Stand-up Comedy Workshop",
    location: "Victoria Island, Lagos",
    category: "Entertainment",
    duration: "3 hours",
    price: 20000,
    rating: 4.6,
    reviewCount: 145,
    badge: "Popular",
    description: "Learn stand-up comedy from professional comedians",
    highlights: ["Comedy techniques", "Performance practice", "Professional tips", "Small groups"],
    availableSlots: ["2:00 PM", "5:00 PM", "7:00 PM"],
    host: {
      name: "Comedy Academy Lagos",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      isVerified: true
    }
  },

  // Additional Sports & Wellness
  {
    id: 28,
    images: [
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
    ],
    title: "Pilates Class at Tarkwa Bay",
    location: "Tarkwa Bay, Lagos",
    category: "Sports & Wellness",
    duration: "1.5 hours",
    price: 12000,
    rating: 4.7,
    reviewCount: 123,
    badge: "Eco-Friendly",
    description: "Energizing Pilates session on a secluded island beach",
    highlights: ["Island setting", "Expert instruction", "All levels welcome", "Equipment provided"],
    availableSlots: ["7:00 AM", "8:00 AM", "5:00 PM", "6:00 PM"],
    host: {
      name: "Island Fitness Lagos",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=100&h=100&fit=crop&crop=face",
      isVerified: true
    }
  },
  {
    id: 29,
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
    ],
    title: "Meditation Retreat at Obudu Ranch",
    location: "Obudu, Cross River",
    category: "Sports & Wellness",
    duration: "6 hours",
    price: 35000,
    rating: 4.9,
    reviewCount: 89,
    badge: "Premium",
    description: "Peaceful meditation retreat in mountain resort setting",
    highlights: ["Mountain views", "Guided meditation", "Nature walks", "Healthy meals included"],
    availableSlots: ["8:00 AM", "1:00 PM"],
    host: {
      name: "Mountain Wellness Retreat",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face",
      isVerified: true
    }
  },
  {
    id: 30,
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop"
    ],
    title: "Boxing Training at National Stadium",
    location: "Surulere, Lagos",
    category: "Sports & Wellness",
    duration: "2 hours",
    price: 15000,
    rating: 4.8,
    reviewCount: 167,
    badge: "Popular",
    description: "Professional boxing training session for all skill levels",
    highlights: ["Professional trainers", "All skill levels", "Equipment provided", "Historic venue"],
    availableSlots: ["6:00 AM", "4:00 PM", "6:00 PM"],
    host: {
      name: "Lagos Boxing Academy",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      isVerified: true
    }
  },

  // Additional Boat and Yacht rental
  {
    id: 31,
    images: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=400&h=300&fit=crop"
    ],
    title: "Private Yacht Birthday Party",
    location: "Lagos Marina, Lagos",
    category: "Boat and Yacht rentals",
    duration: "5-6 hours",
    price: 300000,
    rating: 4.8,
    reviewCount: 92,
    badge: "Premium",
    description: "Celebrate in style with private yacht rental perfect for special occasions",
    highlights: ["Private charter", "Party setup included", "DJ system", "Catering options"],
    availableSlots: ["11:00 AM", "2:00 PM", "5:00 PM"],
    host: {
      name: "Elite Yacht Rentals",
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
  { id: 'boat-yacht-rentals', name: 'Boat and Yacht rentals', icon: '🛥️' },
  { id: 'food-drink', name: 'Food & Drink', icon: '🍻' },
  { id: 'entertainment', name: 'Entertainment', icon: '🎭' },
  { id: 'sports-wellness', name: 'Sports & Wellness', icon: '🧘' }
];