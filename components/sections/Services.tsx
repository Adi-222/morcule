'use client'
import { motion } from 'framer-motion'
import ScrollReveal from '../ui/ScrollReveal'

export default function Services() {
  const services = [
    { icon: 'brush', title: 'Custom Design', desc: "Tailored layouts that capture your brand's unique vibe and story perfectly." },
    { icon: 'speed', title: 'Fast Delivery', desc: 'Launch your site in weeks, not months. Efficient process, high-end results.' },
    { icon: 'smartphone', title: 'Mobile-First', desc: 'Ensuring a seamless experience for your customers on every device size.' },
    { icon: 'search', title: 'SEO Ready', desc: 'Built with search engines in mind so customers can actually find you.' },
    { icon: 'edit_note', title: 'Easy Edits', desc: 'Simple management system so you can update prices or menus in seconds.' },
    { icon: 'support_agent', title: 'Ongoing Support', desc: 'We stay by your side after launch to ensure everything stays sharp.' },
  ]

  return (
    <section className="bg-surface-container-low dark:bg-[#141414] py-24 md:py-32" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-16 text-center space-y-4">
            <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-on-surface dark:text-[#EDEDED]">Everything your business needs online.</h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 0.08}>
              <motion.div 
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-surface-container-lowest dark:bg-[#1E1E1E] p-8 md:p-10 rounded-xl hover:shadow-2xl border border-outline-variant/5 dark:border-white/8 h-full group cursor-pointer flex flex-col transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center mb-6 relative overflow-hidden shrink-0 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors duration-300">
                  <motion.span 
                    className="material-symbols-outlined text-primary relative z-10 text-[28px]"
                    animate={{ rotate: 0 }}
                    whileHover={{ rotate: [0, -10, 10, -5, 5, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {service.icon}
                  </motion.span>
                </div>
                <h3 className="text-2xl font-medium mb-3 dark:text-[#EDEDED] group-hover:text-primary transition-colors duration-300 font-serif">{service.title}</h3>
                <p className="text-on-surface-variant dark:text-[#A0A0A0] leading-relaxed text-base">{service.desc}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
