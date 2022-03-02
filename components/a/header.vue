<template>
  <header
    class="po-fixed wi-100 px-md-10 px-2 di-flex fl-wrap al-center ju-space-between"
  >
    <div class="col-3 di-flex fl-grow-1 al-center h-100">
      <div class="he-100" style="width: 32px;">
        <logos-flui-logo
          :color="{
            light: 'background-purple-tint-6 bloom-1-dark-alpha-6',
            dark: 'background-purple-tint-4 bloom-1-dark-alpha-6',
          }"
        ></logos-flui-logo>
      </div>
      <div class="px-5 text-purple-tint-8 fw-4 fs-5">
        Flui
      </div>
    </div>
    <div class="di-flex fl-grow-1 ju-center">
      <a-button
        @click="$router.push('/')"
        color="purple"
        template="transparent"
        rounded="0"
        class="mx-2"
      >
        home
      </a-button>
      <a-button color="purple" rounded="0" template="transparent" class="mx-2">
        license
      </a-button>
      <a-button
        @click="$router.push('playground')"
        color="purple"
        rounded="0"
        template="transparent"
        class="mx-2"
      >
        contact us
      </a-button>
    </div>
    <div class="col-md-3 di-flex my-2 fl-grow-1 al-center ju-end">
      <a-button
        rounded="10"
        template="transparent"
        color="grey"
        aspectRatio="1"
        @click="setTheme()"
      >
        <a-icon
          size="22px"
          :icon="darkMode ? 'brightness-7' : 'brightness-2'"
          :color="darkMode ? 'light' : 'dark'"
        ></a-icon>
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
