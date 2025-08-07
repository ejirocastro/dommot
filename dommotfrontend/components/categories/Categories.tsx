import React from 'react';
import { CategoryItem } from './CategoryItem';
import { Category } from '../../types';

interface CategoriesProps {
    categories: Category[];
}

export const Categories: React.FC<CategoriesProps> = ({ categories }) => {
    return (
        <div className="flex items-center space-x-4 lg:space-x-8 overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
                <CategoryItem key={category.name} category={category} />
            ))}
        </div>
    );
};
