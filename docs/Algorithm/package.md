---
title:  背包问题总结
date: 2019-8-6
tags:
 - algorithm
categories:
 - Algorithm
---

## 概览

背包问题可以大致分为三类，分别是：

1. 背包组合问题
2. True/False 问题
3. 最大最小问题

其基础的背包问题一般由两个模型演变而来：

1. 0-1 背包问题
2. 完全背包问题

本文先研究 0-1 背包和完全背包，而后对其他问题进行研究。

## 例题索引

### 0-1 背包

| 问题                     | 类型                   | 递推公式                            | 备注     |
| ------------------------ | ---------------------- | ----------------------------------- | -------- |
| 例题 LC474：1和0         | 0-1 背包最大最小值问题 | `dp[i] = max(dp[i], dp[i-num] + 1)` | 两个背包 |
| 例题 LC416：分割等和子集 | 0-1 背包True/False问题 | `dp[i] = dp[i] or dp[i - num]`      |          |
| 例题 LC494：目标和       | 0-1 背包组合问题       | `dp[i] += dp[i - num]`              |          |

### 完全背包

| 问题                    | 类型                    | 递推公式                               | 备注                          |
| ----------------------- | ----------------------- | -------------------------------------- | ----------------------------- |
| 例题 LC322：零钱兑换    | 完全背包最大最小值问题  | `dp[i] = min(dp[i], dp[i - coin] + 1)` |                               |
| 例题 LC279：完全平方数  | 完全背包最大最小值问题  | `dp[i] = min(dp[i], dp[i - num] + 1)`  |                               |
| 例题 LC518：零钱兑换2   | 完全背包组合问题        | `dp[i] += dp[i - coin]`                |                               |
| 例题 LC377：组合总数 IV | 完全背包组合问题        | `dp[i] += dp[i - num]`                 | 考虑顺序，`target` 放在外循环 |
| 例题 LC139：单词拆分    | 完全背包 True/False问题 | `dp[i] = dp[i] or dp[i - len(word)]`   | 考虑顺序                      |



## 0-1 背包

0-1 背包问题比较简单，其特点是每种物品仅有一件，可以选择放或者不放。求解将哪些物品装入背包可使价值总和最大。

### 递推公式

$F(i, v)$ 是前 $i$ 件物品恰放入一个容量为 $v$ 的背包可以获得的最大价值，其状态转移方程如下所示：

$F[i,v] = max(f[i-1, v], f[i-1, v-C_i] + W_i)$



这个递推公式表示在只考虑 **将第 $i$ 件物品放入容量为 $v$ 的背包中** 这个子问题，可以包含两种情况：

1. 不放第 $i$ 件物品，问题等价于 **前 $i-1$ 件物品放入容量为 $v$ 的背包中**；
   1. 放第 $i$ 件物品，问题等价于 **前 $i-1$ 件物品放入剩下容量为 $v - C_i$ 的背包中，再加上放第 $i$ 件物品的重量 $W_i$**

### 例题 LC474：1和0

#### [474. 一和零](https://leetcode-cn.com/problems/ones-and-zeroes/)

>  问题分析：给你一个二进制字符串数组 `strs` 和两个整数 `m` 和 `n` 。请你找出并返回 `strs` 的最大子集的大小，该子集中最多有 `m` 个 `0` 和 `n` 个 `1` 。如果 `x` 的所有元素也是 `y` 的元素，集合 `x` 是集合 `y` 的 子集 。
>
>  输入：strs = ["10", "0001", "111001", "1", "0"], m = 5, n = 3
>
>  输出：4
>
>  解释：最多有 5 个 0 和 3 个 1 的最大子集是 {"10","0001","1","0"} ，因此答案是 4 。
>  其他满足题意但较小的子集包括 {"0001","1"} 和 {"10","1","0"} 。{"111001"} 不满足题意，因为它含 4 个 1 ，大于 n 的值 3 。

初看这道题较难理解，需要翻译一下，给定 `m` 和 `n`，表示背包中最多有 5 个 0 和 3 个 1 -- target，要求是子集，则表示不能重复选 -- 0-1 背包。

这就是 **最大最小值的 0-1 背包问题**。

求解代码如下所示，掌握几个关键点：

