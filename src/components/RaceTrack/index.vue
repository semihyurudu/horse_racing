<script setup lang="ts">
  defineOptions({
    name: 'RaceTrack',
  })

  import Lane from './Lane.vue'
  import { useRaceStore } from '@/stores/race.ts'
  import { onUnmounted } from 'vue'
  import { clearRaceInterval } from '@/utils/ClearRaceInterval.ts'
  import { RACE_DISTANCES } from '@/constants/staticValues'

  defineProps<{
    horses: {
      name: string
      color: string
      position: number
    }[]
  }>()

  const raceStore = useRaceStore()

  onUnmounted(() => {
    clearRaceInterval(raceStore)
    raceStore.isRaceInProgress = false
  })
</script>

<template>
  <div class="bg-white rounded-md relative">
    <div class="flex">
      <div class="w-full">
        <div
          v-for="(horse, index) in horses"
          :key="index"
          class="w-full border-dashed border-gray-200 relative border-b-3"
        >
          <Lane :horse="horse" :lane="index + 1" />
        </div>
      </div>
      <div class="border-l-3 border-blue-900 opacity-50 w-16"></div>
    </div>
    <div class="flex justify-between items-center py-3 sm:py-7 text-sm sm:text-lg">
      <div class="pr-2 text-center font-extrabold w-full text-blue-900">
        Lap {{ raceStore.currentRaceIndex + 1 }} - {{ RACE_DISTANCES[raceStore.currentRaceIndex] }}m
      </div>
      <div class="text-blue-900 w-28 pl-3 font-extrabold">FINISH</div>
    </div>
  </div>
</template>
