---
title: "Algorithm of Priority Queue(Heap)"
date: 2021-11-29
tags:
 - algorithm
categories:
 - Algorithm
---

 🟥🟧🟨 优先级队列的原理以及应用。🟩🟪🟫🟨

1. 大根堆
2. 小根堆（Python 默认）

<!-- more -->

## 大根堆与小根堆

### 大根堆

什么是大根堆？

### 小根堆

什么是小根堆？Python 默认是小根堆。

```python
a = [1, 3, 2, -1, 0]
heapq.heapify(a)
heapq.heappop(a) # -1
```

## 优先级队列

### 原理与实现

🧡💛💚 在 Python 中，使用堆(heapq)来实现优先级队列。

- 初始化时，直接将优先级队列初始化为列表：`heap = []`;
- python 使用堆的时候，**默认是小根堆**。



### LC786 第 K 个最小的素数分数

#### [786. 第 K 个最小的素数分数](https://leetcode-cn.com/problems/k-th-smallest-prime-fraction/)

> 给你一个按递增顺序排序的数组 arr 和一个整数 k 。数组 arr 由 1 和若干 素数  组成，且其中所有整数互不相同。
>
> 对于每对满足 0 < i < j < arr.length 的 i 和 j ，可以得到分数 arr[i] / arr[j] 。
>
> 那么第 k 个最小的分数是多少呢?  以长度为 2 的整数数组返回你的答案, 这里 answer[0] == arr[i] 且 answer[1] == arr[j] 。
>
> arr = [1,2,3,5], k = 3
> 
> 输出：[2,5]

遇到第 k 大、第 k 小的问题，我们通常的思路就是使用优先级队列来实现。

该问题的实现代码如下所示：

```python
class Solution:
    def kthSmallestPrimeFraction(self, arr: List[int], k: int) -> List[int]:
        heap = []

        # 默认小根堆
        n = len(arr)
        # 先把最小的那堆数入堆
        for i in range(1, n):
            heapq.heappush(heap, (arr[0] / arr[i], 0, i))
        i, j = 0, 0
        # why k
        for _ in range(k):
            val, i, j = heapq.heappop(heap)
            if i + 1 < j:
                heapq.heappush(heap, (arr[i + 1] / arr[j], i + 1, j))
        # why not heap
        return [arr[i], arr[j]]
```

这个代码实现中，有很多需要注意的细节：

1. 记住 Python 默认的是小根堆；
2. 我们在 `for` 循环中循环了 `k` 次，有时候我们会循环 `k-1`次；这个细节需要留意，后续通过比较不同的题解对归类进行总结；
3. 我们把最小的分数（分子为 1，分母为所有数构成的小根堆的堆顶元素）拿出来，然后将比这个元素大的元素放进堆（目的是为了比较放进堆的元素和原有堆中的元素的大小），而后按照顺序出堆，到第 k 个即为我们需要的元素。



### LC215 数组中的第K个最大元素

#### [数组中的第K个最大元素](https://leetcode-cn.com/problems/kth-largest-element-in-an-array/)

> 给定整数数组 `nums` 和整数 `k`，请返回数组中第 `**k**` 个最大的元素。
>
> 请注意，你需要找的是数组排序后的第 `k` 个最大的元素，而不是第 `k` 个不同的元素。
>
> 输入: [3,2,1,5,6,4] 和 k = 2
>
> 输出: 5

#### 小根堆求解

这也是一个应用小根堆求解的问题，其实现代码如下：

```python
class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        heap = [x for x in nums[:k]]
        heapq.heapify(heap)
        for i in range(k, len(nums)):
            if nums[i] > heap[0]:
                heapq.heappop(heap)
                heapq.heappush(heap, nums[i])
        return heap[0]
```

从上段代码中我们可以看出：

1. 在建立小根堆的时候，我们直接取了数组的前 k 个元素，用于建堆，如此一来我们可以从数组的剩余元素中一个一个添加元素，每增加一个元素，堆顶最小的元素就出堆了，直到我们将原数组中所有的元素都入堆了，最后留下了容量为 k 的小根堆，堆顶的元素就是第 k 大的元素；
2. 需要注意，我们在是否出堆的时候有一个判断，即如果当前的元素比堆顶元素大，我们就把堆顶元素出推。

