<template>
  <div class="col">{{ cols }}</div>
</template>
<script setup>
const darkMode = useState('darkMode')
const props = defineProps({
  cols: {
    type: Number,
    default: 1,
  },
})
</script>
<script>
export default {
  mounted() {
    this.$emit('emite', 'asdddd')
  },
}
</script>
<style lang="scss" scoped></style>
