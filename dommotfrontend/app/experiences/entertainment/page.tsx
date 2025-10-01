import { Metadata } from 'next';
import EntertainmentClient from './EntertainmentClient';

export const metadata: Metadata = {
    title: 'Entertainment Experiences | Dommot',
    description: 'Discover entertainment experiences in Lagos - shows, concerts, theater performances, and cultural events',
    keywords: 'Lagos entertainment, shows Lagos, concerts Nigeria, theater Lagos, cultural events',
};

/**
 * Server Component for Entertainment Experience Category Page
 * 
 * This server component handles metadata and renders the client component
 * for the entertainment experience category page.
 */
export default function EntertainmentPage() {
    return <EntertainmentClient />;
}
