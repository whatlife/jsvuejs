# mp

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


#  webpack使用别名做重定向
- alias 

# extensions 
- `extensions: ['.js', '.vue', '.json', '.css']` 数组第一个值不能为`''`，即不能为空，否则会报
` throw new WebpackOptionsValidationError(webpackOptionsValidationErrors);`这个错误。
这个错误虽然可以用降级webpack版本到@2.1.0-beta.20的方法来解决，但解决的并不是这个原因。