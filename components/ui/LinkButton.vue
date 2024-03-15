<template>
  <a
    :href="link"
    target="_blank"
    class="inline-block px-4 py-2 text-center rounded text-white transition-colors duration-200"
    :class="variantClasses"
  >
    {{ text }}
  </a>
</template>

<script setup lang="ts">
const props = defineProps({
  link: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  variant: {
    type: String as PropType<'default' | 'variant1' | 'variant2'>,
    default: 'default',
  },
});

const variantClasses = computed(() => {
  // TO DO
  let variantClasses = {
    default: 'bg-black hover:bg-gray-800',
    variant1: 'bg-green-500 hover:bg-green-600',
    variant2: 'bg-red-500 hover:bg-red-600',
  };
  return variantClasses[props.variant];
});
</script>
