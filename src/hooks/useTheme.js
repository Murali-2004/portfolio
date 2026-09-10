import { useSyncExternalStore } from 'react'

/**
 * Light/dark theme with light as the default.
 * State lives on <html class="dark"> + localStorage, so every component that
 * calls this hook stays in sync (no divergent copies).
 */
const listeners = new Set()

function isDarkNow() {
  return typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
}

function subscribe(cb) {
  listeners.add(cb)
  return () => listeners.delete(cb)
}

function setDark(dark) {
  document.documentElement.classList.toggle('dark', dark)
  try {
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  } catch {
    /* storage unavailable */
  }
  listeners.forEach((cb) => cb())
}

export default function useTheme() {
  const isDark = useSyncExternalStore(subscribe, isDarkNow, () => false)
  return {
    isDark,
    theme: isDark ? 'dark' : 'light',
    toggle: () => setDark(!isDarkNow()),
    setTheme: (t) => setDark(t === 'dark'),
  }
}
