<template>
    <div id="EventHandling">
        <h1>事件处理器</h1>
        <h2>监听事件</h2>
        <div>
            <button v-on:click="counter += 1">增加1</button>
            <p>这个按钮被点击了{{counter}}次</p>
        </div>

        <h2>方法事件处理器</h2>
        <p>许多事件处理的逻辑都很复杂，所以直接把 JavaScript 代码写在 v-on 指令中是不可行的。因此 v-on 可以接收一个定义的方法来调用。</p>
        <div>
            <button v-on:click="greet">Greet</button>

        </div>

        <h2>内联处理器方法</h2>
        <p>除了直接绑定到一个方法，也可以用内联 JavaScript 语句：</p>
        <div>
            <button v-on:click="say('hi')">Say hi</button>
            <button v-on:click="say('what')">Say what</button>
        </div>
        <p>有时也需要在内联语句处理器中访问原生 DOM 事件。可以用特殊变量 $event 把它传入方法：</p>
        <div>
            <button v-on:click="warn('some info, not yet.', $event)">Submit</button>
        </div>

        <h2><a href="https://vuefe.cn/guide/events.html#事件修饰符"> 事件修饰符</a></h2>
        <!-- 阻止单击事件冒泡 -->
        <a v-on:click.stop="say('hi')">阻止单击事件冒泡</a>
        <!-- 提交事件不再重载页面 -->
        <form v-on:submit.prevent="say('hi')">提交事件不再重载页面</form>
        <!-- 修饰符可以串联  -->
        <a v-on:click.stop.prevent="say('hi')">修饰符可以串联</a>
        <!-- 只有修饰符 -->
        <form v-on:submit.prevent>只有修饰符</form>
        <!-- 添加事件侦听器时使用 capture 模式 -->
        <div v-on:click.capture="say('hi')">添加事件侦听器时使用 capture 模式</div>
        <!-- 只当事件在该元素本身（而不是子元素）触发时触发回调 -->
        <div v-on:click.self="say('hi')">只当事件在该元素本身（而不是子元素）触发时触发回调</div>

        <h2><a href="https://vuefe.cn/guide/events.html#按键修饰符">按键修饰符</a></h2>

        <input v-on:keyup.13="greet">
        <!-- 同上 -->
        <input v-on:keyup.enter="greet">
        <!-- 缩写语法 -->
        <input @keyup.space="greet">

        <ol>
            <li v-for="keya in keys">{{ keya.alias }}</li>
        </ol>

    </div>
</template>

<script>
    export default ({
        data() {
            return {
                counter: 0,
                name: 'Vue.js',
                keys: [
                    { alias: 'enter' },
                    { alias: 'tab' },
                    { alias: 'delete' },
                    { alias: 'esc' },
                    { alias: 'space' },
                    { alias: 'up' },
                    { alias: 'down' },
                    { alias: 'left' },
                    { alias: 'right' }
                ]
            }
        },
        methods: {
            greet: function(event) {
                // this 指Vue实例
                alert( 'hey ' + this.name + '!');

                // event 是原生DOM事件
                alert(event.target.tagName);
            },
            say: function(message) {
                alert(message);
            },
            warn: function(message, event) {
                if(event) event.preventDefault();
                alert(message);
            }

        }
    });
</script>