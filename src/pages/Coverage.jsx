import React from 'react'
import Layout from '../components/Layout'
import ScrollFade from '../components/ScrollFade'

export default function CoveragePage() {
  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-4 pt-10 pb-16 space-y-8">
        <ScrollFade>
          <div className="rounded-3xl p-8 bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-white/10">
            <div className="text-4xl font-extrabold text-white">Coverage Checker</div>
            <div className="text-slate-300 mt-2">See if service is available at your address. Coverage varies by location.</div>
            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <input placeholder="Street address" className="flex-1 px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white placeholder:text-slate-500"/>
              <input placeholder="City" className="flex-1 px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white placeholder:text-slate-500"/>
              <input placeholder="ZIP" className="w-40 px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white placeholder:text-slate-500"/>
              <button className="px-5 py-3 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 text-white border border-sky-300/20">Check</button>
            </div>
          </div>
        </ScrollFade>
        <ScrollFade>
          <div className="rounded-3xl p-6 bg-gradient-to-br from-slate-900/70 to-slate-900/30 border border-white/10">
            <div className="text-white font-semibold mb-3">Coverage Map</div>
            <div className="h-72 rounded-2xl bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.15),transparent_60%)] border border-white/10 grid place-items-center text-slate-400">
              Generic coverage map visualization
            </div>
          </div>
        </ScrollFade>
      </section>
    </Layout>
  )
}
