import React, { useState } from 'react'
import { BadgePercent, Info } from 'lucide-react'

const phones = [
  { brand: 'Apple', model: 'iPhone 15', price: 0, details: 'With eligible trade‑in and bill credits. 36‑mo. agreement required.' },
  { brand: 'Samsung', model: 'Galaxy S24', price: 0, details: 'With eligible trade‑in and bill credits. 36‑mo. agreement required.' },
  { brand: 'Google', model: 'Pixel 8', price: 0, details: 'With eligible trade‑in and bill credits. 36‑mo. agreement required.' },
  { brand: 'Apple', model: 'iPhone 14', price: 5, details: 'With eligible trade‑in and bill credits.' },
  { brand: 'Samsung', model: 'Galaxy A54', price: 1, details: 'With eligible trade‑in and bill credits.' },
  { brand: 'Google', model: 'Pixel 7a', price: 2, details: 'With eligible trade‑in and bill credits.' },
]

export default function DealsGrid() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(null)

  const openModal = (item) => {
    setSelected(item)
    setOpen(true)
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {phones.map((p, i) => (
        <button key={i} onClick={() => openModal(p)} className="group text-left rounded-3xl bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-white/10 p-4 hover:border-sky-400/30 transition">
          <div className="flex items-center justify-between mb-2">
            <div className="inline-flex items-center gap-2 bg-sky-500/10 text-sky-300 px-2 py-1 rounded-lg text-xs border border-sky-400/20">LIMITED TIME ONLY</div>
            <BadgePercent className="w-4 h-4 text-sky-300" />
          </div>
          <div className="h-36 rounded-xl bg-gradient-to-br from-blue-500/20 to-sky-500/20 mb-3" />
          <div className="font-semibold text-white">{p.brand} {p.model}</div>
          <div className="text-slate-300 text-sm">As low as ${p.price}/mo with trade‑in</div>
          <div className="mt-2 inline-flex items-center gap-1 text-sky-300 text-sm">Full details <Info className="w-4 h-4" /></div>
        </button>
      ))}

      {open && selected && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
          <div className="absolute inset-0 grid place-items-center p-4">
            <div className="w-full max-w-lg rounded-2xl bg-slate-950 border border-white/10 p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-white font-semibold text-lg">{selected.brand} {selected.model}</div>
                  <div className="text-slate-300 text-sm">${selected.price}/mo with eligible trade‑in</div>
                </div>
                <button onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg bg-slate-800 border border-white/10">Close</button>
              </div>
              <div className="h-48 rounded-xl bg-gradient-to-br from-blue-500/20 to-sky-500/20 my-4" />
              <p className="text-slate-300 text-sm leading-relaxed">{selected.details} Taxes, fees, and additional terms apply. Credit approval required. Offers subject to change. Generic imagery shown; no third‑party logos used.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
