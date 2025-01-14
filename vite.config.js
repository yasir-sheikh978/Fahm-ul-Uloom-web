import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: './index.html', // or the correct entry point
      },
      external: ['/assets/index-B1xsP-_3.js', '/assets/index-Dk2Y90V3.css'], // only if necessary
    },
  },
})
