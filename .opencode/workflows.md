# Workflows

## Añadir una nueva sección al portfolio

1. Crear datos estáticos en `src/data/` con tipo e interfaz
2. Crear componente en `src/components/sections/` como Server Component
3. Importar en la page correspondiente de `src/app/`
4. Añadir animación con Framer Motion si aplica

## Añadir un componente UI

1. Usar `npx shadcn@latest add <component>` para primitivas base
2. Personalizar en `src/components/ui/<component>.tsx`
3. No modificar el archivo original de shadcn — sobrescribir con estilo propio

## Before commit

1. `npm run lint`
2. `npx tsc --noEmit`
3. `npm run build`

## Despliegue

_Pendiente de definir plataforma y dominio._
