<template>
  <div class="a-input-box ro-5" :class="`text-${color}-lighten-3`">
    <slot name="prepend"></slot>
    <label
      class="a-input-label"
      :class="isFocused || val ? 'a-input-label--active' : ''"
    >
      <slot name="label">
        {{ label }}
      </slot>
    </label>
    <input
      type="text"
      :placeholder="placeholder"
      @focus="focus()"
      @blur="blur()"
      :class="`a-input py-3`"
      v-model="val"
    />
    <div
      class="a-bar ro-5 background-grey background-grey-shade-6-gradient-bottom-left"
    ></div>
    <transition @enter="onEnter" @leave="onLeave" :css="false">
      <div
        v-if="isFocused"
        class="a-bar ro-5 background-purple background-purple-shade-6-gradient-bottom-left"
      ></div>
    </transition>
    <transition @enter="enterLoading" @leave="leaveLoading" :css="false">
      <div v-if="loading" class="a-loading-bar"></div>
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
  watch: {
    val() {
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        this.$emit('update:modelValue', this.val)
      }, 1000)
    },
  },

  methods: {
    enterLoading() {},
    leaveLoading() {},
    onEnter(el, done) {
      console.log('enter')
      this.$anime({
        targets: el,
        duration: 200,
        easing: 'easeInOutSine',
        width: [0, '100%'],
        complete: done,
      })
    },
    onLeave(el, done) {
      console.log('leave')
      this.$anime({
        targets: el,
        duration: 200,
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
      this.isFocused = true
    },
    blur() {
      this.isFocused = false
    },
  },
}
</script>
<style lang="scss">
.a-input-box {
  position: relative;
  display: flex;
  align-items: center;
  .a-input-label {
    z-index: -1;
    transition: all 0.2s cubic-bezier(0.25, 0.8, 0.5, 1);
    position: absolute;
  }
  .a-input-label--active {
    position: absolute;
    z-index: 1 !important;
    transform-origin: center left;
    transform: translate3d(0%, -50%, 0) scale(0.7);
    top: 0;
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
    height: 4px;
    z-index: -1;
    width: 100%;
    bottom: 0;
    left: 0;
  }
}
</style>
