import React from 'react'
import Layout from '../components/Layout'
import ScrollFade from '../components/ScrollFade'

const promoLink = 'https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.attspoc.com%2F%3Fkey%3DNSo4HmVPvrwjAPwK&data=05%7C01%7C%7C14fe78f3fb174909b41208db5b000e61%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638203828039322138%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=wIKrvZsUygyL3FSbe9iXw2xYxyr0y69xhLIE7Jpg3p0%3D&reserved=0'

export default function SpecialOffersPage() {
  const promos = [
    { title: 'Up to $800 off with eligible trade‑in', fine: 'Req’s 36-mo. agmt. Credits start w/in 3 bills. If svc cancelled, credits stop & device balance due.', link: promoLink },
    { title: 'Fiber: Get up to $200 in reward cards', fine: 'Limited-time. Redemption req’d. $100 for 300/500Mbps; $200 for 1Gbps+.', link: promoLink },
  ]
  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-4 pt-10 pb-16 space-y-8">
        <ScrollFade>
          <div className="rounded-3xl p-8 bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-white/10">
            <div className="text-4xl font-extrabold text-white">Special Offers</div>
            <div className="text-slate-300 mt-2">Limited-time promotions from our authorized partner channel.</div>
          </div>
        </ScrollFade>
        <div className="grid md:grid-cols-2 gap-6">
          {promos.map((p, i) => (
            <ScrollFade key={i} delay={i*80}>
              <a href={p.link} target="_blank" rel="noreferrer" className="group rounded-3xl p-6 bg-gradient-to-br from-slate-900/70 to-slate-900/30 border border-white/10 hover:border-sky-400/30">
                <div className="text-white font-semibold text-lg group-hover:text-sky-200">{p.title}</div>
                <div className="text-slate-400 text-xs mt-2 leading-relaxed">{p.fine}</div>
              </a>
            </ScrollFade>
          ))}
        </div>
      </section>
    </Layout>
  )
}
