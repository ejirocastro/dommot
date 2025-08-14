import React from 'react';
import { OnlineCategory } from '@/types';
import OnlineCategoryItem from './OnlineCategoryItem';

interface OnlineCategoriesProps {
    categories: OnlineCategory[];
}

const OnlineCategories: React.FC<OnlineCategoriesProps> = ({ categories }) => {
    return (
        <div className="flex items-center space-x-2 lg:space-x-4 overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
                <OnlineCategoryItem key={category.id} category={category} />
            ))}
        </div>
    );
};

export default OnlineCategories;