import React, { useEffect, useRef } from 'react'

// Subtle animated particle beams for premium telecom vibe
export default function BackgroundFX() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let w, h, raf

    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const resize = () => {
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.scale(dpr, dpr)
    }

    const beams = new Array(18).fill(0).map((_, i) => ({
      x: Math.random() * 1,
      y: Math.random(),
      speed: 0.08 + Math.random() * 0.12,
      width: 120 + Math.random() * 180,
      hue: 195 + Math.random() * 20,
      alpha: 0.05 + Math.random() * 0.08,
      offset: Math.random() * 1000
    }))

    const draw = (t = 0) => {
      ctx.clearRect(0, 0, w, h)
      beams.forEach(b => {
        const x = (b.x * w + (Math.sin((t + b.offset) * 0.0003) * w) * 0.15)
        const grad = ctx.createLinearGradient(x - b.width, 0, x + b.width, h)
        grad.addColorStop(0, `hsla(${b.hue}, 100%, 70%, 0)`) 
        grad.addColorStop(0.5, `hsla(${b.hue}, 100%, 60%, ${b.alpha})`)
        grad.addColorStop(1, `hsla(${b.hue}, 100%, 70%, 0)`) 
        ctx.fillStyle = grad
        ctx.fillRect(x - b.width, 0, b.width * 2, h)
      })
      raf = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <canvas ref={ref} className="w-full h-full opacity-40 mix-blend-screen" />
    </div>
  )
}
