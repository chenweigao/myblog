---
title: Binary Search 二分查找总结
date: 2019-9-12
tags:
 - algorithm
 - binary_search
categories:
 - Algorithm
---

## Summary

在二分查找中，要特别注意边界的问题，二分查找的边界，分为 `[left, right)` 和 `[left, right]`.

- 初始化时，形式为 `left = 0, right = n`, 其中 `n` 表示数组的长度，由于数组取不到下标 `n`, 故为左闭右开区间；
- 初始化时，形式为 `left = 0, right = n - 1`, 故为左闭右闭区间。

:::danger bug!!!
对于左闭右开区间(`[left, right)` )而言，应注意：

在写代码时，应当注意边界条件：

如果初始化为左闭右开区间，则当 `mid` 的值小于要查找的值的时候，`left = mid  + 1` 是正确的

而当 `mid` 的值大于要查找的值的时候（这时候需要向左查找），此时如果让 `right` 赋值为 `mid - 1`, 则有可能存在 `mid - 1` 正好是要查找的值的情况，要十分慎重。
:::

基于此，在写二分查找时，可以基于以下原则：[标准程序参考链接](https://github.com/chenweigao/_code/blob/master/cpp/binary_search.cpp)

1. 使用左右闭区间初始化，查找后条件应当变成：`left = mid + 1` and `right = mid -1`, 否则会出现死循环；
2. 使用左闭右开区间初始化，查找后条件应当是：`left = mid + 1` and `right = mid`;
3. `left` 初值为 `-1`, 循环条件使用 `while(left + 1 != right)`;
4. 对边界条件专门进行判断。

## Code

### wiki 伪代码

:::tip 记住口诀
**mid 在前，先小后大，先左后右**

解析：mid 总是在比较的左边：mid < target; 先写 mid 小于，对应左边 l = mid + 1; 再写 mid 大于，对应右边。
:::

```c
function binary_search(A, n, T):
    L := 0
    R := n − 1
    while L <= R:
        m := floor((L + R) / 2)
        if A[m] < T:
            L := m + 1
        else if A[m] > T:
            R := m - 1
        else:
            return m
    return unsuccessful
```

### 查找插入位置

二分查找有序序列中某个元素的位置，如果没找到，则返回其需要插入的位置(LC 035):

<RecoDemo :collapse="false">
<template slot="code-python">
  <<< @/docs/.vuepress/code/algorithm/binarySearch.py
</template>
</RecoDemo>

### bisect

或者使用 Python 自带的 **bisect**:

```py
import bisect
nums = [1, 3, 4, 4, 6, 7]
print(bisect.bisect(nums, 4))
print(bisect.bisect_left(nums, 4))
```

注意到，`bisect()` 默认会查找元素需要插入的位置，如果是重复的元素，则会返回其最右侧可以插入的位置，使用 `bisect_left()` 可以返回其左侧位置。

### 向上、下取整

1. 使用 $\frac {(A+B-1)} {B}$ 计算

2. 使用 `math.ceil()` 和 `math.floor()`:

```py
imprt math
math.ceil(7/4) # 2
math.floor(7/4) # 1 or 7//4
round(2.6) # 3 四舍五入
```

一般而言，我们在快速排序或者二分查找中如果要计算 mid, 则可以使用 $$mid = left + \frac{right - left}{2}$$ 来计算，可以参考[二分查找 python 代码](https://github.com/chenweigao/_code/blob/master/data_struct/binary_search.py)

## Problems

### 查找二维数组中是否存在某个元素

在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

<RecoDemo :collapse="false">
<template slot="code-python">
  <<< @/docs/.vuepress/code/algorithm/find_in_array.py
</template>
</RecoDemo>

:::tip
注意到这里用到了 **先小(<)后大(>), 先左(l)后右** 的口诀。
:::

### 完全平方数

使用二分查找判断某个数是否完全平方数：

<RecoDemo :collapse="false">
<template slot="code-python">
  <<< @/docs/.vuepress/code/algorithm/isPerfectSquare.py
</template>
</RecoDemo>

### 数字在排序数组中出现的次数

> 统计一个数字在排序数组中出现的次数。

使用二分查找，首先查找在前面出现的位置 start, 再查找在后面出现的位置 end, 然后相减得到答案。

这个题目对查找插入位置的概念进行了强化：

<RecoDemo :collapse="false">
<template slot="code-python">
  <<< @/docs/.vuepress/code/algorithm/get_number_of_k.py
</template>
</RecoDemo>

### Find Peak Element - 寻找峰值

> 找寻一个数组的峰值
>
> 输入: nums = [1,2,1,3,5,6,4]
>
> 输出: 1 或 5
>
> 解释: 你的函数可以返回索引 1，其峰值元素为 2；或者返回索引 5， 其峰值元素为 6。


这道题目只要求返回一个峰值，所以可以从前往后遍历，遇到符合条件的返回即可，暴力解法和二分法的代码如下：

<RecoDemo :collapse="false">
<template slot="code-python">
  <<< @/docs/.vuepress/code/algorithm/findPeakElement.py
</template>
</RecoDemo>