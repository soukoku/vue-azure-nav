<template>
  <div
    class="blade flex-none flex flex-col border-l border-gray-400 overflow-none shadow-md bg-white"
    :class="{ 'w-full': maximized }"
  >
    <div class="flex-none flex border-b border-gray-400">
      <div class="flex-none">
        <slot name="icon"></slot>
      </div>
      <div class="flex-auto pl-4 py-1 overflow-hidden">
        <h2 class="text-lg font-semibold truncate">{{ title }}</h2>
        <small class="block truncate -mt-1">{{ subTitle }}</small>
      </div>
      <div class="flex-none flex items-center self-start">
        <slot name="header-extra"></slot>
        <button
          title="Close"
          @click="doClose"
          class="flex items-center justify-center w-8 h-8 hover:bg-red-800 hover:text-red-100"
        >
          <CloseIcon :size="20" />
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
import CloseIcon from 'mdi/Close'
export default {
  name: 'Blade',
  components: {
    CloseIcon
  },
  props: {
    maximized: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: 'Blade Header'
    },
    subTitle: {
      type: String,
      default: 'Sub-title'
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
