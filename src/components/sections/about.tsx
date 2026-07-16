'use client'

import { motion } from 'framer-motion'

import { aboutContent } from '@/data/about'
import { fadeIn } from '@/lib/motion'

export function About() {
  return (
    <section id="sobre-mi" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-4">
            // sobre mí
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-16">
            <div className="md:col-span-2">
              <div className="sticky top-24">
                <div className="size-32 md:size-40 rounded-xl border flex items-center justify-center bg-muted/30 mb-5">
                  <span className="text-4xl md:text-5xl font-bold text-muted-foreground/30 font-mono">
                    JJ
                  </span>
                </div>
                <div className="space-y-2 text-sm font-mono text-muted-foreground">
                  <p>
                    <span className="text-foreground font-medium">Nombre:</span>{' '}
                    Juan José Valencia
                  </p>
                  <p>
                    <span className="text-foreground font-medium">Rol:</span> {aboutContent.role}
                  </p>
                  <p>
                    <span className="text-foreground font-medium">Ubicación:</span>{' '}
                    {aboutContent.location}
                  </p>
                  <div className="pt-2 border-t mt-3">
                    <p className="text-foreground font-medium text-xs tracking-widest uppercase mb-1">
                      Filosofía
                    </p>
                    <p className="text-xs leading-relaxed">{aboutContent.philosophy}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-3 space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight">
                {aboutContent.headline}
              </h2>
              <div className="space-y-5">
                {aboutContent.approach.map((paragraph, i) => (
                  <p key={i} className="text-sm text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
