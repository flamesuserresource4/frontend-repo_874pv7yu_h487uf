import React from 'react'
import Layout from '../components/Layout'
import { FiberContent } from '../components/Sections'

export default function FiberPage() {
  return (
    <Layout>
      <section className="pt-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="rounded-3xl p-8 bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-white/10 mb-6">
            <div className="text-4xl font-extrabold text-white">AT&T Fiber. Up to 5 GIG.</div>
            <div className="text-slate-300 mt-2">Speed comparisons and benefits designed for heavy streaming and gaming.</div>
          </div>
        </div>
        <FiberContent />
      </section>
    </Layout>
  )
}
