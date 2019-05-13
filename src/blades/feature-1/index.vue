<template>
  <base-blade>
    This is index of feature-1
    <p>
      Go to <router-link :to="{ name: 'feature-1-sub-1' }">sub 1</router-link>
    </p>
  </base-blade>
</template>

<script>
export default {}
</script>

<style>
</style>
