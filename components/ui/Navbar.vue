<template>
  <div class="relative z-30">
    <div>
      <nav
        :class="{
          'bg-transparent': !isScrolled,
          'bg-zinc-200': isScrolled,
        }"
        class="mx-auto p-4 fixed top-0 w-full transition-all duration-500"
      >
        <div class="max-w-screen-xl mx-auto flex justify-between items-center">
          <div class="z-20">
            <NuxtLink
              to="/"
              class="text-xl font-bold sm:text-2xl"
              :class="{
                'text-gray': isScrolled || mobileMenuOpen,
                'text-zinc-200': !isScrolled && !mobileMenuOpen,
              }"
              exact
              >XEE<span class="text-orange-500">TECH</span>CARE</NuxtLink
            >
          </div>
          <div
            class="hidden md:flex space-x-6 sm:space-x-10 uppercase tracking-wide"
            :class="{ 'text-black': isScrolled, 'text-zinc-200': !isScrolled }"
          >
            <NuxtLink to="/" :class="{ 'font-bold': isRouteActive('/') }" exact>Home</NuxtLink>
            <NuxtLink to="/team" :class="{ 'font-bold': isRouteActive('/team') }" exact
              >Team</NuxtLink
            >
            <NuxtLink to="/work" :class="{ 'font-bold': isRouteActive('/work') }" exact
              >Work with Us</NuxtLink
            >
          </div>

          <ContactButton :scrollStatus="isScrolled" :class="'hidden md:inline'" />

          <button
            @click="toggleMobileMenu"
            class="p-2 focus:outline-none md:hidden"
            :class="{ 'text-black': isScrolled, 'text-zinc-200': !isScrolled }"
          >
            <svg
              v-if="!mobileMenuOpen"
              xmlns="http://www.w3.org/2000/svg"
              class="h-9 w-9 transition-transform transform"
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
              class="w-14 pr-0 transition-transform transform text-black text-lg px-4 rounded-full absolute top-5 right-5 z-10"
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
            class="md:hidden uppercase tracking-wide fixed top-0 left-0 w-full h-full bg-slate-100 transition-transform transform"
            :class="{ 'translate-x-full': !mobileMenuOpen }"
          >
            <div class="flex flex-col justify-center h-full p-4 text-center text-black">
              <NuxtLink
                to="/"
                class="block py-2"
                :class="{ 'font-bold': isRouteActive('/') }"
                @click.native="toggleMobileMenu"
                exact
                >Home</NuxtLink
              >
              <hr class="border-t border-gray border-opacity-20 my-2" />
              <NuxtLink
                to="/work"
                class="block py-2"
                :class="{ 'font-bold': isRouteActive('/work') }"
                @click.native="toggleMobileMenu"
                exact
                >Work with Us</NuxtLink
              >
              <hr class="border-t border-gray border-opacity-20 my-2" />
              <NuxtLink
                to="/team"
                class="block py-2"
                :class="{ 'font-bold': isRouteActive('/team') }"
                @click.native="toggleMobileMenu"
                exact
                >Team</NuxtLink
              >
              <hr class="border-t border-gray border-opacity-20 my-2" />
              <NuxtLink
                to="mailto:xeetechcare@delkatalents.com"
                class="bg-orange-500 hover:bg-black hover:text-white transition-all text-black px-4 py-2 rounded-full mx-auto w-fit sm:w-1/4 mt-2"
                :class="{ 'font-bold text-white': isRouteActive('/contact') }"
                @click.native="toggleMobileMenu"
                exact
                >Contact</NuxtLink
              >
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

let mobileMenuOpen = ref(false);
let isScrolled = ref(false);

/**
 * Toggles the mobile menu open or closed.
 */
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

/**
 * Checks if the current route is active.
 * @param {string} routePath - The path of the route to check.
 * @returns {boolean} - True if the current route is active, false otherwise.
 */
const isRouteActive = (routePath: string): boolean => {
  return route.path === routePath;
};

/**
 * Handles the scroll event and updates the value of `isScrolled`.
 */
const handleScroll = () => {
  isScrolled.value = window.scrollY > 150;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
button.transition-transform {
  transition: transform 0.3s;
}
</style>
