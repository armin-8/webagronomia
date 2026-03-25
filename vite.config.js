import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/agronomia-page/' — descomentar cuando crees el repo en GitHub
  // El nombre debe coincidir con el nombre de tu repositorio en GitHub
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
  },
})
