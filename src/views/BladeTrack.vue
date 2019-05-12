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
      next(false)
    }
  },
  beforeRouteUpdate(to, from, next) {
    console.log('before route update to', to)

    if (to.matched.length > 1) {
      next()
      this.blades.push({
        name: to.name || 'Unknown',
        route: to,
        component: to.matched[to.matched.length - 1].components.default
      })
    } else {
      next(false)
    }
    // called when the route that renders this component has changed,
    // but this component is reused in the new route.
    // For example, for a route with dynamic params `/foo/:id`, when we
    // navigate between `/foo/1` and `/foo/2`, the same `Foo` component instance
    // will be reused, and this hook will be called when that happens.
    // has access to `this` component instance.
  },
  beforeRouteLeave(to, from, next) {
    console.log('before route leave to', to)
    next()
    // called when the route that renders this component is about to
    // be navigated away from.
    // has access to `this` component instance.
  }
}
</script>
<style>
.blade-crumb > a:after {
  content: '>';
}
</style>
