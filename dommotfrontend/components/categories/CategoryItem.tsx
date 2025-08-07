import React from 'react';
import { Category } from '../../types';

interface CategoryItemProps {
    category: Category;
}

export const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {
    return (
        <button
            className={`flex flex-col items-center min-w-0 flex-shrink-0 group pb-3 px-2 rounded-lg transition-all duration-300 relative ${category.active
                ? 'border-b-2 border-transparent bg-gradient-to-t from-sky-50 to-transparent'
                : 'border-b-2 border-transparent hover:bg-gradient-to-t hover:from-sky-50 hover:to-transparent'
                }`}
        >
            {category.active && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-sky-500 to-sky-600 rounded-full"></div>
            )}
            <div className={`text-xl lg:text-2xl mb-2 transition-all duration-300 ${category.active ? 'opacity-100 transform scale-110' : 'opacity-60 group-hover:opacity-100 group-hover:transform group-hover:scale-105'
                }`}>
                {category.icon}
            </div>
            <span className={`text-xs font-medium whitespace-nowrap transition-colors duration-300 ${category.active ? 'text-sky-800 font-semibold' : 'text-gray-500 group-hover:text-sky-700'
                }`}>
                {category.name}
            </span>
        </button>
    );
};