# ADR-001: Next.js App Router

**Status:** Accepted
**Date:** 2025-07-14

## Context

The portfolio needs a React framework that provides:
- Server-side rendering for performance and SEO
- File-based routing for simplicity
- Static site generation for portfolio pages
- Image and font optimization built-in
- A mature ecosystem with stable APIs

## Decision

Use **Next.js 15 with the App Router**.

## Alternatives Considered

| Alternative | Reason for rejection |
|---|---|
| Remix | Smaller ecosystem, fewer starter templates, less mature Server Components |
| Astro | Astro islands would work, but loses React Server Components and client-side transitions |
| Vite + React (SPA) | Poor SEO without SSR, requires manual configuration for routing, code-splitting, image optimization |
| Gatsby | Slower builds, smaller community, GraphQL layer adds complexity without benefit for static content |
| TanStack Start | Too early — not production-ready |

## Pros

- Server Components by default — zero client JS for static content
- File-based routing with layouts, loading, and error boundaries
- Automatic image optimization, font optimization, and code splitting
- ISR for blog content that needs periodic revalidation
- Largest ecosystem, best documentation, most community resources
- Vercel provides deployment with zero configuration

## Cons

- App Router has a steeper learning curve than Pages Router
- Server Components require mental model shift
- Some third-party libraries still assume client-side rendering
- Framework lock-in — harder to migrate away than a simpler setup

## Consequences

- Pages are Server Components by default, Client Components only where needed
- Data fetching is synchronous and server-side (imports, not hooks)
- Layout nesting for shared UI (header, footer, navigation)
- Error boundaries per route segment via `error.tsx`
- Full type safety with Next.js types for params, searchParams, metadata
