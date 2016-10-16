<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
      
    <firstcomponent></firstcomponent>
    <ul>
    <li><router-link to='/first'>点我跳到 第一页</router-link></li>
    <li><router-link to='/second'>点我跳到 第二页</router-link></li>
</ul>
  </div>
</template>

<script>
import firstcomponent from './component/firstcomponent.vue';
import secondcomponent from './component/secondcomponent.vue';
export default {
  data () {
    return {
      msg: 'Hello Vue!'
    }
  },

  components: { firstcomponent, secondcomponent }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
