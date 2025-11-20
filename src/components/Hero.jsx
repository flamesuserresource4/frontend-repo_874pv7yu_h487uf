import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const PROMO_URL = 'https://www.attspoc.com/e/(S(3urb2pri3azha2rq5la0c2cv))/oe/landing.aspx'

const phoneImages = [
  {
    name: 'iPhone 15',
    src: 'https://images.unsplash.com/photo-1697257379687-588927284e74?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDbG9zZS11cCUyMG9mJTIwYSUyMG1vZGVybnxlbnwwfDB8fHwxNzYzNTgyOTMwfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Close-up of a modern smartphone in blue finish'
  },
  {
    name: 'Galaxy S24',
    src: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
    alt: 'Android smartphone on a minimal background'
  },
  {
    name: 'Pixel 8',
    src: 'https://images.unsplash.com/photo-1694878982190-6e37aa9eb306?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBbmRyb2lkJTIwc21hcnRwaG9uZSUyMG9uJTIwYXxlbnwwfDB8fHwxNzYzNTgyOTMxfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Smartphone device with soft studio lighting'
  }
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(2,132,199,0.25),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-4 pt-14 pb-12 sm:pt-20 sm:pb-20">
        <div className="grid lg:grid-cols-2 items-center gap-10">
          <div>
            <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}}>
              <div className="inline-flex items-center gap-2 bg-sky-500/10 text-sky-300 px-3 py-1 rounded-full border border-sky-400/20 mb-4">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" /> LIMITED TIME ONLY
              </div>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
                Get select 5G phones for $0
              </h1>
              <p className="mt-4 text-lg text-slate-300 max-w-xl">iPhone • Samsung • Pixel. Switch and save with bill credits and eligible trade‑in. Fast activation with our expert team.</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href={PROMO_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 text-white font-semibold shadow-[0_0_30px_rgba(56,189,248,0.35)] border border-sky-300/20 hover:opacity-90">
                  Find Phone Deals <ArrowRight className="w-4 h-4 ml-2" />
                </a>
                <a href={PROMO_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white/90 hover:text-white hover:border-sky-300/30">
                  Check Eligibility
                </a>
              </div>
            </motion.div>
          </div>
          <motion.div initial={{opacity:0, scale:0.96}} animate={{opacity:1, scale:1}} transition={{duration:0.7, delay:0.1}} className="relative">
            <div className="absolute -inset-6 bg-sky-500/10 blur-3xl rounded-full" />
            <div className="relative rounded-3xl p-1 bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 shadow-2xl">
              <div className="rounded-2xl p-6 bg-gradient-to-br from-slate-900 to-slate-800">
                <div className="grid grid-cols-3 gap-3 text-center">
                  {phoneImages.map((p, i) => (
                    <div key={i} className="rounded-2xl bg-slate-900/60 border border-white/10 p-4">
                      <div className="h-28 mb-3 rounded-xl overflow-hidden bg-slate-800/40">
                        <img src={p.src} alt={p.alt} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                      <div className="text-white font-semibold">{p.name}</div>
                      <div className="text-sky-300 text-sm">$0 with trade‑in</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
