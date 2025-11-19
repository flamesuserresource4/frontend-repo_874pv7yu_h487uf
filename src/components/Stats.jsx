import React, { useEffect, useRef, useState } from 'react'

function useInView(ref, rootMargin = '0px') {
  const [isIntersecting, setIntersecting] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { root: null, rootMargin, threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.unobserve(el)
  }, [ref, rootMargin])
  return isIntersecting
}

function AnimatedNumber({ value, duration = 1200, prefix = '', suffix = '' }) {
  const [display, setDisplay] = useState(0)
  const start = useRef(0)
  const startTime = useRef(null)
  const raf = useRef(null)

  useEffect(() => {
    const step = (ts) => {
      if (!startTime.current) startTime.current = ts
      const progress = Math.min((ts - startTime.current) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.floor(start.current + eased * (value - start.current))
      setDisplay(current)
      if (progress < 1) raf.current = requestAnimationFrame(step)
    }
    raf.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf.current)
  }, [value, duration])

  return (
    <span>
      {prefix}
      {display.toLocaleString()}
      {suffix}
    </span>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, '-100px')

  return (
    <section ref={ref} className="max-w-7xl mx-auto px-4 py-16">
      <div className="rounded-3xl bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-white/10 p-8">
        <div className="grid sm:grid-cols-3 gap-8 text-center">
          {[{
            label: 'customers activated', value: 10000, prefix: '', suffix: '+'
          }, {
            label: 'call center staff', value: 150, suffix: '+'
          }, {
            label: 'in Latin America activations', value: 1, prefix: '#'
          }].map((item, i) => (
            <div key={i} className="rounded-2xl bg-slate-950/40 border border-white/10 p-6">
              <div className="text-4xl font-extrabold text-white drop-shadow-[0_0_20px_rgba(56,189,248,0.15)]">
                {inView ? (
                  <AnimatedNumber value={item.value} prefix={item.prefix} suffix={item.suffix} duration={1200 + i * 300} />
                ) : (
                  <span>0</span>
                )}
              </div>
              <div className="text-slate-300 mt-2 text-sm uppercase tracking-wide">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
