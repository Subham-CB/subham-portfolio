import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: process.env.NODE_ENV === 'production' ? '/subham-portfolio/' : '/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-three': ['three'],
          'vendor-react-three': ['@react-three/fiber', '@react-three/drei', '@react-three/postprocessing'],
          'vendor-gsap': ['gsap', '@gsap/react'],
        },
      },
    },
  },
})