1. **0-1 背包倒着循环**。为什么要倒着循环？这是因为我们的递推公式中使用到了 $i-1$ 这个中间状态，倒着循环能够保证在推 $F[i,v]$ 的时候能够取用 $F[i-1, v]$  的值。
2. 背包问题外层循环物体、内层循环容量。
3. 最大最小问题的递推公式。
4. 状态转移数组初始化的时候初始化为 0

```python
class Solution:
    def findMaxForm(self, strs: List[str], m: int, n: int) -> int:
        if not strs:
            return 0
         dp = [[0] * (n + 1) for _ in range(m + 1)]

        # 遍历 nums
        for s in strs: 
            zero = s.count('0')
            one = s.count('1')
            # 0-1 背包从后往前
            for i in range(m, zero - 1, -1):
                for j in range(n, one - 1, -1):
                    dp[i][j] = max(dp[i][j], dp[i - zero][j - one] + 1)

        return dp[m][n] 
```

总结来说，这道题目并不是最典型的 0 - 1 背包问题，普通的 0-1 背包问题只有一种容量，但是该背包问题存在 0 和 1 两种容量，每个物品（字符串）均需要分别占用 0 和 1 的若干容量，并且所有物品的价值均为 1。是一个较为典型的二维动态规划问题。

上述代码是经过了状态压缩后的结果，如果不考虑状态压缩的话，可以定义三维 dp，state: `dp[i][j][k]`，i 可以表示选择的物品为前 i 个，j 和 k 分别表示背包 0 和背包 1 的数量限制。在递推过程中，最外循环 i 对应的最新的值，`dp[i][j][k] = max(dp[i-1][j-zeros][k-ones]+1, dp[i-1][j][k])`，将第一维压缩后便得到和代码相同的递推公式。

### 例题 LC 416：分割等和子集

#### [416. 分割等和子集](https://leetcode-cn.com/problems/partition-equal-subset-sum/)

> 给你一个 只包含正整数 的 非空 数组 nums 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。
>
> 
>
> 示例 1：
>
> 输入：nums = [1,5,11,5]
>
> 输出：true
>
> 解释：数组可以分割成 [1, 5, 5] 和 [11] 。

分析题目可知：

1. 0-1 背包问题，循环倒着来
2. Trur/False 问题，递推公式为：`dp[i] = d[i] or dp[i -num]`

该题目的要求可以理解为：从背包中找若干个物品，其价值和正好为背包容量的一半。

代码如下：

```python
class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        if not nums:
            return False

        if sum(nums) % 2 == 1:
            return False

        left_target = sum(nums) // 2
        dp = [True] + [False] * left_target
        for num in nums:
            for i in range(left_target, num - 1, -1):
                dp[i] = dp[i] or dp[i - num]

        return dp[left_target]
```

### 例题 LC 494：目标和

#### [494. 目标和](https://leetcode-cn.com/problems/target-sum/)

> 给你一个整数数组 nums 和一个整数 target 。
>
> 向数组中的每个整数前添加 '+' 或 '-' ，然后串联起所有整数，可以构造一个 表达式 ：
>
> 例如，nums = [2, 1] ，可以在 2 之前添加 '+' ，在 1 之前添加 '-' ，然后串联起来得到表达式 "+2-1" 。
> 返回可以通过上述方法构造的、运算结果等于 target 的不同 表达式 的数目。
>
> 
>
> 示例 1：
>
> 输入：nums = [1,1,1,1,1], target = 3
>
> 输出：5
>
> 解释：一共有 5 种方法让最终目标和为 3 。
> -1 + 1 + 1 + 1 + 1 = 3
> +1 - 1 + 1 + 1 + 1 = 3
> +1 + 1 - 1 + 1 + 1 = 3
> +1 + 1 + 1 - 1 + 1 = 3
> +1 + 1 + 1 + 1 - 1 = 3

分析题目可知：

1. 0-1 背包问题，循环倒着来
2. 背包组合问题，递推公式：`dp[i] += dp[i-num]`

该题目给出了目标和，可以根据这个条件求解出背包的目标，进而写出代码。需要找出的 目标 为(数组的和 + target) // 2。

证明过程为：全部的可分为 +, -，分左右，左右的和为 left + right = sum(nums)，要的 target = left - right，相加可得 2 * left = sum(nums) + target， 由于 target 肯定有解，left * 2 则必须是偶数。

代码如下：

