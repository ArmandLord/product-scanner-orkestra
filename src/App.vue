<template>
  <Header msg="Hello Vue 3 + Vite" />
  <div class="container"></div>
</template>

<script setup>
import Header from "./components/Header.vue";
</script>

<style scoped lang="scss">
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  background: red;
}
</style>
