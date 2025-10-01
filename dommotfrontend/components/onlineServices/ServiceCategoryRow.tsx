/**
 * ServiceCategoryRow Component
 *
 * Wrapper component for service-specific category rows.
 * Uses GenericCategoryRow for implementation, eliminating code duplication.
 *
 * @author Dommot Development Team
 * @version 2.0.0
 */

'use client';

import React from 'react';
import { GenericCategoryRow } from '../common/GenericCategoryRow';
import { OnlineService } from '@/types';
import ServiceCard from './ServiceCard';

/**
 * ServiceCategoryRowProps - Props interface for the ServiceCategoryRow component
 */
interface ServiceCategoryRowProps {
    categoryName: string;
    categoryIcon: string;
    services: OnlineService[];
    currentImageIndex: Record<number, number>;
    setCurrentImageIndex: React.Dispatch<React.SetStateAction<Record<number, number>>>;
    favorites: Set<number>;
    setFavorites: React.Dispatch<React.SetStateAction<Set<number>>>;
}

/**
 * ServiceCategoryRow - Horizontal scrolling service container
 */
const ServiceCategoryRow: React.FC<ServiceCategoryRowProps> = ({
    categoryName,
    categoryIcon,
    services,
    currentImageIndex,
    setCurrentImageIndex,
    favorites,
    setFavorites
}) => {
    return (
        <GenericCategoryRow
            categoryName={categoryName}
            categoryIcon={categoryIcon}
            items={services}
            itemType="services"
            currentImageIndex={currentImageIndex}
            setCurrentImageIndex={setCurrentImageIndex}
            favorites={favorites}
            setFavorites={setFavorites}
            CardComponent={ServiceCard}
            gapClass="gap-4 lg:gap-5"
        />
    );
};

export default ServiceCategoryRow;