```python
class Solution:
    def findTargetSumWays(self, nums: List[int], target: int) -> int:
        if target > sum(nums):
            return 0
        left_target = (sum(nums) + target) // 2
        if (sum(nums) + target) % 2 == 1:
            return 0

        # 组合问题解 dp[i] += dp[i - num]
        dp = [1] + [0] * left_target
        for num in nums:
            for i in range(left_target, num - 1, -1):
                dp[i] += dp[i - num]

        return dp[left_target]
```



### 总结

对比而言，0-1 一维背包的实现方式是：

```python
def zero_one_pack(F, C, W):
    # 倒着来
    for v <- V to C:
        F[v] <- max(F[v], F[v - C] + W)
```

其中 C 表示某个物体的容量，W 表示其价值。

0-1 背包的伪代码可以为：

```python
F[0..V] <- 0
for i <- 1 to N
	zero_one_pack(Fi, Ci, Wi)
```

- 0-1背包倒着来

## 完全背包

不同于 0-1背包，完全背包中的每种物品都有无限件可以用，求解：将哪些物品装入背包，可使这些物品的耗费的费用总 和不超过背包容量，且价值总和最大。

### 递推公式

完全背包的递推公式和 0-1 背包十分相似，不同的点仅在于：

1. 完全背包的内层循环是正着来的。

要解释这个原因，就需要一个推导的过程，其是由 0-1背包推导而来的，其递推公式 $F[i, v] = max{F[i − 1, v − kCi] + kWi | 0 ≤ kCi ≤ v}$，本质上和 0-1 背包相同。

### 例题 LC 322：零钱兑换

#### [322. 零钱兑换](https://leetcode-cn.com/problems/coin-change/)

>  编写一个函数来计算可以凑成总金额所需的最少的硬币个数。

从题目中可以得出：

1. 完全背包问题：正着循环
2. 最大最小问题，递推公式为：`dp[i] = max(dp[i], dp[i-1] + 1)`
3. 不需要考虑顺序，正常循环

题目表述较为简单，直接看代码实现：

```python
class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        if not coins:
            return -1
        dp = [float('inf')] * (amount + 1)
        dp[0] = 0
        for coin in coins:
            for i in range(coin, amount + 1):
                dp[i] = min(dp[i], dp[i - coin] + 1)

        return -1 if dp[amount] == float('inf') else dp[amount]
```

当然也可以改变顺序，这样稍微快一些：

```python
class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        if not coins:
            return -1
        dp = [float('inf')] * (amount + 1)
        dp[0] = 0
        for i in range(1, amount + 1):
            for coin in coins:
                if i >= coin:
                    dp[i] = min(dp[i], dp[i - coin] + 1)

        return -1 if dp[amount] == float('inf') else dp[amount]
```

通过代码可以看出，这个问题的实现和完全背包也不尽完全相同，其主要不同在于：

1. 循环的位置变了，现在外层循环了背包，内层循环了物品。这种方式在一定程度上可以提高性能，如果把循环顺序调换回来，代码也是可以通过的。但是上述的循环方式性能较好。
2. 在代码中进行了一些优化操作，如 `if i >= coin` 的判断，就是说背包的大小要大于物品才可以进行装载，这样可以提高性能。这一步省略调代码也是可以通过的。
3. 初始化问题：由于是最小化问题，所以初始化为了 `float(inf)`

### 例题 LC 279：完全平方数

#### [279. 完全平方数](https://leetcode-cn.com/problems/perfect-squares/)

> 给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。
>
> 给你一个整数 n ，返回和为 n 的完全平方数的 最少数量 。
>
> 完全平方数 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。
>
> 
>
> 示例 1：
>
> 输入：n = 12
>
> 输出：3 
>
> 解释：12 = 4 + 4 + 4

从题目中可以得到信息：

1. 完全背包问题：正着循环
2. 最大最小问题，递推公式为：`dp[i] = max(dp[i], dp[i-1] + 1)`
3. 不需要考虑顺序，正常循环

代码如下：

```python
class Solution:
    def numSquares(self, n: int) -> int:
        dp = [float('inf')] * (n + 1)
        dp[0] = 0

        # 构造物品数组
        nums = [_**2 for _ in range(1, n+1) if _**2 <= n]

        for num in nums:
            for i in range(num, n + 1):
                dp[i] = min(dp[i], dp[i - num] + 1)

        return -1 if dp[-1] == float('inf') else dp[-1]
```

