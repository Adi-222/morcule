'use client'
import Image from 'next/image'
import ScrollReveal from '../ui/ScrollReveal'
import { motion } from 'framer-motion'

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Morcule didn't just build a site; they built a digital home for our roasting philosophy. Our online sales doubled within a month of launch.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKfqOTNzn_zGiKOCxjkkwMq6gPlshmnVsuld0Uzr1A6dW6m4UW5I59T81GBDJREQNhWxOd0yvllUSOPIANwb4gnmsQyVxcJ_jLUMciAqqqHiexaC8jq-3zfrqQF61kN6jfyUXhUqOAhwSejL3UdPv-9NIXZFd8rsl-n6NlgY2BUkpGP3c8n4t6claWLJISqwL4hSUV7sJ2hO6GztiMwv-i1HbCcITuSABWcwRIguLkoAv8X4LL-eZi5vqPBwdZIi9eFaJWhsqWRhM",
      name: "Marcus Chen",
      role: "Founder, Estate Coffee"
    },
    {
      quote: "The process was so smooth. They actually listened to our weird ideas and turned them into something beautiful and functional.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcmhO_ZwWl-isVx_J-0CUdH_aB-fBILxqdPukuMBvloRPtbZgcEb88sLeXnNm0iiWt-Munet2IUJyRZ7gDC8rsDaR_UPZBBLyIx-QarYe60yE8_2e3WoByB0sj5Xk55_bH7dXIgMJgXkeFV7tKf6pjkSdyGztzAUpllhOSR0KsMqzIInHdcAZ4ALQu2yI9I8d25vT-1wYn9Phhcs0IR1i9LTUNsKnvnVoGIzM0yFCPC4PeCPcMakF12cbFv321QxJkwrbZ0mTao8w",
      name: "Sarah Jenkins",
      role: "Owner, Luna Aesthetics"
    },
    {
      quote: "Finally, a web agency that understands local business. Our patient bookings have never been easier to manage.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuClrPoBQpbaZjWwi6OmfTMudNHDQR2yR1CSIbJGgEh8DBqVU7jVCxZH253cRGL-vGs9wW3UTzVy4fxygdnaurEYmEHud-gM6TffVHgm-_rr8jTBTOoauwp63LwEL7PCZ8XJthnidIgP-rBAQWqm8pA0k_H6ytfDyOt0xUno69inLZ26HLNzGACrBIZsDA3c-YrWjjtxTwCSzN9GMc5vG_dzNZwZNn2luPnVvrbgLT5hQTyI_R3GYMrODWX8gJ5PBPfjy7Vcy4PKs5U",
      name: "Dr. David Miller",
      role: "Summit Dental"
    }
  ]

  return (
    <section className="bg-surface-container-low dark:bg-[#141414] py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-on-surface dark:text-[#EDEDED]">Clients love working with us.</h2>
        </ScrollReveal>
      </div>
      <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] md:[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] group pb-12 pt-8">
        <div className="flex shrink-0 animate-scroll items-stretch gap-8 pr-8 group-hover:[animation-play-state:paused]" style={{ animationDuration: '60s' }}>
          {[...testimonials, ...testimonials].map((testi, index) => (
            <motion.div 
              whileHover={{ y: -8, scale: 1.02 }}
              key={index} 
              className="w-[320px] md:w-[480px] shrink-0 bg-surface-container-lowest dark:bg-[#1E1E1E] p-10 rounded-xl border border-outline-variant/5 dark:border-white/8 shadow-xl shadow-surface-dim/0 hover:shadow-primary/5 space-y-8 h-full flex flex-col justify-between transition-all cursor-default"
            >
              <div>
                <div className="text-primary flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="text-xl md:text-2xl font-serif leading-relaxed italic dark:text-[#EDEDED]">&quot;{testi.quote}&quot;</p>
              </div>
              <div className="flex items-center gap-4 mt-8">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-dim relative shrink-0">
                  <Image src={testi.img} alt={testi.name} fill sizes="48px" className="object-cover" />
                </div>
                <div>
                  <p className="font-bold dark:text-[#EDEDED]">{testi.name}</p>
                  <p className="text-sm text-on-surface-variant dark:text-[#A0A0A0]">{testi.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Duplicate Track */}
        <div className="flex shrink-0 animate-scroll items-stretch gap-8 pr-8 group-hover:[animation-play-state:paused]" aria-hidden="true" style={{ animationDuration: '60s' }}>
          {[...testimonials, ...testimonials].map((testi, index) => (
            <motion.div 
              whileHover={{ y: -8, scale: 1.02 }}
              key={`dup-${index}`} 
              className="w-[320px] md:w-[480px] shrink-0 bg-surface-container-lowest dark:bg-[#1E1E1E] p-10 rounded-xl border border-outline-variant/5 dark:border-white/8 shadow-xl shadow-surface-dim/0 hover:shadow-primary/5 space-y-8 h-full flex flex-col justify-between transition-all cursor-default"
            >
              <div>
                <div className="text-primary flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="text-xl md:text-2xl font-serif leading-relaxed italic dark:text-[#EDEDED]">&quot;{testi.quote}&quot;</p>
              </div>
              <div className="flex items-center gap-4 mt-8">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-dim relative shrink-0">
                  <Image src={testi.img} alt={testi.name} fill sizes="48px" className="object-cover" />
                </div>
                <div>
                  <p className="font-bold dark:text-[#EDEDED]">{testi.name}</p>
                  <p className="text-sm text-on-surface-variant dark:text-[#A0A0A0]">{testi.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
