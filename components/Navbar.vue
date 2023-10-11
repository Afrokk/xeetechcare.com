<template>
  <div class="relative">
    <nav class="bg-blue-500 p-4 flex justify-between items-center fixed top-0 w-full">
      <div class="text-white text-2xl font-semibold">xeetechcare</div>

      <div class="hidden md:flex space-x-4">
        <NuxtLink to="/" class="text-white">Home</NuxtLink>
        <NuxtLink to="/team" class="text-white">Team</NuxtLink>
        <NuxtLink to="/about" class="text-white">About</NuxtLink>
      </div>

      <NuxtLink
        to="/contact"
        class="bg-white text-blue-500 px-4 py-2 rounded-full hidden md:inline md:ml-4"
      >
        Contact
      </NuxtLink>

      <button @click="toggleMobileMenu" class="text-white p-2 focus:outline-none md:hidden">
        <svg
          v-if="!mobileMenuOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 transition-transform transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          v-if="mobileMenuOpen"
          @click="!toggleMobileMenu"
          xmlns="http://www.w3.org/2000/svg"
          class="w-14 pr-0 transition-transform transform text-white text-lg px-4 bg-blue-500 rounded-full absolute top-2 right-2 z-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div
        class="md:hidden fixed top-0 left-0 w-full h-full bg-blue-500 transition-transform transform"
        :class="{ 'translate-x-full': !mobileMenuOpen }"
      >
        <div class="flex flex-col justify-center h-full p-4 text-center text-white">
          <NuxtLink to="/" class="block py-2">Home</NuxtLink>
          <NuxtLink to="/about" class="block py-2">About</NuxtLink>
          <NuxtLink to="/team" class="block py-2">Team</NuxtLink>
          <NuxtLink to="/contact" class="block py-2">Contact</NuxtLink>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobileMenuOpen: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
  },
};
</script>

<style scoped>
button.transition-transform {
  transition: transform 0.3s;
}
</style>
