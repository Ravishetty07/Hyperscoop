import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import Sitemap from 'vite-plugin-sitemap'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    Sitemap({
      hostname: 'https://www.hyperscoop.in',
      dynamicRoutes: [
        '/',
        '/about',
        '/flavours',
        '/franchise',
        '/shoppe',
        '/contact'
      ],
      generateRobotsTxt: true,
      robots: [{ userAgent: '*', allow: '/' }]
    }),
  ],
})
