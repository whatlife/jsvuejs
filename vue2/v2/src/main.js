import Vue from 'vue';
import routes from './routes';   
import App from './App.vue';
import VueRouter from "vue-router";
import VueResource from 'vue-resource';
import Element from 'element-ui';
import MintUI from 'mint-ui';
import 'element-ui/lib/theme-default/index.css';
import 'mint-ui/lib/style.css';


Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.use(Element);
Vue.use(MintUI);

// 定义组件, 也可以像教程之前教的方法从别的文件引入
// import firstcomponent from './component/firstcomponent.vue';
// import secondcomponent from './component/secondcomponent.vue';
// import subjectcomponent from './component/subjectcomponent.vue';

import router from './routes';

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
        router: router,
        render: h => h(App)
}).$mount('#app');