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
    style() {
      return {
        width: this.size + 'px',
        height: this.size + 'px'
      }
    },
    attrs() {
      return {
        ...this.$attrs,
        fill: this.fill
      }
    }
  },
  render(h) {
    const icon = require(`@/assets/${this.iconSet}/${this.icon}.svg`)
    return h(icon.default, {
      style: this.style,
      class: { 'flex-none': true },
      attrs: this.attrs
    })
  }
}
</script>
