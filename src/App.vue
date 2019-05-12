<template>
  <div class="w-screen h-screen flex flex-col overflow-hidden">
    <nav class="flex-none flex items-center h-10 bg-blue-800 text-blue-100">
      <img src="@/assets/logo.png" class="h-6" />
      Top navigation
    </nav>
    <div class="flex-auto flex overflow-hidden">
      <nav
        class="flex-none flex flex-col items-center bg-blue-900 text-blue-100"
      >
        Side nav
        <router-link :to="{ name: 'home' }">Home</router-link>
        <router-link to="/blade/test1">Track 1</router-link>
        <router-link to="/blade/test2">Track 2</router-link>
        <router-link to="/blade/test3">Track 3</router-link>
      </nav>
      <main class="flex-auto overflow-hidden">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>
<script>
// import BladeTrack from '@/components/BladeTrack'
// import Blade from '@/components/Blade'
export default {
  // components: {
  //   BladeTrack,
  //   Blade
  // }
}
</script>
