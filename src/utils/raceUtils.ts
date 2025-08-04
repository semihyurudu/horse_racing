import type { Horse } from '@/types/Horse'

export function resetRaces(races: Horse[][]): Horse[][] {
  return races.map(round =>
    round.map(horse => ({
      ...horse,
      position: 0,
      finishedAt: null,
      finishTime: null,
    })),
  )
}
