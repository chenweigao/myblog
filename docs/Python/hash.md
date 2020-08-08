---
title: Python Hash Map & Problems
date: 2020-07-12
tags:
 - hash map
categories:
 - Python
 - Algorithm
---

以前很擅长写这个，现在记性不太好了，今天练习了一下，写在这里备忘一下。

## Hash Map 在 Python 中的基本用法


### 不依赖于库的基本实现

Python 中的 Hash Map 使用方法很多，以后会慢慢复习到，现在先写上基本的实现。

LeetCode 的一个题目涉及到了这个问题：[1512. Number of Good Pairs](https://leetcode.com/problems/number-of-good-pairs/)

对于这个题目的实现如下：

<RecoDemo :collapse="true">
<template slot="code-python">
  <<< @/docs/.vuepress/code/algorithm/hash_map_1.py
</template>
</RecoDemo>

具体的[完整示例](https://github.com/chenweigao/_code/blob/master/LeetCode/LC1512_Number_of_good_pairs.py)可以参考 GitHub。

### collections.Counter()

#### .values()

这是 python 官方库的实现方式，使用前需要先导入 `collections` 依赖。

以 leetcode 的 [1207](https://leetcode-cn.com/problems/unique-number-of-occurrences/) 题目举例来说明用法：

<RecoDemo :collapse="true">
<template slot="code-python">
  <<< @/docs/.vuepress/code/algorithm/hash_map_2.py
</template>
</RecoDemo>

该题目中使用了 `collections.Counter()` 获得字典，而后通过 `.values()` 拿到字典中的 value 集合，最后通过将其转化为 set 来判断是否与原有字典长度相等达到解决问题的目的。


