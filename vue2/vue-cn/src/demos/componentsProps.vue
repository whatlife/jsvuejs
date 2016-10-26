<template>
	<div id="props">
        <h2><a href="https://vuefe.cn/guide/components.html#使用Props传递数据">使用Props传递数据</a></h2>
        <child message="hello!"></child>
        <oneChild propsOne="hello!!"></oneChild>

        <!-- kebab-case in HTML -->
        <childTwo my-message="使用非字符串模版时，需要转化为kebab-case"></childTwo>

        <h2><a href="https://vuefe.cn/guide/components.html#动态-Props">动态Props</a></h2>
        <div id="demo-2">
            <input v-model="parentMsg2">
            <br>
            <childThree v-bind:my-message1="parentMsg"></childThree>

             <p>或者使用v-bind的缩写语法</p>
            <childThree :my-message1="parentMsg"></childThree>
            <br>

            <input v-model="parentMsg">
            
            <br>
            <childOtherName v-bind:my-message2="parentMsg2"></childOtherName>

             <p>或者使用v-bind的缩写语法</p>
            <childOtherName :my-message2="parentMsg2"></childOtherName>
        </div>

        <h2><a href="https://vuefe.cn/guide/components.html#使用-v-on-绑定自定义事件">使用-v-on-绑定自定义事件</a></h2>
        每个 Vue 实例都实现了事件接口 Events interface，即：
        <ol>
            <li>使用 $on(eventName) 监听事件</li>
            <li>使用 $emit(eventName) 触发事件</li>
        </ol>
        另外，父组件可以在使用子组件的地方直接用 v-on 来监听子组件触发的事件。

        <div id="counter-event-example">
            <p>{{ total }}</p>
            <!--button-counter 组件-->
            <button-counter v-on:increment="incrementTotal"></button-counter>
            <button-counter v-on:increment="incrementTotal"></button-counter>
        </div>
        <p>在本例中，子组件已经和它外部完全解耦了。它所做的只是触发一个父组件关心的内部事件。</p>

        <h2><a href="https://vuefe.cn/guide/components.html#使用-v-on-绑定自定义事件">使用自定义事件的表单输入组件</a></h2>
        <div id="v-model-example">
            <p>{{ message }}</p>
            <my-input
                label="Message"
                v-model="message"
            ></my-input>
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
            parentMsg2: '这是来自父级组件的内容',

            // v-on 绑定自定义事件
            total: 0,

            // 使用自定义事件的表单输入组件
            message: 'hello'
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
    },
    methods: {
         incrementTotal: function () {
            this.total += 1;
        }
    }
});

// 使用-v-on-绑定自定义事件
// 注册 button-counter 组件
Vue.component('button-counter', {
  template: '<button v-on:click="increment">{{ counter }}</button>',
  data: function () {
    return {
      counter: 0
    }
  },
  methods: {
    increment: function () {
      this.counter += 1;
      this.$emit('increment');
    }
  },
})

// 使用自定义事件的表单输入组件
Vue.component('my-input', {
  template: '\
    <div class="form-group">\
      <label v-bind:for="randomId">{{ label }}:</label>\
      <input v-bind:id="randomId" v-bind:value="value" v-on:input="onInput">\
    </div>\
  ',
  props: ['value', 'label'],
  data: function () {
    return {
      randomId: 'input-' + Math.random()
    }
  },
  methods: {
    onInput: function (event) {
      this.$emit('input', event.target.value)
    }
  },
})
 </script>