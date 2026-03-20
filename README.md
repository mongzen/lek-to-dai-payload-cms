# Lek to Dai Payload CMS

Lek to Dai is a PayloadCMS + Next.js web app for discovering lucky numbers through spiritual rituals, trend analysis, community picks, and AI-assisted suggestions.

## Stack

- Payload 3 + Next.js 15
- MongoDB Atlas via `@payloadcms/db-mongodb`
- React Server Components for the landing page
- Payload Admin for managing app content

## What is included

- A premium landing page inspired by the supplied reference, tuned for a Thai lucky-number product
- Payload collections for sacred sites, trending number signals, AI predictions, community picks, media, and users
- Frontend fallback content so the homepage still renders cleanly before content is entered in the CMS
- Build-ready structure with clear separation between collections, data loading, and presentation

## Local development

1. Install dependencies with `pnpm install`
2. Start the app with `pnpm dev`
3. Open `http://localhost:3000`
4. Open `http://localhost:3000/admin` to create the first admin user

The `.env` file is already configured for the provided MongoDB Atlas connection string. Update `NEXT_PUBLIC_SERVER_URL` if you run the app on a different host or port.

## Scripts

- `pnpm dev` starts Next.js in development mode
- `pnpm build` creates a production build
- `pnpm start` starts the production server
- `pnpm lint` runs ESLint
- `pnpm generate:types` regenerates Payload types
- `pnpm generate:importmap` regenerates the admin import map when needed

## Content model

- `users`: admin authentication plus lightweight preference fields
- `media`: uploads for artwork and future editorial assets
- `sacred-sites`: ritual destinations and notable numbers
- `trending-signals`: news/social/community number momentum
- `lucky-predictions`: AI-style guided number suggestions
- `community-picks`: user-submitted hot numbers and notes

## Project structure

- `src/app/(frontend)`: public-facing landing page
- `src/app/(payload)`: Payload Admin and API routes
- `src/collections`: Payload collections
- `src/components/home`: landing page UI
- `src/lib/home`: homepage fallback data and data-loading helpers

## Quality bar

This codebase is aligned with the spirit of the `antigravity-awesome-skills` workflow:

- clear domain-oriented structure
- typed boundaries between content and UI
- reusable helpers instead of copy-pasted logic
- lintable, buildable, production-minded defaults
