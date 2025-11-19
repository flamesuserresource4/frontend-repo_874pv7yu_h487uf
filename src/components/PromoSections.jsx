import React from 'react'
import { Link } from 'react-router-dom'
import { BadgePercent, Wifi, UploadCloud, Smartphone } from 'lucide-react'

const sections = [
  {
    title: 'Wireless',
    desc: 'Nationwide 5G on America’s most reliable network. Great coverage and perks.',
    to: '/contact',
    icon: <Smartphone className="w-5 h-5" />,
  },
  {
    title: 'Fiber',
    desc: 'Blazing‑fast internet up to 5 GIG. Stream, game, and work without limits.',
    to: '/att-fiber',
    icon: <UploadCloud className="w-5 h-5" />,
  },
  {
    title: 'Home Internet',
    desc: 'No cable, just 5G. Simple setup with a powerful gateway and Wi‑Fi 6.',
    to: '/wireless-home-internet',
    icon: <Wifi className="w-5 h-5" />,
  },
  {
    title: 'Phone Deals',
    desc: 'Save big on iPhone, Samsung, and Pixel with eligible trade‑in.',
    to: '/phone-deals',
    icon: <BadgePercent className="w-5 h-5" />,
  },
]

export default function PromoSections() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      {sections.map((s) => (
        <Link key={s.title} to={s.to} className="group relative rounded-3xl p-5 bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-white/10 hover:border-sky-400/30 transition overflow-hidden">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(ellipse_at_top_left,rgba(2,132,199,0.2),transparent_60%)]" />
          <div className="flex items-center justify-between mb-3">
            <div className="inline-flex items-center gap-2 bg-sky-500/10 text-sky-300 px-2 py-1 rounded-lg text-xs border border-sky-400/20">LIMITED TIME ONLY</div>
            <div className="text-sky-300">{s.icon}</div>
          </div>
          <div className="text-white font-semibold text-lg">{s.title}</div>
          <div className="text-slate-300 text-sm mt-1">{s.desc}</div>
        </Link>
      ))}
    </section>
  )
}
