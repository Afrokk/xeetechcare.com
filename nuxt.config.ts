// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],
  app: {
    head: {
      title: 'XEETECHCARE',
      meta: [
        {
          name: 'keywords',
          content: 'xeetechcare, xee, tech, xtc, youtube, tech news, reviews',
        },
        {
          property: 'og:image',
          content: 'https://xeetechcare.com/ogImage.jpg',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'manifest',
          href: '/site.webmanifest',
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
        },
      ],
    },
  },
});
