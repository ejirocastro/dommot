import React from 'react';
import { Experience } from '@/types';
import ExperienceCard from './ExperienceCard';

interface ExperienceCategoryRowProps {
    categoryName: string;
    categoryIcon: string;
    experiences: Experience[];
    currentImageIndex: Record<number, number>;
    setCurrentImageIndex: React.Dispatch<React.SetStateAction<Record<number, number>>>;
    favorites: Set<number>;
    setFavorites: React.Dispatch<React.SetStateAction<Set<number>>>;
}

const ExperienceCategoryRow: React.FC<ExperienceCategoryRowProps> = ({
    categoryName,
    categoryIcon,
    experiences,
    currentImageIndex,
    setCurrentImageIndex,
    favorites,
    setFavorites
}) => {
    // Don't render if no experiences in this category
    if (experiences.length === 0) return null;

    /**
     * Handle advancing to next image for a specific experience
     */
    const handleImageNext = (experienceId: number, totalImages: number) => {
        setCurrentImageIndex(prev => ({
            ...prev,
            [experienceId]: ((prev[experienceId] || 0) + 1) % totalImages
        }));
    };

    /**
     * Handle going to previous image for a specific experience
     */
    const handleImagePrev = (experienceId: number, totalImages: number) => {
        setCurrentImageIndex(prev => ({
            ...prev,
            [experienceId]: ((prev[experienceId] || 0) - 1 + totalImages) % totalImages
        }));
    };

    /**
     * Handle toggling favorite status for a specific experience
     */
    const handleToggleFavorite = (experienceId: number) => {
        setFavorites(prev => {
            const newFavorites = new Set(prev);
            if (newFavorites.has(experienceId)) {
                newFavorites.delete(experienceId);
            } else {
                newFavorites.add(experienceId);
            }
            return newFavorites;
        });
    };

    return (
        <section className="mb-8 lg:mb-12 px-4 sm:px-6 lg:px-8">
            {/* Category header */}
            <div className="flex items-center mb-6 lg:mb-8">
                <div className="flex items-center">
                    <span className="text-2xl mr-3">{categoryIcon}</span>
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">{categoryName}</h2>
                </div>
            </div>

            {/* Horizontal scrolling container */}
            <div className="overflow-x-auto scrollbar-hide">
                <div className="flex space-x-4 lg:space-x-6 pb-4">
                    {experiences.map((experience, index) => (
                        <div key={experience.id} className="flex-shrink-0 w-80 lg:w-96">
                            <ExperienceCard
                                experience={experience}
                                index={index}
                                currentImageIndex={currentImageIndex[experience.id] || 0}
                                isFavorite={favorites.has(experience.id)}
                                onImageNext={() => handleImageNext(experience.id, experience.images.length)}
                                onImagePrev={() => handleImagePrev(experience.id, experience.images.length)}
                                onToggleFavorite={() => handleToggleFavorite(experience.id)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceCategoryRow;