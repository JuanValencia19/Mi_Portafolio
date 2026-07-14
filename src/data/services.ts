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
      'Professional web pages that establish your online presence and turn visitors into customers.',
    benefit:
      'A landing page that works for your business — fast, clean, and built to convert.',
    icon: 'Globe',
  },
  {
    title: 'Dashboards & Data Analysis',
    description:
      'Turn complex data into clear, actionable insights through visual dashboards and reports.',
    benefit:
      'Make faster, smarter decisions with real-time visibility into your business.',
    icon: 'BarChart3',
  },
  {
    title: 'Business Automation',
    description:
      'Replace repetitive manual work with reliable automated processes that save time and reduce errors.',
    benefit:
      'Save hours every week by letting software handle the busy work.',
    icon: 'Zap',
  },
]
