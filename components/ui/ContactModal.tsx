'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const openContactModal = () => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('openContactModal'))
  }
}

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  useEffect(() => {
    const handleOpen = () => setIsOpen(true)
    window.addEventListener('openContactModal', handleOpen)
    return () => window.removeEventListener('openContactModal', handleOpen)
  }, [])

  const onClose = () => setIsOpen(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      details: formData.get('details'),
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setStatus('success')
        setTimeout(() => {
          setStatus('idle')
          onClose()
        }, 3000)
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error('Failed to submit form:', error)
      setStatus('error')
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[90]"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 py-10 pointer-events-none overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-lg bg-surface dark:bg-[#111111] border border-outline-variant/20 dark:border-white/10 rounded-3xl p-8 md:p-10 pointer-events-auto relative shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-surface-container-low dark:bg-[#1A1A1A] flex items-center justify-center text-on-surface-variant dark:text-[#A0A0A0] hover:text-on-surface dark:hover:text-[#EDEDED] transition-colors"
              >
                <span className="material-symbols-outlined text-sm">close</span>
              </button>

              {status === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="material-symbols-outlined text-primary text-3xl">check_circle</span>
                  </div>
                  <h3 className="text-2xl font-serif font-medium text-on-surface dark:text-[#EDEDED] mb-2">Message Sent</h3>
                  <p className="text-on-surface-variant dark:text-[#A0A0A0]">We&apos;ll be in touch with you shortly to discuss your project.</p>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h2 className="text-3xl font-serif font-medium text-on-surface dark:text-[#EDEDED] mb-2">Start a Project</h2>
                    <p className="text-on-surface-variant dark:text-[#A0A0A0]">Tell us a little about your goals. We&apos;ll handle the rest.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-on-surface dark:text-[#EDEDED] mb-2">Full Name</label>
                      <input
                        required
                        type="text"
                        id="name"
                        name="name"
                        className="w-full bg-surface-container-low dark:bg-[#1A1A1A] border border-outline-variant/20 dark:border-white/10 rounded-xl px-4 py-3 text-on-surface dark:text-[#EDEDED] focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-body"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-on-surface dark:text-[#EDEDED] mb-2">Email Address</label>
                      <input
                        required
                        type="email"
                        id="email"
                        name="email"
                        className="w-full bg-surface-container-low dark:bg-[#1A1A1A] border border-outline-variant/20 dark:border-white/10 rounded-xl px-4 py-3 text-on-surface dark:text-[#EDEDED] focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-body"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="details" className="block text-sm font-medium text-on-surface dark:text-[#EDEDED] mb-2">Project Details</label>
                      <textarea
                        required
                        id="details"
                        name="details"
                        rows={4}
                        className="w-full bg-surface-container-low dark:bg-[#1A1A1A] border border-outline-variant/20 dark:border-white/10 rounded-xl px-4 py-3 text-on-surface dark:text-[#EDEDED] focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-body resize-none"
                        placeholder="Tell us about what you want to build..."
                      />
                    </div>

                    {status === 'error' && (
                      <p className="text-error text-sm">Something went wrong. Please try again.</p>
                    )}

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full bg-primary text-on-primary font-medium px-6 py-4 rounded-xl hover:bg-primary-container hover:shadow-lg transition-all disabled:opacity-70 flex justify-center items-center"
                      >
                        {status === 'loading' ? (
                          <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        ) : (
                          'Send Details'
                        )}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
