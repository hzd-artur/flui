<template>
  <div class="po-relative">
    <main-waves style="top 0; left: 0;"></main-waves>
    <a-row
      class="he-min-100vh my-0"
      cols="12"
      sm="11"
      md="10"
      lg="9"
      xl="8"
      justify="center"
      align="center"
      gutter="0"
    >
      <a-row
        class="ju-center al-center"
        gutter="0"
        cols="3 12"
        md="6 12"
        sm="4 12"
        lg="3 9"
      >
        <template #0>
          <div data-scroll data-scroll-speed="3">
            <logos-flui-logo
              class="bloom-1-dark-alpha-6"
              :color="{
                light: 'background-purple-tint-6',
                dark: 'background-purple-tint-4',
              }"
            ></logos-flui-logo>
          </div>
        </template>
        <template #1>
          <div
            class="pa-lg-20 di-flex fl-column ju-center al-center po-relative fs-md-9 fs-8 mb-4 text-light bloom-1-dark"
          >
            <div>Making</div>
            <div
              data-scroll
              data-scroll-speed="2"
              class="wi-100 di-flex al-center ju-center ov-hidden"
            >
              <transition-group
                tag="div"
                class="po-relative py-3 wi-100 di-flex fl-column ju-center al-center"
                name="slide-next"
              >
                <div class="po-absolute" :key="currentWord">
                  {{ currentWord }}
                </div>
                <div key="none" class="text-dark-alpha-10">
                  {{ currentWord }}
                </div>
              </transition-group>
            </div>
            <div>go fluid</div>
            <a-row
              class="mt-20 fl-wrap ju-center wi-100"
              cols="12 12 12"
              sm="6 6 6"
              md="6 6 6"
              lg="4 4 4"
            >
              <template #2>
                <a-button class="wi-100" color="purple" template="transparent">
                  <span class="fs-2">GitHub Page</span>
                </a-button>
              </template>
              <template #1>
                <a-button class="wi-100" color="purple" template="default">
                  <span class="fs-2">Why Flui?</span>
                </a-button>
              </template>
              <template #0>
                <a-button class="wi-100" color="purple" template="glassy">
                  <span class="fs-2">Documentation</span>
                </a-button>
              </template>
            </a-row>
          </div>
        </template>
      </a-row>
    </a-row>
    <a-row
      class="mx-10"
      cols="12 12"
      sm="11 11"
      md="10 10"
      lg="6 4"
      gutter="10"
      justify="center"
      align="center"
    >
      <template #0>
        <div class="fs-7 fw-4">Colorfull and animated</div>
        <div class="fs-3 fw-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </template>
      <template #1>
        <div>
          <a-input label="Type me"></a-input>
        </div>
      </template>
    </a-row>
    <!--     <div class="col-12 col-sm-10 col-md-8">
      <a-button template="gradient">asaaaaaaaaaaaad</a-button>
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
            <div v-for="type in types" class="di-flex ro-6 oy-hidden mb-3">
              <div
                v-for="value in 10"
                class="ar-1 col"
                :class="`background-${color}-${type}-${value}`"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
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
    /*    setInterval(() => {
      this.changeWord()
    }, 3000) */
  },
}
</script>
<style scoped>
.box::before {
  content: ' ';
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50px; /*1*/
  border: 10px solid transparent; /*2*/
  background-image: linear-gradient(45deg, red, blue); /*3*/
  background-origin: border-box; /*3*/
  -webkit-mask: /*4*/ linear-gradient(#fff 0 0) padding-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor; /*5'*/
  mask-composite: exclude; /*5*/
}
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
