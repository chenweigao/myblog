---
title: 深度实践 KVM -- KVM 技术详解与实战
date: 2020-04-26
tags:
 - cloud
categories:
 - Cloud
---

这篇博客主要记录 KVM 学习中的收获和心得，主要阅读书籍为《深度实践 KVM》

<!-- more -->

## KVM 介绍

### 虚拟化介绍

KVM 全称 Kernel-based Virtual Machine.

KVM 是一种开源的虚拟化技术，是 OpenStack 平台上份额较高的**虚拟化引擎**。

KVM 必须在具有 Intel VT 或 AMD-V 功能的 X86 平台上运行，在 3.9 内核以后加入了对 ARM 的支持。

:::tip
X86 平台的指令集权限分为 Ring 0 到 Ring 3 共计 4 个特权模式，操作系统一般使用 Ring 0 级别，驱动程序使用 Ring 1 和 Ring 2 级别，应用程序使用 Ring 3 级别。

VMware 公司的虚拟化技术将自己的虚拟化引擎 VMM 放在了 Ring 1 层，这是一种软件全虚拟化方案。
:::

Intel 公司推出了对 CPU 指令进行改造的方案 VT-x，基于**硬件全虚拟化**方案，是当前虚拟化引擎的主要解决方案。

> 简而言之，就是使得物理硬件支持虚拟化特性。由于基于硬件，故其效率非常高。

还有一种**容器虚拟化**方案，最著名的就是 Docker。其原理是基于 CGroups 和 Namespace 等技术将进程隔离，使得每个进程就像一台单独的虚拟机一样。

> 容易虚拟化当下发展较为广泛，比如 K8S 等，个人认为这是学习的重点。

### KVM 架构

KVM Driver 包括在 Linux Kernel 中，一台虚拟机就是一个普通的 Linux 进程，对虚拟机的管理通过对这个进程的管理加以完成。

由于对进程的管理十分复杂，RedHat 发布了开源的项目**Libvirt**（有 API 和命令行管理工具），现有的大多数管理平台通过 Libvirt 来完成 KVM 虚拟机的管理，如 OpenStack，CloudStack 和 OpenNebula 等。

Libvirt 主要由 3 部分组成：

1. 一套 API 的 lib 库，支持主流的编程语言。
2. Libvirtd 服务。
3. 命令行工具 virsh。

一般而言，KVM 的管理都是使用 Libvirt。

:::tip
常用的企业级虚拟化产品主要有：VMware（EMC），HyperV（微软），Xen（开源），KVM（开源）。
:::


