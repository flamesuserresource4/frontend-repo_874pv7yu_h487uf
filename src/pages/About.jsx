import React from 'react'
import Layout from '../components/Layout'
import { AboutContent } from '../components/Sections'

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
      </section>
    </Layout>
  )
}
