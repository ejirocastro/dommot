#!/bin/bash

# Fast development script for Dommot Frontend
echo "🚀 Starting fast development mode..."

# Clear Next.js cache
echo "🧹 Clearing Next.js cache..."
rm -rf .next

# Clear node modules cache (optional, uncomment if needed)
# echo "🧹 Clearing node modules cache..."
# rm -rf node_modules/.cache

# Start development server with optimizations
echo "⚡ Starting development server..."
NODE_OPTIONS="--max-old-space-size=4096" npm run dev

echo "✅ Development server started!"
