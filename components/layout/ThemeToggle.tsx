'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <button 
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 text-on-surface-variant dark:text-[#A0A0A0] hover:bg-surface-container-low/50 dark:hover:bg-[#141414]/50 rounded-full transition-all flex items-center justify-center"
      aria-label="Toggle Dark Mode"
    >
      <span className="material-symbols-outlined">
        {theme === 'dark' ? 'light_mode' : 'dark_mode'}
      </span>
    </button>
  )
}
