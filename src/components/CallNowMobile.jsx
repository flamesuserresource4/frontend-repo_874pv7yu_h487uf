import React from 'react'
import { Phone } from 'lucide-react'

export default function CallNowMobile() {
  return (
    <a href="tel:+18005551234" className="fixed left-4 bottom-4 z-50 md:hidden inline-flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-[0_0_24px_rgba(16,185,129,0.35)] border border-white/10">
      <Phone className="w-4 h-4"/> Call Now
    </a>
  )
}
