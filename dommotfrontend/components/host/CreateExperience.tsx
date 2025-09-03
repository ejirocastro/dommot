'use client';

import React, { useState } from 'react';
import { 
    ArrowLeft, 
    ArrowRight, 
    Calendar, 
    MapPin, 
    Camera, 
    FileText, 
    DollarSign,
    Eye,
    Check,
    Upload,
    X,
    Music,
    UtensilsCrossed,
    Film,
    Anchor
} from 'lucide-react';
import { Logo } from '@/components/header/Logo';

type ExperienceStep = 
  | 'experience-type' 
  | 'details' 
  | 'photos' 
  | 'pricing' 
  | 'preview';

interface ExperienceData {
    experienceType: string;
    title: string;
    description: string;
    location: string;
    duration: string;
    groupSize: number;
    photos: string[];
    price: number;
    includes: string[];
}

export const CreateExperience: React.FC = () => {
    const [currentStep, setCurrentStep] = useState<ExperienceStep>('experience-type');
    const [experienceData, setExperienceData] = useState<ExperienceData>({
        experienceType: '',
        title: '',
        description: '',
        location: '',
        duration: '',
        groupSize: 8,
        photos: [],
        price: 0,
        includes: []
    });

    const steps: { id: ExperienceStep; title: string; icon: React.ComponentType<{ className?: string }> }[] = [
        { id: 'experience-type', title: 'Experience Type', icon: Calendar },
        { id: 'details', title: 'Details', icon: FileText },
        { id: 'photos', title: 'Photos', icon: Camera },
        { id: 'pricing', title: 'Pricing', icon: DollarSign },
        { id: 'preview', title: 'Preview', icon: Eye }
    ];

    const currentStepIndex = steps.findIndex(step => step.id === currentStep);
    const progress = ((currentStepIndex + 1) / steps.length) * 100;

    const experienceTypes = [
        { 
            type: 'Clubs', 
            image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            subtitle: 'Nightlife & entertainment',
            icon: Music
        },
        { 
            type: 'Restaurants', 
            image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            subtitle: 'Dining experiences',
            icon: UtensilsCrossed
        },
        { 
            type: 'Cinema', 
            image: 'https://images.unsplash.com/photo-1489599513254-0c7d6b9cca0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            subtitle: 'Movie & entertainment',
            icon: Film
        },
        { 
            type: 'Boat Cruise', 
            image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            subtitle: 'Water adventures',
            icon: Anchor
        }
    ];

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

    const updateExperienceData = (field: keyof ExperienceData, value: any) => {
        setExperienceData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const renderStepContent = () => {
        switch (currentStep) {
            case 'experience-type':
                return (
                    <div className="space-y-8">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-gray-900 mb-3">What type of experience will you host?</h2>
                            <p className="text-gray-600 text-lg">Choose the category that best fits your experience</p>
                        </div>
                        
                        <div className="max-w-3xl mx-auto">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {experienceTypes.map((experience) => (
                                    <button
                                        key={experience.type}
                                        onClick={() => updateExperienceData('experienceType', experience.type)}
                                        className={`group relative overflow-hidden rounded-xl transition-all duration-300 transform hover:scale-105 ${
                                            experienceData.experienceType === experience.type
                                                ? 'ring-3 ring-sky-400 shadow-lg'
                                                : 'hover:shadow-lg'
                                        }`}
                                    >
                                        <div className="aspect-square relative">
                                            <img
                                                src={experience.image}
                                                alt={experience.type}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                                            
                                            {/* Selection indicator */}
                                            {experienceData.experienceType === experience.type && (
                                                <div className="absolute top-2 right-2 w-6 h-6 bg-sky-500 rounded-full flex items-center justify-center">
                                                    <Check className="w-4 h-4 text-white" />
                                                </div>
                                            )}
                                            
                                            {/* Content overlay */}
                                            <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                                                <div className="flex items-center justify-center space-x-2 mb-1">
                                                    <experience.icon className="w-4 h-4" />
                                                    <h3 className="text-sm font-bold">{experience.type}</h3>
                                                </div>
                                                <p className="text-sky-100 text-xs text-center">{experience.subtitle}</p>
                                            </div>
                                        </div>
                                        
                                        {/* Hover effect */}
                                        <div className={`absolute inset-0 transition-opacity duration-300 ${
                                            experienceData.experienceType === experience.type
                                                ? 'bg-sky-500/20 opacity-100'
                                                : 'bg-sky-500/10 opacity-0 group-hover:opacity-100'
                                        }`}></div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                );

            case 'details':
                return (
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Tell us about your experience</h2>
                            <p className="text-gray-600">Provide details that will help guests understand what to expect.</p>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Experience Title</label>
                                <input
                                    type="text"
                                    value={experienceData.title}
                                    onChange={(e) => updateExperienceData('title', e.target.value)}
                                    placeholder="e.g., VIP Club Night Experience, Gourmet Restaurant Tour"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                                <textarea
                                    value={experienceData.description}
                                    onChange={(e) => updateExperienceData('description', e.target.value)}
                                    placeholder="Describe what makes this experience special. What will guests do? What makes it unique?"
                                    rows={4}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent resize-none"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                                    <input
                                        type="text"
                                        value={experienceData.location}
                                        onChange={(e) => updateExperienceData('location', e.target.value)}
                                        placeholder="e.g., Downtown Miami, South Beach"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                                    <select
                                        value={experienceData.duration}
                                        onChange={(e) => updateExperienceData('duration', e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                                    >
                                        <option value="">Select duration</option>
                                        <option value="2 hours">2 hours</option>
                                        <option value="3 hours">3 hours</option>
                                        <option value="4 hours">4 hours</option>
                                        <option value="Half day">Half day</option>
                                        <option value="Full day">Full day</option>
                                        <option value="Evening">Evening</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Group Size</label>
                                <select
                                    value={experienceData.groupSize}
                                    onChange={(e) => updateExperienceData('groupSize', Number(e.target.value))}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                                >
                                    {[2, 4, 6, 8, 10, 12, 15, 20].map(size => (
                                        <option key={size} value={size}>Up to {size} people</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                );

            case 'photos':
                return (
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Add photos of your experience</h2>
                            <p className="text-gray-600">Show guests what they can expect from your experience.</p>
                        </div>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-sky-400 transition-colors">
                            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-lg font-medium text-gray-900 mb-2">Upload Experience Photos</h3>
                            <p className="text-gray-600 mb-4">Show the venue, activities, or previous experiences</p>
                            <button className="px-6 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors">
                                Choose Files
                            </button>
                        </div>
                    </div>
                );

            case 'pricing':
                return (
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Set your pricing</h2>
                            <p className="text-gray-600">Set a competitive price for your experience.</p>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Price per person (USD)</label>
                                <div className="relative">
                                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="number"
                                        value={experienceData.price}
                                        onChange={(e) => updateExperienceData('price', Number(e.target.value))}
                                        placeholder="50"
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
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Preview your experience</h2>
                            <p className="text-gray-600">Review your experience before publishing.</p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">{experienceData.title || 'Your Experience Title'}</h3>
                            <div className="space-y-3 text-sm text-gray-600">
                                <p><strong>Type:</strong> {experienceData.experienceType || 'Not selected'}</p>
                                <p><strong>Location:</strong> {experienceData.location || 'Not provided'}</p>
                                <p><strong>Duration:</strong> {experienceData.duration || 'Not specified'}</p>
                                <p><strong>Group Size:</strong> Up to {experienceData.groupSize} people</p>
                                <p><strong>Description:</strong> {experienceData.description || 'No description'}</p>
                                <p><strong>Price:</strong> ${experienceData.price} per person</p>
                            </div>
                        </div>
                        <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
                            <p className="text-sm text-sky-700">
                                Your experience will be reviewed before going live. This usually takes 24-48 hours.
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
            case 'experience-type':
                return experienceData.experienceType !== '';
            case 'details':
                return experienceData.title.trim() !== '' && experienceData.description.trim() !== '' && experienceData.location.trim() !== '' && experienceData.duration !== '';
            case 'pricing':
                return experienceData.price > 0;
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
                        <h1 className="text-lg font-semibold text-gray-900">Create Your Experience</h1>
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
                        className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                            currentStepIndex === 0
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
                            onClick={() => console.log('Publishing experience:', experienceData)}
                        >
                            <span>Publish Experience</span>
                        </button>
                    ) : (
                        <button
                            onClick={nextStep}
                            disabled={!canProceed()}
                            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                                canProceed()
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