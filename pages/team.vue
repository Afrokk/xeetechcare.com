<template>
  <section
    class="bg-gray max-w-screen-xl mx-auto text-zinc-100 flex flex-col justify-center items-center min-h-screen px-4 sm:px-0 pt-36 sm:pt-20"
  >
    <h1
      class="text-5xl sm:text-5xl md:text-6xl xl:text-7xl/none mb-4 sm:mb-8 xsm:text-4xl mt-8 sm:mt-16 pb-4 text-zinc-200 text-center font-bold tracking-tighter"
    >
      The <span class="gradient-text">Team</span>
    </h1>
    <div class="flex flex-col items-center">
      <div
        v-for="member in data.team"
        :key="member.id"
        class="card flex flex-col sm:flex-row rounded-lg items-center align-middle max-w-2xl m-3"
      >
        <div class="flex items-center justify-center sm:justify-start px-6 pt-4 w-full sm:w-3/4">
          <NuxtImg 
            width="500"
            height="500"
            format="webp"
            class="aspect-w-1 aspect-h-1 w-full object-cover rounded-full p-0 xsm:p-12 xsm:pb-0 sm:p-0"
            :src="member.image"
            alt="Team member image."
          />
        </div>
        <div class="px-6 py-4 w-full flex flex-col sm:items-start">
          <h2
            class="text-2xl xsm:text-3xl pb-4 text-zinc-200 font-thin text-center sm:text-left uppercase tracking-tighter sm:text-4xl xl:text-5xl/none"
            v-html="member.name"
          ></h2>
          <div v-if="member.id !== 1" class="space-y-2 pb-12">
            <SocialMediaLinks
              :instagramLink="{ link: member.socialMediaLinks.insta, show: true }"
              :email="{ link: member.socialMediaLinks.email, show: true }"
              :youtubeLink="{ show: false }"
              :twitterLink="{ show: false }"
              :tiktokLink="{ show: false }"
            />
          </div>
          <div v-else>
            <SocialMediaLinks />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';

useHead({
  title: 'The Team | XEETECHCARE',
  meta: [
    {
      name: 'description',
      content: 'Meet the team behind XEETECHCARE.',
    },
  ],
});

let data = await fetchData('team');

onMounted(() => {
  const cards = document.querySelectorAll('.card');
  gsap.from(cards, {
    opacity: 0,
    y: -100,
    stagger: 0.2,
    duration: 1,
    ease: 'power2.out',
  });
});

defineExpose({ data });
</script>
