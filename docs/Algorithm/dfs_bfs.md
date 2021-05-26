---
title: DFS and BFS
date: 2019-11-20
tags:
 - algorithm
 - leetcode
 - dfs/bfs
categories:
 - Algorithm
---

- [number of island: LC200](https://leetcode.com/problems/number-of-islands/)

- [Target Sum: LC494](https://leetcode.com/problems/target-sum/)

<!-- more -->

## Problems content

- [number of island: LC200](https://leetcode.com/problems/number-of-islands/)

- [Target Sum: LC494](https://leetcode.com/problems/target-sum/)

| 问题                       | 链接                                                         | 类型 | 备注 |
| -------------------------- | ------------------------------------------------------------ | ---- | ---- |
| LC329 矩阵中的最长递增路径 | [LC 329](https://leetcode-cn.com/problems/longest-increasing-path-in-a-matrix/) | DFS  |      |
|                            |                                                              |      |      |
|                            |                                                              |      |      |



## DFS

### 1. lC 329 矩阵中的最长递增路径

> 给定一个整数矩阵，找出最长递增路径的长度。
>
> 对于每个单元格，你可以往上，下，左，右四个方向移动。 你不能在对角线方向上移动或移动到边界外（即不允许环绕）。

这是一道迷宫搜索问题，可以使用 DFS 搜索，这样可以熟悉 DFS 的步骤。实现代码如下所示：


<RecoDemo :collapse="false">
<template slot="code-python">
  <<< @/docs/.vuepress/code/algorithm/dfs.py
</template>
</RecoDemo>

