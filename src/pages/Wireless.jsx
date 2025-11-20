import React from 'react'
import Layout from '../components/Layout'
import ScrollFade from '../components/ScrollFade'

export default function WirelessPage() {
  const plans = [
    { name: 'Unlimited Starter', price: '$60/mo', perks: ['Unlimited talk, text & data', '5G access', 'Standard hotspot'], popular: false },
    { name: 'Unlimited Extra', price: '$75/mo', perks: ['50GB premium data', '15GB hotspot', 'Advanced security'], popular: true },
    { name: 'Unlimited Premium', price: '$85/mo', perks: ['Unlimited premium data', '50GB hotspot', '4K streaming'], popular: false },
  ]

  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-4 pt-10 pb-16 space-y-10">
        <ScrollFade>
          <div className="rounded-3xl p-8 bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-white/10">
            <div className="text-4xl font-extrabold text-white">Wireless Plans</div>
            <div className="text-slate-300 mt-2">Powerful 5G coverage with plans built for streaming, travel, and hotspot use.</div>
          </div>
        </ScrollFade>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <ScrollFade key={i} delay={100*i}>
              <div className={`relative rounded-3xl p-6 border ${p.popular ? 'bg-slate-900/70 border-sky-400/30 shadow-[0_0_40px_rgba(56,189,248,0.25)]' : 'bg-slate-900/40 border-white/10'}`}>
                {p.popular && (
                  <span className="absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-amber-400 to-pink-400 text-slate-900 shadow">Most Popular</span>
                )}
                <div className="text-white font-semibold text-lg">{p.name}</div>
                <div className="text-sky-300 text-2xl font-extrabold mt-1">{p.price}</div>
                <ul className="mt-4 space-y-2 text-slate-300 text-sm">
                  {p.perks.map((perk, idx) => (
                    <li key={idx} className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-sky-400"></span> {perk}</li>
                  ))}
                </ul>
                <a href="/contact" className="mt-5 inline-flex items-center justify-center w-full px-4 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 text-white border border-sky-300/20">Choose plan</a>
              </div>
            </ScrollFade>
          ))}
        </div>

        <ScrollFade>
          <div className="rounded-3xl p-6 bg-gradient-to-br from-slate-900/70 to-slate-900/30 border border-white/10">
            <div className="text-white font-semibold mb-2">How it works</div>
            <div className="grid sm:grid-cols-3 gap-4 text-sm text-slate-300">
              {['Choose Plan','Check Eligibility','Activate'].map((step, i) => (
                <div key={i} className="rounded-2xl p-5 bg-slate-950/40 border border-white/10">{i+1}. {step}</div>
              ))}
            </div>
          </div>
        </ScrollFade>
      </section>
    </Layout>
  )
}
