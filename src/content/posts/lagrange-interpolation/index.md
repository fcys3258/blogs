---
title: "Lagrange 插值多项式"
date: 2024-04-01
tags: ["插值理论", "逼近论"]
description: "Lagrange 插值多项式的构造、误差分析与数值稳定性讨论。"
---

## 问题的提出

给定 $n+1$ 个互异节点 $(x_0, y_0), (x_1, y_1), \ldots, (x_n, y_n)$，求一个次数不超过 $n$ 的多项式 $P_n(x)$ 满足 $P_n(x_i) = y_i$。

## Lagrange 插值基函数

定义 Lagrange 基函数：

$$
\ell_k(x) = \prod_{\substack{j=0 \\ j \neq k}}^n \frac{x - x_j}{x_k - x_j}
$$

基函数满足 $\ell_k(x_i) = \delta_{ik}$。

## 插值多项式的构造

由基函数构造插值多项式：

$$
P_n(x) = \sum_{k=0}^n y_k \cdot \ell_k(x)
$$

## 截断误差分析

若 $f \in C^{n+1}[a,b]$，则

$$
f(x) - P_n(x) = \frac{f^{(n+1)}(\xi)}{(n+1)!} \prod_{j=0}^n (x - x_j)
$$

## Runge 现象

对于等距节点，当 $n \to \infty$ 时插值多项式不一定收敛到原函数。
最经典的例子是 Runge 函数 $f(x) = 1/(1+25x^2)$ 在 $[-1,1]$ 上的插值。
