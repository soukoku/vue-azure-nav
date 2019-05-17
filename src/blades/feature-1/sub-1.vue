<template>
  <base-blade size-mode="fixed">
    <template v-slot:header-extra>
      <a class="link mx-1">test truncate long text</a>
    </template>
    <template v-slot:toolbar>
      <button>Overflow 🔥</button>
      <button><base-icon icon="fast-rewind" /> Rewind</button>
      <button><base-icon icon="play" /> Play</button>
      <button><base-icon icon="fast-forward" /> Forward</button>
      <button>button 3</button>
      <button>button 4</button>
      <button>button 5</button>
    </template>

    This is a sub feature of feature-1
    <p>
      Go to
      <router-link class="link" :to="{ name: 'feature-1-sub-2' }"
        >sub 2</router-link
      >
    </p>
    <p class="mb-4">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod error illum
      quis reiciendis modi quas eaque sint commodi quasi pariatur ipsam
      consectetur enim tempora, delectus, maiores dolorem nisi. Perferendis,
      placeat.
    </p>
    <p class="mb-4">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod error illum
      quis reiciendis modi quas eaque sint commodi quasi pariatur ipsam
      consectetur enim tempora, delectus, maiores dolorem nisi. Perferendis,
      placeat.
    </p>
    <p class="mb-4">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod error illum
      quis reiciendis modi quas eaque sint commodi quasi pariatur ipsam
      consectetur enim tempora, delectus, maiores dolorem nisi. Perferendis,
      placeat.
    </p>
  </base-blade>
</template>

<script>
export default {}
</script>

<style>
</style>
