<template>
  <div
    class="blade flex-none flex flex-col border-l border-gray-400 overflow-none shadow-md bg-white"
    :class="{ 'w-full': maximized }"
  >
    <div class="flex-none flex border-b border-gray-400">
      <div class="flex-auto pl-4">
        <slot name="header">Blade Header</slot>
      </div>
      <div class="flex-none">
        <button
          title="Close"
          @click="doClose"
          class="inline-block w-8 h-8 hover:bg-red-800 hover:text-red-100"
        >
          X
        </button>
      </div>
    </div>
    <div class="flex-none border-b border-gray-400" v-if="hasSlot('toolbar')">
      <slot name="toolbar"></slot>
    </div>
    <div class="flex-auto overflow-auto p-4">
      <slot></slot>
    </div>
    <div class="flex-none border-t border-gray-400" v-if="hasSlot('footer')">
      <slot name="footer"></slot>
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
  },
  methods: {
    hasSlot(name = 'default') {
      return !!this.$slots[name] || !!this.$scopedSlots[name]
    },
    doClose() {
      // horrible hack due to no template inheritance in vue :(
      this.$parent.$emit('close', this.$parent)
    }
  }
}
</script>

<style>
.blade {
  min-width: theme('width.64');
}
</style>
