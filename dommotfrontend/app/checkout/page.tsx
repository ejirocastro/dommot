'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';
import { listings } from '../../data/listings';
import { SimpleHeader } from '../../components';

function CheckoutPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card');

  const listingId = searchParams?.get('listingId');
  const checkIn = searchParams?.get('checkIn');
  const checkOut = searchParams?.get('checkOut');
  const guests = searchParams?.get('guests');
  const nights = searchParams?.get('nights');
  const total = searchParams?.get('total');
  const firstName = searchParams?.get('firstName');
  const lastName = searchParams?.get('lastName');
  const email = searchParams?.get('email');
  const phone = searchParams?.get('phone');

  const listing = listingId ? listings.find(l => l.id === parseInt(listingId)) : null;

  const handlePayment = async () => {
    setIsProcessing(true);
    
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate successful booking
      alert('Booking confirmed! You will receive a confirmation email shortly.');
      router.push('/');
    } catch (error) {
      alert('Payment failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  if (!listing || !listingId) {
    return (
      <div className="min-h-screen bg-gray-50">
        <SimpleHeader />
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Invalid Booking</h1>
          <p className="text-gray-600 mb-6">Please start your booking process again.</p>
          <button
            onClick={() => router.push('/')}
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SimpleHeader />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Payment Form */}
          <div className="space-y-8">
            <div>
              <button
                onClick={() => router.back()}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
              >
                ← Back to booking
              </button>
              <h1 className="text-3xl font-bold text-gray-900">Confirm and pay</h1>
            </div>

            {/* Trip Summary */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-xl font-semibold mb-4">Your trip</h2>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium">Dates</h4>
                  <p className="text-gray-600">{checkIn} to {checkOut}</p>
                </div>
                <div>
                  <h4 className="font-medium">Guests</h4>
                  <p className="text-gray-600">{guests} guest{parseInt(guests || '1') !== 1 ? 's' : ''}</p>
                </div>
                <div>
                  <h4 className="font-medium">Guest</h4>
                  <p className="text-gray-600">{firstName} {lastName}</p>
                  <p className="text-gray-600 text-sm">{email}</p>
                  <p className="text-gray-600 text-sm">{phone}</p>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-xl font-semibold mb-4">Choose how to pay</h2>
              
              <div className="space-y-4">
                <div 
                  className={`border rounded-lg p-4 cursor-pointer transition-all ${
                    paymentMethod === 'card' ? 'border-pink-500 bg-pink-50' : 'border-gray-300'
                  }`}
                  onClick={() => setPaymentMethod('card')}
                >
                  <div className="flex items-center gap-3">
                    <input 
                      type="radio" 
                      checked={paymentMethod === 'card'} 
                      readOnly
                      className="text-pink-600"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium">Credit or debit card</h4>
                      <p className="text-sm text-gray-600">Pay the full amount now</p>
                    </div>
                    <div className="text-2xl">💳</div>
                  </div>
                  
                  {paymentMethod === 'card' && (
                    <div className="mt-4 pt-4 border-t space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Card number</label>
                        <input
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Expiry</label>
                          <input
                            type="text"
                            placeholder="MM/YY"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                          <input
                            type="text"
                            placeholder="123"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name on card</label>
                        <input
                          type="text"
                          placeholder="John Doe"
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div 
                  className={`border rounded-lg p-4 cursor-pointer transition-all ${
                    paymentMethod === 'bank' ? 'border-pink-500 bg-pink-50' : 'border-gray-300'
                  }`}
                  onClick={() => setPaymentMethod('bank')}
                >
                  <div className="flex items-center gap-3">
                    <input 
                      type="radio" 
                      checked={paymentMethod === 'bank'} 
                      readOnly
                      className="text-pink-600"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium">Bank transfer</h4>
                      <p className="text-sm text-gray-600">Transfer directly from your bank account</p>
                    </div>
                    <div className="text-2xl">🏦</div>
                  </div>
                </div>

                <div 
                  className={`border rounded-lg p-4 cursor-pointer transition-all ${
                    paymentMethod === 'wallet' ? 'border-pink-500 bg-pink-50' : 'border-gray-300'
                  }`}
                  onClick={() => setPaymentMethod('wallet')}
                >
                  <div className="flex items-center gap-3">
                    <input 
                      type="radio" 
                      checked={paymentMethod === 'wallet'} 
                      readOnly
                      className="text-pink-600"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium">Digital wallet</h4>
                      <p className="text-sm text-gray-600">Pay with Paystack, Flutterwave, or similar</p>
                    </div>
                    <div className="text-2xl">📱</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Terms and Pay Button */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Cancellation policy</h3>
                <p className="text-sm text-gray-600">Free cancellation before 48 hours. After that, cancel before check-in and get a 50% refund, minus service fees.</p>
              </div>
              
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Ground rules</h3>
                <p className="text-sm text-gray-600 mb-2">We ask every guest to remember a few simple things about what makes a great guest.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Follow the house rules</li>
                  <li>• Treat your Host's home like your own</li>
                </ul>
              </div>

              <p className="text-xs text-gray-600 mb-6">
                By selecting the button below, I agree to the Host's House Rules, Ground rules for guests, 
                Dommot's Rebooking and Refund Policy and that Dommot can charge my payment method 
                if I'm responsible for damage.
              </p>

              <button
                onClick={handlePayment}
                disabled={isProcessing}
                className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 disabled:from-gray-400 disabled:to-gray-400 text-white py-4 rounded-lg font-semibold transition-all duration-200 disabled:cursor-not-allowed"
              >
                {isProcessing ? 'Processing payment...' : `Confirm and pay ₦${total ? parseInt(total).toLocaleString() : '0'}`}
              </button>
            </div>
          </div>

          {/* Right Column - Booking Summary */}
          <div className="lg:sticky lg:top-8 lg:self-start">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex gap-4 mb-6">
                <img
                  src={listing.images[0]}
                  alt={listing.title}
                  className="w-24 h-20 rounded-lg object-cover"
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

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span>{checkIn} - {checkOut}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>{guests} guest{parseInt(guests || '1') !== 1 ? 's' : ''}</span>
                </div>
              </div>

              <hr className="mb-6" />

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>₦{listing.price.toLocaleString()} x {nights} night{parseInt(nights || '0') !== 1 ? 's' : ''}</span>
                  <span>₦{((parseInt(nights || '0') * listing.price)).toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Cleaning fee</span>
                  <span>₦{Math.round(listing.price * 0.1).toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Service fee</span>
                  <span>₦{Math.round((parseInt(nights || '0') * listing.price) * 0.14).toLocaleString()}</span>
                </div>
                <hr className="my-3" />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total (NGN)</span>
                  <span>₦{total ? parseInt(total).toLocaleString() : '0'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center">Loading...</div>}>
      <CheckoutPageContent />
    </Suspense>
  );
}