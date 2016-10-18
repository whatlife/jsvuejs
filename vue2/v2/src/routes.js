import Vue from 'vue';
import VueRouter from "vue-router";



Vue.use(VueRouter);

import home from './pages/home.vue';
import first from './pages/first.vue';
import second from './pages/second.vue';
import subject from './pages/subjectcomponent.vue';

export default new VueRouter ({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            component: home
        },
        {
            path: '/first',
            component: first
        },
        {
            path: '/second',
            component: second
        },
        {
            path: '/subject/:id',
            component: subject
        }
    ]
});