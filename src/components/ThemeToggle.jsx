import { motion, AnimatePresence } from 'framer-motion'
import { FiSun, FiMoon } from 'react-icons/fi'
import useTheme from '../hooks/useTheme'

export default function ThemeToggle({ className = '' }) {
  const { isDark, toggle } = useTheme()
  return (
    <button
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to night mode'}
      title={isDark ? 'Light mode' : 'Night mode'}
      className={`relative grid h-10 w-10 place-items-center overflow-hidden rounded-[5px] border border-line/15 bg-line/[0.04] text-content transition-colors hover:border-line/40 ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? 'moon' : 'sun'}
          initial={{ y: 14, opacity: 0, rotate: -30 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: -14, opacity: 0, rotate: 30 }}
          transition={{ duration: 0.2 }}
          className="grid place-items-center"
        >
          {isDark ? <FiMoon size={17} /> : <FiSun size={17} />}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}
