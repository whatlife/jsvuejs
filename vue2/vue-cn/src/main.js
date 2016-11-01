import Vue from 'vue';
import App from './App.vue';
import router from './router/router';

import './css/style';
import './css/scss';

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app');
