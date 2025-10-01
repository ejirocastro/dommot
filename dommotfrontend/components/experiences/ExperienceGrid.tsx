import React, { useState, useMemo } from 'react';
import { Experience } from '@/types';
import { FilterOption } from '../../data/experiences';
import ExperienceCategoryRow from './ExperienceCategoryRow';
import { LoadMoreButton } from '../listings/LoadMoreButton';

interface ExperienceGridProps {
    experiences: Experience[];
    categories: FilterOption[];
    currentImageIndex: Record<number, number>;
    setCurrentImageIndex: React.Dispatch<React.SetStateAction<Record<number, number>>>;
    favorites: Set<number>;
    setFavorites: React.Dispatch<React.SetStateAction<Set<number>>>;
}

// Category ID to display name mapping (single source of truth)
const EXPERIENCE_CATEGORY_MAP: Record<string, string> = {
    'restaurants': 'Restaurants',
    'clubs-nightlife': 'Clubs & Nightlife',
    'adventure-nature': 'Adventure & Nature',
    'boat-yacht-rentals': 'Boat and Yacht rentals',
    'food-drink': 'Food & Drink',
    'entertainment': 'Entertainment',
    'sports-wellness': 'Sports & Wellness'
};

const ExperienceGrid: React.FC<ExperienceGridProps> = ({
    experiences,
    categories,
    currentImageIndex,
    setCurrentImageIndex,
    favorites,
    setFavorites
}) => {
    // Progressive category loading - start with 3 categories
    const [visibleCategoryCount, setVisibleCategoryCount] = useState(3);

    // Group experiences by category - memoized to avoid recalculation
    const experiencesByCategory = useMemo(() => {
        return experiences.reduce((acc, experience) => {
            if (!acc[experience.category]) {
                acc[experience.category] = [];
            }
            acc[experience.category].push(experience);
            return acc;
        }, {} as Record<string, Experience[]>);
    }, [experiences]);

    // Get category names (excluding 'All Experiences')
    const categoryNames = useMemo(() => {
        return categories.slice(1).map(cat =>
            EXPERIENCE_CATEGORY_MAP[cat.id] || cat.name
        );
    }, [categories]);

    const visibleCategoryNames = categoryNames.slice(0, visibleCategoryCount);
    const hasMoreCategories = visibleCategoryCount < categoryNames.length;

    const loadMoreCategories = () => {
        setVisibleCategoryCount(prev => Math.min(prev + 3, categoryNames.length));
    };

    return (
        <main className="max-w-7xl mx-auto py-6 lg:py-8 relative z-10">
            {visibleCategoryNames.map((categoryName) => {
                const categoryExperiences = experiencesByCategory[categoryName] || [];
                const categoryInfo = categories.find(cat =>
                    EXPERIENCE_CATEGORY_MAP[cat.id] === categoryName
                );

                return (
                    <ExperienceCategoryRow
                        key={categoryName}
                        categoryName={categoryName}
                        categoryIcon={categoryInfo?.icon || '🎯'}
                        experiences={categoryExperiences}
                        currentImageIndex={currentImageIndex}
                        setCurrentImageIndex={setCurrentImageIndex}
                        favorites={favorites}
                        setFavorites={setFavorites}
                    />
                );
            })}

            {hasMoreCategories && (
                <div className="mt-8 lg:mt-12 px-4 sm:px-6 lg:px-8">
                    <button
                        onClick={loadMoreCategories}
                        className="w-full py-4 bg-white hover:bg-sky-50 text-gray-800 font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-sky-100"
                    >
                        Show More Categories ({categoryNames.length - visibleCategoryCount} remaining)
                    </button>
                </div>
            )}
        </main>
    );
};

export default ExperienceGrid;