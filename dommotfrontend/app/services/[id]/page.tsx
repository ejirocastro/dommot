'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ChevronLeft, Heart, Share, Star, MapPin, Clock, Shield, ArrowRight } from 'lucide-react';
import { onlineServices, OnlineService } from '../../../data';
import { SimpleHeader } from '../../../components';

export default function ServiceDetailPage() {
    const params = useParams();
    const router = useRouter();
    
    if (!params?.id) {
        return (
            <div className="min-h-screen bg-gray-50">
                <SimpleHeader />
                <div className="max-w-4xl mx-auto px-4 py-12 text-center">
                    <h1 className="text-2xl font-bold mb-4">Service not found</h1>
                    <p className="text-gray-600">No service ID provided.</p>
                </div>
            </div>
        );
    }
    
    const serviceId = parseInt(params.id as string);

    const [service, setService] = useState<OnlineService | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isFavorite, setIsFavorite] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const foundService = onlineServices.find(s => s.id === serviceId);
        if (foundService) {
            setService(foundService);
            // Check if favorited from localStorage
            const favorites = JSON.parse(localStorage.getItem('serviceFavorites') || '[]');
            setIsFavorite(favorites.includes(serviceId));
        }
    }, [serviceId]);

    const toggleFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem('serviceFavorites') || '[]');
        let newFavorites;

        if (isFavorite) {
            newFavorites = favorites.filter((id: number) => id !== serviceId);
        } else {
            newFavorites = [...favorites, serviceId];
        }

        localStorage.setItem('serviceFavorites', JSON.stringify(newFavorites));
        setIsFavorite(!isFavorite);
    };

    const handleBooking = () => {
        if (!selectedDate) {
            alert('Please select a date for your service');
            return;
        }

        const total = (service?.price || 0) * quantity;
        router.push(`/book/service/${serviceId}?date=${selectedDate}&time=${selectedTime}&quantity=${quantity}&total=${total}`);
    };

    if (!service) {
        return (
            <div className="min-h-screen bg-gray-50">
                <SimpleHeader />
                <div className="max-w-4xl mx-auto px-4 py-12 text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
                    <p className="text-gray-600 mb-6">The service you're looking for doesn't exist.</p>
                    <button
                        onClick={() => router.push('/online')}
                        className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors"
                    >
                        Back to Services
                    </button>
                </div>
            </div>
        );
    }

    const timeSlots = ['9:00 AM', '11:00 AM', '1:00 PM', '3:00 PM', '5:00 PM'];

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
                                    src={service.images[currentImageIndex]}
                                    alt={service.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-4 left-4 flex space-x-2">
                                    {service.images.map((_: string, index: number) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentImageIndex(index)}
                                            className={`w-2 h-2 rounded-full transition-colors ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {service.images.length > 1 && (
                                <div className="flex gap-2 overflow-x-auto pb-2">
                                    {service.images.map((image: string, index: number) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentImageIndex(index)}
                                            className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden transition-all ${currentImageIndex === index ? 'ring-2 ring-green-500' : 'hover:opacity-80'
                                                }`}
                                        >
                                            <img
                                                src={image}
                                                alt={`${service.title} ${index + 1}`}
                                                className="w-full h-full object-cover"
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
                                    {service.badge && (
                                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                                            {service.badge}
                                        </span>
                                    )}
                                    <div className="flex items-center text-sm text-gray-600">
                                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                                        {service.rating} ({service.reviews} reviews)
                                    </div>
                                </div>
                                <h1 className="text-3xl font-bold text-gray-900 mb-2">{service.title}</h1>
                                <div className="flex items-center text-gray-600 space-x-4">
                                    <div className="flex items-center">
                                        <Shield className="w-4 h-4 mr-1" />
                                        {service.provider}
                                    </div>
                                    <div className="flex items-center">
                                        <Clock className="w-4 h-4 mr-1" />
                                        {service.deliveryTime}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center space-x-2">
                                <button
                                    onClick={toggleFavorite}
                                    className={`p-2 rounded-full transition-colors ${isFavorite ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'
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
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">About this service</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                {service.description}
                            </p>
                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                                <div className="flex items-center">
                                    <Clock className="w-4 h-4 mr-1" />
                                    Duration: {service.duration}
                                </div>
                            </div>
                        </div>

                        {/* Service Tags */}
                        {service.tags && service.tags.length > 0 && (
                            <div className="mb-8">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">Service features</h2>
                                <div className="flex flex-wrap gap-2">
                                    {service.tags.map((tag: string, index: number) => (
                                        <span
                                            key={index}
                                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Provider Info */}
                        <div className="mb-8 p-6 bg-gray-50 rounded-2xl">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Service provider</h2>
                            <div className="flex items-center space-x-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                    {service.provider.charAt(0)}
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">{service.provider}</h3>
                                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                                        <div className="flex items-center">
                                            <Star className="w-4 h-4 text-yellow-400 mr-1" />
                                            {service.rating} rating
                                        </div>
                                        <span>{service.reviews} reviews</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Booking Card */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-4 bg-white border border-gray-200 rounded-2xl shadow-lg p-6">
                            <div className="flex items-baseline justify-between mb-6">
                                <div>
                                    <span className="text-2xl font-bold text-gray-900">{service.currency}{service.price.toLocaleString()}</span>
                                    <span className="text-gray-600"> / service</span>
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                                    {service.rating}
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
                                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Preferred time
                                    </label>
                                    <select
                                        value={selectedTime}
                                        onChange={(e) => setSelectedTime(e.target.value)}
                                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                    >
                                        <option value="">Select time</option>
                                        {timeSlots.map((slot: string, index: number) => (
                                            <option key={index} value={slot}>{slot}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Quantity
                                    </label>
                                    <select
                                        value={quantity}
                                        onChange={(e) => setQuantity(parseInt(e.target.value))}
                                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                    >
                                        {[1, 2, 3, 4, 5].map((num: number) => (
                                            <option key={num} value={num}>{num}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {selectedDate && (
                                <div className="space-y-2 mb-4 p-4 bg-gray-50 rounded-lg">
                                    <div className="flex justify-between text-sm">
                                        <span>{service.currency}{service.price.toLocaleString()} x {quantity}</span>
                                        <span>{service.currency}{(service.price * quantity).toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between font-semibold">
                                        <span>Total</span>
                                        <span>{service.currency}{(service.price * quantity).toLocaleString()}</span>
                                    </div>
                                    <div className="text-xs text-gray-500 mt-2">
                                        Delivery: {service.deliveryTime}
                                    </div>
                                </div>
                            )}

                            <button
                                onClick={handleBooking}
                                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
                            >
                                Book Service
                            </button>

                            <p className="text-center text-sm text-gray-600 mt-3">
                                Secure booking • No hidden fees
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
