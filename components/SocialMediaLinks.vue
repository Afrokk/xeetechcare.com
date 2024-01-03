<template>
  <div class="flex space-x-2 sm:space-x-4 justify-center">
    <a
      href="https://www.youtube.com/user/XEETECHCARE"
      target="_blank"
      rel="noopener noreferrer"
      class="bg-zinc-200 text-gray hover:text-red-600 rounded-full flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10"
    >
      <font-awesome-icon :icon="youtubeIcon" class="h-5 w-5 sm:h-6 sm:w-6" />
    </a>
    <a
      href="https://www.instagram.com/xeetechcare/"
      target="_blank"
      rel="noopener noreferrer"
      class="bg-zinc-300 text-gray hover:text-purple-600 rounded-full flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10"
    >
      <font-awesome-icon :icon="instagramIcon" class="h-5 w-5 sm:h-6 sm:w-6" />
    </a>
    <a
      href="https://twitter.com/XEETECHCARE"
      target="_blank"
      rel="noopener noreferrer"
      class="bg-zinc-300 text-gray hover:text-blue-600 rounded-full flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10"
    >
      <font-awesome-icon :icon="twitterIcon" class="h-5 w-5 sm:h-6 sm:w-6" />
    </a>
    <a
      href="https://www.tiktok.com/@xeetechcare0"
      target="_blank"
      rel="noopener noreferrer"
      class="bg-zinc-300 text-gray hover:text-pink-600 rounded-full flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10"
    >
      <font-awesome-icon :icon="tiktokIcon" class="h-5 w-5 sm:h-6 sm:w-6" />
    </a>
    <a
      href="mailto:xeetechcare@delkatalents.com"
      target="_blank"
      rel="noopener noreferrer"
      class="bg-zinc-300 text-gray hover:text-orange-500 rounded-full flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10"
    >
      <font-awesome-icon :icon="envelopeIcon" class="h-5 w-5 sm:h-6 sm:w-6" />
    </a>
  </div>
</template>

<script setup lang="ts">
import { faYoutube, faInstagram, faTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const youtubeIcon = faYoutube;
const instagramIcon = faInstagram;
const twitterIcon = faTwitter;
const tiktokIcon = faTiktok;
const envelopeIcon = faEnvelope;

defineComponent({
  components: {
    FontAwesomeIcon,
  },
});
</script>

<style scoped>
a {
  transition: color 0.3s ease;
}
</style>
