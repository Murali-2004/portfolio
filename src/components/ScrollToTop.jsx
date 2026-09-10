import { useEffect, useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Force the viewport to the top of the page on every route change, so each
 * page opens at its own hero. Runs before paint, again after paint, and hits
 * every element that could be the scroll container (html / body / window) —
 * `body { overflow-x: hidden }` can make <body> the vertical scroller.
 */
function toTop() {
  const el = document.scrollingElement || document.documentElement
  const prev = document.documentElement.style.scrollBehavior
  document.documentElement.style.scrollBehavior = 'auto'
  el.scrollTop = 0
  document.body.scrollTop = 0
  window.scrollTo(0, 0)
  document.documentElement.style.scrollBehavior = prev
}

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    toTop()
  }, [pathname])

  useEffect(() => {
    toTop()
    // catch layout that settles after the page-transition animation
    const t = setTimeout(toTop, 60)
    const t2 = setTimeout(toTop, 350)
    return () => {
      clearTimeout(t)
      clearTimeout(t2)
    }
  }, [pathname])

  return null
}
