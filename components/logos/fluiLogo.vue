<template>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    class="wi-100 ov-visible sw-1 stroke-purple-tint-8"
    viewBox="0 0 112.32 112.32"
    xml:space="preserve"
  >
    <g
      :class="color[darkMode ? 'dark' : 'light']"
      v-anime="{
        fillOpacity: [0, 1],
        delay: 2000,
        duration: 2000,
        easing: 'easeInOutSine',
      }"
    >
      <g
        v-anime="{
          target: 'childNodes',
          strokeDashoffset: [$anime.setDashoffset, 0],
          delay: $anime.stagger(400, { start: 800 }),
          loop: 2,
          direction: 'alternate',
          duration: 1000,
          easing: 'easeInOutSine',
        }"
      >
        <path
          d="M56.9,62.51c-2.97,0-5.73-1.88-6.72-4.85c-1.24-3.71,0.77-7.73,4.48-8.96L90.9,36.61
   c3.71-1.23,7.73,0.77,8.96,4.48c1.24,3.71-0.77,7.73-4.48,8.96L59.14,62.14C58.39,62.39,57.64,62.51,56.9,62.51z"
        />

        <path
          d="M68.98,26.26c-2.97,0-5.73-1.88-6.72-4.85c-1.24-3.71,0.77-7.73,4.48-8.96l36.25-12.08
    c3.71-1.24,7.73,0.77,8.96,4.48c1.24,3.71-0.77,7.73-4.48,8.96L71.22,25.89C70.48,26.14,69.72,26.26,68.98,26.26z"
        />

        <path
          d="M56.9,62.51c-0.74,0-1.5-0.12-2.24-0.37c-3.71-1.24-5.72-5.25-4.48-8.96l12.08-36.25
    c1.24-3.71,5.25-5.72,8.96-4.48c3.71,1.24,5.72,5.25,4.48,8.96L63.62,57.66C62.63,60.63,59.86,62.51,56.9,62.51z"
        />

        <path
          d="M26.05,112.32c-6.3,0-12.42-2.27-17.21-6.53c-0.41-0.36-0.8-0.73-1.19-1.12c-0.4-0.4-0.77-0.79-1.12-1.19
   C0.73,96.95-1.38,87.96,0.9,79.43c2.35-8.81,8.89-15.78,17.51-18.65L68.1,44.21L51.54,93.91c-2.87,8.61-9.84,15.16-18.65,17.51
   C30.62,112.02,28.32,112.32,26.05,112.32z M45.69,66.62l-22.8,7.6c-4.08,1.36-7.18,4.67-8.29,8.86
   c-1.06,3.98-0.14,7.97,2.52,10.97c0.18,0.2,0.37,0.4,0.57,0.6c0.18,0.18,0.38,0.37,0.59,0.56c2.99,2.66,6.98,3.58,10.96,2.52
   c4.19-1.12,7.5-4.22,8.86-8.3L45.69,66.62z"
        />
      </g>
    </g>
  </svg>
</template>
<script setup>
const darkMode = useState('darkMode')

const props = defineProps({
  color: {
    type: Object,
    default: { light: 'grey', dark: 'grey' },
  },
})
</script>
<script>
export default {
  data() {
    return {
      anime: this.$anime,
    }
  },
  computed: {
    childNodes() {
      return this.$refs
    },
  },
  mounted() {
    console.log(this.$anime)
  },
}
</script>
<style lang="scss" scoped></style>
