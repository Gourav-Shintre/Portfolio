import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/', // Adjust this based on your deployment path
  build: {
    rollupOptions: {
      // Optional: Externalize specific packages if necessary
      external: ['framer-motion'], // If you need to externalize this package
    },
    // Optional: Configure output directory
    outDir: 'dist', // Ensure this matches your deployment setup
  }
});
