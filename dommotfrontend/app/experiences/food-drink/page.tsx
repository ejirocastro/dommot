import { Metadata } from 'next';
import FoodDrinkClient from './FoodDrinkClient';

export const metadata: Metadata = {
    title: 'Food & Drink Experiences | Dommot',
    description: 'Discover culinary experiences in Lagos - wine tastings, cooking classes, and food tours with local experts',
    keywords: 'Lagos food tours, wine tasting Lagos, cooking classes Nigeria, culinary experiences Lagos',
};

/**
 * Server Component for Food & Drink Experience Category Page
 * 
 * This server component handles metadata and renders the client component
 * for the food and drink experience category page.
 */
export default function FoodDrinkPage() {
    return <FoodDrinkClient />;
}
