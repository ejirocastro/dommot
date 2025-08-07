import { OnlineService } from '@/types';

export const onlineServices: OnlineService[] = [
  {
    id: 1,
    title: "Private Chef Service - Italian Cuisine Master",
    category: "Chef Services",
    description: "Professional Italian chef will prepare authentic dishes in your home",
    price: 150,
    currency: "$",
    rating: 4.95,
    reviews: 287,
    images: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1556909925-f292c50ce302?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1556908153-73b394166bb1?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1556909044-f04203b0cb89?w=400&h=300&fit=crop"
    ],
    badge: "bestseller",
    provider: "Chef Marco Rossi",
    duration: "2-3 hours",
    deliveryTime: "Same day",
    tags: ["Italian", "Fine Dining", "Home Service"]
  },
  {
    id: 2,
    title: "Relaxing Deep Tissue Massage Therapy",
    category: "Massage Services",
    description: "Licensed massage therapist offering therapeutic deep tissue massage at your location",
    price: 120,
    currency: "$",
    rating: 4.92,
    reviews: 456,
    images: [
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1616391182219-e080b4d1043a?w=400&h=300&fit=crop"
    ],
    badge: "pro",
    provider: "Sarah Thompson, LMT",
    duration: "60-90 minutes",
    deliveryTime: "24 hours",
    tags: ["Massage", "Therapeutic", "Home Service"]
  },
  {
    id: 3,
    title: "Asian Fusion Private Chef Experience",
    category: "Chef Services",
    description: "Authentic Korean-Japanese fusion cuisine prepared by award-winning chef",
    price: 180,
    currency: "$",
    rating: 4.89,
    reviews: 198,
    images: [
      "https://images.unsplash.com/photo-1556909114-35ad58c4cd88?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop"
    ],
    badge: "new",
    provider: "Chef Kim Lee",
    duration: "3 hours",
    deliveryTime: "Same day",
    tags: ["Asian", "Fusion", "Korean", "Japanese"]
  },
  {
    id: 4,
    title: "Swedish Relaxation Massage & Aromatherapy",
    category: "Massage Services",
    description: "Soothing Swedish massage combined with essential oils aromatherapy",
    price: 140,
    currency: "$",
    rating: 4.96,
    reviews: 623,
    images: [
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop"
    ],
    badge: "featured",
    provider: "Emma Martinez, CMT",
    duration: "90 minutes",
    deliveryTime: "24 hours",
    tags: ["Swedish", "Aromatherapy", "Relaxation"]
  },
  {
    id: 5,
    title: "Mediterranean Private Chef & Wine Pairing",
    category: "Chef Services",
    description: "Mediterranean cuisine with professional wine pairing from Spanish chef",
    price: 220,
    currency: "$",
    rating: 4.94,
    reviews: 342,
    images: [
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1571197857889-5ce2b8c12a46?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1556909114-c71d756fb3e3?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop"
    ],
    badge: "choice",
    provider: "Chef Antonio Villa",
    duration: "4 hours",
    deliveryTime: "Same day",
    tags: ["Mediterranean", "Wine Pairing", "Spanish"]
  },
  {
    id: 6,
    title: "Hot Stone Massage & Reflexology Session",
    category: "Massage Services",
    description: "Traditional hot stone massage combined with therapeutic reflexology",
    price: 160,
    currency: "$",
    rating: 4.88,
    reviews: 287,
    images: [
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=300&fit=crop"
    ],
    badge: "pro",
    provider: "David Chen, RMT",
    duration: "2 hours",
    deliveryTime: "48 hours",
    tags: ["Hot Stone", "Reflexology", "Traditional"]
  }
];