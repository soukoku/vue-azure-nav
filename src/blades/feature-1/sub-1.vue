<template>
  <base-blade :maximized="false" class="w-64">
    This is a sub feature of feature-1
    <p>
      Go to <router-link :to="{ name: 'feature-1-sub-2' }">sub 2</router-link>
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
