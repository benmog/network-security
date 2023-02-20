import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router';

import { ROUTE_CONFIG } from './routeConfig';
Vue.use(Router);
Vue.config.productionTip = false
const router = new Router({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  routes: ROUTE_CONFIG, // short for `routes: routes`
})
Vue.use(router);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
