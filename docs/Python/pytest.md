---
title: Pytest Summary
date: 2020-08-02
tags:
 - pytest
categories:
 - Python
---

总结一下 Pytest 相关的基础用法和学习心得。

<!-- more -->

Pytest 的[官方文档](https://learning-pytest.readthedocs.io/zh/latest/)

## Pytest 入门

### 捕获异常

使用 `pytest.raise()` 来捕获异常。

## fixture

fixture 在 pytest 中表现为一个装饰器，在 JAVA 中，fixture 是这么定义的：

> JUnit 提供了编写测试前准备、测试后清理的固定代码，我们称之为 Fixture。
