<template>
  <div
    class="blade flex-none flex flex-col border-r border-blue-800 overflow-none"
    :class="{ 'w-full': maximized }"
  >
    <div class="flex-none border-b border-blue-800">
      <slot name="header">Blade Header</slot>
    </div>
    <div class="flex-none border-b border-blue-800">
      <slot name="toolbar">Toolbar</slot>
    </div>
    <div class="flex-auto overflow-auto">
      <slot>
        <p class="mb-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod error
          illum quis reiciendis modi quas eaque sint commodi quasi pariatur
          ipsam consectetur enim tempora, delectus, maiores dolorem nisi.
          Perferendis, placeat.
        </p>
        <p class="mb-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod error
          illum quis reiciendis modi quas eaque sint commodi quasi pariatur
          ipsam consectetur enim tempora, delectus, maiores dolorem nisi.
          Perferendis, placeat.
        </p>
        <p class="mb-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod error
          illum quis reiciendis modi quas eaque sint commodi quasi pariatur
          ipsam consectetur enim tempora, delectus, maiores dolorem nisi.
          Perferendis, placeat.
        </p>
      </slot>
    </div>
    <div class="flex-none border-t border-blue-800">
      <slot name="footer">Footer</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Blade',
  props: {
    maximized: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style>
.blade {
  min-width: theme('width.64');
}
</style>
