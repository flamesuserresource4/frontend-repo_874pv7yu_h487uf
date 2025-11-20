import React from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, Wifi, UploadCloud, Smartphone } from 'lucide-react'

const PROMO_URL = 'https://www.attspoc.com/e/(S(3urb2pri3azha2rq5la0c2cv))/oe/landing.aspx'

const sections = [
  {
    title: 'Wireless',
    desc: 'Nationwide 5G on America’s most reliable network. Great coverage and perks.',
    to: '/support',
    icon: <Smartphone className="w-5 h-5" />,
    type: 'internal'
  },
  {
    title: 'Fiber',
    desc: 'Blazing‑fast internet up to 5 GIG. Stream, game, and work without limits.',
    to: '/att-fiber',
    icon: <UploadCloud className="w-5 h-5" />,
    type: 'internal'
  },
  {
    title: 'Home Internet',
    desc: 'No cable, just 5G. Simple setup with a powerful gateway and Wi‑Fi 6.',
    to: '/wireless-home-internet',
    icon: <Wifi className="w-5 h-5" />,
    type: 'internal'
  },
  {
    title: 'Find Phone Deals',
    desc: 'Explore iPhone, Samsung, and Pixel offers and eligibility.',
    href: PROMO_URL,
    icon: <Sparkles className="w-5 h-5" />,
    type: 'external'
  },
]

export default function PromoSections() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      {sections.map((s) => (
        s.type === 'internal' ? (
          <Link key={s.title} to={s.to} className="group relative rounded-3xl p-5 bg-gradient-to-br from-white to-slate-50 border border-slate-200 hover:border-sky-400/30 transition overflow-hidden dark:from-slate-900/80 dark:to-slate-900/40 dark:border-white/10">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(ellipse_at_top_left,rgba(2,132,199,0.12),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top_left,rgba(2,132,199,0.2),transparent_60%)]" />
            <div className="flex items-center justify-between mb-3">
              <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-2 py-1 rounded-lg text-xs border border-sky-200 dark:bg-sky-500/10 dark:text-sky-300 dark:border-sky-400/20">LIMITED TIME ONLY</div>
              <div className="text-sky-700 dark:text-sky-300">{s.icon}</div>
            </div>
            <div className="text-slate-900 font-semibold text-lg dark:text-white">{s.title}</div>
            <div className="text-slate-600 text-sm mt-1 dark:text-slate-300">{s.desc}</div>
          </Link>
        ) : (
          <a key={s.title} href={s.href} target="_blank" rel="noreferrer" className="group relative rounded-3xl p-5 bg-gradient-to-br from-white to-slate-50 border border-slate-200 hover:border-sky-400/30 transition overflow-hidden dark:from-slate-900/80 dark:to-slate-900/40 dark:border-white/10">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(ellipse_at_top_left,rgba(2,132,199,0.12),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top_left,rgba(2,132,199,0.2),transparent_60%)]" />
            <div className="flex items-center justify-between mb-3">
              <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-2 py-1 rounded-lg text-xs border border-sky-200 dark:bg-sky-500/10 dark:text-sky-300 dark:border-sky-400/20">LIMITED TIME ONLY</div>
              <div className="text-sky-700 dark:text-sky-300">{s.icon}</div>
            </div>
            <div className="text-slate-900 font-semibold text-lg dark:text-white">{s.title}</div>
            <div className="text-slate-600 text-sm mt-1 dark:text-slate-300">{s.desc}</div>
          </a>
        )
      ))}
    </section>
  )
}
