'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { openContactModal } from '../ui/ContactModal'

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'
  }, [isOpen])

  const closeNav = () => setIsOpen(false)

  return (
    <>
      <button 
        className="md:hidden p-2 text-on-surface dark:text-[#EDEDED] z-[70] relative"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        <motion.div animate={isOpen ? "open" : "closed"} className="w-6 h-6 flex items-center justify-center relative">
            <motion.span 
              variants={{ closed: { rotate: 0, y: -4 }, open: { rotate: 45, y: 0 } }} 
              className="absolute w-6 h-[2px] bg-current" 
            />
            <motion.span 
              variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }} 
              className="absolute w-6 h-[2px] bg-current text-on-surface dark:text-[#EDEDED]" 
            />
            <motion.span 
              variants={{ closed: { rotate: 0, y: 4 }, open: { rotate: -45, y: 0 } }} 
              className="absolute w-6 h-[2px] bg-current" 
            />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-[50] md:hidden backdrop-blur-sm"
              onClick={closeNav}
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-64 bg-surface dark:bg-[#0F0F0F] z-[60] shadow-2xl md:hidden overflow-y-auto"
            >
              <div className="flex flex-col h-full p-8 pt-20">
                <nav className="flex flex-col gap-6">
                  <Link href="/#work" onClick={closeNav} className="text-lg font-medium text-on-surface dark:text-[#EDEDED] hover:text-primary transition-colors">Work</Link>
                  <Link href="/#services" onClick={closeNav} className="text-lg font-medium text-on-surface dark:text-[#EDEDED] hover:text-primary transition-colors">Services</Link>
                  <Link href="/#about" onClick={closeNav} className="text-lg font-medium text-on-surface dark:text-[#EDEDED] hover:text-primary transition-colors">About</Link>
                  <Link href="/#contact" onClick={closeNav} className="text-lg font-medium text-on-surface dark:text-[#EDEDED] hover:text-primary transition-colors">Contact</Link>
                  <hr className="border-outline-variant/10 dark:border-white/8"/>
                  <button 
                    onClick={() => {
                      closeNav()
                      openContactModal()
                    }} 
                    className="bg-primary text-on-primary px-4 py-3 rounded-xl font-medium mt-4 w-full text-center hover:bg-primary-container transition-colors"
                  >
                    Start a Project
                  </button>
                </nav>
                <div className="mt-auto pt-8 border-t border-outline-variant/10 dark:border-white/8">
                  <p className="text-xs text-on-surface-variant dark:text-[#A0A0A0]">Vibe-coded websites.</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
