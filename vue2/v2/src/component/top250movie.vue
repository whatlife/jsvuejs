<template>
    <div slot="header" class="clearfix">
        <h2 style="line-height: 36px; color: #20A0FF">豆瓣电影排行榜</h2>
    </div>
    <div v-for="">
    <el-row>
        <el-col :span="8" v-for="(o, index) in 2" :offset="index > 0 ? 2 : 0">
            <el-card :body-style="{ padding: '0px' }">
                <img src="~examples/assets/images/hamburger.png" class="image">
                <div style="padding: 14px;">
                    <span>好吃的汉堡</span>
                    <div class="bottom clearfix">
                        <time class="time">{{ currentDate }}</time>
                        <el-button type="text" class="button">操作按钮</el-button>
                    </div>
                </div>
            </el-card>
        </el-col>
    </el-row>
    </div>
</template>
<style>
    body{
        background-color:#ff0000;
    }
</style>
<script>
    import HeaderComponent from './components/header.vue'
    import OtherComponent from './components/other.vue'
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            'other-component':OtherComponent,
            HeaderComponent,
        }
    }
</script>
