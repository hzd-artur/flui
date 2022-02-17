<template>
  <div class="row ju-center po-relative">
    <main-waves style="top 0; left: 0;"></main-waves>

    <div class="col-12 col-sm-10 col-md-8">
      <div class="di-flex fl-column">
        <div class="di-flex he-100vh ju-center al-center">
          <div class="zi-10 wi-100 he-100 di-flex al-center">
            <div class="row ju-center al-center">
              <div class="col-4">
                <logos-flui-logo
                  class="bloom-1-dark-alpha-6"
                  :color="{
                    light: 'background-purple-tint-6',
                    dark: 'background-purple-tint-4',
                  }"
                ></logos-flui-logo>
              </div>
              <div
                class="col-8 pa-20 di-flex fl-column ju-center al-center po-relative fs-10 mb-4 text-light bloom-1-dark"
              >
                <div>Making</div>
                <div class="wi-100">
                  <transition-group
                    tag="div"
                    class="po-relative ov-hidden pb-4 di-flex fl-column ju-center al-center"
                    name="slide-next"
                  >
                    <span class="po-absolute" :key="currentWord">
                      {{ currentWord }}
                    </span>
                    <span class="text-dark-alpha-10" key="currentWord">
                      {{ currentWord }}
                    </span>
                  </transition-group>
                </div>
                <div>go fluid</div>
                <a-row
                  class="mt-20 fl-wrap ju-center wi-100"
                  cols="12 12 12"
                  md="6 6 6"
                  lg="4 4 4"
                >
                  <template #2>
                    <a-button
                      color="purple"
                      class="py-6 wi-100"
                      template="transparent"
                    >
                      <span class="fs-2">GitHub Page</span>
                    </a-button>
                  </template>
                  <template #1>
                    <a-button
                      color="purple"
                      class="py-6 wi-100"
                      template="default"
                    >
                      <span class="fs-2">Why Flui?</span>
                    </a-button>
                  </template>
                  <template #0>
                    <a-button
                      color="purple"
                      class="py-6 wi-100"
                      template="glassy"
                    >
                      <span class="fs-2">Documentation</span>
                    </a-button>
                  </template>
                </a-row>
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
        <a-icon>account</a-icon>
        <a-icon>access-point</a-icon>
        <a-icon>alert</a-icon>
        <a-icon>bluetooth</a-icon>
        <a-icon outline strokeColor="purple">check-circle</a-icon>
        <a-row
          cols="3 3 3 3 3 3 3 3 3 3"
          sm="6 6 6 6 6 6 6 6 6 6"
          lg="3 3 3 3 3 3 3 3 3 3"
        >
          <template v-for="(color, i) in colors" v-slot:[i]>
            <a-button :color="color" template="default">Click me</a-button>
          </template>
        </a-row>
        <div class="mt-12">
          <div class="row">
            <div v-for="color in colors" class="col-12">
              <div v-for="type in types" class="di-flex ro-6 ov-hidden mb-3">
                <div
                  v-for="value in 10"
                  class="ar-1 col"
                  :class="`background-${color}-${type}-${value}`"
                ></div>
              </div>
            </div>
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
      words: ['design', 'development', 'other'],
      currentWord: 'design',
      types: ['tint', 'shade', 'alpha', 'tone'],
    }
  },
  methods: {
    fun() {
      console.log(`fun`)
    },
    changeWord() {
      let nextIndex =
        this.words.findIndex((word) => word === this.currentWord) + 1
      if (nextIndex && nextIndex < this.words.length) {
        this.currentWord = this.words[nextIndex]
      } else {
        this.currentWord = this.words[0]
      }
    },
  },
  mounted() {
    setInterval(() => {
      this.changeWord()
    }, 3000)
  },
}
</script>
<style scoped>
.slide-next-enter-active,
.slide-next-leave-active {
  transition: transform 0.5s ease-in-out;
}
.slide-next-enter-from {
  transform: translate(0, 100%);
}

.slide-next-leave-to {
  transform: translate(0, -100%);
}
</style>
