<template>
  <div class="flex space-x-2 sm:space-x-4 justify-center">
    <a
      v-if="youtubeLink.show"
      :href="youtubeLink.link"
      target="_blank"
      rel="noopener noreferrer"
      class="bg-zinc-200 text-gray hover:text-red-600 rounded-full flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10"
    >
      <font-awesome-icon :icon="youtubeIcon" class="h-5 w-5 sm:h-6 sm:w-6" />
    </a>
    <a
      v-if="instagramLink.show"
      :href="instagramLink.link"
      target="_blank"
      rel="noopener noreferrer"
      class="bg-zinc-300 text-gray hover:text-purple-600 rounded-full flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10"
    >
      <font-awesome-icon :icon="instagramIcon" class="h-5 w-5 sm:h-6 sm:w-6" />
    </a>
    <a
      v-if="twitterLink.show"
      :href="twitterLink.link"
      target="_blank"
      rel="noopener noreferrer"
      class="bg-zinc-300 text-gray hover:text-blue-600 rounded-full flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10"
    >
      <font-awesome-icon :icon="twitterIcon" class="h-5 w-5 sm:h-6 sm:w-6" />
    </a>
    <a
      v-if="tiktokLink.show"
      :href="tiktokLink.link"
      target="_blank"
      rel="noopener noreferrer"
      class="bg-zinc-300 text-gray hover:text-pink-600 rounded-full flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10"
    >
      <font-awesome-icon :icon="tiktokIcon" class="h-5 w-5 sm:h-6 sm:w-6" />
    </a>
    <a
      v-if="email.show"
      :href="'mailto:' + email.link"
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

defineProps({
  twitterLink: {
    type: Object,
    default: () => ({
      link: 'https://twitter.com/xeetechcare',
      show: true,
    }),
  },
  instagramLink: {
    type: Object,
    default: () => ({
      link: 'https://www.instagram.com/xeetechcare',
      show: true,
    }),
  },
  youtubeLink: {
    type: Object,
    default: () => ({
      link: 'https://www.youtube.com/xeetechcare',
      show: true,
    }),
  },
  tiktokLink: {
    type: Object,
    default: () => ({
      link: 'https://www.tiktok.com/@xeetechcare0',
      show: true,
    }),
  },
  email: {
    type: Object,
    default: () => ({
      link: 'xeetechcare@delkatalents.com',
      show: true,
    }),
  },
});
</script>

<style scoped>
a {
  transition: color 0.3s ease;
}
</style>
