---
title:  "Algorithm of Prefix, Presum"
date: 2021-06-01
tags:
 - algorithm
 - prefix
categories:
 - Algorithm
---

## 概述

### 前缀和快速求解

前缀和是一种非常有用的算法思路，应当加以总结。

在 Python 中，可以很方便的求解一个数组的前缀和，如下所示：

```python
>>> from itertools import accumulate
>>> candiesCount = [7, 4, 5, 3, 8]

>>> accumulate(candiesCount)
<itertools.accumulate object at 0x037ACEA8>

>>> list(accumulate(candiesCount))
[7, 11, 16, 19, 27]
```

### 前缀和原理

前缀和关键问题在于：**如何快速得到某个子数组的和？**这就使用到了**前缀和**的技巧。

写伪代码实现前缀和：

```python
n = len(nums)
pre_sum = [0] + [0] * n
for i in range(n):
    pre_sum[i + 1] = pre_sum[i] + nums[i]
```

上面代码求出的前缀和 `pre_sum` 的含义为：`pre_sum[i]` 为 `nums[0:i-1]`的和。

如果要求解  `nums[i..j]` 的和，则可以使用 `pre_sum[j+1] - pre_sum[i]` 即可。

如果在实际的应用中，感觉到上述的方法较为复杂，要使用 `accumulate` 方法，则需要注意到以下问题：

按照概述中的例子来举例：

```python
nums         = [7, 4,  5,  3,  8]
pre_sum      = [7, 11, 16, 19, 27] # 
```

画个表格，方便理解：

| i       | 0    | 1    | 2    | 3    | 4    |
| ------- | ---- | ---- | ---- | ---- | ---- |
| nums    | 7    | 4    | 5    | 3    | 8    |
| pre_sum | 7    | 11   | 16   | 19   | 27   |

要求解`nums[1...3]`，可以看到，其实际的区间和为 4 + 5 + 3 为 12，对应的 `pre_sum[3] - pre_sum[0]` 为 19 - 7 = 12。

:::tips 结论

故得出结论：在实际的编写代码过程中，`nums[i..j] = pre_sum[j] - pre_sum[i - 1]`，但是这种方式要注意，数组越界！

或者将 `pre_sum` 初始化为：`[0] + accumulate(nums)`，`nums[i..j] = pre_sum[j+1] - pre_sum[i]` 即可。

:::


## 例题索引

| 问题                                              | 类型               | 解法                  | 备注 |
| ------------------------------------------------- | ------------------ | --------------------- | ---- |
| LC560 和为 k 的子数组                             | 前缀和 + dict      | 最经典的前缀和用法！  |      |
| LC1744 你能在你最喜欢的那天吃到你最喜欢的糖果吗？ | 前缀和综合应用问题 | 使用到了 `accumulate` |      |
| LC724 寻找数组的中心索引（下标）                  |                    |                       |      |
| LC930 和相同的二元子数组                          | 前缀和 + dict      | 同解法 LC560          |      |



## 例题解析

### LC560 和为 k 的子数组

> 给定一个整数数组和一个整数 k，你需要找到该数组中和为 k 的连续的子数组的个数。
>
> 示例 1 :
>
> 输入:nums = [1,1,1], k = 2
>
> 输出: 2 , [1,1] 与 [1,1] 为两种不同的情况。
>
> 来源：力扣（LeetCode）
> 链接：https://leetcode-cn.com/problems/subarray-sum-equals-k
> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

#### 解法1：直接用前缀和（超时）

应用前缀和求解这个问题的时候，很容易写出如下的代码，但是该方法超时：

```python
def subarraySum(self, nums: List[int], k: int) -> int:
    # 求出前缀和数组
    pre_sum = [0] + list(accumulate(nums))
    count = 0
    for i in range(len(nums)):
        for j in range(i, len(nums)):
            # nums[i..j] = pre_sum[j+1] - pre_sum[i]
            if pre_sum[j + 1] - pre_sum[i] == k:
                count += 1
     return count
```

#### 解法2：优化解法（hash map）

如果分析上面解法1的时间复杂度，不难看出，其时间复杂度为 $O(n^2)$，所以进行如下优化：

上述的判断语句：

```python
if pre_sum[j + 1] - pre_sum[i] == k:
	count += 1
```

等价于：

```python
if pre_sum[i] == pre_sum[j+1] - k:
    count += 1
```

因此可以使用 hash map 记录下来有几个 `pre_sum[i]` 和 `pre_sum[j+1] - k ` 相等，干掉内层的 for 循环。

