import { motion } from 'framer-motion'

export default function SkillBar({ name, level }) {
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between">
        <span className="text-sm font-medium text-content">{name}</span>
        <span className="font-mono text-[0.7rem] text-muted">{level}%</span>
      </div>
      <div className="h-[3px] w-full bg-line/15">
        <motion.div
          className="h-full bg-accent"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  )
}
