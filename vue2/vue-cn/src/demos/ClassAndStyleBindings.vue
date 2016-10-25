<template>
    <div id="classStyle">
        <h1>Class 与 Style 绑定</h1>
        <h2>绑定HTML Class</h2>
        <h3> <a href="https://vuefe.cn/guide/class-and-style.html#对象语法">对象语法</a></h3>
        <div v-bind:class="{ active: isActive}"></div>
        <div v-bind:class="{ active: isActive, 'text-danger': hasError}"></div>
        <pre>
            <div class="line">初始化的值：active:  {{isActive}} / 'text-danger': {{hasError }}</div>
        </pre>
        <p>可以直接绑定数据里的一个对象</p>
        <div v-bind:class="classObject"></div>
        <pre>
           <div class="line"> v-bind:class = {{ classObject }}</div>
        </pre>
        <p>也可以在这个绑定的数据里绑定一个返回对象的计算属性</p>
        <div v-bind:class="classObjectComputed"></div>
        <pre>
            <div class="line">{{classObjectComputed}}</div>
        </pre>

        <h3> <a href="https://vuefe.cn/guide/class-and-style.html#数组语法">数组语法</a></h3>
        <div v-bind:class="[activeClass, errorClass]">数组语法</div>
        <pre>
        渲染为： v-bind:class = "{{activeClass}} {{errorClass}}"
        </pre>
        <p>如果你也想根据条件切换列表中的 class ，可以用三元表达式：</p>
        <pre>
            <div v-bind:class="[isActive ? activeClass : '', errorClass]">三元表达式</div>
        <pre>
            <div class="line">{{isActive ? activeClass : ''}} errorClass</div>
        </pre>
        <p>上面此例始终添加 errorClass ，但是只有在 isActive 是 true 时添加 activeClass 。</p>
        <p>不过，当有多个条件 class 时这样写有些繁琐。可以在数组语法中使用对象语法：</p>
        <div v-bind:class="[{ active: isActive }, errorClass]"></div>

        <h2>绑定内联样式</h2>
        <h3><a href="https://vuefe.cn/guide/class-and-style.html#对象语法-1">对象语法-1</a></h3>
        <pre>
            <div class="line"><div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">对象语法1</div></div>
        </pre>
        <p>直接绑定到一个样式对象通常更好，让模板更清晰：</p>
        <div v-bind:style="styleObject">styleObject</div>

        <h3><a href="https://vuefe.cn/guide/class-and-style.html#数组语法-1">数组语法-1</a></h3>
        <p>v-bind:style 的数组语法可以将多个样式对象应用到一个元素上</p>
        <pre>
            <div class="line"><div v-bind:style="[baseStyles, overridingStyles]">数组语法-1 [baseStyles, overridingStyles]</div></div>
            <div class="line">baseStyles {{baseStyles }} </div>
            <div class="line">overridingStyles {{ overridingStyles}}</div>
        </pre>


    </div>
</template>

<script>
    export default ({
        data() {
            return {
                // 对象语法
                isActive: true,
                hasError: false,
                classObject: {
                    active: false,
                    'text-danger': true
                },

                // 数组语法
                activeClass: 'active',
                errorClass: 'text-danger',

                // 内联样式
                // 对象语法-1
                activeColor: 'red',
                fontSize: 30,

                styleObject: {
                    color: 'blue',
                    fontSize: '22px'
                },

                baseStyles: {color: 'green'},
                overridingStyles: {'fontSize': '30px'}

            }
        },
        computed: {
            classObjectComputed: function() {
                return {
                    active: this.isActive && !this.hasError,
                    'text-danger': this.hasError && this.hasError.type === 'fatal'
                }
            }
        }
      
    });
</script>