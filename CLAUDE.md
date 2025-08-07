# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js frontend application called "dommotfrontend" that appears to be a property rental/listing platform similar to Airbnb. The application features property listings with images, search functionality, categories, and a responsive design with mobile support.

## Development Commands

The project uses npm as the package manager. All commands should be run from the `dommotfrontend/` directory:

- **Development server**: `npm run dev` (uses Turbopack for faster builds)
- **Build**: `npm run build`
- **Start production**: `npm start`
- **Lint**: `npm run lint`

## Architecture

### Component Structure
The application follows a modular component architecture with barrel exports:

- **Main Entry**: `app/page.tsx` imports and renders `DommotHomePage.tsx`
- **Core Layout**: `DommotHomePage.tsx` is the main page component that orchestrates all sections
- **Component Organization**: Components are organized by feature in `/components/`:
  - `header/` - Navigation, search bar, logo
  - `listings/` - Property cards, image galleries, favorites
  - `categories/` - Category filters and sections
  - `footer/` - Footer content and sections
  - `mobile/` - Mobile-specific navigation
  - `common/` - Shared components like animated background

### State Management
The application uses React's built-in state management:
- Main state is managed in `DommotHomePage.tsx` using `useState`
- Props are passed down to child components
- Key state includes: search data, active tabs, image indices, favorites, mobile menu state

### Data Layer
- **Static Data**: Mock data is stored in `/data/` directory
  - `listings.ts` - Property listing data with Unsplash images
  - `categories.ts` - Category filter data
- **TypeScript Types**: Well-defined types in `/types/` for listings, categories, and search data

### Styling
- **Framework**: Tailwind CSS 4.x with PostCSS
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Visual Effects**: Gradient backgrounds, backdrop blur, and smooth transitions

### Key Features
- Property listing grid with image carousels
- Advanced search functionality
- Category-based filtering
- Mobile-responsive design with dedicated mobile menu
- Favorites system
- Scroll-based header effects

## Testing

No testing framework is currently configured. The only test files found are in node_modules from Next.js dependencies.

## TypeScript Configuration

The project uses TypeScript 5.x with Next.js TypeScript configuration. Type definitions are centralized in the `/types/` directory with barrel exports.