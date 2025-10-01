import { Metadata } from 'next';
import RestaurantsClient from './RestaurantsClient';

export const metadata: Metadata = {
    title: 'Restaurant Experiences | Dommot',
    description: 'Discover amazing restaurant experiences in Lagos - from fine dining to local cuisine',
    keywords: 'Lagos restaurants, fine dining Lagos, local cuisine, Nigerian food experiences',
};

/**
 * Server Component for Restaurant Experience Category Page
 * 
 * This server component handles metadata and renders the client component
 * for the restaurant experience category page.
 */
export default function RestaurantsPage() {
    return <RestaurantsClient />;
}
