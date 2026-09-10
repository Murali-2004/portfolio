import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiGithub } from 'react-icons/fi'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import { projects, profile } from '../data/portfolio'

const filters = ['All', 'MERN Stack', 'React.js']

export default function Projects() {
  const [active, setActive] = useState('All')

  const shown = useMemo(
    () => (active === 'All' ? projects : projects.filter((p) => p.type === active)),
    [active],
  )

  return (
    <div className="container-x">
      <section>
        <SectionHeading
          eyebrow="Projects"
          title="Four apps, built from scratch"
          subtitle="Two full-stack MERN applications and two focused React builds — each one designed, developed and deployed independently. Open any card for the full case study."
        />
        <Reveal className="mt-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                active === f
                  ? 'bg-content text-base'
                  : 'border border-line/[0.12] bg-line/5 text-content/60 hover:text-content'
              }`}
            >
              {f}
            </button>
          ))}
        </Reveal>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        {shown.map((p, i) => (
          <Reveal key={p.slug} delay={i % 2}>
            <ProjectCard project={p} index={projects.indexOf(p)} />
          </Reveal>
        ))}
      </section>

      <section className="section-pad">
        <Reveal>
          <div className="card flex flex-col items-center gap-4 p-10 text-center">
            <FiGithub size={28} className="text-content/70" />
            <h2 className="font-display text-2xl font-bold text-content sm:text-3xl">
              More on GitHub
            </h2>
            <p className="max-w-lg text-content/60">
              Source code, commit history and READMEs for every project live on my GitHub.
            </p>
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              <a href={profile.github} target="_blank" rel="noreferrer" className="btn-primary">
                @{profile.githubHandle} <FiArrowRight />
              </a>
              <Link to="/contact" className="btn-ghost">
                Work with me
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
