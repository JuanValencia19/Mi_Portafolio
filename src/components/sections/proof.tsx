'use client'

import { motion } from 'framer-motion'
import { Activity, Briefcase } from 'lucide-react'

const buildingItems = [
  { name: 'LifeOS', status: 'In Progress' },
  { name: 'Valencia Studio', status: 'In Progress' },
  { name: 'Personal Portfolio', status: 'In Progress' },
]

const availabilityItems = [
  'Full-Time',
  'Freelance',
  'Remote',
  'Colombia',
  'International',
]

export function Proof() {
  return (
    <section className="py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-5xl px-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Activity className="size-4 text-primary" />
              <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                Currently Building
              </h2>
            </div>
            <ul className="space-y-4">
              {buildingItems.map((item) => (
                <li
                  key={item.name}
                  className="flex items-center justify-between"
                >
                  <span className="text-base font-medium">{item.name}</span>
                  <span className="text-xs font-mono text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full">
                    {item.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:pl-12 md:border-l">
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="size-4 text-primary" />
              <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                Available For
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {availabilityItems.map((item) => (
                <span
                  key={item}
                  className="text-sm px-3 py-1.5 rounded-full border bg-muted/50 text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
