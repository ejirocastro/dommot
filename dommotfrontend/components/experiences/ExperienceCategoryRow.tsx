/**
 * ExperienceCategoryRow Component
 *
 * Wrapper component for experience-specific category rows.
 * Uses GenericCategoryRow for implementation, eliminating code duplication.
 *
 * @author Dommot Development Team
 * @version 2.0.0
 */

'use client';

import React from 'react';
import { GenericCategoryRow } from '../common/GenericCategoryRow';
import { Experience } from '@/types';
import ExperienceCard from './ExperienceCard';

/**
 * ExperienceCategoryRowProps - Props interface for the ExperienceCategoryRow component
 */
interface ExperienceCategoryRowProps {
    categoryName: string;
    categoryIcon: string;
    experiences: Experience[];
    currentImageIndex: Record<number, number>;
    setCurrentImageIndex: React.Dispatch<React.SetStateAction<Record<number, number>>>;
    favorites: Set<number>;
    setFavorites: React.Dispatch<React.SetStateAction<Set<number>>>;
}

/**
 * ExperienceCategoryRow - Horizontal scrolling experience container
 */
const ExperienceCategoryRow: React.FC<ExperienceCategoryRowProps> = ({
    categoryName,
    categoryIcon,
    experiences,
    currentImageIndex,
    setCurrentImageIndex,
    favorites,
    setFavorites
}) => {
    return (
        <GenericCategoryRow
            categoryName={categoryName}
            categoryIcon={categoryIcon}
            items={experiences}
            itemType="experiences"
            currentImageIndex={currentImageIndex}
            setCurrentImageIndex={setCurrentImageIndex}
            favorites={favorites}
            setFavorites={setFavorites}
            CardComponent={ExperienceCard}
        />
    );
};

export default ExperienceCategoryRow;
