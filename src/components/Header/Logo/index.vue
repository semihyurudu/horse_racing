<script setup lang="ts">
  defineOptions({
    name: 'AppLogo',
  })

  import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <RouterLink to="/">
      <img src="@/assets/logo.svg" alt="Logo" class="mx-auto h-9 md:h-12" />
    </RouterLink>
  </div>
</template>
