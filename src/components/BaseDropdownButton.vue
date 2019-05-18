<template>
  <button
    @click.stop="doToggle"
    class="flex items-center justify-center relative"
  >
    <slot>Sample Dropdown</slot>
    <div
      v-if="isOpen"
      ref="popup"
      class="min-w-full bg-white shadow-md text-left"
    >
      <slot name="popup">Sample Content</slot>
    </div>
  </button>
</template>

<script>
// import { Portal } from '@linusborg/vue-simple-portal'
import Popper from 'popper.js'
import createFocusGroup from 'focus-group'
export default {
  // components: { Portal },
  props: {
    placement: {
      type: String,
      default: 'bottom'
    },
    focusSelector: {
      type: String,
      default: '[tabindex="-1"]'
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  created() {
    document.addEventListener('click', this.doHide)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.doHide)
    this.doHide()
  },
  methods: {
    doToggle() {
      if (this.isOpen) this.doHide()
      else this.doShow()
    },
    doShow() {
      console.log('show routine')
      if (this.isOpen) return
      this.isOpen = true

      this.$nextTick(() => {
        if (!this.focusGroup) {
          var links = this.$refs.popup.querySelectorAll(this.focusSelector)
          if (links.length) {
            console.log(links)
            this.focusGroup = createFocusGroup({
              members: links,
              wrap: true
            })
              .activate()
              .focusNodeAtIndex(0)
          }
        } else {
          this.focusGroup.activate()
          this.focusGroup.focusNodeAtIndex(0)
        }

        if (!this.popper)
          this.popper = new Popper(this.$el, this.$refs.popup, {
            placement: this.placement,
            modifiers: {
              computeStyle: {
                gpuAcceleration: false
              }
            }
          })
      })
    },
    doHide() {
      console.log('hide routine')
      if (!this.isOpen) return

      if (this.popper) {
        this.popper.destroy()
        this.popper = null
      }
      if (this.focusGroup) {
        this.focusGroup.deactivate()
        this.focusGroup = null
      }

      this.isOpen = false
    }
  }
}
</script>