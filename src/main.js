import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import store from '@/store'
import '@/api/axios-interceptors.js'
import axios from 'axios'
import './icons/index.js'
import components from '@/components/elements'
components.forEach(component => {
  Vue.component(component.name, component)
})
Vue.prototype.axios = axios
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

