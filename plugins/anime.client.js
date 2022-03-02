import { defineNuxtPlugin } from '#app'
import anime from 'animejs/lib/anime.es.js'

let animeDir = {
  created(el, binding) {
    if (binding.arg) {
      let completed = false
      el.addEventListener(binding.arg, () => {
        completed = !completed

        let animation = anime({
          ...{
            targets: el,
            direction: completed ? 'reverse' : 'normal',
            complete: function (anim) {
              binding.value(anime).ended?.(anim)
            },
            begin: function (anim) {
              binding.value(anime).started?.(anim)
            },
          },
          ...binding.value(anime),
        })
      })
    }
  },
  mounted(el, binding) {
    if (!binding.arg) {
      anime({
        ...{
          targets: el,
          complete: function (anim) {
            binding.value(anime).ended?.(anim)
          },
          begin: function (anim) {
            binding.value(anime).started?.(anim)
          },
        },
        ...binding.value(anime),
      })
    }
  },
  updated(el, binding) {
    if (binding.value(anime).updateRestart) {
      anime({
        ...{
          targets: el,
          complete: function (anim) {
            binding.value(anime).ended?.(anim)
          },
          begin: function (anim) {
            binding.value(anime).started?.(anim)
          },
        },
        ...binding.value(anime),
      })
    }
  },
  destroyed(el, binding) {
    if (!binding.arg) {
      anime({
        ...{
          targets: el,
          direction: 'reverse',
          complete: function (anim) {
            binding.value(anime).ended?.(anim)
          },
          begin: function (anim) {
            binding.value(anime).started?.(anim)
          },
        },
        ...binding.value(anime),
      })
    }
  },
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('anime', animeDir)
  nuxtApp.vueApp.config.globalProperties.$anime = anime
})
