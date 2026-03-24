# Technology Stack

This project is a portfolio built with modern web tooling and runtime environment.

## Core
- JavaScript / TypeScript
- React 19
- Vite

## Styling
- Tailwind CSS v4
- PostCSS
- Autoprefixer

## UI / Icons
- lucide-react

## Build / Dev Tools
- Vite
- @vitejs/plugin-react
- ESLint
- TypeScript

## Email integration
- EmailJS (`@emailjs/browser`)

## Hosting / Deployment
- Vercel (recommended)
- GitHub (source repository)

## Project structure
- `src/main.tsx` - app entrypoint
- `src/App.tsx` - root component
- `src/components/` - UI components
- `src/data/profile.ts` - profile content data
- `src/types/profile.ts` - type definitions

## Notes
- Configuration files: `vite.config.ts`, `tsconfig.json`, `eslint.config.js`
- Environment variables are read from `import.meta.env.VITE_*`.
- Contact form uses modal overlay and EmailJS for backend email sending.