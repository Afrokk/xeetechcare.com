<template>
  <div class="relative z-30">
    <div>
      <nav
        :class="{
          'bg-transparent': !isScrolled,
          'bg-slate-100 border border-r-0 border-t-0 border-l-0 border-black': isScrolled,
        }"
        class="mx-auto p-4 fixed top-0 w-full transition-all duration-500"
      >
        <div class="max-w-screen-lg mx-auto flex justify-between items-center">
          <div class="z-20">
            <NuxtLink
              to="/"
              class="text-2xl font-bold"
              :class="{
                'text-gray': isScrolled || mobileMenuOpen,
                'text-slate-100': !isScrolled && !mobileMenuOpen,
              }"
              exact
              >XEE<span class="text-orange-500">TECH</span>CARE</NuxtLink
            >
          </div>
          <div
            class="hidden md:flex space-x-6"
            :class="{ 'text-black': isScrolled, 'text-slate-100': !isScrolled }"
          >
            <NuxtLink to="/" :class="{ 'font-bold': isRouteActive('/') }" exact>Home</NuxtLink>
            <NuxtLink to="/team" :class="{ 'font-bold': isRouteActive('/team') }" exact
              >Team</NuxtLink
            >
            <NuxtLink to="/about" :class="{ 'font-bold': isRouteActive('/about') }" exact
              >About</NuxtLink
            >
          </div>

          <NuxtLink
            to="/contact"
            class="bg-orange-500 hover:text-white transition-all text-black px-4 py-2 rounded-full hidden md:inline md:ml-4"
            :class="[{ 'hover:bg-gray': isScrolled }, { 'font-bold': isRouteActive('/contact') }]"
            exact
          >
            Contact
          </NuxtLink>

          <button
            @click="toggleMobileMenu"
            class="p-2 focus:outline-none md:hidden"
            :class="{ 'text-black': isScrolled, 'text-slate-100': !isScrolled }"
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
              class="w-14 pr-0 transition-transform transform text-black text-lg px-4 bg-slate-100 bg-opacity-85 rounded-full absolute top-5 right-5 z-10"
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
            class="md:hidden fixed top-0 left-0 w-full h-full bg-white bg-opacity-85 transition-transform transform"
            :class="{ 'translate-x-full': !mobileMenuOpen }"
          >
            <div class="flex flex-col justify-center h-full p-4 text-center text-black">
              <NuxtLink to="/" class="block py-2" :class="{ 'font-bold': isRouteActive('/') }" exact
                >Home</NuxtLink
              >
              <hr class="border-t border-gray border-opacity-20 my-2" />
              <NuxtLink
                to="/about"
                class="block py-2"
                :class="{ 'font-bold': isRouteActive('/about') }"
                exact
                >About</NuxtLink
              >
              <hr class="border-t border-gray border-opacity-20 my-2" />
              <NuxtLink
                to="/team"
                class="block py-2"
                :class="{ 'font-bold': isRouteActive('/team') }"
                exact
                >Team</NuxtLink
              >
              <hr class="border-t border-gray border-opacity-20 my-2" />
              <NuxtLink
                to="/contact"
                class="bg-orange-500 hover:bg-black hover:text-white transition-all text-black px-4 py-2 rounded-full mx-auto w-fit sm:w-1/4 mt-2"
                :class="{ 'font-bold text-white': isRouteActive('/contact') }"
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

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const isRouteActive = (routePath: string) => {
  return route.path === routePath;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 250;
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
