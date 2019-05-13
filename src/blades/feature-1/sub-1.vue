<template>
  <base-blade :maximized="false">
    This is a sub feature of feature-1
    <p>
      Go to <router-link :to="{ name: 'feature-1-sub-2' }">sub 2</router-link>
    </p>
  </base-blade>
</template>

<script>
export default {}
</script>

<style>
</style>
