<template>
  <base-blade>
    <template v-slot>
      This is index of feature-1
      <p>
        Go to
        <router-link class="link" :to="{ name: 'feature-1-sub-1' }"
          >sub 1</router-link
        >
      </p>
    </template>

    <template v-slot:toolbar>
      <button>
        This is toolbar 👌
      </button>
      <button>button 1</button>
      <button>button 2</button>
      <button>button 3</button>
      <button>button 4</button>
      <button>button 5</button>
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
