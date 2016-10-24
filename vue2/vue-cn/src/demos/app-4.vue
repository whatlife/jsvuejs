<template>
    <div id="app-4">
        <ol>
            <li v-for="todo in todos">
            {{ todo.text }}</li>
        </ol>
        <p>在控制台里，输入 app4.todos.push({ text: 'New item' })。你会发现列表中多了一栏新内容。</p>
    </div>
</template>

<script>
    
    export default({
        data() {
            return {
                todos: [
                    {text: 'Learn Javascript'},
                    {text: 'Learn Vue'},
                    {text: 'Build something awesome'}
                ]
            }
        }
    })
</script>

<style scoped>
 ol{
     clear: both;
     overflow:hidden;
 }
    li {
        display: list-item;
        font-size: 18px;
    }
</style>