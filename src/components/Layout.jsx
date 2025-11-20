import React, { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, PhoneCall, Wifi, Home as HomeIcon, Info, UploadCloud, LifeBuoy, Sparkles } from 'lucide-react'
import ChatWidget from './ChatWidget'
import CallNowMobile from './CallNowMobile'

const PROMO_URL = 'https://www.attspoc.com/e/(S(3urb2pri3azha2rq5la0c2cv))/oe/landing.aspx'

const navItems = [
  { type: 'internal', to: '/', label: 'Home', icon: <HomeIcon className="w-4 h-4" /> },
  { type: 'internal', to: '/att-fiber', label: 'AT&T Fiber', icon: <UploadCloud className="w-4 h-4" /> },
  { type: 'external', href: PROMO_URL, label: 'Promotions', icon: <Sparkles className="w-4 h-4" /> },
  { type: 'internal', to: '/wireless-home-internet', label: 'Home Internet', icon: <Wifi className="w-4 h-4" /> },
  { type: 'internal', to: '/support', label: 'Support', icon: <LifeBuoy className="w-4 h-4" /> },
  { type: 'internal', to: '/about', label: 'About', icon: <Info className="w-4 h-4" /> },
]

function PromoBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 text-white text-sm py-2 px-4 shadow-inner shadow-blue-800/40">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <span className="tracking-wide">Winter Sale: Up to $800 bill credits on select 5G phones with trade‑in.</span>
        <a href={PROMO_URL} target="_blank" rel="noreferrer" className="hidden sm:inline-flex items-center gap-2 font-semibold hover:opacity-90 transition">
          <Sparkles className="w-4 h-4" /> See promotions
        </a>
      </div>
    </div>
  )
}

export default function Layout({ children }) {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/70 bg-slate-950/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="h-16 flex items-center justify-between">
            <button aria-label="Open menu" onClick={() => setOpen(true)} className="p-2 rounded-lg bg-slate-800/60 border border-white/10 hover:bg-slate-800 transition md:hidden">
              <Menu className="w-5 h-5 text-sky-400" />
            </button>
            <Link to="/" className="ml-auto md:ml-0 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-500 via-blue-600 to-sky-500 shadow-[0_0_25px_rgba(56,189,248,0.4)]" />
              <div className="text-right">
                <div className="text-sm tracking-widest text-sky-300">HomeTech Services</div>
                <div className="text-[10px] text-slate-300/80">Authorized AT&T Retailer</div>
              </div>
            </Link>
            <nav className="hidden md:flex items-center gap-1 ml-6">
              {navItems.map((item, idx) => (
                item.type === 'internal' ? (
                  <NavLink key={idx} to={item.to} className={({ isActive }) => `inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm transition border ${isActive ? 'bg-slate-800/80 border-sky-500/30 text-white' : 'bg-slate-900/40 border-white/10 text-slate-300 hover:text-white hover:border-sky-500/30'}`}>
                    {item.icon}
                    {item.label}
                  </NavLink>
                ) : (
                  <a key={idx} href={item.href} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm transition border bg-slate-900/40 border-white/10 text-slate-300 hover:text-white hover:border-sky-500/30`}>
                    {item.icon}
                    {item.label}
                  </a>
                )
              ))}
            </nav>
            <a href="tel:+18005551234" className="hidden md:inline-flex ml-auto items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 hover:opacity-90 transition shadow-[0_0_20px_rgba(56,189,248,0.35)] border border-sky-300/20">
              <PhoneCall className="w-4 h-4" /> Call Sales
            </a>
          </div>
        </div>
        {/* Promo banner directly under header */}
        <PromoBanner />
      </header>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-80 max-w-[85%] bg-slate-950 border-r border-white/10 p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-500 via-blue-600 to-sky-500" />
                <div>
                  <div className="text-sm tracking-widest text-sky-300">HomeTech Services</div>
                  <div className="text-[10px] text-slate-300/80">Authorized AT&T Retailer</div>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="p-2 rounded-lg bg-slate-800/60 border border-white/10">
                <X className="w-5 h-5 text-sky-400" />
              </button>
            </div>
            <div className="flex flex-col gap-2">
              {navItems.map((item, idx) => (
                item.type === 'internal' ? (
                  <NavLink key={idx} to={item.to} onClick={() => setOpen(false)} className={({ isActive }) => `flex items-center gap-3 px-3 py-3 rounded-xl border ${isActive || location.pathname === item.to ? 'bg-slate-800/80 border-sky-500/30 text-white' : 'bg-slate-900/40 border-white/10 text-slate-300'}`}>
                    {item.icon}
                    <span>{item.label}</span>
                  </NavLink>
                ) : (
                  <a key={idx} href={item.href} target="_blank" rel="noreferrer" onClick={() => setOpen(false)} className={`flex items-center gap-3 px-3 py-3 rounded-xl border bg-slate-900/40 border-white/10 text-slate-300`}>
                    {item.icon}
                    <span>{item.label}</span>
                  </a>
                )
              ))}
            </div>
            <a href="tel:+18005551234" className="mt-6 inline-flex items-center gap-2 px-4 py-3 w-full justify-center rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 border border-sky-300/20">
              <PhoneCall className="w-4 h-4" /> Call Sales
            </a>
          </div>
        </div>
      )}

      {/* Page body */}
      <main className="relative">
        {/* subtle glow background */}
        <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
          <div className="absolute -top-24 right-1/4 w-96 h-96 bg-sky-500/10 blur-3xl rounded-full" />
          <div className="absolute top-1/2 -left-10 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full" />
        </div>
        {children}
      </main>

      {/* Footer */}
      <footer className="mt-16 border-top border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm text-slate-300">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-500 via-blue-600 to-sky-500" />
              <div>
                <div className="text-sky-300">HomeTech Services</div>
                <div className="text-[10px] text-slate-400">Authorized AT&T Retailer</div>
              </div>
            </div>
            <p className="text-slate-400/90">Professional, high‑volume telecom reseller serving the U.S. and Latin America.</p>
          </div>
          <div>
            <div className="text-slate-200 font-semibold mb-3">Services</div>
            <ul className="space-y-2">
              <li><Link to="/att-fiber" className="hover:text-white">AT&T Fiber</Link></li>
              <li><Link to="/wireless-home-internet" className="hover:text-white">Wireless Home Internet</Link></li>
              <li><a href={PROMO_URL} target="_blank" rel="noreferrer" className="hover:text-white">Promotions</a></li>
            </ul>
          </div>
          <div>
            <div className="text-slate-200 font-semibold mb-3">Support</div>
            <ul className="space-y-2">
              <li><Link to="/support" className="hover:text-white">FAQs</Link></li>
              <li><Link to="/coverage" className="hover:text-white">Coverage Checker</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-slate-200 font-semibold mb-3">Company</div>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-[11px] text-slate-500 px-4 pb-8 space-y-2">
          <p>Promotional offers require eligible trade‑in, port‑in, and installment agreements. Taxes, fees, and surcharges extra. Credit approval required. Offers subject to change.</p>
          <p>Images are illustrative. We are an independent authorized retailer. This site is not affiliated with AT&T corporate.</p>
          <p>© {new Date().getFullYear()} HomeTech Services</p>
        </div>
      </footer>

      {/* Floating widgets */}
      <ChatWidget />
      <CallNowMobile />
    </div>
  )
}
