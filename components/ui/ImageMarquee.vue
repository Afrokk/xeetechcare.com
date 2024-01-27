<template>
  <div class="animate-marquee gap-4 flex overflow-hidden select-none relative">
    <ul class="marquee-content shrink-0 flex justify-around min-w-full">
      <li v-for="(logo, index) in paths" :key="index">
        <img :src="logo as string" alt="Brand logos." class="h-9 sm:h-16 xl:h-16 2xl:h-20 w-auto" />
      </li>
    </ul>
    <ul class="marquee-content" aria-hidden="true">
      <li v-for="(logo, index) in paths" :key="index">
        <NuxtImg
          :src="logo as string"
          alt="Brand logos."
          class="h-9 sm:h-16 xl:h-16 2xl:h-20 w-auto"
        />
      </li>
    </ul>
    <div class="fade-to-bg absolute top-0 bottom-0 left-0 right-0 pointer-events-none"></div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  paths: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.animate-marquee {
  --gap: 4rem;
  gap: var(--gap);
  position: relative;
}

.marquee-content {
  flex-shrink: 0;
  display: flex;
  justify-content: space-around;
  min-width: 100%;
  gap: var(--gap);
  animation: scroll 40s linear infinite;
}

.fade-to-bg {
  background: linear-gradient(to right, #111215 5%, transparent 8%, transparent 90%, #111215 95%);
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - var(--gap)));
  }
}

@media (max-width: 640px) {
  .animate-marquee {
    --gap: 2rem;
  }

  .marquee-content {
    animation: scroll 25s linear infinite;
  }
}
</style>
