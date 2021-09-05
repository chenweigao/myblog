---
title: Python 面向对象：类与对象
date: 2021-9-5
tags:
 - python 
categories:
 - Python
---

## 类

### 类的继承

看以下代码：

```python
class A:
    def __init__(self):
        print('A')
        pass


class B(A):
    def __init__(self):
        print('B')
        A.__init__


class C(A):
    def __init__(self):
        print('C')
        A.__init__


if __name__ == '__main__':
    B()
    C()

# B
# C
```

我们可以看到，`A.__init__` 并没有达到调用 A 的效果。正常的调用如下所示：


```python
class A:
    def __init__(self):
        print('A')
        pass


class B(A):
    def __init__(self):
        print('B')
        A.__init__(self)


class C(A):
    def __init__(self):
        print('C')
        A.__init__(self)


if __name__ == '__main__':
    B()
    C()

# B
# A
# C
# A
```