# Performance (MVP)

## Único Target

**Lighthouse ≥ 90.** Eso es suficiente para que un cliente potencial no note lentitud.

## Cómo lo Logramos

- `next/image` para imágenes (automático)
- `next/font` para tipografía (automático)
- Server Components (automático, es el default)
- Sin librerías pesadas innecesarias

## Lo que NO hacemos

- Bundle analysis
- Core Web Vitals monitoring
- Performance budgets
- Optimización de fuentes secundarias
- Lazy loading más allá del default de Next.js
