import React from 'react';
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

const ExperienceGrid: React.FC<ExperienceGridProps> = ({
    experiences,
    categories,
    currentImageIndex,
    setCurrentImageIndex,
    favorites,
    setFavorites
}) => {
    // Group experiences by category
    const experiencesByCategory = experiences.reduce((acc, experience) => {
        if (!acc[experience.category]) {
            acc[experience.category] = [];
        }
        acc[experience.category].push(experience);
        return acc;
    }, {} as Record<string, Experience[]>);

    // Get category names (excluding 'All Experiences')
    const categoryNames = categories.slice(1).map(cat => {
        const categoryMap: Record<string, string> = {
            'restaurants': 'Restaurants',
            'clubs-nightlife': 'Clubs & Nightlife',
            'adventure-nature': 'Adventure & Nature',
            'cultural-tours': 'Cultural Tours',
            'food-drink': 'Food & Drink',
            'entertainment': 'Entertainment',
            'sports-wellness': 'Sports & Wellness'
        };
        return categoryMap[cat.id] || cat.name;
    });

    return (
        <main className="max-w-7xl mx-auto py-6 lg:py-8 relative z-10">
            {categoryNames.map((categoryName) => {
                const categoryExperiences = experiencesByCategory[categoryName] || [];
                const categoryInfo = categories.find(cat => {
                    const categoryMap: Record<string, string> = {
                        'restaurants': 'Restaurants',
                        'clubs-nightlife': 'Clubs & Nightlife',
                        'adventure-nature': 'Adventure & Nature',
                        'cultural-tours': 'Cultural Tours',
                        'food-drink': 'Food & Drink',
                        'entertainment': 'Entertainment',
                        'sports-wellness': 'Sports & Wellness'
                    };
                    return categoryMap[cat.id] === categoryName;
                });

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
            <div className="mt-8 lg:mt-12 px-4 sm:px-6 lg:px-8">
                <LoadMoreButton />
            </div>
        </main>
    );
};

export default ExperienceGrid;