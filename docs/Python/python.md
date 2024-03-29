---
title: Python 基础语法和数据结构
date: 2017-8-20
tags:
 - Python 
categories:
 - Python
---

> Python’s simplicity lets you become productive quickly, but this often means you aren’t using everything it has to offer.  With this hands-on guide, you’ll learn how to write        effective, idiomatic Python code by leveraging its best—and possibly most neglected—features. Author Luciano Ramalho takes you through Python’s core language features and            libraries, and shows you how to make your code shorter, faster, and more readable at the same time.

<!-- more -->

## Class

### 1. 作用域和命名空间

首先来看一个例子，参考文献 P1.1:

<RecoDemo :collapse="false">
<template slot="code-python">
  <<< @/docs/.vuepress/code/python/namespace-scope.py
</template>
</RecoDemo>

```python
def scope_test():
    def do_local():
        spam = "local spam"

    def do_nonlocal():
        nonlocal spam
        spam = "nonlocal spam"

    def do_global():
        global spam
        spam = "global spam"

    spam = "test spam"
    do_local()
    print("After local assignment:", spam)
    # After local assignment: test spam
    do_nonlocal()
    print("After nonlocal assignment:", spam)
    # After nonlocal assignment: nonlocal spam
    do_global()
    print("After global assignment:", spam)
    # After global assignment: nonlocal spam
    # 这时候还未修改是因为还在执行 scope_test 内部

scope_test()
print("In global scope:", spam)
# In global scope: global spam
```

附上官方的解释：

> 请注意 局部 赋值（这是默认状态）不会改变 scope_test 对 spam 的绑定。 nonlocal 赋值会改变 scope_test 对 spam 的绑定，而 global 赋值会改变模块层级的绑定。

> 您还可以发现在 global 赋值之前没有 spam 的绑定。


上述代码的理解应该包括一下几点：

1. 当内部作用域想修改外部作用域的变量时，就要用到 **global** 和 **nonlocal** 关键字了。如 `do_local()` 中的 `nolocal` 关键字可以成功修改 *spam("test spam")*  的值。

    举例而言：

    ```python
    #!/usr/bin/python3

    def outer():
        num = 10
        def inner():
            nonlocal num   # nonlocal关键字声明
            num = 100
            print(num)     # 100, nonlocal 关键字修改了函数 outer 内部的 num 变量
        inner()
        print(num)         # 100
    outer()
    ```


2. `global` 关键字一般是用来修改函数外部的变量（全局变量）。

    举例而言：

    ```python
    #!/usr/bin/python3

    num = 1
    def fun1():
        global num  # 需要使用 global 关键字声明
        print(num)  # 取到全局变量 1
        num = 123
        print(num)  # 123 成功给全局变量赋值
    fun1()
    print(num)      # 123 全局变量值被修改
    ```

    上面的 `scope_test()` 执行后，才修改到了函数外部的全局变量。

:::tip L –> E –> G –> B

虽然作用域是静态地确定的，但它们会被动态地使用。 在执行期间的任何时刻，会有 3 或 4 个命名空间可被直接访问的嵌套作用域:

- Local: 最先搜索的最内部作用域包含局部名称
- Encrosing: 从最近的封闭作用域开始搜索的任何封闭函数的作用域包含非局部名称，也包括非全局名称
- Global: 倒数第二个作用域包含当前模块的全局名称
- Built-in: 最外面的作用域（最后搜索）是包含内置名称的命名空间

:::

### 2. Class

#### 2.1 self

> 方法的特殊之处就在于实例对象会作为函数的第一个参数被传入。 在我们的示例中，调用 x.f() 其实就相当于 MyClass.f(x)。 总之，调用一个具有 n 个参数的方法就相当于调用再多一个参数的对应函数，这个参数值为方法所属实例对象，位置在其他参数之前。
>
> 方法的第一个参数常常被命名为 self。 这也不过就是一个约定: self 这一名称在 Python 中绝对没有特殊含义。

#### 2.2 给类添加迭代器

