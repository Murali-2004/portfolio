import { useEffect, useRef, useState } from 'react'

/**
 * Scroll-reveal wrapper. Uses IntersectionObserver with a guaranteed
 * fallback: the content is always made visible within 1s even if the
 * observer never fires (fast synthetic scroll, older browsers, etc.).
 * Honours prefers-reduced-motion.
 */
export default function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setShown(true)
      return
    }

    let done = false
    const reveal = () => {
      if (done) return
      done = true
      setShown(true)
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) reveal()
      },
      { threshold: 0.08, rootMargin: '0px 0px -5% 0px' },
    )
    io.observe(el)

    // Fallback so nothing can get stuck invisible.
    const t = setTimeout(reveal, 1000)

    return () => {
      io.disconnect()
      clearTimeout(t)
    }
  }, [])

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? 'none' : 'translateY(24px)',
        transition: `opacity .6s cubic-bezier(.22,1,.36,1) ${delay * 0.08}s, transform .6s cubic-bezier(.22,1,.36,1) ${delay * 0.08}s`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </Tag>
  )
}
