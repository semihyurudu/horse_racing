import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useRaceStore } from '@/stores/race'
import { MAX_RACE, MIN_HORSE_LENGTH } from '@/constants/staticValues'
import type { Horse } from '@/types/Horse'

// Utility: Create mock horse list with the required length
function createMockHorses(): Horse[] {
  return Array.from({ length: MIN_HORSE_LENGTH }, (_, i) => ({
    name: `Horse ${i + 1}`,
    position: 0,
    finishedAt: null,
    finishTime: null,
  }))
}

describe('Race Store - generateProgram', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should generate the correct number of races and horses per race', () => {
    const store = useRaceStore()
    const mockHorses = createMockHorses()

    store.generateProgram(mockHorses)

    expect(store.races.length).toBe(MAX_RACE)
    expect(store.currentRaceIndex).toBe(0)
    expect(store.results).toEqual([])

    store.races.forEach(race => {
      expect(race.length).toBe(MIN_HORSE_LENGTH)
      race.forEach(horse => {
        expect(horse.position).toBe(0)
        expect(horse.finishedAt).toBeNull()
        expect(horse.finishTime).toBeNull()
        expect(typeof horse.name).toBe('string')
        expect(horse.name).toMatch(/^Horse \d+$/)
      })
    })
  })
})

describe('Race Store - nextRace', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should not increment currentRaceIndex past last race', () => {
    const store = useRaceStore()
    store.races = [[], [], []] // 3 races
    store.currentRaceIndex = 2

    store.nextRace()
    expect(store.currentRaceIndex).toBe(3)

    // If called again, it should remain the same.
    store.nextRace()
    expect(store.currentRaceIndex).toBe(3)
  })
})
