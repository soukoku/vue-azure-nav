<template>
  <base-blade>
    This is index of feature-1
    <p>
      Go to <router-link class="link" :to="{ name: 'feature-1-sub-1' }">sub 1</router-link>
    </p>

    <template v-slot:toolbar>
      This is toolbar 👌
    </template>
    <template v-slot:footer>
      This is footer 🔥🔥🔥
    </template>
  </base-blade>
</template>

<script>
export default {}
</script>

<style>
</style>
