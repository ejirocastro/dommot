import { Metadata } from 'next';
import AdventureNatureClient from './AdventureNatureClient';

export const metadata: Metadata = {
    title: 'Adventure & Nature Experiences | Dommot',
    description: 'Discover outdoor adventures and nature experiences around Lagos - hiking, wildlife, and eco-tours',
    keywords: 'Lagos adventures, nature tours, outdoor activities, hiking Lagos, eco-tours Nigeria',
};

/**
 * Server Component for Adventure & Nature Experience Category Page
 * 
 * This server component handles metadata and renders the client component
 * for the adventure and nature experience category page.
 */
export default function AdventureNaturePage() {
    return <AdventureNatureClient />;
}
