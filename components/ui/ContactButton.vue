<template>
  <NuxtLink
    to="mailto:xeetechcare@delkatalents.com"
    :class="[
      colorPallette.bg,
      colorPallette.text,
      colorPallette.hover,
      'uppercase tracking-wide transition-all text-black px-4 py-2 rounded-full hidden md:inline md:ml-4',
      { 'hover:bg-gray': scrollStatus },
    ]"
    exact
  >
    Contact
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
  scrollStatus: {
    type: Boolean,
    default: false,
  },
  colorPallette: {
    type: Object,
    default: {
      bg: 'bg-orange-500',
      text: 'text-black',
      hover: 'hover:text-white',
    },
  },
});
</script>
