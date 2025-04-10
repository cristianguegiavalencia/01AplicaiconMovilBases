import { defineConfig } from 'vite'
import tailwindcss from '@vitejs/plugin-react-swc'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),  tailwindcss(),],
})
