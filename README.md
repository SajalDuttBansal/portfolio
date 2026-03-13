## Portfolio Website

Modern, animated developer portfolio built with **Next.js 16 (App Router)**, **React 19**, and **Tailwind CSS 4**, featuring a retro-inspired interface and smooth motion effects.

### Features

- **Single-page layout**: Sections for Hero, About, Projects, Experience, Skills, Education, Blog, and Contact (`app/page.tsx`).
- **Retro aesthetic**: Custom `RetroWindow` and retro-styled buttons/cards for a distinctive look.
- **Animations**: Smooth entrance and hover animations powered by `framer-motion`.
- **Dark / light mode**: Theme switching handled via `next-themes` (`ThemeProvider`).
- **Responsive design**: Looks great on desktop, tablet, and mobile using Tailwind utility classes.
- **Config-driven content**: Personal details, social links, and copy centralized in `lib/data.ts`.

### Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **UI / Styling**: Tailwind CSS 4, `class-variance-authority`, `tailwind-merge`
- **Animation**: `framer-motion`
- **Icons**: `lucide-react`
- **Theming**: `next-themes`

### Getting Started

#### Prerequisites

- Node.js 18+ (recommended)
- npm (or your preferred package manager)

#### Installation

```bash
# install dependencies
npm install

# start development server
npm run dev
```

Then open `http://localhost:3000` in your browser.

### Available Scripts

- **`npm run dev`**: Start the development server.
- **`npm run build`**: Create an optimized production build.
- **`npm run start`**: Start the production server (after `npm run build`).
- **`npm run lint`**: Run ESLint.

### Project Structure

- **`app/`**: Next.js App Router entry, global layout, and root page.
  - `layout.tsx` – Root layout and providers.
  - `page.tsx` – Assembles all page sections.
- **`components/`**: Reusable UI pieces and page sections.
  - `Navbar.tsx`, `Footer.tsx`
  - `page-sections/` – `Hero`, `About`, `Projects`, `Experience`, `Skills`, `Education`, `Blog`, `Contact`
  - `retro-window.tsx` – Retro-styled window wrapper.
  - `ui/` – Primitive UI components (buttons, cards, etc.).
- **`lib/`**: Data and utility helpers (`data.ts`, `utils.ts`).
- **`providers/`**: Global providers such as `ThemeProvider`.
- **`public/`**: Static assets (icons, images, project thumbnails).

### Customization

- **Content**: Update personal info, bio, learning status, social links, projects, and other copy in `lib/data.ts`.
- **Branding / visuals**:
  - Replace images and icons inside `public/`.
  - Tweak retro styles in `app/globals.css` and relevant components.
- **Sections**: Add, remove, or reorder sections by editing `app/page.tsx` and the files in `components/page-sections/`.

### Deployment

This project is optimized for deployment on platforms like **Vercel**:

```bash
npm run build
npm run start
```

Follow your hosting provider’s Next.js deployment guide to complete setup.
