<template>
  <div class="bg-gray font-inter" id="app">
    <NuxtLayout>
      <Navbar />
      <NuxtPage />
      <Footer />
    </NuxtLayout>
  </div>
</template>

<style>
@font-face {
  font-family: 'Inter';
  src: url('/fonts/Inter-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Inter';
  src: url('/fonts/Inter-Bold.woff') format('woff');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'Inter';
  src: url('/fonts/Inter-Light-BETA.woff2') format('woff2');
  font-weight: 300;
  font-style: normal;
}

.gradient-text {
  background: linear-gradient(
    90deg,
    #fcb12f 0%,
    #f97316 25%,
    #f85300 50%,
    #f97316 75%,
    #fcb12f 100%
  );
  background-size: 200% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
