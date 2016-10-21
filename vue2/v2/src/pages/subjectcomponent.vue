<template>
    <div slot="header" class="clearfix">
        TODO: {{ msg }}

        <router-link :to="'/home'"> go home </router-link>
        <router-link :to="{ path: '/home' }">go home </router-link>
        <router-link :to="{ path: '/first', query: { plan: 'private' }}">Register</router-link>
    </div>

</template>

<script>
    export default{
        data(){
            return{
                msg:'得到电影的详细信息 '
            }
        }
    }
</script>
