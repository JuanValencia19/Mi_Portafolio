'use client'

import { Database, Zap } from 'lucide-react'

interface TechItem {
  name: string
  src?: string
  icon?: 'database' | 'zap'
}

const techItems: TechItem[] = [
  { name: 'React', src: 'https://cdn.simpleicons.org/react/6b7280' },
  { name: 'Next.js', src: 'https://cdn.simpleicons.org/nextdotjs/6b7280' },
  { name: 'TypeScript', src: 'https://cdn.simpleicons.org/typescript/6b7280' },
  { name: 'Python', src: 'https://cdn.simpleicons.org/python/6b7280' },
  { name: 'Power BI', src: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg' },
  { name: 'SQL', icon: 'database' },
  { name: 'Automation', icon: 'zap' },
]

function TechLogo({ item }: { item: TechItem }) {
  if (item.src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={item.src}
        alt={item.name}
        className="size-5 opacity-60 dark:opacity-50"
      />
    )
  }
  if (item.icon === 'database') {
    return <Database className="size-5 text-muted-foreground/60" />
  }
  return <Zap className="size-5 text-muted-foreground/60" />
}

function TechItemDisplay({ item, index }: { item: TechItem; index: number }) {
  return (
    <div
      key={`${item.name}-${index}`}
      className="flex items-center gap-2 shrink-0"
    >
      <TechLogo item={item} />
      <span className="text-xs font-mono text-muted-foreground whitespace-nowrap">
        {item.name}
      </span>
    </div>
  )
}

export function TechMarquee() {
  return (
    <div className="select-none">
      <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-6 text-center">
        tech stack
      </p>

      <div className="overflow-hidden mask-fade-x">
        <div className="flex gap-10 w-max animate-marquee-left hover:[animation-play-state:paused]">
          {[...techItems, ...techItems].map((item, i) => (
            <TechItemDisplay key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </div>
  )
}
