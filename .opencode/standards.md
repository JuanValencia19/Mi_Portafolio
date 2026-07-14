# Coding Standards

## TypeScript

- `strict: true` en tsconfig
- Preferir `type` sobre `interface` para props de componentes
- Usar `interface` solo para objetos que se extiendan o implementen
- Evitar `any`. Usar `unknown` + type guard si es necesario

## Componentes

```tsx
// Preferido: Server Component
export function ProjectCard({ project }: ProjectCardProps) {}

// Solo cuando sea necesario
'use client'
export function ContactForm() {}
```

- Props tipadas en el mismo archivo, exportadas
- Nombres en PascalCase
- Carpetas en kebab-case

## Archivos

- Un componente por archivo
- Un export nombrado por archivo (salvo types/helpers pequeños)
- `src/lib/` — funciones puras, sin JSX, sin efectos
- `src/data/` — arrays/objetos tipados exportados, sin lógica

## Estilos

- Tailwind utility classes preferidas sobre CSS modules
- `cn()` de `@/lib/utils` para combinar clases condicionalmente
- Variables CSS para tokens del tema (colores, espaciado)
