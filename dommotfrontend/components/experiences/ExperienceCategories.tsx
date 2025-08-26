import React, { useState } from 'react';
import { FilterOption } from '../../data/experiences';

interface ExperienceCategoriesProps {
    categories: FilterOption[];
}

const ExperienceCategories: React.FC<ExperienceCategoriesProps> = ({ categories }) => {
    const [activeCategory, setActiveCategory] = useState<string>('all');

    return (
        <div className="flex items-center space-x-4 overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
                <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex flex-col items-center p-3 rounded-xl transition-all duration-300 whitespace-nowrap min-w-fit ${
                        activeCategory === category.id
                            ? 'bg-sky-100/80 text-sky-800 border border-sky-200 shadow-sm'
                            : 'text-gray-600 hover:text-sky-700 hover:bg-sky-50/50'
                    }`}
                >
                    <span className="text-xl mb-1">{category.icon}</span>
                    <span className="text-xs font-medium">{category.name}</span>
                </button>
            ))}
        </div>
    );
};

export default ExperienceCategories;