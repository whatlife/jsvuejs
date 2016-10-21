import Vue from 'vue';
import router from './router'
import App from './App';

import Resource from 'vue-resource';

Vue.use(Resource);


const app = new Vue({
        router: router,
        render: h => h(App)
}).$mount('#app');