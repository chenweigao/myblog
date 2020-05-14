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

<!--- more --->

## momment.js 时区问题

> 使用 moment.js 在 vuepress 项目中时，会产生时区偏差，在本地正常，在服务器端会产生 8 个小时的偏差。

解决方法（2020年5月14日）：

使用 [Moment Timezone](http://momentjs.cn/timezone/)。

- 在项目中安装：`yarn add moment-timezone ` 并在 `config.js` 中使用；
- 编写时区代码：
```js
const moment = require('moment');
require('moment-timezone')
'@vuepress/last-updated',
{
  transformer: (timestamp, lang) => {
    const moment = require('moment')
    jz = moment(timestamp)
    //moment.locale(lang);
    time_res = jz.tz("Asia/Shanghai")
    return time_res.format('llll')
  }
}
```

如此就成功转换了时区，并格式化为英文。
