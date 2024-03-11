<template>
  <section
    class="bg-gray max-w-screen-xl mx-auto text-zinc-100 flex flex-col justify-center items-center min-h-screen px-4 sm:px-0 pt-36 sm:pt-20"
  >
    <h1
      class="text-5xl sm:text-5xl md:text-6xl xl:text-7xl/none mb-4 sm:mb-8 xsm:text-4xl mt-8 sm:mt-16 pb-4 text-zinc-200 text-center font-bold tracking-tighter"
    >
      xee<span class="gradient-text">tech</span>care
    </h1>
    <!-- TO DO -->
    <div class="flex flex-col items-center">
      <ul>
        <li>YouTube</li>
        <li>Instagram</li>
        <li>TikTok</li>
        <li>Affiliate Link</li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
useHead({
  title: 'Links | XEETECHCARE',
  meta: [
    {
      name: 'description',
      content: 'Links to all social media.',
    },
  ],
});

onMounted(() => {
  animateGradientText();
});
</script>
