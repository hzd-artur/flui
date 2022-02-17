import { defineNuxtPlugin } from '#app'
import * as icons from '@mdi/js'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.globalProperties.$icon = {
    get(name) {
      return icons[
        'mdi' +
          name[0].toUpperCase() +
          name.substring(1).replace(/-./g, (x) => x[1].toUpperCase())
      ]
    },
  }
})