### 例题 LC 518：零钱兑换2

#### [518. 零钱兑换 II](https://leetcode-cn.com/problems/coin-change-2/)

> 给定不同面额的硬币和一个总金额。写出函数来计算可以凑成总金额的硬币组合数。假设每一种面额的硬币有无限个。

这个题目和上述例题都是完全背包问题，但是却存在些许不同：

1. 这是一个完全背包且不考虑顺序的组合问题，外层循环还是和 0-1背包保持一致
2. 上面题目求解的是凑成目标数量所需要的最小硬币数；改题目求解的是凑成目标数量的硬币组合数
3. 总结2：上面题目是最大最小问题，该题目是组合问题
4. 组合问题的递推公式为：`dp[i] += dp[i -num]`

其代码如下：

```python
class Solution:
    def change(self, amount: int, coins: List[int]) -> int:
        if not coins:
            return 0
		# 就是 dp[0] = 1
        dp = [1] + [0] * amount

        for coin in coins:
            # 这是一个优化，可以从 1 开始循环，然后判断 i >= coin
            for i in range(coin, amount + 1):
                dp[i] += dp[i - coin]

        return dp[amount]
```

### 例题 LC 377： 组合总数 IV

#### [377. 组合总和 Ⅳ](https://leetcode-cn.com/problems/combination-sum-iv/)

> 给你一个由 不同 整数组成的数组 nums ，和一个目标整数 target 。请你从 nums 中找出并返回总和为 target 的元素组合的个数。
>
> 题目数据保证答案符合 32 位整数范围。
>
> 输入：nums = [1,2,3], target = 4
>
> 输出：7
>
> 解释：
> 所有可能的组合为：
> (1, 1, 1, 1)
> (1, 1, 2)
> (1, 2, 1)
> (1, 3)
> (2, 1, 1)
> (2, 2)
> (3, 1)
> 请注意，顺序不同的序列被视作不同的组合。

这是一个经典的考虑顺序的完全背包组合问题，看到这样的问题，首先确定模板：

1. 完全背包问题：正着循环
2. 组合问题：递推公式为：`dp[i] += dp[i -num]`
3. 考虑顺序，把背包放在外层循环

很轻松写出代码：

```python
class Solution:
    def combinationSum4(self, nums: List[int], target: int) -> int:
        if not nums:
            return 0
        dp = [0] * (target + 1)
        dp[0] = 1
        # 考虑顺序，target 放在外面
        for i in range(1, target + 1):
            for num in nums:
                if i >= num:
                    dp[i] += dp[i - num]

        return dp[target]
```

### 例题 LC 139：单词拆分

#### [139. 单词拆分](https://leetcode-cn.com/problems/word-break/)

> 给定一个非空字符串 s 和一个包含非空单词的列表 wordDict，判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。
>
> 说明：
>
> 拆分时**可以重复使用**字典中的单词。
> 你可以假设字典中没有重复的单词。
>
> 示例 1：
>
> 输入: s = "leetcode", wordDict = ["leet", "code"]
>
> 输出: true
>
> 解释: 返回 true 因为 "leetcode" 可以被拆分成 "leet code"。

从题目中可以得出信息：

1. 完全背包问题，（拆分时**可以重复使用**字典中的单词）：正着循环
2. true/false 问题，递推公式为：`dp[i] = dp[i] or dp[i - num]`
3. 考虑顺序，背包在外循环

代码如下：

```python
class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        if not wordDict:
            return False
		# dp[0] = True
        dp = [True] + [False] * len(s)

        for i in range(1, len(s) + 1):
            for word in wordDict:
                if i - len(word) >= 0 and s[i - len(word):i] == word:
                    dp[i] = dp[i] or dp[i - len(word)]

        return dp[-1]
```

### 总结

完全背包问题的伪代码如下所示：

```python
def CompletePack(F, C, W)
	for v ← C to V
		F[v] ← max{F[v], f[v − C] + W}
```

```python
F[0..V ] ←0
for i ← 1 to N
    for v ← Ci to V
		F[v] ← max(F[v], F[v − Ci] + Wi)
```

- 完全背包正着来
- 如果与顺序有关，内循环 coins，外循环 target（背包容量在外）

