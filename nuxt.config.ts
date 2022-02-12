import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ['@/assets/main.scss'],
  // Uncoment to develop
  // Comment to build
  ssr: false,
  dev: true,
  meta: {
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    title: 'Flui',
  },
  /* plugins: [{ src: '~~/node_modules/vue-rellax/lib/nuxt-plugin', ssr: false }], */

  /* buildModules: [
  '@nuxtjs/pwa',
], */
  /* pwa: {
  manifest: {
      name: 'Icon Sax'
  },
  meta: {
      name: 'Icon Sax'
  },
  icon: {
source: '@/public/icon.png'    }
}, */
})
