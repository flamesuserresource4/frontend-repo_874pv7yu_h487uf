import React from 'react'
import Layout from '../components/Layout'
import ScrollFade from '../components/ScrollFade'

export default function SupportPage() {
  const faqs = [
    { q: 'How do bill credits work?', a: 'Credits are applied over 36 months with eligible trade-in and installment plan. If you cancel, remaining credits stop.' },
    { q: 'Can I keep my number?', a: 'Yes, most numbers can be ported. We handle the transfer during activation.' },
    { q: 'Is a credit check required?', a: 'Yes, standard credit approval applies for device financing and service.' },
  ]
  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-4 pt-10 pb-16 space-y-10">
        <ScrollFade>
          <div className="rounded-3xl p-8 bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-white/10">
            <div className="text-4xl font-extrabold text-white">Support & FAQs</div>
            <div className="text-slate-300 mt-2">Answers to common questions about plans, devices, and installation.</div>
          </div>
        </ScrollFade>
        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((f, i) => (
            <ScrollFade key={i} delay={i*80}>
              <div className="rounded-2xl p-6 bg-slate-900/50 border border-white/10">
                <div className="text-white font-semibold">{f.q}</div>
                <div className="text-slate-300 mt-1 text-sm">{f.a}</div>
              </div>
            </ScrollFade>
          ))}
        </div>
      </section>
    </Layout>
  )
}
