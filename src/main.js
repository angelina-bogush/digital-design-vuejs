import Vue from 'vue'
import App from '@/components/App'
import router from '@/router'
import store from '@/store'
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

// const checkAnswer = (res) => {
//   if (res.ok) {
//     return res.json();
//   } else {
//     return Promise.reject(`Ошибка: ${res.status}`);
//   }
// };

