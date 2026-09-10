import { describe, it, expect, afterEach } from 'vitest'
import { render, screen, cleanup, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../App'
import { profile } from '../data/portfolio'

afterEach(cleanup)

function renderAt(path) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  )
}

describe('App routing', () => {
  it('renders the home hero', () => {
    renderAt('/')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/full-stack/i)
    // nav is present
    expect(screen.getAllByRole('link', { name: /projects/i }).length).toBeGreaterThan(0)
  })

  it('renders the projects page with a card per project', () => {
    renderAt('/projects')
    expect(screen.getByRole('heading', { name: /built from scratch/i })).toBeInTheDocument()
    expect(screen.getByText('Job Board Application')).toBeInTheDocument()
    expect(screen.getByText('Quiz Application')).toBeInTheDocument()
  })

  it('renders a project case study', () => {
    renderAt('/projects/job-board-app')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Job Board Application')
    expect(screen.getByRole('link', { name: /view repository/i })).toHaveAttribute(
      'href',
      'https://github.com/Murali-2004/job-board-app',
    )
  })

  it('shows a 404 for unknown routes', () => {
    renderAt('/no-such-page')
    expect(screen.getByText(/page not found/i)).toBeInTheDocument()
  })

  it('contact page exposes the email and a message form', () => {
    renderAt('/contact')
    expect(screen.getAllByText(profile.email).length).toBeGreaterThan(0)
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('résumé link points at the PDF', () => {
    renderAt('/')
    const links = screen.getAllByRole('link', { name: /résumé/i })
    expect(links.some((l) => l.getAttribute('href') === profile.resumeFile)).toBe(true)
  })
})
