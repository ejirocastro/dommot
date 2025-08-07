import React from 'react';
import { OnlineCategory } from '@/types';
import OnlineCategoryItem from './OnlineCategoryItem';

interface OnlineCategoriesProps {
    categories: OnlineCategory[];
}

const OnlineCategories: React.FC<OnlineCategoriesProps> = ({ categories }) => {
    return (
        <div className="flex items-center space-x-4 lg:space-x-8 overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
                <OnlineCategoryItem key={category.name} category={category} />
            ))}
        </div>
    );
};

export default OnlineCategories;