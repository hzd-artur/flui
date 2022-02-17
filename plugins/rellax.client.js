import { defineNuxtPlugin } from '#app'
import Rellax from 'rellax'

let rellaxDir = {
  created(el, binding) {
    let options =
      typeof binding.value === 'string'
        ? { speed: binding.value }
        : binding.value
    new Rellax(el, options)
  },
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('parallax', rellaxDir)
})
