'use client';

import React, { useState } from 'react';
import {
    ArrowLeft,
    ArrowRight,
    Home,
    MapPin,
    Camera,
    FileText,
    Wifi,
    Calendar,
    DollarSign,
    Eye,
    Check,
    Upload,
    X,
    Snowflake,
    Car,
    Tv,
    ChefHat,
    WashingMachine,
    Waves,
    Dumbbell,
    Mountain,
    Users,
    Bed,
    Bath,
    Ruler,
    Coffee,
    Flame,
    Gamepad2,
    Dice1,
    TreePine,
    Sofa,
    Utensils,
    Zap
} from 'lucide-react';
import { Logo } from '@/components/header/Logo';

type ListingStep =
    | 'property-type'
    | 'location'
    | 'apartment-details'
    | 'photos'
    | 'availability'
    | 'pricing'
    | 'preview';

interface ListingData {
    propertyType: string;
    location: string;
    photos: string[];
    apartmentDescription: string;
    amenities: string[];
    bedrooms: number;
    bathrooms: number;
    beds: number;
    guestCapacity: number;
    squareFootage: number;
    nightlyRate: number;
    cleaningFee: number;
}

export const CreateListing: React.FC = () => {
    const [currentStep, setCurrentStep] = useState<ListingStep>('property-type');
    const [listingData, setListingData] = useState<ListingData>({
        propertyType: '',
        location: '',
        photos: [],
        apartmentDescription: '',
        amenities: [],
        bedrooms: 1,
        bathrooms: 1,
        beds: 1,
        guestCapacity: 2,
        squareFootage: 0,
        nightlyRate: 0,
        cleaningFee: 0
    });

    const steps: { id: ListingStep; title: string; icon: React.ComponentType<{ className?: string }> }[] = [
        { id: 'property-type', title: 'Property Type', icon: Home },
        { id: 'location', title: 'Location', icon: MapPin },
        { id: 'apartment-details', title: 'Apartment Details', icon: FileText },
        { id: 'photos', title: 'Photos', icon: Camera },
        { id: 'availability', title: 'Availability', icon: Calendar },
        { id: 'pricing', title: 'Pricing', icon: DollarSign },
        { id: 'preview', title: 'Preview', icon: Eye }
    ];

    const currentStepIndex = steps.findIndex(step => step.id === currentStep);
    const progress = ((currentStepIndex + 1) / steps.length) * 100;

    const propertyTypes = [
        {
            type: 'Apartment',
            image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            subtitle: 'Modern city living'
        },
        {
            type: 'Villa',
            image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            subtitle: 'Luxury & privacy'
        },
        {
            type: 'House',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            subtitle: 'Family-friendly space'
        },
        {
            type: 'Condo',
            image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            subtitle: 'Contemporary comfort'
        },
        {
            type: 'Studio',
            image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            subtitle: 'Compact & efficient'
        },
        {
            type: 'Private Room',
            image: 'https://images.unsplash.com/photo-1540518614846-7eded1ac2e82?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            subtitle: 'Personal retreat'
        }
    ];

    const amenitiesCategories = {
        basic: [
            { name: 'Wi-Fi', icon: Wifi },
            { name: 'Air Conditioning', icon: Snowflake },
            { name: 'Heating', icon: Zap },
            { name: 'TV', icon: Tv },
            { name: 'Washing Machine', icon: WashingMachine },
            { name: 'Parking', icon: Car }
        ],
        kitchen: [
            { name: 'Fully equipped kitchen', icon: ChefHat },
            { name: 'Refrigerator & freezer', icon: Home },
            { name: 'Coffee maker / kettle', icon: Coffee },
            { name: 'Dishwasher', icon: WashingMachine },
            { name: 'Outdoor grill / BBQ', icon: Flame }
        ],
        beachOutdoor: [
            { name: 'Beachfront access', icon: TreePine },
            { name: 'Patio / balcony with seating', icon: Mountain },
            { name: 'Hammocks or lounge chairs', icon: Sofa },
            { name: 'Outdoor dining area', icon: Utensils },
            { name: 'Fire pit', icon: Flame }
        ],
        entertainment: [
            { name: 'Board games', icon: Dice1 },
            { name: 'PlayStation', icon: Gamepad2 },
            { name: 'Swimming Pool', icon: Waves },
            { name: 'Gym', icon: Dumbbell }
        ]
    };

    const nextStep = () => {
        if (currentStepIndex < steps.length - 1) {
            setCurrentStep(steps[currentStepIndex + 1].id);
        }
    };

    const prevStep = () => {
        if (currentStepIndex > 0) {
            setCurrentStep(steps[currentStepIndex - 1].id);
        }
    };

    const updateListingData = (field: keyof ListingData, value: any) => {
        setListingData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const toggleAmenity = (amenity: string) => {
        setListingData(prev => ({
            ...prev,
            amenities: prev.amenities.includes(amenity)
                ? prev.amenities.filter(a => a !== amenity)
                : [...prev.amenities, amenity]
        }));
    };

    const updateSpaceDetail = (field: 'bedrooms' | 'bathrooms' | 'beds' | 'guestCapacity' | 'squareFootage', value: number) => {
        setListingData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const renderStepContent = () => {
        switch (currentStep) {
            case 'property-type':
                return (
                    <div className="space-y-8">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-gray-900 mb-3">What's your space like?</h2>
                            <p className="text-gray-600 text-lg">Select the property type that matches your space</p>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {propertyTypes.map((property) => (
                                    <button
                                        key={property.type}
                                        onClick={() => updateListingData('propertyType', property.type)}
                                        className={`group relative overflow-hidden rounded-2xl transition-all duration-300 transform hover:scale-105 ${listingData.propertyType === property.type
                                                ? 'ring-4 ring-sky-400 shadow-xl'
                                                : 'hover:shadow-xl'
                                            }`}
                                    >
                                        <div className="aspect-[4/3] relative">
                                            <img
                                                src={property.image}
                                                alt={property.type}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                                            {/* Selection indicator */}
                                            {listingData.propertyType === property.type && (
                                                <div className="absolute top-4 right-4 w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center">
                                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                            )}

                                            {/* Content overlay */}
                                            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                                <h3 className="text-xl font-bold mb-1">{property.type}</h3>
                                                <p className="text-sky-100 text-sm">{property.subtitle}</p>
                                            </div>
                                        </div>

                                        {/* Hover effect */}
                                        <div className={`absolute inset-0 transition-opacity duration-300 ${listingData.propertyType === property.type
                                                ? 'bg-sky-500/20 opacity-100'
                                                : 'bg-sky-500/10 opacity-0 group-hover:opacity-100'
                                            }`}></div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                );

            case 'location':
                return (
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Where is your property located?</h2>
                            <p className="text-gray-600">Enter the address or area where guests will stay.</p>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Property Address</label>
                            <input
                                type="text"
                                value={listingData.location}
                                onChange={(e) => updateListingData('location', e.target.value)}
                                placeholder="Enter street address, city, country"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                            />
                        </div>
                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                            <div className="flex items-center space-x-2 text-gray-600">
                                <MapPin className="w-5 h-5" />
                                <span className="text-sm">Location will be verified during review process</span>
                            </div>
                        </div>
                    </div>
                );

            case 'apartment-details':
                return (
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Tell us about your space</h2>
                            <p className="text-gray-600">Add details that will help guests understand your property.</p>
                        </div>

                        {/* Basic Amenities */}
                        <div className="bg-gray-50 rounded-xl p-6 space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                                    <Wifi className="w-5 h-5 mr-2 text-sky-600" />
                                    Amenities
                                </h3>
                                <p className="text-sm text-gray-600">Select all amenities available to guests</p>
                            </div>

                            {/* Basic Amenities */}
                            <div>
                                <h4 className="text-md font-medium text-gray-800 mb-3">Basic Amenities</h4>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                    {amenitiesCategories.basic.map((amenity) => (
                                        <button
                                            key={amenity.name}
                                            onClick={() => toggleAmenity(amenity.name)}
                                            className={`flex flex-col items-center p-3 border-2 rounded-lg transition-all duration-200 ${listingData.amenities.includes(amenity.name)
                                                    ? 'border-sky-500 bg-sky-50 text-sky-700'
                                                    : 'border-gray-200 hover:border-gray-300 text-gray-700 bg-white'
                                                }`}
                                        >
                                            <amenity.icon className="w-5 h-5 mb-2" />
                                            <span className="text-xs font-medium text-center">{amenity.name}</span>
                                            {listingData.amenities.includes(amenity.name) && (
                                                <Check className="w-3 h-3 text-sky-600 mt-1" />
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Kitchen & Dining */}
                            <div>
                                <h4 className="text-md font-medium text-gray-800 mb-3">Kitchen & Dining</h4>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                    {amenitiesCategories.kitchen.map((amenity) => (
                                        <button
                                            key={amenity.name}
                                            onClick={() => toggleAmenity(amenity.name)}
                                            className={`flex flex-col items-center p-3 border-2 rounded-lg transition-all duration-200 ${listingData.amenities.includes(amenity.name)
                                                    ? 'border-sky-500 bg-sky-50 text-sky-700'
                                                    : 'border-gray-200 hover:border-gray-300 text-gray-700 bg-white'
                                                }`}
                                        >
                                            <amenity.icon className="w-5 h-5 mb-2" />
                                            <span className="text-xs font-medium text-center">{amenity.name}</span>
                                            {listingData.amenities.includes(amenity.name) && (
                                                <Check className="w-3 h-3 text-sky-600 mt-1" />
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Beach & Outdoor Features */}
                            <div>
                                <h4 className="text-md font-medium text-gray-800 mb-3">Beach & Outdoor Features</h4>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                    {amenitiesCategories.beachOutdoor.map((amenity) => (
                                        <button
                                            key={amenity.name}
                                            onClick={() => toggleAmenity(amenity.name)}
                                            className={`flex flex-col items-center p-3 border-2 rounded-lg transition-all duration-200 ${listingData.amenities.includes(amenity.name)
                                                    ? 'border-sky-500 bg-sky-50 text-sky-700'
                                                    : 'border-gray-200 hover:border-gray-300 text-gray-700 bg-white'
                                                }`}
                                        >
                                            <amenity.icon className="w-5 h-5 mb-2" />
                                            <span className="text-xs font-medium text-center">{amenity.name}</span>
                                            {listingData.amenities.includes(amenity.name) && (
                                                <Check className="w-3 h-3 text-sky-600 mt-1" />
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Entertainment */}
                            <div>
                                <h4 className="text-md font-medium text-gray-800 mb-3">Entertainment</h4>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                    {amenitiesCategories.entertainment.map((amenity) => (
                                        <button
                                            key={amenity.name}
                                            onClick={() => toggleAmenity(amenity.name)}
                                            className={`flex flex-col items-center p-3 border-2 rounded-lg transition-all duration-200 ${listingData.amenities.includes(amenity.name)
                                                    ? 'border-sky-500 bg-sky-50 text-sky-700'
                                                    : 'border-gray-200 hover:border-gray-300 text-gray-700 bg-white'
                                                }`}
                                        >
                                            <amenity.icon className="w-5 h-5 mb-2" />
                                            <span className="text-xs font-medium text-center">{amenity.name}</span>
                                            {listingData.amenities.includes(amenity.name) && (
                                                <Check className="w-3 h-3 text-sky-600 mt-1" />
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Apartment Description */}
                        <div className="bg-gray-50 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                <FileText className="w-5 h-5 mr-2 text-sky-600" />
                                Apartment Description
                            </h3>
                            <p className="text-sm text-gray-600 mb-4">Describe what makes your apartment unique</p>
                            <textarea
                                value={listingData.apartmentDescription}
                                onChange={(e) => updateListingData('apartmentDescription', e.target.value)}
                                placeholder="Describe what makes your apartment unique (e.g., modern design, close to the beach, spacious balcony, newly renovated kitchen, great city views)..."
                                rows={4}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent resize-none"
                            />
                        </div>

                        {/* Space Details */}
                        <div className="bg-gray-50 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                <Ruler className="w-5 h-5 mr-2 text-sky-600" />
                                Space Details
                            </h3>
                            <p className="text-sm text-gray-600 mb-4">Provide details about the size and capacity</p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                                        <Bed className="w-4 h-4 mr-1 text-gray-500" />
                                        Bedrooms
                                    </label>
                                    <select
                                        value={listingData.bedrooms}
                                        onChange={(e) => updateSpaceDetail('bedrooms', Number(e.target.value))}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                                    >
                                        {[0, 1, 2, 3, 4, 5, 6].map(num => (
                                            <option key={num} value={num}>{num} {num === 1 ? 'Bedroom' : 'Bedrooms'}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                                        <Bath className="w-4 h-4 mr-1 text-gray-500" />
                                        Bathrooms
                                    </label>
                                    <select
                                        value={listingData.bathrooms}
                                        onChange={(e) => updateSpaceDetail('bathrooms', Number(e.target.value))}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                                    >
                                        {[1, 1.5, 2, 2.5, 3, 3.5, 4].map(num => (
                                            <option key={num} value={num}>{num} {num === 1 ? 'Bathroom' : 'Bathrooms'}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                                        <Bed className="w-4 h-4 mr-1 text-gray-500" />
                                        Beds
                                    </label>
                                    <select
                                        value={listingData.beds}
                                        onChange={(e) => updateSpaceDetail('beds', Number(e.target.value))}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                                    >
                                        {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                                            <option key={num} value={num}>{num} {num === 1 ? 'Bed' : 'Beds'}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                                        <Users className="w-4 h-4 mr-1 text-gray-500" />
                                        Guest Capacity
                                    </label>
                                    <select
                                        value={listingData.guestCapacity}
                                        onChange={(e) => updateSpaceDetail('guestCapacity', Number(e.target.value))}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                                    >
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16].map(num => (
                                            <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                                        <Ruler className="w-4 h-4 mr-1 text-gray-500" />
                                        Square Footage (optional)
                                    </label>
                                    <input
                                        type="number"
                                        value={listingData.squareFootage || ''}
                                        onChange={(e) => updateSpaceDetail('squareFootage', Number(e.target.value))}
                                        placeholder="e.g., 850"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'photos':
                return (
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Add photos of your space</h2>
                            <p className="text-gray-600">Upload at least 5 high-quality photos to attract guests.</p>
                        </div>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-sky-400 transition-colors">
                            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-lg font-medium text-gray-900 mb-2">Upload Photos</h3>
                            <p className="text-gray-600 mb-4">Drag and drop photos here, or click to browse</p>
                            <button className="px-6 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors">
                                Choose Files
                            </button>
                        </div>
                        {listingData.photos.length > 0 && (
                            <div className="grid grid-cols-3 gap-4">
                                {listingData.photos.map((photo, index) => (
                                    <div key={index} className="relative">
                                        <img src={photo} alt={`Upload ${index + 1}`} className="w-full h-24 object-cover rounded-lg" />
                                        <button className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600">
                                            <X className="w-3 h-3" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                );


            case 'availability':
                return (
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Set your availability</h2>
                            <p className="text-gray-600">Choose when your property is available for bookings.</p>
                        </div>
                        <div className="bg-gray-100 border border-gray-200 rounded-lg h-64 flex items-center justify-center">
                            <div className="text-center">
                                <Calendar className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                                <p className="text-gray-500">Calendar integration coming soon</p>
                            </div>
                        </div>
                    </div>
                );

            case 'pricing':
                return (
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Set your pricing</h2>
                            <p className="text-gray-600">Set competitive rates to attract guests.</p>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Nightly Rate (USD)</label>
                                <div className="relative">
                                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="number"
                                        value={listingData.nightlyRate}
                                        onChange={(e) => updateListingData('nightlyRate', Number(e.target.value))}
                                        placeholder="100"
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Cleaning Fee (USD)</label>
                                <div className="relative">
                                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="number"
                                        value={listingData.cleaningFee}
                                        onChange={(e) => updateListingData('cleaningFee', Number(e.target.value))}
                                        placeholder="25"
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'preview':
                return (
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Preview your listing</h2>
                            <p className="text-gray-600">Review your listing before publishing.</p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">{listingData.propertyType || 'Your Property'} in {listingData.location || 'Your Location'}</h3>
                            <div className="space-y-3 text-sm text-gray-600">
                                <p><strong>Property Type:</strong> {listingData.propertyType || 'Not selected'}</p>
                                <p><strong>Location:</strong> {listingData.location || 'Not provided'}</p>
                                <p><strong>Description:</strong> {listingData.apartmentDescription || 'No description'}</p>
                                <p><strong>Amenities:</strong> {listingData.amenities.join(', ') || 'None selected'}</p>
                                <p><strong>Bedrooms:</strong> {listingData.bedrooms}</p>
                                <p><strong>Bathrooms:</strong> {listingData.bathrooms}</p>
                                <p><strong>Beds:</strong> {listingData.beds}</p>
                                <p><strong>Guest Capacity:</strong> {listingData.guestCapacity}</p>
                                {listingData.squareFootage > 0 && <p><strong>Square Footage:</strong> {listingData.squareFootage} sq ft</p>}
                                <p><strong>Nightly Rate:</strong> ${listingData.nightlyRate}</p>
                                <p><strong>Cleaning Fee:</strong> ${listingData.cleaningFee}</p>
                            </div>
                        </div>
                        <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
                            <p className="text-sm text-sky-700">
                                Your listing will be reviewed before going live. This usually takes 24-48 hours.
                            </p>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    const canProceed = () => {
        switch (currentStep) {
            case 'property-type':
                return listingData.propertyType !== '';
            case 'location':
                return listingData.location.trim() !== '';
            case 'apartment-details':
                return listingData.apartmentDescription.trim() !== '';
            case 'pricing':
                return listingData.nightlyRate > 0;
            default:
                return true;
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50">
            <div className="absolute top-4 left-4">
                <Logo />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-20">
                {/* Progress Bar */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <h1 className="text-lg font-semibold text-gray-900">Create Your Listing</h1>
                        <span className="text-sm text-gray-500">
                            Step {currentStepIndex + 1} of {steps.length}
                        </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                            className="bg-sky-600 h-2 rounded-full transition-all duration-500 ease-out"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>

                {/* Step Content */}
                <div className="bg-white rounded-2xl shadow-lg border border-sky-100 p-8 mb-8">
                    {renderStepContent()}
                </div>

                {/* Navigation */}
                <div className="flex justify-between">
                    <button
                        onClick={prevStep}
                        disabled={currentStepIndex === 0}
                        className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${currentStepIndex === 0
                                ? 'text-gray-400 cursor-not-allowed'
                                : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                            }`}
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back</span>
                    </button>

                    {currentStep === 'preview' ? (
                        <button
                            className="flex items-center space-x-2 px-8 py-3 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors font-medium"
                            onClick={() => console.log('Publishing listing:', listingData)}
                        >
                            <span>Publish Listing</span>
                        </button>
                    ) : (
                        <button
                            onClick={nextStep}
                            disabled={!canProceed()}
                            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${canProceed()
                                    ? 'bg-sky-600 text-white hover:bg-sky-700'
                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                }`}
                        >
                            <span>Next</span>
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};