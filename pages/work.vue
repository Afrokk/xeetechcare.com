<template>
  <section
    class="relative z-20 flex flex-col justify-center items-center text-center mx-auto text-white min-h-screen max-w-screen-xl px-4"
  >
    <div class="w-full pt-16 sm:w-2/4">
      <Rocket />
    </div>
    <div class="space-y-2" id="animated-text">
      <h2
        class="text-3xl xsm:text-6xl mt-16 pb-4 text-zinc-200 text-center font-bold tracking-tighter sm:text-6xl xl:text-7xl/none"
      >
        <span class="gradient-text">Work</span> With Us.
      </h2>
      <p
        class="text-zinc-100 flex flex-col pb-16 text-sm xsm:text-base tracking-normal md:text-base md:mx-20"
        v-html="data ? data.mainDescription : ''"
      ></p>
    </div>
    <DownArrow
      :class="'text-orange-500'"
      :sizeClass="'h-8 w-8'"
      :postionClass="'bottom-3 left-1/2'"
      @click="($refs.statsSection as HTMLElement)?.scrollIntoView({ behavior: 'smooth' })"
    />
  </section>
  <section class="bg-grey flex flex-col items-start justify-center">
    <div class="z-20 max-w-screen-xl mx-auto flex flex-wrap justify-center items-center">
      <div class="container px-4">
        <div class="flex flex-col justify-center text-center" ref="statsSection">
          <Separator />
          <div id="animated-text">
            <h2
              class="text-3xl xsm:text-6xl mt-16 pb-4 text-zinc-200 text-center font-bold tracking-tighter sm:text-6xl xl:text-7xl/none"
            >
              The <span class="gradient-text" id="statAnimationAnchor">Numbers</span>
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
                  <CountUp :endVal="statCurrentVals[0]" />
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
                  <CountUp :endVal="statCurrentVals[1]" />
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
                  <CountUp :endVal="statCurrentVals[2]" />
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
                  <CountUp :endVal="statCurrentVals[3]" />
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
                  <CountUp :endVal="statCurrentVals[4]" />
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
                  <CountUp :endVal="statCurrentVals[5]" />
                  <span class="ml-1 text-zinc-200">+</span>
                </div>
                <p class="text-zinc-200 pt-2 xsm:text-xl mg:text-lg">Total Likes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section id="brandsSection" class="carousel-container bg-gray pt-20 overflow-x-hidden">
      <h2
        class="text-3xl pb-8 text-zinc-200 text-center font-bold tracking-tighter sm:text-4xl xl:text-5xl"
      >
        Brands we've worked with
      </h2>
      <div class="carousel pt-4 flex">
        <div
          class="flex space-x-4 sm:space-x-8 md:space-x-12 lg:space-x-16 xl:space-x-20 2xl:space-x-24"
        >
          <img
            v-for="logo in logos"
            :key="logo"
            :src="logo"
            class="carousel-item flex-shrink-0 w-24 h-24 object-contain sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96"
          />
          <img
            v-for="logo in logos"
            :key="logo + 'clone'"
            :src="logo"
            class="carousel-item flex-shrink-0 w-24 h-24 object-contain sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96"
          />
        </div>
      </div>
    </section>
    <Separator />
    <section
      id="brandsSection"
      class="carousel-container flex flex-col text-center justify-center items-center bg-gray pt-0 overflow-x-hidden"
    >
      <h2
        class="text-3xl pb-8 text-zinc-200 text-center font-bold tracking-tighter sm:text-4xl xl:text-5xl"
      >
        Previous Collaborations
      </h2>
      <p class="text-white h-12 w-12">WIP</p>
    </section>
  </section>
</template>

<script setup lang="ts">
import CountUp from 'vue-countup-v3';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { faYoutube, faInstagram, faTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

gsap.registerPlugin(ScrollTrigger);

let isCountStarted = false;
let statCurrentVals = ref(Array(6).fill(0));

let data: Ref;

try {
  const result = await useAsyncData('work', () => queryContent('/work').findOne());
  data = ref(result.data.value);
  if (data.value.mainDescription == null) {
    data.value.mainDescription = 'Error fetching data.';
  }
} catch (error) {
  console.error('Failed to fetch data:', error);
  data = ref('Failed to fetch data.');
}

const statEndVals = [1710000, 115000, 72000, 750, 65000, 630000];
const logos = [
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

defineComponent({
  components: {
    FontAwesomeIcon,
  },
});

useHead({
  title: 'Work With Us | XEETECHCARE',
  meta: [
    {
      name: 'description',
      content: 'Work with XEETECHCARE, our stats, numbers, the fun sutff.',
    },
  ],
});

onMounted(() => {
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
      trigger: '#statAnimationAnchor',
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

  const carousel = gsap.timeline({ repeat: -1 });
  const logoWidth = document.querySelector('.carousel-item')?.clientWidth || 0;
  const numLogos = logos.length;

  carousel.to('.carousel', {
    x: `-${logoWidth * numLogos}px`,
    duration: 26,
    ease: 'none',
    repeat: -1,
    modifiers: {
      x: function (x) {
        return (parseFloat(x) % (logoWidth * numLogos)) + 'px';
      },
    },
  });

  gsap.from('#brandsSection', {
    scrollTrigger: {
      trigger: '#statisticsSection',
      start: 'top center',
    },
    opacity: 0,
    duration: 1,
  });
});
</script>

<style scoped>
.carousel-container {
  overflow: hidden;
  width: 100%;
}

.carousel {
  display: flex;
  width: 300%;
}

.carousel-item {
  flex: 0 0 auto;
  width: auto;
  height: 60px;
}

@media (max-width: 640px) {
  .carousel {
    width: 600%;
  }
}
</style>
