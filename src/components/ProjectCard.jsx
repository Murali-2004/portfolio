import { Link } from 'react-router-dom'
import { FiGithub, FiArrowUpRight } from 'react-icons/fi'

export default function ProjectCard({ project, index = 0 }) {
  return (
    <article className="group flex h-full flex-col rounded-none border-[8px] border-gold bg-[rgb(var(--card-bg))] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_44px_-16px_rgb(var(--c-gold)/0.5)]">
      {/* meta bar */}
      <div className="flex items-center justify-between border-b-2 border-gold/40 px-5 py-3 font-mono text-[0.68rem] uppercase tracking-widest text-muted">
        <span className="text-accent">{String(index + 1).padStart(2, '0')}</span>
        <span>
          {project.type} · {project.year}
        </span>
      </div>

      {/* visual */}
      <div className="aspect-video overflow-hidden border-b-2 border-gold/40 bg-base-2">
        <img
          src={`/images/projects/${project.slug}.png`}
          alt={`${project.title} interface`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl font-medium text-content">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-body">{project.tagline}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((s) => (
            <span key={s} className="chip">
              {s}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-gold/30 pt-4 font-mono text-xs uppercase tracking-widest">
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-content transition-colors group-hover:text-accent"
          >
            Case study <FiArrowUpRight />
          </Link>
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="text-muted transition-colors hover:text-content"
            aria-label={`${project.title} on GitHub`}
          >
            <FiGithub size={15} />
          </a>
        </div>
      </div>
    </article>
  )
}
