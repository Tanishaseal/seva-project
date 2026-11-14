# Seva Project - Website Under Construction

A modern, responsive Next.js application built with the **App Router**, **TypeScript**, and **Tailwind CSS**. This repository provides an elegant "Website Under Construction" placeholder page designed with a modular, extensible architecture ready for future growth.

---

## 🚀 Features

- **Next.js App Router (v16+)** with TypeScript and Turbopack.
- **Tailwind CSS (v4)** for modern styling with full light and dark mode support.
- **Centered Typography**: Prominent heading, descriptive message, and status indicator badge with pulse animation.
- **Dedicated Illustration Placeholder**: A clean, architectural dashed wireframe component with responsive sizing, blueprint watermark, and instructions for drop-in replacement.
- **Config-Driven Architecture**: Easily update titles, messages, branding, and metadata from `src/config/site.ts` without modifying UI component code.
- **Organized Project Structure**: Clean separation of concerns across UI primitives, layout components, and domain views.

---

## 📁 Project Structure

```text
seva-project.org/
├── public/                 # Static assets (favicons, svgs, images)
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── favicon.ico
│   │   ├── globals.css     # Global styles & Tailwind theme definitions
│   │   ├── layout.tsx      # Root layout with Geist font & SEO metadata
│   │   └── page.tsx        # Homepage composing Header, UnderConstruction, Footer
│   ├── components/
│   │   ├── construction/   # Under construction domain components
│   │   │   └── UnderConstruction.tsx
│   │   ├── layout/         # Reusable page shell components
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/             # Reusable UI primitives
│   │       ├── Badge.tsx
│   │       └── IllustrationPlaceholder.tsx
│   └── config/
│       └── site.ts         # Centralized configuration (metadata, text, branding)
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🛠️ Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production
```bash
npm run build
npm run start
```

### 4. Code quality & linting
```bash
npm run lint
```

---

## 🎨 Customization & Future Expansion

### Updating Copy and Branding
Edit [`src/config/site.ts`](src/config/site.ts) to update the organization name, tagline, heading, status badge text, or message.

### Replacing the Illustration Placeholder
To replace the wireframe placeholder with your own graphic:

1. Place your image file (e.g., `construction-illustration.svg` or `.png`) into the `public/` directory.
2. In [`src/components/construction/UnderConstruction.tsx`](src/components/construction/UnderConstruction.tsx), update or pass children to `IllustrationPlaceholder`:

```tsx
import Image from "next/image";
import { IllustrationPlaceholder } from "@/components/ui/IllustrationPlaceholder";

<IllustrationPlaceholder>
  <Image
    src="/construction-illustration.svg"
    alt="Illustration"
    width={600}
    height={400}
    priority
    className="mx-auto h-auto max-w-full rounded-2xl"
  />
</IllustrationPlaceholder>
```

### Adding New Routes
Create new folders inside `src/app/` (e.g., `src/app/about/page.tsx`, `src/app/contact/page.tsx`). The existing layout and styling will automatically apply.
