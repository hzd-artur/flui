import { defineNuxtPlugin } from '#app'
import anime from 'animejs/lib/anime.es.js'

// let animeDir = {}
export default defineNuxtPlugin((nuxtApp) => {
  let animeDir = {
    created(el, binding) {
      if (binding.arg) {
        let animation = anime({
          ...{
            targets: el,
            autoplay: false,
          },
          ...binding.value.animation,
        })
        binding.created(animation, value.animation)
      }
    },
  }
  nuxtApp.vueApp.directive('anime', animeDir)
  nuxtApp.vueApp.config.globalProperties.$anime = anime
})
