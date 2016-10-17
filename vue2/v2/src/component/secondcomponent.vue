<template>
    <div id="secondcomponent">
        <h1>I am another page</h1>

        <div slot="header" class="clearfix">
            <h2 style="line-height: 36px; color: #20A0FF">{{title}} 总数： {{total}}</h2>
        </div>

        <el-row type="flex" class="row-bg" justify="space-around">
            <el-col :span="12" v-for="article in articles">
                <div class="grid-content bg-purple">
                    <h3> {{article.title}} {{article.original_title}} <span class="small">{{article.year}}</span></h3>
                    <p>类型：{{article.genres}}</p>
                    <a :href=article.alt target="_blank" title="电影详情">
                        <img :src=article.images.small>
                    </a>
                </div>
            </el-col>
        </el-row>

        <div class="row clearfix">
            <div class="demo" v-for="article in articles">1</div>
        </div>

        <a> written by {{ author }} </a>
        <p> 感谢 <a href="https://github.com/showonne">showonne</a>大神的技术指导</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {

                author: "微信公众号 jinkey-love",
                articles: [],
                title: "",
                total: ""
            }
        },

        mounted: function () {
            this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
                headers: {},
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

<style lang="sass">
    * {
        box-sizing:border-box;
        }
.demo {
    width: 25%;
    float: left;

    }

</style>
