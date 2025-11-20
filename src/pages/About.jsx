import React from 'react'
import Layout from '../components/Layout'
import { AboutContent } from '../components/Sections'
import ScrollFade from '../components/ScrollFade'

export default function AboutPage() {
  return (
    <Layout>
      <section className="pt-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="rounded-3xl p-8 bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-white/10 mb-6">
            <div className="text-4xl font-extrabold text-white">About Us</div>
            <div className="text-slate-300 mt-2">High‑volume telecom reseller with thousands of activations across LATAM and the U.S.</div>
          </div>
        </div>
        <AboutContent />
        <div className="max-w-7xl mx-auto px-4 py-12">
          <ScrollFade>
            <div className="rounded-3xl p-6 bg-slate-900/60 border border-white/10 text-center">
              <div className="text-2xl font-extrabold text-white mb-2">Trusted by thousands across Latin America</div>
              <div className="text-slate-300">High‑volume activation partner with 150+ specialists. Supporting customers in the U.S., Mexico, Colombia, Venezuela, and Latin markets.</div>
            </div>
          </ScrollFade>
        </div>
      </section>
    </Layout>
  )
}
