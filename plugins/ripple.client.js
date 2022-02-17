import { defineNuxtPlugin } from '#app'

let ripple = {
  created(el, binding) {
    el.addEventListener('click', (event) => {
      const circle = document.createElement('span')
      const diameter = Math.max(el.clientWidth, el.clientHeight)
      const radius = diameter / 2
      circle.style.width = circle.style.height = `${diameter}px`
      circle.style.left = `${event.layerX - radius}px`
      circle.style.top = `${event.layerY - radius}px`
      circle.classList.add('a-ripple')
      const ripple = el.getElementsByClassName('a-ripple')[0]

      if (ripple) {
        ripple.remove()
      }
      el.appendChild(circle)
    })
  },
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('ripple', ripple)
})
