import { Metadata } from 'next';
import SportsWellnessClient from './SportsWellnessClient';

export const metadata: Metadata = {
    title: 'Sports & Wellness Experiences | Dommot',
    description: 'Discover sports and wellness experiences in Lagos - fitness classes, spa treatments, yoga, and wellness retreats',
    keywords: 'Lagos fitness, wellness Lagos, spa treatments Nigeria, sports activities Lagos, yoga classes',
};

/**
 * Server Component for Sports & Wellness Experience Category Page
 * 
 * This server component handles metadata and renders the client component
 * for the sports and wellness experience category page.
 */
export default function SportsWellnessPage() {
    return <SportsWellnessClient />;
}
