# ByteSpace

A responsive landing page for **ByteSpace**, an online course platform, with sign-in and registration pages. Built from the ByteSpace Figma design.

**Live demo:** _coming soon_

## Pages

| Route | Description |
| --- | --- |
| `/` | Landing page: hero with course search, partner logos, course catalogue with category chips, learning paths, growth and creator sections, creator call-to-action, testimonials, and a footer with a newsletter form |
| `/join` | Registration page |
| `/sign-in` | Sign-in page with social login buttons |

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router) and React 19
- TypeScript
- [Tailwind CSS v4](https://tailwindcss.com), with the design system's colours defined as theme tokens in `src/app/globals.css`
- [shadcn/ui](https://ui.shadcn.com) for the base `Button` and `Input` components
- [lucide-react](https://lucide.dev) icons
- `next/font` (Poppins) and `next/image`

## Getting started

Requires Node.js 20 or later and [pnpm](https://pnpm.io).

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

Other scripts:

```bash
pnpm build      # production build
pnpm start      # serve the production build
pnpm lint       # ESLint
```

## Project structure

```
src/
├── app/
│   ├── page.tsx              # landing page, composed from the section components
│   ├── (auth)/join/          # registration page
│   ├── (auth)/sign-in/       # sign-in page
│   ├── layout.tsx            # root layout and Poppins font
│   └── globals.css           # Tailwind setup and design tokens (ink, brand, lime)
├── components/
│   ├── landing/              # one component per landing-page section, plus shared pieces
│   │                         # (CourseCard, SectionHeading, floating cards, GridBackdrop, Logo)
│   ├── auth/                 # AuthShell layout, forms, fields and social icons
│   └── ui/                   # shadcn/ui primitives
└── lib/
    └── landing-data.ts       # course, category and testimonial content
public/                       # images exported from the Figma design
```

Page content (courses, categories and testimonials) is kept in `src/lib/landing-data.ts`, separate from the components, so it can later come from an API.

## Notes

- The 3D decorative shapes (spirals, torus, cones, cylinders) are placeholder SVGs, because those assets were not exported from Figma.
- The newsletter, sign-in and registration forms are front-end only. They validate input but are not connected to a backend yet.
