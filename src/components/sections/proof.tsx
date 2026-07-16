'use client'

import { motion } from 'framer-motion'

import { fadeInUp } from '@/lib/motion'

const buildingItems = [
  { name: 'LifeOS', status: 'En desarrollo' },
  { name: 'Valencia Studio', status: 'En desarrollo' },
  { name: 'Portfolio Personal', status: 'En desarrollo' },
]

const availabilityItems = [
  'Tiempo completo',
  'Freelance',
  'Remoto',
  'Colombia',
  'Internacional',
]

export function Proof() {
  return (
    <section className="py-16 md:py-20">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="mx-auto max-w-5xl px-6"
      >
        <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-8 text-center">
          // estado actual
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="size-1.5 rounded-full bg-idle" />
              <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                Current Builds
              </h2>
            </div>
            <ul className="space-y-4">
              {buildingItems.map((item) => (
                <li
                  key={item.name}
                  className="flex items-center justify-between"
                >
                  <span className="text-base font-medium">{item.name}</span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-idle">
                    <span className="size-1 rounded-full bg-idle" />
                    {item.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:pl-12 md:border-l">
            <div className="flex items-center gap-2 mb-6">
              <span className="size-1.5 rounded-full bg-active" />
              <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                Disponible para
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {availabilityItems.map((item) => (
                <span
                  key={item}
                  className="text-sm px-3 py-1.5 rounded-full border bg-muted/50 text-muted-foreground transition-colors hover:border-primary/50 hover:bg-muted"
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
