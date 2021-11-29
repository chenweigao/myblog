---
title: Algorithm of DP: Basic Problems
date: 2021-11-23
tags:
 - algorithm
categories:
 - Algorithm
---

🚑🚑🚑 针对动态规划，本文主要讲述动态规划基础问题及求解，包括：

1. 记忆化搜索
2. TODO

## 记忆化搜索

### 概览

记忆化搜索和 DP 是有很多相似之处的，所以把记忆化搜索放在 DP 里面进行研究。

总的来说，我们写记忆化搜索算法的步骤大致为：

- 使用BFS记忆化：
  1. 写出这道题的暴力搜索程序（如 DFS）
  2. 将这个 DFS 改写城“无需外部变量”的 DFS
  3. 添加记忆化数组
- 使用状态转移方程记忆化：
  1. 把这道题目的 DP 和方程写出来
  2. 根据它们写出 DFS 函数
  3. 添加记忆化数组

其优点在于：
1. 避免搜索到无用状态

其缺点在于：
1. 不能滚动数组
2. 有些优化较难
3. 效率较低但是不至于 TLE



有时候会觉得，这个记忆化搜索和 DFS 很像，也有点背包的感觉，以后再好好研究一下。

2021年11月24日：就目前理解来说，这是一种很垃圾的算法。

### LC638 大礼包

[638. 大礼包](https://leetcode-cn.com/problems/shopping-offers/)

这道题目可以利用记忆化搜索的方式去求解。

首先按照例子解释一下这个用例：

> price = [2, 5] // A,B 对应的价格
>
> special = [[3, 0, 5], [1, 2, 10]] // 表示折扣, 3A 0B 的大礼包价格是 5
>
> needs = [3, 2] // 需要买的总的数量

1. 我们该怎么合理使用大礼包呢？

   按照记忆化搜索的思路，我们首先过滤掉无用的状态，即过滤掉不需要计算的大礼包，可以分几种情况来判断哪些大礼包是我们不需要的：

   - 根据题目要求「不能购买超出购物清单指定数量的物品」，如果大礼包里面的所有物品加起来超过我们要买的物品总数了，那么这个大礼包不能要；
   - 大礼包不划算则不选这个大礼包（不划算指的是我单独买这些物品，下来大礼包反而贵了）
   - 大礼包内不包含我们要买的物品，也不能买 

   以上的条件就是我们记忆化搜索时可以用来筛选的条件。

2. 根据题目要求，我们可以写出大致的状态转移方程。

   - 我们用 `dp `表示满足购物清单 `needs `需要的最小花费

   - 我们思考满足购物清单 `needs `的最后一次购买，其可以分为两种情况：
     1. 购买大礼包
     2. 不购买大礼包
   - 我们如果购买大礼包的时候，可以遍历每一个大礼包，$price_i$ 表示第 $i$ 个大礼包的价格，$needs_i$ 表示大礼包中的物品清单，$needs - needs_i$ 表示购物清单 $needs$ 减去第 $i$ 个大礼包中包含的物品清单后剩余的物品清单。

先附上官方题解，这个题解目前还有很多的疑问点：

```python
class Solution:
    def shoppingOffers(self, price: List[int], special: List[List[int]], needs: List[int]) -> int:
        n = len(price)
        filter_special = []
        for sp in special:
            # 比如在第一个例子中 i == 2
            # 第二个条件表示大礼包是有优惠的，这时候我们选择该礼包
            if sum(sp[i] for i in range(n)) > 0 and sum(sp[i] * price[i] for i in range(n)) > sp[-1]:
                filter_special.append(sp)

        @lru_cache(None)
        def dfs(cur_needs):
            # 在不购买大礼包的时候，购买购物清单中所有物品需要的花费
            min_price = sum(need * price[i] for i, need in enumerate(cur_needs))
            for cur_special in filter_special:
                special_price = cur_special[-1]
                nxt_needs = []
                for i in range(n):
                    if cur_special[i] > cur_needs[i]:
                        # 不购买多于当前订单数量的物品
                        break
                    # 还剩下多少物品需要购买
                    nxt_needs.append(cur_needs[i] - cur_special[i])
                # why, 如果上述遍历完成，满足数量条件，大礼包可以购买
                if len(nxt_needs) == n:
                    min_price = min(min_price, dfs(tuple(nxt_needs)) + special_price)

            return min_price

        return dfs(tuple(needs))
```

对应的测试用例：

```python
class Test(unittest.TestCase):
    def setUp(self) -> None:
        self.s = Solution()

    def test_1(self):
        # 折扣对应的价格
        price = [2, 5]
        # 表示折扣
        special = [[3, 0, 5], [1, 2, 10]]
        # 需要买的数量
        needs = [3, 2]

        res = self.s.shoppingOffers(price, special, needs)
        self.assertEqual(14, res)
```

针对上面的疑点，我们可以参考背包问题中的经典背包问题，加深理解，然后再寻求求解方式。

### P1048 [NOIP2005 普及组] 采药

> 辰辰是个天资聪颖的孩子，他的梦想是成为世界上最伟大的医师。为此，他想拜附近最有威望的医师为师。医师为了判断他的资质，给他出了一个难题。医师把他带到一个到处都是草药的山洞里对他说：“孩子，这个山洞里有一些不同的草药，采每一株都需要一些时间，每一株也有它自身的价值。我会给你一段时间，在这段时间里，你可以采到一些草药。如果你是一个聪明的孩子，你应该可以让采到的草药的总价值最大。”
>
> 如果你是辰辰，你能完成这个任务吗？
>

先给出测试代码：

```python
class Test(unittest.TestCase):
    def setUp(self) -> None:
        self.s = Solution()

    def test_1(self):
        costs = [71, 69, 1]
        values = [100, 1, 2]
        res = self.s.solution(costs, values)
        self.assertEqual(3, res)
```

我们在这个文章中研究记忆化搜索，所以考虑这个问题，首先按照**暴力搜索**的思路去解决。

