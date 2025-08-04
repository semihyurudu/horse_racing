<script setup lang="ts">
  defineOptions({
    name: 'FooterComponent',
  })

  import FooterMenu from '@/components/Footer/FooterMenu.vue'
</script>

<template>
  <footer
    class="fixed flex justify-center bottom-0 left-0 w-full px-1 md:px-0 py-4 border-t border-gray-300"
  >
    <div class="container flex flex-col md:flex-row justify-between items-center">
      <span> © Case Study - Semih YÜRÜDÜ </span>

      <FooterMenu />
    </div>
  </footer>
</template>
