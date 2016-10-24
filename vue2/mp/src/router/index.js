import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// import home from '../views/home';
// import first from '../views/home/first';
import home from 'views/home';
import first from 'views/home/first';


const router = new Router({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            component: home
        },
        {
            path: '/home',
            name: 'home',
            component: home
        },
        {
            path: '/first',
            component: first,
            meta: {
                goTop: true,
                title: '电影'
            }
        }
    ]

});

export default router;