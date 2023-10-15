/** @type {import('tailwindcss').Config} */
export default {
  content: [
    'components/**/*.{vue,js,ts}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'composables/**/*.{js,ts}',
    'plugins/**/*.{js,ts}',
    'App.{js,ts,vue}',
    'app.{js,ts,vue}',
    'Error.{js,ts,vue}',
    'error.{js,ts,vue}',
    'content/**/*.md',
  ],
  theme: {
    extend: {
      colors: {
        'gray': '#242424',
      },
      maxWidth: {
        'xl': '1140px',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
