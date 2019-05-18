<template>
  <app-root>
    <main-nav></main-nav>
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
            :key="feat.path"
            :to="feat"
            class="block py-1 px-4"
            >{{ feat.name }}</router-link
          >
        </div>
      </nav>
      <main class="flex-auto overflow-hidden shadow-lg">
        <router-view></router-view>
      </main>
    </div>
  </app-root>
</template>
<script>
import AppRoot from '@/components/AppRoot'
import MainNav from '@/components/MainNav'
export default {
  components: {
    AppRoot,
    MainNav
  },
  data() {
    const bladeRoute = this.$router.options.routes.find(r => r.name === 'blade')
    return {
      topFeatures: bladeRoute.children
    }
  }
}
</script>
