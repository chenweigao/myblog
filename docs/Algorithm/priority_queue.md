---
title: "Algorithm of Priority Queue"
date: 2021-11-29
tags:
 - algorithm
categories:
 - Algorithm
---

⏸⏸⏹⏹⏯ 优先级队列的原理以及应用。

1. 大根堆
2. 小根堆

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





