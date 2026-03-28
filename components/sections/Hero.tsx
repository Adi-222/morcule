'use client'
import { motion, Variants } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { openContactModal } from '../ui/ContactModal'

export default function Hero() {
  const [playCount, setPlayCount] = useState(0)

  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.15 }
    }
  }

  const typeLetterVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.01 } }
  }

  const renderText = (text: string, isPrimary: boolean = false) => {
    return text.split(' ').map((word, wordIndex, array) => (
      <span key={wordIndex} className={`inline-block ${wordIndex !== array.length - 1 ? 'mr-3 md:mr-4 lg:mr-5' : ''}`}>
        {word.split('').map((char, charIndex) => (
          <motion.span
            key={charIndex}
            variants={typeLetterVariants}
            className={`inline-block ${isPrimary ? 'text-primary italic' : ''}`}
          >
            {char}
          </motion.span>
        ))}
      </span>
    ))
  }

  return (
    <section className="relative min-h-[819px] flex flex-col items-center justify-center px-6 py-20 text-center overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-8 z-10 pt-20">
        <motion.h1
          key={playCount}
          onMouseLeave={() => setPlayCount(c => c + 1)}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-semibold text-on-background dark:text-[#EDEDED] leading-[1.1] tracking-tight flex flex-col items-center gap-y-2 md:gap-y-4 cursor-default"
        >
          <div>{renderText("We build websites")}</div>
          <div>{renderText("your customers", true)}</div>
          <div className="flex items-center justify-center">
            {renderText("can't ignore.")}
            
          </div>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="text-lg md:text-xl text-on-surface-variant dark:text-[#A0A0A0] max-w-2xl mx-auto font-body"
        >
          Custom websites for coffee shops, salons, dentists & more. We blend editorial craft with conversion science.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <motion.button
            onClick={openContactModal}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-4 rounded-full text-lg font-medium hover:shadow-lg transition-all"
          >
            Book a Free Call
          </motion.button>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link href="#work" className="inline-block w-full sm:w-auto text-on-surface dark:text-[#EDEDED] hover:underline decoration-primary underline-offset-8 px-8 py-4 text-lg font-medium transition-all">
              View Our Work
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/4 w-80 h-80 bg-tertiary-fixed/10 dark:bg-tertiary/20 rounded-full blur-[80px]"></div>

      {/* Infinite Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 1 }}
        className="w-full mt-24 py-10 bg-on-surface/5 dark:bg-[#EDEDED]/5 overflow-hidden flex"
        style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
      >
        <div className="flex w-full group">
          <div className="flex shrink-0 animate-scroll items-center justify-around gap-12 min-w-full px-6">
            <div className="flex items-center gap-2 text-on-surface/50 dark:text-[#EDEDED]/50 font-serif text-xl italic"><span className="material-symbols-outlined">coffee</span> The Bean Roast</div>
            <div className="flex items-center gap-2 text-on-surface/50 dark:text-[#EDEDED]/50 font-serif text-xl italic"><span className="material-symbols-outlined">content_cut</span> Velvet Scissors</div>
            <div className="flex items-center gap-2 text-on-surface/50 dark:text-[#EDEDED]/50 font-serif text-xl italic"><span className="material-symbols-outlined">dentistry</span> Bright Smile Co.</div>
            <div className="flex items-center gap-2 text-on-surface/50 dark:text-[#EDEDED]/50 font-serif text-xl italic"><span className="material-symbols-outlined">local_florist</span> Wildflower Studio</div>
            <div className="flex items-center gap-2 text-on-surface/50 dark:text-[#EDEDED]/50 font-serif text-xl italic"><span className="material-symbols-outlined">restaurant</span> Umami Kitchen</div>
            <div className="flex items-center gap-2 text-on-surface/50 dark:text-[#EDEDED]/50 font-serif text-xl italic"><span className="material-symbols-outlined">fitness_center</span> Peak Flow Gym</div>
          </div>
          {/* Duplicate for infinite loop */}
          <div className="flex shrink-0 animate-scroll items-center justify-around gap-12 min-w-full px-6" aria-hidden="true">
            <div className="flex items-center gap-2 text-on-surface/50 dark:text-[#EDEDED]/50 font-serif text-xl italic"><span className="material-symbols-outlined">coffee</span> The Bean Roast</div>
            <div className="flex items-center gap-2 text-on-surface/50 dark:text-[#EDEDED]/50 font-serif text-xl italic"><span className="material-symbols-outlined">content_cut</span> Velvet Scissors</div>
            <div className="flex items-center gap-2 text-on-surface/50 dark:text-[#EDEDED]/50 font-serif text-xl italic"><span className="material-symbols-outlined">dentistry</span> Bright Smile Co.</div>
            <div className="flex items-center gap-2 text-on-surface/50 dark:text-[#EDEDED]/50 font-serif text-xl italic"><span className="material-symbols-outlined">local_florist</span> Wildflower Studio</div>
            <div className="flex items-center gap-2 text-on-surface/50 dark:text-[#EDEDED]/50 font-serif text-xl italic"><span className="material-symbols-outlined">restaurant</span> Umami Kitchen</div>
            <div className="flex items-center gap-2 text-on-surface/50 dark:text-[#EDEDED]/50 font-serif text-xl italic"><span className="material-symbols-outlined">fitness_center</span> Peak Flow Gym</div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
