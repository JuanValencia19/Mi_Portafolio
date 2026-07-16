'use client'

import { motion } from 'framer-motion'

import { Button } from '@/components/ui/button'
import { DashboardMockup } from '@/components/ui/dashboard-mockup'
import { TechMarquee } from '@/components/ui/tech-marquee'
import { easeInOut } from '@/lib/motion'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: [
            'linear-gradient(to right, color-mix(in srgb, var(--color-primary) 10%, transparent) 1px, transparent 1px)',
            'linear-gradient(to bottom, color-mix(in srgb, var(--color-primary) 10%, transparent) 1px, transparent 1px)',
          ].join(', '),
          backgroundSize: '60px 60px',
        }}
      />

      <div className="absolute top-1/2 right-[5%] -translate-y-1/2 w-[800px] h-[800px] pointer-events-none">
        <div
          className="absolute inset-0 rounded-full blur-3xl opacity-25 dark:opacity-40"
          style={{
            background:
              'radial-gradient(ellipse at center, color-mix(in srgb, var(--color-primary) 25%, transparent) 0%, transparent 60%)',
          }}
        />
      </div>

      <div className="w-full mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeInOut }}
            className="max-w-xl"
          >
            <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-4">
              // software engineer
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Creo software que genera
              <span className="text-primary"> resultados.</span>
            </h1>

            <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-md leading-relaxed">
              Aplicaciones web, dashboards y automatización para impulsar tu negocio.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-start gap-3">
              <Button size="lg" className="w-full sm:w-auto text-base px-8">
                Trabajemos juntos
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-base px-8">
                Ver mi trabajo
              </Button>
            </div>

            <div className="mt-12">
              <TechMarquee />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: easeInOut }}
            className="flex items-center justify-center"
          >
            <div className="w-full max-w-2xl">
              <DashboardMockup />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
