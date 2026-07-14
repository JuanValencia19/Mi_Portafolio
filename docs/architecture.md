# Architecture

## Estructura v0.1

```
src/
├── app/
│   ├── layout.tsx          # Root layout + ThemeProvider
│   ├── page.tsx            # Landing page (una sola página)
│   └── globals.css         # Tailwind directives + variables
├── components/
│   ├── ui/                 # Primitivas (Button, Card, Badge, Input)
│   ├── sections/           # Secciones de la landing
│   │   ├── hero.tsx        # Value proposition + CTA
│   │   ├── services.tsx    # Qué resuelvo
│   │   ├── about.tsx       # Confianza
│   │   ├── projects.tsx    # Impacto
│   │   └── contact.tsx     # Conversión
│   ├── layouts/
│   │   ├── header.tsx
│   │   └── footer.tsx
│   └── shared/
│       └── theme-toggle.tsx
├── lib/
│   ├── utils.ts            # cn()
│   └── types.ts
└── data/
    └── projects.ts
```

## Reglas

- **Server Components por defecto.** Client solo cuando necesitas hooks.
- **Sin estado global.** Tema es la única excepción (next-themes).
- **Un componente por archivo.** Export nombrado.
- **Sin abstracciones.** Si solo se usa una vez, no lo generalices.
- **Props tipadas** con `type` en el mismo archivo.

## Lo que NO existe en v0.1

No hay rutas. No hay blog. No hay casos de estudio individuales. No hay resume. Es una sola página.
