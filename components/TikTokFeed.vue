<template>
  <div
    class="custom-scrollbar overflow-auto h-[500px] sm:h-[600px] md:h-[700px] p-5 grid grid-cols-1 sm:grid-cols-2 gap-6"
  >
    <div v-for="(video, index) in reelData" :key="index" class="mb-4">
      <a :href="reel[index]" target="_blank">
        <img
          :src="video.thumbnail_url"
          :alt="video.title"
          class="w-52 sm:w-full mx-auto rounded-lg shadow-md transition duration-300 hover:scale-102"
        />
      </a>
      <h2 class="text-zinc-200 font-normal text-sm mt-2">{{ cleanCaption(video.title) }}</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Reel } from '@/types/reel';

const reel = ref<string[]>([
  'https://www.tiktok.com/@xeetechcare0/video/7340365410975485192',
  'https://www.tiktok.com/@xeetechcare0/video/7330282108134395154',
  'https://www.tiktok.com/@xeetechcare0/video/7339895279618903304',
  'https://www.tiktok.com/@xeetechcare0/video/7267641357299141906',
  'https://www.tiktok.com/@xeetechcare0/video/7327393765499440402',
  'https://www.tiktok.com/@xeetechcare0/video/7131796812633001217',
]);

const reelData = ref<Reel[]>([]);
const fetchError = ref<string | null>(null);

/**
 * Fetches reels data asynchronously.
 * @returns {Promise<void>} A promise that resolves when all reels are fetched.
 * @throws {Error} If there are no reels to fetch.
 */
async function fetchReels(): Promise<void> {
  if (!Array.isArray(reel.value) || !reel.value.length) {
    throw new Error('No reels to fetch');
  }

  const fetchPromises = reel.value.map((url) => fetchEachReel(url));

  try {
    reelData.value = await Promise.all(fetchPromises);
  } catch (error) {
    fetchError.value = 'Failed to fetch reel data.';
    console.error(fetchError.value, error);
  }
}

/**
 * Fetches reel data from a given URL.
 * @param url - The URL of the reel.
 * @returns A Promise that resolves to the fetched reel data.
 * @throws An error if the fetch operation fails.
 */
async function fetchEachReel(url: string): Promise<Reel> {
  const response = await fetch(`https://www.tiktok.com/oembed?url=${url}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch reel data from ${url}`);
  }

  return response.json();
}

/**
 * Cleans up the Reel caption.
 *
 * @param {string} caption - The caption string.
 * @return {string} Cleaned up caption.
 */
function cleanCaption(caption: string): string {
  if (typeof caption !== 'string') {
    throw new TypeError('Caption must be a string');
  }

  const cleanedCaption = caption.replace(/#\w+/g, '').trim();
  return cleanedCaption;
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
