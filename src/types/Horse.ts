export interface Horse {
  id: number
  name: string
  condition: number
  color: string
  position: number
  finishedAt: number | null
  finishTime: number | null
  totalActiveTime: number
  activeStartTime: number | null
  [key: string]: unknown
}
