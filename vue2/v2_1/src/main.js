import Vue from 'vue';
import router from './router';

import App from './App.vue';

import VueResource from 'vue-resource';

Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App)
})

// const app = new Vue({
//     router: router,
//     render: h => h(App)
// });

// app.$mount('#app');


