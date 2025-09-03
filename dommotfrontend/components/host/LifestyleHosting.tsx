'use client';

import React from 'react';
import { ArrowRight, Calendar, DollarSign, Users, Star, Shield } from 'lucide-react';
import { Logo } from '@/components/header/Logo';

export const LifestyleHosting: React.FC = () => {
    const benefits = [
        {
            icon: DollarSign,
            title: 'Monetize Your Network',
            description: 'Turn your connections into income'
        },
        {
            icon: Users,
            title: 'Share Your Passion',
            description: 'Connect people with amazing experiences'
        },
        {
            icon: Shield,
            title: 'Trusted Platform',
            description: 'Secure bookings and verified guests'
        }
    ];

    const steps = [
        'Choose your experience type',
        'Set details and pricing',
        'Start hosting experiences'
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50">
            <div className="absolute top-4 left-4">
                <Logo />
            </div>

            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="space-y-8">
                            <div>
                                <div className="inline-flex items-center space-x-2 bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                                    <Calendar className="w-4 h-4" />
                                    <span>Lifestyle Experiences</span>
                                </div>
                                <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                    Host unforgettable
                                    <span className="text-sky-600"> experiences</span>
                                </h1>
                                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                    Share your favorite spots and activities. Host club nights, restaurant experiences, boat cruises, and more.
                                </p>
                            </div>

                            <div className="flex items-center space-x-4">
                                <a
                                    href="/host/create-experience"
                                    className="inline-flex items-center space-x-2 bg-sky-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-sky-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                                >
                                    <span>Start Creating</span>
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                                <button className="text-gray-700 hover:text-sky-600 font-medium underline underline-offset-4">
                                    Learn more
                                </button>
                            </div>

                            {/* Quick Stats */}
                            <div className="flex items-center space-x-8 pt-4">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-gray-900">$500+</div>
                                    <div className="text-sm text-gray-600">Avg per experience</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-gray-900">4.9</div>
                                    <div className="text-sm text-gray-600 flex items-center">
                                        <Star className="w-3 h-3 text-yellow-400 mr-1" />
                                        Average rating
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-gray-900">10k+</div>
                                    <div className="text-sm text-gray-600">Active hosts</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative">
                            <div className="relative z-10">
                                <img
                                    src="https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Lifestyle experience hosting"
                                    className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -top-4 -left-4 w-20 h-20 bg-sky-200 rounded-full opacity-60"></div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-200 rounded-full opacity-40"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-white py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why host experiences with DOMMOT?</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Share what you love and earn money by creating memorable experiences for travelers.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {benefits.map((benefit) => (
                            <div key={benefit.title} className="text-center">
                                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <benefit.icon className="w-8 h-8 text-sky-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                                <p className="text-gray-600">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* How It Works Section */}
            <div className="bg-gray-50 py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">How it works</h2>
                        <p className="text-gray-600">
                            Creating experiences is simple and rewarding.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {steps.map((step, index) => (
                            <div key={step} className="text-center relative">
                                <div className="w-12 h-12 bg-sky-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                                    {index + 1}
                                </div>
                                <p className="text-gray-700 font-medium">{step}</p>
                                {index < steps.length - 1 && (
                                    <ArrowRight className="hidden md:block absolute top-6 -right-4 w-5 h-5 text-gray-400" />
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <a
                            href="/host/create-experience"
                            className="inline-flex items-center space-x-2 bg-sky-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-sky-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            <span>Get Started Now</span>
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};