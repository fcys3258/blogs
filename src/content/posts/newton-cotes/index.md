---
title: "Newton-Cotes 数值积分公式"
date: 2024-04-15
tags: ["数值积分", "数值分析"]
description: "Newton-Cotes 求积公式的导出、代数精度分析与复合求积方法。"
---

## 数值积分的基本思想

将定积分 $\int_a^b f(x)\,dx$ 近似为被积函数在节点处函数值的加权和：

$$
\int_a^b f(x)\,dx \approx \sum_{k=0}^n A_k f(x_k)
$$

## Newton-Cotes 公式的导出

对等距节点进行 Lagrange 插值后积分。令 $h = (b-a)/n$，$x_k = a + kh$。

### 梯形公式 ($n=1$)

$$
\int_a^b f(x)\,dx \approx \frac{b-a}{2}\left[f(a) + f(b)\right]
$$

### Simpson 公式 ($n=2$)

$$
\int_a^b f(x)\,dx \approx \frac{b-a}{6}\left[f(a) + 4f\left(\frac{a+b}{2}\right) + f(b)\right]
$$

## 代数精度

- 梯形公式：1 次代数精度
- Simpson 公式：3 次代数精度
- $n$ 为偶数时，$n+1$ 次代数精度；$n$ 为奇数时，$n$ 次代数精度

## 复合求积公式

为提高精度，将积分区间等分为子区间，在每个子区间上应用低阶 Newton-Cotes 公式。
