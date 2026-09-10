import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Root ("/") everywhere by default — works for local dev, Vercel and Firebase.
// The GitHub Pages workflow sets DEPLOY_TARGET=pages so it builds for the
// "/portfolio/" sub-path instead. `import.meta.env.BASE_URL` then feeds the
// router basename and asset() helper automatically.
export default defineConfig({
  base: process.env.DEPLOY_TARGET === 'pages' ? '/portfolio/' : '/',
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
})
