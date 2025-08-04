<script setup lang="ts">
  import { useRaceStore } from '@/stores/race'
  import { useUiStore } from '@/stores/ui'
  import { RACE_DISTANCES } from '@/constants/staticValues.ts'
  import HorseName from '@/components/HorseName.vue'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { ref, watch } from 'vue'

  const raceStore = useRaceStore()
  const uiStore = useUiStore()
  const isOpen = ref(!uiStore.isMobile)

  const toggleOpen = () => {
    isOpen.value = !isOpen.value
  }

  watch(
    () => uiStore.isMobile,
    val => {
      isOpen.value = !val
    },
  )
</script>

<template>
  <div class="w-full">
    <h3
      @click="toggleOpen"
      class="w-full pt-1 text-center text-lg font-extrabold text-blue-900 flex gap-2 items-center justify-center cursor-pointer"
    >
      Program
      <font-awesome-icon :icon="isOpen ? 'angle-up' : 'angle-down'" />
    </h3>

    <div
      v-show="isOpen"
      class="flex flex-col gap-3 w-full program-container custom-scrollbar w-full !mt-3"
    >
      <div
        v-for="(race, raceIndex) in raceStore.races"
        :key="raceIndex"
        class="w-full bg-gray-50 p-3 rounded-md flex flex-col gap-1"
        data-test-id="program-item"
      >
        <h2 class="text-sm font-semibold">
          Round {{ raceIndex + 1 }} - {{ RACE_DISTANCES[raceIndex] }}m
        </h2>

        <table class="min-w-full divide-y divide-gray-200 text-xs">
          <thead>
            <tr>
              <th class="py-2 text-left font-semibold text-gray-700 w-10">Lane</th>
              <th class="px-2 py-2 text-left font-semibold text-gray-700">Name</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr v-for="(horse, lane) in race" :key="lane" class="hover:bg-gray-100">
              <td class="pl-3 pr-2 py-1 text-gray-800">
                {{ lane + 1 }}
              </td>
              <td class="px-2 py-1 text-gray-800">
                <HorseName :horse="horse" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @use '@/assets/styles/scss/variables' as *;

  .program-container {
    max-height: 400px;
    height: auto;
  }

  @media (min-width: $lg) {
    .program-container {
      max-height: 685px;
      height: 685px;
    }
  }
</style>
