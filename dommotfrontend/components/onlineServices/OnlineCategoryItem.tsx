import React from 'react';
import { OnlineCategory } from '@/types';

interface OnlineCategoryItemProps {
    category: OnlineCategory;
}

const OnlineCategoryItem: React.FC<OnlineCategoryItemProps> = ({ category }) => {
    return (
        <button
            className={`flex flex-col items-center space-y-2 px-4 py-3 rounded-2xl transition-all duration-500 ease-out hover:-translate-y-0.5 ${
                category.isActive 
                    ? 'bg-black text-white shadow-lg' 
                    : 'hover:bg-gray-50 text-gray-600 hover:text-black'
            }`}
        >
            <div className="text-xl">{category.icon}</div>
            <span className={`text-xs font-medium whitespace-nowrap tracking-wide ${
                category.isActive ? 'text-white' : ''
            }`}>
                {category.name}
            </span>
            {category.count && (
                <span className={`text-xs ${category.isActive ? 'text-gray-300' : 'text-gray-400'}`}>
                    ({category.count})
                </span>
            )}
        </button>
    );
};

export default OnlineCategoryItem;