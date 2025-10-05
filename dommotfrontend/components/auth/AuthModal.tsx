'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { X } from 'lucide-react';
import { setAuthData } from '../../utils/auth';
import { ValidationError, AuthenticationError, getUserErrorMessage, handleError } from '../../utils/errorHandler';
import { useFocusTrap } from '../../hooks/useFocusTrap';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'signup';
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, initialMode = 'login' }) => {
  const router = useRouter();
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const focusTrapRef = useFocusTrap(isOpen);

  // Login form state
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  // Signup form state
  const [signupData, setSignupData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Reset form when mode changes
  useEffect(() => {
    setMode(initialMode);
  }, [initialMode]);

  // Reset forms and error when modal closes
  useEffect(() => {
    if (!isOpen) {
      setError('');
      setLoginData({ email: '', password: '' });
      setSignupData({ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' });
    }
  }, [isOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Validate inputs
      if (!loginData.email || !loginData.password) {
        throw new ValidationError(
          'Missing email or password',
          'Please fill in all fields'
        );
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(loginData.email)) {
        throw new ValidationError(
          'Invalid email format',
          'Please enter a valid email address'
        );
      }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Save authentication data
      setAuthData({ email: loginData.email }, 24);
      window.dispatchEvent(new Event('authStateChange'));
      onClose();
      router.push('/dashboard');
    } catch (err) {
      const errorMessage = getUserErrorMessage(err);
      setError(errorMessage);
      handleError(err, { context: 'AuthModal.handleLoginSubmit', email: loginData.email });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Validate all fields are filled
      if (!signupData.firstName || !signupData.lastName || !signupData.email || !signupData.password || !signupData.confirmPassword) {
        throw new ValidationError(
          'Missing required fields',
          'Please fill in all fields'
        );
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(signupData.email)) {
        throw new ValidationError(
          'Invalid email format',
          'Please enter a valid email address'
        );
      }

      // Validate password length
      if (signupData.password.length < 6) {
        throw new ValidationError(
          'Password too short',
          'Password must be at least 6 characters long'
        );
      }

      // Validate password match
      if (signupData.password !== signupData.confirmPassword) {
        throw new ValidationError(
          'Passwords do not match',
          'Passwords do not match'
        );
      }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Save authentication data
      setAuthData({
        email: signupData.email,
        firstName: signupData.firstName,
        lastName: signupData.lastName
      } as any, 24);

      window.dispatchEvent(new Event('authStateChange'));
      onClose();
      router.push('/dashboard');
    } catch (err) {
      const errorMessage = getUserErrorMessage(err);
      setError(errorMessage);
      handleError(err, {
        context: 'AuthModal.handleSignupSubmit',
        email: signupData.email
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (error) setError('');
    setLoginData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSignupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (error) setError('');
    setSignupData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div
          ref={focusTrapRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md transform transition-all"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close authentication modal"
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>

          {/* Header with tabs */}
          <div className="border-b border-gray-200 px-6 pt-6">
            <div className="flex gap-8" role="tablist" aria-label="Authentication options">
              <button
                role="tab"
                aria-selected={mode === 'login'}
                aria-controls="auth-panel"
                onClick={() => setMode('login')}
                className={`pb-4 text-sm font-semibold transition-all relative ${mode === 'login'
                    ? 'text-gray-900 border-b-2 border-sky-600'
                    : 'text-gray-500 hover:text-gray-700'
                  }`}
              >
                Log in
              </button>
              <button
                role="tab"
                aria-selected={mode === 'signup'}
                aria-controls="auth-panel"
                onClick={() => setMode('signup')}
                className={`pb-4 text-sm font-semibold transition-all relative ${mode === 'signup'
                    ? 'text-gray-900 border-b-2 border-sky-600'
                    : 'text-gray-500 hover:text-gray-700'
                  }`}
              >
                Sign up
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6" id="auth-panel" role="tabpanel">
            <div className="mb-4">
              <h2 id="modal-title" className="text-2xl font-bold text-gray-900">
                {mode === 'login' ? 'Welcome back' : 'Create your account'}
              </h2>
              <p className="text-gray-600 mt-1">
                {mode === 'login' ? 'Sign in to continue' : 'Join Dommot and start your journey'}
              </p>
            </div>

            {mode === 'login' ? (
              <form className="space-y-4" onSubmit={handleLoginSubmit}>
                <div>
                  <label htmlFor="login-email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email address
                  </label>
                  <input
                    id="login-email"
                    name="email"
                    type="email"
                    required
                    value={loginData.email}
                    onChange={handleLoginChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="login-password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <input
                    id="login-password"
                    name="password"
                    type="password"
                    required
                    value={loginData.password}
                    onChange={handleLoginChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    placeholder="Enter your password"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-sky-600 focus:ring-sky-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <Link href="#" className="font-medium text-sky-600 hover:text-sky-500">
                      Forgot password?
                    </Link>
                  </div>
                </div>

                {error && (
                  <div role="alert" aria-live="polite" className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  {isLoading ? 'Signing in...' : 'Sign in'}
                </button>
              </form>
            ) : (
              <form className="space-y-4" onSubmit={handleSignupSubmit}>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={signupData.firstName}
                      onChange={handleSignupChange}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                      placeholder="First name"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      value={signupData.lastName}
                      onChange={handleSignupChange}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                      placeholder="Last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email address
                  </label>
                  <input
                    id="signup-email"
                    name="email"
                    type="email"
                    required
                    value={signupData.email}
                    onChange={handleSignupChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <input
                    id="signup-password"
                    name="password"
                    type="password"
                    required
                    value={signupData.password}
                    onChange={handleSignupChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    placeholder="Create a password"
                  />
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm password
                  </label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    required
                    value={signupData.confirmPassword}
                    onChange={handleSignupChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    placeholder="Confirm your password"
                  />
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      required
                      className="h-4 w-4 text-sky-600 focus:ring-sky-500 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="text-gray-700">
                      I agree to the{' '}
                      <Link href="#" className="font-medium text-sky-600 hover:text-sky-500">
                        Terms of Service
                      </Link>{' '}
                      and{' '}
                      <Link href="#" className="font-medium text-sky-600 hover:text-sky-500">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>
                </div>

                {error && (
                  <div role="alert" aria-live="polite" className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  {isLoading ? 'Creating account...' : 'Create account'}
                </button>
              </form>
            )}

            {/* Social login */}
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <button aria-label="Sign in with Google" className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors">
                  <span>Google</span>
                </button>
                <button aria-label="Sign in with Facebook" className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors">
                  <span>Facebook</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
