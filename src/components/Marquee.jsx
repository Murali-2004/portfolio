import { techBadges } from '../data/portfolio'

/** Quiet ticker of technologies along a rule. */
export default function Marquee() {
  const row = [...techBadges, ...techBadges]
  return (
    <div className="relative overflow-hidden py-5 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
      <div className="flex w-max animate-[marquee_38s_linear_infinite] items-center gap-8">
        {row.map((t, i) => (
          <span
            key={i}
            className="whitespace-nowrap font-mono text-[0.72rem] uppercase tracking-[0.16em] text-muted"
          >
            {t}
            <span className="ml-8 text-accent">/</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
