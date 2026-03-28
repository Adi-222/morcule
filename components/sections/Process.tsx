import ScrollReveal from '../ui/ScrollReveal'

export default function Process() {
  const steps = [
    { num: '01', icon: 'explore', title: 'Discovery', desc: 'We dive into your business vibe, goals, and who your customers really are.' },
    { num: '02', icon: 'palette', title: 'Design', desc: 'We craft a visual world that feels authentic and looks premium.' },
    { num: '03', icon: 'code', title: 'Build', desc: 'High-performance development ensures your site is fast and reliable.' },
    { num: '04', icon: 'rocket_launch', title: 'Launch', desc: 'We push the button and help you announce your new digital home.' },
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 md:py-32 overflow-hidden">
      <ScrollReveal>
        <div className="mb-20">
          <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">How it works</span>
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-on-surface dark:text-[#EDEDED] mt-4">Simple, transparent, vibey.</h2>
        </div>
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
        {/* Decorative Connector */}
        <div className="hidden md:block absolute top-10 left-0 w-full h-px bg-outline-variant/20 dark:bg-white/10 -z-10"></div>
        
        {steps.map((step, index) => (
          <ScrollReveal key={index} delay={index * 0.1}>
            <div className="relative bg-surface dark:bg-[#0F0F0F]">
              <span className="text-8xl font-serif font-bold text-outline-variant/10 dark:text-white/5 absolute -top-8 -left-4 pointer-events-none">{step.num}</span>
              <div className="relative z-10 space-y-4">
                <div className="w-16 h-16 bg-surface-container dark:bg-[#1A1A1A] rounded-full flex items-center justify-center border-4 border-surface dark:border-[#0F0F0F]">
                  <span className="material-symbols-outlined text-primary">{step.icon}</span>
                </div>
                <h3 className="text-xl font-semibold dark:text-[#EDEDED]">{step.title}</h3>
                <p className="text-on-surface-variant dark:text-[#A0A0A0]">{step.desc}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
