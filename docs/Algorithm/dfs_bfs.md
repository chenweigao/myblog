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

📑📑📑 深度优先搜索算法



📑📑📑 广度优先搜索算法

<!-- more -->

## Abstract

### 深度优先搜索算法

英语：Depth-First-Search，DFS是一种用于遍历或搜索 树或图的算法。其过程简要来说是对每一个可能的分支路径深入到不能再深入为止，而且每个结点只能访问一次.

因发明「深度优先搜索算法」，约翰 · 霍普克洛夫特与罗伯特 · 塔扬在1986年共同获得计算机领域的最高奖：图灵奖。



### 广度优先搜索算法

Breadth-First Search，缩写为 BFS，又称为宽度优先搜索，是一种图形搜索算法。简单的说，BFS 是从根结点开始，沿着树的宽度遍历树的结点。如果所有结点均被访问，则算法中止。

广度优先搜索也广泛应用在图论问题中。

## Problems content

- [number of island: LC200](https://leetcode.com/problems/number-of-islands/)

- [Target Sum: LC494](https://leetcode.com/problems/target-sum/)

| 问题                       | 链接                                                         | 类型     | 备注 |
| -------------------------- | ------------------------------------------------------------ | -------- | ---- |
| LC104 二叉树的最大深度     | [104. 二叉树的最大深度](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/) | DFS, BFS |      |
| LC329 矩阵中的最长递增路径 | [LC 329](https://leetcode-cn.com/problems/longest-increasing-path-in-a-matrix/) | DFS      |      |
| LC841. 钥匙和房间          | https://leetcode-cn.com/problems/keys-and-rooms              | DFS, BFS |      |
|                            |                                                              |          |      |



## DFS

### 概览

1. 遇到一个问题，如何确定可以使用 DFS 求解？
2. 使用 DFS 求解的一般套路是什么？DFS 一般会用到了**递归**的概念，所以我们写出来的代码结构也应该是递归的。而对于递归，我们有的时候可以递归函数本身，有的时候需要写辅助函数来进行递归。
3. 上述 DFS 求解问题可以总结为 **自底向上方法**。

### LC104 二叉树的最大深度

[104. 二叉树的最大深度](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/)

#### 问题分析

💓💓💓 **思考** 🧡🧡🧡

如何用 DFS 的思维来思考这个问题呢？

假设我们已经知道了左子树和右子树的最大深度 `l`, `r`, 那么整个二叉树的最大深度就是根节点的深度 1 加上左右子树中的最大深度，用公式表达是：

$$depth = max(l, r) + 1$$

所以我们可以使用深度有限搜索来计算二叉树的最大深度，具体而言就是递归计算出二叉树左子树和右子树的最大深度，然后再使用上述公式直接计算出二叉树的最大深度。

而二叉树左右子树的深度也都可以通过相同的方法递归获得，递归在访问到空节点时退出。

#### 复杂度分析

该问题使用 DFS 求解，其时间复杂度为 $O(n)$, 每个节点在递归中只被遍历一次。

其空间复杂度为 $O(height)$，与二叉树的高度有关。由于递归需要栈空间，而栈空间取决于递归的深度，因此空间复杂度等价于二叉树的高度。

#### 问题求解


这个题目存在 DFS 和 BFS 解法，下面是这个题目的 DFS 解法：

- 解法：使用辅助函数来进行递归：

  ```python
  class Solution:
      def maxDepth(self, root: TreeNode) -> int:
          if not root:
              return 0
  
          def dfs(node: TreeNode):
              if not node:
                  return 0
  
              return max(dfs(node.right), dfs(node.left)) + 1
  
          return dfs(root)
  ```

  上述做法使用了一个 `dfs()`辅助函数进行递归，我们也可以不使用辅助函数。

- 解法：直接递归：

  ```python
  class Solution:
      def maxDepth(self, root: TreeNode) -> int:
          if not root:
              return 0
          return max(self.maxDepth(root.right), self.maxDepth(root.left)) + 1
  ```

  这个不带辅助函数的解法是比带辅助函数的解法稍慢的，但是代码更加简洁。



### LC101 对称二叉树

[101. 对称二叉树](https://leetcode-cn.com/problems/symmetric-tree/)

这是该题目的 DFS（递归）解法。

代码如下：

```python
class SolutionDFS:
    def isSymmetric(self, root: TreeNode) -> bool:
        # 反例 [1]
        if not root.right and not root.left:
            return True

        # if not root.left or not root.right:
        #     return False

        def dfs(left, right):
            # 递归终止条件，两个节点都为空
            if not left and not right:
                return True

            if not left or not right:
                return False

            if left.val != right.val:
                return False

            return dfs(left.left, right.right) and dfs(left.right, right.left)

        return dfs(root.left, root.right)
```

从代码中我们可以看出，我们定义递归终止条件：

1. 两个节点都为空，返回 True, 递归终止
2. 两个节点中有一个不存在，不对称，返回 False
3. 两个节点的值不相等，返回 False

在这些条件满足以后，我们对 `left.left` 和 `right.right`等分别递归即可求出结果。

### LC329 矩阵中的最长递增路径

> 给定一个整数矩阵，找出最长递增路径的长度。
>
> 对于每个单元格，你可以往上，下，左，右四个方向移动。 你不能在对角线方向上移动或移动到边界外（即不允许环绕）。

💫💫💫 这个问题的本质是：**在有向图中寻找最长路径**。

#### 深度优先搜索

🈚🈚🈚 DFS解法，超出时间限制！

这是一道迷宫搜索问题，可以使用 DFS 搜索，这样可以熟悉 DFS 的步骤。实现代码如下所示：

<RecoDemo :collapse="false">

<template slot="code-python">
  <<< @/docs/.vuepress/code/algorithm/dfs.py
</template>

</RecoDemo>

上述解法非常巧妙，我们在求解迷宫类型的问题的时候，都可以定义我们的数据结构：

```python
def __init__(self, *args, **kwargs):
    self.dirs = [
        [0, 1], [1, 0], [0, -1], [-1, 0]
    ]
    self.m = None
    self.n = None
```

分别定义方位、两个坐标，在后续的操作中可以方便很多。

在这里要特别强调一下**二维矩阵的行列**：

- 行：`len(matrix)`
- 列: `len(matrix[0])`

#### 记忆化深度优先搜索

针对以上超时的情况，我们需要使用到一些优化方法，如🧡💛记忆化深度优先搜索💚💙：

- 由于同一个单元格对应的最长递增路径的长度是固定不变的，因此可以使用记忆化的方法进行优化；
- 用矩阵作为缓存矩阵，已经计算过的单元格的结果存储到缓存矩阵中。（在python中，可以直接使用 `@lru_cache(None)`, 实现较为简单）

经过上述分析，我们了解到，其实现和深度有限搜索差距不大（Python），下面列出代码，在谢姐上有些许不同，可以加深理解：

```python
class Solution2:
    def __init__(self, *args, **kwargs):
        self.dirs = [
            [0, 1], [1, 0], [0, -1], [-1, 0]
        ]
        self.m = None
        self.n = None

    def longestIncreasingPath(self, matrix: List[List[int]]) -> int:
        if not matrix:
            return 0
        self.m = len(matrix)
        self.n = len(matrix[0])
        ans = 0

        @lru_cache(None)
        def dfs(i, j):
            ans = 1
            for d in self.dirs:
                x, y = d[0] + i, d[1] + j
                # matrix[x][y] > matrix[i][j] 表示这一步可以走
                if 0 <= x < self.m and 0 <= y < self.n and matrix[x][y] > matrix[i][j]:
                    ans = max(ans, dfs(x, y) + 1)
            return ans

        for i in range(self.m):
            for j in range(self.n):
                ans = max(ans, dfs(i, j))
        return ans
```

这里面有一个值得一提的细节就是，我们在 `dfs()`函数中给的 `ans = 1`, 这样做的要在后面`ans = max(ans, dfs(x, y) + 1)`加以区别，两种做法都是可以的。

如果我们还想使用 memo 数组进行缓存，以便于打败更多的人的话，实现可以参考记忆化搜索那篇文档。(实测影响不大)

### LC841. 钥匙和房间

[841. 钥匙和房间](https://leetcode-cn.com/problems/keys-and-rooms/)

> 有 N 个房间，开始时你位于 0 号房间。每个房间有不同的号码：0，1，2，...，N-1，并且房间里可能有一些钥匙能使你进入下一个房间。
>
> 在形式上，对于每个房间 i 都有一个钥匙列表 rooms[i]，每个钥匙 rooms[i][j] 由 [0,1，...，N-1] 中的一个整数表示，其中 N = rooms.length。 钥匙 rooms[i][j] = v 可以打开编号为 v 的房间。
>
> 最初，除 0 号房间外的其余所有房间都被锁住。
>
> 你可以自由地在房间之间来回走动。
>
> 如果能进入每个房间返回 true，否则返回 false。

> 输入: [[1],[2],[3],[]]
>
> 输出: true

#### DFS 求解

这道题目有 BFS 和 DFS 两种解法，BFS 解法见下文，其 DFS 解法如下所示：

```python
class Solution:
    def canVisitAllRooms(self, rooms: List[List[int]]) -> bool:
        n = len(rooms)
        visited = set()
        num = 0

        def dfs(i: int):
            visited.add(i)
            nonlocal num
            num += 1
            for it in rooms[i]:
                if it not in visited:
                    dfs(it)

        dfs(0)
        return num == n
```

#### why DFS？

🔴🔴🔴 思考，为什么我们能想到用 DFS 来求解这个问题呢？

1. 当 x 号房间中有 y 号房间的钥匙时，我们就可以从 x 号房间去往 y 号房间。如果我们将这 n 个房间看成有向图中的 n 个节点，那么上述关系就可以看作是图中的 x号点到 y 号点的一条有向边。

2. 这样一来，问题就变成了给定一张有向图，询问**从 0 号节点出发**是否能够到达所有的节点。

3. 类似于这种问题，其实都存在着 BFS 和 DFS 两种解法在。对于 DFS 解法，我们要从一个节点开始向后遍历，每遍历到一个节点，就将访问的数量 +1，最终判断所有可以遍历到的节点计算出来的访问数量是否等于总的房间数量，从而求解该问题。

   也就是说，我们从 0 开始遍历 index，先拿到 0 号房间所有的钥匙，进行遍历，遍历到一个没有进去过的房间，就将遍历的数量 +1，最后一直到无法遍历，判断总的遍历数量即可。

#### 归纳与拓展：DFS 解法两个套路

💌💌💌 拓展，DFS 的两种实现方法

:::tip TIPS

通常而言，DFS 存在两种实现方法：

1. 栈
2. 递归

:::

我们也可以使用这两种方法来完成这个题目。

首先来看用栈求解，关于栈求解 DFS 问题，要注意栈求解的 DFS 对于节点的遍历顺利不应该敏感。

代码如下所示：

```python
class Solution:
    def canVisitAllRooms(self, rooms: List[List[int]]) -> bool:
        visited = set()
        visited.add(0)
        stack = [0]

        while stack:
            idx = stack.pop()
            for key in rooms[idx]:
                if key not in visited:
                    visited.add(key)
                    stack.append(key)
        return len(rooms) == len(visited)
```

以 `[[1],[2],[3],[]]` 为例，我们初始化栈，然后每一次将栈顶元素 pop 出来，然后处理栈顶元素，遍历栈顶元素对应的所有房间，最后栈为空的时候，我们如果遍历了所有房间，那么说明我们是可以到达所有房间的。

我们来使用递归求解的话，就变成了我们刚开始的解法，我们可以多参考 DFS 不同的解法，来加深我们的理解，下面列举出一个不同的解法：

```python
class Solution:
    def canVisitAllRooms(self, rooms: List[List[int]]) -> bool:
        visited = set()
        visited.add(0)
        
        def dfs(i, visited):
            visited.add(i)
            for key in rooms[i]:
                if key not in visited:
                    visited.add(key)
                    dfs(key, visited)
        
        dfs(0, visited)
        return len(visited) == len(rooms)
```

### LC200 岛屿数量

#### [200. 岛屿数量](https://leetcode-cn.com/problems/number-of-islands/)

> 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
>
> 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
>
> 此外，你可以假设该网格的四条边均被水包围。
>
> 
>
> 示例 1：
>
> ```
> 输入：grid = [
> ["1","1","1","1","0"],
> ["1","1","0","1","0"],
> ["1","1","0","0","0"],
> ["0","0","0","0","0"]
> ]
> ```
>
> 输出：1
>
> 来源：力扣（LeetCode）
>
> 链接：https://leetcode-cn.com/problems/number-of-islands
>
> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

DFS 解法如下：

```python
class Solution:

    def dfs(self, grid, i, j):
        if i < 0 or j < 0 or i >= len(grid) or j >= len(grid[0]) or grid[i][j] != '1':
            return
        grid[i][j] = '#'
        self.dfs(grid, i + 1, j)
        self.dfs(grid, i - 1, j)
        self.dfs(grid, i, j + 1)
        self.dfs(grid, i, j - 1)

    def numIslands(self, grid):
        # 针对测试用例
        if not grid:
            return count

        count = 0
        
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                # 注意到可以遍历的再 dfs
                if grid[i][j] == '1':
                    self.dfs(grid, i, j) # mark the visited
                    count += 1
        return count
```

这也是一道可以 DFS、BFS求解的问题，此题目经典程度，值得反复刷！

我们在求解 DFS 题目的时候，要思考，这道题目为什么可以用 DFS 求解？

- 我们将网格看做一个**无向图**，竖直或水平相邻的 1 之间有边相连。
- 我们将每次遍历过 1 的时候，我们将其更新为 0（或者是什么其他的标记）。

我们也可以把 grid 去掉，解法差距不大，就不在这列举了。

## BFS

### 概览

1. BFS 问题的本质就是让你在一副“图”中找到从起点 start 到终点 target 的最近距离；
2. BFS 的核心数据结构是队列；
3. BFS 常用 visited 结构来标记是否走过某段路程，避免走回头路；
4. BFS 在队列初始化的时候一般会加入将起点加入队列中；
5. 在写 BFS 前要明确终止条件。



### LC111. 二叉树的最小深度

[二叉树的最小深度](https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/)

🏀🏀🏀 我们根据“概览”中的原则对这个问题进行分析：起点就是 root 节点，终点就是最靠近根节点的那个叶子节点（叶子节点的左右子节点都是 null）。

其使用 BFS 的解法如下：

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def minDepth(self, root: TreeNode) -> int:
        if not root:
            return 0
        
        queue = collections.deque()
        first_node = (root, 1)
        queue.append(first_node)

        while queue:
            node, depth = queue.popleft()
            # 判断是否到达终点，终止条件
            if not node.left and not node.right:
                return depth
            if node.left:
                queue.append((node.left, depth + 1))
            if node.right:
                queue.append((node.right, depth + 1))

        return 0
```

### LC104 二叉树的最大深度

[104. 二叉树的最大深度](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/)

对比求二叉树的最小深度，其代码如下：

```python
class Solution:
    def maxDepth(self, root: TreeNode) -> int:
        if not root:
            return 0
        q = collections.deque([(root, 1)])
        res = 1
        while q:
            node, depth = q.popleft()
            res = max(res, depth)
            if node.left:
                q.append((node.left, depth + 1))
            if node.right:
                q.append((node.right, depth + 1))
        return res
```

除此之外，该题目还存在 DFS 解法，可以参考上文。

### LC102 二叉树的层序遍历

[102. 二叉树的层序遍历](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/)

二叉树的层序遍历也会使用到 BFS 的思想，这个题目存在以下几个难点：

1. 如何构造最终的结果，即类似于 `[[3], [9,20], [15,7]]` 这样的 List of List 的形式？
2. 能否继续使用上面的解法模板来求解这个问题？模板是否具有普适性？

接下来看第一版本的代码：

```python
class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        if not root:
            return []
        q = collections.deque([root])
        res = []
        while q:
            size = len(q)
            tmp = []
            for _ in range(size):
                # 在 for 循环中把 q 这个队列拿空
                # 第一次 for 迭代循环的是 root 节点
                node = q.popleft()
                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)
                tmp.append(node.val)

            if tmp:
                res.append(tmp)
```

可以看出：

1. 在每次迭代中，我们都保证了把同一层的元素进行迭代；即队列中存储的元素永远是在同一层的元素，然后计算出这些元素的个数，用 for 循环逐一进行遍历。

   ::: warning ❗❗❗ BFS 为什么要使用队列？

   在这里我理解了为什么 BFS 要使用队列这个数据结构，我们用 for 循环逐一进行遍历的时候，还没被遍历到的“上一层”元素都是在队列头部的，使用队列能保证这些上一层元素都被“踢”出去，而不影响本层新进来的元素。

   :::

2. 这个题目的关键就是用 for 循环保证了同一层元素的遍历。

### LC107 二叉树的层序遍历II

[107. 二叉树的层序遍历 II](https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/)

这个题目不同于二叉树层次遍历的地方在于，**给定一个二叉树，返回其节点值自底向上的层序遍历。 **

为了达到这个效果，我们可以在每次遍历之后，将结果放在结果集的头部，这样就可以得到我们想要的输出形式了。

其相对于上述代码的不同在于：

```python
res = collections.deque()

# 向左端插入
res.appendleft(tmp)

# 返回时进行类型转换
return list(res)
```

当然也可以使用上面的代码直接将结果反转。

### LC103 二叉树的锯齿形层序遍历

[103. 二叉树的锯齿形层序遍历](https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/)

这道题目是上面二叉树层序遍历的变种题目，题目的描述为：

> 给定一个二叉树，返回其节点值的锯齿形层序遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。

我们对题目进行分析可以发现遍历顺序和层级的关系：

| 层数           | 遍历顺序 |
| -------------- | -------- |
| 第一层（root） | 从左往右 |
| 第二层         | 从右往左 |
| 第三次         | 从左往右 |
| 第四层         | 从右往左 |
| **奇数层**     | 从左往右 |
| **偶数层**     | 从右往左 |

我们发现遍历的顺序是和层级有关的，因此我们可以根据层级来确定遍历顺序：

🔴🔴🔴 **遍历顺序**，需要注意的是，我们一定要在队列中先添加左节点，再添加右节点，这个顺序需要保证，才能与后面的 `depth % 2 == 0` 配套。

```python
class Solution:
    def zigzagLevelOrder(self, root: TreeNode) -> List[List[int]]:
        if not root:
            return []

        q = collections.deque([(root, 1)])
        res = []
        depth = 1
        while q:
            size = len(q)
            tmp = []
            for _ in range(size):
                node, depth = q.popleft()
                # 注意遍历顺序
                if node.left:
                    q.append((node.left, depth + 1))
                if node.right:
                    q.append((node.right, depth + 1))

                tmp.append(node.val)
                
            if depth % 2 == 0:
                # 偶数层从右往左
                tmp.reverse()
            if tmp:
                res.append(tmp)

        return res
```



### LC101 对称二叉树

[101. 对称二叉树](https://leetcode-cn.com/problems/symmetric-tree/)

给定二叉树，判断二叉树是否镜像对称。

```txt
    1
   / \
  2   2
 / \ / \
3  4 4  3
```

可以看出，上述中就是一个对称的二叉树，我们得出一个简单的规律：

1. 对于某个节点，如果其没有左节点或者右节点，那么其肯定不是一个对称二叉树；
2. 对于某个节点，其兄弟节点的左右节点值要与自己的左右节点值对应相等。我们该如何保证这个呢？

其对应的代码如下：

```python
class Solution:
    def isSymmetric(self, root: TreeNode) -> bool:
        if not root:
            return False

        q = collections.deque([(root, root)])
        while q:
            left, right = q.popleft()
            if not left and not right:
                continue
            if not left or not right:
                return False
            if left.val != right.val:
                return False

            q.append((left.left, right.right))
            q.append((left.right, right.left))

        return True
```

这种解法的思路在于，在队列中同时取出两个节点 left, right，然后判断其值是否相等，再将他们的孩子中按照 `(left.left, right.right)` 一组，`(left.right, right.left)`一组放入队列中。

还有一种解法是，往队列中放 4 次元素，按照 `left.left, right.right, left.right, right.left` 的顺序，然后逐一判断即可。

### LC841 钥匙和房间

很经典的一道题目，从举例看一下这道题目：

> 输入：[[1,3],[3,0,1],[2],[0]]
>
> 输出：false
>
> 解释：我们不能进入 2 号房间。

初始的时候是可以进入 0 号房间的，然后看能不能根据这个房间的钥匙把每个房间都走了。

下面是上述问题的 BFS 解法：

```python
class Solution:
    def canVisitAllRooms(self, rooms: List[List[int]]) -> bool:
        n = len(rooms)
        queue = collections.deque([0])
        visited = {0}

        while queue:
            x = queue.popleft()
            for it in rooms[x]:
                if it not in visited:
                    visited.add(it)
                    queue.append(it)
        return len(visited) == n
```

### LC200 岛屿数量

> 题目描述见 DFS 描述。

BFS 解法如下：

```python
class Solution:
    def numIslands(self, grid):
        row = len(grid)
        if not row:
            return 0
        col = len(grid[0])
        res = 0
        for r in range(row):
            for c in range(col):
                if grid[r][c] == '1':
                    # 开始 BFS
                    res += 1
                    q = collections.deque([(r, c)])
                    while q:
                        nr, nc = q.popleft()
                        for x, y in [(nr - 1, nc), (nr, nc - 1), (nr + 1, nc), (nr, nc + 1)]:
                            if 0 <= x < row and 0 <= y < col and grid[x][y] == '1':
                                q.append((x, y))
                                grid[x][y] = '0'
        return res
```

### LC210 课程表

[210. 课程表 II](https://leetcode-cn.com/problems/course-schedule-ii/)

> 现在你总共有 numCourses 门课需要选，记为 0 到 numCourses - 1。给你一个数组 prerequisites ，其中 prerequisites[i] = [ai, bi] ，表示在选修课程 ai 前 必须 先选修 bi 。
>
> 例如，想要学习课程 0 ，你需要先完成课程 1 ，我们用一个匹配来表示：[0,1] 。
>
> 返回你为了学完所有课程所安排的学习顺序。可能会有多个正确的顺序，你只要返回 任意一种 就可以了。如果不可能完成所有课程，返回 一个空数组 。
>
> 
>
> **示例 1**：
>
> - 输入：numCourses = 2, prerequisites = [[1,0]]
> - 输出：[0,1]
> - 解释：总共有 2 门课程。要学习课程 1，你需要先完成课程 0。因此，正确的课程顺序为 [0,1] 。
>
> **示例 2**：
>
> - 输入：numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
> - 输出：[0,2,1,3]
> - 解释：总共有 4 门课程。要学习课程 3，你应该先完成课程 1 和课程 2。并且课程 1 和课程 2 都应该排在课程 0 之后。
>   因此，一个正确的课程顺序是 [0,1,2,3] 。另一个正确的排序是 [0,2,1,3] 。
>
> 来源：力扣（LeetCode）
> 链接：https://leetcode-cn.com/problems/course-schedule-ii
> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

这道题目比较综合，出的还是很不错的，我们整理思路如下：

1. 我们初始化每个课程，按照 index 把节点的入度全部初始化为 0, 注意到每个节点的入度我们都计算一下。
2. 我们维护一个 dict, key 是这个节点，value 是和这个节点的前驱
3. 然后对整体使用 BFS

比如 `[1,0]` 这对数据，1 的入度这时候需要 +1, 而在字典中我们将 1 的前驱 0 （多个前驱用列表保存）存储起来。


```python
class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        res = []
        edges = collections.defaultdict(list)
        # 存储节点的入度
        indeg = [0] * numCourses

        # 选修 ai 前必须先选修 bi
        for ai, bi in prerequisites:
            indeg[ai] += 1
            edges[bi].append(ai)

        # 将所有入度为0的节点放入队列中
        q = collections.deque([_ for _ in range(numCourses) if indeg[_] == 0])

        # bfs
        while q:
            node = q.popleft()
            res.append(node)
            for v in edges[node]:
                indeg[v] -= 1
                if indeg[v] == 0:
                    q.append(v)

        if len(res) != numCourses:
            return list()
        return res
```

### LC977 找到小镇的法官

[997. 找到小镇的法官](https://leetcode-cn.com/problems/find-the-town-judge/)

这道题目与LC210 类似，都是关于入度和出度的。

> 在一个小镇里，按从 1 到 n 为 n 个人进行编号。传言称，这些人中有一个是小镇上的秘密法官。
>
> 如果小镇的法官真的存在，那么：
>
> 小镇的法官不相信任何人。
>
> 每个人（除了小镇法官外）都信任小镇的法官。
>
> 只有一个人同时满足条件 1 和条件 2 。
>
> 给定数组 trust，该数组由信任对 trust[i] = [a, b] 组成，表示编号为 a 的人信任编号为 b 的人。
>
> 如果小镇存在秘密法官并且可以确定他的身份，请返回该法官的编号。否则，返回 -1。
>
> 
>
> 示例 1：
>
> 输入：n = 2, trust = [[1,2]]
>
> 输出：2
>
> 
>
> 示例 2：
>
> 输入：n = 3, trust = [[1,3],[2,3]]
>
> 输出：3
>
> 来源：力扣（LeetCode）
> 链接：https://leetcode-cn.com/problems/find-the-town-judge
> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

```python
class Solution:
    def findJudge(self, n: int, trust: List[List[int]]) -> int:
        trust_in = [0] * (n + 1)
        trust_out = [0] * (n + 1)
        for me, other in trust:
            # 我信任了别人
            trust_out[me] += 1
            # 别人信任了我
            trust_in[other] += 1

        for i in range(1, n + 1):
            if trust_in[i] == n - 1 and trust_out[i] == 0:
                return i
        return -1
```

### LC752 打开转盘锁

[752. 打开转盘锁](https://leetcode-cn.com/problems/open-the-lock/)

问题分析：

- 我们可以定义 add, minus 来表示转盘密码 +1 或者 -1 的操作，注意到 0、9 这些边界值，将这个操作单独拎出来。

- 从题目中我们可以知道，有一些密码的组合是不能转到的，不然就算失败了，而为了达到不访问这些组合的效果，我们可以把这些组合和 visited 数组放到一起。
- 对这个问题进行抽象，一个锁共有 4 个位置，每个位置都可以向下或者向上转动，所以每个位置都有 2 种转动的可能，4 个位置共有 8 个可能。也就是说，‘xxxx’ 这个组合对应着 8 种下一个状态，8 种下一个状态中的每一个也是这样的结构，对应 8 种下一个状态… *这就像是一幅图，每个节点有 8 个相邻的节点*。

编码：

1. 先写基础的 add, minus 方法

   ```python
   def add(num: str):
       return '0' if num == '9' else str(int(num) + 1)
   
   def minus(num: str):
       return '9' if num == '0' else str(int(num) - 1)
   ```

2. 除此之外，我们还需要写一个辅助函数，计算某个状态在一次拨动以后能到达的所有下一个状态(前面分析过，这个状态有 8 个)，如`0000`可以到达的 `1000`, `0100`等。

   这个在 Python 中有很多写法，其中最容易理解的写法为：

   ```python
   # 给定一个 status, 计算出来他能拨到的所有 8 个 status
   def get_status(status: str) -> List[str]:
       # list 方便赋值
       status_list = list(status)
       res = []
       for i in range(4):
           # 存储起来，等复位
           tmp = status_list[i]
           up = add(status[i])
           status_list[i] = up
           res.append(''.join(status_list))
   
           down = minus(status[i])
           status_list[i] = down
           res.append(''.join(status_list))
   
           # 复位
           status_list[i] = tmp
           return res
   ```

   比较高级的技巧是使用 `yield ` 生成器，在此给个参考：

   ```python
   def get(status: str):
       status_list = list(status)
       for i in range(4):
           tmp = status_list[i]
           
           status_list[i] = add(tmp)
           yield ''.join(status_list)
           
           status_list[i] = minus(tmp)
           yield ''.join(status_list)
           
           status_list[i] = tmp
   ```

   

3. 套用 BFS 框架。

   根据题意，锁的初始数字为 `'0000'`，所以我们在队列中将这个元素初始化进去。

   ::: warning 关于队列初始化的基本语法技巧，需要注意

   Python 中我们一般这么初始化队列：`q = collections.deque([1])`

   ❌🚫❌ `q = collections.deque(1)` 是错误的！会报错 *TypeError: 'int' object is not iterable.*

   

   而在添加的时候，直接使用 `q.append(2)` 即可，这时候结果是 `[1,2]`；

   ❌🚫❌ 举个反例，如果觉得一次可以添加多个：`q.append([3,4])`, 就会得到这样的结果：`deque([1, 2, [3, 4]])`!

   

   一般而言，我们在求解 BFS 问题的时候，会给每个候选项加上其对应的次数，放在一个元组中，其初始化就类似于这样：`q = collections.deque([('0000', 1)])`, 这种做法与初始化一个空的队列，然后将元组 `('0000', 1)` 添加进去是相同的效果(LC111. 二叉树的最小深度 使用了这个写法)。

   :::

   结合上面的分析，我们套用 BFS 的框架可以得出求解该题目的主题框架：

   ```python
   q = collections.deque([('0000', 1)])
   visited = {'0000'}
   # 将 deadends 这个 list 添加到 visited 这个 set 中
   visited |= set(deadends)
   # 这种方法同理
   # visited.update(deadends)
   while q:
       status, step = q.popleft()
       for state in get_status(status):
           if state not in visited:
               if state == target:
                   return step
               visited.add(state)
               q.append((state, step + 1))
               return -1
   ```

   上述代码中有几个细节需要注意：

   - 初始化队列，我们初始化队列为 `('0000', 1)`，最终在找到目标后返回了 `step`；其实我们初始化为 `('0000', 0)`，在找到目标后返回 `step + 1`也是可以的。

   - ❓❓❓ 如何将一个 list 全部加入 set 中呢？有两种做法:

     1. `visited |= set(deadends)`

     2. `visited.update(deadends)`

     

4. 特殊场景考虑

   除了上述的解法之外，我们还需要考虑到几种特殊场景的用例：

   ```python
   # 处理异常场景
   if '0000' in deadends:
       return -1
   if target == '0000':
       return 0
   ```

### LC133 克隆图

[133. 克隆图](https://leetcode-cn.com/problems/clone-graph/)

> 给你无向 **[连通](https://baike.baidu.com/item/连通图/6460995?fr=aladdin)** 图中一个节点的引用，请你返回该图的 [**深拷贝**](https://baike.baidu.com/item/深拷贝/22785317?fr=aladdin)（克隆）。

初看这个题目，很难将其和 BFS 关联到，我们进行分析：

```txt
输入：adjList = [[2,4],[1,3],[2,4],[1,3]]

输出：[[2,4],[1,3],[2,4],[1,3]]
```

我们可以看到，题目是给出了邻接表，让我们按照这个邻接表对图进行深拷贝。这个邻接表的含义是：`[2,4]` 表示第一个节点 `1`的邻居为节点 `2` 和节点 `4`（节点 index 从 1 开始），以此类推。

🎈🎈🎈 思考。

从这个题目中，我们要明白：**BFS 设立之初就是为的图的遍历**，这个题目真可谓是返璞归真。

那么，我们要怎么深拷贝这个图呢？

1. 我们解析邻接表，邻接表的两个无向边可以确定一个有向边。
2. 我们知道了邻接表，但是如果直接解析，可能会进入死循环，我们需要使用 `visited` 数组来进行标记。

如何设计算法：

1. 使用一个哈希表来记录 visited 过的节点。将 key 设置为原始图中的节点， value 设置为克隆图中对应的节点。

2. 题目中给定的节点加入队列，克隆该节点并且存储到哈希表中。

```python
class Solution:
    def cloneGraph(self, node: 'Node') -> 'Node':
        if not node:
            return node

        q = collections.deque([node])
        visited = dict()
        visited[node] = Node(node.val, [])

        while q:
            head = q.popleft()
            for neighbor in head.neighbors:
                if neighbor not in visited.keys():
                    q.append(neighbor)
                    visited[neighbor] = Node(neighbor.val, [])
                visited[head].neighbors.append(visited[neighbor])
        return visited[node]
```

这个题目较为复杂，还需要多多理解！

### LC365 水壶问题

两个水壶 x, y 和无限多的水，能否通过使用这两个水壶，得到恰好 z 容量的水？

我们把这个问题理解为一个 BFS 问题，其关键点在于：状态的转换。我们设置初始状态为 $(0, 0)$, 而经过转化后的中间状态为 $(a, b)$, 其状态上限为 $(x, y)$, 每一次递归的状态都放入 BFS 的队列中进行判断，而后向后搜索，其代码如下：

```python
class Solution:
    def canMeasureWater(self, x: int, y: int, z: int) -> bool:
        if x + y < z:
            return False

        if x > y:
            x, y = y, x

        q = collections.deque([(0, 0)])
        visited = set()
        visited.add((0, 0))

        while q:
            a, b = q.popleft()
            if a + b == z:
                return True

            states = set()

            states.add((a, 0))
            states.add((0, b))
            states.add((x, b))
            states.add((a, y))
            # y -> x
            states.add((min(x, b + a), 0 if a + b < x else b - (x - a)))
            # x -> y
            states.add((0 if a + b < y else a - (y - b), min(a + b, y)))

            for state in states:
                if state in visited:
                    continue
                visited.add(state)
                q.append(state)

        return False
```

在这个问题中，我们需要把所有的状态转化点都列举出来：

|                          动作                          | 状态                            |      |
| :----------------------------------------------------: | ------------------------------- | ---- |
|                        $(a,b)$                         | 初始状态（后面用 a,b 标识壶号） |      |
|                        $(0, b)$                        | a 壶倒空                        |      |
|                        $(a, 0)$                        | b 壶倒空                        |      |
|                        $(x, b)$                        | a 壶倒满                        |      |
|                        $(a, y)$                        | b 壶倒满                        |      |
| $(min(x, b + a), 0)$ or $(min(x, b + a), b - (x - a))$ | 将 b 壶全部倒入 a 壶            |      |
|  $(0, min(a+b, y))$ or $(a - (y - b), min(a + b, y))$  | 将 a 壶全部倒入 b 壶            |      |

我们需要重点理解一下后面两种情况：

1. *将 b 壶倒入 a 壶*：此时我们可以确定：
   1. 如果 b 壶全被倒空了。那么这时候有两种情况：第一种是把全部的 b 都倒进去了，但是没有倒满（$b + a$）；第二种情况是到进去了，此时杯子的容量不够了($x$)。
   2. 如果 b 壶没有被倒空。那么此时 b 壶中应该是有剩下的水的，什么时候会剩下呢？如果 $a + b$ 的容量小于 a 壶的容量 $x$ 时候，肯定会有部分的水剩下在了 b 壶里面。那么剩下了多少呢？我们知道 a 壶可以倒入 $x - a$ 容量的水，那么剩下的水就是 b 壶现有的水减去 a 壶可以倒入的水 $b - (x -a)$。
2. *将 a 壶倒入 b 壶*：和上面的分析同理。

