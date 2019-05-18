import Vue from 'vue'
import '@/components/autoregister'
import Main from './Main.vue'
import router from './router'
import '@/assets/site.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(Main)
}).$mount('#app')
