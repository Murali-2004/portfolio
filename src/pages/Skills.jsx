import { Link } from 'react-router-dom'
import {
  FiArrowRight,
  FiCode,
  FiServer,
  FiDatabase,
  FiLock,
  FiTool,
  FiTerminal,
} from 'react-icons/fi'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import SkillBar from '../components/SkillBar'
import { skillGroups } from '../data/portfolio'

const groupIcon = [FiTerminal, FiCode, FiServer, FiDatabase, FiLock, FiTool]

const workflow = [
  {
    step: '01',
    title: 'Understand the requirement',
    text: 'Clarify what the feature actually needs to do and where the edge cases are before writing code.',
  },
  {
    step: '02',
    title: 'Model the data',
    text: 'Design MongoDB schemas and relationships with Mongoose so the API has a solid foundation.',
  },
  {
    step: '03',
    title: 'Build the API',
    text: 'Express routes for CRUD, validation, and JWT-guarded access — tested in Postman as I go.',
  },
  {
    step: '04',
    title: 'Build the interface',
    text: 'Reusable React components with Hooks, wired to the API, responsive from mobile up.',
  },
  {
    step: '05',
    title: 'Test & deploy',
    text: 'Unit-test the tricky logic, debug across the stack, then ship.',
  },
]

export default function Skills() {
  return (
    <div className="container-x">
      <section>
        <SectionHeading
          eyebrow="Skills"
          title="A full-stack JavaScript toolkit"
          subtitle="Proficiency levels below are an honest self-assessment — strongest in the front end and the MERN core, with working knowledge across databases, security and tooling."
          align="center"
        />
      </section>

      {/* Skill groups */}
      <section className="section-pad">
        <div className="grid gap-6 lg:grid-cols-2">
          {skillGroups.map((group, gi) => {
            const Icon = groupIcon[gi % groupIcon.length]
            return (
              <Reveal key={group.name} delay={gi % 2}>
                <div className="card h-full p-8">
                  <div className="flex items-center gap-3">
                    <div
                      className={`grid h-11 w-11 place-items-center rounded-[5px] border border-line/30 text-accent`}
                    >
                      <Icon size={20} />
                    </div>
                    <h3 className="font-display text-lg font-bold text-content">{group.name}</h3>
                  </div>
                  <div className="mt-6 space-y-5">
                    {group.skills.map((s) => (
                      <SkillBar key={s.name} {...s} accent={group.accent} />
                    ))}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* Workflow */}
      <section className="section-pad">
        <SectionHeading
          eyebrow="Process"
          title="How a feature goes from idea to production"
          subtitle="The same loop I followed across both internships and every personal project."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {workflow.map((w, i) => (
            <Reveal key={w.step} delay={i}>
              <div className="card card-hover h-full p-6">
                <p className="gradient-text font-display text-3xl font-semibold">{w.step}</p>
                <h3 className="mt-3 font-semibold text-content">{w.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-content/55">{w.text}</p>
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
              See these skills applied
            </h2>
            <p className="max-w-lg text-content/60">
              Every project in my portfolio is a hands-on demonstration of the stack above.
            </p>
            <Link to="/projects" className="btn-primary mt-2">
              Browse projects <FiArrowRight />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
