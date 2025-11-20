import React from 'react'
import { ShieldCheck, Lock, Headphones } from 'lucide-react'
import ScrollFade from './ScrollFade'

export default function TrustBadges() {
  const items = [
    { icon: <ShieldCheck className="w-4 h-4" />, label: 'Verified Partner' },
    { icon: <Lock className="w-4 h-4" />, label: 'Secure' },
    { icon: <Headphones className="w-4 h-4" />, label: '24/7 Support' }
  ]
  return (
    <ScrollFade>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {items.map((b, i) => (
            <div key={i} className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 bg-slate-900/50 text-slate-200 shadow-sm">
              <span className="text-sky-300">{b.icon}</span>
              <span className="text-sm">{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </ScrollFade>
  )
}
