export function calculateHorseSpeed(horse: { condition: number }, distance: number) {
  const conditionWeight = 0.6
  const formWeight = 0.3
  const luckWeight = 0.1

  const conditionScore = (horse.condition / 100) * conditionWeight
  const formScore = Math.random() * formWeight
  const luckScore = (Math.random() - 0.5) * luckWeight

  const baseSpeed = conditionScore + formScore + luckScore
  const distanceFactor = distance / 1000

  return baseSpeed * (1 / distanceFactor)
}
