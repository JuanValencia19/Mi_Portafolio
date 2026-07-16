import { cn } from '@/lib/utils'

interface GlowProps {
  className?: string
  color?: string
  size?: 'sm' | 'md' | 'lg'
}

const sizeMap = {
  sm: 'size-[300px]',
  md: 'size-[500px]',
  lg: 'size-[800px]',
}

export function Glow({ className, color, size = 'lg' }: GlowProps) {
  return (
    <div
      className={cn(
        'absolute rounded-full blur-3xl pointer-events-none',
        sizeMap[size],
        className,
      )}
      style={{
        background: `radial-gradient(circle at center, ${color} 0%, transparent 70%)`,
      }}
    />
  )
}
