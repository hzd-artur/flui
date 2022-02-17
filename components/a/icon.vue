<template>
  <svg
    class="icon"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 24 24"
    xml:space="preserve"
  >
    <g>
      <path
        :class="`sw-${strokeWidth} stroke-${strokeColor} ${actualColor}`"
        v-anime:[animationEvent]="animate"
        :d="iconPath"
      />
    </g>
  </svg>
</template>
<script setup>
const darkMode = useState('darkMode')

const props = defineProps({
  icon: {
    type: String,
    default: 'square-rounded',
  },
  color: {
    type: String,
    default: '',
  },
  outline: {
    type: [Boolean, Number, String],
    default: false,
  },
  strokeColor: {
    type: String,
    default: '',
  },
  strokeWidth: {
    type: String,
    default: '1',
  },
  size: {
    type: [String, Number],
    default: 2,
  },
  animate: {
    type: Function,
    default: (anime) => {
      return {
        opacity: [1, 1],
        strokeDashoffset: [anime.setDashoffset, 0],
        duration: 250,
        easing: 'easeInOutSine',
      }
    },
  },
  animationEvent: {
    type: String,
    default: '',
  },
})
</script>
<script>
export default {
  data() {
    return {
      iconPath: this.$icon.get(
        this.$slots.default?.()?.[0]?.children ?? this.icon,
      ),
    }
  },
  computed: {
    fillOpacity() {
      return this.outline ? 0 : 1
    },
    actualColor() {
      return this.color
        .trim()
        .split(' ')
        .map((color) => 'background-' + color)
        .join(' ')
    },
    actualSize() {
      return isNaN(this.size) ? this.size : parseInt(this.size) * 3 * 6 + 'px'
    },
  },
}
</script>
<style lang="scss" scoped>
.icon {
  aspect-ratio: 1;
  stroke-linecap: round;
  fill-opacity: v-bind(fillOpacity);
  width: v-bind(actualSize);
  height: auto;
}
</style>
