import { defineStore } from 'pinia'
import { MAX_RACE, MIN_HORSE_LENGTH, RACE_DISTANCES } from '@/constants/staticValues'
import { calculateHorseSpeed } from '@/utils/RaceLogic'
import { toast, type ToastOptions } from 'vue3-toastify'
import type { Horse } from '@/types/Horse'
import { clearRaceInterval } from '@/utils/ClearRaceInterval.ts'

export const useRaceStore = defineStore('race', {
  state: () => ({
    races: [] as Horse[][],
    currentRaceIndex: 0,
    results: [] as Horse[][],
    isRaceInProgress: false,
    isRacePaused: false,
    raceInterval: null as ReturnType<typeof setInterval> | null,
  }),

  actions: {
    resetRaceState() {
      clearRaceInterval(this)
      this.isRaceInProgress = false
      this.isRacePaused = false
    },

    generateProgram(allHorses: Horse[]) {
      this.races = []
      for (let i = 0; i < MAX_RACE; i++) {
        const shuffled = [...allHorses].sort(() => 0.5 - Math.random())
        const selected = shuffled.slice(0, MIN_HORSE_LENGTH).map(horse => ({
          ...horse,
          position: 0,
          finishedAt: null,
          finishTime: null,
          totalActiveTime: 0,
          activeStartTime: null,
        }))
        this.races.push(selected)
      }
      this.currentRaceIndex = 0
      this.results = []
      this.resetRaceState()
    },

    startRace() {
      if (this.currentRaceIndex >= this.races.length) return

      if (this.isRacePaused) {
        this.resumeRace()
        return
      }

      this.resetRaceState()
      this.isRaceInProgress = true

      const currentRace = this.races[this.currentRaceIndex]
      currentRace.forEach(h => {
        h.position = 0
        h.finishedAt = null
        h.finishTime = null
        h.totalActiveTime = 0
        h.activeStartTime = Date.now()
      })

      this.simulateRace(currentRace)
    },

    pauseRace() {
      clearRaceInterval(this)
      this.isRaceInProgress = false
      this.isRacePaused = true

      const horses = this.races[this.currentRaceIndex]
      horses.forEach(h => {
        if (h.finishedAt === null && h.activeStartTime) {
          h.totalActiveTime += Date.now() - h.activeStartTime
          h.activeStartTime = null
        }
      })
    },

    resumeRace() {
      this.isRaceInProgress = true
      this.isRacePaused = false

      const horses = this.races[this.currentRaceIndex]
      horses.forEach(h => {
        if (h.finishedAt === null) {
          h.activeStartTime = Date.now()
        }
      })

      this.simulateRace(horses)
    },

    simulateRace(horses: Horse[]) {
      this.raceInterval = setInterval(() => {
        horses.forEach(horse => {
          if (horse.finishedAt !== null) return

          const speed = calculateHorseSpeed(horse, RACE_DISTANCES[this.currentRaceIndex])
          horse.position = Math.min(horse.position + speed * 3, 100)

          if (horse.position >= 100) {
            const now = Date.now()
            const activeNow = horse.activeStartTime ? now - horse.activeStartTime : 0
            const totalTime = (horse.totalActiveTime ?? 0) + activeNow

            horse.totalActiveTime = totalTime
            horse.finishedAt = totalTime
            horse.finishTime = Number(((totalTime + Math.random() * 50) / 1000).toFixed(4))
            horse.activeStartTime = null
          }
        })

        const allFinished = horses.every(h => h.position >= 100)
        if (allFinished) {
          this.finishRace(horses)
        }
      }, 100)
    },

    finishRace(horses: Horse[]) {
      this.resetRaceState()

      const sorted = [...horses].sort((a, b) => (a.finishTime ?? 999) - (b.finishTime ?? 999))
      this.saveResult(sorted)

      if (this.currentRaceIndex >= this.races.length - 1) return

      toast('The new round is about to begin!')

      this.nextRace()

      if (this.currentRaceIndex < this.races.length) {
        this.startRace()
        toast(`The new round has begun! (Lap ${this.currentRaceIndex + 1})`, {
          type: 'success',
        } as ToastOptions)
      }
    },

    nextRace() {
      if (this.currentRaceIndex < this.races.length - 1) {
        this.currentRaceIndex++
        this.isRaceInProgress = false
      } else {
        this.currentRaceIndex = this.races.length
      }
    },

    saveResult(result: Horse[]) {
      this.results.push(result)
    },
  },
})
