/**
 * Authentication utility functions
 * Handles token management, expiration checking, and automatic logout
 */

import { AuthenticationError, handleError } from './errorHandler';

export interface UserData {
  email: string;
  loginTime?: number;
  expiresAt?: number;
}

/**
 * Set authentication data with expiration
 * @throws {AuthenticationError} If localStorage is not available or data cannot be saved
 */
export const setAuthData = (userData: { email: string }, expiresInHours: number = 24): void => {
  try {
    if (typeof window === 'undefined' || !window.localStorage) {
      throw new AuthenticationError(
        'localStorage not available',
        'Unable to save authentication data. Please enable cookies and try again.'
      );
    }

    const now = Date.now();
    const expiresAt = now + (expiresInHours * 60 * 60 * 1000); // Convert hours to milliseconds

    const authData: UserData = {
      ...userData,
      loginTime: now,
      expiresAt
    };

    // Set in localStorage with expiration
    localStorage.setItem('user', JSON.stringify(authData));

    // Set cookie with same expiration
    const maxAge = expiresInHours * 60 * 60; // Convert to seconds for cookie
    document.cookie = `auth-token=demo-token; path=/; max-age=${maxAge}; SameSite=Strict`;

    console.log('Auth data set:', { authData, expiresAt: new Date(expiresAt) });
  } catch (error) {
    if (error instanceof AuthenticationError) {
      throw error;
    }
    throw handleError(error, { context: 'setAuthData', userData });
  }
};

/**
 * Get authentication data and check if it's expired
 */
export const getAuthData = (): UserData | null => {
  try {
    const userStr = localStorage.getItem('user');
    if (!userStr) return null;

    const userData: UserData = JSON.parse(userStr);
    
    // Check if token has expiration info
    if (userData.expiresAt) {
      const now = Date.now();
      if (now > userData.expiresAt) {
        console.log('Token expired, clearing auth data');
        clearAuthData();
        return null;
      }
    }

    return userData;
  } catch (error) {
    handleError(error, { context: 'getAuthData' });
    clearAuthData();
    return null;
  }
};

/**
 * Check if user is authenticated and token is valid
 */
export const isAuthenticated = (): boolean => {
  const authData = getAuthData();
  return authData !== null;
};

/**
 * Clear all authentication data
 */
export const clearAuthData = (): void => {
  try {
    // Clear localStorage
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem('user');
    }

    // Clear all possible auth cookies
    if (typeof window !== 'undefined' && document) {
      const hostname = window.location.hostname;
      document.cookie = `auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; domain=${hostname}`;
      document.cookie = 'auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    }

    console.log('Auth data cleared');

    // Dispatch event to update UI
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('authStateChange'));
    }
  } catch (error) {
    // Log but don't throw - clearing auth data should always succeed
    handleError(error, { context: 'clearAuthData', severity: 'low' });
  }
};

/**
 * Get time remaining until token expires (in minutes)
 */
export const getTimeUntilExpiry = (): number | null => {
  const authData = getAuthData();
  if (!authData || !authData.expiresAt) return null;
  
  const now = Date.now();
  const remaining = authData.expiresAt - now;
  
  return Math.max(0, Math.floor(remaining / (1000 * 60))); // Convert to minutes
};

/**
 * Check if token will expire soon (within specified minutes)
 */
export const willExpireSoon = (withinMinutes: number = 30): boolean => {
  const remaining = getTimeUntilExpiry();
  return remaining !== null && remaining <= withinMinutes;
};

/**
 * Refresh token (extend expiration)
 */
export const refreshToken = (extendByHours: number = 24): boolean => {
  const currentData = getAuthData();
  if (!currentData) return false;
  
  // Re-set the auth data with new expiration
  setAuthData({ email: currentData.email }, extendByHours);
  return true;
};

/**
 * Auto-logout if token is expired
 * Call this periodically or on app focus
 */
export const checkAndAutoLogout = (): boolean => {
  if (!isAuthenticated()) {
    clearAuthData();
    return true; // Logout occurred
  }
  return false; // Still authenticated
};
