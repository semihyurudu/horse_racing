<script setup lang="ts">
  import Header from './components/Header/index.vue'
  import Footer from './components/Footer/index.vue'
</script>

<template>
  <Header />
  <RouterView class="pb-25" />
  <Footer />
</template>

<style scoped></style>
