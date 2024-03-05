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
            class="text-2xl xsm:text-5xl text-center font-bold tracking-tighter sm:text-6xl lg:text-8xl/none"
          >
            <span class="gradient-text">XEETECHCARE</span>
          </h1>
          <p
            v-html="data.heroSubheading"
            class="text-center hidden text-zinc-100 xsm:block text-sm sm:text-sm md:text-lg mx-auto"
          ></p>
          <div class="pt-3">
            <SocialMediaLinks />
          </div>
        </div>
      </section>
      <DownArrow
        :class="'text-zinc-300'"
        :positionClass="'absolute bottom-20 left-1/2'"
        @click="($refs.youtubeSection as HTMLElement)?.scrollIntoView({ behavior: 'smooth' })"
      />
    </div>
    <div
      class="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray to-transparent z-20"
    ></div>
    <div class="flex justify-center bg-gray" ref="youtubeSection">
      <section
        id="youtubeSection"
        class="z-20 pt-6 max-w-6xl mx-auto flex flex-wrap justify-center items-center"
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
              v-html="data.youtubeFeedDescripton"
              class="text-zinc-200 pb-4 text-center text-base tracking-tight sm:text-lg xl:text-xl/none"
            ></p>
            <YoutubeFeed />
          </div>
        </div>
      </section>
    </div>
    <div class="flex justify-center bg-gray">
      <section class="z-20 pb-6 max-w-6xl mx-auto flex flex-wrap justify-center items-center">
        <div class="container px-4 md:px-6 flex flex-col md:flex-row justify-center">
          <div class="w-full p-4 text-zinc-100" id="instaSection">
            <Separator />
            <div class="space-y-2">
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
                v-html="data.instaFeedDescripton"
                class="text-zinc-200 pb-4 text-center text-base tracking-tight sm:text-lg xl:text-xl/none"
              ></p>
              <PopularOnInstagram />
            </div>
          </div>
        </div>
        <Separator />
        <div
          id="socialsSection"
          class="container px-4 md:px-6 flex flex-col md:flex-row justify-center text-center"
        >
          <div class="md:w-2/4 p-0 sm:p-4 text-zinc-100">
            <div class="space-y-2">
              <h2
                class="text-4xl pb-4 text-zinc-200 text-center font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
              >
                Latest on <span class="gradient-text">Twitter </span>
                <FontAwesomeIcon :icon="faTwitter" class="text-zinc-100 h-9 sm:h-12 align-bottom" />
              </h2>
              <p
                v-html="data.twitterFeedDescripton"
                class="text-zinc-200 pb-4 text-center text-base tracking-tight sm:text-lg xl:text-xl/none"
              ></p>
              <TwitterFeed />
            </div>
          </div>
          <div class="md:w-2/4 p-0 sm:p-4 mt-10 md:mt-0 text-zinc-100">
            <div class="space-y-2">
              <h2
                class="text-4xl pb-4 text-zinc-200 text-center font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
              >
                New on <span class="gradient-text">Tiktok </span>
                <FontAwesomeIcon :icon="faTiktok" class="text-zinc-100 h-9 sm:h-12 align-center" />
              </h2>
              <p
                v-html="data.tiktokFeedDescripton"
                class="text-zinc-200 pb-4 text-center text-base tracking-tight sm:text-lg xl:text-xl/none"
              ></p>
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
import { HomeData } from '@/types/home';
import { faYoutube, faInstagram, faTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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

let data: HomeData = await fetchData<HomeData>('home');

/**
 * @function initDots()
 * Initializes the Threejs dot effect.
 */
function initDots() {
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
}

/**
 * @function animateSection
 * Animates a section.
 *
 * @param {string} selector - The CSS selector of the section to animate.
 * @param {number} duration - The duration of the animation in seconds.
 * @param {string} start - The starting position of the animation. Default is 'top 75%'.
 * @param {string} end - The ending position of the animation. Default is 'top 50%'.
 */
function animateSection(
  selector: string,
  duration: number,
  start: string = 'top 75%',
  end: string = 'top 50%',
) {
  if (!document.querySelector(selector)) {
    return;
  }
  gsap.from(selector, {
    scrollTrigger: {
      trigger: selector,
      start: start,
      end: end,
    },
    duration: duration,
    opacity: 0,
    y: 150,
    ease: 'power2.out',
  });
}

onMounted(() => {
  initDots();
  animateGradientText();
  animateSection('#youtubeSection', 1.5);
  animateSection('#instaSection', 1.5);
  document.body.classList.add('overflow-x-hidden');
});

onBeforeUnmount(() => {
  if (dotEffect) {
    dotEffect.destroy();
  }
  document.body.classList.remove('overflow-x-hidden');
});

defineExpose({ data });
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
.hero-main {
  animation: fadeInUp 0.5s ease-in-out;
}
</style>
