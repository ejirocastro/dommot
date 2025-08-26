import React from 'react';
import { Experience } from '@/types';
import { getExperienceBadgeColor } from '@/utils';
import ExperienceImage from './ExperienceImage';
import ExperienceInfo from './ExperienceInfo';
import { FavoriteButton } from '../listings/FavoriteButton';
import { ImageIndicators } from '../listings/ImageIndicators';

interface ExperienceCardProps {
    experience: Experience;
    index: number;
    currentImageIndex: number;
    isFavorite: boolean;
    onImageNext: () => void;
    onImagePrev: () => void;
    onToggleFavorite: () => void;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
    experience,
    index,
    currentImageIndex,
    isFavorite,
    onImageNext,
    onImagePrev,
    onToggleFavorite
}) => {
    return (
        <div
            className="group cursor-pointer transition-all duration-700 ease-out hover:-translate-y-1 hover:scale-[1.02]"
            style={{ 
                animationDelay: `${index * 150}ms`,
                opacity: 0,
                animation: 'fadeInUp 0.8s ease-out forwards'
            }}
        >
            <div className="relative overflow-hidden rounded-3xl mb-6 bg-white shadow-sm hover:shadow-2xl hover:shadow-sky-500/20 transition-all duration-700 ease-out border border-gray-100/50">
                <ExperienceImage
                    experience={experience}
                    currentImageIndex={currentImageIndex}
                    onImageNext={onImageNext}
                    onImagePrev={onImagePrev}
                    getBadgeColor={getExperienceBadgeColor}
                />
                <FavoriteButton isFavorite={isFavorite} onToggleFavorite={onToggleFavorite} />
                <ImageIndicators images={experience.images} currentIndex={currentImageIndex} />
            </div>
            <ExperienceInfo experience={experience} />
        </div>
    );
};

export default ExperienceCard;