定义一个 `__iter__()` 方法来返回一个带有 `__next__()` 方法的对象。 如果类已定义了 `__next__()`，则 `__iter__()` 可以简单地返回 `self`:

```python
class Reverse:
    """Iterator for looping over a sequence backwards."""
    def __init__(self, data):
        self.data = data
        self.index = len(data)

    def __iter__(self):
        return self

    def __next__(self):
        if self.index == 0:
            raise StopIteration
        self.index = self.index - 1
        return self.data[self.index]
```

更优雅的方式是定义一个生成器：

```python
def reverse(data):
    for index in range(len(data)-1, -1, -1):
        yield data[index]
```

### 3. 函数继承

1. 如果子类没有定义自己的初始化函数，那么父类的初始化函数会被默认调用；但是如果这种情况下实例化子类的对象，应该传入父类的初始化参数，否则会报错；

2. 如果子类定义了自己的初始化函数，并且没有显式调用父类的初始化函数，则父类的属性不会被初始化；

   如果子类定义了自己的初始化函数，并且显式调用了父类的初始化函数，则子类和父类的属性都会被初始化；

3. 如果在子类中需要父类的构造方法就需要显式地调用父类的构造方法，或者不重写父类的构造方法。

   子类不重写 **__init__**，实例化子类时，会自动调用父类定义的 **__init__**。

    ```python
    class Father(object):
        def __init__(self, name):
            self.name=name
            print ( "name: %s" %( self.name) )
        def getName(self):
            return 'Father ' + self.name

    class Son(Father):
        def getName(self):
            return 'Son '+self.name

    if __name__=='__main__':
        son=Son('runoob')
        print ( son.getName() )

    # name: runoob
    # Son runoob
    ```

4. 如果重写了**__init__** 时，实例化子类，就不会调用父类已经定义的 **__init__**，语法格式如下：

   ```python
   class Father(object):
       def __init__(self, name):
           self.name=name
           print ( "name: %s" %( self.name) )
       def getName(self):
           return 'Father ' + self.name
    
   class Son(Father):
       def __init__(self, name):
           print ( "hi" )
           self.name =  name
       def getName(self):
           return 'Son '+self.name
    
   if __name__=='__main__':
       son=Son('runoob')
       print ( son.getName() )
       
   # hi
   # Son runoob
   ```

