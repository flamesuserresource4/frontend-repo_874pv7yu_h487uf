import React, { useState } from 'react'
import Layout from '../components/Layout'
import { ContactContent } from '../components/Sections'
import ScrollFade from '../components/ScrollFade'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <Layout>
      <section className="pt-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="rounded-3xl p-8 bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-white/10 mb-6">
            <div className="text-4xl font-extrabold text-white">Contact</div>
            <div className="text-slate-300 mt-2">Talk to our experts. We’ll help you find the best offer for your needs.</div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-12 grid lg:grid-cols-2 gap-8">
          <div className="rounded-3xl p-8 bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-white/10">
            <div className="text-2xl font-bold text-white">Get a free quote</div>
            {submitted ? (
              <div className="mt-4 rounded-xl p-4 bg-emerald-600/20 border border-emerald-400/30 text-emerald-200">
                Thank you! A specialist will reach out shortly.
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-4 grid grid-cols-1 gap-3">
                <input required placeholder="Name" className="px-4 py-3 rounded-xl bg-slate-950 border border-white/10 outline-none focus:border-sky-400/40 text-white placeholder:text-slate-500" />
                <input required placeholder="Phone" className="px-4 py-3 rounded-xl bg-slate-950 border border-white/10 outline-none focus:border-sky-400/40 text-white placeholder:text-slate-500" />
                <input required type="email" placeholder="Email" className="px-4 py-3 rounded-xl bg-slate-950 border border-white/10 outline-none focus:border-sky-400/40 text-white placeholder:text-slate-500" />
                <select className="px-4 py-3 rounded-xl bg-slate-950 border border-white/10 outline-none focus:border-sky-400/40 text-white">
                  <option>Wireless</option>
                  <option>Fiber</option>
                  <option>Home Internet</option>
                  <option>Phone Deals</option>
                </select>
                <button type="submit" className="mt-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 text-white border border-sky-300/20">Submit</button>
              </form>
            )}
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
            <div className="rounded-3xl p-6 bg-slate-900/60 border border-white/10">
              <div className="text-white font-semibold mb-2">FAQs</div>
              <ul className="text-slate-300 text-sm space-y-2 list-disc pl-5">
                <li>How do bill credits work? Credits apply over 36 months with eligible trade‑in.</li>
                <li>Can I keep my number? Yes, we support number transfer for most carriers.</li>
                <li>Is there a contract? Devices require installment agreements; service is month‑to‑month.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
