'use client'

import { motion } from 'framer-motion'
import { Globe, BarChart3, Zap, type LucideIcon } from 'lucide-react'

import { services } from '@/data/services'
import { staggerContainer, staggerItem } from '@/lib/motion'

const iconMap: Record<string, LucideIcon> = {
  Globe,
  BarChart3,
  Zap,
}

export function Services() {
  return (
    <section id="capacidades" className="relative py-20 md:py-28">
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: [
            'linear-gradient(to right, color-mix(in srgb, var(--color-primary) 8%, transparent) 1px, transparent 1px)',
            'linear-gradient(to bottom, color-mix(in srgb, var(--color-primary) 8%, transparent) 1px, transparent 1px)',
          ].join(', '),
          backgroundSize: '80px 80px',
        }}
      />
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          variants={staggerItem}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-4">
            // capacidades
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight max-w-2xl mb-16">
            Lo que puedo hacer por tu negocio — desde la primera impresión
            hasta las operaciones del día a día.
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = iconMap[service.icon]
            return (
              <motion.div
                key={service.title}
                variants={staggerItem}
                className="group relative rounded-xl border p-7 md:p-9 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
                style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
              >
                <span className="block text-4xl font-mono font-bold text-primary/15 dark:text-primary/20 leading-none mb-6 select-none">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="size-12 rounded-xl bg-primary/10 dark:bg-primary/15 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-primary/15 dark:group-hover:bg-primary/20 group-hover:scale-110">
                  {Icon && <Icon className="size-6 text-primary" />}
                </div>

                <h3 className="text-lg font-semibold mb-3">
                  {service.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-primary bg-primary/10 dark:bg-primary/15 px-3 py-1 rounded-full transition-colors group-hover:bg-primary/15 dark:group-hover:bg-primary/20">
                  <span className="size-1 rounded-full bg-primary" />
                  {service.benefit}
                </span>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
