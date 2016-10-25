<template>
	<div>
		<div id="app-5">
			<p>为了让用户和你的应用进行互动，我们可以用 v-on 指令绑定一个监听事件用于调用我们 Vue 实例中定义的方法：</p>
			<p>{{ message }}</p>
			<button v-on:click="reverseMessagg">Reverse Message</button>

			<p>
				<code>
methods: {
reverseMessage: function () {
this.message = this.message.split('').reverse().join('')
}
}
</code>
			</p>
			<p>在 reverseMessage 方法中，我们在没有接触 DOM 的情况下更新了应用的状态 - 所有的 DOM 操作都由 Vue 来处理，你写的代码只需要关注基本逻辑。</p>
			<a href="http://vuefe.cn/guide/#处理用户输入">http://vuefe.cn/guide/#处理用户输入</a>
		</div>

	</div>
</template>

<script>
    export default({
        data() {
            return {
                message: 'hello Vue.js!'
            }
        },
        methods: {
            reverseMessagg: function() {
                this.message = this.message.split('').reverse().join('');
            }
        }
    })
</script>