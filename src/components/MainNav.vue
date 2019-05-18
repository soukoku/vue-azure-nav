<template>
  <header
    class="flex-none flex items-center h-10 bg-gray-900 text-gray-100 shadow-lg"
  >
    <router-link to="/" tag="h1">
      <a class="flex items-center font-semibold">
        <img
          src="@/assets/logo.png"
          class="h-6 mx-2"
          alt="logo"
          aria-hidden="true"
        />
        Vue blade nav test
      </a>
    </router-link>
    <div class="ml-auto flex items-center">
      <slot></slot>
      <div
        class="flex flex-col cursor-pointer select-none"
        style="max-width:150px;"
      >
        <span class="block truncate text-right">
          long.email.address@company.com
        </span>
        <small
          class="block truncate text-right leading-none uppercase font-semibold"
        >
          User Name
        </small>
      </div>
      <span class="h-8 w-8 rounded-full bg-white inline-block mx-2"></span>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style>
</style>
