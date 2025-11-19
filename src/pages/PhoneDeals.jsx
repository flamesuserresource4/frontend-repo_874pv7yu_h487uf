import React from 'react'
import Layout from '../components/Layout'
import DealsGrid from '../components/DealsGrid'

export default function PhoneDealsPage() {
  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-4 pt-10 pb-16">
        <div className="text-3xl font-bold text-white">Phone Deals</div>
        <div className="text-slate-300">iPhone • Samsung • Pixel — great offers with eligible trade‑in.</div>
        <div className="mt-6">
          <DealsGrid />
        </div>
      </section>
    </Layout>
  )
}
