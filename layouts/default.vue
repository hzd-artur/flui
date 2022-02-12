<template>
  <div class="app">
    <div
      class="fl-grow-1 fl-column d-flex"
      :class="
        darkMode
          ? 'background-purple-shade-9 text-purple-tint-9'
          : 'background-purple-tint-9 text-purple-shade-9'
      "
    >
      <a-header></a-header>
      <main-waves style="top 0; left: 0;"></main-waves>

      <div class="row ju-center" style="margin-top: 200px;">
        <div class="col-12 col-sm-10 col-md-8 col-lg-6">
          <slot />
        </div>
      </div>
      <a-footer></a-footer>
    </div>
  </div>
</template>
<script setup>
const darkMode = useState('darkMode', () => false)
</script>
<script>
export default {
  methods: {
    setTheme() {
      this.darkMode = !this.darkMode
      localStorage.setItem('theme', this.darkMode ? 'dark' : 'light')
    },
  },
  mounted() {
    let isDark = false

    const theme = localStorage.getItem('theme')
    if (theme) {
      if (theme === 'dark') {
        this.darkMode = true
      } else {
        this.darkMode = false
      }
    } else if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      this.darkMode = true
      localStorage.setItem('theme', 'dark')
    }
  },
}
</script>
