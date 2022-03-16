import { defineNuxtPlugin } from '#app'

let ripple = {
  created(el, binding) {
    const circle = document.createElement('span')
    el.addEventListener('mousedown', (event) => {
      const diameter = Math.max(el.clientWidth, el.clientHeight)
      const radius = diameter / 2
      circle.style.width = circle.style.height = `${diameter}px`
      circle.classList.add('a-ripple')
      circle.style.left = `${event.layerX - radius}px`
      circle.style.top = `${event.layerY - radius}px`
      el.appendChild(circle)
    })
    el.addEventListener('animationend', () => {
      circle.parentNode && el.removeChild(circle)
    })
  },
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('ripple', ripple)
})
