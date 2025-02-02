<template>
  <footer class="pb-6 pt-20 px-4">
    <div class="container mx-auto text-center">
      <div class="pb-6 hover:text-black">
        <ContactButton
          :colorPallette="{
            bg: 'bg-zinc-200',
            text: 'text-black',
            hover: 'hover:text-black hover:bg-orange-500',
          }"
        />
      </div>
      <SocialMediaLinks :email="{ hide: true }" />
      <p class="text-white mt-5">© {{ currentYear }} XEETECHCARE. All Rights Reserved.</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>
