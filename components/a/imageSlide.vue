<template>
  <div class="p-relative h-100 w-100 d-flex al-md-center ju-center">
    <transition-group :css="false" @before-enter="beforeEnter" name="slider">
      <div
        v-for="img in imagesCmp"
        :key="img.src"
        @click="setImageOrder(img.index)"
        class="image ro-3"
        :style="img.style"
      ></div>
    </transition-group>

    <div class="image-slider">
      <div
        v-for="(img, i) in images"
        :key="i"
        @click="setImageOrder(i)"
        :class="`slider-dot${i === val ? '-active' : ''}`"
      ></div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  //currently active/shown image index
  modelValue: {
    type: [Number, String],
    default: 0,
  },
  images: {
    type: Array,
    default: () => [],
  },
})
</script>
<script>
export default {
  data() {
    return {
      val: this.modelValue,
      imagesCmp: [
        ...this.images.map((image, i) => ({
          src: image,
          index: i,
          style: this.getStyle(image, i),
        })),
      ],
    }
  },
  watch: {
    val() {
      this.$emit('update:modelValue', this.val)
    },
    modelValue() {
      this.val = this.modelValue
      this.setImageOrder(this.val)
    },
  },

  methods: {
    setImageOrder(index) {
      let image = this.imagesCmp.splice(
        this.imagesCmp.findIndex((img) => img.index === index),
        1,
      )
      this.imagesCmp.unshift(image[0])
      this.imagesCmp = this.imagesCmp.map((image, index) => ({
        ...image,
        ...{ style: this.getStyle(image.src, index) },
      }))
      this.val = index
    },
    getStyle(image, index) {
      return {
        'background-image': `linear-gradient(to right, rgba(0,0,0, ${
          index * 33
        }%), rgba(0,0,0, ${index * 33}%)), url(${image})`,
        'z-index': 10 - index,
        left: `${index * -(18 - index * 2)}px`,
        transform: `scale(${1 / (index / 3 + 1)}) `,
      }
    },
  },
}
</script>
<style lang="scss">
.image-slider {
  position: absolute;
  width: 100%;
  bottom: 60px;
  display: flex;
  justify-content: center;
}
.slider-dot {
  margin: 6px;
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background-color: #ffffff55;
  &-active {
    background-color: #ffffff;
  }
}
.slider-dot-active {
  margin: 6px;
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background-color: #ffffff;
}
.image {
  transition: all 0.25s ease-in 10ms;
  opacity: 1;
  position: absolute;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  transform-origin: center left;
  height: auto;
  aspect-ratio: 1.77;
  width: 100%;
}

.slider-move {
  position: absolute;
  transform: translate(20%) rotate(4deg);
}
</style>
