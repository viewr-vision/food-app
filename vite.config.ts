import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Served from the root on Vercel. The GitHub Pages workflow sets VITE_BASE=/novum/.
export default defineConfig({
  base: process.env.VITE_BASE ?? '/',
  plugins: [react()],
})
