<template v-if="ok">
	<div data-id="Conditional Rendering">
		<a href="https://vuefe.cn/guide/conditional.html">conditional {{msg}}</a>
		<h3>template v-if</h3>
		<h1>Title</h1>
		<p>Paragraph 1</p>
		<p>Paragraph 2</p>

		<h3>v-show</h3>
		<h1 v-show="ok">Hello!</h1>

		<h3>v-else</h3>
		<div v-if="Math.random() > 0.5"> Sorry </div>
		<div v-else> Not sorry </div>

		<h2>组件警告</h2>

		将 v-show 用在组件上时，因为指令的优先级 v-else 会出现问题。因此不要这样做：

		<!--<custom-component v-show="condition"></custom-component>-->
		<!--<p v-else>这可能也是一个组件</p>-->

		用另一个 v-show 替换 v-else：

		<!--<custom-component v-show="condition"></custom-component>-->
		<!--<p v-show="!condition">这可能也是一个组件</p>-->
		这样可以达到v-if的效果

		<h3>v-if vs. v-show</h3>
		在切换 v-if 块时， Vue.js 有一个局部编译/卸载过程，因为 v-if 之中的模板也可能包括数据绑定或子组件。 v-if 是真实的条件渲染，因为它会确保条件块在切换当中合适地销毁与重建条件块内的事件监听器和子组件。 v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——在条件第一次变为真时才开始局部编译（编译会被缓存起来）。
		相比之下， v-show 简单得多——元素始终被编译并保留，只是简单地基于 CSS 切换。 一般来说， v-if 有更高的切换消耗而 v-show 有更高的初始渲染消耗。因此，如果需要频繁切换 v-show 较好，如果在运行时条件不大可能改变
		v-if 较好。
	</div>
</template>

<script>
    export default ({
        data() {
            return {
                msg: '条件渲染',
                show: 'ok'
            }
        }
    });
</script>