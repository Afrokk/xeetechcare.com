<template>
  <div class="flex justify-center">
    <div
      id="twitter-embed"
      class="twitter-embed w-11/12 md:w-full items-center justify-center h-[500px] sm:h-[600px] md:h-[700px] overflow-auto custom-scrollbar"
    >
      <div id="loading" class="w-full h-full flex items-center justify-center">
        <div
          class="loader animate-spin border-t-orange-500 ease-linear rounded-full border-4 border-t-4 border-zinc-200 h-12 w-12 mb-4"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
onMounted(() => {
  const twttr = (window as Window).twttr;
  twttr?.ready(() => {
    twttr.widgets
      .createTimeline(
        {
          sourceType: 'profile',
          screenName: 'XEETECHCARE',
        },
        document.getElementById('twitter-embed'),
        {
          chrome: 'noheader nofooter',
          theme: 'dark',
        },
      )
      .then(() => {
        const loadingElement = document.getElementById('loading');
        if (loadingElement) {
          loadingElement.style.display = 'none';
        }
      });
  });
});
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 5px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #040404;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #1da1f2;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #ebebeb;
}
</style>
