<template>
    <div id="listRendering">
        <h1>列表渲染</h1>

        <p>v-for 指令需要以 item in items 形式的特殊语法</p>
        <h2>v-for</h2>
        <h3>基本用法</h3>
        <hr>
        <ul id="example1">
            <li v-for="item in items">{{ item.message }}</li>
        </ul>

        <hr>
        <ul id="example2">
            <li v-for="(item, index) in items">{{parentMessage}} - {{index}} - {{ item.message }}</li>
        </ul>

        <h3>对象迭代 v-for</h3>
        <p>你也可以用 v-for 通过一个对象的属性来迭代。</p>
        <ul id="repeat-object" class="demo">
            <li v-for="value in object">
                {{ value }}
            </li>
        </ul>

        <h3>整数迭代 v-for</h3>
        <p>v-for 也可以取整数。在这种情况下，它将重复多次模板。</p>
        <div>
            <span v-for="n in 10">{{ n }}</span>
        </div>

        <h3><a href="https://vuefe.cn/guide/list.html#整数迭代-v-for"> 组件和 v-for</a></h3>

        <div id="todo-list-example">
        <input
            v-model="newTodoText"
            v-on:keyup.enter="addNewTodo"
            placeholder="Add a todo"
        >
        <ul>
            <li
            is="todo-item"
            v-for="(todo, index) in todos"
            v-bind:title="todo"
            v-on:remove="todos.splice(index, 1)"
            ></li>
        </ul>
        </div>


        <h2>key</h2>

        <h2>数组更新检测</h2>
        <h3>突变方法</h3>

        <h3>重塑数组</h3>

        <h2>显示过滤/排序结果</h2>

        <li v-for="n in evenNumbers">{{ n }}</li>


    </div>
</template>

<script>
    import Vue from 'vue';
    Vue.component('todo-item', {
        template: '\
            <li>\
                {{title}}\
                <button v-on:click="$emit(\'remove\')">X</button>\
            </li>\
        ',
        props: ['title']
    });
    export default ({
        data() {
            return {
                parentMessage: 'parent',
                items: [
                    {message: 'foo'},
                    {message: 'bar'}
                ],
                object: {
                     FirstName: 'John',
                     LastName: 'Doe',
                     Age: '30'
                },
                newTodoText: '',
                todos: [
                'Do the dishes',
                'Take out the trash',
                'Mow the lawn'
                ],
                numbers: [ 1, 2, 3, 4, 5 ]
            }
        },
        methods: {
            addNewTodo: function() {
                this.todos.push(this.newTodoText);
                this.newTodoText = ""
            }
        },
        computed: {
            evenNumbers: function() {
                return this.numbers.filter(function(number){
                    return number % 2 === 0;
                })
            }
        }
    });
</script>

<style scoped>
    li {
        display: list-item;
        list-style-type: disc;
    }
</style>