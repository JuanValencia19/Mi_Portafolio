import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface DashboardCardProps {
  children: ReactNode
  className?: string
  title?: string
}

export function DashboardCard({ children, className, title }: DashboardCardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border border-[#22222e] bg-[#14141c] p-4',
        className,
      )}
    >
      {title && (
        <p className="text-[10px] font-mono text-[#6b6b80] tracking-widest uppercase mb-3">
          {title}
        </p>
      )}
      {children}
    </div>
  )
}
