// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'XEETECHCARE',
      meta: [
        {
          name: 'keywords',
          content: 'xeetechcare, xee, tech, xtc, youtube, tech news, reviews',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
      ],
      script: [
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js',
          crossorigin: 'anonymous',
        },
        {
          src: 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.dots.min.js',
          crossorigin: 'anonymous',
        },
        {
          src: 'https://platform.twitter.com/widgets.js',
          async: true,
        }
      ],
    },
  },
});
