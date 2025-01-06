import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  build: {
    outDir: '../dist', // Ensures the client build output is placed outside of `client` to avoid conflicts
    emptyOutDir: true,  // Cleans output directory before each build
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Points API calls to your Express server during development
        changeOrigin: true,
        secure: false
      }
    }
  }
})
