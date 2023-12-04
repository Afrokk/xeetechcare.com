<template>
  <div class="bg-gray font-inter" id="app">
    <NuxtLayout>
      <Navbar />
      <NuxtPage />
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
  src: url('/fonts/Inter-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'Inter';
  src: url('/fonts/Inter-Light-BETA.woff2') format('woff2');
  font-weight: 300;
  font-style: normal;
}
</style>