```python
def subarraySum(self, nums: List[int], k: int) -> int:
    # # 使用 hash 表优化
    # # 存储前缀和出现的次数
    _dict = collections.defaultdict(int)
    _dict[0] = 1

    count = 0
    # 前缀和 nums[0..i]
    sum_0_i = 0
    for i in range(len(nums)):
        sum_0_i += nums[i]
        sum_0_j = sum_0_i - k
        if sum_0_j in _dict:
            count += _dict[sum_0_j]
        _dict[sum_0_i] += 1
        
    return count
```



### LC1744 你能在你最喜欢的那天吃到你最喜欢的糖果吗？

[LC1744 你能在你最喜欢的那天吃到你最喜欢的糖果吗？](https://leetcode-cn.com/problems/can-you-eat-your-favorite-candy-on-your-favorite-day/)

这个题目描述比较复杂，关键在于从题目中进行抽象，得出可以用前缀和求解的思路。

> 输入：candiesCount = [7,4,5,3,8], queries = [[0,2,2],[4,2,4],[2,13,1000000000]]
>
> 输出：[true,false,true]
>
> 提示：
>
> 1. 在第 0 天吃 2 颗糖果(类型 0），第 1 天吃 2 颗糖果（类型 0），第 2 天你可以吃到类型 0 的糖果。
> 2. 每天你最多吃 4 颗糖果。即使第 0 天吃 4 颗糖果（类型 0），第 1 天吃 4 颗糖果（类型 0 和类型 1），你也没办法在第 2 天吃到类型 4 的糖果。换言之，你没法在每天吃 4 颗糖果的限制下在第 2 天吃到第 4 类糖果。
> 3. 如果你每天吃 1 颗糖果，你可以在第 13 天吃到类型 2 的糖果。 
>
> 来源：力扣（LeetCode）
> 链接：https://leetcode-cn.com/problems/can-you-eat-your-favorite-candy-on-your-favorite-day
> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

巧妙用到了前缀和，解法如下：

```python
class Solution:
    def canEat(self, candiesCount: List[int], queries: List[List[int]]) -> List[bool]:
        # 求前缀和
        pre_sum = [0] + list(accumulate(candiesCount))
        res = list()
        for _type, day, cap in queries:
            # 题意是从 0 开始，所以要 +1
            min_can_eat, max_can_eat = day + 1, (day + 1) * cap
            # 表示自己喜欢吃的糖果的区间
            first_favor_candy, last_favor_candy = pre_sum[_type] + 1, pre_sum[_type] + candiesCount[_type]
            res.append(min_can_eat <= last_favor_candy and max_can_eat >= first_favor_candy)

        return res
```

其中有个题解非常形象，可以参考：[题解](https://leetcode-cn.com/problems/can-you-eat-your-favorite-candy-on-your-favorite-day/solution/python3-shu-zhou-jie-ti-yi-tu-ming-liao-debzu/)



### LC523 连续的子数组和

> 给你一个整数数组 nums 和一个整数 k ，编写一个函数来判断该数组是否含有同时满足下述条件的连续子数组：
>
> 子数组大小 至少为 2 ，且
> 子数组元素总和为 k 的倍数。
> 如果存在，返回 true ；否则，返回 false 。
>
> 如果存在一个整数 n ，令整数 x 符合 x = n * k ，则称 x 是 k 的一个倍数。
>
> 示例 1：
>
> 输入：nums = [23,2,4,6,7], k = 6
>
> 输出：true
>
> 解释：[2,4] 是一个大小为 2 的子数组，并且和为 6 。
>
> 
>
> 来源：力扣（LeetCode）
> 链接：https://leetcode-cn.com/problems/continuous-subarray-sum
> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

这道题目也是一个经典的前缀和应用，需要注意，直接暴力求解前缀和问题一般都会超时，需要进行优化，最终的代码如下所示：

```python
class Solution:
    def checkSubarraySum(self, nums: List[int], k: int) -> bool:
        mapping = {0: -1}
        for i, prefix in enumerate(accumulate(nums)):
            # 保证 k!=0
            key = prefix % k if k else prefix
            if key not in mapping:
                mapping[key] = i
            elif i - mapping[key] >= 2:
                return True
        return False
```

#### LC 560 解法3：模板

作为对比，如果要设计出来一个模板的话，可以将上述代码套入求解 LC560：

```python
class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        mapping = collections.defaultdict(int)
        mapping[0] = 1
        count = 0

        for i, prefix in enumerate(accumulate(nums)):
            key = prefix - k
            if key not in mapping:
                mapping[prefix] += 1
            else:
                count += mapping[key]
                mapping[prefix] += 1
        return count
```
