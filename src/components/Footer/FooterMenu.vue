<script setup lang="ts">
  import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="flex gap-4">
    <RouterLink to="/" class="text-blue-900">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>
</template>
