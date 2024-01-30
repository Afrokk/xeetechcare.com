<template>
  <div
    v-for="(collab, index) in data.collabs"
    :key="index"
    :class="
      index % 2 === 0
        ? 'flex flex-col md:flex-row w-screen-xl items-center justify-center'
        : 'flex flex-col md:flex-row-reverse w-screen-xl items-center justify-center'
    "
  >
    <div class="w-full md:w-2/4 px-10 py-5 md:px-10 md:py-6 md:h-auto aspect-video md:aspect-video">
      <iframe
        class="h-full w-full"
        :src="`https://www.youtube.com/embed/${collab.videoId}`"
        frameborder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div class="w-full flex flex-col md:w-2/4 p-10 pt-5 pb-5 md:p-10">
      <h3
        class="font-bold text-4xl uppercase text-zinc-100 tracking-tigher text-center md:text-left"
      >
        {{ collab.name }}
      </h3>
      <div class="pb-4 text-zinc-400 text-sm flex justify-center md:justify-normal items-center">
        <p class="inline-block">{{ collab.date }}</p>
        <span class="mx-2">&#8226;</span>
        <font-awesome-icon :icon="faEye" class="h-4 w-4 sm:h-5 sm:w-5" />
        <p class="inline-block ml-2">{{ collab.views }}</p>
        <span class="mx-2">&#8226;</span>
        <p class="inline-block">{{ collab.type }}</p>
      </div>
      <p v-html="collab.description" class="text-zinc-200"></p>
      <p v-if="collab.subDescription" v-html="collab.subDescription" class="text-zinc-200 pt-4"></p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faEye);

let data = await fetchData('past-collabs');

defineExpose({ data });
</script>
