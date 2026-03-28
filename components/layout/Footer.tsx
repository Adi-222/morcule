import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant/15 dark:border-white/8 bg-surface dark:bg-[#1A1A1A] text-on-surface dark:text-[#EDEDED] py-16 md:py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-16">
        <div className="space-y-6 max-w-sm">
          <Link className="text-3xl font-serif font-bold text-on-surface dark:text-[#EDEDED]" href="/">Morcule</Link>
          <p className="text-on-surface-variant dark:text-[#A0A0A0]">We curate digital experiences for local legends. Vibe-coded, result-driven, human-centered.</p>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full border border-outline-variant/30 dark:border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all" href="#">
              <span className="material-symbols-outlined text-base">language</span>
            </a>
            <a className="w-10 h-10 rounded-full border border-outline-variant/30 dark:border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all" href="#">
              <span className="material-symbols-outlined text-base">alternate_email</span>
            </a>
            <a className="w-10 h-10 rounded-full border border-outline-variant/30 dark:border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all" href="#">
              <span className="material-symbols-outlined text-base">camera</span>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 md:gap-20">
          <div className="space-y-4">
            <h4 className="font-bold uppercase tracking-widest text-xs opacity-70">Navigation</h4>
            <ul className="space-y-2 text-on-surface-variant dark:text-[#A0A0A0]">
              <li><Link className="hover:text-primary transition-colors" href="/#work">Work</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/#services">Services</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/#about">About</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/#contact">Contact</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold uppercase tracking-widest text-xs opacity-70">Sectors</h4>
            <ul className="space-y-2 text-on-surface-variant dark:text-[#A0A0A0]">
              <li><a className="hover:text-primary transition-colors" href="#">Hospitality</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Wellness</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Retail</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Professional</a></li>
            </ul>
          </div>
          <div className="space-y-4 hidden sm:block">
            <h4 className="font-bold uppercase tracking-widest text-xs opacity-70">Legal</h4>
            <ul className="space-y-2 text-on-surface-variant dark:text-[#A0A0A0]">
              <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-outline-variant/10 dark:border-white/8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-on-surface-variant dark:text-[#A0A0A0]">
        <p>© 2025 Morcule. All rights reserved.</p>
        <p>Made with ♥ for small business.</p>
      </div>
    </footer>
  )
}
