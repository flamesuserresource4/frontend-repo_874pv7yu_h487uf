import React, { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const items = [
  { name: 'María G.', location: 'Miami → Bogotá', text: 'Activation was fast and simple. Saved a lot on our family plan and coverage has been great.', rating: 5 },
  { name: 'Luis R.', location: 'Houston, TX', text: 'Professional experience from start to finish. Ported my numbers and set up fiber the same week.', rating: 5 },
  { name: 'Andrea P.', location: 'CDMX', text: 'Excellent support in Spanish and English. Highly recommend for business lines.', rating: 5 },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), 5000)
    return () => clearInterval(id)
  }, [])

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length)
  const next = () => setIndex((i) => (i + 1) % items.length)

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="rounded-3xl p-6 bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-white/10 relative overflow-hidden">
        <div className="flex items-center justify-between mb-4">
          <div className="text-white font-semibold">What customers say</div>
          <div className="flex gap-2">
            <button onClick={prev} className="p-2 rounded-lg bg-slate-900/70 border border-white/10 hover:bg-slate-800"><ChevronLeft className="w-4 h-4"/></button>
            <button onClick={next} className="p-2 rounded-lg bg-slate-900/70 border border-white/10 hover:bg-slate-800"><ChevronRight className="w-4 h-4"/></button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="text-slate-300 text-lg leading-relaxed">
            “{items[index].text}”
            <div className="mt-4 text-sm text-slate-400">{items[index].name} • {items[index].location}</div>
          </div>
          <div className="rounded-2xl p-6 bg-slate-950/50 border border-white/10">
            <div className="flex items-center gap-1 text-amber-300 mb-2">
              {new Array(items[index].rating).fill(0).map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-300" />)}
            </div>
            <div className="text-white font-semibold mb-1">Premium service, real savings</div>
            <div className="text-slate-400 text-sm">Trusted by families and businesses across the U.S. and Latin America.</div>
          </div>
        </div>
      </div>
    </section>
  )
}
