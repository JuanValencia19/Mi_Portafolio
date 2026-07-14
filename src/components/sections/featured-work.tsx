'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

import { projects } from '@/data/projects'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function FeaturedWork() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            Recent Work
          </h2>
          <p className="text-3xl md:text-4xl font-bold tracking-tight max-w-2xl mb-16">
            Real projects. Real results. From personal systems to business
            solutions.
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-xl border p-6 md:p-8"
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <span
                  className={cn(
                    'inline-flex shrink-0 text-xs font-mono px-2 py-0.5 rounded-full',
                    project.status === 'in-progress'
                      ? 'text-amber-600 dark:text-amber-400 bg-amber-500/10'
                      : 'text-green-600 dark:text-green-400 bg-green-500/10',
                  )}
                >
                  {project.status === 'in-progress'
                    ? 'In Progress'
                    : 'Completed'}
                </span>
              </div>

              <div className="space-y-2 text-sm text-muted-foreground mb-6">
                <p>
                  <span className="font-medium text-foreground">Problem:</span>{' '}
                  {project.problem}
                </p>
                <p>
                  <span className="font-medium text-foreground">
                    Solution:
                  </span>{' '}
                  {project.solution}
                </p>
                <p>
                  <span className="font-medium text-foreground">Impact:</span>{' '}
                  {project.impact}
                </p>
              </div>

              <Button variant="outline" size="sm" className="gap-1.5">
                View Case Study
                <ArrowUpRight className="size-3.5" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
