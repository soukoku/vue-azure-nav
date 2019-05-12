import Vue from 'vue'
import '@/components/autoregister'
import App from './App.vue'
import router from './router'
import '@/assets/site.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
