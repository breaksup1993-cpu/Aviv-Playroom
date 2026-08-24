import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg'],
      manifest: {
        name: 'Aviv Playroom',
        short_name: 'Aviv Playroom',
        description: 'Aviv Playroom — a mobile-first playroom of educational mini-games.',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/icons/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/icons/maskable-icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        // Cache the app shell so it can load fully offline after first visit.
        // Includes future game asset formats (images + audio) up front.
        globPatterns: [
          '**/*.{js,css,html,svg,png,ico,webp,avif,mp3,m4a,wav,ogg}',
        ],
      },
      devOptions: {
        enabled: false,
      },
    }),
  ],
})
