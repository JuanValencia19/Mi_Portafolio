# ADR-002: TypeScript (Strict Mode)

**Status:** Accepted
**Date:** 2025-07-14

## Context

The portfolio must be maintainable over years. Vanilla JavaScript provides no safety net for refactoring, no editor autocompletion for component props, and no documentation of data shapes. TypeScript catches entire categories of bugs at compile time.

## Decision

Use **TypeScript with `strict: true`** in `tsconfig.json`.

## Alternatives Considered

| Alternative | Reason for rejection |
|---|---|
| Plain JavaScript | No type safety, poor refactoring support, requires JSDoc comments for documentation |
| JavaScript with JSDoc | Verbose, no editor integration as good as TypeScript, catches fewer errors |
| Flow | Effectively abandoned, no community support |

## Pros

- Catches null/undefined errors at compile time (strict null checks)
- Self-documenting interfaces for data shapes and component props
- Editor autocompletion, inline documentation, and refactoring tools
- Confidence when changing code — compiler catches breakages
- Industry standard — expected by employers and collaborators

## Cons

- Requires more code (type definitions, generics)
- Learning curve for developers new to the type system
- Build step required (already required by Next.js/React)
- Some libraries have poor or missing type definitions

## Consequences

- `strict: true` — no gradual mode, no exceptions
- `any` is forbidden; use `unknown` with type guards
- Component props are typed with exported `type` (prefer over `interface`)
- Data sources in `src/data/` are fully typed
- `satisfies` operator used for type validation without widening
- Discriminated unions for state machines and API responses
