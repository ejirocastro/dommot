# Error Handling System Documentation

## Overview

This application implements a comprehensive, professional-grade error handling system that:
- **Prevents crashes** by catching errors gracefully
- **Guides users** with clear, actionable error messages
- **Helps developers** debug issues quickly with detailed logging
- **Categorizes errors** for better handling and monitoring

---

## Architecture

### 1. Custom Error Classes (`types/error.ts`)

```typescript
// Base error class with context
class AppError extends Error
  - category: ErrorCategory (network, auth, validation, etc.)
  - severity: ErrorSeverity (low, medium, high, critical)
  - userMessage: User-friendly message
  - timestamp: When error occurred
  - metadata: Additional context

// Specialized errors
- NetworkError        // API/fetch failures
- AuthenticationError // Login/auth issues
- ValidationError     // Form validation
- NotFoundError       // Missing resources
```

### 2. Error Handler Utilities (`utils/errorHandler.ts`)

```typescript
// Core functions
errorLogger.log()           // Log to console (dev) or service (prod)
handleError()               // Convert any error to AppError
handleFetchError()          // Convert HTTP errors
withErrorHandling()         // Wrap async functions
safeAsync()                 // Returns [error, data] tuple
getUserErrorMessage()       // Get user-friendly message
```

### 3. Error Boundaries (React)

#### Global Boundary (`components/common/ErrorBoundary.tsx`)
- Catches rendering errors in component tree
- Shows user-friendly error UI
- Provides "Try Again" and "Go Home" actions
- Shows developer details in dev mode

#### Route-Specific Boundaries
- `app/error.tsx` - Global app errors
- `app/not-found.tsx` - 404 errors
- `app/dashboard/error.tsx` - Dashboard errors

---

## Usage Guide

### For Developers

#### 1. Throwing Errors

```typescript
// Validation error
throw new ValidationError(
  'Password too short',           // Developer message
  'Password must be 6+ characters' // User message
);

// Authentication error
throw new AuthenticationError(
  'Token expired',
  'Please log in again'
);

// Network error
throw new NetworkError(
  'Failed to fetch user data',
  'Unable to load data. Please check your connection.'
);
```

#### 2. Handling Errors

**Method 1: Try-Catch**
```typescript
try {
  await someAsyncFunction();
} catch (error) {
  const appError = handleError(error, { context: 'ComponentName' });
  setError(getUserErrorMessage(appError));
}
```

**Method 2: Safe Async (Recommended)**
```typescript
const [error, data] = await safeAsync(fetchUserData());

if (error) {
  setError(getUserErrorMessage(error));
  return;
}

// Use data safely
console.log(data);
```

**Method 3: Wrapped Functions**
```typescript
const safeFetch = withErrorHandling(fetchUserData, {
  context: 'UserProfile'
});

await safeFetch(); // Errors automatically handled
```

#### 3. Adding Error Boundaries

**To a specific component:**
```tsx
import { ErrorBoundary } from '@/components/common/ErrorBoundary';

<ErrorBoundary>
  <MyComponent />
</ErrorBoundary>
```

**To a route (automatic):**
```typescript
// app/my-route/error.tsx
'use client';

export default function Error({ error, reset }) {
  return <div>Error in my route: {error.message}</div>;
}
```

#### 4. Logging Context

Always add context to help debugging:

```typescript
handleError(error, {
  context: 'ComponentName.functionName',
  userId: user.id,
  action: 'login',
  metadata: { email: formData.email }
});
```

### For Users

#### Error UI Features

1. **User-Friendly Messages**
   - Clear explanation of what went wrong
   - Actionable suggestions for fixing
   - No technical jargon

2. **Recovery Actions**
   - "Try Again" button to retry the operation
   - "Go Home" button to return to safety
   - "Go Back" to return to previous page

3. **Developer Mode (Dev Only)**
   - Expandable error details
   - Full stack trace
   - Component stack
   - Error metadata

---

## Error Categories

| Category | Use Case | Severity | Example |
|----------|----------|----------|---------|
| `NETWORK` | API/fetch failures | Medium | "Failed to fetch listings" |
| `AUTHENTICATION` | Login/auth issues | High | "Invalid credentials" |
| `VALIDATION` | Form/input errors | Low | "Email format invalid" |
| `NOT_FOUND` | Missing resources | Medium | "Listing not found" |
| `PERMISSION` | Access denied | High | "Not authorized" |
| `SERVER` | Server errors (5xx) | High | "Server unavailable" |
| `CLIENT` | Client errors (4xx) | Medium | "Bad request" |
| `UNKNOWN` | Unexpected errors | Medium | "Something went wrong" |

