---
title:  Array 问题编程
date: 2019-9-17
tags:
 - algorithm
 - leetcode
categories:
 - Algorithm
---

遇到数组问题，一般是二维数组的问题，不要慌，这个文章就是为了总结几个基本的确定点，也可以说是原则，避免在紧张的时候不知所措。

[[toc]]

## Python Code

### 计算二维数组行列数

在 Python 中，如果遇到二维数组的问题了，需要格外注意：计算二维数组的行列的时候绝对不能出错：

```py
# 3 行 2 列
>>> alist = [[1, 2],[3, 4], [5, 6]]
>>> len(alist)
$ 3
>>> len(alist[0])
$ 2
```

所以一般的计算方式为：

```py
# alist
rows = len(alist)
cols = len(alist[0])
```

### 调整数组顺序使奇数位于偶数前面

> 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。

要使得相对位置不变，可以使用下面的比较好的写法：

```py
class Solution:
    def reOrderArray(self, array):
        k = 0
        for i in range(len(array)):
            if array[i] % 2 == 1:
                j = i
                while j > k:
                    array[j], array[j-1] = array[j-1], array[j]
                    j -= 1
                k += 1
        return array
```

代码解析：

1. 其中的 k 是为了记录当前已经排好序的奇数的个数
2. 然后循环找到一个奇数，交换这个奇数和前面元素的位置，注意到交换的次数和当前奇数的下标与已经排好奇数的数量有关
3. 已经排序好的奇数数量加 1