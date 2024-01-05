<template>
  <div class="min-h-screen w-full bg-grey flex flex-col items-start justify-center pt-20">
    <section
      id="statisticsSection"
      ref="statisticsSection"
      class="z-20 pb-16 max-w-screen-xl mx-auto flex flex-wrap justify-center items-center"
    >
      <div class="container px-4 md:px-6 flex justify-center flex-col">
        <div class="space-y-2" id="animated-text">
          <h2
            class="text-4xl mt-16 pb-4 text-zinc-200 text-center font-bold tracking-tighter sm:text-6xl xl:text-7xl/none"
          >
            <span class="gradient-text">Work</span> With Us.
          </h2>
          <p class="text-zinc-100 font-normal pb-8 md:mx-20">
            We've worked with brands of all scales. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Sunt minima ex praesentium sit velit ratione esse placeat, adipisci
            nisi veritatis vitae voluptatum iure magnam rerum assumenda, deleniti facere ea labore!
          </p>
        </div>
        <div class="grid gap-6 items-center">
          <div class="flex flex-col justify-center space-y-8 text-center">
            <div class="space-y-2" id="animated-text">
              <h2
                class="text-3xl pb-8 text-zinc-200 text-center font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
              >
                The <span class="gradient-text">Numbers</span>
              </h2>
            </div>
            <div class="w-full max-w-full space-y-4 mx-auto text-white">
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center">
                <div class="grid-item flex flex-col items-center space-y-2 p-4">
                  <div className="p-2 rounded-full">
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
                  <div className="p-2 rounded-full">
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
                  <div className="p-2 rounded-full">
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
                  <div className="p-2 rounded-full">
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
                  <div className="p-2 rounded-full">
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
                  <div className="p-2 rounded-full">
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
        <div id="brandsSection" class="carousel-container bg-gray pt-16">
          <h2
            class="text-3xl pb-8 text-zinc-200 text-center font-bold tracking-tighter sm:text-3xl xl:text-4xl/none"
          >
            Brands we've collaborted with
          </h2>
          <div class="carousel pt-4">
            <img
              v-for="logo in logos"
              :key="logo"
              :src="logo"
              class="carousel-item px-5 border-r border-r-zinc-800 border-opacity-20"
            />
            <img
              v-for="logo in logos"
              :key="logo + 'clone'"
              :src="logo"
              class="carousel-item px-5 border-r border-r-zinc-800 border-opacity-20"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
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

const statEndVals = [1710000, 115000, 72000, 750, 65000, 630000];
const logos = [
  '/assets/img/anker.svg',
  '/assets/img/oneplus.svg',
  '/assets/img/oppo.svg',
  '/assets/img/grammarly.svg',
  '/assets/img/samsung.svg',
  '/assets/img/mediatek.svg',
  '/assets/img/honor.svg',
  '/assets/img/squarespace.svg',
  '/assets/img/nordvpn.svg',
  '/assets/img/huawei.svg',
  '/assets/img/xiaomi.svg',
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
