---
title: "谱方法简介"
date: 2024-05-01
tags: ["谱方法", "数值分析"]
description: "谱方法的基本原理、Fourier 谱方法与 Chebyshev 谱方法的比较。"
---

## 谱方法的思想

与有限差分法不同，谱方法用**全局基函数**（如 Fourier 级数或 Chebyshev 多项式）逼近微分方程的解。

## Fourier 谱方法

对周期边值问题，取基函数 $\phi_k(x) = e^{ikx}$：

$$
u_N(x) = \sum_{k=-N/2}^{N/2-1} \hat{u}_k e^{ikx}
$$

## Chebyshev 谱方法

对非周期问题，取 Chebyshev 多项式 $T_k(x) = \cos(k \arccos x)$：

$$
u_N(x) = \sum_{k=0}^N a_k T_k(x)
$$

## 指数收敛性

若解充分光滑，谱方法的误差随 $N$ 增大呈**指数收敛**，远快于有限差分的代数收敛：

$$
\|u - u_N\| \leq C e^{-\alpha N}
$$

## 应用与局限

谱方法适用于光滑解、规则区域的问题。对复杂几何区域和间断解，需要结合有限元或其他方法。
