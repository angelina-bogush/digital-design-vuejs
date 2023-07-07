import Vue from 'vue'
import App from '@/components/App'
import router from '@/router'
import store from '@/store'
import './icons/index.js'
import components from '@/components/elements'
components.forEach(component => {
  Vue.component(component.name, component)
})

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

const user = {
  baseUrl: "http://45.12.239.156:8081/api",
  login: "bogush.a",
  password: "jc63fk",
  token:
    localStorage.getItem('token')
};

const checkAnswer = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
};

