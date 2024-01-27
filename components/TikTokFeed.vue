<template>
  <div class="custom-scrollbar overflow-auto h-[500px] sm:h-[600px] md:h-[700px] p-4">
    <div v-for="(video, index) in reelData" :key="index" class="mb-4">
      <a :href="reel[index]" target="_blank">
        <img
          :src="video.thumbnail_url"
          :alt="video.title"
          class="w-6/12 md:w-full xl:w-6/12 mx-auto rounded-lg shadow-md"
        />
      </a>
      <h2 class="text-zinc-200 font-normal text-sm mt-2">{{ video.title }}</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Reel } from '@/types/reel';

const reel = ref<string[]>([
  'https://www.tiktok.com/@xeetechcare0/video/7267641357299141906',
  'https://www.tiktok.com/@xeetechcare0/video/7283499104011848968',
  'https://www.tiktok.com/@xeetechcare0/video/7131796812633001217',
]);

const reelData = ref<Reel[]>([]);
const fetchError = ref<string | null>(null);

/**
 * Fetches the data for TikTok reels updates the reelData and error state
 * @async
 * @function fetchReels
 * @throws {Error} If the API request fails.
 */
async function fetchReels(): Promise<void> {
  try {
    const fetchPromises = reel.value.map((url) =>
      fetch(`https://www.tiktok.com/oembed?url=${url}`).then((response) => response.json()),
    );

    reelData.value = await Promise.all(fetchPromises);
  } catch (error) {
    fetchError.value = 'Failed to fetch video data';
    console.error(fetchError.value, error);
  }
}

onMounted(async () => {
  await fetchReels();
});
</script>

<style scoped>
.h-600px {
  height: 700px;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 5px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #111215;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #f97314;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #e4e4e7;
}
</style>
