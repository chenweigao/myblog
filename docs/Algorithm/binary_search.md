---
title: Binary Search 二分搜索总结
date: 2019-9-12
tags:
 - algorithm
 - binary_search
categories:
 - Algorithm
---

## Summary

### 二分搜索模板

### 基本的二分搜索算法

1. 手工实现

   ```python
   class Solution:
       def search(self, nums: List[int], target: int) -> int:
           if not nums:
               return -1
           l, r = 0, len(nums) - 1
           while l <= r:
               mid = l + (r - l) // 2
               if nums[mid] < target:
                   l = mid + 1
               elif nums[mid] > target:
                   r = mid - 1
               else:
                   return mid
   
           return -1
   ```

2. 使用 Python `bisect` 库

   ```python
       def search_2(self, nums: List[int], target: int) -> int:
           res = bisect.bisect_left(nums, target)
           if res != len(nums) and nums[res] == target:
               return res
           return -1
   ```

### 寻找左侧边界的二分搜索

1. 手工实现（边界条件为` [ ]`）

   ```python
       def search(self, nums: List[int], target: int) -> int:
           l, r = 0, len(nums) - 1
           while l <= r:
               mid = l + (r - l) // 2
               if nums[mid] < target:
                   l = mid + 1
               elif nums[mid] > target:
                   r = mid - 1
               elif nums[mid] == target:
                   # 暂时不能返回，需要收缩右边界，锁定左侧边界
                   r = mid - 1
           # 检查越界情况。注意这边下面两个条件是二选一的
           if l >= len(nums) or nums[l] != target:
               return -1
           return l
   ```

2. 手工实现（边界条件为 `[ )`）

   ```python
       def search(self, nums: List[int], target: int) -> int:
           # 注意边界
           l, r = 0, len(nums)
           while l < r:
               mid = l + (r - l) // 2
               if nums[mid] < target:
                   l = mid + 1
               elif nums[mid] > target:
                   r = mid
               elif nums[mid] == target:
                   # 注意
                   r = mid
           return l
   ```

3. 使用 `bisect`

   手工实现在很多情况下都需要调试，比较慢，因此使用 `bisect` 比较方便，其使用方式如下：

   - 找到 *Find rightmost value less than target*：找到小于目标元素，离目标元素最近的元素（肯定在左边）。如 `[-1, 1, 3, 5, 9, 12]` 目标元素 2, 则返回了 1，表示 2 可以插入到 1 和 3 之间。对应的下标 `res - 1` 就是 1 的下标。

     ```python
     def search2(self, nums: List[int], target: int) -> int:
             res = bisect.bisect_left(nums, target)
             if res:
                 return nums[res - 1]
             return -1
     ```

   - 找到 *Find rightmost value less than or equal to target*

     ```python
         def search3(self, nums: List[int], target: int) -> int:
             res = bisect.bisect_right(nums, target)
             if res:
                 return nums[res - 1]
             return -1
     ```

   ### 寻找右侧边界的二分搜索

   1. 手工实现

      ```python
          def search(self, nums: List[int], target: int) -> int:
              l, r = 0, len(nums) - 1
              while l <= r:
                  mid = l + (r - l) // 2
                  if nums[mid] < target:
                      l = mid + 1
                  elif nums[mid] > target:
                      r = mid - 1
                  elif nums[mid] == target:
                      # 暂时不能返回，需要收缩左边界，锁定右侧边界
                      l = mid + 1
              # 检查越界情况。注意这边下面两个条件是二选一的
              if r < 0 or nums[l] != target:
                  return -1
              return r
      ```

   2. 手工实现（边界 `[)`）

      ```python
          def search(self, nums: List[int], target: int) -> int:
              l, r = 0, len(nums)
              while l <= r:
                  mid = l + (r - l) // 2
                  if nums[mid] < target:
                      l = mid + 1
                  elif nums[mid] > target:
                      r = mid
                  elif nums[mid] == target:
                      # 如果是寻找左侧边界，这边就是 r = mid
                      l = mid + 1
              # 如果是寻找左侧边界，这边就是 l
              return l - 1 # 注意
      ```
   
   3. 使用库
   
      ```python
      def find_gt(a, x):
          'Find leftmost value greater than x'
          i = bisect_right(a, x)
          if i != len(a):
              return a[i]
          raise ValueError
      
      def find_ge(a, x):
          'Find leftmost item greater than or equal to x'
          i = bisect_left(a, x)
          if i != len(a):
              return a[i]
          raise ValueError
      ```

