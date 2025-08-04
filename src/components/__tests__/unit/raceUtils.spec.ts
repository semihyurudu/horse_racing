import { describe, it, expect } from 'vitest'
import { resetRaces } from '@/utils/raceUtils'
import type { Horse } from '@/types/Horse'

describe('resetRaces', () => {
  it('should reset all horse properties while preserving immutable ones', () => {
    // Arrange: Create a mock race round with one horse
    const mockRaces: Horse[][] = [
      [
        {
          name: 'A',
          position: 50,
          finishedAt: 123,
          finishTime: 10,
        },
      ],
    ]

    // Act: Apply the resetRaces function
    const result = resetRaces(mockRaces)

    // Assert: The structure of the result should be preserved
    expect(result).toHaveLength(1) // one round
    expect(result[0]).toHaveLength(1) // one horse

    const horse = result[0][0]

    // Assert: Reset fields should be set to default values
    expect(horse.position).toBe(0)
    expect(horse.finishedAt).toBeNull()
    expect(horse.finishTime).toBeNull()

    // Assert: Immutable fields should remain unchanged
    expect(horse.name).toBe('A')
  })
})
