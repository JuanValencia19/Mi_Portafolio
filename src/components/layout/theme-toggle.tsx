'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle theme"
    >
      <Sun className="hidden dark:block transition-transform duration-300 rotate-0 dark:rotate-90" />
      <Moon className="block dark:hidden transition-transform duration-300 rotate-0 dark:rotate-90" />
    </Button>
  )
}
