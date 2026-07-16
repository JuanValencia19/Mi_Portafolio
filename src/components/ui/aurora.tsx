'use client'

import { cn } from '@/lib/utils'

interface AuroraProps {
  className?: string
  intensity?: 'subtle' | 'medium' | 'strong'
}

const intensityMap = {
  subtle: {
    blur: 'blur-3xl',
    opacity: 'opacity-[0.15] dark:opacity-[0.25]',
  },
  medium: {
    blur: 'blur-3xl',
    opacity: 'opacity-[0.2] dark:opacity-[0.35]',
  },
  strong: {
    blur: 'blur-3xl',
    opacity: 'opacity-[0.3] dark:opacity-[0.45]',
  },
}

export function Aurora({ className, intensity = 'subtle' }: AuroraProps) {
  const config = intensityMap[intensity]

  return (
    <div className={cn('absolute inset-0 -z-10 overflow-hidden', className)}>
      <div
        className={cn(
          'absolute -top-1/4 -left-1/4 size-[800px] rounded-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent animate-aurora-slow',
          config.blur,
          config.opacity,
        )}
        style={{ animationDelay: '0s' }}
      />
      <div
        className={cn(
          'absolute -bottom-1/4 -right-1/4 size-[600px] rounded-full bg-gradient-to-tr from-primary/8 via-primary/3 to-transparent animate-aurora-medium',
          config.blur,
          config.opacity,
        )}
        style={{ animationDelay: '-5s' }}
      />
      <div
        className={cn(
          'absolute top-1/3 right-1/3 size-[400px] rounded-full bg-gradient-to-bl from-primary/5 via-transparent to-primary/3 animate-aurora-fast',
          config.blur,
          config.opacity,
        )}
        style={{ animationDelay: '-10s' }}
      />
    </div>
  )
}
