'use client'

import { motion } from 'framer-motion'
import { Globe, BarChart3, Zap, type LucideIcon } from 'lucide-react'

import { services } from '@/data/services'

const iconMap: Record<string, LucideIcon> = {
  Globe,
  BarChart3,
  Zap,
}

export function Services() {
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
            What I Can Do For Your Business
          </h2>
          <p className="text-3xl md:text-4xl font-bold tracking-tight max-w-2xl mb-16">
            Services designed to help your business grow — from first impression
            to daily operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon]
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-xl border p-6 md:p-8 hover:border-primary/50 transition-colors"
              >
                <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  {Icon && <Icon className="size-5 text-primary" />}
                </div>
                <h3 className="text-lg font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <p className="text-sm font-medium text-primary">
                  {service.benefit}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
