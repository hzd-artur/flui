<template>
  <div class="di-flex fl-column">
    <div class="po-relative">
      <div class="zi-10 wi-100 he-100 di-flex al-center">
        <div class="row ju-center al-center">
          <div class="col-4">
            <logos-flui-logo
              :group1Class="{
                light: 'background-purple-shade-4',
                dark: 'background-purple-tint-4',
              }"
              :group2Class="{
                light: 'background-purple-shade-4',
                dark: 'background-purple-tint-4',
              }"
              :group3Class="{
                light: 'background-purple-shade-4 bloom-1-purple-shade-9',
                dark: 'background-purple-tint-4 bloom-1-purple-shade-7',
              }"
            ></logos-flui-logo>
          </div>
          <div
            class="col-12 pa-20 di-flex fl-column ju-center al-center po-relative"
          >
            <div class="fs-9 mb-4">
              Making
              <span>design</span>
              go fluid
            </div>
          </div>
          <!--   <div class="row">
            <div
              class="col-2 bloom-2-purple transition bloom-4-purple-hover ar-1 wi-100"
            >
              <a-icon
                class="background-light-alpha-7 transition background-purple-gradient-bottom-left background-purple-hover"
                src="url('logos/FluiLogo.svg')"
              ></a-icon>
            </div>
          </div> -->
        </div>
      </div>
    </div>
    <div class="row ju-center">
      <div class="col-4 px-2" v-for="color in colors">
        <a-card :color="color" scroll-speed="-3"></a-card>
      </div>
    </div>
    <div class="mt-12">
      <div class="row">
        <div v-for="color in colors" class="col-12">
          <div v-for="type in types" class="row ju-center">
            <div
              v-for="value in 10"
              class="col-1 ar-1"
              :class="`background-${color}-${type}-${value} background-${color}-alpha-9-gradient-bottom-left border-bottom-left-`"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const darkMode = useState('darkMode')
</script>
<script>
export default {
  data() {
    return {
      svg: '',
      colors: [
        'purple',
        'blue',
        'pink',
        'orange',
        'gold',
        'green',
        'cyan',
        'yellow',
        'success',
        'red',
      ],
      types: ['tint', 'shade', 'alpha', 'tone'],
    }
  },
  methods: {
    fileGetContents(filename) {
      fetch(filename)
        .then((resp) => resp.text())
        .then((data) => {
          this.svg = data
        })
    },
  },
  mounted() {
    this.fileGetContents('logos/FluiLogo.svg')
  },
}
</script>
<style scoped></style>