---

## Error Severity Levels

| Level | Description | Action | Examples |
|-------|-------------|--------|----------|
| `LOW` | Minor issues, user can continue | Log only | Invalid form input |
| `MEDIUM` | Significant issues, retry possible | Log + notify | Network timeout |
| `HIGH` | Major issues, requires user action | Log + alert | Auth failure |
| `CRITICAL` | System-breaking issues | Log + escalate | Data corruption |

---

## Best Practices

### ✅ DO

```typescript
// ✅ Provide user-friendly messages
throw new ValidationError(
  'Email validation failed',
  'Please enter a valid email address'
);

// ✅ Add context for debugging
handleError(error, {
  context: 'AuthModal.handleLogin',
  email: formData.email
});

// ✅ Use specific error types
throw new AuthenticationError('Token expired');

// ✅ Show loading states
setIsLoading(true);
try {
  await operation();
} finally {
  setIsLoading(false); // Always execute
}

// ✅ Validate input before processing
if (!email) {
  throw new ValidationError('Email is required');
}
```

### ❌ DON'T

```typescript
// ❌ Generic error messages
throw new Error('Error'); // What error?

// ❌ No user message
throw new AppError('DB connection failed'); // User sees technical message

// ❌ Silent failures
try {
  await operation();
} catch (error) {
  // Empty catch - error swallowed!
}

// ❌ Exposing technical details to users
setError(error.stack); // Users don't need stack traces

// ❌ Not cleaning up on error
setIsLoading(true);
await operation(); // If this throws, loading stays true!
setIsLoading(false);
```

---

## Error Logging

### Development
Errors are logged to console with:
- Color-coded severity
- Full error details
- Stack traces
- Metadata

### Production
Errors can be sent to external services:

```typescript
// In utils/errorHandler.ts
private logToService(errorInfo: ErrorInfo): void {
  // Replace with your service
  Sentry.captureException(errorInfo);
  // or
  LogRocket.captureException(errorInfo);
  // or
  Bugsnag.notify(errorInfo);
}
```

---

## Testing Errors

### Trigger Test Errors

```typescript
// In any component
const TestError = () => {
  const [shouldError, setShouldError] = useState(false);

  if (shouldError) {
    throw new Error('Test error boundary');
  }

  return (
    <button onClick={() => setShouldError(true)}>
      Trigger Error
    </button>
  );
};
```

### Test Network Errors

```typescript
// Simulate network failure
const [error, data] = await safeAsync(
  fetch('/api/test').then(res => {
    if (!res.ok) throw handleFetchError(res);
    return res.json();
  })
);
```

---

## File Structure

```
dommotfrontend/
├── types/
│   └── error.ts                 # Error classes & types
├── utils/
│   └── errorHandler.ts          # Error utilities & logging
├── components/
│   └── common/
│       └── ErrorBoundary.tsx    # React error boundary
├── app/
│   ├── error.tsx                # Global error page
│   ├── not-found.tsx            # 404 page
│   ├── providers.tsx            # Error boundary wrapper
│   └── [route]/
│       └── error.tsx            # Route-specific errors
```

---

## Migration Guide

### Updating Existing Code

**Before:**
```typescript
try {
  await someOperation();
} catch (error) {
  console.error(error);
  setError('An error occurred');
}
```

**After:**
```typescript
try {
  await someOperation();
} catch (error) {
  const appError = handleError(error, {
    context: 'ComponentName.operation'
  });
  setError(getUserErrorMessage(appError));
}
```

---

## Future Enhancements

- [ ] Error tracking service integration (Sentry)
- [ ] Error rate monitoring
- [ ] Automatic error reporting
- [ ] User feedback on errors
- [ ] Offline error queue
- [ ] Error analytics dashboard

---

## Support

For issues or questions about error handling:
1. Check this documentation
2. Review error logs in console (dev mode)
3. Check error metadata for context
4. Contact the development team

---

**Last Updated:** October 2025
**Version:** 1.0.0
