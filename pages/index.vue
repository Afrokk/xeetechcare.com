<template>
  <div class="relative h-screen w-screen">
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
        @click="($refs.statisticsSection as HTMLElement)?.scrollIntoView({ behavior: 'smooth' })"
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
  </div>
  <section
    id="statisticsSection"
    ref="statisticsSection"
    class="relative z-20 max-w-screen-xl mx-auto pt-8 pb-72 flex flex-wrap justify-center items-center h-auto w-screen"
  >
    <div class="container px-4 md:px-6 flex justify-center flex-col">
      <div class="grid gap-6 items-center">
        <div class="flex flex-col justify-center space-y-8 text-center">
          <div class="space-y-2" id="animated-text">
            <h2
              class="text-4xl pb-8 text-zinc-200 text-center font-bold tracking-tighter sm:text-6xl xl:text-7xl/none"
            >
              The <span class="gradient-text">Numbers</span>
            </h2>
          </div>
          <div class="w-full max-w-full space-y-4 mx-auto text-white">
            <div class="grid grid-cols-3 gap-8 justify-items-center">
              <div class="grid-item flex flex-col items-center space-y-2 p-4">
                <div className="p-2 bg-gray rounded-full">
                  <font-awesome-icon
                    :icon="faYoutube"
                    class="h-8 w-8 sm:h-12 text-red-600 sm:w-12"
                  />
                  <h5 class="font-bold text-zinc-200">YouTube</h5>
                </div>
                <div
                  class="flex items-center text-2xl text-center font-bold tracking-tighter sm:text-4xl xl:text-6xl/none text-orange-500"
                >
                  <CountUp :endVal="statCurrentVals[0]" />
                  <span class="ml-1 text-zinc-200">+</span>
                </div>
                <p class="text-zinc-200">Total Subscribers</p>
              </div>
              <div
                class="grid-item flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg"
              >
                <div className="p-2 bg-gray rounded-full">
                  <font-awesome-icon
                    :icon="faInstagram"
                    class="h-8 w-8 sm:h-12 text-purple-600 sm:w-12"
                  />
                  <h5 class="font-bold text-zinc-200">Instagram</h5>
                </div>
                <div
                  class="flex items-center text-2xl text-center font-bold tracking-tighter sm:text-4xl xl:text-6xl/none text-orange-500"
                >
                  <CountUp :endVal="statCurrentVals[1]" />
                  <span class="ml-1 text-zinc-200">+</span>
                </div>
                <p class="text-zinc-200">Total Followers</p>
              </div>
              <div
                class="grid-item flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg"
              >
                <div className="p-2 bg-gray rounded-full">
                  <font-awesome-icon
                    :icon="faTwitter"
                    class="h-8 w-8 sm:h-12 text-blue-500 sm:w-12"
                  />
                  <h5 class="font-bold text-zinc-200">Twitter</h5>
                </div>
                <div
                  class="flex items-center text-2xl text-center font-bold tracking-tighter sm:text-4xl xl:text-6xl/none text-orange-500"
                >
                  <CountUp :endVal="statCurrentVals[2]" />
                  <span class="ml-1 text-zinc-200">+</span>
                </div>
                <p class="text-zinc-200">Total Followers</p>
              </div>
              <div
                class="grid-item flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg"
              >
                <div className="p-2 bg-gray rounded-full">
                  <font-awesome-icon
                    :icon="faYoutube"
                    class="h-8 w-8 sm:h-12 text-red-600 sm:w-12"
                  />
                  <h5 class="font-bold text-zinc-200">YouTube</h5>
                </div>
                <div
                  class="flex items-center text-2xl text-center font-bold tracking-tighter sm:text-4xl xl:text-6xl/none text-orange-500"
                >
                  <CountUp :endVal="statCurrentVals[3]" />
                  <span class="ml-2">Million</span>
                  <span class="ml-1 text-zinc-200">+</span>
                </div>
                <p class="text-zinc-200">Total Views</p>
              </div>
              <div
                class="grid-item flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg"
              >
                <div className="p-2 bg-gray rounded-full">
                  <font-awesome-icon
                    :icon="faInstagram"
                    class="h-8 w-8 sm:h-12 text-purple-600 sm:w-12"
                  />
                  <h5 class="font-bold text-zinc-200">Instagram</h5>
                </div>
                <div
                  class="flex items-center text-2xl text-center font-bold tracking-tighter sm:text-4xl xl:text-6xl/none text-orange-500"
                >
                  <CountUp :endVal="statCurrentVals[4]" />
                  <span class="ml-1 text-zinc-200">+</span>
                </div>
                <p class="text-zinc-200">Video Views</p>
              </div>
              <div
                class="grid-item flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg"
              >
                <div className="p-2 bg-gray rounded-full">
                  <font-awesome-icon
                    :icon="faTiktok"
                    class="h-8 w-8 sm:h-12 text-pink-600 sm:w-12"
                  />
                  <h2 class="font-bold text-zinc-200">TikTok</h2>
                </div>
                <div
                  class="flex items-center text-2xl text-center font-bold tracking-tighter sm:text-4xl xl:text-6xl/none text-orange-500"
                >
                  <CountUp :endVal="statCurrentVals[5]" />
                  <span class="ml-1 text-zinc-200">+</span>
                </div>
                <p class="text-zinc-200">Total Likes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CountUp from 'vue-countup-v3';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Vanta, VantaEffect } from '@/types/vanta';
import { faYoutube, faInstagram, faTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

gsap.registerPlugin(ScrollTrigger);

defineComponent({
  components: {
    FontAwesomeIcon,
  },
});

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
let isCountStarted = false;
let statCurrentVals = ref(Array(6).fill(0));

const statEndVals = [1710000, 115000, 72000, 750, 65000, 630000];

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

  gsap.from('#statisticsSection', {
    scrollTrigger: {
      trigger: '#statisticsSection',
      start: 'top center',
    },
    opacity: 0,
    duration: 1,
  });

  gsap.from('.grid-item', {
    scrollTrigger: {
      trigger: '#statisticsSection',
      start: 'top center',
      onEnter: () => {
        if (!isCountStarted) {
          isCountStarted = true;
          statCurrentVals.value = [...statEndVals];
        }
      },
    },
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
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
.gradient-text {
  background: linear-gradient(
    90deg,
    #fcb12f 0%,
    #f97316 25%,
    #f85300 50%,
    #f97316 75%,
    #fcb12f 100%
  );
  background-size: 200% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.animate-bounce {
  animation: bounce 1.6s infinite;
}

.hero-main {
  animation: fadeInUp 0.5s ease-in-out;
}
</style>
