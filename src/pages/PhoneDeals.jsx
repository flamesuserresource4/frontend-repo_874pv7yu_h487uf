import React from 'react'
import Layout from '../components/Layout'

const promoLink = 'https://www.attspoc.com/e/(S(3urb2pri3azha2rq5la0c2cv))/oe/landing.aspx'

export default function PhoneDealsPage() {
  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-4 pt-10 pb-16 space-y-6">
        <div>
          <div className="text-3xl font-bold text-white">Find Phone Deals</div>
          <div className="text-slate-300">Explore the latest promotions on iPhone, Samsung, and Pixel devices.</div>
        </div>
        <a href={promoLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 text-white border border-sky-300/20">
          Continue to Promotions
        </a>
      </section>
    </Layout>
  )
}
