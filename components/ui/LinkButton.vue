<template>
  <div>
    <NuxtLink
      :href="link"
      target="_blank"
      class="link-btn flex items-center gap-4 w-ful transition-all hover:scale-102 px-4 mb-6 py-2 rounded-md"
      :class="variantClasses"
    >
      <img
        v-if="thumbnailSrc"
        :src="thumbnailSrc"
        class="w-16 h-16 object-cover rounded-full"
        alt="Thumbnail"
      />
      <div v-else class="w-16 h-16 rounded-full"></div>
      <div class="flex-grow text-center overflow-hidden">
        <h2 class="font-bold uppercase text-xs mb-1 xsm:text-base tracking-wide break-words">
          {{ mainText }}
        </h2>
        <p class="text-xs xsm:text-sm break-words">{{ subText }}</p>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';

const props = defineProps({
  link: {
    type: String,
    required: true,
  },
  mainText: {
    type: String,
    required: true,
  },
  subText: {
    type: String,
    required: false,
  },
  thumbnailSrc: {
    type: String,
    default: '',
    required: false,
  },
  variant: {
    type: String as PropType<'default' | 'special' | 'cta'>,
    default: 'default',
    required: false,
  },
});

/**
 * Animates the gradient button (for CTA variant).
 */
function animateButtonGradient() {
  gsap.to('.gradient-button', {
    backgroundPosition: '200% 0%',
    ease: 'power1.inOut',
    repeat: -1,
    duration: 3,
    yoyo: true,
  });
}

/**
 * Animates the link buttons.
 */
function animateLinkButtons() {
  gsap.fromTo(
    '.link-btn',
    {
      y: 50,
      opacity: 0,
    },
    {
      duration: 0.2,
      y: 0,
      opacity: 1,
      ease: 'elastic.inOut',
      stagger: 0.15,
      clearProps: 'all',
    },
  );
}

onMounted(() => {
  animateButtonGradient();
  animateLinkButtons();
});

const variantClasses = computed(() => {
  const variantClasses = {
    default: 'bg-zinc-200 text-black hover:bg-zinc-300',
    special: 'bg-orange-500 text-black',
    cta: 'gradient-button text-white hover:bg-red-600',
  };
  return variantClasses[props.variant];
});
</script>

<style scoped>
.link-btn {
  backface-visibility: hidden;
}

.gradient-button {
  border: 2px solid;
  animation: fiery 2s linear infinite;
  background: linear-gradient(
    90deg,
    #fcb12f 0%,
    #f97316 25%,
    #f85300 50%,
    #f97316 75%,
    #fcb12f 100%
  );
  background-size: 200% 100%;
}

@keyframes fiery {
  0% {
    border-color: #ff4500; /* OrangeRed */
  }
  25% {
    border-color: #ff6347; /* Tomato */
  }
  50% {
    border-color: gold; /* Coral */
  }
  75% {
    border-color: #ff8c00; /* DarkOrange */
  }
  100% {
    border-color: #ff4500; /* OrangeRed */
  }
}
</style>
