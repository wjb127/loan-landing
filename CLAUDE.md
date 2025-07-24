# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev --turbo` - Start development server with Turbopack
- `npm run build` - Build production version
- `npm run lint` - Run ESLint

## Project Architecture

This is a Next.js 15 loan landing page application using React 19 RC with a dual-mode architecture:

### Core Architecture
- **App Router Structure**: Uses Next.js 15 App Router with pages in `src/app/`
- **Demo/Production Modes**: Application automatically detects if Supabase environment variables are configured and switches between demo mode (local data) and production mode (Supabase database)
- **Component Organization**: Landing page components are in `src/components/`, admin components in `src/components/admin/`

### Key Files & Patterns

**Environment Detection**: `src/lib/supabase.ts` exports `isDemoMode` boolean that determines if app runs with sample data or real Supabase connection.

**Database Schema**: Table name is `kmong_2_leads` (with prefix to avoid conflicts). Core Lead interface defined in `src/lib/supabase.ts` with required `status` field.

**State Management**: Admin dashboard uses React 19's `useTransition` for pending states during async operations.

### Page Structure
- `/` - Main landing page with ProcessSteps, EligibilitySection, TargetAudienceSection, Footer, and StickyLeadForm
- `/admin` - Lead management dashboard with filtering, status updates, and notes
- `/privacy` - Privacy policy page (requires escaped HTML entities for quotes)

### Supabase Configuration
Environment variables required for production mode:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` 
- `SUPABASE_SERVICE_ROLE_KEY`

Without these, app runs in demo mode with console logging and sample data.

### Important Implementation Notes

**Lead Status Management**: Lead status is a required field with values: 'new', 'contacted', 'converted', 'rejected'. Use `getStatusText()` utility from `src/lib/utils.ts` for Korean labels.

**Component Imports**: Admin components should import `getStatusText` from `src/lib/utils.ts`, not from page files.

**Form Validation**: Both main LeadForm and StickyLeadForm include client-side validation and create leads with status='new' by default.

**Company Branding**: Application represents 주식회사 에이스대부중개법인 (Ace Loan Brokerage Corporation) with specific company information in Footer component.

### Technology Stack
- Next.js 15 with Turbopack and App Router
- React 19 RC with useTransition
- TypeScript with strict typing
- Tailwind CSS for styling
- Supabase for database (optional, falls back to demo mode)