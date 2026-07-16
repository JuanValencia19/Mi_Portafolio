'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, LayoutDashboard, Building2, BarChart3, Zap, type LucideIcon } from 'lucide-react'

import { products } from '@/data/products'
import { Button } from '@/components/ui/button'
import { staggerContainer, staggerItem } from '@/lib/motion'
import { cn } from '@/lib/utils'

const iconMap: Record<string, LucideIcon> = {
  LayoutDashboard,
  Building2,
  BarChart3,
  Zap,
}

const statusConfig = {
  'in-progress': {
    label: 'En desarrollo',
    className: 'text-idle bg-idle/10 border-idle/20',
  },
  completed: {
    label: 'Completado',
    className: 'text-active bg-active/10 border-active/20',
  },
  planned: {
    label: 'Próximo',
    className: 'text-muted-foreground bg-muted/30 border-border',
  },
}

export function Ecosystem() {
  return (
    <section id="ecosistema" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-4">
            // productos
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight max-w-2xl mb-16">
            El ecosistema. Cada producto es un sistema diseñado para resolver un problema real.
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {products.map((product) => {
            const Icon = iconMap[product.icon]
            const status = statusConfig[product.status]

            return (
              <motion.div
                key={product.id}
                variants={staggerItem}
                className="group rounded-xl border p-6 md:p-8 transition-all duration-300 hover:border-primary/50"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    {Icon && (
                      <div className="size-10 rounded-lg border flex items-center justify-center bg-muted/50">
                        <Icon className="size-5" style={{ color: product.accentColor }} />
                      </div>
                    )}
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                  </div>
                  <span
                    className={cn(
                      'inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-full border shrink-0',
                      status.className,
                    )}
                  >
                    <span
                      className={cn(
                        'size-1.5 rounded-full',
                        product.status === 'in-progress'
                          ? 'bg-idle'
                          : product.status === 'completed'
                            ? 'bg-active'
                            : 'bg-muted-foreground',
                      )}
                    />
                    {status.label}
                  </span>
                </div>

                <div
                  className="relative rounded-lg overflow-hidden aspect-[16/9] mb-5 border"
                  style={{
                    background: `linear-gradient(135deg, ${product.accentColor}15 0%, ${product.accentColor}05 100%)`,
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                      backgroundImage: [
                        'linear-gradient(to right, transparent 1px, transparent 1px)',
                        'linear-gradient(to bottom, transparent 1px, transparent 1px)',
                      ].join(', '),
                      backgroundSize: '16px 16px',
                    }}
                  />
                  <div className="absolute inset-0 p-4 flex flex-col justify-between">
                    <div
                      className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-lg backdrop-blur-sm border self-start"
                      style={{
                        backgroundColor: `${product.accentColor}15`,
                        borderColor: `${product.accentColor}30`,
                      }}
                    >
                      {Icon && <Icon className="size-3.5" style={{ color: product.accentColor }} />}
                      <span className="text-xs font-mono" style={{ color: product.accentColor }}>
                        {product.name}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {product.modules.slice(0, 5).map((mod) => (
                        <span
                          key={mod}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-full border text-muted-foreground bg-background/60"
                        >
                          {mod}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {product.description}
                </p>

                <p className="text-sm mb-6">
                  <span className="font-medium text-foreground">Impacto: </span>
                  <span className="text-muted-foreground">{product.outcome}</span>
                </p>

                <Button variant="outline" size="sm" className="gap-1.5 group/btn">
                  Ver caso de estudio
                  <ArrowUpRight className="size-3.5 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                </Button>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
