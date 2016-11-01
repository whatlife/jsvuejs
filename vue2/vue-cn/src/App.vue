<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <router-link to="/">Home</router-link>
    <router-link to="/app2">声明式渲染</router-link>
    <router-link to="/app3">条件与循环1</router-link>
    <router-link to="/app4">条件与循环2</router-link>
    <router-link to="/app5">处理用户输入1</router-link>
    <router-link to="/app6">处理用户输入2</router-link>
    <router-link to="/app7">用组件构建（应用）</router-link>
    <router-link to="/computedProp">计算属性</router-link>
    <router-link to="/ClassAndStyleBindings">class ,style 绑定</router-link>
    <router-link to="/ConditionalRendering">条件渲染</router-link>
    <router-link to="/ListRendering">列表渲染</router-link>
    <router-link to="/EventHandling">事件处理器</router-link>
    <router-link to="/FormInputBindings">表单控件绑定</router-link>
    <router-link to="/components/">组件</router-link>
    <router-link to="/componentsProps">组件 Props</router-link>
    <router-link to="/ReactivityInDepth">深入响应式原理/异步更新队列</router-link>
    <router-link to="/transitions">过渡效果</router-link>

    <keep-alive>
      <transition name="fade" mode="out-in">
          <router-view class="view"></router-view>
      </transition>
    </keep-alive>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App!'
    }
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
.router-link-active {
  color: #f90;
}
    .view {
        text-align: left;
        padding: 20px;
        line-height: 1.8;
    }
    pre {
      line-height: 14px;
    }
</style>
