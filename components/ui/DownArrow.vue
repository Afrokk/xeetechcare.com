<template>
  <div
    :class="[
      positionClass,
      'transform -translate-x-1/2 animate-bounce cursor-pointer transition-all hover:scale-110 z-30',
    ]"
  >
    <font-awesome-icon :class="sizeClass" :icon="faArrowDown" />
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

defineProps({
  sizeClass: {
    type: String,
    default: 'h-6 w-6 xsm:h-7 xsm:w-7',
  },
  positionClass: {
    type: String,
    default: 'inline',
  },
});

defineExpose({ FontAwesomeIcon, faArrowDown });
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
