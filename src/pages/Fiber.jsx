import React from 'react'
import Layout from '../components/Layout'
import { FiberContent } from '../components/Sections'
import ScrollFade from '../components/ScrollFade'

export default function FiberPage() {
  const speeds = [
    { tier: 'Internet 300', down: '300 Mbps', up: '300 Mbps', bestFor: 'HD streaming, remote work' },
    { tier: 'Internet 1000', down: '1 GIG', up: '1 GIG', bestFor: '4K streaming, gaming, multi-user' },
    { tier: 'Internet 5000', down: '5 GIG', up: '5 GIG', bestFor: 'Power users, creators, pro workflows' },
  ]
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
        <div className="max-w-7xl mx-auto px-4 py-12">
          <ScrollFade>
            <div className="rounded-3xl p-6 bg-slate-900/60 border border-white/10">
              <div className="text-white font-semibold mb-4">Speed comparison</div>
              <div className="overflow-x-auto">
                <table className="min-w-[720px] w-full text-sm">
                  <thead className="text-slate-300">
                    <tr className="text-left">
                      <th className="p-3 font-medium">Plan</th>
                      <th className="p-3 font-medium">Download</th>
                      <th className="p-3 font-medium">Upload</th>
                      <th className="p-3 font-medium">Best for</th>
                    </tr>
                  </thead>
                  <tbody>
                    {speeds.map((s, i) => (
                      <tr key={i} className="border-t border-white/10">
                        <td className="p-3 text-white">{s.tier}</td>
                        <td className="p-3 text-sky-300">{s.down}</td>
                        <td className="p-3 text-sky-300">{s.up}</td>
                        <td className="p-3 text-slate-300">{s.bestFor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollFade>
        </div>
      </section>
    </Layout>
  )
}
