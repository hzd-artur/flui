import { defineNuxtPlugin } from '#app'
import anime from 'animejs/lib/anime.es.js'

// let animeDir = {}
export default defineNuxtPlugin((nuxtApp) => {
  let animeDir = {
    created(el, binding) {
      let targets
      console.log(binding.value.target)
      if (typeof binding.value.target === 'string') {
        targets = el[binding.value.target]
      } else {
        targets = el
      }
      let animation = anime({
        ...{
          targets,
          autoplay: false,
        },
        ...binding.value,
      })

      if (!binding.arg) {
        animation.play()
      } else {
        el.addEventListener(binding.arg, () => {
          animation.play()
        })
      }
    },
  }
  nuxtApp.vueApp.directive('anime', animeDir)
  nuxtApp.vueApp.config.globalProperties.$anime = anime
})
