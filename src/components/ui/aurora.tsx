'use client'

import { cn } from '@/lib/utils'

interface AuroraProps {
  className?: string
  intensity?: 'subtle' | 'medium' | 'strong'
}

const intensityMap = {
  subtle: {
    blur: 'blur-3xl',
    opacity: 'opacity-[0.12] dark:opacity-[0.4]',
  },
  medium: {
    blur: 'blur-3xl',
    opacity: 'opacity-[0.18] dark:opacity-[0.55]',
  },
  strong: {
    blur: 'blur-3xl',
    opacity: 'opacity-[0.28] dark:opacity-[0.7]',
  },
}

export function Aurora({ className, intensity = 'subtle' }: AuroraProps) {
  const config = intensityMap[intensity]

  return (
    <div className={cn('absolute inset-0 -z-10 overflow-hidden', className)}>
      <div
        className={cn(
          'absolute -top-1/4 -left-1/4 size-[800px] rounded-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent dark:from-indigo-500/20 dark:via-primary/10 dark:to-transparent animate-aurora-slow',
          config.blur,
          config.opacity,
        )}
        style={{ animationDelay: '0s' }}
      />
      <div
        className={cn(
          'absolute -bottom-1/4 -right-1/4 size-[600px] rounded-full bg-gradient-to-tr from-primary/8 via-primary/3 to-transparent dark:from-purple-500/15 dark:via-primary/8 dark:to-transparent animate-aurora-medium',
          config.blur,
          config.opacity,
        )}
        style={{ animationDelay: '-5s' }}
      />
      <div
        className={cn(
          'absolute top-1/3 right-1/3 size-[400px] rounded-full bg-gradient-to-bl from-primary/5 via-transparent to-primary/3 dark:from-cyan-500/10 dark:via-transparent dark:to-primary/8 animate-aurora-fast',
          config.blur,
          config.opacity,
        )}
        style={{ animationDelay: '-10s' }}
      />
    </div>
  )
}
