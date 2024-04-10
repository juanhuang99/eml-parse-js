# eml-parse-js

> This is a fork of `eml-parse-js`
1. 打包 umd 文件时，将依赖也打包进去

## 如何打包

1. 执行命令：npm run build:rollup
2. 找到 lib/eml-parse-js.umd.js 文件，上传到 cdn


## 如何升级

```js

// 在本地仓库添加一个指向原始仓库的远程链接
git remote add upstream https://github.com/MQpeng/eml-parse-js
// 拉取最新代码
git fetch upstream
// 将原始仓库的更新合并到你的分支
git merge upstream/main
```
