import Vue from 'vue';
import Router from 'vue-router';


Vue.use(Router);

import app2 from 'demos/app-2';
import app3 from 'demos/app-3';
import app4 from 'demos/app-4';
import app5 from 'demos/app-5';
import app6 from 'demos/app-6';
import app7 from 'demos/app-7';
import computedProp from 'demos/Computed-Properties';
import ClassAndStyleBindings from 'demos/ClassAndStyleBindings';
import ConditionalRendering from 'demos/ConditionalRendering';
import ListRendering from 'demos/ListRendering';
import EventHandling from 'demos/EventHandling';
import FormInputBindings from 'demos/FormInputBindings';

const router = new Router({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/app2', name: 'app2', component: app2 },
        { path: '/app3', name: 'app3', component: app3 },
        { path: '/app4', name: 'app4', component: app4 },
        { path: '/app5', name: 'app5', component: app5 },
        { path: '/app6', name: 'app6', component: app6 },
        { path: '/app7', name: 'app7', component: app7 },
        { path: '/computedProp', name: 'computedProp', component: computedProp },
        { path: '/ClassAndStyleBindings', name: 'ClassAndStyleBindings', component: ClassAndStyleBindings },
        { path: '/ConditionalRendering', name: 'ConditionalRendering', component: ConditionalRendering },
        { path: '/ListRendering', name: 'ListRendering', component: ListRendering },
        { path: '/EventHandling', name: 'EventHandling', component: EventHandling },
        { path: '/FormInputBindings', name: 'FormInputBindings', component: FormInputBindings}
    ]

});

export default router;