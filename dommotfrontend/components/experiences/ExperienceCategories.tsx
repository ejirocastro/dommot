import React, { useState } from 'react';
import Link from 'next/link';
import { FilterOption } from '../../data/experiences';
import { getCategoryUrl } from '../../utils';

interface ExperienceCategoriesProps {
    categories: FilterOption[];
}

const ExperienceCategories: React.FC<ExperienceCategoriesProps> = ({ categories }) => {
    const [activeCategory, setActiveCategory] = useState<string>('all');

    return (
        <div className="flex items-center space-x-4 overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
                <Link
                    key={category.id}
                    href={getCategoryUrl(category.id, 'experiences')}
                    className="block min-w-0 flex-shrink-0"
                >
                    <div
                        onClick={() => setActiveCategory(category.id)}
                        className={`flex flex-col items-center p-3 rounded-xl transition-all duration-300 whitespace-nowrap min-w-fit cursor-pointer ${activeCategory === category.id
                                ? 'bg-sky-100/80 text-sky-800 border border-sky-200 shadow-sm'
                                : 'text-gray-600 hover:text-sky-700 hover:bg-sky-50/50'
                            }`}
                    >
                        <span className="text-xl mb-1">{category.icon}</span>
                        <span className="text-xs font-medium">{category.name}</span>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default ExperienceCategories;