import React from 'react';
import { OnlineCategory } from '@/types';

interface OnlineCategoryItemProps {
    category: OnlineCategory;
}

const OnlineCategoryItem: React.FC<OnlineCategoryItemProps> = ({ category }) => {
    return (
        <button
            className={`flex flex-col items-center space-y-2 p-4 rounded-xl transition-all duration-300 hover:bg-sky-50 hover:scale-110 ${
                category.isActive ? 'bg-sky-100 scale-105' : 'hover:bg-gray-50'
            }`}
        >
            <div className="text-2xl">{category.icon}</div>
            <span className={`text-sm font-medium whitespace-nowrap ${
                category.isActive ? 'text-sky-700' : 'text-gray-700'
            }`}>
                {category.name}
            </span>
            {category.count && (
                <span className="text-xs text-gray-500">({category.count})</span>
            )}
        </button>
    );
};

export default OnlineCategoryItem;