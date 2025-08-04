<script setup lang="ts">
  import { ref, computed, watch } from 'vue'
  import { useRaceStore } from '@/stores/race'
  import { useUiStore } from '@/stores/ui'

  import HorseName from '@/components/HorseName.vue'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  defineProps<{
    horses: Array<{
      id: number
      name: string
      condition: number
      color: string
    }>
  }>()

  const raceStore = useRaceStore()
  const uiStore = useUiStore()
  const isOpen = ref(!uiStore.isMobile)

  const highlightedHorseIds = computed(() => {
    if (!raceStore.isRaceInProgress) return []

    const currentRace = raceStore.races[raceStore.currentRaceIndex]
    if (!currentRace || !Array.isArray(currentRace)) return []
    return currentRace.map((h: { id: number }) => h.id)
  })

  watch(
    () => uiStore.isMobile,
    val => {
      isOpen.value = !val
    },
  )

  const toggleOpen = () => {
    isOpen.value = !isOpen.value
  }
</script>

<template>
  <div class="overflow-x-auto bg-white px-4 pt-2 rounded-lg">
    <h3
      class="w-full pt-1 pb-3 text-center text-lg font-extrabold text-blue-900 flex gap-2 items-center justify-center cursor-pointer"
      @click="toggleOpen"
    >
      Horse List (1 - {{ horses.length }})
      <font-awesome-icon :icon="isOpen ? 'angle-up' : 'angle-down'" />
    </h3>

    <div v-show="isOpen" class="w-full !mt-2 inline-block pb-1">
      <table class="min-w-full divide-y divide-gray-200 border-t border-gray-100 text-xs">
        <thead>
          <tr>
            <th class="px-4 py-1 text-left font-semibold text-gray-700">Name</th>
            <th class="px-4 py-1 text-left font-semibold text-gray-700">Condition</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <tr
            v-for="(horse, horseIndex) in horses"
            :key="horseIndex"
            :class="['hover:bg-gray-50', highlightedHorseIds.includes(horse.id) && 'highlight-row']"
          >
            <td class="px-4 py-2 text-gray-800">
              <HorseName :horse="horse" />
            </td>
            <td class="px-4 py-2 text-gray-800">{{ horse.condition }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
  .highlight-row {
    background-color: #ecfdec;
    animation: fadePulse 1s infinite;
  }

  @keyframes fadePulse {
    0% {
      background-color: #ecf2ec;
    }
    50% {
      background-color: #eafdea;
    }
    100% {
      background-color: #ecfdec;
    }
  }
</style>
