<template>
  <Header />
  <div class="container">
    <Search />
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import Search from "./components/Search.vue";
</script>

<style scoped lang="scss">
.container {
  max-width: 100vw;
  margin: 0;
  padding: 0;
  background: #e3e9ee;
}
</style>