### 参考

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

## 二分查找思路整理

有下面的例子，可以分为四种问题，提出二分查找：

![binary_search_1](/binary_search/binary_search_1.png)

从一个新的角度区理解这个问题，该问题可以变为：**找出图中的蓝红边界，即求出未知数K**。

![binary_search_2](/binary_search/binary_search_2.png)

针对此问题，可以写出伪代码如下所示：

```
l = -1, r = N
while l + 1 != r
  m = (l + r) / 2 取下界
  if isBlue(m)
    l = m
  else
    r = m
return l or r
```

有了以上的伪代码，图1 中的问题答案分别为：

![binary_search_3](/binary_search/binary_search_3.png)


参考视频：https://www.bilibili.com/video/BV1d54y1q7k7

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

```python
import bisect
nums = [1, 3, 4, 4, 6, 7]
print(bisect.bisect(nums, 4)) # 4
print(bisect.bisect_left(nums, 4)) # 2
```

注意到，`bisect()` 默认会查找元素需要插入的位置(**指下标**)，如果是重复的元素，则会返回其最右侧可以插入的位置，使用 `bisect_left()` 可以返回其左侧位置。

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

### LC875 爱吃香蕉的珂珂

> 珂珂喜欢吃香蕉。这里有 N 堆香蕉，第 i 堆中有 piles[i] 根香蕉。警卫已经离开了，将在 H 小时后回来。
>
> 珂珂可以决定她吃香蕉的速度 K （单位：根/小时）。每个小时，她将会选择一堆香蕉，从中吃掉 K 根。如果这堆香蕉少于 K 根，她将吃掉这堆的所有香蕉，然后这一小时内不会再吃更多的香蕉。  
>
> 珂珂喜欢慢慢吃，但仍然想在警卫回来前吃掉所有的香蕉。
> 
> 返回她可以在 H 小时内吃掉所有香蕉的最小速度 K（K 为整数）。
>
>来源：力扣（LeetCode）
> 链接：https://leetcode-cn.com/problems/koko-eating-bananas
> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


下面两种解法展示了不同边界条件下该如何处理：

<RecoDemo :collapse="false">
<template slot="code-python">
  <<< @/docs/.vuepress/code/algorithm/binary_search_koko_1.py
</template>
</RecoDemo>

<RecoDemo :collapse="false">
<template slot="code-python">
  <<< @/docs/.vuepress/code/algorithm/binary_search_koko_2.py
</template>
</RecoDemo>


### LC1011 在 D 天内送达包裹的能力

