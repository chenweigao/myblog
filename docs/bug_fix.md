---
title: Bug Fix Log(2020)
date: 2020-05-14
sidebar: 'auto'
categories:
 - Bug
tags:
 - bug
 - log
sticky: 3
---

:::danger 2020 bug
该博客记录 bug 的修改思路和出处，方便以后再次遇到时参考。
:::

<!-- more -->

## momment.js 时区问题

> 使用 moment.js 在 vuepress 项目中时，会产生时区偏差，在本地正常，在服务器端会产生 8 个小时的偏差。

解决方法（2020年5月14日）：

使用 [Moment Timezone](http://momentjs.cn/timezone/)。

- 在项目中安装：`yarn add moment-timezone ` 并在 `config.js` 中使用；
- 编写时区代码：

```js
'@vuepress/last-updated',{
  transformer: (timestamp, lang) => {
    // Don't forget to install moment yourself
    // const moment = require('moment')
    var moment = require('moment-timezone');
    var jz = moment(timestamp)
    time_res = jz.tz("Asia/Shanghai")
    // return moment(timestamp).moment.tz("Asia/Shanghai").format('llll')
    return time_res.format('llll')
  }
}
```

如此就成功转换了时区，并格式化为英文。

## VueBlog 出现崩溃

时间：2020年5月17日

问题：移动端界面一直卡在加载中，电脑端乱码，原因未知

解决方案：

1. 尝试清除缓存重新 Build，并提交新的 commit，修改成功，bug 原因未知。
