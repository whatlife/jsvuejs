<template>
    <div id="firstcomponent">
        <h1>i am component!</h1>
        <a href="##">written by {{ author }}</a>
        <span>{{ wx }}</span>
    </div>

</template>

<script>
    export default{
        data () {
            return {
                author: 'Jesse.liang',
                wx: '这里面有料'
            }
        }
    }
</script>

