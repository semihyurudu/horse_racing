import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUiStore = defineStore('ui', () => {
  const width = ref(window.innerWidth)
  const isMobile = computed(() => width.value < 768)

  function onResize() {
    width.value = window.innerWidth
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('resize', onResize)
  }

  return { width, isMobile }
})
