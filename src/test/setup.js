import '@testing-library/jest-dom/vitest'
import { vi } from 'vitest'

// jsdom lacks these browser APIs used by the theme hook and scroll-reveal.
if (!window.matchMedia) {
  window.matchMedia = vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }))
}

class IO {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return []
  }
}
window.IntersectionObserver = window.IntersectionObserver || IO
global.IntersectionObserver = global.IntersectionObserver || IO

// jsdom defines scrollTo but throws "Not implemented" — replace it outright.
window.scrollTo = vi.fn()
Element.prototype.scrollTo = Element.prototype.scrollTo || vi.fn()
