<template>
  <header
    class="po-fixed wi-100 px-10 di-flex fl-wrap al-center ju-space-between"
  >
    <div class="col-md-3 di-flex fl-grow-1 al-center h-100">
      <div class="he-100" style="width: 32px;">
        <logos-flui-logo
          :color="{
            light: 'background-purple-tint-6 bloom-1-dark-alpha-6',
            dark: 'background-purple-tint-4 bloom-1-dark-alpha-6',
          }"
        ></logos-flui-logo>
      </div>
      <div class="px-5 text--grey fw-4 fs-5">
        Flui
      </div>
    </div>
    <div class="di-flex fl-grow-1 ju-center">
      <a-button color="blue" template="transparent" rounded="0" class="mx-2">
        home
      </a-button>
      <a-button color="blue" rounded="0" template="transparent" class="mx-2">
        license
      </a-button>
      <a-button
        to="/contact-us"
        color="blue"
        rounded="0"
        template="transparent"
        class="mx-2"
      >
        contact us
      </a-button>
    </div>
    <div class="di-none di-md-flex col-md-3 my-2 fl-grow-1 al-center ju-end">
      <a-button
        rounded="10"
        mode="nav"
        color="grey"
        aspectRatio="1"
        @click="setTheme()"
      >
        aa
      </a-button>
    </div>
  </header>
</template>
<script setup>
const darkMode = useState('darkMode')
</script>
<script>
export default {
  methods: {
    setTheme() {
      this.darkMode = !this.darkMode
      localStorage.setItem('theme', this.darkMode ? 'dark' : 'light')
    },
  },
}
</script>
