<script setup lang="ts">
  import { useRaceStore } from '@/stores/race'
  import { useUiStore } from '@/stores/ui'
  import HorseName from '@/components/HorseName.vue'
  import gold from '@/assets/images/medals/gold.svg'
  import silver from '@/assets/images/medals/silver.svg'
  import bronze from '@/assets/images/medals/bronze.svg'
  import { ref, watch } from 'vue'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  const raceStore = useRaceStore()
  const uiStore = useUiStore()

  const medals = [gold, silver, bronze]
  const isOpen = ref(!uiStore.isMobile)

  function getMedalIcon(index: number): string | undefined {
    return index < 3 ? medals[index] : undefined
  }

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
      Results
      <font-awesome-icon :icon="isOpen ? 'angle-up' : 'angle-down'" />
    </h3>

    <div
      v-show="isOpen"
      class="flex flex-col gap-3 w-full results-container custom-scrollbar w-full !mt-3 pb-1"
      data-test-id="race-results"
    >
      <div
        v-for="(result, index) in raceStore.results"
        :key="index"
        :data-race-index="index"
        class="w-full bg-gray-50 p-3 rounded-md flex flex-col gap-1 results-block"
      >
        <h2 class="text-sm font-semibold">Round {{ index + 1 }} - Results</h2>

        <table class="min-w-full divide-y divide-gray-200 text-xs">
          <thead>
            <tr>
              <th class="py-2 text-left font-bold text-gray-700 w-10">Position</th>
              <th class="px-2 py-2 text-left font-bold text-gray-700">Name</th>
              <th class="px-2 py-2 text-left font-bold text-gray-700">Time</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr v-for="(horse, horseIndex) in result" :key="horseIndex" class="hover:bg-gray-100">
              <td class="px-2 py-1 font-bold text-gray-800">
                <div class="flex justify-center">
                  <template v-if="getMedalIcon(horseIndex)">
                    <img :src="getMedalIcon(horseIndex)" alt="Medal" class="w-3 h-3" />
                  </template>
                  <template v-else>
                    {{ horseIndex + 1 }}
                  </template>
                </div>
              </td>
              <td class="px-2 py-1 text-gray-800">
                <HorseName :horse="horse" />
              </td>
              <td class="pl-3 pr-2 py-1 text-gray-800">{{ horse.finishTime }}s</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @use '@/assets/styles/scss/variables' as *;

  .results-container {
    max-height: 400px;
    height: auto;
  }

  @media (min-width: $lg) {
    .results-container {
      max-height: 685px;
      height: 685px;
    }
  }

  .results-block {
    background: rgba(9, 130, 35, 0.2);
  }
</style>
