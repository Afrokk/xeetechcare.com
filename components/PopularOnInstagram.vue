<template>
  <div
    class="p-8 bg-gray text-white w-full max-w-screen-xl mx-auto flex justify-center items-center"
  >
    <div v-if="loading" class="flex justify-center items-center w-full">
      <div
        class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-orange-500"
      ></div>
    </div>
    <div v-else-if="err" class="text-center text-red-500 w-full">
      {{ err }}
    </div>
    <div
      v-else
      class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full justify-center"
    >
      <div
        v-for="(post, index) in posts"
        :key="index"
        :class="{ 'pb-8 sm:pb-0': index === 0 }"
        id="post"
        class="w-full md:w-1/2 mx-auto"
      >
        <div class="video-responsive flex justify-center rounded-md" v-html="post.embedCode"></div>
        <div class="mt-4 text-sm sm:text-base md:text-sm">
          <div class="text-zinc-200 rounded-md flex items-center">
            <p class="font-bold text-orange-500 text-lg">
              "<span class="text-zinc-200 italic font-normal text-sm">{{ post.caption }}</span
              >"
            </p>
          </div>
          <p v-if="post.likeCount" class="font-bold tracking-tighter mt-2">
            <FontAwesomeIcon :icon="faHeart" class="text-red-600 h-6 mr-1 align-middle" />
            {{ post.likeCount }} likes
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Post } from '@/types/post';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const posts = ref<Post[]>([]);
const err = ref<string | null>(null);
const loading = ref(true);

/**
 * Fetches posts from the API.
 * @async
 * @sets posts, error and loading states.
 * @throws {Error} If the API request fails.
 */
async function getPosts() {
  try {
    const response = await fetch('/api/getPosts');
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    const data = await response.json();
    posts.value = data as Post[];
    loading.value = false;
  } catch (error) {
    err.value = error as string;
    loading.value = false;
  }
}

/**
 * @function animatePosts
 * Animates the individual posts on the Instagram Section.
 */
function animatePosts() {
  gsap.from('#post > div', {
    scrollTrigger: {
      trigger: '#post',
      start: 'top 95%',
      end: 'top 50%',
      scrub: 1,
    },
    duration: 1.5,
    opacity: 0,
    y: 150,
    ease: 'back.inOut',
    stagger: 0.05,
  });
}

onMounted(async () => {
  await getPosts();
  animatePosts();
});

defineComponent({
  components: {
    FontAwesomeIcon,
  },
});
</script>

<style scoped>
.video-responsive {
  position: relative;
  overflow: hidden;
  width: 100%;
  max-height: 130.25vw;
  transition: max-height 0.3s ease-in-out;
}
.video-responsive::before {
  content: '';
  display: block;
  padding-top: 130.25%;
}

@media (max-width: 640px) {
  .video-responsive {
    max-height: 75vw;
  }
}
</style>
