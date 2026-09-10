import { Link } from 'react-router-dom'
import { FiArrowRight, FiBriefcase, FiMapPin } from 'react-icons/fi'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import Photo from '../components/Photo'
import { experience, education, profile, photos } from '../data/portfolio'

const brings = [
  'Full-stack ownership of features from database to UI',
  'Comfort translating Figma designs into production React',
  'REST API design, testing in Postman and frontend integration',
  'Modern auth: JWT, refresh tokens, bcrypt and CORS',
  'Agile collaboration across the full SDLC',
  'A fast, low-friction ramp-up on unfamiliar tech',
]

export default function Experience() {
  return (
    <div className="container-x">
      <section className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
        <SectionHeading
          eyebrow="Experience"
          title="Two internships, real shipped work"
          subtitle="Front-end and full-stack roles where I built client-facing interfaces, owned REST endpoints and contributed across the development life cycle."
        />
        <Reveal delay={1} className="hidden lg:block">
          <div className="grad-border overflow-hidden rounded-md">
            <Photo
              src={photos.casual}
              alt={profile.name}
              position="45% center"
              className="aspect-[4/5] w-full"
            />
          </div>
        </Reveal>
      </section>

      {/* Timeline */}
      <section className="section-pad">
        <div className="relative">
          <div className="absolute left-4 top-2 h-full w-px bg-line/25 sm:left-1/2" />
          <div className="space-y-12">
            {experience.map((job, i) => (
              <Reveal key={job.company} delay={i}>
                <div
                  className={`relative sm:grid sm:grid-cols-2 sm:gap-10 ${
                    i % 2 ? '' : ''
                  }`}
                >
                  <span className="absolute left-4 top-3 grid h-8 w-8 -translate-x-1/2 place-items-center rounded-[4px] border border-line/30 text-accent sm:left-1/2">
                    <FiBriefcase size={14} />
                  </span>
                  <div
                    className={`ml-12 sm:ml-0 ${
                      i % 2 ? 'sm:col-start-2' : 'sm:col-start-1 sm:text-right'
                    }`}
                  >
                    <div className="card card-hover p-7 text-left">
                      <span className="chip">{job.period}</span>
                      <h3 className="mt-4 font-display text-xl font-bold text-content">
                        {job.role}
                      </h3>
                      <p className="mt-1 font-medium text-accent">{job.company}</p>
                      <p className="mt-1 flex items-center gap-1.5 text-xs text-content/45">
                        <FiMapPin /> {job.location}
                      </p>
                      <p className="mt-4 text-sm leading-relaxed text-content/60">{job.summary}</p>
                      <ul className="mt-4 space-y-2.5">
                        {job.points.map((p) => (
                          <li key={p} className="flex items-start gap-2.5 text-sm text-content/65">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            {p}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {job.stack.map((s) => (
                          <span key={s} className="chip">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What I bring */}
      <section className="section-pad">
        <SectionHeading eyebrow="Value" title="What I bring to a team" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {brings.map((b, i) => (
            <Reveal key={b} delay={i % 2}>
              <div className="card flex items-center gap-4 p-6">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-[4px] border border-line/30 text-xs font-medium text-accent">
                  {i + 1}
                </span>
                <p className="text-sm text-content/75">{b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Education recap */}
      <section className="section-pad">
        <SectionHeading eyebrow="Education" title="Academic timeline" />
        <div className="mt-12 space-y-5">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i}>
              <div className="card flex flex-col gap-3 p-7 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold text-content">{e.degree}</h3>
                  <p className="text-sm text-content/55">{e.school}</p>
                </div>
                <div className="sm:text-right">
                  <p className="text-sm font-medium text-accent">{e.detail}</p>
                  <p className="text-xs text-content/40">{e.period}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad">
        <Reveal>
          <div className="card flex flex-col items-center gap-4 p-10 text-center">
            <h2 className="font-display text-2xl font-bold text-content sm:text-3xl">
              Ready for the next role
            </h2>
            <p className="max-w-lg text-content/60">
              {profile.name} is available for immediate joining as a full-stack or front-end
              developer.
            </p>
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="btn-primary">
                Contact me <FiArrowRight />
              </Link>
              <a
                href={profile.resumeFile}
                download={profile.resumeDownloadName}
                className="btn-ghost"
              >
                Download résumé
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
