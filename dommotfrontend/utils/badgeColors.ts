import { BadgeType } from '../types';

export const getBadgeColor = (badge: BadgeType): string => {
  const colors: Record<BadgeType, string> = {
    'Luxury': 'bg-gradient-to-r from-yellow-400 to-amber-500 text-black',
    'Superhost': 'bg-gradient-to-r from-sky-500 to-sky-600 text-white',
    'Rare Find': 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white',
    'New': 'bg-gradient-to-r from-sky-400 to-cyan-500 text-white',
    'Trending': 'bg-gradient-to-r from-orange-500 to-red-500 text-white',
    'Eco-Friendly': 'bg-gradient-to-r from-green-500 to-lime-500 text-white',
    'Budget Friendly': 'bg-gradient-to-r from-sky-600 to-sky-700 text-white'
  };
  return colors[badge] || 'bg-gray-500 text-white';
};