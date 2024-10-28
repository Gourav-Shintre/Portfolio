import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',
  build: {
    rollupOptions: {
      external: ['framer-motion'], // Add other external dependencies if needed
    }
  }
})