[1011. 在 D 天内送达包裹的能力](https://leetcode-cn.com/problems/capacity-to-ship-packages-within-d-days/)

我们先从题目的示例看一下这个题要做什么（个人感觉二分类的题目初见都很迷惑）

> 输入：weights = [1,2,3,4,5,6,7,8,9,10], days = 5
> 输出：15
> 解释：
> 船舶最低载重 15 就能够在 5 天内送达所有包裹，如下所示：
> 第 1 天：1, 2, 3, 4, 5
> 第 2 天：6, 7
> 第 3 天：8
> 第 4 天：9
> 第 5 天：10
>
> 请注意，货物必须按照给定的顺序装运，因此使用载重能力为 14 的船舶并将包装分成 (2, 3, 4, 5), (1, 6, 7), (8), (9), (10) 是不允许的。 
>

翻译翻译：给定一个数组，每一次取出数组中的若干元素，需要刚好在规定的次数内取完，我们要求每一次取出来的数组的和的最大值是多少？

这道题目和 LC875 爱吃香蕉的珂珂 有异曲同工之妙，我们将这两个部分放在一起研究。

我们先给出自己的解法：

```python
class Solution:
    def shipWithinDays(self, weights: List[int], days: int) -> int:
        l, r = max(weights), sum(weights)
        while l < r:
            mid = l + (r - l) // 2
            if self.check(mid, weights) > days:
                l = mid + 1
            else:
                r = mid
        return l

    def check(self, mid, weights):
        # 计算一下 mid 运输能力情况下需要多少天
        res = 1
        current = 0
        for weight in weights:
            if current + weight > mid:
                res += 1
                current = 0
            current += weight
        return res
```

思考一个问题：这个题目为什么可以用二分呢？

按照官方题解的思路，我们翻译一下：假设我们知道了船只的运载能力 `x`, 当运载能力为 `x`的时候，我们刚好可以在 `days`天内运输完所有货物；当运载能力大于 `x`的时候，我们也可以在 `days` 天内运输完所有货物；当运载能力小于 `x`的时候，我们就不能在 `days`天内运输完所有货物。

也就是说，我们存在这一个边界条件 `x`，这个 `x`的取值范围在 0 ~ sum(货物) 之间，再进一步，就是在 最大的货物重量 ~ sum(货物) 之间，我们在这个范围内查找符合条件的 `x`, 使其满足条件，我们就得到了解。

思考我们需要满足什么条件呢？假设我们已经知道了运输的能力 `x`, 那么我们就把所有的货物拿这个 `x`装一下，最后计算一下需要装载的天数，如果需要装载的天数比较多，那么我们应该增加 `x`, 反之我们我们减少`x`, 如果正好的话，我们返回。

我们在上面用了二分查找，二分查找是细节最多的，我们再次复习一下：

首先我们思考一下，我们是要找左边界，还是右边界？或者就不是这个范围类型的？其实我们仔细来看，还会寻找左边界的，我们按照左边界的模板把这个重写一下：

```python
    def shipWithinDays(self, weights: List[int], days: int) -> int:
        l, r = max(weights), sum(weights) + 1 # 注意区间为 [ )
        while l < r: # < 
            mid = l + (r - l) // 2
            if self.check(mid, weights) > days:
                l = mid + 1
            elif self.check(mid, weights) < days:
                r = mid # 注意
            elif self.check(mid, weights) == days:
                r = mid # 注意

        return l
```

### LC826 安排工作以达到最大收益

[826. 安排工作以达到最大收益](https://leetcode-cn.com/problems/most-profit-assigning-work/)

#### 二分解法

这个题目中有很多很多的细节可以参考，我们先给出一个二分的解法：

```python
    def maxProfitAssignment2(self, difficulty: List[int], profit: List[int], workers: List[int]) -> int:
        # 注意我们排序的时候需要把difficulty和profit一起排序
        difficulty, profit = zip(*sorted(zip(difficulty, profit)))
        res = 0
        # 注意我们需要考虑一种情况就是：找到了最接近这个worker可以做的工作了，但是我们需要找到他能胜任所有工作的里面的最大利润
        # 我们知道，排序以后的利润，如果前面的较大，后面的较小，我们完全可以用前面较大的利润替换掉后面较小的利润
        max_profits = list(itertools.accumulate(profit, max))
        for worker in workers:
            # 判断 worker 不能胜任最小难度的工作，就是没找到
            if worker < min(difficulty):
                res += 0
                continue
            idx = bisect.bisect(difficulty, worker)
            res += max_profits[idx - 1]
        return res
```

这里面先解析一下 Python 的一些语法：

1. `difficulty, profit = zip(*sorted(zip(difficulty, profit)))`

   这行代码的含义是，将 `difficulty` 和 `profit` 打包进行排序。

   | param                                                        | value                                            |
   | ------------------------------------------------------------ | ------------------------------------------------ |
   | `difficulty`                                                 | [68, 35, 52, 47, 86]                             |
   | `profit`                                                     | [67, 17, 1, 81, 3]                               |
   | `sorted(zip(difficulty, profit))`                            | [(35, 17), (47, 81), (52, 1), (68, 67), (86, 3)] |
   | `difficulty, profit = zip(*sorted(zip(difficulty, profit)))` |                                                  |
   | `difficulty`                                                 | (35, 47, 52, 68, 86)                             |
   | `profit `                                                    | (17, 81, 1, 67, 3)                               |

   我们可以看到，我们按照 `difficulty`从小到大的顺序排列，并且 `profit` 和其对应关系也没有改变。

   而 `zip` 就是将其压缩以后，再进行解包，从而拿出来两个数组。

2. `max_profits = list(itertools.accumulate(profit, max))`

   这行代码的意思是，举例来看，很直观：

   | param                                     | value                |
   | ----------------------------------------- | -------------------- |
   | `profit`                                  | [67, 17, 1, 81, 3]   |
   | `list(itertools.accumulate(profit, max))` | [67, 67, 67, 81, 81] |

   我们可以看出，就是从小到大进行了一个类似于排序的操作，如果后面遇到的元素比前面的小，就替换成前面的，反之则保持元素不变。

3. 一些优化

   除此之外，我们还有一些写法：

   ```python
   min_diff = min(difficulty)
   
   def max_profit(worker):
       if worker < min_diff:
           return 0
       return max_profits[bisect.bisect(difficulty, worker) - 1]
   
   return sum(map(max_profit, worker))
   ```

   这个写法里面使用了一个函数来返回值，然后调用 `map` 去匹配到最终的值，也是一个很不错的写法。

4. 我们在这个题目里面用到了二分：`bisect.bisect()`

   寻找元素插入的位置，如果很多个就插入到最右侧。

#### 巧妙解法

```python
    def maxProfitAssignment3(self, difficulty: List[int], profit: List[int], workers: List[int]) -> int:
        res = 0
        # 这种方式出来的类似于[(10, 2), (20, 4), (30, 6), (40, 8), (50, 10)]，比较方便记忆写法
        # a, b = zip(*[(10, 2), (20, 4), (30, 6), (40, 8), (50, 10)])
        # a: (10, 20, 30, 40, 50)
        # b: (2, 4, 6, 8, 10)
        li = sorted(zip(profit, difficulty))
        workers.sort()
        res = 0
        while workers and li:
            # 利润最大的，能力最大的worker可以胜任
            if workers[-1] >= li[-1][1]:
                res += li[-1][0]
                # 这个工人已经使用过了
                workers.pop()
            else:
                li.pop()
        return res
```

上述解法是比较巧妙的，我们先将 `profit` 和 `difficulty`进行打包，然后我们倒序遍历 worker，这里倒序遍历 worker 比较绕，我们知道 worker 是按照能力的大小来排序的，我们将能力最强的 worker 匹配~~难度~~利润最大的，如果说这个能力最强的工人也胜任不了~~难度~~利润最大的工作的话，那么这个工作就没人可以胜任了，此时我们将这个工作给 pop 出去。

但是如果我们发现这个工人可以胜任这个工作，这时候选择这个工作让这个工人做掉，这是正确的吗？还是按照上述表格的数据，我们给出 `li`的排序结果：`[(1, 52), (3, 86), (17, 47), (67, 35), (81, 68)]`, 不难发现，这个排序结果是按照利润的大小来排序的，也就是说，我们是将能力最强的 worker 匹配了利润最高的，这个能力最强的如果搞不定利润最高的（能力不足），那么剩下的菜鸡就更不可能完成这个工作了，我们将这个工作干掉。

我们要思考，这是最优的吗？其实是不难思考的：因为题目规定了每一个工人最多只能安排一个工作，所以说我们**让能力最强的工人来搞利润最大的工作**是毫无疑问的。

题目中还说到了，一个工作可以完成多次。所以我们将某个工作搞定的时候，就降工人下岗掉，但是工作不变，直到后面出现的能力稍弱的工人无法胜任当前工作的时候，我们再将工作下架掉！





