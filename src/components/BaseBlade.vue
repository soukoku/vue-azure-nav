<template>
  <section
    class="blade flex-none flex flex-col border-l border-gray-400 overflow-none shadow-md bg-white"
    :style="sizeStyle"
    :aria-label="title"
  >
    <header class="flex-none flex border-b border-gray-400">
      <div class="flex-none" aria-hidden="true">
        <slot name="icon"></slot>
      </div>
      <div class="flex-auto pl-4 py-1 overflow-hidden">
        <h2 class="text-lg font-semibold truncate">{{ title }}</h2>
        <small class="block truncate -mt-1">{{ subTitle }}</small>
      </div>
      <div class="flex-none flex items-center self-start">
        <slot name="header-extra"></slot>
        <button
          aria-label="Close blade."
          title="Close"
          @click="doClose"
          class="flex items-center justify-center w-8 h-8 hover:bg-red-700 hover:text-red-100"
        >
          <base-icon icon="close" :size="14" />
        </button>
      </div>
    </header>
    <base-toolbar
      class="flex-none border-b border-gray-400 px-4"
      v-if="hasSlot('toolbar')"
    >
      <slot name="toolbar"></slot>
    </base-toolbar>
    <div class="flex-auto overflow-auto p-4">
      <slot></slot>
    </div>
    <footer
      class="flex-none border-t border-gray-400 p-4"
      v-if="hasSlot('footer')"
    >
      <slot name="footer"></slot>
    </footer>
  </section>
</template>

<script>
export default {
  name: 'Blade',
  props: {
    size: {
      type: Number,
      default: 300
    },
    sizeMode: {
      type: String,
      default: 'max',
      validator: function(value) {
        return ['max', 'min', 'fixed'].indexOf(value) !== -1
      }
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
  computed: {
    sizeStyle() {
      const obj = {
        minWidth: this.size + 'px',
        maxWidth: '100%'
      }
      if (this.sizeMode === 'fixed') {
        obj.width = this.size + 'px'
      } else if (this.sizeMode === 'max') {
        obj.width = '100%'
      }
      return obj
    }
  },
  methods: {
    hasSlot(name = 'default') {
      // vue 2.6+ can just use $scopedSlots
      return !!this.$scopedSlots[name]
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
