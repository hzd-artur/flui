<template>
  <div class="a-card" :class="computedClasses">
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
  rounded: {
    type: [String, Number],
    default: '4',
  },
  size: {
    type: [String, Number],
    default: '5',
  },
  template: {
    type: String,
    default: 'default',
  },
  loading: {
    type: [Boolean, Number, String],
    default: true,
  },
})
</script>
<script>
export default {
  data() {
    return {}
  },

  computed: {
    computedClasses() {
      return this.computeColors(
        this.template,
        this.darkMode ? 'dark' : 'light',
        this.color,
        this.rounded,
      )
    },
  },

  methods: {
    computeColors(template, mode, color, rounded) {
      let style = {
        default: {
          light: {
            bloom: `bloom-1-dark-alpha-7 bloom-4-${color}-hover bloom-2-${color}-active`,
            textColor: `text-${color}-tint-8 text-light-hover`,
            backgroundColor: `background-${color}`,
            border: `background-${color}-tint-9-gradient-top-left background-${color}-shade-5`,
          },
          dark: {
            bloom: `bloom-2-dark-alpha-7 bloom-4-${color}-hover bloom-2-${color}-active`,
            textColor: `text-${color}-tint-8 text-light-hover`,
            backgroundColor: `background-${color}`,
            border: `background-${color}-tint-5-gradient-top-left background-${color}-shade-5`,
          },
        },
        gradient: {
          light: {
            bloom: `bloom-1-dark-alpha-7 bloom-4-${color}-hover bloom-2-${color}-active`,
            textColor: `text-${color}-tint-8 text-light-hover`,
            backgroundColor: `background-${color}-tint-5-gradient-top-left background-${color}-shade-5`,
            border: ``,
          },
          dark: {
            bloom: `bloom-2-dark-alpha-7 bloom-4-${color}-hover bloom-2-${color}-active`,
            textColor: `text-${color}-tint-8 text-light-hover`,
            backgroundColor: `background-${color}-tint-4-gradient-top-left background-${color}-shade-4`,
          },
        },
        glassy: {
          light: {
            textColor: `text-${color}-shade-5 text-dark-hover`,
            backgroundColor: `background-${color}-alpha-9`,
            border: `background-${color}-tint-3-gradient-top-left background-${color}-alpha-7`,
          },
          dark: {
            bloom: `bloom-2-dark-alpha-7 bloom-4-${color}-hover bloom-2-${color}-active`,
            textColor: `text-${color}-tint-9 text-light-hover`,
            backgroundColor: `background-${color}-alpha-9`,
            border: `background-${color}-alpha-5-gradient-top-left background-${color}-shade-5`,
          },
        },
        transparent: {
          light: {
            bloom: `bloom-1-dark-alpha-7 bloom-3-${color}-hover`,
            textColor: `text-${color}-shade-5 text-dark-hover`,
            backgroundColor: `background-${color}-alpha-10 background-${color}-alpha-8-hover background-${color}-alpha-6-active `,
          },
          dark: {
            bloom: `bloom-2-dark-alpha-7 bloom-4-${color}-hover bloom-2-${color}-active`,
            textColor: `text-${color}-tint-5 text-light-hover`,
            backgroundColor: `background-${color}-alpha-10 background-${color}-alpha-8-hover background-${color}-alpha-6-active `,
          },
        },
      }

      return Object.values({
        ...style[template][mode],
        ...{
          default: `ro-${rounded} fw-4`,
          border: style[template][mode].border
            ? 'gradient-border ' +
              style[template][mode].border
                .split(' ')
                .map((cls) => cls.concat('-before'))
                .join(' ')
            : '',
        },
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.a-card {
  transition: 0.4s all ease-in;
}
</style>
