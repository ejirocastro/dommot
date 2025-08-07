import { Listing } from '../types';

export const listings: Listing[] = [
  {
    id: 1,
    images: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop"
    ],
    title: "Manhattan, New York",
    distance: "500 miles away",
    date: "Nov 2-7",
    price: 599,
    rating: 4.83,
    isGuestFavorite: true,
    badge: "Luxury"
  },
  {
    id: 2,
    images: [
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1520637836862-4d197d17c93a?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop"
    ],
    title: "Malibu, California",
    distance: "234 miles away",
    date: "Dec 1-6",
    price: 1200,
    rating: 4.91,
    isGuestFavorite: false,
    badge: "Superhost"
  },
  {
    id: 3,
    images: [
      "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=400&h=300&fit=crop"
    ],
    title: "Cotswolds, UK",
    distance: "3,200 miles away",
    date: "Jan 15-20",
    price: 287,
    rating: 4.76,
    isGuestFavorite: true,
    badge: "Rare Find"
  },
  {
    id: 4,
    images: [
      "https://images.unsplash.com/photo-1515263487990-61b07816b24f?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=400&h=300&fit=crop"
    ],
    title: "San Francisco, California",
    distance: "120 miles away",
    date: "Nov 10-15",
    price: 425,
    rating: 4.68,
    isGuestFavorite: false,
    badge: "New"
  },
  {
    id: 5,
    images: [
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=300&fit=crop"
    ],
    title: "Miami, Florida",
    distance: "890 miles away",
    date: "Dec 20-25",
    price: 340,
    rating: 4.95,
    isGuestFavorite: true,
    badge: "Trending"
  },
  {
    id: 6,
    images: [
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=300&fit=crop"
    ],
    title: "Aspen, Colorado",
    distance: "670 miles away",
    date: "Jan 5-10",
    price: 750,
    rating: 4.89,
    isGuestFavorite: false,
    badge: "Luxury"
  },
  {
    id: 7,
    images: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=400&h=300&fit=crop"
    ],
    title: "Big Sur, California",
    distance: "180 miles away",
    date: "Feb 1-6",
    price: 520,
    rating: 4.72,
    isGuestFavorite: true,
    badge: "Eco-Friendly"
  },
  {
    id: 8,
    images: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop"
    ],
    title: "Portland, Oregon",
    distance: "450 miles away",
    date: "Nov 25-30",
    price: 180,
    rating: 4.85,
    isGuestFavorite: false,
    badge: "Budget Friendly"
  }
];
