---
title: 跳转打开多个标签关闭标签导致浏览器崩溃问题
date: 2024/09/13
tags:
  - Bug
categories:
  - 前端
---

## 1、问题

前端通过打开新的标签页进行跳转，打开的页面过多会导致浏览器奔溃，特别是含有地图的页面，对浏览器内存占用过多，本次在开发就出现，我跳转到子系统，关闭子系统结果浏览器直接崩溃。

## 2、原因

谷歌浏览器在给新开窗口分配进程时，看是否同源，非同源页面会单独分配一个新进程，而同源页面只会分配一个相同的新进程。在上述场景中，A，B 页面同源，所以谷歌浏览器只会分配一个进程，这就导致 B 页面在请求未结束时就关闭，A 页面会卡死。

## 3、解决办法

只要在 window.open 第三个参数上加一个 noopener 就可以了，这样 chrome 在分配进程的时候，就会单独分配一个新的进程，就不会造成父页面卡死了。

```
window.open(url, "_blank", "noopener");
```

## 4、注意

noopener 会导致新打开的页面无法使用 window.opener 访问到父页面。如果需要访问的话就不能这么干了。我们现在两个页面之间没有交互，就直接用 noopener 解决了。当然如果存在需要解决这种问题，建议保存 A 页面的 sessionStorage 到 localStorage，进入 B 页面获取 localStorage 中本页面所需要的值，然后根据需要决定是否删除 localStorage 中的值即可.

[window.open API 参数详情](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/open)
