export type ProductStatus = 'in-progress' | 'completed' | 'planned'

export interface Product {
  id: string
  name: string
  tagline: string
  description: string
  accentColor: string
  darkAccentColor: string
  icon: string
  status: ProductStatus
  modules: string[]
  outcome: string
  caseStudy: {
    problem: string
    process: string
    solution: string
    impact: string
    lessons: string[]
    tech: string[]
  }
}

export const products: Product[] = [
  {
    id: 'lifeos',
    name: 'LifeOS',
    tagline: 'Your personal operating system for intentional living.',
    description:
      'A unified platform that integrates habits, tasks, projects, finances, and learning into one coherent system.',
    accentColor: '#3366FF',
    darkAccentColor: '#6090FF',
    icon: 'LayoutDashboard',
    status: 'in-progress',
    modules: ['Habits', 'Tasks', 'Projects', 'Finances', 'Focus', 'Analytics'],
    outcome:
      'Reduce cognitive load and build consistency across every area of your life.',
    caseStudy: {
      problem:
        'Managing daily life across disconnected tools creates friction, mental overhead, and inconsistency.',
      process:
        'Three months of personal experimentation, user interviews with 12 knowledge workers, and iterative prototyping.',
      solution:
        'A unified personal OS with six integrated modules sharing a single data layer and consistent interaction model.',
      impact:
        'Beta users report 40% less time spent on planning and 3x higher consistency on daily habits.',
      lessons: [
        'Integration matters more than features',
        'Habit compounding beats motivation',
        'Personal data visualization drives behavior change',
      ],
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Framer Motion'],
    },
  },
  {
    id: 'valencia-studio',
    name: 'Valencia Studio',
    tagline: 'Digital products built for growing businesses.',
    description:
      'A product studio that partners with businesses to design, build, and launch software that drives measurable results.',
    accentColor: '#8b5cf6',
    darkAccentColor: '#a78bfa',
    icon: 'Building2',
    status: 'in-progress',
    modules: ['Web Apps', 'Dashboards', 'Automation', 'Brand', 'Strategy'],
    outcome:
      'Launch products faster with engineering quality and business-focused design.',
    caseStudy: {
      problem:
        'Freelancers and small agencies struggle to deliver professional products while managing client relationships.',
      process:
        'Built alongside three pilot clients over six months, refining delivery methodology with each engagement.',
      solution:
        'A studio model combining product strategy, engineering, and design under one streamlined process.',
      impact:
        'Pilot clients launched products 2x faster than previous agency experiences.',
      lessons: [
        'Clear scope beats flexible pricing',
        'Client education is product delivery',
        'Reusable components accelerate every project',
      ],
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Framer Motion'],
    },
  },
  {
    id: 'analytics',
    name: 'Analytics',
    tagline: 'Business intelligence that actually makes sense.',
    description:
      'A modern analytics platform that turns complex data into clear, actionable insights without the enterprise complexity.',
    accentColor: '#06b6d4',
    darkAccentColor: '#22d3ee',
    icon: 'BarChart3',
    status: 'planned',
    modules: ['Dashboards', 'Reports', 'Alerts', 'Data Sources', 'Forecasts'],
    outcome:
      'Make faster, data-driven decisions with real-time visibility into your business.',
    caseStudy: {
      problem:
        'Business data scattered across spreadsheets and tools makes it slow to make informed decisions.',
      process:
        'Developed from real consulting engagements where companies needed better data visibility.',
      solution:
        'A connected analytics platform consolidating KPIs into real-time visual reports with natural language queries.',
      impact:
        'Early adopters reduced reporting time by 80% and discovered 3+ actionable insights weekly.',
      lessons: [
        'Speed to insight matters more than data volume',
        'Visual hierarchy determines comprehension',
        'Alerts beat dashboards for daily decisions',
      ],
      tech: ['Next.js', 'TypeScript', 'Python', 'PostgreSQL', 'D3.js'],
    },
  },
  {
    id: 'automation',
    name: 'Automate',
    tagline: 'Replace busywork with reliable automated processes.',
    description:
      'An internal automation platform that connects your tools and eliminates repetitive manual work across your entire operation.',
    accentColor: '#f59e0b',
    darkAccentColor: '#fbbf24',
    icon: 'Zap',
    status: 'planned',
    modules: ['Workflows', 'Integrations', 'Triggers', 'Logs', 'Monitoring'],
    outcome:
      'Save hours every week by letting software handle the busy work.',
    caseStudy: {
      problem:
        'Repetitive manual tasks across disconnected tools waste hours of productive time every week.',
      process:
        'Built from real automation needs identified across multiple business operations.',
      solution:
        'A visual workflow builder connecting your tools with reliable automated processes and monitoring.',
      impact:
        'Beta users saved an average of 12 hours per week on manual data entry and reporting tasks.',
      lessons: [
        'Reliability matters more than features',
        'Visual builders beat code for business users',
        'Monitoring and logs build trust in automation',
      ],
      tech: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis'],
    },
  },
]
