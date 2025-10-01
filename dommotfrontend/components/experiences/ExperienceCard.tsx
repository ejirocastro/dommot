import React from 'react';
import { Experience } from '@/types';
import { getUnifiedBadgeColor } from '@/utils';
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
            className="group cursor-pointer transform hover:scale-[1.02] transition-all duration-400"
            style={{ animationDelay: `${index * 100}ms` }} // Staggered entrance animation
        >
            <div className="relative overflow-hidden rounded-xl mb-2 shadow-md hover:shadow-xl hover:shadow-sky-500/20 transition-all duration-400">
                <ExperienceImage
                    experience={experience}
                    currentImageIndex={currentImageIndex}
                    onImageNext={onImageNext}
                    onImagePrev={onImagePrev}
                    getBadgeColor={(badge) => getUnifiedBadgeColor(badge, 'gradient')}
                />
                <FavoriteButton isFavorite={isFavorite} onToggleFavorite={onToggleFavorite} />
                <ImageIndicators images={experience.images} currentIndex={currentImageIndex} />
            </div>
            <ExperienceInfo experience={experience} />
        </div>
    );
};

export default ExperienceCard;