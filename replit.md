# Aureon Tech - IT Solutions Website

## Overview

This is a modern, responsive website for Aureon Tech, an IT services and products company. The application is built using a full-stack architecture with React frontend, Express.js backend, and PostgreSQL database. The website showcases the company's services, products, and provides a contact form for potential clients.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens
- **State Management**: TanStack Query (React Query) for server state
- **Forms**: React Hook Form with Zod validation
- **Animations**: Framer Motion for smooth transitions

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Validation**: Zod schemas for type-safe data validation
- **Session Management**: Express sessions with PostgreSQL store
- **Development**: Hot module replacement with Vite integration

### Build System
- **Bundler**: Vite for frontend development and building
- **Transpilation**: ESBuild for server-side bundling
- **TypeScript**: Full type safety across frontend and backend
- **Path Resolution**: Custom path aliases for clean imports

## Key Components

### Frontend Components
1. **Header**: Navigation with smooth scrolling to sections
2. **Hero**: Company branding with "TRUST. DELIVER. LEAD." slogan
3. **Services**: Six main service categories with technology badges
4. **Products**: Three flagship products showcase
5. **About**: Company benefits and value propositions
6. **Contact**: Interactive form with real-time validation
7. **Footer**: Company information and social links

### Backend Services
1. **Contact API**: Handles form submissions with validation
2. **Storage Layer**: Abstracted storage interface with memory implementation
3. **Database Schema**: Users and contact submissions tables
4. **Request Logging**: Comprehensive API request logging

### Database Schema
- **Users**: Basic user authentication structure
- **Contact Submissions**: Form data with timestamp tracking
- **Migrations**: Drizzle-managed database versioning

## Data Flow

1. **Client Interaction**: User interacts with React components
2. **Form Submission**: Contact form validates data client-side using Zod
3. **API Request**: TanStack Query sends validated data to Express API
4. **Server Validation**: Backend re-validates using shared Zod schemas
5. **Database Storage**: Drizzle ORM persists data to PostgreSQL
6. **Response Handling**: Success/error feedback displayed via toast notifications

## External Dependencies

### Core Technologies
- **@neondatabase/serverless**: PostgreSQL database driver
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **framer-motion**: Animation library
- **react-hook-form**: Form handling
- **zod**: Runtime type validation

### UI Dependencies
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library

### Development Tools
- **vite**: Build tool and dev server
- **tsx**: TypeScript execution for development
- **esbuild**: Production bundling

## Deployment Strategy

### Development Environment
- **Runtime**: Node.js 20 with TypeScript
- **Database**: PostgreSQL 16
- **Dev Server**: Vite with HMR on port 5000
- **Hot Reload**: Full-stack development with instant updates

### Production Build
1. **Frontend**: Vite builds optimized React bundle
2. **Backend**: ESBuild creates single server bundle
3. **Assets**: Static files served from dist/public
4. **Database**: Drizzle migrations handle schema updates

### Hosting Configuration
- **Platform**: Replit with autoscale deployment
- **Port Mapping**: Internal 5000 → External 80
- **Environment**: Production mode with optimized builds
- **Sessions**: PostgreSQL-backed session store

## Changelog
- June 15, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.