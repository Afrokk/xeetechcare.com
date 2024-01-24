<template>
  <div
    :class="[
      sizeClass,
      postionClass,
      'absolute h-6 w-6 transform -translate-x-1/2 animate-bounce cursor-pointer transition-all hover:scale-110 z-30',
    ]"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19 14l-7 7m0 0l-7-7m7 7V3"
      ></path>
    </svg>
  </div>
</template>

<script setup lang="ts">
defineProps({
  sizeClass: {
    type: String,
    default: 'h-6 w-6',
  },
  postionClass: {
    type: String,
    default: 'bottom-20 left-1/2',
  },
});
</script>

<style scoped>
@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.animate-bounce {
  animation: bounce 1.6s infinite;
}
</style>
