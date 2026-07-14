# ADR-003: Tailwind CSS

**Status:** Accepted
**Date:** 2025-07-14

## Context

The portfolio needs a styling system that:
- Enforces consistent design tokens (colors, spacing, typography)
- Enables rapid prototyping without context-switching
- Produces minimal CSS in production
- Works with React Server Components (no runtime)
- Has strong TypeScript support

## Decision

Use **Tailwind CSS v4** as the styling engine.

## Alternatives Considered

| Alternative | Reason for rejection |
|---|---|
| CSS Modules | No design token system, no built-in consistency enforcement, more boilerplate |
| Styled Components | Runtime CSS-in-JS — adds bundle size, breaks Server Components, slower runtime |
| Vanilla Extract | Excellent, but requires a build plugin and has a smaller community |
| SCSS / Sass | Global namespacing issues, no token system, manual theming |
| Panda CSS | Newer, smaller community, less proven than Tailwind |


## Pros

- Utility classes map directly to design tokens — no naming things
- PurgeCSS built-in — zero unused CSS in production
- `dark:` variant makes theming straightforward
- `cn()` utility simplifies conditional class merging
- Tailwind v4 uses CSS variables natively — theming without preprocessor hacks
- Consistent spacing, typography, and color — hard to deviate accidentally
- Largest utility-first community — extensive resources and plugins

## Cons

- Verbose JSX for complex layouts (multiple class strings)
- Learning curve for the class naming system
- No runtime dynamic styling without inline styles or CSS variables
- Can encourage inconsistency if developers use arbitrary values instead of tokens

## Consequences

- All styling uses Tailwind utility classes — no custom CSS files for layouts
- Design tokens are defined in `globals.css` as CSS variables
- `cn()` from `@/lib/utils` is used for conditional class merging
- Theme switching uses CSS variables + `dark:` variants
- Component variants are defined as class maps, not CSS-in-JS
- `@apply` is avoided — it defeats the purpose of utility classes (used only in rare cases like complex 3rd-party overrides)
