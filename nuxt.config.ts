// // https://nuxt.com/docs/api/configuration/nuxt-config
import type { NuxtConfig } from '@nuxt/types'
import { appDescription } from './constants/app'

const config: NuxtConfig = {
  buildModules: ['@nuxt/typescript-build'],
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxt/eslint',
    'nuxt-primevue',
    'nuxt-swiper',
  ],
  primevue: {
    options: {
      ripple: true,
    },
  },
  devServer: {
      host: '0.0.0.0',
      port: 3000, 
  },
  css: [
    'primevue/resources/themes/aura-light-green/theme.css',
    '@/assets/css/index.scss',
  ],
  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/skylab.ico' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  runtimeConfig: {
    public: {
      NUXT_API_URL: process.env.NUXT_API_URL
    }
  },

  colorMode: {
    preference: 'light',
  },

  ssr: false,
}

export default config