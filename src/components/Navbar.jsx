import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMenu, FiX, FiArrowUpRight } from 'react-icons/fi'
import { PiGraduationCapFill } from 'react-icons/pi'
import { profile } from '../data/portfolio'
import ThemeToggle from './ThemeToggle'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 max-md:border-line/15 max-md:bg-[rgb(var(--c-base)/0.95)] max-md:backdrop-blur-sm ${
        scrolled || open
          ? 'border-line/20 bg-[rgb(var(--c-base)/0.92)] backdrop-blur-sm'
          : 'border-transparent'
      }`}
    >
      <nav className="container-x">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="group flex items-center gap-2.5">
            <PiGraduationCapFill
              size={30}
              className="-rotate-12 text-content transition-transform duration-300 group-hover:rotate-0"
            />
            <span className="font-display text-[0.95rem] font-medium text-content">
              {profile.name}
            </span>
          </Link>

          <ul className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) =>
                    `relative font-mono text-[0.72rem] uppercase tracking-[0.14em] transition-colors ${
                      isActive ? 'text-accent' : 'text-muted hover:text-content'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {l.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute -bottom-1.5 left-0 h-px w-full bg-accent"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <a
              href={profile.resumeFile}
              download={profile.resumeDownloadName}
              className="btn-primary !px-4 !py-2 !text-[0.72rem]"
            >
              Résumé <FiArrowUpRight />
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-[4px] border border-line/25 text-content"
              aria-label="Toggle menu"
            >
              {open ? <FiX size={19} /> : <FiMenu size={19} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="-mx-5 overflow-hidden border-t border-line/15 bg-base px-5 shadow-[0_16px_40px_-20px_rgb(var(--c-line)/0.25)] sm:-mx-8 sm:px-8 md:hidden"
            >
              {links.map((l) => (
                <li key={l.to} className="border-b border-line/12">
                  <NavLink
                    to={l.to}
                    end={l.to === '/'}
                    className={({ isActive }) =>
                      `block py-4 font-mono text-[0.78rem] uppercase tracking-[0.14em] ${
                        isActive ? 'text-accent' : 'text-content'
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
              <li className="py-4">
                <a
                  href={profile.resumeFile}
                  download={profile.resumeDownloadName}
                  className="btn-primary w-full"
                >
                  Download Résumé <FiArrowUpRight />
                </a>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
