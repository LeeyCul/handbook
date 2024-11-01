---
title: .npmrc 以及.yarnrc 配置镜像源
date: 2024/11/01
tags:
  - 镜像源
categories:
  - 前端
---

## 1、用途

使用 npm 或者 yarn 安装依赖时，指定依赖的镜像源，以及配置配置缓存目录等功能。

## 2、常见命令

```
#查看当前设置的源
npm config get registry

#查看当前npm配置文件信息
npm config get 和npm config list 功能一致
```

## 3、使用 npm 安装依赖

```
# .npmrc

# 指定项目下所有包的源【注：如果其他前缀规则没有匹配到，则使用这里的源】
registry=https://registry.npmmirror.com

#设置同一个前缀/目录下包的源
如：下面的设置将前缀为@babel开头的包源指向了华为源
@babel:registry=https://mirrors.huaweicloud.com/repository/npm/

```

## 4、使用 yarn 安装依赖

##### 使用小于yarn@2.0安装依赖

```
# .yarnrc

# 指定项目下所有包的源【注：如果其他前缀规则没有匹配到，则使用这里的源】
"registry" "https://registry.npmmirror.com/"

#设置同一个前缀/目录下包的源
如：下面的设置将前缀为@babel开头的包源指向了华为源
"@babel:registry" "https://mirrors.huaweicloud.com/repository/npm/"

```

##### 使用大于等于yarn@2.0安装依赖

```
# .yarnrc.yml
# 指定项目下所有包的源【注：如果其他前缀规则没有匹配到，则使用这里的源】
"npmRegistryServer": "http://mirrors.cloud.tencent.com/npm/"

# 设置同一个前缀/目录下包的源
# 下面的设置将前缀为babel的包源指向了华为源
# 如果babel前缀的包依赖了其他非babel前缀的包，那么这些非babel的包将不适用该规则
"npmScopes":
  # babel不能以@为开头
  "babel":
    "npmRegistryServer": "https://mirrors.huaweicloud.com/repository/npm/"
```

## 5、注意事项

如何单独为某个包指定镜像源？npm 和 yarn 均无法为单个包配置镜像源。

```
# .npmrc

# 目的是为antd单独指定镜像源【不支持这种】
antd:registry=https://mirrors.huaweicloud.com/repository/npm/

```

## 6、配置文件的优先级如何？

项目根目录中的要比用户目录中的配置文件优先级更高。
当执行 npm install 命令，npm 会按照如下顺序查找配置。读取成功就不再往后找了。

/project/.npmrc
/user/.npmrc

#### ps:注意：yarn 可以使用.npmrc 的配置

如果你有了.npmrc，yarn 可以直接用。（仅限于小于yarn@2.0的版本中）
当执行 yarn install 命令，yarn 会按照如下顺序查找配置。读取成功就不再往后找了。

/project/.npmrc
/user/.npmrc
/project/.yarnrc
/user/.yarnrc

## 7、常见配置命令

```
# 设置注册表
registry=https://registry.npmmirror.com

# 用于修复node版本不兼容的命令配置，主要用于在install过程中的版本过低提示
ignore-engines true

# 指定缓存文件的存储路径，用于缓存下载的包。
cache=/path/to/cache

# 配置认证 token：
//registry.npmjs.org/:_authToken=your-token-here

其他具体命令在使用过程进行搜索
```
