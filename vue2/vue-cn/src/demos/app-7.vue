<template>
	<div id="app-7">
		<p>组件系统是 Vue.js 另一个重要概念，因为它提供了一种抽象，让我们可以用独立可复用的小组件来构建大型应用。如果我们考虑到这点，几乎任意类型的应用的界面都可以抽象为一个组件树</p>

		<ol>
			<todo v-for="todo in todos" v-bind:todo="todo"></todo>
		</ol>

		<p>这只是一个假设的例子，但是我们已经将应用分割成了两个更小的单元，子元素通过 props 接口实现了与父亲元素很好的解耦。我们现在可以在不影响到父应用的基础上，进一步为我们的 todo 组件改进更多复杂的模板和逻辑。</p>

		<p>
			<a href="http://vuefe.cn/guide/#用组件构建（应用）">http://vuefe.cn/guide/#用组件构建（应用）</a>
		</p>
	</div>

</template>

<script>
import Vue from 'vue';

Vue.component('todo', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});

    export default ({
        data() {
            return {
                todos: [
                    {text: 'Learn JavaScript'},
                    {text: 'Learn Vue'},
                    {text: 'Build something awesome'}
                ]
            }
        }
    })
</script>

<style scoped>
	li {
		display: list-item;
	}
</style>