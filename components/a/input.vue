<template>
  <div class="a-input-box ro-5" :class="`text-${color}-lighten-3`">
    <slot name="prepend"></slot>
    <label class="a-input-label" ref="label">
      <slot name="label">
        {{ label }}
      </slot>
    </label>
    <input
      type="text"
      @focus="focus()"
      @blur="blur()"
      :class="`a-input py-3`"
      v-model="val"
    />
    <div class="a-bar ro-5 background-grey"></div>
    <transition @enter="onEnter" @leave="onLeave" :css="false">
      <div v-show="isFocused" class="a-bar ro-5 background-purple"></div>
    </transition>
    <transition @enter="enterLoading" @leave="leaveLoading" :css="false">
      <div v-show="loading" class="a-loading-bar"></div>
    </transition>
  </div>
</template>
<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: 'grey',
  },
  label: {
    type: String,
    default: '',
  },

  placeholder: {
    type: String,
    default: '',
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
    return {
      isFocused: false,
      val: this.modelValue,
      timeout: null,
    }
  },
  /*   watch: {
    val() {
      if (!this.isFocused || this.val) {
      }
       clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        this.$emit('update:modelValue', this.val)
      }, 1000)
    },
  }, */

  methods: {
    enterLoading() {},
    leaveLoading() {},
    onEnter(el, done) {
      this.$anime({
        targets: el,
        duration: 200,
        easing: 'easeOutCubic',
        opacity: [1, 1],
        width: [0, '100%'],
        complete: done,
      })
    },
    onLeave(el, done) {
      this.$anime({
        targets: el,
        duration: 200,
        easing: 'easeInCubic',
        opacity: [1, 0],
        width: ['100%', 0],
        complete: done,
      })
    },
    enterLoading(el, done) {
      this.$anime({
        targets: el,
        duration: 200,
        easing: 'easeInOutSine',

        width: [0, '100%'],
        complete: done,
      })
    },
    leaveLoading(el, done) {
      this.$anime({
        targets: el,
        duration: 1000,
        opacity: [1, 0],
        width: ['100%', 0],
        complete: done,
      })
    },
    focus() {
      if (this.val) return
      /*    this.$anime({
        targets: this.$refs.label,
        duration: 1000,
        scale: [1, 0.7],
        easing: 'linear',
        top: ['50%', 0],
        translateY: ['-50%', '-50%'],
      }) */
      this.isFocused = true
    },
    blur() {
      if (this.val) return
      /*      this.$anime({
        targets: this.$refs.label,
        duration: 1000,
        scale: [0.7, 1],
        easing: 'linear',
        top: [0, '50%'],
        translateY: ['-50%', '-50%'],
      }) */
      this.isFocused = false
    },
  },
}
</script>
<style lang="scss">
.a-input-box {
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  .a-input-label {
    z-index: -1;
    position: absolute;
    transform: translateY(-50%);
    transform-origin: center left;
    top: 50%;
  }
  .a-input-label--active {
    z-index: 1 !important;
  }
  .a-input {
    padding: 0;
    outline: none;
    appearance: none;
    background-color: transparent;
    border-style: none;
    font: inherit;
    flex: 1 1 auto;
    line-height: 20px;
    width: 100%;
    height: 100%;
  }
  .a-bar {
    position: absolute;
    height: 3px;
    z-index: -1;
  }
}
</style>
