import React from 'react';
import { FilterOption } from '../../data/experiences';
import { FilterButtons } from '../categories/FilterButtons';
import ExperienceCategories from './ExperienceCategories';

interface ExperienceCategoriesSectionProps {
    scrollY: number;
    categories: FilterOption[];
}

const ExperienceCategoriesSection: React.FC<ExperienceCategoriesSectionProps> = ({ scrollY, categories }) => {
    return (
        <div className={`border-b border-sky-200/50 sticky z-40 transition-all duration-300 ${scrollY > 100 ? 'top-16 lg:top-20 bg-white/95 backdrop-blur-xl shadow-lg' : 'top-16 lg:top-20 bg-white/90 backdrop-blur-md shadow-sm'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between py-4 lg:py-6">
                    <ExperienceCategories categories={categories} />
                    <FilterButtons />
                </div>
            </div>
        </div>
    );
};

export default ExperienceCategoriesSection;