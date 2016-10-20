<template>
  <div id="app">
    <headerNav></headerNav>
    
    <router-link to="/home">Home</router-link>
    <router-link to="/first">first</router-link>

    <keep-alive>
      <transition name="fade" mode="out-in">
          <router-view class="view"></router-view>
      </transition>
    </keep-alive>
  </div>
</template>

<script>
import headerNav from './views/header/index.vue';
export default {
  name: 'app',
 
  components: { headerNav }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app img {
  width: 44px;
  height: 44px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
