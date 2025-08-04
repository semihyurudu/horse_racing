import { useRaceStore } from '@/stores/race'

export function clearRaceInterval(store: ReturnType<typeof useRaceStore>) {
  if (store.raceInterval) {
    clearInterval(store.raceInterval)
    store.raceInterval = null
  }
}
