# ADR-004: shadcn/ui

**Status:** Accepted
**Date:** 2025-07-14

## Context

The portfolio needs accessible, unstyled UI primitives (buttons, cards, dialogs, forms) that can be fully customized to match the design system. Traditional component libraries (MUI, Chakra, Ant Design) ship heavy bundles and force their own design language.

## Decision

Use **shadcn/ui** — a collection of copy-paste components built on Radix UI primitives.

## Alternatives Considered

| Alternative | Reason for rejection |
|---|---|
| MUI | Heavy bundle (~100 KB+), forces Material Design aesthetic, difficult to customize deeply |
| Chakra UI | Runtime CSS-in-JS, large bundle, slower performance |
| Radix UI directly | Lower-level — requires more boilerplate for compound components |
| Headless UI | Limited component set, tailwind-first but fewer primitives than Radix |
| Custom-built | Too time-consuming to build accessible primitives from scratch |

## Pros

- Zero dependencies — components are copied into the project and owned locally
- Radix UI primitives underneath: accessible by default (ARIA, keyboard nav, focus management)
- Full control over styling — every component uses Tailwind classes
- No bundle cost for unused components (they're not installed, they're copied)
- Consistent patterns across components (props, styling, composition)
- Active community and frequent updates
- Components are designed to be customized — the generator provides a starting point, not a final product

## Cons

- Manual updates — when Radix UI releases breaking changes, components must be updated by hand
- Initial setup time — each component must be added via the CLI
- Not a package — can't just `npm update` to get fixes
- Some components require understanding of Radix UI internals to customize deeply

## Consequences

- Components live in `src/components/ui/` and are fully owned by the project
- Components are customized to match the design system — colors, spacing, typography
- Breaking changes in Radix UI are handled proactively — review changelog before updating
- Custom components that don't exist in shadcn/ui are built from scratch following the same patterns
- The `npx shadcn@latest add <component>` command is used to add new primitives
