import { defineNuxtPlugin } from '#app'
let rellaxDir = {
  mounted(el, binding) {
    let ticking = false
    function scroll(options) {
      if (ticking) return
      window.requestAnimationFrame(() => {
        var maxScroll = Math.max(
          document.body.scrollHeight,
          document.body.offsetHeight,
          document.documentElement.clientHeight,
          document.documentElement.scrollHeight,
          document.documentElement.offsetHeight,
        )
        let relativePos = window.scrollY / maxScroll
        el.style.transform = `translate3d(0, ${
          relativePos * options.speed * 100
        }%, 0)`
        ticking = false
      })
      ticking = true
    }
    document.addEventListener('scroll', () => {
      scroll(binding.value)
    })

    //binding.value?.created?.(scroll)
  },
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('parallax', rellaxDir)
})
