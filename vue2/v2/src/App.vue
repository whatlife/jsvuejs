<template>
    <div id="app">
        <!--<img src="./assets/logo.png">-->
        <h1>{{ msg }}</h1>
        <ul>
            <li>
                <router-link to='/'>回首页</router-link>
            </li>
            <li>
                <router-link to='/first'>点我跳到 第一页</router-link>
            </li>
            <li>
                <router-link to='/second'>点我跳到 第二页</router-link>
            </li>
            <li>
                <router-link to='/top250movie'>点我跳到 电影列表页面</router-link>
            </li>
        </ul>
        <router-view class="view"></router-view>
    </div>
</template>

<script>
    import firstcomponent from './component/firstcomponent.vue';
    import secondcomponent from './component/firstcomponent.vue';
//    import top250movie from './component/top250movie.vue';
    export default {
        data () {
            return {
                msg: 'Hello Vue! & Hello World!'
            }
        },
        components: { firstcomponent, secondcomponent }
    }
</script>

<style lang="sass">
    $primary-color: #f00！default;

    body {
        font-family: Helvetica, sans-serif;
    }

    h1 {
        color: $primary-color;
    }
</style>
