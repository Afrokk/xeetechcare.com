<template>
  <div class="p-8 bg-gray text-white w-full max-w-screen-xl mx-auto">
    <div v-if="loading" class="flex justify-center items-center w-full">
      <div
        class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-orange-500"
      ></div>
    </div>
    <div v-else-if="err" class="text-center text-red-500 w-full">
      {{ err }}
    </div>
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div class="video-responsive col-span-2 md:col-span-2 lg:col-span-4 mb-1">
        <iframe
          class="w-full h-full"
          :src="`https://www.youtube.com/embed/${videos[0].snippet.resourceId.videoId}`"
          frameborder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div
        v-for="(video, index) in videos.slice(1, 5)"
        :key="index"
        class="col-span-2 md:col-span-1"
      >
        <a
          class="flex items-center justify-center text-center flex-col transform transition duration-100 ease-in-out hover:scale-105 hover:text-orange-500"
          :href="`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`"
          target="_blank"
        >
          <img
            class="w-full"
            :src="video.snippet.thumbnails.medium.url"
            :alt="video.snippet.title"
          />
          <h3 class="pt-4">{{ video.snippet.title }}</h3>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Video } from '@/types/video';

const videos = ref<Video[]>([]);
const err = ref<string | null>(null);
const loading = ref(true);

onMounted(async () => {
  try {
    const response = await fetch('/api/getVideos');
    if (!response.ok) {
      throw new Error(`${response.status} - Failed to fetch videos`);
    }
    const data = await response.json();
    videos.value = data as Video[];
    loading.value = false;
  } catch (error) {
    err.value = error as string;
    loading.value = false;
  }
});

defineExpose({
  videos,
  err,
  loading,
});
</script>

<style scoped>
.video-responsive {
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
}

.video-responsive iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
