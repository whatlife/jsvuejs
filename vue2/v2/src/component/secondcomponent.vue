<template>
    <div id="secondcomponent">
        <h1>I am another page</h1>

        <div slot="header" class="clearfix">
            <h2 style="line-height: 36px; color: #20A0FF">{{title}} 总数： {{total}}</h2>
        </div>

        <div class="row clearfix">
            <div class="demo" v-for="article in articles">
                <div class="grid-content bg-purple">
                    <a :href=article.alt target="_blank" title="电影详情">
                        <img :src=article.images.medium>
                    </a>
                    <h3> {{article.title}} {{article.original_title}} <span class="small">{{article.year}}</span></h3>
                    <p>类型：{{article.genres}}</p>

                </div>
            </div>
        </div>
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
    $background: #f8f8f8;
    * {
        box-sizing:border-box;
    }
    .demo {
        width: 33.3333%;
        float:left;
        text-align:center;
        display:flex;
        align-items:center;
        justify-content: center;
        height: 300px;
        overflow:hidden;
        margin-bottom: 20px;
        font-size: 13px;
        h3 {
            padding: 0;
            margin: 0;
        }
        &:nth-child(odd) {
            background-color: $background;
        }
    }
</style>
