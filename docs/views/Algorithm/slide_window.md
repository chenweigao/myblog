---
title: Slide Window：滑动窗口问题总结
date: 2019-9-6
tags:
 - algorithm
 - leetcode
 - slide_window
categories:
 - Algorithm
---

双指针技术可以解决很多问题，在面试中往往能成为加分项。

## Problems

### 和为 S 的连续正数序列

遇到连续序列，应当要想到双指针。

> 小明很喜欢数学,有一天他在做数学作业时,要求计算出9~16的和,他马上就写出了正确答案是100。但是他并不满足于此,他在想究竟有多少种连续的正数序列的和为100(至少包括两个数)。没多久,他就得到另一组连续正数和为100的序列:18,19,20,21,22。现在把问题交给你,你能不能也很快的找出所有和为S的连续正数序列? Good Luck!

<RecoDemo :collapse="false">
<template slot="code-python">
  <<< @/docs/.vuepress/code/algorithm/slide_window_1.py
</template>
</RecoDemo>

注意到一个细节：在相等判断以后应当右移，以免陷入死循环。

### 和为 S 的两个数

> 输入一个递增排序的数组和一个数字S，在数组中查找两个数，使得他们的和正好是S，如果有多对数字的和等于S，输出两个数的乘积最小的。

<RecoDemo :collapse="false">
<template slot="code-python">
  <<< @/docs/.vuepress/code/algorithm/slide_window_2.py
</template>
</RecoDemo>
