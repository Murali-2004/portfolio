/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'ui-serif', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        // Semantic, theme-aware tokens (light on :root, dark on .dark)
        base: 'rgb(var(--c-base) / <alpha-value>)',
        'base-2': 'rgb(var(--c-base-2) / <alpha-value>)',
        content: 'rgb(var(--c-content) / <alpha-value>)',
        body: 'rgb(var(--c-body) / <alpha-value>)',
        muted: 'rgb(var(--c-muted) / <alpha-value>)',
        line: 'rgb(var(--c-line) / <alpha-value>)',
        accent: 'rgb(var(--c-accent) / <alpha-value>)',
        gold: 'rgb(var(--c-gold) / <alpha-value>)',
        // Fixed ink used as a scrim over photos
        ink: {
          900: '#0b0d10',
          800: '#12151a',
          700: '#1b1f26',
        },
        // Kept for existing utility references — mapped to the accent family
        brand: {
          purple: '#2545d8',
          indigo: '#2545d8',
          blue: '#2545d8',
          pink: '#2545d8',
          cyan: '#2545d8',
        },
      },
      backgroundImage: {
        'grad-main': 'linear-gradient(135deg, #3a5cf0 0%, #2038c0 100%)',
        'grad-warm': 'linear-gradient(135deg, #12151a 0%, #2545d8 130%)',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'spin-slow': { to: { transform: 'rotate(360deg)' } },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        'spin-slow': 'spin-slow 30s linear infinite',
      },
    },
  },
  plugins: [],
}
