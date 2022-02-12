<template>
  <div
    ref="card"
    class="ar-1 card"
    :class="computedClasses"
    :data-rellax-speed="scrollSpeed"
  >
    <slot></slot>
  </div>
</template>
<script setup>
const darkMode = useState('darkMode')
const props = defineProps({
  color: {
    type: String,
    default: 'purple',
  },
  scrollSpeed: {
    type: [String, Number],
    default: '-2',
  },
  enhance: {
    type: [String, Number],
    default: 2,
  },
  lightColor: {
    type: String,
    default: '',
  },
  darkColor: {
    type: String,
    default: '',
  },
  rounded: {
    type: [String, Number],
    default: '6',
  },
  template: {
    type: String,
    default: 'default',
  },
  toggleLight: {},
})
</script>
<script>
import Rellax from 'rellax'

export default {
  data() {
    return {
      rellax: {},
    }
  },
  mounted() {
    console.log(this.$refs.card)
    this.rellax = new Rellax(this.$refs.card)
  },
  computed: {
    computedClasses() {
      return this.computeColors(
        this.template,
        this.darkMode ? 'dark' : 'light',
        this.color,
        this.enhance,
      )
    },
  },
  methods: {
    computeColors(template, mode, color, enhance) {
      let style = {
        default: {
          light: {
            default: 'pa-5 gradient-border rounded-6 bloom-2-grey-alpha-8',
            color: `background-${color}-alpha-9 background-${color}-alpha-6-gradient-bottom-right`,
            border: `background-${color}-tint-9-gradient-bottom-right-before`,
            hover: `bloom-6-${color} background-${color}-alpha-6`,
            active: ``,
          },
          dark: {
            default: 'pa-5 gradient-border rounded-6 bloom-2-grey-alpha-8',
            color: `background-${color}-alpha-9 background-${color}-alpha-6-gradient-bottom-right`,
            border: `background-${color}-tint-2-gradient-bottom-right-before`,
            hover: `bloom-6-${color} background-${color}-alpha-6`,
            active: ``,
          },
        },
      }
      return Object.entries({
        ...style[template][mode],
        ...{
          hover: style[template][mode].hover
            .split(' ')
            .map((cls) => cls.concat('-hover'))
            .join(' '),
          active: style[template][mode].active
            .split(' ')
            .map((cls) => cls.concat('-active'))
            .join(' '),
        },
      })
    },
  },
}
</script>
<style lang="scss" scoped></style>
