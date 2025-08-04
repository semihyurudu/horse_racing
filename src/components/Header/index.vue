<script setup lang="ts">
  defineOptions({
    name: 'HeaderComponent',
  })

  import Logo from './Logo/index.vue'
  import { useRoute } from 'vue-router'
  import { useHorseStore } from '@/stores/horses'
  import { useRaceStore } from '@/stores/race'
  import { toast, type ToastOptions } from 'vue3-toastify'
  import { resetRaces } from '@/utils/raceUtils'

  const route = useRoute()
  const horseStore = useHorseStore()

  const raceStore = useRaceStore()

  function handleRaceButton() {
    if (
      !raceStore.isRaceInProgress &&
      !raceStore.isRacePaused &&
      raceStore.currentRaceIndex >= raceStore.races.length - 1
    ) {
      raceStore.results = []
      raceStore.races = resetRaces(raceStore.races)
      raceStore.currentRaceIndex = 0
      raceStore.startRace()
      toast('The race was restarted!', { type: 'info' } as ToastOptions)
      return
    } else if (raceStore.isRaceInProgress) {
      raceStore.pauseRace()
      toast('Race paused!', { type: 'info' } as ToastOptions)
      return
    }
    raceStore.startRace()
    toast('The race has begun!', { type: 'success' } as ToastOptions)
  }

  function handleGenerate() {
    if (raceStore.isRaceInProgress && !raceStore.isRacePaused) return
    raceStore.generateProgram(horseStore.horses)
    toast('New program generated!', { type: 'info' } as ToastOptions)
  }
</script>

<template>
  <header class="header flex justify-center px-3 md:px-0 py-4 border-b border-gray-300">
    <div class="container flex justify-between items-center">
      <Logo />
      <div v-if="route.name === 'home'" class="flex items-center gap-4">
        <button
          @click="handleGenerate"
          :disabled="raceStore.isRaceInProgress && !raceStore.isRacePaused"
          class="px-4 py-2 border border-blue-900 text-blue-900 rounded hover:bg-blue-900 hover:text-white transition cursor-pointer flex gap-2 items-center"
        >
          <font-awesome-icon icon="repeat" />
          <template class="hidden md:inline"> Generate Program </template>
        </button>
        <button
          @click="handleRaceButton"
          class="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800 transition cursor-pointer flex gap-2 items-center"
        >
          <font-awesome-icon
            :icon="
              !raceStore.isRaceInProgress &&
              !raceStore.isRacePaused &&
              raceStore.currentRaceIndex >= raceStore.races.length - 1
                ? 'refresh'
                : raceStore.isRaceInProgress
                  ? 'pause'
                  : 'play'
            "
          />
          <template class="hidden md:inline">
            <span
              v-if="
                !raceStore.isRaceInProgress &&
                !raceStore.isRacePaused &&
                raceStore.currentRaceIndex >= raceStore.races.length - 1
              "
              >Restart Race</span
            >
            <span v-else-if="raceStore.isRaceInProgress">Pause</span>
            <span v-else>Start Race</span>
          </template>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
