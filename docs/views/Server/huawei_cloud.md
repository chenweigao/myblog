---
title: Huawei Cloud 入门
date: 2020-03-27
tags:
 - cloud
 - huawei
categories:
 - Cloud
---

:::tip
该篇主要记录了华为云的一些基础知识，并增加了一些自己的理解。
:::
<!-- more -->

## 云计算基础

### 云计算的优点和缺点

- 公有云在成本角度，对企业的盈利是否产生影响？

- 公有云的安全性是否相对于私有云有所降低？

    1. 不会；因为大型公有云可以提供很多安全技术，相比于一些小项目或者小企业，其安全技术本身匮乏，大型公有云在安全方面反而是一种加强。
    2. 如何吸引大型公司加入公有云？

### 云计算的部署

可分为公有云、私有云和混合云。

### 云服务的类型

- IaaS：计算、存储、网络(NaaS)、CDN、数据库(DBaaS)，是主要收入来源；如 web 主机交付。
- PaaS：不属于 IaaS 和 SaaS 的，如开发框架；也可以从服务角度理解，为 IaaS+；常见的有应用开发环境、应用开发组件等。
- SaaS：软件服务

### 云服务器的种类

- 计算资源
	- ECS(elastic cloud server)，弹性云服务器
- 存储资源
	- EVC(elastic volume service)，云硬盘
	- OBS(object-based storage)，对象存储服务
- 网络资源
	- VPC(virtual private cloud)，虚拟私有云。其中最重要的是子网、安全组等
	- ELB(Elastic Load Balance)，弹性负载均衡
- 管理与部署
	- CES(cloud eye service)，云监控服务
	- IAM(identity access management)，统一身份认证服务
- 数据库生态
	- DCS(distributed cache service)，分布式缓存服务
	- DDM(distributed database middleware)，分布式数据库中间件

### 华为公有云服务架构

华为公有云服务架构可分为四层，从上而下分别是：

|     层次     |      解释      | 理解 |
| :----------: | :------------: | :--: |
|  P/S层产品   |   如云主机等   |    华为特色为**软件开发云**  |
| 基础设施服务 |   OpenStack    | OpenStack 为基石 |
|   虚拟资源   | 逻辑化物理资源 |      |
|   物理资源   |  服务器等硬件  |      |

除此之外，还存在一个**云管理平台**，主要负责对下三层进行管理。*这个云管理是否就是 k8s 或者类似的技术？*

## 华为云 CIS 服务

### CIS 简介

华为云 CIS 主要包括五大服务，分别是计算、网络、存储、管理与部署服务。

1. 计算服务

    通用计算型、内存密集型、存储密集型、计算密集型、计算加速型、裸金属服务器、云手机。

    前 5 类为虚拟的 ECS 服务，可以与裸金属服务器混合使用。

    - 通用计算型：应用场景主要为电商、网站和企业 APP 等，主要针对企业官网搭建办公环境。
    - 内存密集型：应用场景主要为内存数据库、高性能数据库的场景，SAP HANA：汽车制造等。
    - 存储密集型：应用场景主要为数据仓库、分布式文件系统和网络文件系统，高性能关系数据库，NoSql 等；在自动驾驶领域的应用，要求较高的存储速率。
    - 计算密集型：主要应用为工业辅助设计、分子建模等，主要要求 CPU 的计算；如汽车碰撞实验。
    - 计算加速型：GPU&FPGA 服务；GPU 用于计算精度要求较高的计算，FPGA 用于时延较低，非结构化的数据应用，用于金融、实时场景、媒体加速、AI&VR、网络直播（华为 H265 IP加速）等。

2. 网络服务

    *这个接触比较多，比如搬瓦工的 VPS，DNS 云解析等*

3. 存储服务

    对象海量存储（如网站、企业的数据备份），云硬盘 EVS 等，弹性文件服务，云备份等

4. 管理与部署服务
   
   云监控 CES，云审计 CTS，云日志 LTS，企业项目管理 EPS 等。


### ECS 弹性云服务器

> ECS 全称 Elastic Cloud Server, 是华为云推出的一种可随时获取、弹性可扩展的计算云服务器。

华为 ECS 的特点：高可靠、高安全、高弹性。

*可以用弹性服务器的方式将 web 部署在云服务器上，以节约成本，这种方式以后可以加以尝试！*

## 冰山安全体系

### 云上安全挑战

云上主要的安全挑战可以分为：数据泄露、业务连续性、合规遵从三类。

DDoS 高防服务：海量攻击防护，即高带宽；精准攻击防御；急速可靠访问；长期实战积累。

Web 应用防火墙：主要是针对 web 应用的安全。

漏洞扫描服务：不眠不休的漏洞检测医生，有点像爬虫，可以扫描丰富的应用，可以简单地在写完代码之后检测代码漏洞，检测高效；并且使用简单，只需要提供 IP 即可使用。

安全态势感知服务：可视化安全感知，原理是采集用户数据、分析并进行安全检测，再可视化显示。检测主流的漏洞事件，检测资产安全（插件、系统等），给用户提供一些安全策略。

云上权限监控：云堡垒机+IAM。堡垒机主要为运维操作，IAM 主要为云资源操作。

### 防攻击体系

包括网络安全、主机安全、应用安全和数据安全等各种路径上可能的漏洞路径来构建安全服务。

### 数据保护体系

云上数据的全生命周期保护，包括数据加密、数据库安全、网络通道加密、数据接入控制和应用安全。

敏感数据保护（SDG）服务，针对 OBS 或者 RDS 上的数据。

数据加密服务：主要基于公私钥体系。可以分为两个场景：专属加密（dedicated HSM）场景和密钥管理（KMS）场景。

数据库安全服务（DBSS）：包括数据库防火墙场景、敏感数据发现和脱敏场景、数据库审计场景。