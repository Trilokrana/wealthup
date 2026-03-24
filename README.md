# WealthUp Landing Page

A modern, responsive wealth-management landing page built with Next.js App Router, React, TypeScript, and Tailwind CSS.

The project includes a complete single-page marketing experience with custom-designed sections, image-driven UI blocks, and a polished financial-product visual style.

## Live Sections

The home page is composed of these reusable components:

- Navbar
- Hero
- BackedBy
- GrowthWays
- FasterGrowth
- PlanBanner
- HowItWorks

Main page composition is defined in `src/app/page.tsx`.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS 4
- ESLint 9 + `eslint-config-next`
- `next/font` (Geist + Geist Mono)

## Project Structure

```text
wealthup/
	public/
		images/               # All design assets (logos, cards, icons, hero art, textures)
	src/
		app/
			globals.css         # Global styles + custom slider styling
			layout.tsx          # Root layout + metadata + fonts
			page.tsx            # Home page composition
		components/
			Navbar.tsx
			Hero.tsx
			BackedBy.tsx
			GrowthWays.tsx
			FasterGrowth.tsx
			PlanBanner.tsx
			HowItWorks.tsx
```

## Features

- Fully componentized landing page architecture
- Responsive layouts for mobile/tablet/desktop
- Custom UI elements:
	- Styled range sliders in Hero section
	- Image-driven investment cards
	- Patterned CTA banner
	- Stacked process cards in HowItWorks
- Easy asset swapping through `public/images`
- Design-friendly code with clear section-level separation

## Installation

1. Clone the repository.

```bash
git clone https://github.com/Trilokrana/wealthup.git
cd wealthup
```

2. Install dependencies.

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

Open `http://localhost:3000`.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks

## Design / Asset Notes

- All static design assets are stored in `public/images`.
- Replace or update images without touching component logic as long as filenames remain consistent.
- If asset names change, update corresponding paths in component files.

## Metadata

Metadata is configured in `src/app/layout.tsx`:

- Title: `WealthUp - Your Path to Financial Growth`
- Description: currently generic and can be customized for SEO

## Deployment

### Build check

```bash
npm run build
```

### Deploy options

- Vercel (recommended for Next.js)
- Netlify
- Any Node.js hosting that supports Next.js standalone/server mode

## Git

Repository has been initialized with an initial commit.




