import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import 'es6-promise/auto'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import routes from './routes';
import store from './store'

Vue.use(VueAxios, axios)

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)
Vue.config.productionTip = false
const router = new VueRouter({routes}); 

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

