export interface Service {
  title: string
  description: string
  benefit: string
  icon: string
}

export const services: Service[] = [
  {
    title: 'Landing Pages',
    description:
      'Páginas web profesionales que establecen tu presencia online y convierten visitantes en clientes.',
    benefit:
      'Una landing page que funciona para tu negocio — rápida, limpia y construida para convertir.',
    icon: 'Globe',
  },
  {
    title: 'Dashboards y Análisis de Datos',
    description:
      'Convierte datos complejos en información clara y procesable mediante dashboards visuales e informes.',
    benefit:
      'Toma decisiones más rápidas e inteligentes con visibilidad en tiempo real de tu negocio.',
    icon: 'BarChart3',
  },
  {
    title: 'Automatización de Negocios',
    description:
      'Reemplaza el trabajo manual repetitivo con procesos automatizados confiables que ahorran tiempo y reducen errores.',
    benefit:
      'Ahorra horas cada semana dejando que el software maneje el trabajo pesado.',
    icon: 'Zap',
  },
]
