<template>
  <div
    class="flex flex-col min-h-screen w-screen text-center items-center justify-between bg-gray text-zinc-200"
  >
    <div class="flex flex-col items-center justify-center flex-grow">
      <div>
        <h1 class="gradient-text text-9xl font-bold text-center">404</h1>
        <p class="text-xl mt-4">The page you're looking for doesn't exist. :(</p>
      </div>
      <div class="mt-8">
        <NuxtLink
          to="/"
          class="flex items-center justify-center px-8 py-4 text-xl font-bold bg-gradient-to-tr from-orange-500 via-orange-600 to-red-600 rounded-xl transition-all duration-300 hover:bg-orange-500 hover:scale-102"
        >
          Return to Homepage
        </NuxtLink>
      </div>
    </div>
    <Footer class="mt-auto" />
  </div>
</template>

<script setup lang="ts">
onMounted(() => {
  animateGradientText();
});
</script>
