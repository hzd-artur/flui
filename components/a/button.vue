<template>
  <button class="a-button" v-ripple :class="computedClasses">
    <div class="a-button-content">
      <slot></slot>
    </div>
  </button>
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
})
</script>
<script>
export default {
  data() {
    return {
      rellax: {},
    }
  },

  computed: {
    computedClasses() {
      return this.computeColors(
        this.template,
        this.darkMode ? 'dark' : 'light',
        this.color,
        this.size,
        this.rounded,
      )
    },
  },
  methods: {
    computeColors(template, mode, color, size, rounded) {
      let style = {
        default: {
          light: {
            bloom: `bloom-1-dark-alpha-7 bloom-4-${color}-hover bloom-2-${color}-active`,
            textColor: `text-${color}-tint-8 text-light-hover`,
            backgroundColor: `background-${color}`,
            border: `background-${color}-tint-5-gradient-top-left background-${color}-shade-5`,
            hover: `bloom-4-${color} background-${color}-alpha-6 `,
          },
          dark: {
            bloom: `bloom-2-dark-alpha-7 bloom-4-${color}-hover bloom-2-${color}-active`,
            textColor: `text-${color}-tint-8 text-light-hover`,
            backgroundColor: `background-${color}`,
            border: `background-${color}-tint-5-gradient-top-left background-${color}-shade-5`,
            hover: ` background-${color}-alpha-6 text-light`,
          },
        },
        gradient: {
          light: {
            bloom: `bloom-1-dark-alpha-7 bloom-4-${color}-hover bloom-2-${color}-active`,
            textColor: `text-${color}-tint-8 text-light-hover`,
            backgroundColor: `background-${color}-tint-5-gradient-top-left background-${color}-shade-5`,
            border: ``,
            hover: `bloom-4-${color} background-${color}-alpha-6 `,
          },
          dark: {
            bloom: `bloom-2-dark-alpha-7 bloom-4-${color}-hover bloom-2-${color}-active`,
            textColor: `text-${color}-tint-8 text-light-hover`,
            backgroundColor: `background-${color}-tint-4-gradient-top-left background-${color}-shade-4`,
            hover: ` background-${color}-alpha-6 text-light`,
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
          default: `pa-${size} ro-${rounded} fw-4`,
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
.a-button {
  user-select: none;
  transition: all 0.25s ease;
  &:hover {
    transform: translate3D(0, -2px, 0);
  }
  backdrop-filter: blur(4px);
}
.a-button-content {
  display: flex;
  text-decoration: none;
  text-shadow: none;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  position: relative;
}
</style>
