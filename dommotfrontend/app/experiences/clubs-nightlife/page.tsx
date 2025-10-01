import { Metadata } from 'next';
import ClubsNightlifeClient from './ClubsNightlifeClient';

export const metadata: Metadata = {
    title: 'Clubs & Nightlife Experiences | Dommot',
    description: 'Discover exclusive nightlife experiences in Lagos. From premium clubs to rooftop lounges, experience the best of Lagos nightlife scene.',
    keywords: 'Lagos nightlife, clubs Lagos, rooftop lounges, live music venues, party experiences',
};

/**
 * Server Component for Clubs & Nightlife Experience Category Page
 * 
 * This server component handles metadata and renders the client component
 * for the clubs and nightlife experience category page.
 */
export default function ClubsNightlifePage() {
    return <ClubsNightlifeClient />;
}