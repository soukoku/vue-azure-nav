<template>
  <div role="toolbar" class="base-toolbar flex">
    <div class="flex-auto flex items-strech whitespace-no-wrap overflow-hidden">
      <slot></slot>
    </div>
    <button class="flow-btn flex-none">
      <base-icon icon="cheveron-down" />
    </button>
  </div>
</template>

<script>
export default {}
</script>
<style>
.base-toolbar button {
  @apply flex-none flex items-center justify-center px-2 py-1;
}
/* .base-toolbar button:not(.flow-btn) > svg {
  @apply mr-1;
} */
.base-toolbar .flow-btn {
  @apply p-1;
}
</style>
