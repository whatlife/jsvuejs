<template>
    <div id="firstcomponent">
        <h1>{{title}}</h1>
        <section class="grid" id="list">
            <router-link class="item" v-for="article in articles" :to="'/subject/' + article.id" :data-id=article.id>
                <div class="cover">
                    <div class="wp ratio3_4">
                        <img class="img-show" :src=article.images.medium style="width: 100%;">
                    </div>
                </div>
                <div class="info">
                    <h3>{{article.title}}</h3>
                    <p class="rank">
						<span class="rating-stars" :data-rating=article.rating.average>
                        <span class="rating-star rating-star-small-full"></span>
						<span class="rating-star rating-star-small-full"></span>
						<span class="rating-star rating-star-small-full"></span>
						<span class="rating-star rating-star-small-full"></span>
						<span class="rating-star rating-star-small-gray"></span>
						</span>
                        <span>{{article.rating.average}}</span>
                    </p>
                    <p class="meta">{{article.directors[0].name}}/{{article.genres}}</p>
                </div>
            </router-link>
        </section>
    </div>
</template>

<script>
    export default{
        data () {
            return {
                articles: [],
                title: ""
            }
        },
        mounted: function(){
            this.$http.jsonp('https://api.douban.com/v2/movie/in_theaters?count=20', {}, {
                    headers: {},
                    emulateJSON: true
                }).then(function (response) {
                    // 这里是处理正确的回调
                    this.articles = response.data.subjects;

                    var _title = response.data.title;
					_title = _title.substr(0, _title.length - 3);
					this.title = _title;

                    // this.articles = response.data["subjects"] 也可以
                }, function (response) {
                    // 处理错误
                    console.log(response);
                });
        }
    }


</script>

<style lang="sass">
    h1 {
        font-size: 24px;
        font-weight:normal;
        box-sizing:border-box;
        max-width: 660px;
        margin-left:auto;
        margin-right:auto;
        margin-bottom: 6px;
        padding-left: 4%; }

        .grid {
            padding: 20px 0;
            margin-left:auto;
            margin-right:auto;
            max-width: 660px;
            overflow:hidden;
            box-sizing:border-box;
            .ratio3_4 {
                position:relative;
                &:before {
                    padding-top: 143%;
                    content: "";
                    display:block;
                /*padding-top: 100%;*/
            }
        }
            .item {
                float:left;
                box-sizing:border-box;
                width: 33.33333%;
                padding-left: 4%;
                padding-right: 4%;
                margin-bottom: 20px;
                overflow:hidden;
                text-decoration:none;
                color: #9b9b9b;
                &:nth-child(3n) {
                    margin-right: 0;
            }
                .cover {
                    min-height: 87px;
                    overflow:hidden;
                    position:relative;
            }
                img {
                    display:block;
                    position:absolute;
                    left: -100%;
                    right: -100%;
                    top: -100%;
                    bottom: -100%;
                    margin:auto;
                    min-height: 100%;
                    min-width: 100%;
            }
                .img-show {
                    opacity: 1;
            }
                .info {
                    height: 55px;
                    overflow:hidden;
            }
                h3 {
                    font-size: 13px;
                    font-weight:normal;
                    padding: 5px 0 0;
                    color: #494949;
                    text-align:center;
                    overflow:hidden;
                    text-overflow:ellipsis;
                    display:-webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient:vertical;
                    margin: 0;
            }
                .rank {
                    height: 16px;
                    font-size: 12px;
                    padding: 3px 0 0 0;
                    text-align:center;
                    margin: 0;
            }
                .meta {
                    margin: 0;
                    padding: 0;
                    font-size: 10px;

            }
        }
    }

        .item img {
            opacity: 0;
            -webkit-transition:opacity 0.3s ease-out;
            transition:opacity 0.3s ease-out;
    }

        .rating-stars {
            display:inline-block;
            vertical-align:middle;
            .rating-star {
                display:inline-block;
                margin-right: 1px;
                background-color:transparent;
                background-repeat:no-repeat;
        }
    }

        .rating-star-small-full,
        .rating-star-small-half,
        .rating-star-small-gray {
            width: 10px;
            height: 10px;
            background-size: 10px 10px;
    }

        .rating-star-small-full {
            background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAfhJREFUOBGlVD1LHFEUPXfWrzGJO2uhaIQ0iljESgKSpAjBwpXVKikEl6TzD6TwJ4gWaQMBS8WQgCRZ61QpglUgRbQUbMR1XfwodvbmvE1mdt/ssDPBC493733nnrkf7w2QQrSU29D9wY8poJAkkG6hD8O5E+IGgJsHkr8+7hTjdDpsnA0PLkHE4yK2r5iETyYUfdUkkRa96W3VOhLqXv8oFHNhgGCC/Xwc2jFKR0J0966w1IwVp/LasiNGOBTdxV24bhbqenCQRUY9qLzl2CasGEUVdbyA1M5R1wrq/gUqVxUp4tLghCX85D7VlonFksJQ9Un3w5S8c2sy8z3TGtGDRsla8op0vKe3O0UuMRBVDm9N8uX1Zg/3s8+hmU/sGS/wf8kN0UWZP/tgokJCY+jX3ENmWqJ3zNiJonoKXxalcPY9wFqExqmf3fvIuL+SM2WZNX9SCheHAZnZ2++h9FyxufdaQfG6CBznTvQshtDhSyA4jQieRmExhO2gaFBoi5OK8EkYECiqX9jdd1wauP7tbVgrw8a/TzETBpkp1nWZ96sg8+VV8j0j6VF4Dozo3sB4ix0ZypD3iO3r+QvQbfi1KVkobwcBkj//hmp5msSbXHxqlC67bCtDDr2fN/43wYvMaFkK1dOALNjlJa6Z8RuIP0vfAZfVhj/iqoy46fpKwgAAAABJRU5ErkJggg==");
    }

        .rating-star-small-gray {
            background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAeRJREFUOBGtlDsvBFEUx3d2djfiMbTsQ0NEwTaiQSGiRKWREDofgMJHEAqdSPSE0BC9SiEqWQWSzT4SzSbrsR7Fzo7fEXfNg9klbjI5j/s/vzn3MRMI1DFyudxaPp8/qEMa0GqJ0ul0QzgcvtM0zbAsqzMWi+X9aoJ+kzIXiUSmgLXhinZOcn6jJpDieRvA7tvSX64vMJvNdiAdV3I67c5kMkMq/s76AgHMUqTbC0Oh0II9dvvVQ0mlUs2GYbRWKpU2ij4swA3pylX0ZJrmNPn7crn8oOv6Y7FYfEgmk8+i07gOl0z24js6cUHqCU1uwbksefcfYPJCHeDFx5LpUq7DNp2GZeYPw2KrVuLx+Gp1D4GOATwEZvwGSFdv6Oe48PtSVwVKwCfWB/SEJyZxHaMAcBLYmdI6gJIEGg0Gg1e4tTqVZfawzBsFE+u5h4heyLfYRT/4LERrcs95gNwr+RI8nbsLJWa5I+68B8hbPSJ3kYq/03qAvHVYFShL7phni9hSuU/r0TqA8u9DOGArKvCZzXCKEzyL7O8o4Fs1T4ftHGKXisU6gOzfIKLIp2CnVCr1JhKJHVXAiZ4C7Ae8Ts6UPDfCsUUhJRYLrJGCa+xSNBo9ss8pH+gr/jK/tj0a2ETv2IZ35FSkS7HbzakAAAAASUVORK5CYII=");
    }
</style>
