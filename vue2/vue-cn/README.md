# vue-cn

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).


# css/scss
`npm install css-loader style-loader sass-loader node-sass --save-dev`
`node-sass`推荐用`cnpm`安装，速度快

在入口文件 `import './css/css'`
在入口文件 `import './css/scss'`

在 webpack 配置文件

```
{
    test: /\.css$/,
    loader: 'style!css',
    exclude: /node_modules/
},
```

```
{
    test: /\.scss$/,
    loader: 'style!css!sass',
    exclude: /node_modules/
},
```
