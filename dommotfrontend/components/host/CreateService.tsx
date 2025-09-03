'use client';

import React, { useState } from 'react';
import { 
    ArrowLeft, 
    ArrowRight, 
    Users, 
    MapPin, 
    Camera, 
    FileText, 
    DollarSign,
    Eye,
    Check,
    Upload,
    ChefHat,
    Heart,
    Palette
} from 'lucide-react';
import { Logo } from '@/components/header/Logo';

type ServiceStep = 
  | 'service-type' 
  | 'details' 
  | 'photos' 
  | 'pricing' 
  | 'preview';

interface ServiceData {
    serviceType: string;
    title: string;
    description: string;
    location: string;
    duration: string;
    photos: string[];
    hourlyRate: number;
    includes: string[];
}

export const CreateService: React.FC = () => {
    const [currentStep, setCurrentStep] = useState<ServiceStep>('service-type');
    const [serviceData, setServiceData] = useState<ServiceData>({
        serviceType: '',
        title: '',
        description: '',
        location: '',
        duration: '',
        photos: [],
        hourlyRate: 0,
        includes: []
    });

    const steps: { id: ServiceStep; title: string; icon: React.ComponentType<{ className?: string }> }[] = [
        { id: 'service-type', title: 'Service Type', icon: Users },
        { id: 'details', title: 'Details', icon: FileText },
        { id: 'photos', title: 'Photos', icon: Camera },
        { id: 'pricing', title: 'Pricing', icon: DollarSign },
        { id: 'preview', title: 'Preview', icon: Eye }
    ];

    const currentStepIndex = steps.findIndex(step => step.id === currentStep);
    const progress = ((currentStepIndex + 1) / steps.length) * 100;

    const serviceTypes = [
        { 
            type: 'Chefs', 
            image: 'https://images.unsplash.com/photo-1556909114-5ba446fafda7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            subtitle: 'Personal & private dining',
            icon: ChefHat
        },
        { 
            type: 'Massage Therapist', 
            image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            subtitle: 'Wellness & relaxation',
            icon: Heart
        },
        { 
            type: 'Makeup Artist', 
            image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            subtitle: 'Beauty & styling',
            icon: Palette
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

    const updateServiceData = (field: keyof ServiceData, value: any) => {
        setServiceData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const renderStepContent = () => {
        switch (currentStep) {
            case 'service-type':
                return (
                    <div className="space-y-8">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-gray-900 mb-3">What service do you offer?</h2>
                            <p className="text-gray-600 text-lg">Choose the professional service you want to provide</p>
                        </div>
                        
                        <div className="max-w-2xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {serviceTypes.map((service) => (
                                    <button
                                        key={service.type}
                                        onClick={() => updateServiceData('serviceType', service.type)}
                                        className={`group relative overflow-hidden rounded-xl transition-all duration-300 transform hover:scale-105 ${
                                            serviceData.serviceType === service.type
                                                ? 'ring-3 ring-sky-400 shadow-lg'
                                                : 'hover:shadow-lg'
                                        }`}
                                    >
                                        <div className="aspect-square relative">
                                            <img
                                                src={service.image}
                                                alt={service.type}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                                            
                                            {/* Selection indicator */}
                                            {serviceData.serviceType === service.type && (
                                                <div className="absolute top-2 right-2 w-6 h-6 bg-sky-500 rounded-full flex items-center justify-center">
                                                    <Check className="w-4 h-4 text-white" />
                                                </div>
                                            )}
                                            
                                            {/* Content overlay */}
                                            <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                                                <div className="flex items-center justify-center space-x-2 mb-1">
                                                    <service.icon className="w-4 h-4" />
                                                    <h3 className="text-sm font-bold">{service.type}</h3>
                                                </div>
                                                <p className="text-sky-100 text-xs text-center">{service.subtitle}</p>
                                            </div>
                                        </div>
                                        
                                        {/* Hover effect */}
                                        <div className={`absolute inset-0 transition-opacity duration-300 ${
                                            serviceData.serviceType === service.type
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
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Service details</h2>
                            <p className="text-gray-600">Tell clients about your service and expertise.</p>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Service Title</label>
                                <input
                                    type="text"
                                    value={serviceData.title}
                                    onChange={(e) => updateServiceData('title', e.target.value)}
                                    placeholder="e.g., Professional Private Chef, Relaxing Deep Tissue Massage"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                                <textarea
                                    value={serviceData.description}
                                    onChange={(e) => updateServiceData('description', e.target.value)}
                                    placeholder="Describe your expertise, experience, and what clients can expect from your service..."
                                    rows={4}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent resize-none"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Area</label>
                                    <input
                                        type="text"
                                        value={serviceData.location}
                                        onChange={(e) => updateServiceData('location', e.target.value)}
                                        placeholder="e.g., Miami Beach, Downtown Area"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Typical Duration</label>
                                    <select
                                        value={serviceData.duration}
                                        onChange={(e) => updateServiceData('duration', e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                                    >
                                        <option value="">Select duration</option>
                                        <option value="1 hour">1 hour</option>
                                        <option value="1.5 hours">1.5 hours</option>
                                        <option value="2 hours">2 hours</option>
                                        <option value="3 hours">3 hours</option>
                                        <option value="4 hours">4 hours</option>
                                        <option value="Half day">Half day</option>
                                        <option value="Full day">Full day</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'photos':
                return (
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Showcase your work</h2>
                            <p className="text-gray-600">Upload photos of your previous work or service setup.</p>
                        </div>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-sky-400 transition-colors">
                            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-lg font-medium text-gray-900 mb-2">Upload Service Photos</h3>
                            <p className="text-gray-600 mb-4">Show your work, setup, or before/after results</p>
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
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Set your rates</h2>
                            <p className="text-gray-600">Set competitive rates for your professional service.</p>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Hourly Rate (USD)</label>
                                <div className="relative">
                                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="number"
                                        value={serviceData.hourlyRate}
                                        onChange={(e) => updateServiceData('hourlyRate', Number(e.target.value))}
                                        placeholder="75"
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                                    />
                                </div>
                                <p className="text-xs text-gray-500 mt-1">This will be your base rate per hour</p>
                            </div>
                        </div>
                    </div>
                );

            case 'preview':
                return (
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Preview your service</h2>
                            <p className="text-gray-600">Review your service listing before publishing.</p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">{serviceData.title || 'Your Service Title'}</h3>
                            <div className="space-y-3 text-sm text-gray-600">
                                <p><strong>Service Type:</strong> {serviceData.serviceType || 'Not selected'}</p>
                                <p><strong>Service Area:</strong> {serviceData.location || 'Not provided'}</p>
                                <p><strong>Duration:</strong> {serviceData.duration || 'Not specified'}</p>
                                <p><strong>Description:</strong> {serviceData.description || 'No description'}</p>
                                <p><strong>Hourly Rate:</strong> ${serviceData.hourlyRate}</p>
                            </div>
                        </div>
                        <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
                            <p className="text-sm text-sky-700">
                                Your service will be reviewed before going live. This usually takes 24-48 hours.
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
            case 'service-type':
                return serviceData.serviceType !== '';
            case 'details':
                return serviceData.title.trim() !== '' && serviceData.description.trim() !== '' && serviceData.location.trim() !== '' && serviceData.duration !== '';
            case 'pricing':
                return serviceData.hourlyRate > 0;
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
                        <h1 className="text-lg font-semibold text-gray-900">Create Your Service</h1>
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
                            onClick={() => console.log('Publishing service:', serviceData)}
                        >
                            <span>Publish Service</span>
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