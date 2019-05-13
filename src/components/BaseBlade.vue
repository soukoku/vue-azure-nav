<template>
  <div
    class="blade flex-none flex flex-col border-r border-blue-800 overflow-none"
    :class="{ 'w-full': maximized }"
  >
    <div class="flex-none flex border-b border-blue-800">
      <div class="flex-auto">
        <slot name="header">Blade Header</slot>
      </div>
      <div class="flex-none">
        <button title="Close" @click="doClose">X</button>
      </div>
    </div>
    <div class="flex-none border-b border-blue-800" v-if="hasSlot('toolbar')">
      <slot name="toolbar"></slot>
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
    <div class="flex-none border-t border-blue-800" v-if="hasSlot('footer')">
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
