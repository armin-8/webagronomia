import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/webagronomia/',  // Debe coincidir con el nombre de tu repo en GitHub
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
  },
})
