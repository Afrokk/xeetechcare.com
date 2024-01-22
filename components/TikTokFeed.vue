<template>
  <div class="custom-scrollbar overflow-auto h-[500px] sm:h-[600px] md:h-[700px] p-4">
    <div v-for="(video, index) in videoData" :key="index" class="mb-4">
      <a :href="videos[index]" target="_blank">
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

<script setup>
const videos = ref([
  'https://www.tiktok.com/@xeetechcare0/video/7267641357299141906',
  'https://www.tiktok.com/@xeetechcare0/video/7283499104011848968',
  'https://www.tiktok.com/@xeetechcare0/video/7131796812633001217',
]);

const videoData = ref([]);

onMounted(async () => {
  for (let url of videos.value) {
    const response = await fetch(`https://www.tiktok.com/oembed?url=${url}`);
    const data = await response.json();
    videoData.value.push(data);
  }
});
</script>

<style>
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
  background: #E4E4E7;
}
</style>
