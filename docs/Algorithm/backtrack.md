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

## 例题解析

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

