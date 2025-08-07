import { OnlineServiceBadgeType } from '@/types';

export const getOnlineBadgeColor = (badge: OnlineServiceBadgeType): string => {
  const colors: Record<OnlineServiceBadgeType, string> = {
    'bestseller': 'bg-gradient-to-r from-yellow-400 to-amber-500 text-black',
    'pro': 'bg-gradient-to-r from-sky-500 to-sky-600 text-white',
    'new': 'bg-gradient-to-r from-sky-400 to-cyan-500 text-white',
    'featured': 'bg-gradient-to-r from-orange-500 to-red-500 text-white',
    'choice': 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
  };
  return colors[badge] || 'bg-gray-500 text-white';
};