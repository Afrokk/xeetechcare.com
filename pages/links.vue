<template>
  <section
    class="bg-gray pb-44 max-w-screen-xl mx-auto text-zinc-100 flex flex-col justify-center items-center min-h-screen px-4 sm:px-0 pt-36 sm:pt-20"
  >
    <NuxtLink
      to="/"
      class="text-4xl sm:text-5xl md:text-6xl xl:text-7xl/none xsm:text-4xl pb-4 text-zinc-200 text-center font-bold tracking-tighter"
    >
      xee<span class="gradient-text">tech</span>care
    </NuxtLink>
    <div class="mb-14">
      <SocialMediaLinks />
    </div>
    <div class="w-full sm:w-3/4" v-for="(link, index) in data.links" :key="index" ref="linkButtons">
      <LinkButton
        :thumbnail-src="link.thumbnailSrc"
        :link="link.link"
        :main-text="link.mainText"
        :sub-text="link.subText"
        :variant="link.variant"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { LinksData } from '@/types/link';
import { gsap } from 'gsap';

const data: LinksData = await fetchData<LinksData>('links');

const linkButtons = ref(null);

definePageMeta({
  layout: 'links',
});

useHead({
  title: 'Links in Bio | XEETECHCARE',
  meta: [
    {
      name: 'description',
      content: 'Links to all XEETECHCARE social media.',
    },
  ],
});

/**
 * Initializes the button transition animation.
 */
function initButtonTransition() {
  gsap.fromTo(
    linkButtons.value,
    { y: 100, opacity: 0 },
    {
      duration: 0.5,
      y: 0,
      opacity: 1,
      ease: 'power2.inOut',
      stagger: 0.15,
      clearProps: 'all',
    },
  );
}

onMounted(() => {
  animateGradientText();
  initButtonTransition();
});

defineExpose({ data });
</script>
