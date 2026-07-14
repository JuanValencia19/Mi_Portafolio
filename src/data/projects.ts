export type ProjectStatus = 'in-progress' | 'completed'

export interface Project {
  title: string
  status: ProjectStatus
  problem: string
  solution: string
  impact: string
}

export const projects: Project[] = [
  {
    title: 'LifeOS',
    status: 'in-progress',
    problem:
      'Managing daily life across multiple disconnected tools creates friction and mental overhead.',
    solution:
      'A unified personal operating system integrating tasks, habits, finances, notes, and planning.',
    impact:
      'One place to organize life — reducing cognitive load and building consistency.',
  },
  {
    title: 'Valencia Studio',
    status: 'in-progress',
    problem:
      'Freelancers and small agencies need a professional brand presence to attract clients.',
    solution:
      'A complete brand identity and web presence for a growing development studio.',
    impact:
      'Professional credibility and a clear channel for client acquisition.',
  },
  {
    title: 'Power BI Dashboard',
    status: 'completed',
    problem:
      'Business data scattered across spreadsheets made it slow to make informed decisions.',
    solution:
      'A connected Power BI dashboard consolidating KPIs into real-time visual reports.',
    impact:
      'Faster, data-driven decisions with clear and up-to-date business visibility.',
  },
  {
    title: 'Technical Assessment — OnOff',
    status: 'completed',
    problem:
      'The company needed a reliable way to evaluate real-world technical skills during hiring.',
    solution:
      'Designed and built a practical technical assessment that simulates actual job challenges.',
    impact:
      'Better hiring decisions through relevant, hands-on candidate evaluation.',
  },
]
