export interface OnlineService {
    id: number;
    title: string;
    category: string;
    location?: string;
    description: string;
    price: number;
    currency: string;
    rating: number;
    reviews: number;
    images: string[];
    badge: OnlineServiceBadgeType;
    provider: string;
    duration: string;
    deliveryTime: string;
    tags: string[];
}

export type OnlineServiceBadgeType = 'bestseller' | 'pro' | 'new' | 'featured' | 'choice';