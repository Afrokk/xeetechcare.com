<template>
  <section class="p-8 bg-gray text-white">
    <div class="space-y-2" id="animated-text">
      <h2
        class="text-3xl pb-8 text-zinc-200 text-center font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
      >
        Latest on <span class="gradient-text">YouTube</span>
      </h2>
    </div>
    <div v-if="loading" class="flex justify-center items-center">
      <div
        class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-orange-500"
      ></div>
    </div>
    <div v-else-if="error" class="text-center text-red-500">
      {{ error }}
    </div>
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" ref="videoGrid">
      <div
        class="border border-gray p-4 rounded overflow-hidden shadow-lg"
        v-for="video in videos"
        :key="video.id.videoId"
      >
        <a :href="`https://www.youtube.com/watch?v=${video.id.videoId}`" target="_blank">
          <img
            :src="video.snippet.thumbnails.medium.url"
            :alt="video.snippet.title"
            class="w-full"
          />
          <h3 class="mt-2">{{ decodeHtml(video.snippet.title) }}</h3>
          <template>
            <section class="p-8 bg-gray-100">
              <h2 class="text-2xl mb-4 text-center">Latest on YouTube</h2>
              <div v-if="loading" class="flex justify-center items-center">
                <div
                  class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"
                ></div>
              </div>
              <div v-else-if="error" class="text-center text-red-500">
                {{ error }}
              </div>
              <div
                v-else
                class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
                ref="videoGrid"
              >
                <div
                  class="border border-gray p-4 rounded overflow-hidden shadow-lg"
                  v-for="video in videos"
                  :key="video.id.videoId"
                >
                  <a :href="`https://www.youtube.com/watch?v=${video.id.videoId}`" target="_blank">
                    <img
                      :src="video.snippet.thumbnails.medium.url"
                      :alt="video.snippet.title"
                      class="w-full"
                    />
                    <h3 class="mt-2">{{ video.snippet.title }}</h3>
                  </a>
                </div>
              </div>
            </section>
          </template>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Video } from '@/types/video';

const youtubeApiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
const videos = ref<Video[]>([]);
const videoGrid = ref(null);
const loading = ref(true);
const error = ref<string | null>(null);

function decodeHtml(html: string) {
  const text = document.createElement('textarea');
  text.innerHTML = html;
  return text.value;
}

onMounted(async () => {
  try {
    const baseUrl = 'https://www.googleapis.com/youtube/v3/search';
    const params = new URLSearchParams({
      part: 'snippet',
      channelId: 'UCTqMx8l2TtdZ7_1A40qrFiQ',
      maxResults: '5',
      order: 'date',
      key: youtubeApiKey,
    });
    const response = await fetch(`${baseUrl}?${params}`);
    const data = await response.json();
    videos.value = data.items;
  } catch (err) {
    error.value = 'Failed to load videos. Please try again later.';
  } finally {
    loading.value = false;
  }
});
</script>
