import { Link } from 'react-router-dom'
import {
  FiArrowRight,
  FiAward,
  FiBookOpen,
  FiGlobe,
  FiHeart,
  FiCheckCircle,
} from 'react-icons/fi'
import Photo from '../components/Photo'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import {
  profile,
  photos,
  education,
  certifications,
  softSkills,
  languages,
} from '../data/portfolio'

const approach = [
  {
    title: 'Clean, readable code',
    text: 'Small reusable components, clear naming and consistent structure so the next person (or me in six months) can move fast.',
  },
  {
    title: 'Security is not optional',
    text: 'Hashed passwords, token rotation, guarded routes and correct CORS from the first commit — not a later patch.',
  },
  {
    title: 'Ship the whole loop',
    text: 'Requirement gathering, build, test, deploy. I like owning a feature all the way to production.',
  },
  {
    title: 'Fast on new tools',
    text: 'I pick up unfamiliar libraries and APIs quickly and enjoy the ramp-up more than staying comfortable.',
  },
]

export default function About() {
  return (
    <div className="container-x">
      {/* Intro */}
      <section className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <Reveal className="relative mx-auto w-full max-w-sm">
          <div className="grad-border relative overflow-hidden rounded-md">
            <Photo
              src={photos.casual}
              alt={`${profile.name} outdoors`}
              position="45% center"
              className="aspect-[4/5] w-full grayscale-[0.15]"
            />
          </div>
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="About me"
            title="Computer Science graduate, MERN developer, quick learner"
          />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-content/65">
            <p>{profile.summary}</p>
            <p>{profile.summaryTwo}</p>
            <p>
              Outside of building products, I enjoy breaking down how systems fit together —
              why a token refresh flow is shaped the way it is, or how a ranking algorithm
              should weigh its inputs. That curiosity is what pulled me toward full-stack work
              in the first place.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/experience" className="btn-primary">
              My experience <FiArrowRight />
            </Link>
            <Link to="/contact" className="btn-ghost">
              Contact me
            </Link>
          </div>
        </div>
      </section>

      {/* Quick facts */}
      <section className="section-pad">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['Based in', profile.location],
            ['Role', profile.role],
            ['Education', 'B.E. CSE · CGPA 7.99'],
            ['Availability', 'Immediate joining'],
          ].map(([k, v], i) => (
            <Reveal key={k} delay={i}>
              <div className="card p-6">
                <p className="eyebrow">
                  {k}
                </p>
                <p className="mt-2 font-medium text-content">{v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section className="section-pad">
        <SectionHeading eyebrow="How I work" title="Principles I build by" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {approach.map((a, i) => (
            <Reveal key={a.title} delay={i}>
              <div className="card card-hover h-full p-7">
                <FiCheckCircle className="text-accent" size={22} />
                <h3 className="mt-4 font-display text-lg font-bold text-content">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-content/55">{a.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="section-pad">
        <SectionHeading
          eyebrow="Education"
          title="Academic background"
          subtitle="Four years of Computer Science & Engineering, with a steady 7.99 CGPA."
        />
        <div className="mt-12 space-y-5">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i}>
              <div className="card card-hover flex flex-col gap-4 p-7 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-[4px] border border-line/30 text-accent">
                    <FiBookOpen size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-content">{e.degree}</h3>
                    <p className="text-sm text-content/55">{e.school}</p>
                    <p className="mt-1 text-sm font-medium text-accent">{e.detail}</p>
                  </div>
                </div>
                <span className="chip shrink-0">{e.period}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="section-pad">
        <SectionHeading eyebrow="Credentials" title="Certifications & participation" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {certifications.map((c, i) => (
            <Reveal key={c} delay={i}>
              <div className="card flex items-center gap-4 p-5">
                <FiAward className="shrink-0 text-accent" size={22} />
                <p className="text-sm text-content/75">{c}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Beyond the code */}
      <section className="section-pad">
        <SectionHeading
          eyebrow="Beyond the code"
          title="A little life outside the editor"
          subtitle="I like to travel and shoot photos when I'm away from the keyboard — it keeps the eye for detail sharp."
        />
        <div className="mt-10 grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { src: photos.river, alt: `${profile.name} at an event` },
            { src: photos.walking, alt: `${profile.name} with a camera` },
            { src: photos.standing, alt: `${profile.name} outdoors` },
          ].map((p, i) => (
            <Reveal key={p.src} delay={i}>
              <div className="grad-border overflow-hidden rounded-md">
                <Photo
                  src={p.src}
                  alt={p.alt}
                  position="center 22%"
                  className="aspect-[2/3] w-full"
                />
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={1}>
          <div className="card mt-4 p-8 sm:p-10">
            <p className="font-display text-xl font-bold text-content sm:text-2xl">
              Curiosity travels with me.
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-content/60">
              Framing a photo and shaping a data model use the same muscle — notice what
              matters, cut what doesn&apos;t, and keep adjusting until it feels right.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Soft skills + languages */}
      <section className="section-pad">
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="card h-full p-8">
              <div className="flex items-center gap-3">
                <FiHeart className="text-accent" size={22} />
                <h3 className="font-display text-xl font-bold text-content">Soft skills</h3>
              </div>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {softSkills.map((s) => (
                  <span key={s} className="chip !px-4 !py-2 !text-sm">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="card h-full p-8">
              <div className="flex items-center gap-3">
                <FiGlobe className="text-accent" size={22} />
                <h3 className="font-display text-xl font-bold text-content">Languages</h3>
              </div>
              <ul className="mt-6 space-y-3">
                {languages.map((l) => (
                  <li key={l.name} className="flex items-center justify-between text-sm">
                    <span className="font-medium text-content/85">{l.name}</span>
                    <span className="text-content/45">{l.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
