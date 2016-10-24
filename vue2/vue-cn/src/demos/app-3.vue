<template>
    <div id="app3">
        <p v-if="seen">Now you see me</p>

        <p>
        <span>
        继续在控制台设置 app3.seen = false，你会发现 “Now you see me” 消失了。

这个例子演示了我们不仅可以绑定 DOM 文本到数据，也可以绑定 DOM 结构到数据。而且，Vue.js 也提供一个强大的过渡效果系统，可以在 Vue 插入/删除元素时自动应用过渡效果。
        </span>
        <a href="http://vuefe.cn/guide/#条件与循环">http://vuefe.cn/guide/#条件与循环</a>
        </p>
    </div>
</template>

<script>
    export default({
        data() {
            return {
                seen: true
            }
        }
    })
</script>