# Memory — Juan José Valencia Portfolio

Contexto persistente entre sesiones del agente.

## Proyecto

Portfolio profesional personal. Tecnología: Next.js App Router + TypeScript + Tailwind CSS + shadcn/ui + Framer Motion. Hosting y dominio pendientes de definir.

## Decisiones activas

- **Headline:** outcome-first copy, not technical jargon. *"I build web applications, dashboards, and automations that help businesses grow."*
- **Trust bar:** technology badges only (React, Next.js, TypeScript, Python, SQL, Power BI, Automation) — no fake metrics like "X years" or "Y projects"
- **Visual identity:** inspired by Vercel/Linear/Stripe — generous whitespace, Inter typography, minimal blue palette, subtle gradient animations, consistent border-radius
- **Proof section:** "Currently Building" (real projects with In Progress status) + "Available For" (availability tags) — no technology repeat (they're in Hero)
- **Services:** three sellable pillars framed around business outcomes — Landing Pages, Dashboards & Data Analysis, Business Automation
- **Featured Work:** Problem → Solution → Impact format per project. Status badges (amber = in progress, green = completed)
- **No testimonials section** — not enough real ones to use credibly
- **ESLint:** flat config with `@typescript-eslint/parser` + `@next/eslint-plugin-next` (compat layer had circular reference bug)
- **TypeScript:** version pinned to 5.8 (7.0 incompatible with eslint-config-next peer deps)
- **Node:** must use Node 22 via nvm (`~/.nvm`) — `.nvmrc` set to `22`

## Estructura de páginas

| Ruta | Componentes |
|---|---|
| `/` | Hero, Proof, Services, Featured Work, About _(Sprint 5)_, Contact _(Sprint 5)_, Footer _(Sprint 5)_ |