#### 大根堆求解

除了这种小根堆的解法之外，我们也可以使用大根堆来求解这个问题，用大根堆求解的时候，我们只需要将堆 pop k 次，就可以得到第 k 大的元素。

```python
class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        heap = [-x for x in nums]
        heapq.heapify(heap)
        for _ in range(k - 1):
            heapq.heappop(heap)

        return -heap[0]
```

但是我们很容易看出，这种方法将整个数组都用于建堆了，其性能势必受到影响，在此是为了展示大根堆求解这个问题的方法。



### LC1439 有序矩阵中的第 k 个最小数组和

[有序矩阵中的第 k 个最小数组和](https://leetcode-cn.com/problems/find-the-kth-smallest-sum-of-a-matrix-with-sorted-rows/)

> 给你一个 m * n 的矩阵 mat，以及一个整数 k ，矩阵中的每一行都以非递减的顺序排列。
>
> 你可以从每一行中选出 1 个元素形成一个数组。返回所有可能数组中的第 k 个 最小 数组和。
>
> 输入：mat = [[1,3,11],[2,4,6]], k = 5
>
> 输出：7
>
> 解释：从每一行中选出一个元素，前 k 个和最小的数组分别是：
>
> [1,2], [1,4], [3,2], [3,4], [1,6]。其中第 5 个的和是 7 。 



#### 暴力求解

对于这种题目，我们应当先掌握暴力求解的思路，再对其进行优化。

```python
class Solution:
    def kthSmallest(self, matrix: List[List[int]], k: int) -> int:
        h = matrix[0][:]
        for row in matrix[1:]:
            h = sorted([i + j for i in row for j in h])[:k]
        return h[k - 1]
```

这个方法是可以 AC 的，我们现在分析一下为什么这个方法是可行的。

我们将所有的可能性全拿出来，然后取前 k 个，最后再拿出来我们想要的元素即可。

主要注意的是，我们每一次在生成 h 的时候，都只截取了前 K 个元素，这是因为后面的元素不再有竞争力（毕竟后面的肯定不是前 k 小的了），基于这个原则，我们每次都生成 k 个元素，最终把矩阵的每一行都遍历过去，得到我们想要的答案。

❓❓❓ why `h = matrix[0][:]`?

比较疑惑，这里为什么要使用这个呢？仔细思考了一下，这段代码的目的是把矩阵的第一行元素复制下来，然后再和剩下的每一行元素加起来，这样会计算到所有的和吗？**我们发现是可以的**：🧡🧡 这个问题很巧妙的给出了一个答案：如何求解多个数组，每一个数组各取一个数字相加，所有可能的和？

举例来说，给定了数组如下：

```python
matrix = [
    [1, 4, 7, 10],
    [2, 3, 5, 9],
    [1, 1, 12, 13]
]
```

我们要从这个数组的每一行元素中取一个元素，如从第一行中取 `1`, 第二行中取 `2`, 第三行中取 `1`, 计算三者的和为 $1 + 2+ 1 = 5$, 以此类推，我们计算出所有可能的和。

按照以前的思路，我们会将这三个数组的所有的排列组合计算出来，再求和，比如说使用 python 的 `itertools.product`:

```python
def get_all_combines(self, mat: List[List[int]]):
    res = set()
    for nums in itertools.product(*mat):
        res.add(sum(nums))

    return list(res)
```

我们使用 `set`来防止不必要的重复，先得到所有的组合，再对其进行求和，求和后添加到列表中保存，最终的结果为：$[4, 5, 7, 8, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 31, 32]$。



如果我们用上述的方法，可以写出如下代码很简单的求出： 

```python
def get_all_combines2(self, mat: List[List[int]]):
    h = mat[0][:]

    for nums in mat[1:]:
        h = sorted([i + j for i in h for j in nums])

    return list(set(h))
```

其实这种方法也没有避免了重复，但是可以不生成所有的组合可能性，极大减少了内存消耗，值得学习和细细品味！
