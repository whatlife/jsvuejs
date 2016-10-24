<template>
    <div>
        <span v-bind:title="message">
            Hover your mouse over me for a few seconds to see my dynamically bound title!
        </span>

        <p>本例子使用 v-bind 方式绑定DOM元素属性</p>
       
        <p>这里我们遇到点新东西。你看到的 <code>v-bind</code> 属性被称为<strong>指令</strong>。指令带有前缀 <code>v-</code>，以表示它们是 Vue.js 提供的特殊属性。可能你已经猜到了，它们会在渲染过的 DOM 上应用特殊的响应式行为。这个指令的简单含义是说：将这个元素节点的 <code>title</code> 属性和 Vue 实例的 <code>message</code> 属性绑定到一起。</p>
        <p>你再次打开浏览器的控制台输入 <code>app2.message = 'some new message'</code>，你就会再一次看到这个绑定了<code>title</code>属性的HTML已经进行了更新。</p>
        <p>需要利用Chrome的Vue调试工具 Send to console，执行上面那句话。</p>

         <p><a href="http://vuefe.cn/guide/#声明式渲染"> http://vuefe.cn/guide/#声明式渲染</a></p>
        <p><a href="https://vuejs.org/guide/#Declarative-Rendering"> https://vuejs.org/guide/#Declarative-Rendering</a></p>

    </div>
</template>

<script>
import Vue from 'vue';
export default ({
    data() {
        return {
            message: 'You loaded this page on ' + new Date()
        } 
    }
})
</script>
