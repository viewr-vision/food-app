import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Served from the root on Vercel. Set VITE_BASE for a sub-path deploy.
export default defineConfig({
  base: process.env.VITE_BASE ?? '/',
  plugins: [react()],
})
