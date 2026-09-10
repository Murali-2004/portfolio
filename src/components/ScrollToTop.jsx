import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Jump to the top of the page on every route change so each page opens at
 * its hero — instantly, ignoring the CSS `scroll-behavior: smooth` rule.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    const root = document.documentElement
    const prev = root.style.scrollBehavior
    root.style.scrollBehavior = 'auto'
    window.scrollTo(0, 0)
    // restore after the browser has applied the jump
    requestAnimationFrame(() => {
      root.style.scrollBehavior = prev
    })
  }, [pathname])

  return null
}
