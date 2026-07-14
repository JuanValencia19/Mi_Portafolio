# Testing (MVP)

## Mínimo para v0.1

```bash
npm run lint          # Sin warnings
npx tsc --noEmit      # Sin errores
npm run build          # Build exitoso
```

Eso es suficiente. El formulario se prueba manualmente.

## ¿Por qué no hay tests?

Porque un test no me consigue un cliente más rápido. Si el sitio no carga, el build falla. Si el TypeScript está mal, el build falla. Eso nos cubre.

## Cuándo añadir tests

- v0.2. Cuando haya más de 3 componentes interactivos.
- v1.0. Tests E2E y de accesibilidad.
