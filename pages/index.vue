<template>
  <div class="flex flex-col justify-center align-center">
    <div id="render-dots" class="absolute inset-0 z-10"></div>

    <div
      class="relative z-20 max-w-screen-xl mx-auto text-white flex flex-wrap justify-center items-center h-screen w-screen"
    >
      <section class="hero-main">
        <div class="space-y-2">
          <h1
            id="animated-text"
            class="text-4xl text-center font-bold tracking-tighter sm:text-6xl xl:text-8xl/none"
          >
            <span class="gradient-text">XEETECHCARE</span>
          </h1>
          <p
            class="max-w-[700px] text-center text-sm sm:text-base md:text-lg lg:text-xl dark:text-zinc-200 mx-auto"
          >
            Your one-stop for tech news, reviews, and everything in between
          </p>
          <div class="pt-3">
            <SocialMediaLinks />
          </div>
        </div>
      </section>
      <div
        class="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer transition-all hover:scale-110 z-30"
        @click="($refs.youtubeSection as HTMLElement)?.scrollIntoView({ behavior: 'smooth' })"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          ></path>
        </svg>
      </div>
    </div>
    <div
      class="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray to-transparent z-20"
    ></div>
    <div class="flex justify-center bg-gray" ref="youtubeSection">
      <section
        id="youtubeSection"
        class="z-20 py-6 max-w-screen-xl mx-auto flex flex-wrap justify-center items-center"
      >
        <div class="container px-4 md:px-6 flex justify-center flex-col">
          <div class="space-y-2" id="animated-text">
            <h2
              class="text-4xl pb-4 text-zinc-200 text-center font-bold tracking-tighter sm:text-6xl xl:text-7xl/none"
            >
              Latest on <span class="gradient-text">YouTube </span>
              <FontAwesomeIcon :icon="faYoutube" class="text-zinc-100 h-9 sm:h-12 align-middle" />
            </h2>
            <p
              class="text-zinc-200 text-center text-md font-light tracking-tight sm:text-lg xl:text-xl/none"
            >
              Your dose of quick, digestible tech videos - watched by over
              <span class="font-bold text-orange-500">1.7 Million</span> followers worldwide.
            </p>
            <LatestYoutubeVideos />
          </div>
        </div>
      </section>
    </div>
    <div class="flex justify-center bg-gray">
      <section
        id="socialsSection"
        class="z-20 pb-6 max-w-screen-xl mx-auto flex flex-wrap justify-center items-center"
      >
        <div class="container px-4 md:px-6 flex flex-col md:flex-row justify-center">
          <div class="w-full p-4 text-zinc-100">
            <div class="space-y-2" id="animated-text">
              <h2
                class="text-4xl pb-4 text-zinc-200 text-center font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
              >
                Popular on <span class="gradient-text">Instagram </span>
                <FontAwesomeIcon
                  :icon="faInstagram"
                  class="text-zinc-100 h-9 sm:h-12 align-middle"
                />
              </h2>
              <p
                class="text-zinc-200 text-center text-base font-light tracking-tight sm:text-lg xl:text-xl/none"
              >
                All about tech, travel and lifestyle on Instagram - followed by over
                <span class="font-bold text-orange-500">115,000</span> people.
              </p>
              <PopularOnInstagram />
            </div>
          </div>
        </div>
        <div class="container px-4 md:px-6 flex flex-col md:flex-row justify-center text-center">
          <div class="md:w-2/4 p-0 sm:p-4 text-zinc-100">
            <div class="space-y-2" id="animated-text">
              <h2
                class="text-4xl pb-4 text-zinc-200 text-center font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
              >
                Latest on <span class="gradient-text">Twitter </span>
                <FontAwesomeIcon :icon="faTwitter" class="text-zinc-100 h-9 sm:h-12 align-bottom" />
              </h2>
              <p
                class="text-zinc-200 pb-4 text-center text-base font-light tracking-tight sm:text-lg xl:text-xl/none"
              >
                Join community of over
                <span class="font-bold text-orange-500">71,000</span> techies.
              </p>
              <TwitterFeed />
            </div>
          </div>
          <div class="md:w-2/4 p-0 sm:p-4 mt-10 sm:mt-0 text-zinc-100">
            <div class="space-y-2" id="animated-text">
              <h2
                class="text-4xl pb-4 text-zinc-200 text-center font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
              >
                New on <span class="gradient-text">Tiktok </span>
                <FontAwesomeIcon :icon="faTiktok" class="text-zinc-100 h-9 sm:h-12 align-center" />
              </h2>
              <p
                class="text-zinc-200 pb-4 text-center text-base font-light tracking-tight sm:text-lg xl:text-xl/none"
              >
                Join
                <span class="font-bold text-orange-500">12,000</span>+ fans for some TechToks.
              </p>
              <TikTokFeed />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Vanta, VantaEffect } from '@/types/vanta';
import { faYoutube, faInstagram, faTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { gsap } from 'gsap';

useHead({
  title: 'XEETECHCARE',
  meta: [
    {
      name: 'description',
      content:
        'XEETECHCARE is a name synonymous with mobile technology space on YouTube, with over half a billion views worldwide. Covering smartphone tech news, reviews and everything in between.',
    },
  ],
});

declare const VANTA: Vanta;

let dotEffect: VantaEffect | null = null;

onMounted(() => {
  dotEffect = VANTA.DOTS({
    el: '#render-dots',
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 0.5,
    scaleMobile: 1.0,
    color: 0xf97416,
    backgroundColor: 0x111215,
    size: 1.4,
    spacing: 23.0,
    showLines: false,
  });

  const text = document.querySelectorAll('.gradient-text');
  gsap.to(text, {
    backgroundPosition: '200% 0%',
    ease: 'power1.inOut',
    repeat: -1,
    duration: 3,
    yoyo: true,
  });

  document.body.classList.add('overflow-x-hidden');
});

onBeforeUnmount(() => {
  if (dotEffect) {
    dotEffect.destroy();
  }
  document.body.classList.remove('overflow-x-hidden');
});
</script>

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

.hero-main {
  animation: fadeInUp 0.5s ease-in-out;
}
</style>
