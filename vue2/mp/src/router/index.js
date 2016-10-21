import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// import home from '../views/home';
// import first from '../views/home/first';
import home from 'views/home';
import first from 'views/home/first';


export default new Router({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            component: home
        },
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