import React from 'react'
import { Link } from 'react-router-dom'
import { ShieldCheck, Headphones, Sparkles } from 'lucide-react'

export function HomeSections() {
  return (
    <div className="max-w-7xl mx-auto px-4 space-y-12">
      <div className="grid lg:grid-cols-3 gap-6">
        {[{
          title: 'Wireless Plans', desc: 'Unlimited 5G, hotspot, and more. Choose the plan that fits your life.', to: '/contact'
        }, {
          title: 'AT&T Fiber', desc: 'Up to 5 GIG symmetrical speeds with ultra‑low latency.', to: '/att-fiber'
        }, {
          title: 'Home Internet', desc: 'No cable required. Fast 5G gateway with easy self‑setup.', to: '/wireless-home-internet'
        }].map((c, i) => (
          <Link key={i} to={c.to} className="group rounded-3xl p-6 bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-white/10 hover:border-sky-400/30 transition">
            <div className="text-white font-semibold text-xl">{c.title}</div>
            <div className="text-slate-300 mt-2">{c.desc}</div>
            <div className="mt-4 inline-flex items-center gap-2 text-sky-300">Learn more →</div>
          </Link>
        ))}
      </div>

      <div className="rounded-3xl bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-white/10 p-8 grid md:grid-cols-3 gap-6">
        {[{
          icon: <ShieldCheck className="w-5 h-5" />, title: 'Trusted', desc: 'High‑volume reseller with rigorous compliance and secure processes.'
        }, {
          icon: <Headphones className="w-5 h-5" />, title: 'Expert Support', desc: '150+ experienced agents ready to help you switch and save.'
        }, {
          icon: <Sparkles className="w-5 h-5" />, title: 'Easy Activation', desc: 'Fast, guided setup with clear steps and transparent pricing.'
        }].map((f, i) => (
          <div key={i} className="rounded-2xl bg-slate-950/40 border border-white/10 p-6">
            <div className="text-sky-300 mb-2">{f.icon}</div>
            <div className="text-white font-semibold">{f.title}</div>
            <div className="text-slate-300 text-sm mt-1">{f.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function FiberContent() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-10">
      <div className="rounded-3xl p-8 bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-white/10">
        <div className="text-3xl font-bold text-white mb-2">AT&T Fiber. Up to 5 GIG.</div>
        <div className="text-slate-300">Symmetrical speeds, unlimited data, and ultra‑low latency for the ultimate home connection.</div>
        <div className="grid sm:grid-cols-3 gap-4 mt-6">
          {['300 Mbps','1 GIG','5 GIG'].map((tier, i) => (
            <div key={i} className="rounded-2xl p-6 bg-slate-950/40 border border-white/10">
              <div className="text-white font-semibold">{tier}</div>
              <div className="text-slate-400 text-sm">Perfect for streaming, gaming, and working from home.</div>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <label className="text-sm text-slate-300">Check your address</label>
          <div className="mt-2 flex gap-2">
            <input placeholder="Street, City, ZIP" className="flex-1 px-4 py-3 rounded-xl bg-slate-950 border border-white/10 outline-none focus:border-sky-400/40 text-white placeholder:text-slate-500" />
            <button className="px-5 py-3 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 border border-sky-300/20">Check</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export function WHIContent() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-8">
      <div className="rounded-3xl p-8 bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-white/10">
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-flex items-center gap-2 bg-sky-500/10 text-sky-300 px-2 py-1 rounded-lg text-xs border border-sky-400/20">No cable, just 5G</span>
        </div>
        <div className="text-3xl font-bold text-white">Wireless Home Internet</div>
        <div className="text-slate-300">Reliable home Wi‑Fi powered by 5G. Simple setup with a glowing gateway device.</div>
        <div className="h-48 rounded-2xl bg-gradient-to-br from-blue-500/20 to-sky-500/20 my-6" />
        <div className="grid sm:grid-cols-3 gap-4">
          {[{
            tier: 'Good', price: '$45/mo'
          }, { tier: 'Better', price: '$55/mo' }, { tier: 'Best', price: '$65/mo' }].map((p, i) => (
            <div key={i} className="rounded-2xl p-6 bg-slate-950/40 border border-white/10">
              <div className="text-white font-semibold">{p.tier}</div>
              <div className="text-slate-300">{p.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function AboutContent() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-10">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="rounded-3xl p-8 bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-white/10">
          <div className="text-3xl font-bold text-white mb-2">Trusted by thousands across Latin America</div>
          <div className="text-slate-300">We are a professional, high‑volume telecom reseller with a proven track record and a large activation footprint spanning the U.S. and LATAM.</div>
        </div>
        <div className="h-56 rounded-3xl bg-gradient-to-br from-blue-500/20 to-sky-500/20" />
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {[{
          title: 'Mission', body: 'Deliver premium connectivity at great value with exceptional customer care.'
        }, { title: 'Vision', body: 'Empower people through reliable wireless and fiber technology.' }, { title: 'History', body: 'Grew from a small shop to a large call center with thousands of activations.' }].map((b, i) => (
          <div key={i} className="rounded-2xl p-6 bg-slate-950/40 border border-white/10">
            <div className="text-white font-semibold">{b.title}</div>
            <div className="text-slate-300 text-sm mt-1">{b.body}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function ContactContent() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 grid lg:grid-cols-2 gap-8">
      <div className="rounded-3xl p-8 bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-white/10">
        <div className="text-2xl font-bold text-white">Get a free quote</div>
        <form className="mt-4 grid grid-cols-1 gap-3">
          <input placeholder="Name" className="px-4 py-3 rounded-xl bg-slate-950 border border-white/10 outline-none focus:border-sky-400/40 text-white placeholder:text-slate-500" />
          <input placeholder="Phone" className="px-4 py-3 rounded-xl bg-slate-950 border border-white/10 outline-none focus:border-sky-400/40 text-white placeholder:text-slate-500" />
          <input placeholder="Email" className="px-4 py-3 rounded-xl bg-slate-950 border border-white/10 outline-none focus:border-sky-400/40 text-white placeholder:text-slate-500" />
          <select className="px-4 py-3 rounded-xl bg-slate-950 border border-white/10 outline-none focus:border-sky-400/40 text-white">
            <option>Wireless</option>
            <option>Fiber</option>
            <option>Home Internet</option>
            <option>Phone Deals</option>
          </select>
          <button type="button" className="mt-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 text-white border border-sky-300/20">Submit</button>
        </form>
      </div>
      <div className="space-y-4">
        <div className="rounded-3xl p-8 bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-white/10">
          <div className="text-white font-semibold">Visit us</div>
          <div className="text-slate-300 text-sm">123 Market St, Miami, FL</div>
          <div className="h-48 rounded-2xl bg-gradient-to-br from-blue-500/20 to-sky-500/20 mt-4" />
        </div>
        <div className="rounded-3xl p-6 bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-white/10 text-sm text-slate-300">
          Hours: Mon–Sat 8am–8pm • Sales: (800) 555‑1234 • Support: (800) 555‑5678
        </div>
      </div>
    </div>
  )
}
