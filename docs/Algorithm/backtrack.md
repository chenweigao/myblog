---
title: Algorithm of Back Track
date: 2021-10-15
tags:
 - algorithm
categories:
 - Algorithm
---



**回溯法**（英语：backtracking）是[暴力搜索法](https://zh.wikipedia.org/wiki/暴力搜尋法)中的一种。

对于某些计算问题而言，回溯法是一种可以找出所有（或一部分）解的一般性算法，尤其适用于[约束补偿问题](https://zh.wikipedia.org/wiki/约束补偿问题)（在解决约束满足问题时，我们逐步构造更多的候选解，并且在确定某一部分候选解不可能补全成正确解之后放弃继续搜索这个部分候选解本身及其可以拓展出的子候选解，转而测试其他的部分候选解）。

<!-- more -->

在经典的教科书中，[八皇后问题](https://zh.wikipedia.org/wiki/八皇后问题)展示了回溯法的用例。（八皇后问题是在标准国际象棋棋盘中寻找八个皇后的所有分布，使得没有一个皇后能攻击到另外一个。）

回溯法采用[试错](https://zh.wikipedia.org/wiki/试错)的思想，它尝试分步的去解决一个问题。在分步解决问题的过程中，当它通过尝试发现，现有的分步答案不能得到有效的正确的解答的时候，它将取消上一步甚至是上几步的计算，再通过其它的可能的分步解答再次尝试寻找问题的答案。回溯法通常用最简单的[递归](https://zh.wikipedia.org/wiki/递归)方法来实现，在反复重复上述的步骤后可能出现两种情况：

- 找到一个可能存在的正确的答案
- 在尝试了所有可能的分步方法后宣告该问题没有答案

在最坏的情况下，回溯法会导致一次[复杂度](https://zh.wikipedia.org/wiki/计算复杂性理论)为[指数时间](https://zh.wikipedia.org/wiki/指數時間)的计算。

## 回溯：模板

总结回溯的模板如下：

```python
result = []
def back_track(path, choices):
    if OK:
        result.append(path)
        return
    else:
        for choice in choices:
            make_choices()
            back_tarack(path, choices)
            undo_choices()
```

其中 path 表示路径，choices 表示做出的选择。

## 例题解析 - 排列组合类

### LC17 电话号码的字母组合

> 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
>
> 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
>
> 输入：digits = "23"
>
> 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
>
> 来源：力扣（LeetCode）
> 
> 链接：https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number
> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

解法：标准回溯：

```python
class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        if not digits:
            return list()

        dig2alph = {
            '2': 'abc',
            '3': 'def',
            '4': 'ghi',
            '5': 'jkl',
            '6': 'mno',
            '7': 'pqrs',
            '8': 'tuv',
            '9': 'wxyz'
        }

        def back_track(index):
            if index == len(digits):
                res.append(''.join(combination))
            else:
                digit = digits[index]
                for ch in dig2alph[digit]:
                    combination.append(ch)
                    back_track(index + 1)
                    combination.pop()

        combination = list()
        res = list()
        back_track(0)
        return res
```

### LC22 括号生成

>数字 `n` 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 **有效的** 括号组合。
>
>有效括号组合需满足：左括号必须以正确的顺序闭合。

解法：回溯。通过 left 和 right 是否"平衡"来筛选一下数据。

```python
class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        res = []

        def back_track(A: list, left, right):
            # 比如 n == 3 时，生成的括号总数为 2*3 个
            if len(A) == 2 * n:
                res.append(''.join(A))
                return
            if left < n:
                A.append('(')
                back_track(A, left + 1, right)
                A.pop()
            if right < left:
                A.append(')')
                back_track(A, left, right + 1)
                A.pop()

        back_track([], 0, 0)
        return res
```

如果不使用该方法的话，可能需要使用较为“暴力”的解法：
(不过该解法比较适合用来理解回溯的思想)

```python
    def generateParenthesis(self, n: int) -> List[str]:

        def generate(A: list):
            if len(A) == 2 * n:
                if is_valid(A):
                    res.append("".join(A))
            else:
                A.append('(')
                generate(A)
                A.pop()
                A.append(')')
                generate(A)
                A.pop()

        def is_valid(A):
            balance = 0
            for ch in A:
                if ch == '(':
                    balance += 1
                else:
                    balance -= 1
                if balance < 0:
                    return False
            return balance == 0

        res = list()
        generate([])
        return res
```

### LC39 组合总数

>给定一个无重复元素的正整数数组 candidates 和一个正整数 target ，找出 candidates 中所有可以使数字和为目标数 target 的唯一组合。
>
>candidates 中的数字可以无限制重复被选取。如果至少一个所选数字数量不同，则两种组合是唯一的。 
>
>输入: candidates = [2,3,6,7], target = 7
>
>输出: [[7],[2,2,3]]
>
>来源：力扣（LeetCode）
>链接：https://leetcode-cn.com/problems/combination-sum
>著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

套用上述的公式，写出的解法如下：

```python
class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        res = []

        def back_track(A):
            if sum(A) == target and sorted(A) not in res:
                res.append(sorted(A[:]))
                return
            if sum(A) > target:
                return
            for c in candidates:
                A.append(c)
                back_track(A)
                A.pop()

        back_track([])
        return res
```

注意到 sum(A) 大于 target 被剪枝，这样就减少了计算量。第二是通过排序的操作筛选出了已经存在的组合。

但是该算法还存在很大的优化点，因为我们的“剪枝”操作过于原始，在这种**不需要考虑顺序**的题目中，应当考虑更加高效的方法。

```python
class Solution2:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        res = []

        def back_track(A: list, cur_sum, begin):
            if cur_sum == target:
                res.append(sorted(A[:]))
                return
            if cur_sum > target:
                return
            for i in range(begin, len(candidates)):
                # 剪枝
                if cur_sum + candidates[i] > target:
                    return

                cur_sum += candidates[i]
                A.append(candidates[i])
                // 不用i+1，表示可以重复读取当前的数
                back_track(A, cur_sum, i)
                cur_sum -= candidates[i]
                A.pop()
        candidates.sort()
        back_track([], 0, 0)
        return res
```

注意到这个回溯之前我们先进行了排序`candidates.sort()`,这个剪枝相比于上面的解法高明之处在哪里呢？

- 如果题目要求，结果集不计算顺序，此时需要按顺序搜索，才能做到不重不漏。（为何排序？按照特定搜索指定了 `begin`）
- 使用了一个 `begin`变量，这个变量用于组合问题，不讲究顺序（即 `[2, 2, 3]` 与 `[2, 3, 2]` 视为相同列表时），需要按照某种顺序搜索。

理解 `cur_sum`的优点在于：对于刚开始的原始解法，，对于sum已经大于target的情况，其实是依然进入了下一层递归，只是下一层递归结束判断的时候，会判断sum > target的话就返回。其实如果已经知道下一层的sum会大于target，就没有必要进入下一层递归了。所以我们在 for 循环中做了文章，使用 `cur_sum`来判断如果下一层的 sum 已经大于 target，就没有必要走下去了，而是直接结束本轮 for 循环的遍历。

参考该[blog](https://programmercarl.com/0039.%E7%BB%84%E5%90%88%E6%80%BB%E5%92%8C.html#%E5%89%AA%E6%9E%9D%E4%BC%98%E5%8C%96)

### LC40 组合总数II

不同于 LC39 组合总数，LC40 要求`candidates` 中的每个数字在每个组合中只能使用一次。

举例而言：

>输入: candidates = [10,1,2,7,6,1,5], target = 8,
>
>输出:
>[
>[1,1,6],
>[1,2,5],
>[1,7],
>[2,6]
>]
>
>来源：力扣（LeetCode）
>链接：https://leetcode-cn.com/problems/combination-sum-ii
>著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

题目的意思是，每个数字在每一个答案里面只能用一次，无法重复使用，因此如何达到这个限制是本题目的难点，解决方案是使用比较高级的剪枝，与上述题目只有一点不同，具体看代码：

```python
class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        res = []

        def back_track(A: list, cur_sum, begin):
            if cur_sum == target:
                res.append(A[:])
                return
            if cur_sum > target:
                return

            for i in range(begin, len(candidates)):
                if cur_sum + candidates[i] > target:
                    return

                if i > begin and candidates[i] == candidates[i - 1]:
                    continue

                cur_sum += candidates[i]
                A.append(candidates[i])
                back_track(A, cur_sum, i + 1)
                cur_sum -= candidates[i]
                A.pop()

        candidates.sort()
        back_track([], 0, 0)
        return res
```

可以看到，我们在代码中增加了一段剪枝：

```python
if i > begin and candidates[i] == candidates[i - 1]:
    continue
```

并且在回溯的时候把 begin 设置为了 `i+1`，个人的理解是，这一步操作排除了当前层的节点，从下一层开始找，达到了我们剪枝的目的。（去重“同一树层上使用过的”元素）

```python
back_track(A, cur_sum, i + 1)
```

对这个 `begin`的理解是：其作用相当于标记了 used 元素（使用 used 数组标记效果相同），我们在 sort() 的情况下用 begin 是可以的。

**（需要加深理解，不一定正确。）**

### LC46 全排列

在解决了上面的那些问题以后，全排列问题就变得简单了，全排列问题举例如下：

>给定一个不含重复数字的数组 `nums` ，返回其 **所有可能的全排列** 。你可以 **按任意顺序** 返回答案。
>
>输入：nums = [1,2,3]
>
>输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

该题目使用回溯可以很方便的求解：

```python
class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        res = []

        def back_track(path):
            if len(path) == len(nums):
                res.append(path[:])
                return
            
            for i in range(len(nums)):
                if nums[i] in path:
                    continue

                path.append(nums[i])
                back_track(path)
                path.pop()

        back_track([])
        return res
```

全排列是经典的回溯问题，套用回溯模板可以很轻松求解。

### LC47 全排列II

>给定一个可包含重复数字的序列 `nums` ，**按任意顺序** 返回所有不重复的全排列。
>
>输入：nums = [1,1,2]
>
>输出：
>[[1,1,2],
> [1,2,1],
> [2,1,1]]

解法如下：

```python
class Solution:
    def permuteUnique(self, nums: List[int]) -> List[List[int]]:
        res = []

        def back_track(path: List, visited: List):
            if len(path) == len(nums):
                res.append(path[:])
                return

            for i in range(len(nums)):
                if visited[i] == 1:
                    continue
				
                # visited[i - 1] == 1 在该题目中同理，但是性能较差
                if i > 0 and nums[i] == nums[i - 1] and visited[i - 1] == 0:
                    continue

                visited[i] = 1
                path.append(nums[i])
                back_track(path, visited)
                visited[i] = 0
                path.pop()

        nums.sort()

        visited = [0 for _ in nums]
        back_track([], visited)
        return res
```



这道题目不同于*全排列*的点在于：

- 集合中有重复的元素，但是最后的结果中不能有重复的组合。我们需要对结果进行去重（直观的思路是用set，但是容易超时）
- nums[i] 和 nums[i - 1] 可以理解为同一层的当前选项和同一层的前一个选项
- 该题目中有两个变量去重，如果仅有`num[i] == num[i-1]`条件存在，递归时会把相同元素去除，显然不是我们想要的，所以加上了 `vistied`，防止漏掉元素
- 如果 `visited[i - 1] == 1`，说明在同一层，并且 `num[i] == num[i-1]`，所有可能的组合都早已被这一层第一次出现的那个相同数穷尽了，不需要再画蛇添足。

:::warning todo

需要拿 iPad 画图分析一下 visited[i - 1] == 1 和 visited[i - 1] == 0 的剪枝差异，可以参考 [题解](https://leetcode-cn.com/problems/permutations-ii/solution/dai-ma-sui-xiang-lu-dai-ni-xue-tou-hui-s-ki1h/)

:::

### LC77 组合

>给定两个整数 `n` 和 `k`，返回范围 `[1, n]` 中所有可能的 `k` 个数的组合。
>
>你可以按 **任何顺序** 返回答案。
>
>输入：n = 4, k = 2
>输出：
>[
>  	[2,4],
>  	[3,4],
>  	[2,3],
>  	[1,2],
>  	[1,3],
>  	[1,4],
>]

```python
class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:
        res = []

        nums = [i + 1 for i in range(n)]

        def back_track(path: List, begin):
            if len(path) == k:
                res.append(path[:])
                return

            for i in range(begin, len(nums)):
                if i > begin and nums[i] == nums[i - 1]:
                    continue

                path.append(nums[i])
                back_track(path, i + 1)
                path.pop()

        back_track([], 0)
        return res
```

## 例题解析 - DFS 类

### LC37 解数独

[37. 解数独](https://leetcode-cn.com/problems/sudoku-solver/)

我们先给出这个题目的解法，然后对这个解法进行深入的分析：

```python
class Solution:
    def solveSudoku(self, board: List[List[str]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        注意数组board是9*9大小的
        """

        # line 用来保存这一行是否某个数字已经出现过 line[2][4-1]表示第2行数字4已经出现过
        line = [[False] * 9 for _ in range(9)]
        # colume 用来表示这一列某个数字是否已经出现过
        colume = [[False] * 9 for _ in range(9)]
        # block 表示这个九宫格里面某个数字已经出现过 block[i][j][num]
        # 这个里面有一个对应关系，坐标为 i,j 的数字其在九宫格里面的坐标为 [i/3], [j/3] 向下取整
        block = [[[False] * 9 for _ in range(3)] for i in range(3)]
        spaces = []
        valid = False

        def dfs(pos: int):
            # 思考：这个valid用来做什么？
            nonlocal valid
            if pos == len(spaces):
                valid = True
                return

            i, j = spaces[pos]
            for num in range(9):
                if line[i][num] == colume[j][num] == block[i // 3][j // 3][num] is False:
                    line[i][num] = colume[j][num] = block[i // 3][j // 3][num] = True
                    board[i][j] = str(num + 1)
                    dfs(pos + 1)
                    line[i][num] = colume[j][num] = block[i // 3][j // 3][num] = False
                if valid:
                    return

        # 初始化一下这些变量
        for i in range(9):
            for j in range(9):
                if board[i][j] == '.':
                    spaces.append((i, j))
                else:
                    # int(board[i][j]) - 1 是因为我们定义了 [i][x-1]这样
                    digit = int(board[i][j]) - 1
                    line[i][digit] = colume[j][digit] = block[i // 3][j // 3][digit] = True
        dfs(0)
        # 题目要求原地改变 board，所以我们就没有 return
```

解数独游戏是如何应用回溯思想的？我们通过题目中的一些细节来管中窥豹一番。

1. 关于 `line`, `colume`, `block`的初始化

   我们将这三个变量分别初始化：

   - `line `用来保存这一行是否某个数字已经出现过; `line[2][4-1]`表示第 2 行数字 4 已经出现过，表现形式为 `line[2][3]`，我们的下标是从 0 开始的；`colume` 也是同理的，不多赘述。
   - 对于 `line` 和 `colume` 的初始化，我们知道要初始化二维数组，并且数组的长和宽都为 9, 这样比较简单。
   - 我们将所有初始化初始值都设置为 `False`, 这是因为我们等会儿要遍历整个 board, 将已经填写过的数字设置为 `True`, 符合逻辑。

2. 一些规律

   在九宫格中，如果给定了某个坐标 `(i, j)`, 那么我们就能计算出来这个坐标在九宫格中的位置；具体的规律是：**第 i 行第 j 列的格子位于第 （i//3, j//3) 个九宫格中（向下取整）**。其原理在于：九宫格的范围为 $0 <= x <= 2$, $0 <= y <= 2$。

   如果我们把这个规律扩展一下，对于一个 16 宫格，这个坐标会变成什么样子呢？通过画图我们发现就是整除 4 然后向下取整，可以记住这个规律。

   :::tip 🍉🍉🍉 Python 的向下取整和向上取整

   - 向下取整直接整除；也可以使用 `math.floor()`;
   - 向上取整：`math.ceil()`。

   :::

3. 我们使用了 dfs, 不可避免的一个问题是：递归的终止条件是什么？

   这个题目使用的方法十分巧妙，首先将 board 遍历一遍，将其中所有的非数字的坐标拿出来，然后遍历这些非数字坐标的集合。dfs 的遍历是标记遍历到第几个，当我们的 `pos` 和所有坐标集合 `spaces`的长度相等时，遍历就结束了。

4. 我们为什么要使用一个 `valid`变量？

   首先要思考，要是不使用这个变量的话，会发生什么？我们尝试将 `valid` 相关的逻辑删除以后，发现答案是错误的。

   目前的解释是，如果找到了结果不停止 DFS 的循环调用的话，会覆盖掉正确的答案。

   ❓❓❓ 后续需要思考：是否和 `board`是引用传值有关？

5. 进阶：

   这道题目还存在两种进阶的方式，包括：位运算的优化和枚举，具体可以参考官方题解。

### LC79 单词搜索

[79. 单词搜索](https://leetcode-cn.com/problems/word-search/)

> 给定一个 `m x n` 二维字符网格 `board` 和一个字符串单词 `word` 。如果 `word` 存在于网格中，返回 `true` ；否则，返回 `false` 。

这道题目非常有意思，思考这个题目，我们通常会想到 BFS + 剪枝，这道题目要和回溯关联上，我们需要思考一些问题，以后解决起来这种题目也更加简单从容：

1. 如何开始？我们可以写一些我们比较擅长的，比如说 `board`的某个坐标，是不是合法的，这个坐标的上下左右坐标我们可不可以拿到？

   我们定义寻路问题中基本的方向数组 `directs = [(0, -1), (0, 1), (-1, 0), (1, 0)]`

2. 如果确定使用回溯（或者DFS），那么我们可能会需要一个 `visited`数组进行标记，这是一个二维数组，其初始化方式为：`visited = [[False] * len(board[0]) for _ in len(board)] `,或者在 python 中我们使用更加简单暴力的 set() 来解决。

实现的代码如下：

```python
class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        directs = [(0, -1), (0, 1), (-1, 0), (1, 0)]

        def back_track(i, j, k):
            if word[k] != board[i][j]:
                return False
            if k == len(word) - 1:
                return True
            visited.add((i, j))
            for di, dj in directs:
                newi, newj = i + di, j + dj
                if 0 <= newi < len(board) and 0 <= newj < len(board[0]):
                    if (newi, newj) not in visited:
                        if back_track(newi, newj, k + 1):
                            return True
            visited.remove((i, j))
            return False

        visited = set()
        for i in range(len(board)):
            for j in range(len(board[0])):
                if board[i][j] == word[0]:
                    if back_track(i, j, 0):
                        return True
        return False
```

我们回溯（或者 DFS）进入的函数有三个参数，`(i, j, k)`, 其中 `k` 表示 word 中的第 k 个字符。

- 我们循环遍历 `board`，直到找到和 `word`第一个字符相等的位置 `(i, j)`, 然后从 `(i, j)`开始回溯；如果没有找到这个第一个字符，则直接返回 `False`。 
- 我们在写递归的时候要想清楚递归的返回条件，思考剪枝或者退出的条件。

除此之外，我们有一个更容易理解的写法：

```python
    def exist2(self, board: List[List[str]], word: str) -> bool:
        def search(i, j, k):
            # 递归终止条件
            if k >= len(word):
                return True

            if i < 0 or j < 0 or i >= len(board) or j >= len(board[0]) \
                    or board[i][j] != word[k] or (i, j) in visited:
                return False
            visited.add((i, j))

            ret = search(i + 1, j, k + 1) or search(i, j + 1, k + 1) \
                  or search(i - 1, j, k + 1) or search(i, j - 1, k + 1)

            visited.remove((i, j))
            return ret

        visited = set()
        for i in range(len(board)):
            for j in range(len(board[0])):
                res = search(i, j, 0)
                if res:
                    return True
        return False
```

这个做法的优点在于，方便理解。我们从 (i, j, 0) 开始搜索，而后设置递归的终止条件和错误条件。

`visited.remove((i, j))`是在我们进行了搜索后进行回溯。

这个代码简单易懂，真不错！

还有个细节需要注意的是这个代码块：

```python
res = search(i, j, 0)
if res:
    return True
```

这个代码块放在了 for 循环里，只有当 res 返回 True 这个结果的时候，我们循环才退出；除非我们等到 for 循环结束，还没有找到正确的匹配项时，返回最终的 False。

### LC93 复原 IP 地址(剪枝)

[93. 复原 IP 地址](https://leetcode-cn.com/problems/restore-ip-addresses/)

这个题目和可信考试中的一道题目非常相似，看示例：


> 输入：s = "25525511135"
> 
> 输出：["255.255.11.135","255.255.111.35"]

我们要对这个字符串进行分割，但是如何分割是合理的呢？比如说我们第一个点这样分割`25.525511135`, 那么此时 `5525511135`开头的 IP 地址肯定就是非法的了（介于 0~255 之间，这个只有 `52`一种分割方法，后面`25.52.5511135`7 位数要分为 2 部分，已经不可能了），所以这就涉及到一个回溯和剪枝的问题。

我们先尝试着去划分，然后设置一个简单的条件，就是分到后面不能再分了：

1. 如果已经分了三次了，后面还有剩下的，不可以分了，比如剩下了四位，或者剩下的数据范围不对，都是不可以的
2. 如果分了一次，那么后面剩下的如果还有 13 位以上，也就不行了
3. 分的当前这个数据范围不 OK 也是不行的，注意到规则里面 `0xx`这样的也不是合法的 IP
4. 如果某个访问过了，我们把结果就加入到已经访问的节点中去。估计需要两个去存储总的结果和当下的结果。

该题目的解法如下：

```python
class Solution:
    def restoreIpAddresses(self, s: str) -> List[str]:

        res = []
        segments = [0] * 4

        # seg 表示现在到了第几段，start 表示从哪个下标开始的
        def dfs(seg: int, start: int):
            if seg == 4:
                if start == len(s):
                    ip = ".".join(str(_) for _ in segments)
                    res.append(ip)
                return

            if start >= len(s):
                return

            if s[start] == '0':
                segments[seg] = 0
                dfs(seg + 1, start + 1)

            addr = ''
            # why start, not start + 1? 因为前面只是判断了前导 0 的特殊情况
            for i in range(start, len(s)):
                addr = addr + s[i]
                if 0 < int(addr) <= 255:
                    segments[seg] = addr
                    dfs(seg + 1, i + 1)
                else:
                    break

        dfs(0, 0)
        return res
```

这个代码与其说是回溯，不如说是 DFS（这里要说一个概念，回溯就是在一个树形问题上做 DFS，可能会涉及到剪枝）, 但是其有点在于，可以帮助我们很好的去理解这个题目，其本质就是暴力搜索+剪枝。

😍😍😍 有前辈说，回溯问题就是要画图理解，这样会形成方法论，非常实用。

