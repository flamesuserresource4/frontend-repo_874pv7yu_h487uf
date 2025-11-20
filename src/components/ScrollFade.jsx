import React, { useEffect, useRef, useState } from 'react'

export default function ScrollFade({ children, delay = 0, y = 16 }) {
  const ref = useRef(null)
  const [show, setShow] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ob = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShow(true)
        ob.disconnect()
      }
    }, { threshold: 0.15 })
    ob.observe(el)
    return () => ob.disconnect()
  }, [])
  return (
    <div ref={ref} style={{
      opacity: show ? 1 : 0,
      transform: `translateY(${show ? 0 : y}px)`,
      transition: `opacity 600ms ease ${delay}ms, transform 600ms ease ${delay}ms`
    }}>
      {children}
    </div>
  )
}
