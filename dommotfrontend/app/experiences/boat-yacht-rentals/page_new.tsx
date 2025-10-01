import { Metadata } from 'next';
import BoatYachtRentalsClient from './BoatYachtRentalsClient';

export const metadata: Metadata = {
    title: 'Boat & Yacht Rentals | Dommot',
    description: 'Charter luxury boats and yachts in Lagos - sunset cruises, private charters, and maritime adventures',
    keywords: 'Lagos boat rentals, yacht charter Lagos, luxury boats Nigeria, sunset cruises Lagos',
};

/**
 * Server Component for Boat & Yacht Rentals Experience Category Page
 * 
 * This server component handles metadata and renders the client component
 * for the boat and yacht rentals experience category page.
 */
export default function BoatYachtRentalsPage() {
    return <BoatYachtRentalsClient />;
}
