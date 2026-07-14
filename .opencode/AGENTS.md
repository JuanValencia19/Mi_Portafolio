# AGENTS.md — Juan José Valencia Portfolio

Portfolio profesional construido con Next.js App Router + TypeScript + Tailwind CSS.

## Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript strict
- **Styling:** Tailwind CSS + shadcn/ui primitives
- **Animation:** Framer Motion
- **Package manager:** npm

## Commands

| Uso | Comando |
|---|---|
| Dev | `npm run dev` |
| Build | `npm run build` |
| Lint | `npm run lint` |
| Typecheck | `npx tsc --noEmit` |

## Estructura

```
src/
├── app/          # Next.js App Router (layout, pages, api)
├── components/   # UI primitives (ui/) + page sections (sections/)
├── lib/          # Pure utilities, helpers, constants
├── data/         # Static content (projects, skills, experience)
└── styles/       # Global CSS, Tailwind layers
```

## Reglas

- Un componente por archivo. Export nombrado.
- Props siempre tipadas con interfaz o type en el mismo archivo.
- `'use client'` solo cuando sea estrictamente necesario (hooks, eventos, estado).
- Preferir Server Components por defecto.
- Layout anidado para secciones compartidas (header, footer).
- Datos estáticos en `src/data/` como archivos TypeScript, no JSON ni CMS.
- No hardcodear strings en componentes — usar constantes en `src/lib/` o `src/data/`.
- shadcn/ui components van en `src/components/ui/` y se personalizan ahí mismo.
- Framer Motion para animaciones de entrada/salida, no para layout.
- Consultar documentación vía Context7 MCP antes de usar APIs nuevas.

## Documentación

- `docs/architecture.md` — decisones de arquitectura
- `docs/decisions.md` — ADRs
- `.opencode/memory.md` — contexto entre sesiones
- `.opencode/standards.md` — estándares detallados
- `.opencode/workflows.md` — flujos de trabajo
