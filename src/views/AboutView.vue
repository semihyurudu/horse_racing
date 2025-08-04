<script setup lang="ts">
  import TechnicalDetails from '@/components/About/TechnicalDetails.vue'
  import ProjectDetails from '@/components/About/ProjectDetails.vue'
</script>

<template>
  <main class="flex justify-center px-3 md:px-0 py-5">
    <div class="container flex flex-col gap-6">
      <TechnicalDetails />
      <ProjectDetails />
    </div>
  </main>
</template>
