<template>
  <footer
    class="py-2 mt-16"
    :class="darkMode ? 'text--grey-lighten-9' : ' text--grey-darken-5'"
  ></footer>
</template>
<script setup>
const darkMode = useState('darkMode')
</script>
