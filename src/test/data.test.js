import { describe, it, expect } from 'vitest'
import { readdirSync } from 'node:fs'
import { resolve } from 'node:path'
import { profile, projects, skillGroups, experience, education } from '../data/portfolio'

describe('portfolio data', () => {
  it('has a complete profile', () => {
    for (const key of ['name', 'role', 'email', 'github', 'linkedin', 'resumeFile']) {
      expect(profile[key], key).toBeTruthy()
    }
    expect(profile.email).toMatch(/@/)
    expect(profile.resumeFile).toMatch(/\.pdf$/)
  })

  it('every project is fully populated', () => {
    expect(projects.length).toBeGreaterThanOrEqual(4)
    for (const p of projects) {
      expect(p.slug).toMatch(/^[a-z0-9-]+$/)
      expect(p.title).toBeTruthy()
      expect(p.repo).toMatch(/^https:\/\/github\.com\//)
      expect(Array.isArray(p.stack) && p.stack.length).toBeTruthy()
      expect(Array.isArray(p.features) && p.features.length).toBeTruthy()
      expect(Array.isArray(p.highlights) && p.highlights.length).toBeTruthy()
    }
  })

  it('has a screenshot in /public for every project', () => {
    const dir = resolve(__dirname, '../../public/images/projects')
    const files = new Set(readdirSync(dir))
    for (const p of projects) {
      expect(files.has(`${p.slug}.png`), `${p.slug}.png missing`).toBe(true)
    }
  })

  it('project slugs are unique', () => {
    const slugs = projects.map((p) => p.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it('skill levels are sane percentages', () => {
    for (const g of skillGroups) {
      expect(g.name).toBeTruthy()
      for (const s of g.skills) {
        expect(s.level).toBeGreaterThan(0)
        expect(s.level).toBeLessThanOrEqual(100)
      }
    }
  })

  it('has experience and education entries', () => {
    expect(experience.length).toBeGreaterThan(0)
    expect(education.length).toBeGreaterThan(0)
  })
})
