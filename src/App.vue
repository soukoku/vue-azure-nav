<template>
  <div
    class="w-screen h-screen flex flex-col overflow-hidden font-sans text-gray-900 text-sm"
  >
    <nav class="flex-none flex items-center h-10 bg-gray-900 text-gray-100">
      <router-link to="/" class="flex items-center">
        <img src="@/assets/logo.png" class="h-6 mx-2" />
        Vue blade nav test
      </router-link>
      <div class="ml-auto flex items-center">
        <div class="flex flex-col" style="max-width:150px;">
          <span class="block truncate text-right">
            long.email.address@company.com
          </span>
          <small
            class="block truncate text-right leading-none uppercase font-semibold"
          >
            User Name
          </small>
        </div>
        <span class="h-8 w-8 rounded-full bg-white inline-block mx-2"></span>
      </div>
    </nav>
    <div class="flex-auto flex overflow-hidden">
      <nav
        class="flex-none flex flex-col items-stretch bg-gray-800 text-gray-100 overflow-hidden"
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
