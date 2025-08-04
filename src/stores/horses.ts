import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Horse } from '@/types/Horse'

export const useHorseStore = defineStore('horses', () => {
  const horses = ref<Horse[]>([])
  const isLoading = ref(false)

  const horseCount = computed(() => horses.value.length)

  function setHorses(data: Horse[]) {
    horses.value = data
  }

  function setLoading(value: boolean) {
    isLoading.value = value
  }

  return {
    horses,
    isLoading,
    horseCount,
    setHorses,
    setLoading,
  }
})
