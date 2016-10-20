import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import home from '../views/home/index.vue';
import first from '../views/home/first.vue';


export default new Router({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/home',
            component: home
        },
        {
            path: '/first',
            component: first
        }
    ]

});