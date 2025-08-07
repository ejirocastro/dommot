import React from 'react';

interface ImageIndicatorsProps {
    images: string[];
    currentIndex: number;
}

export const ImageIndicators: React.FC<ImageIndicatorsProps> = ({ images, currentIndex }) => {
    return (
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1">
            {images.map((_, idx) => (
                <div
                    key={idx}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex
                            ? 'bg-white scale-125'
                            : 'bg-white/50 hover:bg-white/80'
                        }`}
                />
            ))}
        </div>
    );
};
