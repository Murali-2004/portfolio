import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, subtitle, align = 'left' }) {
  const centered = align === 'center'
  return (
    <Reveal className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && (
        <div className={`mb-4 flex items-center gap-3 ${centered ? 'justify-center' : ''}`}>
          <span className="eyebrow">{eyebrow}</span>
          <span className="h-px w-10 bg-line/30" />
        </div>
      )}
      <h2 className="font-display text-[1.9rem] font-medium leading-[1.1] tracking-[-0.01em] text-content sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-body sm:text-[1.05rem]">{subtitle}</p>
      )}
    </Reveal>
  )
}
