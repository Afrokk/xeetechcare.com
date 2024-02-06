<template>
  <section
    class="relative z-20 flex flex-col justify-center items-center text-center mx-auto text-white min-h-screen max-w-screen-xl px-4"
  >
    <div class="w-full pt-16 sm:w-2/4">
      <Rocket />
    </div>
    <div class="flex flex-col justify-center align-center space-y-2" id="animated-text">
      <h1
        class="text-3xl xsm:text-6xl mt-16 pb-4 text-zinc-200 text-center font-bold tracking-tighter sm:text-6xl xl:text-7xl/none"
      >
        <span class="gradient-text">Work</span> With Us.
      </h1>
      <div
        class="text-zinc-100 flex flex-col pb-4 text-sm xsm:text-base tracking-normal md:text-base md:mx-20 content"
        v-html="data.mainDescription ? data.mainDescription : ''"
      ></div>
      <div
        class="text-zinc-100 flex flex-col font-normal pb-16 text-sm xsm:text-base tracking-normal md:text-base md:mx-20 content"
        v-html="data.subDescription ? data.subDescription : ''"
      ></div>
    </div>
    <DownArrow
      :class="'text-orange-500'"
      :size-class="'h-6 w-6 xsm:h-8 xsm:w-8 p-0'"
      @click="($refs.statsSection as HTMLElement)?.scrollIntoView({ behavior: 'smooth' })"
    />
  </section>
  <section class="bg-grey flex flex-col items-start justify-center">
    <div class="z-20 max-w-screen-xl mx-auto flex flex-wrap justify-center items-center">
      <div class="container px-4">
        <div class="flex flex-col justify-center text-center" ref="statsSection">
          <div id="animated-text">
            <h2
              id="statAnimationAnchor"
              class="text-3xl xsm:text-6xl pt-12 pb-16 text-zinc-200 text-center font-bold tracking-tighter sm:text-6xl xl:text-7xl/none"
            >
              The <span class="gradient-text">Numbers</span>
            </h2>
          </div>
          <div class="w-full max-w-full mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
              <div
                class="grid-item flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg"
              >
                <div className="p-2 rounded-full">
                  <font-awesome-icon
                    :icon="faYoutube"
                    class="w-28 h-28 xsm:h-24 xsm:w-24 md:w-16 md:h-16 text-red-600"
                  />
                  <h5 class="font-bold text-zinc-200 text-lg xsm:text-xl md:text-lg">YouTube</h5>
                </div>
                <div
                  class="flex items-center text-2xl xsm:text-6xl text-center font-bold tracking-tighter xl:text-6xl/none text-orange-500"
                >
                  <CountUp :endVal="statStartVals[0]" :duration="1.5" />
                  <span class="ml-1 text-zinc-200">+</span>
                </div>
                <p class="text-zinc-200 pt-2 xsm:text-xl mg:text-lg">Total Subscribers</p>
              </div>
              <div
                class="grid-item flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg"
              >
                <div className="p-2 rounded-full">
                  <font-awesome-icon
                    :icon="faInstagram"
                    class="w-28 h-28 xsm:h-24 xsm:w-24 md:w-16 md:h-16 text-purple-600"
                  />
                  <h5 class="font-bold text-zinc-200 text-lg xsm:text-xl md:text-lg">Instagram</h5>
                </div>
                <div
                  class="flex items-center text-2xl xsm:text-6xl text-center font-bold tracking-tighter xl:text-6xl/none text-orange-500"
                >
                  <CountUp :endVal="statStartVals[1]" :duration="1.5" />
                  <span class="ml-1 text-zinc-200">+</span>
                </div>
                <p class="text-zinc-200 pt-2 xsm:text-xl mg:text-lg">Total Followers</p>
              </div>
              <div
                class="grid-item flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg"
              >
                <div className="p-2 rounded-full">
                  <font-awesome-icon
                    :icon="faTwitter"
                    class="w-28 h-28 xsm:h-24 xsm:w-24 md:w-16 md:h-16 text-blue-500"
                  />
                  <h5 class="font-bold text-zinc-200 text-lg xsm:text-xl md:text-lg">Twitter</h5>
                </div>
                <div
                  class="flex items-center text-2xl xsm:text-6xl text-center font-bold tracking-tighter xl:text-6xl/none text-orange-500"
                >
                  <CountUp :endVal="statStartVals[2]" :duration="1.5" />
                  <span class="ml-1 text-zinc-200">+</span>
                </div>
                <p class="text-zinc-200 pt-2 xsm:text-xl mg:text-lg">Total Followers</p>
              </div>
              <div
                class="grid-item flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg"
              >
                <div className="p-2 rounded-full">
                  <font-awesome-icon
                    :icon="faYoutube"
                    class="w-28 h-28 xsm:h-24 xsm:w-24 md:w-16 md:h-16 text-red-600"
                  />
                  <h5 class="font-bold text-zinc-200 text-lg xsm:text-xl md:text-lg">YouTube</h5>
                </div>
                <div
                  class="flex items-center text-2xl xsm:text-6xl text-center font-bold tracking-tighter xl:text-6xl/none text-orange-500"
                >
                  <CountUp :endVal="statStartVals[3]" :duration="2" />
                  <span class="ml-2">Million</span>
                  <span class="ml-1 text-zinc-200">+</span>
                </div>
                <p class="text-zinc-200 pt-2 xsm:text-xl mg:text-lg">Total Views</p>
              </div>
              <div
                class="grid-item flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg"
              >
                <div className="p-2 rounded-full">
                  <font-awesome-icon
                    :icon="faInstagram"
                    class="w-28 h-28 xsm:h-24 xsm:w-24 md:w-16 md:h-16 text-purple-600"
                  />
                  <h5 class="font-bold text-zinc-200 text-lg xsm:text-xl md:text-lg">Instagram</h5>
                </div>
                <div
                  class="flex items-center text-2xl xsm:text-6xl text-center font-bold tracking-tighter xl:text-6xl/none text-orange-500"
                >
                  <CountUp :endVal="statStartVals[4]" :duration="2" />
                  <span class="ml-1 text-zinc-200">+</span>
                </div>
                <p class="text-zinc-200 pt-2 xsm:text-xl mg:text-lg">Video Views</p>
              </div>
              <div
                class="grid-item flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg"
              >
                <div className="p-2 rounded-full">
                  <font-awesome-icon
                    :icon="faTiktok"
                    class="w-28 h-28 xsm:h-24 xsm:w-24 md:w-16 md:h-16 text-pink-600"
                  />
                  <h2 class="font-bold text-zinc-200 text-lg xsm:text-xl md:text-lg">TikTok</h2>
                </div>
                <div
                  class="flex items-center text-2xl xsm:text-6xl text-center font-bold tracking-tighter xl:text-6xl/none text-orange-500"
                >
                  <CountUp :endVal="statStartVals[5]" :duration="2" />
                  <span class="ml-1 text-zinc-200">+</span>
                </div>
                <p class="text-zinc-200 pt-2 xsm:text-xl mg:text-lg">Total Likes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="brandsSection" class="carousel-container bg-gray pt-16 overflow-x-hidden">
    <h2
      class="text-3xl pb-12 text-zinc-200 text-center font-thin italic tracking-tighter sm:text-4xl xl:text-4xl"
    >
      <span class="font-normal not-italic gradient-text">Brands</span> we've worked with
    </h2>
    <div>
      <ImageMarquee :paths="marqueeLogos" />
    </div>
  </section>
  <section id="pastCollabs" class="bg-grey flex text-zinc-200 flex-col items-start justify-center">
    <div class="z-20 max-w-screen-xl mx-auto flex flex-wrap justify-center items-center">
      <Separator />
      <h2
        class="text-3xl xsm:text-5xl pb-14 text-zinc-200 text-center font-bold tracking-tighter sm:text-6xl xl:text-7xl/none"
      >
        Past <span class="gradient-text">Collaborations</span>
      </h2>
      <div>
        <PastCollabs />
      </div>
      <Separator />
    </div>
  </section>
  <section class="bg-grey flex text-zinc-200 flex-col items-start justify-center">
    <div class="z-20 max-w-screen-xl mx-auto flex flex-col flex-wrap justify-center items-center">
      <h2
        class="text-lg pb-4 text-zinc-200 text-center font-thin tracking-tighter sm:text-xl xl:text-xl"
        v-html="data.callToAction ? data.callToAction : ''"
      ></h2>
      <h2
        class="text-2xl pb-12 text-zinc-200 text-center font-thin italic tracking-tighter sm:text-4xl xl:text-4xl"
      >
        Reach out @
        <span class="font-normal not-italic">
          <a
            :href="`mailto:${data.email ? data.email : ''}`"
            class="gradient-text underline-effect"
          >
            <span class="text">{{ data ? data.email : '' }}</span>
          </a>
        </span>
      </h2>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { faYoutube, faInstagram, faTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import CountUp from 'vue-countup-v3';

gsap.registerPlugin(ScrollTrigger);

let isCountStarted = false;
let statStartVals = ref(Array(6).fill(0));
const statEndVals = [1710000, 115000, 72000, 750, 65000, 630000];

const marqueeLogos = [
  '/assets/img/brands/anker.svg',
  '/assets/img/brands/oneplus.svg',
  '/assets/img/brands/oppo.svg',
  '/assets/img/brands/grammarly.svg',
  '/assets/img/brands/samsung.svg',
  '/assets/img/brands/mediatek.svg',
  '/assets/img/brands/honor.svg',
  '/assets/img/brands/squarespace.svg',
  '/assets/img/brands/nordvpn.svg',
  '/assets/img/brands/huawei.svg',
  '/assets/img/brands/xiaomi.svg',
];

let data = await fetchData('work');

useHead({
  title: 'Work With Us | XEETECHCARE',
  meta: [
    {
      name: 'description',
      content: 'Work with XEETECHCARE, our stats, numbers, the fun sutff.',
    },
  ],
});

/**
 * @function initCountUp()
 * Initializes the count-up on the stats.
 */
function initCountUp() {
  if (!isCountStarted) {
    isCountStarted = true;
    statStartVals.value = statEndVals;
  }
}

/**
 * @function animateStatsGrid()
 * Animates the stats grid on scroll.
 */
function animateStatsGrid() {
  gsap.from('.grid-item', {
    scrollTrigger: {
      trigger: '#statAnimationAnchor',
      start: 'top center',
      onEnter: () => {
        initCountUp();
      },
    },
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
  });
}

onMounted(() => {
  animateGradientText();
  animateStatsGrid();

  gsap.from('#pastCollabs', {
    scrollTrigger: {
      trigger: '#pastCollabs',
      start: 'top 75%',
      end: 'top 50%',
    },
    scrub: true,
    duration: 1.5,
    opacity: 0,
    y: 150,
    ease: 'power2.out',
  });
});

defineExpose({
  marqueeLogos,
  statStartVals,
  data,
});

defineComponent({
  components: {
    FontAwesomeIcon,
  },
});
</script>

<style>
.content p span {
  color: #f97314;
  font-weight: bold;
}

.underline-effect {
  position: relative;
  text-decoration: none;
  color: inherit;
}

.underline-effect::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease-in-out;
}

.underline-effect:hover::after {
  transform: scaleX(1);
}
</style>
