<script setup lang="ts">
  defineProps<{
    horse: {
      name: string
      color: string
    }
  }>()
</script>

<template>
  <div class="flex flex-row items-center gap-2 truncate">
    <div
      class="w-3 h-3 rounded-full shrink-0"
      :style="{ backgroundColor: horse.color }"
      title="Horse Color"
    ></div>
    {{ horse.name }}
  </div>
</template>
