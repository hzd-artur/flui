import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  // Uncoment to develop
  // Comment to build
  /*   ssr: false,
  dev: true, */
  css: ['@/assets/main.scss'],
  meta: {
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    title: 'Flui',
  },
})
