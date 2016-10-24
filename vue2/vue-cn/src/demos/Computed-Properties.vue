<template>
    <div id="example">
    <h3><a href="http://vuefe.cn/guide/computed.html#基础例子">基础例子</a></h3>
        <p>Original message: "{{ message }}"</p>
        <p>computed reversed message:  {{ reversedMessage }} / {{ now }}</p>
        <p>method Message: {{ reversedMessageMethod()  }} </p>
        <p>method Now : {{ nowMethods() }}</p>
        <p>
                这里我们声明了一个计算属性 reversedMessage 。我们提供的函数将用作属性 vm.reversedMessage 的 getter 。
            <br>
<pre>
<div class="line"><span class="built_in">console</span>.log(vm.reversedMessage) <span class="comment">// -&gt; 'olleH'</span></div><div class="line">vm.message = <span class="string">'Goodbye'</span></div><div class="line"><span class="built_in">console</span>.log(vm.reversedMessage) <span class="comment">// -&gt; 'eybdooG'</span></div>
</pre>
            <br>
            你可以打开浏览器的控制台，修改 vm 。 vm.reversedMessage 的值始终取决于 vm.message 的值。

            你可以像绑定普通属性一样在模板中绑定计算属性。 Vue 知道 vm.reversedMessage 依赖于 vm.message ，因此当 vm.message 发生改变时，依赖于 vm.reversedMessage 的绑定也会更新。而且最妙的是我们是声明式地创建这种依赖关系：计算属性的 getter 是干净无副作用的，因此也是易于测试和理解的。

            </p>

            <div>
             <h3>计算缓存 VS Methods</h3>
             你可能已经注意到我们可以通过调用表达式中的Method来达到同样的效果：
<pre>
<div class="line"><span class="comment">// in component</span></div><div class="line">methods: {</div><div class="line">  <span class="attr">reverseMessage</span>: <span class="function"><span class="keyword">function</span> (<span class="params"></span>) </span>{</div><div class="line">    <span class="keyword">return</span> <span class="keyword">this</span>.message.split(<span class="string">''</span>).reverse().join(<span class="string">''</span>)</div><div class="line">  }</div><div class="line">}</div>
</pre>
             <p>不经过计算属性，我们可以通过定义一个method来替代它。对于最终的结果，两种方式确实是相同的。然而，不同的是<strong>计算缓存基于它的相关依赖</strong>。计算属性只有在它的相关依赖发生改变时才会重新评估。这就意味着如果 <code>message</code> 没有发生改变，多次访问 <code>reversedMessage</code> 计算属性会立即返回之前的结果，而不必运行函数。</p>
             <p>这也同样意味着如下计算属性将不会更新，因为 Date.now() 并不会被依赖：</p>
<pre>
<div class="line">computed: {</div><div class="line">  <span class="attr">now</span>: <span class="function"><span class="keyword">function</span> (<span class="params"></span>) </span>{</div><div class="line">    <span class="keyword">return</span> <span class="built_in">Date</span>.now()</div><div class="line">  }</div><div class="line">}</div>
</pre>
             <p>相比而言，每当重新渲染的时候，method调用<strong>总会</strong>运行函数。</p>
             <p>我们为什么需要缓存？假设我们有一个重要的计算属性 <strong>A</strong> ，这个计算属性需要一个巨大的数组遍历和做大量的计算。然后我们可能有其他的计算属性依赖于 <strong>A</strong> 。如果没有缓存，我们将执行多次 <strong>A</strong> 的 getter ，然而这都是不必要的！如果你不希望有缓存，请用method替代。</p>
             

            </div>
            <h3>计算属性-vs-Watched-Property</h3>
            <p>Vue.js 提供了一个方法 $watch ，它用于观察 Vue 实例上的数据变动。当一些数据需要根据其它数据变化时， $watch 很诱人 —— 特别是如果你来自 AngularJS 。不过，通常更好的办法是使用计算属性而不是一个命令式的 $watch 回调。思考下面例子</p>
<pre><div class="line"><span class="keyword">var</span> vm = <span class="keyword">new</span> Vue({</div><div class="line">  <span class="attr">el</span>: <span class="string">'#demo'</span>,</div><div class="line">  <span class="attr">data</span>: {</div><div class="line">    <span class="attr">firstName</span>: <span class="string">'Foo'</span>,</div><div class="line">    <span class="attr">lastName</span>: <span class="string">'Bar'</span>,</div><div class="line">    <span class="attr">fullName</span>: <span class="string">'Foo Bar'</span></div><div class="line">  },</div><div class="line">  <span class="attr">watch</span>: {</div><div class="line">    <span class="attr">firstName</span>: <span class="function"><span class="keyword">function</span> (<span class="params">val</span>) </span>{</div><div class="line">      <span class="keyword">this</span>.fullName = val + <span class="string">' '</span> + <span class="keyword">this</span>.lastName</div><div class="line">    },</div><div class="line">    <span class="attr">lastName</span>: <span class="function"><span class="keyword">function</span> (<span class="params">val</span>) </span>{</div><div class="line">      <span class="keyword">this</span>.fullName = <span class="keyword">this</span>.firstName + <span class="string">' '</span> + val</div><div class="line">    }</div><div class="line">  }</div><div class="line">})</div></pre>

            <p>上面代码是命令式的重复的。跟计算属性对比：下面的计算属性更好</p>
