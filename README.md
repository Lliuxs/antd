# antd

> <https://ant.design/index-cn>

> <https://github.com/ant-design/ant-design>

## 技术栈

```js
// 框架 react
// 测试 jest+enzyme
// 检查 eslint
// 打包 webpack+gulp
// 文档 bisheng storybook dumi
// 钩子 husky
```

## 构建命令 npm run build

```js
// package.json
"scripts": {
  "clean": "antd-tools run clean && rm -rf es lib coverage dist report.html",
  "compile": "npm run clean && antd-tools run compile",
  "dist": "antd-tools run dist",
  "build": "npm run compile && NODE_OPTIONS='--max-old-space-size=4096' npm run dist",
}

// 打包文件三分 gulp编译不打包
// dist: webpack打包出来的
// es gulp编译出来的es6
// lib gulp编译出来的es5代码
```

## antd-tools

```js
// https://github.com/ant-design/antd-tools
```

### gulpfile.js

```js
// antd-tools run compile
gulp.task(
  "compile",
  // parallel并行编译
  gulp.series(
    gulp.parallel("compile-with-es", "compile-with-lib"),
    "compile-finalize"
  )
);

// antd-tools run dist
gulp.task(
  "dist",
  gulp.series((done) => {
    dist(done);
  })
);

function compile-with-es() {
  compile(false).on('finish', done);
}

function compiler() {

}

// antd的打包 webpack
function dist() {
  const webpackConfig = require(getProjectPath('webpack.config.js'));
  webpack(webpackCOnfig)
}
```

### webpack.config.js

```js
// https://github.com/ant-design/antd-tools/blob/master/lib/getWebpackConfig.js
// getWebpackConfig.js
```

## 文档

```js
"start": "cross-env PORT=8001 dumi dev",
"site": "dumi build && cp .surgeignore _site",
// dumi vitepress?
// https://d.umijs.org/guide
```
