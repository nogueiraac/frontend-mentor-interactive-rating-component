import { defineConfig } from 'vite'
import svgr from '@svgr/webpack';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
