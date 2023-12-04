<template>
  <div
    class="max-w-screen-xl mx-auto text-white flex flex-wrap justify-center items-center h-screen w-screen"
  >
    <section class="hero-main w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div class="flex flex-col justify-center space-y-8 text-center">
        <div class="space-y-2">
          <h1
            class="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-8xl/none bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500"
          >
            XEETECHCARE
          </h1>
          <p class="max-w-[600px] text-zinc-200 md:text-xl dark:text-zinc-100 mx-auto">
            Your one-stop for tech news, reviews, and tutorials.
          </p>
        </div>
      </div>
    </section>
    <section id="youtube">
      <p>Placeholder</p>
    </section>
  </div>
</template>

<style scoped>
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-main {
  animation: fadeInUp 0.2s ease-in-out;
}
</style>
