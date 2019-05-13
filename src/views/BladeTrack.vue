<template>
  <div class="w-full h-full flex flex-col">
    <div class="blade-crumb flex-none border-b border-blue-800">
      <router-link :to="{ name: 'home' }">Home</router-link>

      <router-link v-for="(blade, idx) in blades" :key="idx" :to="blade.route">
        {{ blade.name }}
      </router-link>
    </div>
    <div
      class="blade-track flex-auto flex items-strech overflow-hidden overflow-x-auto scrolling-touch"
    >
      <component
        v-for="(blade, idx) in blades"
        :key="idx"
        :is="blade.component"
        @close="closeBlade"
      ></component>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BladeTrack',
  data() {
    return {
      blades: []
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log('before route enter to', to)

    if (to.matched.length > 1) {
      next(vm => {
        vm.blades.push({
          name: to.name || 'Unknown',
          route: to,
          component: to.matched[to.matched.length - 1].components.default
        })
      })
    } else {
      // invalid blade path, back to home
      next('/')
    }
  },
  beforeRouteUpdate(to, from, next) {
    console.log('before route update to', to)

    if (to.matched.length > 1) {
      let oldIndex = this.blades.findIndex(b => b.route.path === to.path)

      if (oldIndex > -1) {
        this.blades[oldIndex].route = to

        // close blades AFTER the oldIndex
        oldIndex++
        if (this.blades.length > oldIndex) {
          this.blades.splice(oldIndex, this.blades.length - oldIndex)
        }
      } else {
        // if new route is "root" feature also clear blades
        const pathParts = to.path.split('/').filter(p => !!p)
        if (pathParts.length === 2) {
          // 2 for blade/root-feature
          this.blades = []
        }

        this.blades.push({
          name: to.name || 'Unknown',
          route: to,
          component: to.matched[to.matched.length - 1].components.default
        })
      }
      next()
    } else {
      // invalid blade path, back to home
      next('/')
    }
  },
  methods: {
    closeBlade(blade) {
      const idx = this.blades.findIndex(b => b.route.path === blade.$route.path)

      if (idx > -1) this.blades.splice(idx, this.blades.length - idx)

      // no more open blades, back to home
      if (!this.blades.length) this.$router.push('/')
    }
  }
}
</script>
<style>
.blade-crumb > a:after {
  content: '>';
}
</style>
