<template>
  <div
    class="row"
    :class="darkMode ? 'text--grey-lighten-9' : ' text--grey-darken-5'"
    ref="row"
  >
    <slot name="test" :cols="cols">
      <div>
        <div class="asddd">asdasdas</div>
      </div>
    </slot>
  </div>
</template>
<script setup>
const darkMode = useState('darkMode')
const props = defineProps({
  cols: {
    type: [String, Number, Array, Object],
    default: 12,
  },
  maxCols: {
    type: [String, Number],
    default: 12,
  },
})
</script>
<script>
export default {
  data() {
    return {
      colsList: [],
    }
  },
  methods: {
    transform(item) {
      if (!item) {
        return
      }

      if (typeof item === 'object') {
        if (Array.isArray(item)) {
          // Item is an Array
          return item.map((col) =>
            typeof item === 'object' ? item : { cols: col },
          )
        } else {
          // Item is an Object
          return item
        }
      } else {
        // Item is a string
        // we are transforming an array of items into an usable array
        return item
          .toString()
          .split(' ')
          .map((col) => ({ cols: col }))
      }

      console.log(evt)
    },
  },
  mounted() {
    console.log(this.$refs.row)
  },
}
</script>
<style scoped>
.v-bind(x) {
  color: blue;
}
</style>
