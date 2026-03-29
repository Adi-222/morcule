'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const IntroSequence = ({ onComplete }: { onComplete: () => void }) => {
  const [particles] = useState([...Array(30)].map((_, i) => ({
    id: i,
    angle: Math.random() * Math.PI * 2,
    velocity: 100 + Math.random() * 400,
    size: 2 + Math.random() * 12,
    delay: 1.0 + Math.random() * 0.05, 
  })))

  return (
    <motion.div 
      className="fixed inset-0 z-[9999] overflow-hidden bg-[#E8DCC4] flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.5, duration: 1.5 }}
      onAnimationComplete={onComplete}
      style={{ pointerEvents: 'none' }}
    >
      {/* 1. The Dropping Coffee Bean */}
      <motion.div
        initial={{ y: "-100vh", rotate: -45, scale: 0.8 }}
        animate={{ y: "0vh", rotate: 10, scale: [0.8, 1, 0.9] }}
        transition={{ 
          duration: 1, 
          ease: "easeIn", 
        }}
        className="relative z-50 w-24 h-32 md:w-32 md:h-40 drop-shadow-2xl"
      >
        <Image 
          src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=600&auto=format&fit=crop"
          alt="Coffee Bean"
          fill
          className="object-cover"
          style={{ 
            clipPath: 'ellipse(30% 50% at 50% 50%)',
          }}
        />
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[2px] h-[80%] bg-[#1A0B02]/50 rotate-[10deg] blur-[1px] rounded-full"></div>
      </motion.div>

      {/* 2. The Liquid Crown Splash Expansion */}
      <motion.div 
        initial={{ scale: 0, opacity: 1 }}
        animate={{ scale: [0, 150] }}
        transition={{ delay: 1, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#19120f] z-40"
      />

      {/* 3. The Splash Particles (Dynamic generation) */}
      <div className="absolute inset-0 z-40 flex items-center justify-center">
        {particles.map((p) => {
          const x = Math.cos(p.angle) * p.velocity;
          const y = Math.sin(p.angle) * p.velocity;
          return (
            <motion.div
              key={p.id}
              initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
              animate={{ 
                x: x, 
                y: y, 
                scale: [0, 1, 0],
                opacity: [1, 1, 0] 
              }}
              transition={{ delay: p.delay, duration: 0.6 + Math.random() * 0.4, ease: "easeOut" }}
              className="absolute rounded-full bg-[#3c2a21]"
              style={{
                width: p.size,
                height: p.size * (1 + Math.random() * 1),
                rotate: (p.angle * 180) / Math.PI,
                filter: `blur(${Math.random() * 2}px)`
              }}
            />
          )
        })}
      </div>
    </motion.div>
  )
}

export default function EstateCoffeeCaseStudy() {
  const [introFinished, setIntroFinished] = useState(false)

  // Block scrolling while intro is running
  useEffect(() => {
    if (!introFinished) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [introFinished])

  return (
    <>
      {!introFinished && <IntroSequence onComplete={() => setIntroFinished(true)} />}
      <motion.div 
        className="bg-[#19120f] text-[#efdfda] font-sans selection:bg-[#ffb781] selection:text-[#4e2600] min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2 }} // Fades in smoothly as the liquid overtakes the screen
      >
      
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 h-20 bg-[#0a0705]/40 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-[#0d0705]/40 flex items-center justify-between px-8 md:px-12">
        <div className="flex items-center gap-12 max-w-7xl mx-auto w-full justify-between">
          <Link href="/" className="text-2xl font-serif font-bold text-[#efdfda] tracking-tighter hover:scale-105 transition-all duration-300">
            ESTATE
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <span className="text-[#ffb781] border-b-2 border-[#ffb781] pb-1 font-sans uppercase text-[12px] font-extrabold tracking-widest cursor-pointer">Home</span>
            <span className="text-[#efdfda] hover:text-[#ffb781] transition-colors duration-300 font-sans uppercase text-[12px] font-extrabold tracking-widest cursor-pointer">Menu</span>
            <span className="text-[#efdfda] hover:text-[#ffb781] transition-colors duration-300 font-sans uppercase text-[12px] font-extrabold tracking-widest cursor-pointer">Our Story</span>
            <span className="text-[#efdfda] hover:text-[#ffb781] transition-colors duration-300 font-sans uppercase text-[12px] font-extrabold tracking-widest cursor-pointer">Reservations</span>
            <span className="text-[#efdfda] hover:text-[#ffb781] transition-colors duration-300 font-sans uppercase text-[12px] font-extrabold tracking-widest cursor-pointer">Gallery</span>
            <span className="text-[#efdfda] hover:text-[#ffb781] transition-colors duration-300 font-sans uppercase text-[12px] font-extrabold tracking-widest cursor-pointer">Contact</span>
          </div>
          <button className="bg-[#ffb781] text-[#4e2600] px-6 py-2 rounded-full font-sans uppercase text-[11px] font-extrabold tracking-widest hover:scale-105 hover:-translate-y-1 transition-all duration-300 active:scale-95">
            Order Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header 
        className="relative min-h-screen flex items-center pt-20 overflow-hidden"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255, 183, 129, 0.05) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
      >
        <div className="max-w-7xl mx-auto px-8 w-full grid md:grid-cols-[55%_45%] gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="z-10"
          >
            <h1 className="font-serif font-bold text-6xl md:text-8xl leading-tight tracking-tight text-[#efdfda] mb-6">
              Discover the <span className="text-[#ffb781] italic font-light">extraordinary</span> taste in every sip.
            </h1>
            <p className="text-[#d2c4be] text-lg md:text-xl max-w-lg mb-10 leading-relaxed font-light">
              Experience the culmination of artisanal roasting and ethical sourcing. Our beans are hand-selected to deliver a symphony of flavor.
            </p>
            <button className="group flex items-center gap-4 border-2 border-[#ffb781] text-[#ffb781] px-8 py-4 rounded-full font-sans uppercase text-sm font-extrabold tracking-widest hover:bg-[#ffb781] hover:text-[#4e2600] transition-all duration-300">
              Explore Our Coffee
              <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
            </button>
          </motion.div>

          <div className="relative flex justify-center items-center">
            <div className="absolute inset-0 bg-[#ffb781]/10 blur-[120px] rounded-full"></div>
            <motion.div 
              animate={{ y: [0, -20, 0], rotate: [15, 12, 15] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative z-20"
              style={{ filter: 'drop-shadow(0 0 40px rgba(201, 123, 58, 0.08))' }}
            >
              <div className="relative w-80 h-80 md:w-[450px] md:h-[450px]">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTN_pwk8ATsGMlAHWq8Q0E2D-VKx2FXAwSrh-B6C__w67DlK3Zc8GgnVynoYGiu-YR5FitHC9lUVQHNiLSP4WtstrVEcoSAEdRazI1sCk5KzSHwBgMCZdboBl9hApoRQEBr5EVu2Ud-sKW53Hwd1UR_rEhEgj7dCqPGS3Q7uNJCzxIsgThQK8USODfOGS8XlHbyfX5xOK7-1KwbDz0-tMyscHRn01ASYhKs3sd6B2KxARKzO7FJ1KXXP5MvqytoGNUbeA6FJOynGHE"
                  alt="Premium takeaway coffee cup"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
            {/* Splash Elements (Decorative) */}
            <div className="absolute -z-10 opacity-60">
              <div className="w-96 h-96 border border-[#ffb781]/20 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Product Showcase */}
      <section className="py-32 bg-[#221a17] relative">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <span className="font-sans text-[#ffb781] uppercase text-xs font-extrabold tracking-[0.2em] block mb-4">OUR SIGNATURE COLLECTION</span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#efdfda]">Crafted for the discerning palate.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24">
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative bg-[#3c332f] rounded-xl p-8 pt-24 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full shadow-2xl overflow-hidden">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnBSfXfhjHQD3Lv5OwAcc1LjdhX_Tq9SXBldetFsDm51kmbY2oVEvKXtpoZ_c_je9p3m7WNrtY5eo4toej9Fws2FYYXzT_WXuJrCCaPvrSjCCRGPlticNiN6dFqJF8rvPAw1ty8xLDw0dHIOuLGa_CRWgK6tSQ8B_doioreYv-ddZ27HcjJhWOOvpnPeEGtvMLQSs-1z7jZppm5C6ns0ipD6wDiAbS_AKDlTImbKuLDJFQRg6Rd_-WGqZI9M2OmO9ib1LIcBLov_2n"
                  alt="Cappuccino"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="font-serif text-2xl mb-4 text-center">Cappuccino</h3>
              <div className="flex justify-between items-center mt-8">
                <span className="text-[#D4A853] font-bold text-xl">$6.50</span>
                <button className="bg-[#ffb781] text-[#4e2600] p-3 rounded-full hover:rotate-90 transition-transform duration-300 flex items-center justify-center">
                  <span className="material-symbols-outlined">add</span>
                </button>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative bg-[#3c332f] rounded-xl p-8 pt-24 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full shadow-2xl overflow-hidden">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbbdas2kH_tbx3mP9RTVWHkibn_aYyYkTeAdCcvGMPdxx2qwMJ3FggrwKnO8LrTxxtzWvxyzAq4MrI3Zh5Wa6eiEsyVrCVwLLYoZVDPPGZxdBQose6bOkVwcZcbRvwb5Eqpsbww5S3uyiub8t16fMILB4AOeejh6gqzY9ckrH-AwpsBqDu3gjIlpZfi9CPxCuqM4vJN2Qs6y3st5sx6k0ZbQkJ57eBL3AZYoSHeZalyY7NMdQ0jWwBGP1cPcZ4zDxZGCqHVwJB8bs3"
                  alt="Signature Latte"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="font-serif text-2xl mb-4 text-center">Signature Latte</h3>
              <div className="flex justify-between items-center mt-8">
                <span className="text-[#D4A853] font-bold text-xl">$6.50</span>
                <button className="bg-[#ffb781] text-[#4e2600] p-3 rounded-full hover:rotate-90 transition-transform duration-300 flex items-center justify-center">
                  <span className="material-symbols-outlined">add</span>
                </button>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group relative bg-[#3c332f] rounded-xl p-8 pt-24 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full shadow-2xl overflow-hidden">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZ0xcrpJ_G74_KcsE0sXBc1WC-7AYs7_jITM43Qdf6w6kuOyjUzh7lSVrcuFNVJrfNgJUawu4RHf8v6etzvemNPLsSUI_n7xT169_Pu1h3xAygWMZIts-H92RQ5764aexCJXbH6_SkrdsoRX4smZ10zbH0THe0fOaDoswh6azuaK7MffKRJbieWG_QkAjJIJ4YFWXbxClhtRTbV537MDvmHH4CtQThdX98OnDZa3sNhsc39OUkB3MdKvT5mWul2DqdbN1ITn2xsKqJ"
                  alt="Velvet Mocha"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="font-serif text-2xl mb-4 text-center">Velvet Mocha</h3>
              <div className="flex justify-between items-center mt-8">
                <span className="text-[#D4A853] font-bold text-xl">$6.50</span>
                <button className="bg-[#ffb781] text-[#4e2600] p-3 rounded-full hover:rotate-90 transition-transform duration-300 flex items-center justify-center">
                  <span className="material-symbols-outlined">add</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About / Story */}
      <section className="py-32 overflow-hidden bg-[#19120f]">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 text-[180px] font-serif font-bold text-white/5 select-none">01</div>
            <div className="relative rounded-xl w-full h-[500px] shadow-2xl z-10 overflow-hidden">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdiU07zOpPUGQx3LFOyXHy-JiuiUHE5xTJdhquXND1yoDsNiUPJprEvwaBMu1JOvmC2E9FcXqDALDnCFkvYwC7Z5ApOn71oZf162rGWLrrrf27XRWJ6f8IhYvXt7RkpB_7SkxZCffYOU-E0_gXOUQZc32MD9c8bA82D6N-Gs5-nN9kqJEOISRPV8IyegiNGKD9uwAGWOUiddM5U5_lFlWE3J6x-kENXqBPiXiWhuy99jpWmVdoEDlkHabUtoetHBLg2Uu7-Gds8yqS"
                alt="Barista pouring latte art"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-xl border-8 border-[#19120f] z-20 shadow-2xl overflow-hidden">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPLu5oY6npmzwI51is-sXaaQAW8ULP7bQvMF9qy59aPFWpYf0jaEFGibaE7k7hDb4GoXeUTyQpNZ2ukP7vi5MO24tL6E54Ji3VN86aq_577n3qnjtZSaLS8HGqBAo8AmL5LlhFk2XxOyu-MUXYJRliqv22LCQmz8XwA5763umPw0NL0Woc5C6x44qqfrn0GOiQpedgTka1b0JsNdaSJ3fRftw4Rl68IE7FII2puSQFskCFaXoSTR1VpAz6JnxXZjj4miRDxB61gfaq"
                alt="Close up of coffee beans"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-sans text-[#ffb781] uppercase text-xs font-extrabold tracking-[0.2em] block mb-4">ABOUT ESTATE</span>
            <h2 className="font-serif text-5xl mb-8 leading-tight text-[#efdfda]">High-quality beans, ethically sourced and masterfully roasted.</h2>
            <div className="space-y-6 text-[#d2c4be] text-lg leading-relaxed font-light">
              <p>At Estate, we believe coffee is more than a beverage&mdash;it&apos;s an experience. We travel to the most remote corners of the globe to partner with farmers who share our passion for excellence and sustainability.</p>
              <p>Every small-batch roast is a meticulous process, balancing time and temperature to unlock the unique characteristics inherent in every bean.</p>
            </div>
            <button className="mt-10 border border-[#efdfda]/20 text-[#efdfda] px-8 py-3 rounded-full font-sans uppercase text-[11px] font-extrabold tracking-widest hover:border-[#ffb781] hover:text-[#ffb781] transition-all duration-300">
              Our Story
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 bg-[#261e1b]">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="font-sans text-[#ffb781] uppercase text-xs font-extrabold tracking-[0.2em] block mb-4">WHY ESTATE</span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#efdfda]">More than just coffee.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:col-span-2 relative group overflow-hidden rounded-2xl h-[400px]"
            >
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDM80u9ZwG85aF7KAZkQHd9l0A1FOmS8OlOZHHH7Jb9YsPmfwdSuKGeTsu_HKUlLfe_tnNYWQtYg1uAdI0VEOcOGAEMVB6yITFy5SIYaxoBs-9q7B3vNE7fFYH44z0qEvl2yhoNLrYGPQkZgkbUD_RNRTNpGCavNc6gPylruyD9vLYUBJbSkXFsX-g3fv1a8VyYRgXWXZyXKERgZO9_QMUxvU13wVtXcEYaR3duIklJ5M4QXQ8TGR5GuVcM-Gfyx7hUdZTCHp-itme9"
                alt="Urban Sanctuary"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#19120f]/90 to-transparent p-10 flex flex-col justify-end">
                <h3 className="font-serif text-3xl mb-2 text-[#efdfda]">Our Urban Sanctuary</h3>
                <p className="text-[#d2c4be] font-light">Design meets comfort in our signature roasteries.</p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#3c332f] p-10 rounded-2xl flex flex-col items-start justify-center"
            >
              <span className="material-symbols-outlined text-5xl text-[#ffb781] mb-6">coffee</span>
              <h3 className="font-serif text-xl mb-4 text-[#efdfda]">Premium Single-Origin Beans</h3>
              <p className="text-[#d2c4be] text-sm font-light">Sourced directly from micro-lots across the coffee belt.</p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative group overflow-hidden rounded-2xl md:col-span-1 h-[400px] md:h-auto"
            >
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJ2S_PsQdg7n71zG_zViIYFMdMFOxGuXUcWTnfMAzDvy3JomRQ9kQm5YwmNaAW6e1akXLAmoUDYXmaLCPgl3JHIOdcPTh5NmoIicm3Zzb2UM9aT9bQn7ejLzYdg3xstmxIpNj4ChHqvFZQV3lvAB3ecksZeLzUTLPVwf-SRAwA0qwx2o9GQ4zGC40JJzFFzH0P9cdJBsAO74_su81Pj3VWXLvnq2_StY26qtPv7t620TlPw5OmE0nHqY1JPun0-7pfGInEe6jMdOSH"
                alt="Professional Barista"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#19120f]/40 flex items-center justify-center p-6 text-center">
                <h3 className="font-serif text-xl text-[#efdfda]">Professional Barista Team</h3>
              </div>
            </motion.div>

            {/* Feature 4 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-[#3c332f] p-10 rounded-2xl flex flex-col items-start justify-center md:col-start-4"
            >
              <span className="material-symbols-outlined text-5xl text-[#ffb781] mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
              <h3 className="font-serif text-xl mb-4 text-[#efdfda]">Personalized Experience</h3>
              <p className="text-[#d2c4be] text-sm font-light">Tailored recommendations based on your unique flavor profile.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chef's Specials */}
      <section className="py-32 bg-[#151010]">
        <div className="max-w-5xl mx-auto px-8 space-y-12">
          {/* Special 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row bg-[#130d0a] rounded-2xl overflow-hidden hover:shadow-2xl transition-all"
          >
            <div className="relative w-full md:w-80 h-64 md:h-auto">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuXOpUlwWDfJ27gN8HDGlUSwnVhbG7MPRprRXl48a1F9gHo2bwxvtfljnVr4BeUCae38vT7pOS_kHWUdxHqoGFOF0GM7dySjLssHVioD1_88Qb6TolUV1QwzWK0zE93ofig4rEpuA-ntTWFz7i9rhjUGa0YrWnPaN0cCOfMYBT86In8qhLiVpvVTflogt84uUvwFuN_AiWLieg_tE9V38qySjU5_XPeuYs2SqFc6wqv4mTquRYNdk9ljvrgtI325-YKKkVdSovJWbf"
                alt="Signature Estate Pastry"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-10 flex flex-col justify-center flex-grow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-serif text-2xl text-[#efdfda]">Signature Estate Pastry</h3>
                <span className="text-[#D4A853] font-bold text-xl">$8.00</span>
              </div>
              <p className="text-[#d2c4be] mb-6 font-light">Hand-laminated dough with premium dark chocolate and a hint of espresso salt.</p>
              <div className="flex text-[#D4A853]">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Special 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col md:flex-row bg-[#130d0a] rounded-2xl overflow-hidden hover:shadow-2xl transition-all"
          >
            <div className="relative w-full md:w-80 h-64 md:h-auto">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDw3Bk_ZCzCFt1ObygAVSW67d28stcv30BP4AxnM84eu4TuKfN8zQQ2kLUhclZB5dk0DfXikbONeCdwBfchKhlRHLim7TzRhsYjOBcKa8pu20BsuZZ7pURokzxcXW-Nr9nng4p6C64eQmEzN9LAcwWsOu2aszniafKUZm2yW2CEtznoqUM48o3RuLN7hOaIFw0_Rjie1wMk9fVl5HqvlbRbDm0Gq_u9xiQraDRHxxRmfpxB885GyZtTUI9bhgeY7LZIGwnhHEIQXuiw"
                alt="Nitro Cold Brew Reserve"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-10 flex flex-col justify-center flex-grow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-serif text-2xl text-[#efdfda]">Nitro Cold Brew Reserve</h3>
                <span className="text-[#D4A853] font-bold text-xl">$7.50</span>
              </div>
              <p className="text-[#d2c4be] mb-6 font-light">Steeped for 18 hours, infused with nitrogen for a silky, Guinness-like head.</p>
              <div className="flex text-[#D4A853]">
                {[1, 2, 3, 4].map((star) => (
                  <span key={star} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>star</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-32 bg-[#19120f]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="font-sans text-[#ffb781] uppercase text-xs font-extrabold tracking-[0.2em] block mb-4">THE ESTATE EXPERIENCE</span>
          </div>
          <div className="columns-1 md:columns-3 gap-6 space-y-6">
            {[
              "https://lh3.googleusercontent.com/aida-public/AB6AXuCoVk3gvOSPo3JJj-BHllzkdSykEjebsIwYSOe5VuTvTXngOxrvAEMOyVuQW737R_5bPV-PHgRrXKOuWAbqDvVE2rVFUF2lbnn74FD9752ukMqzAcbifKXHhO7snOt74qFdfYn__ubj-8Nfe2R51ww-FVVELTAqoxz65xZ_p_wrAzutQcI5ZNs_Pp5nezfCezwmRKqCOD0RDwYj13Zkk93IU-Pwni5nXYad6S37RZ9SY7gqeyTJvfTSXs4Yz3LUysUoTU6ewwFsBHB1",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuBSovam3SyEwmzhlPJ7XodbBDUIhOJWnVpkRLbhyo_bq1sklI_D5NLf56kQo9XbFuh0lbpIlULndronZt9WxFezVDK8loSQnXACDRmMM1JtWOBUa0Q6eDp_YsOrkp9OxbVdlwlUq6JuR2h-hT7lHxRNOXLo5Z8iibB0HA00JKG7B_01DTW42FoGViOj6fqw3QnCTnYLpxReuGqtCBFND0D6f1ksiMl0w6bQfDFXFDHLNIUuMtMzZTaHMkHXVlXRrVky84pD6alS5YZK",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuCdgiia7PDsz7mndgNAUTyAThBvpzDihUshkFRMU140XnA4vbjTyqCjF_laDxDO6Ifg9Oyw_8ZUYQQPIFzZB7VmYS6HTbGdY0PGdmvskwYBH2MosB8sRwdcokJobrd7Gr__ncRfDbjHY9Kx0r3qqfwYzRETAyZnO_WxhIqc9Gng9xCTCVxg6uTyUiIgg21RVnsNajV71BELXcW3vOhksII3MDPsyhsmK3HYBT0LbN7eSI77fNykdn_Gi5ZF_f-5etXFV8Y5l-R--8Ky",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuDYvpUV2vxIkZGayRGrfm5N0FWSPMY3CkpTyGIZD1b9VAu9bR9Kj2OavzfMeibZu4SUonbt89a--fQEfvV9DhXiT2DGBszVk8gWzB95negY8zzqIUz1tzXuXU_9r6Tly587SR9DmJb7ROZXrpb_vl1_frqBr9IR4W18DEC78Xi9yQuX4PyJCo4Cl13u5EgVO67fld5WW_jKahk6WRiZL6bSJ1sbVW5Cea1JUL15sBQLKaZsoNyFM7dKdqr8NP6vF8vNIeC7hmsicd_5",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuCHWtKlapvaad54Vb_tYhBJaJXFBkiUFBXEcmzrF1i9A2z8WRzIkZqRLdS_RSlEGWukzFcv9XFwsxkzOYL0As7oPYEcC4LjasK659GtqX_Dt68mObBcyFNdVIlhDU1rqJmh2EpIue5gMnFb1eAaXxPf0J-mlF8L5cJs_mcoqFoJGc7CtfxQO-fUelQ5owAivy9xmzTH7dH5ssdw_gb5IliISiE4J9Jk4-ASmKiULhwAFEXNSBE2mYlJZ_aKpIDRnyrIzhkmC3o6iZel",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuDnl91WRiTCa_AhamyT2PN0d6q7rEiMcHmFJ-r0pFuR43XgInGp8tYibhY79D4HhlLzWMki4a7Ty4tDjyzmBoe1_dp7n2yd700__jpp2e1SoGry93ljXRZHRB1e-soRLZ1ddJuNTARrTN1SAW7lbmpT0Kx9jmNH-e6i5Nv73xwXQzY8aU9gM9k7lvDYA_MMXutJSewz0tNmsZLLsDDmcSwB8pM_YItQCl9Va7r_9-nAJ2cQRh3XIfMT1FNXQdHxwB8ADqIiiGTFvqnl"
            ].map((src, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group rounded-xl overflow-hidden cursor-pointer w-full"
                style={{ breakInside: 'avoid' }}
              >
                {/* Using a standard img tag here because columns + next/image fill behaves unpredictably with unknown heights */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={src} 
                  alt="Gallery image" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-[#ffb781]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#4e2600] text-4xl">visibility</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-[#221a17]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The best atmosphere and even better coffee. The Signature Latte is a masterpiece.",
                author: "James Harrison"
              },
              {
                quote: "Their single-origin beans have completely changed my morning routine. Pure quality.",
                author: "Elena Rodriguez"
              },
              {
                quote: "An editorial coffee experience. Every cup feels intentional and luxurious.",
                author: "Marcus Thorne"
              }
            ].map((testimonial, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-[#261e1b] p-10 rounded-xl border-t-2 border-[#ffb781]"
              >
                <span className="material-symbols-outlined text-[#ffb781] text-5xl mb-6">format_quote</span>
                <p className="font-serif italic text-xl mb-8 leading-relaxed text-[#efdfda]">&quot;{testimonial.quote}&quot;</p>
                <div className="font-bold uppercase text-xs tracking-widest text-[#efdfda]">{testimonial.author}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quiz CTA */}
      <section className="py-24 bg-[#3c332f] relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255, 183, 129, 0.05) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        ></div>
        <div className="max-w-4xl mx-auto px-8 relative z-10 text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-10 text-[#efdfda]">Find out which coffee suits you best.</h2>
          <button className="bg-[#ffb781] text-[#4e2600] px-12 py-5 rounded-full font-sans uppercase text-sm font-extrabold tracking-widest hover:scale-105 transition-transform duration-300 shadow-2xl shadow-[#ffb781]/20">
            Take the Quiz
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#19120f] w-full pt-20 pb-10 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto px-8">
          <div>
            <div className="text-3xl font-serif text-[#efdfda] mb-4">ESTATE</div>
            <p className="text-[#efdfda]/70 text-sm leading-relaxed max-w-xs font-light">Elevating the coffee culture one small-batch roast at a time. Join our journey toward the perfect cup.</p>
          </div>
          <div>
            <span className="font-sans text-[#ffb781] font-bold uppercase text-[10px] tracking-[0.2em] block mb-6">EXPLORE</span>
            <ul className="space-y-4">
              <li><span className="text-[#efdfda]/70 hover:text-[#ffb781] transition-colors font-sans text-[14px] font-light cursor-pointer">Menu</span></li>
              <li><span className="text-[#efdfda]/70 hover:text-[#ffb781] transition-colors font-sans text-[14px] font-light cursor-pointer">Reservations</span></li>
              <li><span className="text-[#efdfda]/70 hover:text-[#ffb781] transition-colors font-sans text-[14px] font-light cursor-pointer">Our Story</span></li>
            </ul>
          </div>
          <div>
            <span className="font-sans text-[#ffb781] font-bold uppercase text-[10px] tracking-[0.2em] block mb-6">RESOURCES</span>
            <ul className="space-y-4">
              <li><span className="text-[#efdfda]/70 hover:text-[#ffb781] transition-colors font-sans text-[14px] font-light cursor-pointer">Gallery</span></li>
              <li><span className="text-[#efdfda]/70 hover:text-[#ffb781] transition-colors font-sans text-[14px] font-light cursor-pointer">Privacy Policy</span></li>
              <li><span className="text-[#efdfda]/70 hover:text-[#ffb781] transition-colors font-sans text-[14px] font-light cursor-pointer">Terms of Service</span></li>
            </ul>
          </div>
          <div>
            <span className="font-sans text-[#ffb781] font-bold uppercase text-[10px] tracking-[0.2em] block mb-6">CONNECT</span>
            <div className="flex gap-4">
              <span className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#ffb781] hover:text-[#4e2600] transition-all duration-300 cursor-pointer">
                <span className="material-symbols-outlined text-lg">public</span>
              </span>
              <span className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#ffb781] hover:text-[#4e2600] transition-all duration-300 cursor-pointer">
                <span className="material-symbols-outlined text-lg">mail</span>
              </span>
              <span className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#ffb781] hover:text-[#4e2600] transition-all duration-300 cursor-pointer">
                <span className="material-symbols-outlined text-lg">call</span>
              </span>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-8 mt-20 pt-8 border-t border-white/5 text-center text-[#efdfda]/40 text-[12px] font-light">
          © {new Date().getFullYear()} Estate Coffee Roasters. All Rights Reserved.
        </div>
      </footer>

      </motion.div>
    </>
  )
}
