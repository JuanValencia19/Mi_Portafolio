'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, LayoutDashboard, Building2, BarChart3, Zap, type LucideIcon } from 'lucide-react'

import { products } from '@/data/products'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { fadeInUp, slideLeft, slideRight } from '@/lib/motion'

const iconMap: Record<string, LucideIcon> = {
  LayoutDashboard,
  Building2,
  BarChart3,
  Zap,
}

const statusConfig = {
  'in-progress': { label: 'En desarrollo', className: 'text-idle bg-idle/10 border-idle/20' },
  completed: { label: 'Completado', className: 'text-active bg-active/10 border-active/20' },
  planned: { label: 'Próximo', className: 'text-muted-foreground bg-muted/30 border-border' },
}

export function FeaturedWork() {
  return (
    <section id="sistemas" className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background/50 dark:via-background/20 dark:to-background/40 pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-4">
            // productos
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight max-w-2xl mb-16">
            Productos reales. Resultados reales. Cada uno diseñado para resolver un problema específico de negocio.
          </h2>
        </motion.div>

        <div className="space-y-16 md:space-y-24">
          {products.map((product, index) => {
            const Icon = iconMap[product.icon]
            const isReversed = index % 2 !== 0
            const slideVariant = index % 2 === 0 ? slideLeft : slideRight
            const status = statusConfig[product.status]

            return (
              <motion.div
                key={product.id}
                variants={slideVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
              >
                <div className={cn(isReversed && 'md:order-2')}>
                  <div
                    className="relative rounded-xl overflow-hidden aspect-[4/3] border"
                    style={{
                      background: `linear-gradient(135deg, ${product.accentColor}20 0%, ${product.accentColor}05 100%)`,
                    }}
                  >
                    <div
                      className="absolute inset-0 opacity-[0.03]"
                      style={{
                        backgroundImage: [
                          'linear-gradient(to right, transparent 1px, transparent 1px)',
                          'linear-gradient(to bottom, transparent 1px, transparent 1px)',
                        ].join(', '),
                        backgroundSize: '20px 20px',
                      }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />

                    <div className="absolute inset-0 p-6 flex flex-col justify-between">
                      <div
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg backdrop-blur-sm border self-start"
                        style={{
                          backgroundColor: `${product.accentColor}15`,
                          borderColor: `${product.accentColor}30`,
                        }}
                      >
                        {Icon && <Icon className="size-4" style={{ color: product.accentColor }} />}
                        <span className="text-xs font-mono" style={{ color: product.accentColor }}>
                          {product.name}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {product.modules.slice(0, 4).map((mod) => (
                          <span
                            key={mod}
                            className="text-[10px] font-mono px-2 py-0.5 rounded-full backdrop-blur-sm border border-white/10 text-white/60 bg-white/5"
                          >
                            {mod}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className={cn(isReversed && 'md:order-1')}>
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="size-2 rounded-full"
                      style={{ backgroundColor: product.accentColor }}
                    />
                    <span className="text-sm font-semibold">{product.name}</span>
                    <span
                      className={cn(
                        'inline-flex items-center gap-1 text-xs font-mono px-2 py-0.5 rounded-full border',
                        status.className,
                      )}
                    >
                      {status.label}
                    </span>
                  </div>

                  <p className="text-lg md:text-xl font-medium leading-snug mb-4">
                    {product.tagline}
                  </p>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {product.description}
                  </p>

                  <p className="text-sm mb-6">
                    <span className="font-medium text-foreground">Impacto:</span>{' '}
                    <span className="text-muted-foreground">{product.outcome}</span>
                  </p>

                  <Button variant="outline" size="sm" className="gap-1.5">
                    Ver caso de estudio
                    <ArrowUpRight className="size-3.5" />
                  </Button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
