<template>
  <div
    class="w-screen h-screen flex flex-col overflow-hidden font-sans text-gray-900 text-sm"
  >
    <nav class="flex-none flex items-center h-10 bg-gray-900 text-gray-100">
      <router-link to="/" class="flex items-center">
        <img src="@/assets/logo.png" class="h-6 mx-2" />
        Vue blade nav test
      </router-link>
      <div class="ml-auto mr-1 flex items-center">
        User
        <span class="h-8 w-8 rounded-full bg-white inline-block ml-1"></span>
      </div>
    </nav>
    <div class="flex-auto flex overflow-hidden">
      <nav
        class="flex-none flex flex-col items-center bg-gray-800 text-gray-100 overflow-hidden"
      >
        <div class="flex-none">
          <router-link to="/" class="block py-1 px-4">Home</router-link>
        </div>

        <div class="flex-auto overflow-auto">
          <router-link
            v-for="feat in topFeatures"
            :key="feat.text"
            :to="feat.path"
            class="block py-1 px-4"
            >{{ feat.text }}</router-link
          >
        </div>
      </nav>
      <main class="flex-auto overflow-hidden shadow-lg">
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
