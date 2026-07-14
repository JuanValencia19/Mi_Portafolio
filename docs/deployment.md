# Deployment (MVP)

## Plataforma

**Vercel.** Conectado al repo de GitHub. Deploy automático en cada push a `main`.

## Checklist de Lanzamiento

- [ ] Repo conectado a Vercel
- [ ] Build exitoso en Vercel
- [ ] Dominio propio configurado
- [ ] SSL activo (automático con Vercel)
- [ ] `npm run lint` pasa
- [ ] `npx tsc --noEmit` pasa
- [ ] `npm run build` pasa

## CI (GitHub Actions)

```yaml
on: [push]
jobs:
  check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - run: npm run lint
      - run: npx tsc --noEmit
      - run: npm run build
```

## Post-MVP

- Preview deployments
- Staging environment
- Monitoreo y uptime checks
