import { useState } from 'react'
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
  FiLoader,
} from 'react-icons/fi'
import Photo from '../components/Photo'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { profile, photos } from '../data/portfolio'

const contactItems = [
  { icon: FiMail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: FiPhone, label: 'Phone', value: profile.phone, href: `tel:${profile.phoneHref}` },
  { icon: FiMapPin, label: 'Location', value: profile.location },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: `@${profile.githubHandle}`,
    href: profile.github,
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: profile.linkedinHandle,
    href: profile.linkedin,
  },
]

const KEY_PLACEHOLDER = 'REPLACE_WITH_YOUR_WEB3FORMS_ACCESS_KEY'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '', botcheck: '' })
  // status: 'idle' | 'sending' | 'success' | 'error'
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const mailtoHref = () => {
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    const subject = encodeURIComponent(form.subject || `Portfolio enquiry from ${form.name}`)
    return `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  const submit = async (e) => {
    e.preventDefault()
    if (form.botcheck) return // honeypot tripped

    const key = profile.web3formsKey
    if (!key || key === KEY_PLACEHOLDER) {
      // No form service configured yet — fall back to the visitor's mail client.
      window.location.href = mailtoHref()
      setStatus('error')
      setErrorMsg(
        'The form service is not set up yet, so your email app was opened instead. (Owner: add a Web3Forms access key.)',
      )
      return
    }

    setStatus('sending')
    setErrorMsg('')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: key,
          from_name: `${form.name} · Portfolio`,
          subject: form.subject || `Portfolio enquiry from ${form.name}`,
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '', botcheck: '' })
      } else {
        setStatus('error')
        setErrorMsg(data.message || 'Something went wrong. Please email me directly.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Network error — please check your connection or email me directly.')
    }
  }

  const sending = status === 'sending'

  return (
    <div className="container-x">
      <section>
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk"
          subtitle="I'm actively looking for a full-stack or front-end developer role and I'm available to start immediately. Send a message and I'll reply quickly."
          align="center"
        />
      </section>

      <section className="section-pad grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        {/* Left: card + details */}
        <div className="space-y-6">
          <Reveal>
            <div className="grad-border relative overflow-hidden rounded-md">
              <Photo
                src={photos.formal}
                alt={profile.name}
                position="center 25%"
                className="aspect-[5/4] w-full"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-900 via-ink-900/60 to-transparent p-6 pt-16">
                <p className="font-display text-xl font-bold text-white">{profile.name}</p>
                <p className="text-sm text-white/70">{profile.role}</p>
                <span className="chip mt-3 border-white/20 !bg-white/10 !text-white !py-1.5">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  Available for immediate joining
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div className="card divide-y divide-line/10 p-2">
              {contactItems.map((c) => {
                const Inner = (
                  <div className="flex items-center gap-4 p-4">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-[4px] border border-line/30 text-accent">
                      <c.icon size={17} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-content/40">{c.label}</p>
                      <p className="text-sm font-medium text-content">{c.value}</p>
                    </div>
                  </div>
                )
                return c.href ? (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="block transition-colors hover:bg-line/5"
                  >
                    {Inner}
                  </a>
                ) : (
                  <div key={c.label}>{Inner}</div>
                )
              })}
            </div>
          </Reveal>
        </div>

        {/* Right: form */}
        <Reveal delay={1}>
          <form onSubmit={submit} className="card p-7 sm:p-9">
            {status === 'success' ? (
              <div className="flex flex-col items-center gap-3 py-10 text-center">
                <FiCheckCircle size={44} className="text-accent" />
                <h3 className="font-display text-xl font-bold text-content">Message sent ✓</h3>
                <p className="max-w-sm text-sm text-content/55">
                  Thanks for reaching out — your message landed in my inbox and I&apos;ll get
                  back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="btn-ghost mt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-display text-xl font-bold text-content">Send a message</h3>

                {status === 'error' && (
                  <div className="mt-4 flex items-start gap-3 rounded-[5px] border border-brand-pink/30 bg-accent/10 p-3 text-sm text-content/80">
                    <FiAlertCircle className="mt-0.5 shrink-0 text-accent" />
                    <span>
                      {errorMsg}{' '}
                      <a href={mailtoHref()} className="font-medium text-accent underline">
                        Email me directly
                      </a>
                      .
                    </span>
                  </div>
                )}

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <Field label="Name" name="name" value={form.name} onChange={update} required />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={update}
                    required
                  />
                </div>
                <div className="mt-4">
                  <Field label="Subject" name="subject" value={form.subject} onChange={update} />
                </div>
                <div className="mt-4">
                  <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-content/45">
                    Message <span className="text-accent"> *</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={update}
                    required
                    rows={5}
                    className="w-full resize-none rounded-[5px] border border-line/10 bg-line/5 px-4 py-3 text-sm text-content outline-none transition-colors focus:border-brand-blue"
                    placeholder="Tell me about the role or project…"
                  />
                </div>

                {/* honeypot — hidden from humans */}
                <input
                  type="text"
                  name="botcheck"
                  value={form.botcheck}
                  onChange={update}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />

                <button type="submit" disabled={sending} className="btn-primary mt-6 w-full disabled:opacity-70">
                  {sending ? (
                    <>
                      Sending… <FiLoader className="animate-spin" />
                    </>
                  ) : (
                    <>
                      Send message <FiSend />
                    </>
                  )}
                </button>
                <p className="mt-3 text-center text-xs text-content/35">
                  Sent straight to {profile.email} — usually answered within a day.
                </p>
              </>
            )}
          </form>
        </Reveal>
      </section>
    </div>
  )
}

function Field({ label, name, type = 'text', value, onChange, required }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-content/45">
        {label}
        {required && <span className="text-accent"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-[5px] border border-line/10 bg-line/5 px-4 py-3 text-sm text-content outline-none transition-colors focus:border-brand-blue"
      />
    </div>
  )
}
