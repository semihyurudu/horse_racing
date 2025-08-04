<script setup lang="ts">
  import { onMounted } from 'vue'
  import { useHorseStore } from '@/stores/horses'
  import { getHorseList } from '@/services/modules/horse.service'
  import { computed } from 'vue'
  import HorseList from '@/components/HorseList.vue'
  import { MIN_HORSE_LENGTH } from '@/constants/staticValues'
  import { useRaceStore } from '@/stores/race'
  import RaceTrack from '@/components/RaceTrack/index.vue'
  import RaceResults from '@/components/RaceResults.vue'
  import RaceProgram from '@/components/RaceProgram.vue'
  import type { Horse } from '@/types/Horse'

  const raceStore = useRaceStore()

  const currentRace = computed(() => raceStore.races[raceStore.currentRaceIndex])

  const horseStore = useHorseStore()
  const horses = computed(() => horseStore.horses)

  onMounted(async () => {
    try {
      horseStore.setLoading(true)
      const response = (await getHorseList()) as Horse[]
      horseStore.setHorses(response)
      raceStore.generateProgram(horses.value)
    } catch (error) {
      console.error('At listesi alınamadı', error)
    } finally {
      horseStore.setLoading(false)
    }
  })
</script>

<template>
  <main class="flex justify-center px-3 md:px-0 py-5">
    <div class="container">
      <div v-if="horseStore.isLoading" class="text-center">
        <div class="flex items-center justify-center h-100">
          <div
            class="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
          ></div>
        </div>
      </div>
      <div v-else>
        <div
          v-if="horses?.length >= MIN_HORSE_LENGTH"
          class="flex flex-col xl:flex-row justify-between gap-4"
        >
          <div class="w-full xl:w-1/5">
            <HorseList :horses="horses" />
          </div>
          <div v-if="currentRace?.length" class="w-full xl:w-2/5">
            <RaceTrack :horses="currentRace" />
          </div>
          <div class="w-full xl:w-2/5">
            <div class="flex flex-col sm:flex-row gap-3 w-full bg-white rounded-lg p-3">
              <RaceProgram :class="[raceStore.results.length > 0 && 'md:w-1/2']" />
              <RaceResults v-if="raceStore.results.length > 0" class="md:w-1/2" />
            </div>
          </div>
        </div>
        <div v-else class="w-full text-center text-red-700 font-semibold">
          Yarış için minimum {{ MIN_HORSE_LENGTH }} at bulunmalıdır.
        </div>
      </div>
    </div>
  </main>
</template>
