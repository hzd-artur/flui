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

      <slot />

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
