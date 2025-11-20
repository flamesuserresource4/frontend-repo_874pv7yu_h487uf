import React from 'react'
import Layout from '../components/Layout'
import ScrollFade from '../components/ScrollFade'

export default function TradeInPage() {
  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-4 pt-10 pb-16 space-y-8">
        <ScrollFade>
          <div className="rounded-3xl p-8 bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-white/10">
            <div className="text-4xl font-extrabold text-white">Trade-In Program</div>
            <div className="text-slate-300 mt-2">Turn your old device into instant savings on today’s top phones.</div>
          </div>
        </ScrollFade>
        <ScrollFade>
          <div className="rounded-2xl p-6 bg-slate-900/60 border border-white/10">
            <div className="text-white font-semibold mb-2">How it works</div>
            <ol className="list-decimal pl-5 text-slate-300 text-sm space-y-1">
              <li>Get your estimated value.</li>
              <li>Ship or drop off your old device.</li>
              <li>Receive bill credits over 36 months.</li>
            </ol>
          </div>
        </ScrollFade>
      </section>
    </Layout>
  )
}