<pre><div class="line"><span class="keyword">var</span> vm = <span class="keyword">new</span> Vue({</div><div class="line">  <span class="attr">el</span>: <span class="string">'#demo'</span>,</div><div class="line">  <span class="attr">data</span>: {</div><div class="line">    <span class="attr">firstName</span>: <span class="string">'Foo'</span>,</div><div class="line">    <span class="attr">lastName</span>: <span class="string">'Bar'</span></div><div class="line">  },</div><div class="line">  <span class="attr">computed</span>: {</div><div class="line">    <span class="attr">fullName</span>: <span class="function"><span class="keyword">function</span> (<span class="params"></span>) </span>{</div><div class="line">      <span class="keyword">return</span> <span class="keyword">this</span>.firstName + <span class="string">' '</span> + <span class="keyword">this</span>.lastName</div><div class="line">    }</div><div class="line">  }</div><div class="line">})</div></pre>

            <h5> {{ fullName }}</h5>
            
            <h3>计算-setter</h3>
            <p>计算属性默认只是getter，不过在需要的时候也可以提供一个setter</p>
            <pre>
            <div class="line"><span class="comment">// ...</span></div><div class="line">computed: {</div><div class="line">  <span class="attr">fullName</span>: {</div><div class="line">    <span class="comment">// getter</span></div><div class="line">    get: <span class="function"><span class="keyword">function</span> (<span class="params"></span>) </span>{</div><div class="line">      <span class="keyword">return</span> <span class="keyword">this</span>.firstName + <span class="string">' '</span> + <span class="keyword">this</span>.lastName</div><div class="line">    },</div><div class="line">    <span class="comment">// setter</span></div><div class="line">    set: <span class="function"><span class="keyword">function</span> (<span class="params">newValue</span>) </span>{</div><div class="line">      <span class="keyword">var</span> names = newValue.split(<span class="string">' '</span>)</div><div class="line">      <span class="keyword">this</span>.firstName = names[<span class="number">0</span>]</div><div class="line">      <span class="keyword">this</span>.lastName = names[names.length - <span class="number">1</span>]</div><div class="line">    }</div><div class="line">  }</div><div class="line">}</div><div class="line"><span class="comment">// ...</span></div>
            </pre>

            <p>现在在调用 <code>vm.fullName = 'John Doe'</code> 时， setter 会被调用， <code>vm.firstName</code> 和 <code>vm.lastName</code> 也会有相应更新。</p>

            <h5> { fullName2 }</h5>


            <h2 id="观察-Watchers"><a href="#观察-Watchers" class="headerlink" title="观察 Watchers"></a>观察 Watchers</h2>

            <div id="watch-example">
            <p>
                Ask a yes/no question:
                <input v-model="question">
            </p>
            <p>{{ answer }}</p>
            </div>

    </div>


</template>

<script>
import Vue from 'vue';
    export default ({
        data() {
            return {
                message: 'hello',
                firstName: 'Foo',
                lastName: 'Bar',
                question: '',
                answer: 'I cannot give you an answer until you ask a question!'
            }
        },
        watch: {
            // 如果 question 发生改变，这个函数就会运行
            question: function (newQuestion) {
            this.answer = 'Waiting for you to stop typing...'
            this.getAnswer()
            }
        },
        methods: {
            reversedMessageMethod: function() {
                return this.message.split('').reverse().join('');
            },
            nowMethods: function() {
                return Date.now();
            },
            // _.debounce 是一个通过 lodash 限制操作频率的函数。
            // 在这个例子中，我们希望限制访问yesno.wtf/api的频率
            // ajax请求直到用户输入完毕才会发出
            // 学习更多关于 _.debounce function (and its cousin
            // _.throttle), 参考: https://lodash.com/docs#debounce
            getAnswer: _.debounce(
            function () {
                var vm = this
                if (this.question.indexOf('?') === -1) {
                vm.answer = 'Questions usually contain a question mark. ;-)'
                return
                }
                vm.answer = 'Thinking...'
                axios.get('https://yesno.wtf/api')
                .then(function (response) {
                    vm.answer = _.capitalize(response.data.answer)
                })
                .catch(function (error) {
                    vm.answer = 'Error! Could not reach the API. ' + error
                })
            },
            // 这是我们为用户停止输入等待的毫秒数
            500
            )
        },
        computed: {
            reversedMessage: function() {
                return this.message.split('').reverse().join('');
            },
            now: function() {
                return Date.now();
            },
            fullName: function() {
                return this.firstName + ' ' + this.lastName
            },
            
        }
    });

</script>