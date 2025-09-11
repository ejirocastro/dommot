'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { listings } from '../../../data/listings';
import { SimpleHeader } from '../../../components';

export default function BookingPage() {
  const params = useParams();
  const router = useRouter();
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  if (!params?.id) {
    return (
      <div className="min-h-screen bg-gray-50">
        <SimpleHeader />
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Invalid booking request</h1>
          <p className="text-gray-600">No listing ID provided.</p>
        </div>
      </div>
    );
  }

  const listingId = parseInt(params.id as string);
  const listing = listings.find(l => l.id === listingId);

  if (!listing) {
    return (
      <div className="min-h-screen bg-gray-50">
        <SimpleHeader />
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Listing Not Found</h1>
          <p className="text-gray-600 mb-6">The listing you're trying to book doesn't exist.</p>
          <button
            onClick={() => router.back()}
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const calculateNights = () => {
    if (bookingData.checkIn && bookingData.checkOut) {
      const checkIn = new Date(bookingData.checkIn);
      const checkOut = new Date(bookingData.checkOut);
      const diffTime = checkOut.getTime() - checkIn.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays > 0 ? diffDays : 0;
    }
    return 0;
  };

  const nights = calculateNights();
  const subtotal = nights * listing.price;
  const cleaningFee = Math.round(listing.price * 0.1);
  const serviceFee = Math.round(subtotal * 0.14);
  const total = subtotal + cleaningFee + serviceFee;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setBookingData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/checkout?' + new URLSearchParams({
      listingId: listingId.toString(),
      checkIn: bookingData.checkIn,
      checkOut: bookingData.checkOut,
      guests: bookingData.guests.toString(),
      firstName: bookingData.firstName,
      lastName: bookingData.lastName,
      email: bookingData.email,
      phone: bookingData.phone,
      specialRequests: bookingData.specialRequests,
      nights: nights.toString(),
      total: total.toString()
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SimpleHeader />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Booking Form */}
          <div className="space-y-8">
            <div>
              <button
                onClick={() => router.back()}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
              >
                ← Back to listing
              </button>
              <h1 className="text-3xl font-bold text-gray-900">Request to book</h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Trip Details */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h2 className="text-xl font-semibold mb-4">Your trip</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
                    <input
                      type="date"
                      name="checkIn"
                      required
                      value={bookingData.checkIn}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
                    <input
                      type="date"
                      name="checkOut"
                      required
                      value={bookingData.checkOut}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
                  <select
                    name="guests"
                    value={bookingData.guests}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                      <option key={num} value={num}>{num} guest{num !== 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Guest Information */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h2 className="text-xl font-semibold mb-4">Guest information</h2>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First name</label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={bookingData.firstName}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={bookingData.lastName}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={bookingData.email}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone number</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={bookingData.phone}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Special requests (optional)</label>
                  <textarea
                    name="specialRequests"
                    value={bookingData.specialRequests}
                    onChange={handleChange}
                    rows={3}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    placeholder="Any special requests or requirements?"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={!nights || nights <= 0}
                className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 disabled:from-gray-300 disabled:to-gray-300 text-white py-3 rounded-lg font-semibold transition-all duration-200 disabled:cursor-not-allowed"
              >
                Continue to payment
              </button>
            </form>
          </div>

          {/* Right Column - Booking Summary */}
          <div className="lg:sticky lg:top-8 lg:self-start">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              {/* Listing Summary */}
              <div className="flex gap-4 mb-6">
                <img
                  src={listing.images[0]}
                  alt={listing.title}
                  className="w-20 h-16 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{listing.title}</h3>
                  <p className="text-sm text-gray-600">{listing.category}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="text-yellow-400 text-sm">★</span>
                    <span className="text-sm font-medium">{listing.rating}</span>
                  </div>
                </div>
              </div>

              {/* Price Breakdown */}
              {nights > 0 && (
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-gray-900">Price details</h4>
                  <div className="flex justify-between">
                    <span>₦{listing.price.toLocaleString()} x {nights} night{nights !== 1 ? 's' : ''}</span>
                    <span>₦{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cleaning fee</span>
                    <span>₦{cleaningFee.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Service fee</span>
                    <span>₦{serviceFee.toLocaleString()}</span>
                  </div>
                  <hr className="my-3" />
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>₦{total.toLocaleString()}</span>
                  </div>
                </div>
              )}

              {nights === 0 && (
                <div className="text-center py-4">
                  <p className="text-gray-600">Select your dates to see total price</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}