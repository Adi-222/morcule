'use client'
import { motion } from 'framer-motion'
import ScrollReveal from '../ui/ScrollReveal'
import { openContactModal } from '../ui/ContactModal'

export default function Contact() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24" id="contact">
      <ScrollReveal>
        <div className="relative bg-primary-container dark:bg-primary-container rounded-[2rem] p-12 md:p-24 overflow-hidden text-center text-on-primary-container shadow-2xl">
          {/* Contact banner stays with accent gradient in both modes — no change needed */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-container opacity-90 -z-10"></div>
          {/* Abstract visual accents */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="max-w-2xl mx-auto space-y-8 relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif font-medium leading-tight text-white shadow-sm">Ready to grow your business online?</h2>
            <p className="text-lg opacity-90 text-white drop-shadow-sm">Book a free discovery call and let&apos;s talk about making your digital presence unforgettable.</p>
            <div className="pt-4">
              <motion.button 
                onClick={openContactModal}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-surface text-primary px-10 py-5 rounded-full text-xl font-bold transition-transform shadow-lg"
              >
                Book a Free Call
              </motion.button>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
