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

## Abstract



## Problems content

- [number of island: LC200](https://leetcode.com/problems/number-of-islands/)

- [Target Sum: LC494](https://leetcode.com/problems/target-sum/)

| 问题                       | 链接                                                         | 类型 | 备注 |
| -------------------------- | ------------------------------------------------------------ | ---- | ---- |
| LC104 二叉树的最大深度 | [104. 二叉树的最大深度](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/) | DFS, BFS |  |
| LC329 矩阵中的最长递增路径 | [LC 329](https://leetcode-cn.com/problems/longest-increasing-path-in-a-matrix/) | DFS  |      |
| LC841. 钥匙和房间         | https://leetcode-cn.com/problems/keys-and-rooms | DFS, BFS     |      |
|                            |                                                              |      |      |



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

   
