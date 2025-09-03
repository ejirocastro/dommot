'use client';

import React, { useState } from 'react';
import { Logo } from '../../components/header/Logo';
import {
  UserPlus, Gift, Share, Copy, Mail, MessageSquare, 
  Facebook, Twitter, CheckCircle
} from 'lucide-react';

const ReferHostPage = () => {
  const [copied, setCopied] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const referralLink = "https://dommot.com/refer?code=SARAH2024";
  const referralCode = "SARAH2024";

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sending email to:', email, 'Message:', message);
    // Here you would integrate with your email service
    setEmail('');
    setMessage('');
    alert('Invitation sent!');
  };

  const shareViaEmail = () => {
    const subject = encodeURIComponent("Join DOMMOT as a host!");
    const body = encodeURIComponent(`Hi there!\n\nI'd love to invite you to become a host on DOMMOT, the platform for unique stays and lifestyle experiences.\n\nUse my referral link: ${referralLink}\n\nBest regards!`);
    window.open(`mailto:?subject=${subject}&body=${body}`);
  };

  const shareViaFacebook = () => {
    const url = encodeURIComponent(referralLink);
    const text = encodeURIComponent("Join me on DOMMOT as a host and earn money sharing your space!");
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`, '_blank');
  };

  const shareViaTwitter = () => {
    const url = encodeURIComponent(referralLink);
    const text = encodeURIComponent("Join me on DOMMOT as a host and start earning! 🏠✨");
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="w-full px-6 py-4">
          <div className="flex justify-between items-center">
            <Logo />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-6 py-8">
        
        {/* Hero Section */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <UserPlus className="w-8 h-8 text-sky-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Refer a host</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Know someone who'd make a great host? Invite them to join DOMMOT and you'll both earn rewards when they complete their first booking.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="bg-sky-50 rounded-lg p-6 mb-8 border border-sky-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Gift className="w-5 h-5 text-sky-600" />
            Referral Rewards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border">
              <h3 className="font-semibold text-gray-900 mb-2">You earn</h3>
              <p className="text-2xl font-bold text-sky-600 mb-1">$50</p>
              <p className="text-sm text-gray-600">When your friend completes their first booking</p>
            </div>
            <div className="bg-white rounded-lg p-4 border">
              <h3 className="font-semibold text-gray-900 mb-2">They earn</h3>
              <p className="text-2xl font-bold text-sky-600 mb-1">$25</p>
              <p className="text-sm text-gray-600">Credit towards their hosting setup</p>
            </div>
          </div>
        </div>

        {/* Share Your Link Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Share your referral link</h2>
          
          {/* Referral Link */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6 border">
            <label className="block text-sm font-medium text-gray-700 mb-2">Your referral link</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={referralLink}
                readOnly
                className="flex-1 p-2 border border-gray-300 rounded bg-white text-gray-600"
              />
              <button
                onClick={handleCopyLink}
                className="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded transition-colors flex items-center gap-2"
              >
                {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">Referral code: {referralCode}</p>
          </div>

          {/* Social Share Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <button
              onClick={shareViaEmail}
              className="flex items-center justify-center gap-2 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Mail className="w-5 h-5 text-gray-600" />
              <span className="font-medium">Email</span>
            </button>
            <button
              onClick={shareViaFacebook}
              className="flex items-center justify-center gap-2 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Facebook className="w-5 h-5 text-blue-600" />
              <span className="font-medium">Facebook</span>
            </button>
            <button
              onClick={shareViaTwitter}
              className="flex items-center justify-center gap-2 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Twitter className="w-5 h-5 text-sky-500" />
              <span className="font-medium">Twitter</span>
            </button>
          </div>
        </div>

        {/* Send Personal Invitation */}
        <div className="border-t border-gray-200 pt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Send a personal invitation</h2>
          <form onSubmit={handleSendEmail} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Friend's email address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none"
                placeholder="friend@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Personal message (optional)
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full p-3 border border-gray-300 rounded focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none resize-none"
                placeholder="Add a personal note about why you think they'd be a great host..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-sky-600 hover:bg-sky-700 text-white rounded font-medium transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              Send invitation
            </button>
          </form>
        </div>

        {/* How it Works */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">How it works</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-medium text-sky-600">1</span>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Share your link</h3>
                <p className="text-gray-600 text-sm">Send your referral link to friends who might want to host</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-medium text-sky-600">2</span>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">They sign up</h3>
                <p className="text-gray-600 text-sm">Your friend creates their host account using your link</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-medium text-sky-600">3</span>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Both get rewarded</h3>
                <p className="text-gray-600 text-sm">You both earn rewards when they complete their first booking</p>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default ReferHostPage;