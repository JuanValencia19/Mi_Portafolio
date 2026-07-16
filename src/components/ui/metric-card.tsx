import { cn } from '@/lib/utils'

interface MetricCardProps {
  label: string
  value: string
  trend?: 'up' | 'down'
  status?: 'active' | 'idle' | 'inactive'
}

const statusColors = {
  active: 'bg-[#28c840]',
  idle: 'bg-[#febc2e]',
  inactive: 'bg-[#6b6b80]',
}

export function MetricCard({ label, value, trend, status }: MetricCardProps) {
  return (
    <div className="rounded-xl border border-[#22222e] bg-[#14141c] p-4 min-w-0">
      <div className="flex items-center justify-between mb-1.5">
        <p className="text-[10px] font-mono text-[#6b6b80] tracking-widest uppercase truncate">
          {label}
        </p>
        {status && (
          <span className={cn('size-1.5 rounded-full shrink-0', statusColors[status])} />
        )}
      </div>
      <p className="text-lg font-semibold text-[#e8e8ed] tracking-tight">
        {value}
      </p>
      {trend && (
        <span
          className={cn(
            'text-[10px] font-mono',
            trend === 'up' ? 'text-[#28c840]' : 'text-[#ff5f57]',
          )}
        >
          {trend === 'up' ? '↑' : '↓'} 12%
        </span>
      )}
    </div>
  )
}
