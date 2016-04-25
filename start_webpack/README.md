# webpack starter
## 初始化npm
```
npm init
```

## 安装webpack
```
npm install webpack -g // 全局安装
```

## webpack.config.js
这是个配置文件，简单示意像下面这样
```
// webpack.config.js
var path = require("path");

module.exports = {
    entry: './src/entry.js', //演示单入口文件
    output: {
        path: path.join(__dirname, 'out'),  //打包输出的路径
        filename: 'bundle.js',              //打包后的名字
        publicPath: "./out/"                //html引用路径，在这里是本地地址。
    }
};
```

## 启动 webpack
有下面几条命令
```
// webpack 命令行的几种基本命令

$ webpack // 最基本的启动webpack方法
$ webpack -w // 提供watch方法，实时进行打包更新
$ webpack -p // 对打包后的文件进行压缩，提供production
$ webpack -d // 提供source map，方便调试。
```
webpack成功运行后，我们就可以看到根目录出现了out文件夹，里面有我们打包生成的bundle.js


## 未完。。。
