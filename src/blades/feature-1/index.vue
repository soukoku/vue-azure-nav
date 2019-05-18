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
      <p>
        <base-dropdown-button>
          <template v-slot:popup>
            <ul>
              <li><a tabindex="-1">Item 1</a></li>
              <li><a tabindex="-1">Item 2</a></li>
              <li><a tabindex="-1">Item 3</a></li>
              <li><a tabindex="-1">Item 4</a></li>
              <li><a tabindex="-1">Item 5</a></li>
              <li><a tabindex="-1">Item 6</a></li>
              <li><a tabindex="-1">Item 7</a></li>
            </ul>
          </template>
        </base-dropdown-button>
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
