'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import MobileNav from './MobileNav'
import { openContactModal } from '../ui/ContactModal'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-surface/80 dark:bg-[#0F0F0F]/80 backdrop-blur-xl border-b border-outline-variant/15 dark:border-white/8 shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-12">
          <Link className="text-2xl font-bold font-serif text-on-surface dark:text-[#EDEDED] tracking-tight" href="/">Morcule</Link>
          <div className="hidden md:flex items-center gap-8">
            <Link className="text-on-surface-variant dark:text-[#A0A0A0] hover:text-primary transition-colors" href="/#work">Work</Link>
            <Link className="text-on-surface-variant dark:text-[#A0A0A0] hover:text-primary transition-colors" href="/#services">Services</Link>
            <Link className="text-on-surface-variant dark:text-[#A0A0A0] hover:text-primary transition-colors" href="/#about">About</Link>
            <Link className="text-on-surface-variant dark:text-[#A0A0A0] hover:text-primary transition-colors" href="/#contact">Contact</Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button 
            onClick={openContactModal}
            className="hidden md:block bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-2.5 rounded-full font-medium active:scale-95 transition-transform hover:shadow-lg"
          >
            Start a Project
          </button>
          <MobileNav />
        </div>
      </div>
    </nav>
  )
}
