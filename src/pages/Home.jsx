import { Link } from 'react-router-dom'
import {
  FiArrowRight,
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiLayers,
  FiShield,
  FiZap,
  FiGitBranch,
} from 'react-icons/fi'
import Photo from '../components/Photo'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import Marquee from '../components/Marquee'
import ProjectCard from '../components/ProjectCard'
import SkillBar from '../components/SkillBar'
import { profile, photos, highlights, projects, skillGroups } from '../data/portfolio'

const iconMap = { layers: FiLayers, shield: FiShield, sparkles: FiZap, workflow: FiGitBranch }

const facts = [
  ['01', '4 independent full-stack applications, built end to end'],
  ['02', '2 developer internships — front-end and full-stack'],
  ['03', 'B.E. Computer Science & Engineering · CGPA 7.99 / 10'],
  ['04', 'Available immediately · Ulundurpet, Tamil Nadu, India'],
]

export default function Home() {
  const featured = projects.slice(0, 3)
  const previewSkills = skillGroups[1].skills.slice(0, 5)

  return (
    <div>
      {/* ---------- HERO ---------- */}
      <section className="container-x pt-4">
        <Reveal>
          <div className="flex items-center justify-between gap-4 border-t border-line/25 pt-4 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted">
            <span>Portfolio — {new Date().getFullYear()}</span>
            <span className="hidden sm:inline">{profile.role} · Tamil Nadu, IN</span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Open to work
            </span>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <h1 className="mt-10 max-w-[18ch] font-display text-[2.6rem] font-medium leading-[1.05] tracking-[-0.015em] text-content sm:max-w-[24ch] sm:text-[3.6rem] xl:text-[4.6rem]">
            I build <span className="text-accent">full-stack</span> web applications —
            database, API and interface, shipped end to end.
          </h1>
        </Reveal>

        <Reveal delay={1}>
          <p className="mt-6 font-mono text-xs text-muted">
            <span className="text-accent">const</span> stack ={' '}
            <span className="text-body">[&apos;React&apos;, &apos;Node&apos;, &apos;Express&apos;, &apos;MongoDB&apos;]</span>
          </p>
        </Reveal>

        <Reveal delay={2}>
          <div className="mt-12 grid gap-10 border-t border-line/25 pt-10 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Portrait */}
            <div className="grad-border order-1 overflow-hidden">
              <Photo
                src={photos.formal}
                alt={`${profile.name}, ${profile.role}`}
                position="center 22%"
                className="aspect-[4/5] w-full grayscale-[0.15]"
              />
            </div>

            {/* Intro + facts */}
            <div className="order-2 flex flex-col">
              <p className="max-w-xl text-lg leading-relaxed text-body">
                From MongoDB schemas and Express REST APIs to the React interface people
                actually use — I take features through the whole software development life
                cycle, with JWT auth, bcrypt and CORS handled properly rather than bolted on.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link to="/projects" className="btn-primary">
                  Selected work <FiArrowRight />
                </Link>
                <a
                  href={profile.resumeFile}
                  download={profile.resumeDownloadName}
                  className="btn-ghost"
                >
                  Résumé <FiArrowUpRight />
                </a>
                <Link to="/contact" className="btn-ghost">
                  Get in touch
                </Link>
              </div>

              <ul className="mt-10 space-y-0 border-t border-line/20">
                {facts.map(([n, text]) => (
                  <li
                    key={n}
                    className="flex items-baseline gap-4 border-b border-line/20 py-3.5 text-sm text-body"
                  >
                    <span className="font-mono text-xs text-accent">{n}</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-center gap-6 font-mono text-xs uppercase tracking-widest text-muted">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-content"
                >
                  <FiGithub /> GitHub
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-content"
                >
                  <FiLinkedin /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-14 border-t border-line/25">
          <Marquee />
        </Reveal>
      </section>

      {/* ---------- HIGHLIGHTS ---------- */}
      <section className="container-x section-pad">
        <SectionHeading
          eyebrow="Approach"
          title="Fundamentals, shipped end to end"
          subtitle="Every project below was designed, built, secured and deployed by me — front end to database."
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-line/20 bg-line/20 sm:grid-cols-2">
          {highlights.map((h, i) => {
            const Icon = iconMap[h.icon]
            return (
              <Reveal key={h.title} delay={i}>
                <div className="h-full bg-base p-7">
                  <div className="flex items-center gap-3">
                    <Icon size={18} className="text-accent" />
                    <span className="font-mono text-[0.7rem] uppercase tracking-widest text-muted">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-medium text-content">{h.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">{h.text}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* ---------- FEATURED PROJECTS ---------- */}
      <section className="container-x section-pad">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Selected work" title="Recent projects" />
          <Link to="/projects" className="btn-ghost">
            All projects <FiArrowRight />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i}>
              <ProjectCard project={p} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- SKILLS PREVIEW ---------- */}
      <section className="container-x section-pad">
        <div className="grid gap-12 border-t border-line/25 pt-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Toolbox"
              title="The stack I work in every day"
              subtitle="JavaScript from the browser to the server, backed by MongoDB and secured with modern auth patterns."
            />
            <Link to="/skills" className="btn-ghost mt-8">
              Explore all skills <FiArrowRight />
            </Link>
          </div>
          <div>
            <p className="eyebrow mb-6">Frontend development</p>
            <div className="space-y-5">
              {previewSkills.map((s) => (
                <SkillBar key={s.name} {...s} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="container-x section-pad">
        <Reveal>
          <div className="border-y border-line/25 py-16 text-center sm:py-20">
            <p className="eyebrow">Contact</p>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-medium leading-tight text-content sm:text-[2.75rem]">
              Looking for a full-stack or front-end developer who can start{' '}
              <span className="italic text-accent">right away</span>?
            </h2>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="btn-primary">
                Start a conversation <FiArrowRight />
              </Link>
              <a href={`mailto:${profile.email}`} className="btn-ghost">
                {profile.email}
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
