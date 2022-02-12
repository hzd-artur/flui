<template>
  <div class="background-mask">
    <span>a</span>
  </div>
</template>
<script setup>
const props = defineProps({
  color: {
    type: String,
    default: 'grey',
  },
  size: {
    type: String,
    default: '100%',
  },
  iconStyle: {
    type: String,
    default: 'bold',
  },
  iconName: {
    type: String,
    default: 'book',
  },
  src: {
    type: String,
    default: 'url("./icons/#{$icon-style}/#{$icon-name}.svg");',
  },
})
/* */
</script>
<style lang="scss">
.background-mask {
  width: v-bind(size);
  height: auto;
  aspect-ratio: 1;
}
.background-mask {
  width: 100%;
  height: auto;
  aspect-ratio: 1;
  mask-image: v-bind(src);
  mask-size: 100%;
}
.background-mask::before {
  content: '';
  position: absolute;
  bottom: 0%;
  right: 0%;
  width: 100%;
  height: auto;
  aspect-ratio: 1;
  background-repeat: repeat;
  mask-size: 100%;
}
</style>
