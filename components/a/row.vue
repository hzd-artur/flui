<template>
  <div class="row" :class="`ma-n${gutter} ju-${justify} al-${align}`" ref="row">
    <div
      v-for="(col, name) in colList"
      :class="`pa-${gutter} col-${col.cols} ${
        col.sm ? `col-sm-${col.sm}` : ''
      } ${col.md ? `col-md-${col.md}` : ''} ${
        col.lg ? `col-lg-${col.lg}` : ''
      } ${col.xl ? `col-xl-${col.xl}` : ''}  ${col.class || ''}`"
    >
      <slot></slot>
      <slot :name="name" :col="col"></slot>
    </div>
  </div>
</template>
<script setup>
const darkMode = useState('darkMode')
const props = defineProps({
  cols: {
    type: [String, Number, Array, Object],
    default: 12,
  },
  sm: {
    type: [String, Number, Array, Object],
    default: '',
  },
  md: {
    type: [String, Number, Array, Object],
    default: '',
  },
  lg: {
    type: [String, Number, Array, Object],
    default: '',
  },
  xl: {
    type: [String, Number, Array, Object],
    default: '',
  },
  gutter: {
    type: [String, Number],
    default: 3,
  },
  justify: {
    type: String,
    default: 'start',
  },
  align: {
    type: String,
    default: 'start',
  },
})
</script>
<script>
export default {
  data() {
    return {
      colList: [],
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
        let sm = this.sm.toString().split(' ')
        let md = this.md.toString().split(' ')
        let lg = this.lg.toString().split(' ')
        let xl = this.xl.toString().split(' ')
        return item
          .toString()
          .split(' ')
          .map((col, i) => ({
            cols: col,
            sm: sm[i],
            md: md[i],
            lg: lg[i],
            xl: xl[i],
          }))
      }
    },
  },
  created() {
    this.colList = this.transform(this.cols)
  },
}
</script>
