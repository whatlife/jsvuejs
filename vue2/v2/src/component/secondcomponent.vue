<template>
    <div id="secondcomponent">
        <h1>I am another page</h1>

        <el-button
            type="primary"
            @click.native="openFullScreen"
            v-loading.fullscreen="fullscreenLoading">
            显示整页加载，3 秒后消失
        </el-button>


        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <h2 style="line-height: 36px; color: #20A0FF">{{title}} 总数： {{total}}</h2>
            </div>
            <div v-for="article in articles" class="text item">
                <h3> {{article.title}} {{article.original_title}} <span class="small">{{article.year}}</span></h3>
                <p>类型：{{article.genres}}</p>
                <a :href=article.alt target="_blank" title="电影详情">
                    <img :src=article.images.small>
                </a>
                <hr>
            </div>
        </el-card>

        <a> written by {{ author }} </a>
        <p> 感谢 <a href="https://github.com/showonne">showonne</a>大神的技术指导</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                fullscreenLoading: false,
                author: "微信公众号 jinkey-love",
                articles: [],
                title:"",
                total:""
            }
        },
        methods: {
            openFullScreen() {
                this.fullscreenLoading = true;
                setTimeout(() => {
                    this.fullscreenLoading = false;
            }, 3000);
            }
        },
        mounted: function () {
            this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
                headers: {

                },
                emulateJSON: true
            }).then(function (response) {
                // 这里是处理正确的回调

                this.articles = response.data.subjects;
                this.title = response.data.title;
                this.total = response.data.total;
                // this.articles = response.data["subjects"] 也可以


            }, function (response) {
                // 处理错误
                console.log(response);
            });
        }
    }
</script>

