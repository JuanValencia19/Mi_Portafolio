# ADR-005: Server Components by Default

**Status:** Accepted
**Date:** 2025-07-14

## Context

React 18 introduced Server Components, and Next.js 15 makes them the default in the App Router. The decision is not whether to use Server Components — they are the default — but how aggressively to pursue them and where to draw the client boundary.

## Decision

**Server Components are the default rendering strategy.** Client Components (`'use client'`) are used only when a component requires:
- React hooks (`useState`, `useEffect`, `useContext`, `useRef`)
- Browser-only APIs (`window`, `document`, `localStorage`)
- Event handlers (`onClick`, `onSubmit`, `onChange`)
- Custom hooks that depend on the above

## Alternatives Considered

| Alternative | Reason for rejection |
|---|---|
| All Client Components | Worse performance — ships more JavaScript, slower TTI, larger bundles |
| Hybrid (no clear rule) | Inconsistent — some interactive components on server, some on client, hard to predict |
| Client Components with RSC Islands | The current best practice (this ADR) |

## Pros

- Zero JavaScript shipped for static content — hero, project cards, resume text
- Faster Time to Interactive — less JS to parse and execute
- Smaller bundles — interactive components are the exception, not the rule
- Direct database/data access without API layers
- Automatic code splitting — only client components are bundled
- Better SEO — full HTML is available on first response

## Cons

- Mental model shift — components can't use hooks or event handlers by default
- Some libraries assume client-side rendering and break in Server Components
- Data must be serializable (no functions, no class instances)
- Larger-than-expected client boundary — a small interactive element can pull in its entire component tree
- Testing requires different strategies for server vs client components

## Consequences

- Layouts, pages, and most sections are Server Components
- `'use client'` is placed at the **leaf** level — as close to the interactive element as possible, never at the page level
- Interactive components that need Server Component data receive it as props
- Client Components are kept small — they compose server-rendered children
- The contact form is the only page that requires significant client-side JavaScript
- Theme toggle is a Client Component isolated in the header
- Framer Motion components use `'use client'` but receive children/data from Server Components
- Data fetching happens in Server Components — client components never fetch data directly
