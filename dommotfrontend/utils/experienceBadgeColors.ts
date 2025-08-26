import { ExperienceBadge } from '../types/experience';

/**
 * Get Tailwind CSS classes for experience badge styling
 * @param badge - The experience badge type
 * @returns Tailwind CSS classes string for badge styling
 */
export const getExperienceBadgeColor = (badge: ExperienceBadge): string => {
  const badgeColors: Record<ExperienceBadge, string> = {
    'Premium': 'bg-purple-100 text-purple-800 border border-purple-200',
    'Popular': 'bg-orange-100 text-orange-800 border border-orange-200',
    'New': 'bg-green-100 text-green-800 border border-green-200',
    'Limited Slots': 'bg-red-100 text-red-800 border border-red-200',
    'Best Value': 'bg-blue-100 text-blue-800 border border-blue-200',
    'Eco-Friendly': 'bg-emerald-100 text-emerald-800 border border-emerald-200',
    'Local Favorite': 'bg-amber-100 text-amber-800 border border-amber-200',
  };

  return badgeColors[badge] || 'bg-gray-100 text-gray-800 border border-gray-200';
};