5. 如果重写了**__init__** 时，要继承父类的构造方法，可以使用 **super** 关键字：`super(子类，self).__init__(参数1，参数2，....)` 或者 `父类名称.__init__(self,参数1，参数2，...)`

   ```python
   class Father(object):
       def __init__(self, name):
           self.name=name
           print ( "name: %s" %( self.name))
       def getName(self):
           return 'Father ' + self.name

   class Son(Father):
       def __init__(self, name):
           super(Son, self).__init__(name)
           print ("hi")
           self.name =  name
       def getName(self):
           return 'Son '+self.name

   if __name__=='__main__':
       son=Son('runoob')
       print ( son.getName() )

   # name: runoob
   # hi
   # Son runoob
   ```

   拓展：如下代码可以看出来，子类也通过 `super` 继承了父类的属性：

   <RecoDemo :collapse="false">

   <template slot="code-python">

    <<< @/docs/.vuepress/code/python/father-son-class.py

   </template>

   </RecoDemo>

   > 在super机制里，可以保证公共父类仅被执行一次，至于执行的顺序，是按照**[MRO（Method Resolution Order）](https://www.pynote.net/archives/3500)**方法解析顺序 进行的。
   >
   > 简单理解，MRO顺序就是**代码中的书写顺序**



### P1. 参考文献

1. [Pyton 作用域与命名空间，官方文档](https://docs.python.org/zh-cn/3/tutorial/classes.html)

## Python 文件操作

### Q&A

1. `a` 是可访问可修改的吗？
   不是。`a`表示在文件后追加写，append。`a+` 既可以追加到文件中，也可以读取文件中的内容，而 `a` 是不可以读操作的。

### Summary

| 模式 | 操作              | 文件不存在 | 是否覆盖 |
| ---- | ----------------- | ---------- | -------- |
| r    | read 只读         | 报错       | -        |
| w    | write 可写        | 创建       | 是       |
| a    | append 文件后追加 | 创建       | 否 追加  |
| r+   | 可读 可写         | 报错       | 是       |
| w+   | 可读 可写         | 创建       | 是       |
| a+   | 可读 可写         | 创建       | 否 追加  |

### BCD `fopen()` 手册

> The argument mode points to a string beginning with one of the following sequences (Additional characters may follow these sequences.):

- `r`   Open text file for **reading**.  The stream is positioned at the
         **beginning** of the file.

- `r+`  Open for **reading and writing**.  The stream is positioned at the
         **beginning** of the file.

- `w`   Truncate file to **zero length** or create text file for **writing**.
         The stream is positioned at the **beginning** of the file.

- `w+`  Open for **reading and writing**.  The file is created if it does not
         exist, otherwise it is **truncated**.  The stream is positioned at
         the **beginning** of the file.

- `a` Open for **writing**.  The file is created if it does not exist.  The
         stream is positioned at the **end** of the file.  Subsequent writes
         to the file will always end up at the then current end of file,
         irrespective of any intervening fseek(3) or similar.

- `a+`  Open for **reading and writing**.  The file is created if it does not
         exist.  The stream is positioned at the **end** of the file.  Subse-
         quent writes to the file will always end up at the then current
         end of file, irrespective of any intervening fseek(3) or similar.

## Data Struct

### Slicing

```py
>>> s = 'bicycle'
>>> s[3:]
'ycle'
>>> s[:3]
'bic'
>>> s[::3]
'bye'
>>> s[::-1]
'elcycib'
```

If you want to *reverse a string*, the last example is a choice.

- assigning to slices

```python
>>> l = list(range(10))
>>> l
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
>>> l[2:5]
[2, 3, 4]
>>> l[2:5] = [20,30]
>>> l
[0, 1, 20, 30, 5, 6, 7, 8, 9]
```

what you can see is that **[2,3,4]** is replaced by **[20,30]**

### List

- list of list

  ```python
  >>> board = [['_'] * 3 for i in range(3)]
  >>> board
  [['_', '_', '_'], ['_', '_', '_'], ['_', '_', '_']]
  >>> board[1][2] = 'x'
  >>> board
  [['_', '_', '_'], ['_', '_', 'x'], ['_', '_', '_']]
  ```

  The first line is the right way to multiply it,rather than:

  ```python
  >>> wrong_board = [['_'] * 3] * 3
  >>> wrong_board[1][2] = 0
  >>> wrong_board
  [['_', '_', 0], ['_', '_', 0], ['_', '_', 0]]
  ```

- `list.sort()` & `sorted(list)`

  The `list.sort()` method sorts a list in-place, that is, without making a copy.

  In contrast, the built-in function `sorted(list)` creates a new list and returns it.

### sort and sorted

:::tip skill
在对 list 排序时， 可以使用 `sorted()` 或者 `sort()` + `deepcopy()` 两种方式

[example code](/algorithm/python/)
:::

1. sorted()

    descending order (降序)

    ```py
    def max_n(lst, n=1, reverse=True):
        return sorted(lst, reverse=reverse)[:n]
    ```

2. sort() + deepcopy()

    ascending order (升序)

    ```py
    from copy import deepcopy
    
    def min_n(lst, n=1):
        numbers = deepcopy(lst)
        numbers.sort()
        return numbers[:n]
    ```

- make list a stack or queue

  The .append and .pop methods make a list usable as a stack or a queue (if you use .append and .pop(0), you get LIFO, Last in First out, behavior).
  
  But inserting and removing from the left of a list (the 0-index end) is costly because the entire list must be shifted.

- deques and queues

  ```python
  from collections import deque
  dq = deque(range(10), maxlen=10)
  # dq: deque([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], maxlen=10)
  dq.rotate(3)
  # [7, 8, 9, 0, 1, 2, 3, 4, 5, 6]
  # this function rotates items from the right end
  # and when dp.rotate(-3) is from the left
  dq.appendleft(-1)
  # [-1, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  dq.extend([11, 22, 33])
  # [3, 4, 5, 6, 7, 8, 9, 11, 22, 33]
  # default is insert from right
  ```

  What is different between `append()` and `extend()`? here is an example:

  ```python
  >>> dp
  # deque([10, 30, 20, 10, 3, 4, 5, 6, 7, 8], maxlen=10)
  
  >>> dp.appendleft([1, 2])
  # deque([[1, 2], 10, 30, 20, 10, 3, 4, 5, 6, 7], maxlen=10)
  
  >>> dp.extendleft([1, 2])
  # deque([2, 1, [1, 2], 10, 30, 20, 10, 3, 4, 5], maxlen=10)
  ```

  Note that `extendleft(iter)` works by appending each successive item of the iter argument to the left of the deque, therefore the final position of the items is reversed.

### Bisect

`#bisect: [baɪ'sɛkt]`

> Bisection is the general activity of dividing a geometric figure into two equal parts

### Set

Python 的集合是一个十分方便的对于元素可以操作的序列，除了去掉重复元素外，还可以进行稽核之间的运算。

```python
student = {'Tom', 'Jim', 'Mary', 'Tom', 'Jack', 'Rose'}
print(student)   # 输出集合，重复的元素被自动去掉

a = set('abracadabra')
b = set('alacazam')

print(a - b)     # a 和 b 的差集

print(a | b)     # a 和 b 的并集

print(a & b)     # a 和 b 的交集

print(a ^ b)     # a 和 b 中不同时存在的元素
```

set 的集合运算十分有用，看下面的代码：

``` python
class Solution:
    def findWords(self, words):
        """
        :type words: List[str]
        :rtype: List[str]
        """
        a = set('qwertyuiop')
        b = set('asdfghjkl')
        c = set('zxcvbnm')
        ans = []
        for word in words:
            w = set(word.lower())
            if (w & a == w) or (w & b == w) or (w & c == w):
                ans.append(word)
        return ans
```

上述代码实现了一个求解某序列是否在键盘的同一行的操作，通过求交集看是否结果等于自身就可以很方便地求解出结果。

## High-level Function

### str.maketrans()

用于创建字符映射的转换表，接收两个字符串参数，第一个参数表示需要转化的字符，第二个参数表示转换的目标。

```py
in_tab = 'aeiou'
out_tab = '12345'
tran_tab = str.maketrans(in_tab, out_tab)
# tran_tab: {97: 49, 101: 50, 105: 51, 111: 52, 117: 53}

str_test = "this is string example....wow!!!"
str_test.translate(tran_tab)
# th3s 3s str3ng 2x1mpl2....w4w!!!
```

注意到 `str.maketrans()` 可以存在第三个参数，其必须为一个字符串，比如 `string.punctuation`(表示所有的标点符号), 在指定了第三个参数以后，第三个字符串中所有的字符(对应为其 ASCII 码 `ord()`)都会在 tran_tab 字典中被映射为 `None`, 实现的作用为在 `translate()` 时可以去掉字符串中所有的标点(结果会变成 `'th3s 3s 1n 2x1mpl2w4w'`)

LeetCode 上有题目可以使用该方法求解回文子串，具体可以参考[代码](https://github.com/chenweigao/_code/blob/master/LeetCode/LC125_valid_palindrome.py)

### Python import string

```py
import string
dir(string)
```

可以查看 string 的所有参数，然后使用它：

- `string.punctuation`: 所有的标点符号...等使用方法;

- `string.ascii_letters`: 所有的大小写字母；

- `string.digits`: 所有的数字。

### count()

用于统计字符串里某个字符出现的次数 `count()` 方法，语法：

```py
str.count(sub, start=0, end=len(string))
```

- sub -- 搜索的子字符串。
- start -- 字符串开始搜索的位置。默认为第一个字符,第一个字符索引值为0。
- end -- 字符串中结束搜索的位置。字符中第一个字符的索引为 0。默认为字符串的最后一个位置。

该方法返回子字符串在字符串中出现的次数。

理解下面这行代码所实现的功能：

```py
return sum(map(S.count, J))
return not sum(map(({'R': 1, 'L': -1, 'U': 1j, 'D': -1j}).get, moves))
```

第一行代码实现了两个字符串中共同字符的计数。

第二行代码实现了一个计算坐标的方法。

### map()

`map()` 会根据提供的函数对指定序列做映射。

第一个参数 function 以参数序列中的每一个元素调用 function 函数，返回包含每次 function 函数返回值的新列表。

`map()` 函数语法：

```py
map(function, iterable, ...)
```

- function -- 函数，有两个参数

- iterable -- 一个或多个序列

e.g.1. 将一个列表中的整数转化成字符串存储如另一个列表中：

```python
newList = []
for number in oldList: 
    newList.append(str(number))
```

用 `map()` 等效于：

```python
map(str, oldList)
```

### int2list and list2int

- int2list

```py
def int2list(intNum):
    return list(map(int, str(intNum)))
```

解析：

```py
>>> str(123) --> '123'
>>> map(int, str(123)) --> <map object> # python3 以后 map 返回迭代器
>>> list(map(int, str(123))) --> [1,2,3]
```

- list2int

```py
def list2int(aList):
    return int(''.join(list(map(str, aList))))
```

### isinstance()

Python 中判断类型的方法

```py
>>> isinstance(1, int)
True

>>> isinstance([1, 2, 3], list)
True
```

### zip()

`zip(*iterators)`: returns a iterator of tuples.

当最短的迭代器遍历完成以后，停止迭代。

Example 1:

```py
str = ['hello', 'heo', 'helio']
for _ in zip(*str):
    print(list(_))

>> [('h', 'h', 'h'), ('e', 'e', 'e'), ('l', 'o', 'l')]

# zip('ABCD', 'xy') --> Ax By
```

### enumerate()

Example 2(接上 zip 的例子):

[Leetcode 14. Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/)

```py
def longestCommonPrefix(strs):
    if not strs:
        return ""

    for i, _ in enumerate(zip(*strs)):
        if len(set(_)) > 1:
            return strs[0][:i]
    else:
        return min(strs)

test_strs = ["flower","flow","flight"]
print(longestCommonPrefix(test_strs))
```

:::tip
`enumerate()` 列举出来的下标从 0 开始，所以使用 `[:i]` 作为切片 而不是 `[:i-1]`
:::

### reduce(), lcd and gcd

`functools.reduce` 可以应用带有两个参数的函数来将一个可迭代的对象的项转化为单个的值，而干函数的两个参数是下一项和前一次应用该函数的结果。

e.g. 计算10的阶乘：

```python
import functools
product = functools.reduce(lambda x, y: x*y, range(1,11))
```

```py
>>> from functools import reduce
>>> reduce(lambda x, y: x+y, [1, 2, 3])
6
```

#### gcd and lcm

- [最小公倍数](https://github.com/chenweigao/_code/blob/master/python/gcd.py)

- [最大公约数](https://github.com/chenweigao/_code/blob/master/python/lcm.py)

:::tip
最小公倍数 = 两整数的乘积 / 最大公约数

lcm(x,y) = x * y / gcd(x,y)
:::

### Bit operation

| 运算符 | 描述     |
| ------ | -------- |
| &      | 按位与   |
| \|     | 按位或   |
| ^      | 按位异或 |
| ~      | 按位取反 |
| <<     | 左移     |
| \>>    | 右移     |

`str(bin(x^y).count'1')` 计算了两个整数之间的 Hamming distance.

Questions: to think what this code did:

```python
#LC693
class Solution:
    def hasAlternatingBits(self, n):
        if not n:
            return False
        num = n ^ (n >> 1)
        return not (num & (num + 1))
```

### all()

```py
all(iterable, /)
    Return True if bool(x) is True for all values x in the iterable.
If the iterable is empty, return True.
```

This is **example 1**(LeetCode 728) about the usage:

``` python
class Solution:
    def selfDividingNumbers(self, left, right):
        """
        :type left: int
        :type right: int
        :rtype: List[int]
        """
       # return [num for num in range(left, right+1) 
   	   # if all((int(d) and not num % int(d)) for d in str(num))]
        is_self_dividing = lambda num: '0' not in str(num) 
        and all([num % int(digit) == 0 for digit in str(num)])
        x = filter(is_self_dividing, range(left, right + 1))
        return list(x)
```

该段代码使用了 `all` 的特性，并且在最后返回了一个 filter 的可迭代对象，然后转化成 list,得到结果。

**example 2** (LeetCode 766):

```python
class Solution:
    def isToeplitzMatrix(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: bool
        """
        return all(matrix[i][j] == matrix[i+1][j+1] 
                   for i in range(len(matrix) - 1) for j in range(len(matrix[0]) -1))
```

Tips: `len(matrix)` gets the number of rows, `len(matrix[0])` gets the number of columns.

### filter()

假设你想从考试分数的一个列表中删除所有的 0 分，如下的循环可以完成这个任务：

```python
newList = []
for number in oldList:
    if number > 0 :
        newList.append(number)
```

如果使用 `filter()` 则只需要如下代码：

```python
newList = list(filter(isPositive, oldList))
```

再使用`lambda`表达式创建匿名函数：

```python
newList = list(filter(lambda number: number > 0, oldList))
```

### __name__

`__name__` 这个系统变量显示了当前模块执行过程中的名称，`__main__` 一般作为函数的入口，或者整个工程开始运行的入口。

```python
#test.py
def HaveFun():
    if __name__ == '__main__':
        print('My name is %s' % __name__)
    else:
        print('Someone else called me! my name is %s' % __name__)
HaveFun()
```

output: `My name is __mian__`

```py
#main.py
import test
test.HaveFun()
```

output:

```bash
Someone else called me! my name is test
Someone else called me! my name is test
```

### random()

```py
import random
import string
src = string.digits + string.ascii_letters
password = random.sample(src, 4)
print(''.join(password))
```

利用 `random.sample()` 生成 4 位随机密码。

## Collections

### OrderedDict

```py
from collections import OrderedDict
```

`OrderedDict` 是一个可以记录其插入次序的字典，可以结合排序，构造一个排序的字典。

> If the value of a certain key is changed, the position of the key remains unchanged in OrderedDict.
> Deleting and re-inserting the same key will push it to the back as OrderedDict however maintains the order of insertion.

- `move_to_end()`: 将该元素放置于字典的尾部

- `popitem(last=True)`: pop 元素使其成为先进先出队列

[这是一道华为的笔试题，用于处理一些文件日志功能](https://github.com/chenweigao/_code/blob/f43526c616e0d3799bbc6d1e2f703ebc2e9ad355/interview/huawei2016_2.py)

## decorators

### @property

In Python, `property()` is a built-in function that creates and returns a property object. The signature of this function is:

```py
property(fget=None, fset=None, fdel=None, doc=None)
```

where, `fget` is function to get value of the attribute, `fset` is function to set value of the attribute, `fdel` is function to delete the attribute and `doc` is a string (like a comment).

To better understand this, [see this blog](https://www.programiz.com/python-programming/property).

一般情况下，我们在定义一个类的时候可能会涉及到访问这个类中的私有元素，一般情况下我们会使用一个函数来返回它，但是 Python 中可以使用 `@property` 装饰器来优雅地实现这个功能。

```py
class ClassName(object):

    @property
    def name(self):
        return self._name

    @name.setter
    def name(self, value):
        self._name = value

# use the value of 'name'
c = ClassName()
c.name
# return the self._name's value
c.name = 'weigao'
# ok
```

还有一个例子可以参考这里 [Thread code](https://github.com/chenweigao/multi_thread_and_process/blob/master/threading_Thread.py)

```py
class Screen(object):
    @property
    def width(self):
        return self._width

    @width.setter
    def width(self, value):
        self._width = value

    @property
    def resolution(self):
        return self._width * 1024
```

在上述例子中，`width` 为可读写的，而 `resolution` 为只读属性。


## Effective Python

### Function Closure

([EP 15](https://github.com/chenweigao/_code/blob/master/Effective_Python/EP15.py))有的时候需要将重要的消息或者意外的事件优先显示在其他内容前面，可以使用以下代码：

```python
def sort_priority(values, group):
    found = False

    def helper(x):
        nonlocal found
        if x in group:
            found = True
            return (0, x)
        return (1, x)
    values.sort(key=helper)
    return found
```

上述代码把 `helper()` 这个闭包函数，传给 `sort` 方法的 `key` 参数。

**思考**：第 7 行和第 8 行的 return 的含义？

### Generator

([EP 16](https://github.com/chenweigao/_code/blob/master/Effective_Python/EP16.py))生成器是使用 `yield` 表达式的函数，为了提高编程效率，考虑用**生成器来改写直接返回列表的函数**。调用生成器时，会返回迭代器。

在这个例子中的错误示例中，使用 `append` 把所有的结果都放在列表里面，如果输入量非常大的话，会导致程序消耗尽内存而奔溃。

## urllib

### Reading json file from URL

```python
from urllib import request
import json

with request.urlopen('http://118.24.241.17/path.json') as f:
    data = f.read()
    data_json = json.loads(data.decode('utf8'))
```

`data_json` is the json file we need.

## Regular Expression - re 正则表达式

[参考这篇教程：正则表达式30分钟入门教程](https://deerchao.net/tutorials/regex/regex.htm)

在 Python 中，如果想使用正则表达式：

```python
import re
re.match(r'^[1-9]\d{4,11}$', nums)

pattern = re.compile(r'some regular expression')
re.findall(pattern, sentence)
# find all matched of pattern in sentence
```

>  第三方模块 [regex](https://pypi.org/project/regex/) , 提供了与标准库 [`re`](https://docs.python.org/zh-cn/3/library/re.html#module-re) 模块兼容的 API 接口，同时，还提供了更多功能和更全面的 Unicode 支持。

```python
prog = re.compile(pattern)
result = prog.match(string)

# 等价于
result = re.match(pattern, string)
```



## requests

```py
import requests
import urllib.parse

data = {
    "name": "weigao",
    "age": 20
}

json_data = json.dumps(data)
# '{"name": "weigao", "age": 20}'

values = urllib.parse.urlencode({"data": json_data})
# 'data=%7B%22name%22%3A+%22weigao%22%2C+%22age%22%3A+20%7D'

url='http://api.weixin.oa.com/itilalarmcgi/sendmsg'

response = requests.post(url, data=values)
```


## Python Tools

### IPython

```bash
pip install jupyter
jupyter notebook
```

### %timeit

In `IPython`, we could use `%timeit` to calculate the time consume of a command:

```py
In [1]: %timeit [1, 2, 3, 4, 5]

In [2]: %timeit (1, 2, 3, 4, 5)
```

### Personalized

```py
import sys
sys.ps1
'>>>'

sys.ps1 = 'cwg-python>>'
```

这样就可以改变解释器前面的那个外观了，注意修改后退出不会保存修改的结果。

### File Server

```py
python -m http.server
#default port: 8000

python -m http.server 80
#in port 80
```

## Networks and Interprocess Communication

### Coroutines-协程

> 协程通过 `async/await` 语法进行声明，是编写异步应用的推荐方式。[官方教程](https://docs.python.org/zh-cn/3/library/asyncio-task.html)

协程有两个紧密关联的概念：

1. 协程函数：定义形式为 `asyncio def` 的函数

2. 协程对象：调用协程函数所返回的对象

在 Python 中，**单线程 + 异步 I/O** 的编程模型被称为协程，有了协程的支持，就可以基于事件驱动编写高效的多任务程序。

### asyncio

```py
import asyncio
```

- 运行一个协程使用 `asyncio.run()`, 该函数用于函数运行的入口

- 等待一个协程使用 `asyncio.sleep(1)`

- 使用协程并发处理多任务使用 `asyncio.gather()`

记住协程是 `await` 对象！[基础的用法可以参考代码](https://github.com/chenweigao/multi_thread_and_process/blob/master/asyncio_coroutines.py)
