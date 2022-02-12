<template>
  <button
    class="a-button text-decoration-none"
    :class="componentClasses.button + ' ' + buttonClass"
    @mousedown="click($event)"
  >
    <div
      :class="componentClasses.content + ' ' + contentClass"
      class="a-button-content"
    >
      <slot />
      <div
        v-if="nav && active"
        class="nav-line"
        :class="`${color}-lighten-1`"
      ></div>
    </div>
  </button>
</template>
<script setup>
const darkMode = useState('darkMode')
const props = defineProps({
  color: {
    type: String,
    default: 'grey',
  },
  mode: {
    type: String,
    default: 'default',
  },
  width: {
    type: String,
    default: '0px',
  },
  nav: {
    type: Boolean,
    default: false,
  },
  aspectRatio: {
    type: [String, Number],
    default: 'unset',
  },
  rounded: {
    type: String,
    default: '2',
  },
  padding: {
    type: String,
    default: '8px',
  },
  dark: {
    type: Boolean,
    default: false,
  },
  active: {
    type: Boolean,
    default: false,
  },
  to: {
    type: String,
    default: '',
  },
  buttonClass: {
    type: String,
    default: '',
  },
  contentClass: {
    type: String,
    default: '',
  },
})
</script>
<script>
export default {
  data() {
    return {
      componentClasses: {
        button: '',
        content: '',
      },
    }
  },
  methods: {
    generateClass() {
      return {
        light: {
          select: {
            button: `gradient-border rounded-${this.rounded}  
                       bloom-9-${this.color}-glassy-9-hover
                       bloom-9-${this.color}-glassy-8-active`,
            content: `fw-2 fs-2 text--${this.color}-lighten-10 ${this.color}-darken-6
                        ${this.color}-lighten-2-hover
                        ${this.color}-lighten-4-active`,
          },
          radio: {
            button: `rounded-${this.rounded}
              ${
                this.active
                  ? `border-${this.color} bloom-9-${this.color}-glassy-9 `
                  : ''
              } 
              bloom-9-${this.color}-glassy-9-hover
              ${this.color}-lighten-8-hover 
              border-${this.color}-active bloom-9-${
              this.color
            }-glassy-9-active`,
            content: `${
              this.active
                ? `text--${this.color}-darken-5 ${this.color}-lighten-7`
                : `${this.color}-lighten-9 text--${this.color}-pale-9`
            }
              text--${this.color}-darken-6-hover  ${this.color}-lighten-8-hover 
              text--${this.color}-darken-5-active ${
              this.color
            }-lighten-7-active`,
          },
          nav: {
            button: `rounded-${this.rounded}
           bloom-9-${this.color}-glassy-9-hover `,
            content: `
            ${
              this.active
                ? ` fw-3 fs-2 text--grey-darken-10 `
                : 'fw-2 fs-2 text--grey '
            } 
            
          
              text--${this.color}-darken-3-hover ${this.color}-lighten-10-hover 
              text--${this.color}-darken-9-active`,
          },
          flat: {
            button: `rounded-${this.rounded}
              gradient-border-hover bloom-9-${this.color}-glassy-9-hover
              `,
            content: `fw-1 text--${this.color}-darken-2 ${this.color}-glassy-9
              text--${this.color}-darken-3-hover ${this.color}-lighten-10-hover
              text--${this.color}-darken-5-active`,
          },

          default: {
            button: `grey-lighten-2-gradient-top-left rounded-${this.rounded}
              bloom-9-${this.color}-glassy-9-hover `,
            content: `text--grey-lighten-10 ${this.color}-glassy-3
              text--${this.color}-lighten-5-hover ${this.color}-glassy-1-hover
              text--${this.color}-lighten-5-active ${this.color}-glassy-1-active`,
          },
          filled: {
            button: `gradient-border bloom-9-${this.color}-glassy-9 rounded-${this.rounded}
              bloom-9-${this.color}-glassy-6-hover ${this.color}-darken-1-hover`,
            content: `text--${this.color}-lighten-9 ${this.color}
              text--${this.color}-lighten-5-hover ${this.color}-darken-1-hover
              text--${this.color}-lighten-5-active ${this.color}-lighten-2-active`,
          },
        },
        dark: {
          select: {
            button: `gradient-border rounded-${this.rounded}
              bloom-9-${this.color}-glassy-9-hover
              bloom-9-${this.color}-glassy-9-active`,
            content: `fw-2  fs-2 text--${this.color}-lighten-10 ${this.color}-darken-4
              text--${this.color}-lighten-10-hover  ${this.color}-darken-6-hover
              text--${this.color}-lighten-9-active`,
          },
          radio: {
            button: `rounded-${this.rounded} 
            ${
              this.active
                ? `bloom-9-${this.color}-glassy-9 gradient-border `
                : ``
            }
              bloom-9-${this.color}-glassy-9-hover
              bloom-9-${this.color}-glassy-9-active
              gradient-border-active`,
            content: `${
              this.active
                ? `text--${this.color}-lighten-9 ${this.color}-darken-1 `
                : `grey-darken-6 text--${this.color}-lighten-9`
            }
              text--${this.color}-lighten-9-hover ${this.color}-darken-6-hover
              text--${this.color}-lighten-9-active ${
              this.color
            }-darken-1-active`,
          },
          nav: {
            button: `rounded-${this.rounded}
              bloom-9-${this.color}-glassy-9-hover`,
            content: `${
              this.active
                ? ` fw-3 fs-2 text--grey-lighten-10 `
                : 'fw-2 fs-2 text--grey '
            } 
              text--${this.color}-lighten-8-hover ${this.color}-darken-9-hover
              text--${this.color}-lighten-9`,
          },
          flat: {
            button: `rounded-${this.rounded}
                gradient-border-hover bloom-9-${this.color}-glassy-9-hover`,
            content: `fw-1 text--${this.color}-lighten-8 
                text--${this.color}-lighten-8-hover ${this.color}-darken-4-hover
                text--${this.color}-lighten-9-active`,
          },

          default: {
            button: `grey-lighten-2-gradient-top-left rounded-${this.rounded}
              bloom-9-${this.color}-glassy-9-hover `,
            content: `text--grey-lighten-10 ${this.color}-glassy-3
              text--${this.color}-lighten-5-hover ${this.color}-glassy-1-hover
              text--${this.color}-lighten-5-active ${this.color}-glassy-1-active`,
          },
          filled: {
            button: `gradient-border bloom-9-${this.color}-glassy-9 rounded-${this.rounded}
              bloom-9-${this.color}-glassy-6-hover`,

            content: `text--${this.color}-lighten-8 ${this.color}
              text--${this.color}-lighten-8-hover ${this.color}-lighten-1-hover
              text--${this.color}-lighten-10-active ${this.color}-darken-2-active`,
          },
        },
      }
    },
    click(e) {
      if (this.to) {
        this.$router.push(this.to)
      }
      this.ripple(e)
    },

    ripple(event) {
      const button = event.srcElement
      const circle = document.createElement('span')
      const diameter = Math.max(button.clientWidth, button.clientHeight)
      const radius = diameter / 2
      circle.style.width = circle.style.height = `${diameter}px`
      circle.style.left = `${event.layerX - radius}px`
      circle.style.top = `${event.layerY - radius}px`
      circle.classList.add('a-ripple')
      const ripple = button.getElementsByClassName('a-ripple')[0]

      if (ripple) {
        ripple.remove()
      }
      button.appendChild(circle)
    },
  },
  watch: {
    active() {
      this.componentClasses = this.generateClass()[
        this.darkMode || this.dark ? 'dark' : 'light'
      ][this.mode]
    },
    darkMode() {
      this.componentClasses = this.generateClass()[
        this.darkMode || this.dark ? 'dark' : 'light'
      ][this.mode]
    },
    rounded() {
      this.componentClasses = this.generateClass()[
        this.darkMode || this.dark ? 'dark' : 'light'
      ][this.mode]
    },
    color() {
      this.componentClasses = this.generateClass()[
        this.darkMode || this.dark ? 'dark' : 'light'
      ][this.mode]
    },
  },
  mounted() {
    this.componentClasses = this.generateClass()[
      this.darkMode ? 'dark' : 'light'
    ][this.mode]
  },
}
</script>
<style lang="scss" scoped>
.a-button {
  padding: 0px !important;
  position: relative;
  user-select: none;
  overflow: hidden;
  outline: none;
  border-width: 0px;
  background-color: transparent;
  height: auto;
  min-width: v-bind(width);
  aspect-ratio: v-bind(aspectRatio);

  .a-button-content {
    overflow: hidden;
    box-sizing: border-box;
    padding: v-bind(padding);
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: v-bind(aspectRatio);
  }

  font-size: 0.8rem;
  line-height: 2.25rem;
  letter-spacing: 0.09em;
  font-family: 'Poppins';
  font-weight: 400;
  text-transform: capitalize;

  &:hover {
    transform: translateY(-2px);
  }
}

.nav-line {
  width: 20%;
  position: absolute;
  bottom: 4px;
  left: 8px;
  height: 3px;
  border-radius: 9999px;
  transform-origin: 0 50% 0;
  animation: expand-x 0.2s ease-out;
}
</style>
