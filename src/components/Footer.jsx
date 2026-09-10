import { Link } from 'react-router-dom'
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiArrowUpRight } from 'react-icons/fi'
import { PiGraduationCapFill } from 'react-icons/pi'
import { profile } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative mt-24 border-t border-line/10">
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <PiGraduationCapFill size={32} className="-rotate-12 text-content" />
              <span className="font-semibold text-content">{profile.name}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-content/55">
              {profile.role} building secure, responsive full-stack web applications with the
              MERN stack. Open to full-time roles — available for immediate joining.
            </p>
            <div className="mt-5 flex gap-3">
              <a href={profile.github} target="_blank" rel="noreferrer" className="social-ic" aria-label="GitHub">
                <FiGithub />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="social-ic" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
              <a href={`mailto:${profile.email}`} className="social-ic" aria-label="Email">
                <FiMail />
              </a>
              <a href={`tel:${profile.phoneHref}`} className="social-ic" aria-label="Phone">
                <FiPhone />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-content/40">
              Navigate
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((l) => (
                <li key={l}>
                  <Link
                    to={`/${l.toLowerCase()}`}
                    className="text-content/60 transition-colors hover:text-content"
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-content/40">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-content/60">
              <li>
                <a href={`mailto:${profile.email}`} className="hover:text-content">
                  {profile.email}
                </a>
              </li>
              <li>
                <a href={`tel:${profile.phoneHref}`} className="hover:text-content">
                  {profile.phone}
                </a>
              </li>
              <li>{profile.location}</li>
              <li>
                <a
                  href={profile.resumeFile}
                  download={profile.resumeDownloadName}
                  className="inline-flex items-center gap-1 text-accent hover:text-content"
                >
                  Download résumé <FiArrowUpRight />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-line/10 pt-6 text-xs text-content/40 sm:flex-row">
          <p>© {year} {profile.name}. All rights reserved.</p>
          <p>Built with React, Vite, Tailwind CSS & Framer Motion.</p>
        </div>
      </div>
    </footer>
  )
}
