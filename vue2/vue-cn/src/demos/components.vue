<template>
	<div id="components">
		<h1>使用组件</h1>
		<myCompontent></myCompontent>

		<h2>data必须是函数</h2>

		<div id="example-2">
			<simple-counter></simple-counter>
			<simple-counter></simple-counter>
			<simple-counter></simple-counter>
		</div>

		<h2><a href="https://vuefe.cn/guide/components.html#构成组件">构成组件</a></h2>

		<h2>props</h2>
		<h3>使用Props传递数据</h3>
	</div>
</template>

<script>
    import Vue from 'vue';
    Vue.component('myCompontent', {
        template: '<p>i am a custom component</p>'
    });

    var data = { counter: 0 };
    var Child = {
    template: '<div>A custom component!</div>'
    }
    Vue.component('simple-counter', {
        template: '<button v-on:click="counter += 1">{{ counter }}</button>',
        // data 是一个函数，因此 Vue 不会警告，
        // 但是我们为每一个组件返回了同一个对象引用
        data: function () {
            //return data 由于这三个组件共享了同一个 data ， 因此增加一个 counter 会影响所有组件
            // 我们可以通过为每个组件返回新的 data 对象来解决这个问题:
            return {
                counter: 0
            }
        }
    });

    new Vue({
        // ...
        components: {
            // <my-component> 将只在父模板可用
            'my-component': Child
        }
    })

   
</script>