<script>
export default {
  props: {
    iconSet: {
      type: String,
      default: 'zondicons'
    },
    icon: {
      type: String,
      default: 'document',
      required: true
    },
    size: {
      type: Number,
      default: 20
    },
    fill: {
      type: String,
      default: 'currentColor'
    }
  },
  computed: {
    attrs() {
      return {
        ...this.$attrs,
        fill: this.fill,
        width: this.size,
        height: this.size
      }
    }
  },
  render(h) {
    const icon = require(`@/assets/${this.iconSet}/${this.icon}.svg`)
    return h(icon.default, {
      class: { 'flex-none': true },
      attrs: this.attrs
    })
  }
}
</script>
