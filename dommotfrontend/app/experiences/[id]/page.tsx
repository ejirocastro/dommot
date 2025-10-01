'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ChevronLeft, Heart, Share, Star, MapPin, Clock, Users, Calendar, ArrowRight } from 'lucide-react';
import { experiences, Experience } from '../../../data';
import { SimpleHeader } from '../../../components';

export default function ExperienceDetailPage() {
    const params = useParams();
    const router = useRouter();
    
    if (!params?.id) {
        return (
            <div className="min-h-screen bg-gray-50">
                <SimpleHeader />
                <div className="max-w-4xl mx-auto px-4 py-12 text-center">
                    <h1 className="text-2xl font-bold mb-4">Experience not found</h1>
                    <p className="text-gray-600">No experience ID provided.</p>
                </div>
            </div>
        );
    }
    
    const experienceId = parseInt(params.id as string);

    const [experience, setExperience] = useState<Experience | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isFavorite, setIsFavorite] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [guestCount, setGuestCount] = useState(1);

    useEffect(() => {
        const foundExperience = experiences.find(e => e.id === experienceId);
        if (foundExperience) {
            setExperience(foundExperience);
            // Check if favorited from localStorage
            const favorites = JSON.parse(localStorage.getItem('experienceFavorites') || '[]');
            setIsFavorite(favorites.includes(experienceId));
        }
    }, [experienceId]);

    const toggleFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem('experienceFavorites') || '[]');
        let newFavorites;

        if (isFavorite) {
            newFavorites = favorites.filter((id: number) => id !== experienceId);
        } else {
            newFavorites = [...favorites, experienceId];
        }

        localStorage.setItem('experienceFavorites', JSON.stringify(newFavorites));
        setIsFavorite(!isFavorite);
    };

    const handleBooking = () => {
        if (!selectedDate || !selectedTime) {
            alert('Please select a date and time for your experience');
            return;
        }

        const total = (experience?.price || 0) * guestCount;
        router.push(`/book/experience/${experienceId}?date=${selectedDate}&time=${selectedTime}&guests=${guestCount}&total=${total}`);
    };

    if (!experience) {
        return (
            <div className="min-h-screen bg-gray-50">
                <SimpleHeader />
                <div className="max-w-4xl mx-auto px-4 py-12 text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Experience Not Found</h1>
                    <p className="text-gray-600 mb-6">The experience you're looking for doesn't exist.</p>
                    <button
                        onClick={() => router.push('/experiences')}
                        className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-lg transition-colors"
                    >
                        Back to Experiences
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <SimpleHeader />

            {/* Back Button */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
                <button
                    onClick={() => router.back()}
                    className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                >
                    <ChevronLeft className="w-5 h-5 mr-1" />
                    Back
                </button>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Content Area */}
                    <div className="lg:col-span-2">
                        {/* Image Gallery */}
                        <div className="mb-8">
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                                <img
                                    src={experience.images[currentImageIndex]}
                                    alt={experience.title}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                                <div className="absolute bottom-4 left-4 flex space-x-2">
                                    {experience.images.map((_: string, index: number) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentImageIndex(index)}
                                            className={`w-2 h-2 rounded-full transition-colors ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {experience.images.length > 1 && (
                                <div className="flex gap-2 overflow-x-auto pb-2">
                                    {experience.images.map((image: string, index: number) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentImageIndex(index)}
                                            className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden transition-all ${currentImageIndex === index ? 'ring-2 ring-sky-500' : 'hover:opacity-80'
                                                }`}
                                        >
                                            <img
                                                src={image}
                                                alt={`${experience.title} ${index + 1}`}
                                                className="w-full h-full object-cover"
                                                loading="lazy"
                                            />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Header */}
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    {experience.badge && (
                                        <span className="bg-sky-100 text-sky-800 text-xs font-medium px-2 py-1 rounded-full">
                                            {experience.badge}
                                        </span>
                                    )}
                                    <div className="flex items-center text-sm text-gray-600">
                                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                                        {experience.rating}
                                    </div>
                                </div>
                                <h1 className="text-3xl font-bold text-gray-900 mb-2">{experience.title}</h1>
                                <div className="flex items-center text-gray-600 space-x-4">
                                    <div className="flex items-center">
                                        <MapPin className="w-4 h-4 mr-1" />
                                        {experience.location}
                                    </div>
                                    <div className="flex items-center">
                                        <Clock className="w-4 h-4 mr-1" />
                                        {experience.duration}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center space-x-2">
                                <button
                                    onClick={toggleFavorite}
                                    className={`p-2 rounded-full transition-colors ${isFavorite ? 'bg-sky-100 text-sky-600' : 'bg-gray-100 text-gray-600'
                                        }`}
                                >
                                    <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
                                </button>
                                <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                                    <Share className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">About this experience</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                {experience.description}
                            </p>
                        </div>

                        {/* Highlights */}
                        {experience.highlights && (
                            <div className="mb-8">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">What you'll do</h2>
                                <div className="grid grid-cols-1 gap-3">
                                    {experience.highlights.map((highlight: string, index: number) => (
                                        <div key={index} className="flex items-start space-x-3">
                                            <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <span className="text-gray-700">{highlight}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Host Info */}
                        {experience.host && (
                            <div className="mb-8 p-6 bg-gray-50 rounded-2xl">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">Meet your host</h2>
                                <div className="flex items-center space-x-4">
                                    <img
                                        src={experience.host.avatar}
                                        alt={experience.host.name}
                                        className="w-16 h-16 rounded-full object-cover"
                                    />
                                    <div>
                                        <div className="flex items-center space-x-2">
                                            <h3 className="text-lg font-semibold text-gray-900">{experience.host.name}</h3>
                                            {experience.host.isVerified && (
                                                <div className="flex items-center text-blue-600">
                                                    <Star className="w-4 h-4 fill-current" />
                                                </div>
                                            )}
                                        </div>
                                        <p className="text-gray-600">Experience host</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Booking Card */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-4 bg-white border border-gray-200 rounded-2xl shadow-lg p-6">
                            <div className="flex items-baseline justify-between mb-6">
                                <div>
                                    <span className="text-2xl font-bold text-gray-900">₦{experience.price.toLocaleString()}</span>
                                    <span className="text-gray-600"> / person</span>
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                                    {experience.rating}
                                </div>
                            </div>

                            <div className="space-y-4 mb-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Select date
                                    </label>
                                    <input
                                        type="date"
                                        value={selectedDate}
                                        onChange={(e) => setSelectedDate(e.target.value)}
                                        min={new Date().toISOString().split('T')[0]}
                                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Available times
                                    </label>
                                    <select
                                        value={selectedTime}
                                        onChange={(e) => setSelectedTime(e.target.value)}
                                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                                    >
                                        <option value="">Select time</option>
                                        {experience.availableSlots?.map((slot: string, index: number) => (
                                            <option key={index} value={slot}>{slot}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Guests
                                    </label>
                                    <select
                                        value={guestCount}
                                        onChange={(e) => setGuestCount(parseInt(e.target.value))}
                                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                                    >
                                        {[1, 2, 3, 4, 5, 6].map(num => (
                                            <option key={num} value={num}>{num} guest{num > 1 ? 's' : ''}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {selectedDate && selectedTime && (
                                <div className="space-y-2 mb-4 p-4 bg-gray-50 rounded-lg">
                                    <div className="flex justify-between text-sm">
                                        <span>₦{experience.price.toLocaleString()} x {guestCount} guest{guestCount > 1 ? 's' : ''}</span>
                                        <span>₦{(experience.price * guestCount).toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between font-semibold">
                                        <span>Total</span>
                                        <span>₦{(experience.price * guestCount).toLocaleString()}</span>
                                    </div>
                                </div>
                            )}

                            <button
                                onClick={handleBooking}
                                className="w-full bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
                            >
                                Book Experience
                            </button>

                            <p className="text-center text-sm text-gray-600 mt-3">
                                You won't be charged yet
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
