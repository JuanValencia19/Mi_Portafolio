# Design System

## Principio

Profesional, no llamativo. El diseño existe para que el contenido sea creíble, no para impresionar diseñadores.

## Tipografía

Inter vía `next/font`. Pesos: 400, 500, 700. Escala default de Tailwind.

## Colores

| Rol | Claro | Oscuro |
|---|---|---|
| Fondo | white | neutral-950 |
| Superficie | neutral-50 | neutral-900 |
| Texto | neutral-900 | neutral-50 |
| Texto secundario | neutral-500 | neutral-400 |
| Acento | blue-600 | blue-400 |
| Borde | neutral-200 | neutral-800 |

## Espaciado

`space-4` (1rem) entre elementos, `space-8`/`space-16` entre secciones.

## Componentes

Solo Button, Card, Badge, Input, Textarea. Sin variantes innecesarias.

## Dark Mode

next-themes. Toggle en header. Persistencia en localStorage.

## Responsive

Mobile-first. Breakpoints: `sm: 640px`, `md: 768px`, `lg: 1024px`.
