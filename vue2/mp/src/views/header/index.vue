<template>
    <div>
       <img src="../../assets/logo.png">
       <h3>{{ msg }}</h3>
        <span> i am a header </span>
    </div>
</template>

<script>
    export default {
         data () {
            return {
            msg: 'Welcome to Your Vue.js App'
            }
        },
    }
</script>