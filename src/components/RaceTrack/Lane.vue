<script setup lang="ts">
  defineOptions({
    name: 'LaneComponent',
  })

  import { useRaceStore } from '@/stores/race.ts'
  import Hold from '@/components/HorseIcons/Hold.vue'
  import Running from '@/components/HorseIcons/Running.vue'
  import { computed } from 'vue'

  const props = defineProps<{
    horse: {
      name: string
      color: string
      position: number
    }
    lane: number
  }>()

  const raceStore = useRaceStore()

  const horseStatus = computed(() => {
    if (!raceStore.isRaceInProgress) {
      return 'hold'
    }

    if (props.horse.position >= 100) {
      return 'hold'
    }

    return 'running'
  })
</script>

<template>
  <div class="flex items-center gap-2 pl-4 py-3 h-11 sm:h-16">
    <span
      class="font-semibold w-9 sm:w-12 rotate-270 bg-blue-900 text-center text-white py-1 text-xs rounded-md opacity-90"
      >{{ lane }}</span
    >

    <div class="relative w-full">
      <div
        class="w-10 h-10 sm:w-12 sm:h-12 rounded-full absolute top-[-20px] sm:top-[-24px]"
        data-test-id="horse"
        :data-horse-name="horse.name"
        :style="{ left: horse.position + '%' }"
      >
        <Running :color="horse.color" v-if="horseStatus === 'running'" />
        <Hold :color="horse.color" v-else />
      </div>
    </div>
  </div>
</template>
