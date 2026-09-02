import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // main deploys to the site root; branch previews deploy under /preview/<branch>/ —
  // CI sets VITE_BASE_PATH per job, local dev/build defaults to the main path.
  base: process.env.VITE_BASE_PATH || '/ada-test-lab/',
})
