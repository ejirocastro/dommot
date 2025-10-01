import { ExperienceBadge } from '../types/experience';

/**
 * Get Tailwind CSS classes for experience badge styling
 * Updated to use gradient styling for consistency with listings and services
 * @param badge - The experience badge type
 * @returns Tailwind CSS classes string for badge styling
 */
export const getExperienceBadgeColor = (badge: ExperienceBadge): string => {
  const badgeColors: Record<ExperienceBadge, string> = {
    'Premium': 'bg-gradient-to-r from-purple-500 to-pink-500 text-white',
    'Popular': 'bg-gradient-to-r from-orange-500 to-red-500 text-white',
    'New': 'bg-gradient-to-r from-sky-400 to-cyan-500 text-white',
    'Limited Slots': 'bg-gradient-to-r from-red-500 to-rose-500 text-white',
    'Best Value': 'bg-gradient-to-r from-sky-600 to-sky-700 text-white',
    'Eco-Friendly': 'bg-gradient-to-r from-green-500 to-lime-500 text-white',
    'Local Favorite': 'bg-gradient-to-r from-amber-500 to-yellow-500 text-white',
  };

  return badgeColors[badge] || 'bg-gray-500 text-white';
};
