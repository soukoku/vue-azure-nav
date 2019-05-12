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
        <router-link
          v-for="feat in topFeatures"
          :key="feat.text"
          :to="feat.path"
          >{{ feat.text }}</router-link
        >
      </nav>
      <main class="flex-auto overflow-hidden">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //todo: make it dynamic
      topFeatures: [
        {
          text: 'Feature 1',
          path: '/blade/feature-1'
        },
        {
          text: 'Feature 2',
          path: '/blade/feature-2'
        }
      ]
    }
  }
}
</script>
