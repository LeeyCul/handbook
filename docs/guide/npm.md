---
title: npm 常用指令
date: 2024/06/21
---

**user: lihongpei**
**password: 123456**

## 1、查看、设置源

```
1、查看源
   npm config get registry
   npm config set registry https://registry.npmmirror.com
   - https://registry.npm.taobao.org
   - https://npm.cd120.info
   - https://registry.npmmirror.com

```

## 2、Verdaccio 发布包

```
npm adduser --registry https://npm.cd120.info
npm login --registry https://npm.cd120.info
npm publish --registry https://npm.cd120.info
```

## 3、卸载、安装

```
npm install <pakage>@<版本>
npm uninstall <pakage> 【/usr/local/bin/】

npm link 【全局调试包】
npm link <pakage>  【只在当前项目】

```

## 4、安装本地包

```
 "dependencies": {
      "karavan-core": "file:../karavan-core",
   },
```
