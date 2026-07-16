'use client'

import { motion } from 'framer-motion'
import { Mail, Briefcase, Code2, ArrowUpRight } from 'lucide-react'

import { fadeInUp } from '@/lib/motion'
import { cn } from '@/lib/utils'

const contactLinks = [
  {
    label: 'Correo',
    href: 'mailto:juanjvalenciao@gmail.com',
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/juanjvalenciao',
    icon: Briefcase,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/juanjvalenciao',
    icon: Code2,
  },
]

export function Contact() {
  return (
    <section id="contacto" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-4">
            // contacto
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Trabajemos juntos
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-10 max-w-md mx-auto">
            Cuéntame sobre tu proyecto. Te respondo en menos de 24 horas.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={cn(
                  'inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border text-sm font-medium transition-all duration-200',
                  'hover:border-primary/50 hover:text-primary',
                )}
              >
                <link.icon className="size-4" />
                {link.label}
                {link.href.startsWith('http') && <ArrowUpRight className="size-3" />}
              </a>
            ))}
          </div>

          <a
            href="mailto:juanjvalenciao@gmail.com"
            className="inline-flex items-center justify-center h-9 gap-1.5 px-8 rounded-lg border border-transparent bg-primary text-primary-foreground text-sm font-medium whitespace-nowrap transition-all hover:bg-primary/80"
          >
            Envíame un correo
          </a>
        </motion.div>
      </div>
    </section>
  )
}
