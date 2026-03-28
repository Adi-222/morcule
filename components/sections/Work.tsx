'use client'
import Image from 'next/image'
import ScrollReveal from '../ui/ScrollReveal'
import { motion, Variants } from 'framer-motion'

export default function Work() {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] } 
    }
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 md:py-32 overflow-hidden" id="work">
      <ScrollReveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4">
            <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">Selected Work</span>
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-on-surface dark:text-[#EDEDED]">Built for real businesses.</h2>
          </div>
          <p className="max-w-xs text-on-surface-variant dark:text-[#A0A0A0]">We don&apos;t do generic. Every site is custom-tailored to the brand&apos;s unique energy.</p>
        </div>
      </ScrollReveal>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
        {/* Case Study 1 */}
        <motion.div 
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          className="md:col-span-7 group cursor-pointer"
        >
          <div className="relative overflow-hidden rounded-xl aspect-[4/5] bg-surface-dim dark:bg-[#1E1E1E] mb-6 dark:border dark:border-white/8">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxj47TRJScMDtoIUoNFmqDQb-iT3j-Rpm9_E6UMAiFfjaMgaqHGggzKch0XJoWorur5BzRgCxqlbvtNl7jSkOLWodB7hqSdJp_Ek4wjLuoLLhu-F8DbMRZZbTbJHBk-nh20Yw7k5wnSSJgtFAacHr770o8yCCd_chm45vQdEUcZDMQZd2N5Ciw5dtQ6y_aAmfvrHOmYci9L-alASs_LpWLMNsPq0xiX6IReuNQKGRoTulzEyDAlNzWW1MPfFOhfnGRb6xPWQy-Cp0"
              alt="Estate Coffee Roasters"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
              <span className="bg-surface text-on-surface px-6 py-3 rounded-full font-medium shadow-xl translate-y-4 group-hover:translate-y-0 transition-all duration-500">View Project</span>
            </div>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-serif font-medium mb-1 dark:text-[#EDEDED]">Estate Coffee Roasters</h3>
              <p className="text-on-surface-variant dark:text-[#A0A0A0]">E-commerce & Brand Experience</p>
            </div>
            <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </div>
        </motion.div>

        {/* Case Study 2 */}
        <motion.div 
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          className="md:col-span-5 md:mt-24 group cursor-pointer"
        >
          <div className="relative overflow-hidden rounded-xl aspect-[4/5] bg-surface-dim dark:bg-[#1E1E1E] mb-6 dark:border dark:border-white/8">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsiIwBg9Dm_kE2sOSMrJQqOheS7nkVOkJIfyS8n283EiTrjfqWVDQygB2Pllrx9tOubqL9cVUyKdXI642VAFa8XCrKJjZ-j8Yj-eKAbQXefSfcigfg2yiu0wFG7hZP4LanjpVGuFvQioHvZXWtbatV_DbiqLO8BGSfo7PFSzTd1g7fjdDs2Jw5HoPttL96lQ2E8oTmqvZscBY0V_WR7SgE-qv9-UZTKiVD1Hhw5aQBc_wsgCdk705ZcZvCHSiyszEpZia6yk9X0bk"
              alt="Luna Aesthetics"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
              <span className="bg-surface text-on-surface px-6 py-3 rounded-full font-medium shadow-xl translate-y-4 group-hover:translate-y-0 transition-all duration-500">View Project</span>
            </div>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-serif font-medium mb-1 dark:text-[#EDEDED]">Luna Aesthetics</h3>
              <p className="text-on-surface-variant dark:text-[#A0A0A0]">Booking Platform & Visual Identity</p>
            </div>
            <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </div>
        </motion.div>

        {/* Case Study 3 */}
        <motion.div 
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          className="md:col-span-5 group cursor-pointer"
        >
          <div className="relative overflow-hidden rounded-xl aspect-[4/5] bg-surface-dim dark:bg-[#1E1E1E] mb-6 dark:border dark:border-white/8">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUdjeyvsnQZ6nUuSR1abOsnNwfA9nhSx4PBGIXRrWpCFS_2lYeAGg-TMdHhcpdW_f6hyB3YASzX61IZv9K8lZIB9TB9iI8FrOdRcSVp6heGcPtBCok2tAgMHg0P9Io5zTkBLc88L0er9p0APmBGhGyfuWPLhG8FyvSmROyKhytpjHhujQOlPA8BhWZTc1WUXgKJhiyehaFgTqeWZRV0m5Lmz-wSUfGyEm0LLj75qPw1CBykwHk9soLwz5Lt-apNiLoDs6aYrlKlrU"
              alt="Summit Dental"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
              <span className="bg-surface text-on-surface px-6 py-3 rounded-full font-medium shadow-xl translate-y-4 group-hover:translate-y-0 transition-all duration-500">View Project</span>
            </div>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-serif font-medium mb-1 dark:text-[#EDEDED]">Summit Dental</h3>
              <p className="text-on-surface-variant dark:text-[#A0A0A0]">Patient Portal & SEO Strategy</p>
            </div>
            <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </div>
        </motion.div>

        {/* Case Study 4 */}
        <motion.div 
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          className="md:col-span-7 md:-mt-24 group cursor-pointer"
        >
          <div className="relative overflow-hidden rounded-xl aspect-[16/10] bg-surface-dim dark:bg-[#1E1E1E] mb-6 dark:border dark:border-white/8">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6-mlMWJuRAJNo2_1F9FD7FQoLRxN5K1s7kuLTd9sIQin9qnpDGCWCKw0_dfGZ92v0MqcsTI0x7k7Xi95EUSVF0d2h260vJr3Q3jvrB5ZXVhfkhP90utwzuxs9LgUsrBrtIuQmyBGH9Nvd84aX4Jf9aeQCq3_YHSYv0YNeLEJy2yYj_EO7umv4suYCBqn8ZB_EywcepeAfxxpiiQOp7m2ICxJ4TcBcBD6NVpezLsIeRc4SudxMEj3y53dOeJzpbxKn3GId5evqSns"
              alt="Maison Bistro"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
              <span className="bg-surface text-on-surface px-6 py-3 rounded-full font-medium shadow-xl translate-y-4 group-hover:translate-y-0 transition-all duration-500">View Project</span>
            </div>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-serif font-medium mb-1 dark:text-[#EDEDED]">Maison Bistro</h3>
              <p className="text-on-surface-variant dark:text-[#A0A0A0]">Reservation System & Art Direction</p>
            </div>
            <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
