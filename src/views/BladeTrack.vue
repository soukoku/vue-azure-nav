<template>
  <div class="w-full h-full flex flex-col">
    <div class="blade-crumb flex-none border-b border-gray-400 pl-3">
      <router-link :to="{ name: 'home' }" class="link inline-block p-1"
        >Home</router-link
      >

      <template v-for="(blade, idx) in blades">
        &gt;
        <router-link :key="idx" :to="blade.route" class="link inline-block p-1">
          {{ blade.name }}
        </router-link>
      </template>
    </div>

    <div
      class="blade-track flex-auto flex items-strech overflow-hidden overflow-x-auto scrolling-touch"
      ref="track"
    >
      <component
        v-for="(blade, idx) in blades"
        :key="idx"
        :is="blade.component"
        :data-index="idx"
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
      // see if this blade is already open
      let oldIndex = this.blades.findIndex(b => b.route.path === to.path)

      if (oldIndex > -1) {
        // close blades since the oldIndex
        this.blades.splice(oldIndex, this.blades.length - oldIndex)
      } else {
        // if new route is "root" blade also clear
        const pathParts = to.path.split('/').filter(p => !!p)
        if (pathParts.length === 2) {
          // 2 for [bladetrack,root-blade]
          this.blades = []
        }
      }

      this.blades.push({
        name: to.name || 'Unknown',
        route: to,
        component: to.matched[to.matched.length - 1].components.default
      })
      next()

      // scroll to last blade.
      // nextTick is not slow enough so use timeout
      // this.$nextTick(() => {
      setTimeout(() => {
        console.log('should scroll to end')
        const track = this.$refs.track
        track.scrollLeft = track.scrollWidth
      }, 50)
    } else {
      // invalid blade path, back to home
      next('/')
    }
  },
  methods: {
    closeBlade(blade) {
      const dataIdx = blade.$el.dataset.index
      this.blades.splice(dataIdx, this.blades.length - dataIdx)

      // no more open blades, back to home
      if (!this.blades.length) this.$router.push('/')
    }
  }
}
</script>
