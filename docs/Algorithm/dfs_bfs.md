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
| LC841. 钥匙和房间         | https://leetcode-cn.com/problems/keys-and-rooms | DFS, BFS     |      |
|                            |                                                              |      |      |



## DFS

### LC329 矩阵中的最长递增路径

> 给定一个整数矩阵，找出最长递增路径的长度。
>
> 对于每个单元格，你可以往上，下，左，右四个方向移动。 你不能在对角线方向上移动或移动到边界外（即不允许环绕）。

这是一道迷宫搜索问题，可以使用 DFS 搜索，这样可以熟悉 DFS 的步骤。实现代码如下所示：

<RecoDemo :collapse="false">

<template slot="code-python">
  <<< @/docs/.vuepress/code/algorithm/dfs.py
</template>
</RecoDemo>

### LC841. 钥匙和房间

> 有 N 个房间，开始时你位于 0 号房间。每个房间有不同的号码：0，1，2，...，N-1，并且房间里可能有一些钥匙能使你进入下一个房间。
>
> 在形式上，对于每个房间 i 都有一个钥匙列表 rooms[i]，每个钥匙 rooms[i][j] 由 [0,1，...，N-1] 中的一个整数表示，其中 N = rooms.length。 钥匙 rooms[i][j] = v 可以打开编号为 v 的房间。
>
> 最初，除 0 号房间外的其余所有房间都被锁住。
>
> 你可以自由地在房间之间来回走动。
>
> 如果能进入每个房间返回 true，否则返回 false。
>
> 来源：力扣（LeetCode）
> 链接：https://leetcode-cn.com/problems/keys-and-rooms
> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

其 DFS 解法如下所示：

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

### LC200. 岛屿数量

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
>   ["1","1","1","1","0"],
>   ["1","1","0","1","0"],
>   ["1","1","0","0","0"],
>   ["0","0","0","0","0"]
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
        count = 0

        if not grid:
            return count
        
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] == '1':
                    self.dfs(grid, i, j) # mark the visited
                    count += 1
        return count
```

## BFS

### LC111 二叉树的最小深度

[二叉树的最小深度](https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/)

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



### LC841. 钥匙和房间

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

### LC200. 岛屿数量

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

### LC210. 课程表

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

