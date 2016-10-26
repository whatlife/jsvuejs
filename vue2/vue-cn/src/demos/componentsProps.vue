<template>
	<div id="props">
        <h2><a href="https://vuefe.cn/guide/components.html#使用Props传递数据">使用Props传递数据</a></h2>
        <child message="hello!"></child>
        <oneChild propsOne="hello!!"></oneChild>

        <!-- kebab-case in HTML -->
        <childTwo my-message="使用非字符串模版时，需要转化为kebab-case"></childTwo>

        <h2><a href="https://vuefe.cn/guide/components.html#动态-Props">动态Props</a></h2>
        <div id="demo-2">
            <input v-model="parentMsg">
            <br>
            <childThree v-bind:my-message1="parentMsg"></childThree>

             <p>或者使用v-bind的缩写语法</p>
            <childThree :my-message1="parentMsg"></childThree>
            <br>
            <input v-model="parentMsg2">
            <br>
            <childOtherName v-bind:my-message2="parentMsg2"></childOtherName>

             <p>或者使用v-bind的缩写语法</p>
            <childOtherName :my-message2="parentMsg2"></childOtherName>
        </div>
       
	</div>
</template>

<script>
import Vue from 'vue';

Vue.component('child', {
    // 声明 props
    props: ['message'],
    // 就像 data 一样，prop 可以用在模板内
    // 同样也可以在 vm 实例中像 “this.message” 这样使用
    template: '<span>{{ message }}</span>'
});
Vue.component('oneChild', {
    props: ['propsOne'],
    template: '<p> {{ propsOne }} </p>'
});

// camelCase-vs-kebab-case
Vue.component('childTwo', {
  // camelCase in JavaScript
  props: ['myMessage'],
  template: '<span>{{ myMessage }}</span>'
});

// 动态Props
//Vue.component('childThree', {
//    props: ['myessage'],
//    template: '<span>{{ myessage }}</span>'
//})

export default ({
    data() {
        return {
            parentMsg: 'parent message ! ',
            parentMsg2: '这是来自父级组件的内容'
        }
    },
    components: {
        childThree: {
            props: ['myMessage1'],
            template: '<span> {{ myMessage1 }} </span>'
        },
        childOtherName: {
            props: ['myMessage2'],
            template: '<span> {{ myMessage2 }} </span>'
        }
    }
});
 </script>