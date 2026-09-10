import { useParams, Link, Navigate } from 'react-router-dom'
import { FiArrowLeft, FiArrowRight, FiGithub, FiCheck } from 'react-icons/fi'
import Reveal from '../components/Reveal'
import { projects, profile, projectImage } from '../data/portfolio'

export default function ProjectDetail() {
  const { slug } = useParams()
  const index = projects.findIndex((p) => p.slug === slug)
  if (index === -1) return <Navigate to="/projects" replace />

  const project = projects[index]
  const prev = projects[(index - 1 + projects.length) % projects.length]
  const next = projects[(index + 1) % projects.length]

  return (
    <div className="container-x">
      <Link
        to="/projects"
        className="inline-flex items-center gap-2 text-sm text-content/55 transition-colors hover:text-content"
      >
        <FiArrowLeft /> All projects
      </Link>

      {/* Hero */}
      <section className="mt-8">
        <Reveal>
          <div className="border-t border-line/25 pt-4 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted">
            {String(index + 1).padStart(2, '0')} / {projects.length} — {project.type} · {project.year}
          </div>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h1 className="font-display text-4xl font-medium leading-[1.06] tracking-[-0.01em] text-content sm:text-[3.4rem]">
                {project.title}
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-body">{project.tagline}</p>
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="btn-primary mt-8"
              >
                <FiGithub /> View repository
              </a>
            </div>
            <div className="grad-border overflow-hidden">
              <img
                src={projectImage(project.slug)}
                alt={`${project.title} interface`}
                className="aspect-video w-full object-cover"
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* Body */}
      <section className="mt-14 grid gap-12 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-content">Overview</h2>
            <p className="mt-4 text-base leading-relaxed text-content/65">{project.description}</p>
          </Reveal>

          <Reveal className="mt-10">
            <h2 className="font-display text-2xl font-bold text-content">Key features</h2>
            <ul className="mt-5 space-y-3">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-[4px] border border-line/30 text-accent">
                    <FiCheck size={13} />
                  </span>
                  <span className="text-sm leading-relaxed text-content/70">{f}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <aside className="space-y-6">
          <Reveal>
            <div className="card p-6">
              <h3 className="eyebrow">
                Tech stack
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="card p-6">
              <h3 className="eyebrow">
                What it demonstrates
              </h3>
              <ul className="mt-4 space-y-2.5">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-sm text-content/70">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={2}>
            <div className="card p-6">
              <h3 className="eyebrow">
                Links
              </h3>
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm text-content hover:text-accent"
              >
                <FiGithub /> GitHub repository
              </a>
            </div>
          </Reveal>
        </aside>
      </section>

      {/* Prev / Next */}
      <section className="section-pad">
        <div className="grid gap-4 sm:grid-cols-2">
          <Link to={`/projects/${prev.slug}`} className="card card-hover p-6">
            <p className="flex items-center gap-2 text-xs text-content/45">
              <FiArrowLeft /> Previous
            </p>
            <p className="mt-2 font-display text-lg font-bold text-content">{prev.title}</p>
          </Link>
          <Link to={`/projects/${next.slug}`} className="card card-hover p-6 sm:text-right">
            <p className="flex items-center gap-2 text-xs text-content/45 sm:justify-end">
              Next <FiArrowRight />
            </p>
            <p className="mt-2 font-display text-lg font-bold text-content">{next.title}</p>
          </Link>
        </div>
        <Reveal className="mt-8">
          <div className="card flex flex-col items-center gap-3 p-8 text-center">
            <p className="text-content/60">Interested in how this was built?</p>
            <a href={`mailto:${profile.email}`} className="btn-primary">
              Ask me about it <FiArrowRight />
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
