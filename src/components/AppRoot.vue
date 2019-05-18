<template>
  <div
    class="w-screen h-screen flex overflow-hidden font-sans text-sm relative"
    :class="{ 'flex-col': layout === 'col' }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    layout: {
      type: String,
      default: 'col',
      validator: function(value) {
        return ['col', 'row'].indexOf(value) !== -1
      }
    }
  }
}
</script>
