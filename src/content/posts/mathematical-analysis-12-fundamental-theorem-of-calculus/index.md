---
title: "数学分析 12：定积分的性质与微积分基本定理"
date: 2026-08-22T17:29:00+08:00
tags: ["数学分析", "定积分", "微积分基本定理"]
description: "系统整理定积分的线性、区间与保序性质、积分中值定理、变上限积分、Newton–Leibniz 公式及定积分换元和分部积分。"
draft: false
---

Riemann 积分由积分和极限定义；微积分基本定理则把积分与导数联系起来，使定积分可以通过原函数计算。

---

## 1. 定积分的基本约定

规定

$$
\int_a^af(x)\,dx=0,
$$

$$
\int_b^af(x)\,dx
=-\int_a^bf(x)\,dx.
$$

积分变量是哑变量：

$$
\int_a^bf(x)\,dx
=\int_a^bf(t)\,dt.
$$

只要上下限和被积函数对应相同，积分值与积分变量的字母无关。

---

## 2. 线性与区间可加性

### 2.1 线性

若 $f,g$ 在 $[a,b]$ 上可积，$\alpha,\beta\in\mathbb R$，则

$$
\int_a^b[\alpha f(x)+\beta g(x)]\,dx
=
\alpha\int_a^bf(x)\,dx
+\beta\int_a^bg(x)\,dx.
$$

### 2.2 区间可加性

若 $c\in[a,b]$，则

$$
\int_a^bf(x)\,dx
=
\int_a^cf(x)\,dx
+\int_c^bf(x)\,dx.
$$

该公式结合积分方向约定，对任意 $a,b,c$ 均成立。

---

## 3. 保序性与估值

若在 $[a,b]$ 上

$$
f(x)\le g(x),
$$

则

$$
\int_a^bf(x)\,dx
\le
\int_a^bg(x)\,dx.
$$

特别地，若 $f(x)\ge0$，则

$$
\int_a^bf(x)\,dx\ge0.
$$

若

$$
m\le f(x)\le M,
$$

则

$$
m(b-a)
\le
\int_a^bf(x)\,dx
\le
M(b-a).
$$

并且

$$
\left|
\int_a^bf(x)\,dx
\right|
\le
\int_a^b|f(x)|\,dx
\le
(b-a)\max_{[a,b]}|f|.
$$

---

## 4. 积分中值定理

### 4.1 第一积分中值定理

**定理**  
若 $f\in C([a,b])$，则存在 $\xi\in[a,b]$，使

$$
\int_a^bf(x)\,dx
=f(\xi)(b-a).
$$

因此函数在区间上的平均值

$$
\frac1{b-a}\int_a^bf(x)\,dx
$$

等于函数在区间内某一点的值。

### 4.2 加权形式

若 $f\in C([a,b])$，$g$ 可积且在区间上不变号，则存在 $\xi\in[a,b]$，使

$$
\int_a^bf(x)g(x)\,dx
=f(\xi)\int_a^bg(x)\,dx.
$$

### 4.3 第二积分中值定理

**定理（Bonnet 形式）**  
若 $f$ 在 $[a,b]$ 上单调，$g$ 在 $[a,b]$ 上连续，则存在 $\xi\in[a,b]$，使

$$
\int_a^bf(x)g(x)\,dx
=
f(a)\int_a^\xi g(x)\,dx
+f(b)\int_\xi^b g(x)\,dx.
$$

当 $f$ 单调减少、非负且 $f(b)=0$ 时，公式化为

$$
\int_a^bf(x)g(x)\,dx
=f(a)\int_a^\xi g(x)\,dx.
$$

该定理在反常积分和振荡积分判别中很有用。

---

## 5. 变上限积分

设 $f\in R([a,b])$，定义

$$
F(x)=\int_a^xf(t)\,dt,
\qquad x\in[a,b].
$$

### 5.1 连续性

**定理**  
若 $f$ 在 $[a,b]$ 上可积，则 $F$ 在 $[a,b]$ 上连续。

若 $|f(x)|\le M$，则

$$
|F(x)-F(y)|
\le M|x-y|,
$$

所以 $F$ 甚至满足 Lipschitz 条件。

### 5.2 可导性

**定理（微积分基本定理第一部分）**  
若 $f$ 在 $x_0$ 连续，则

$$
F'(x_0)=f(x_0).
$$

若 $f\in C([a,b])$，则

$$
F'(x)=f(x),
\qquad x\in(a,b).
$$

因此每个区间上的连续函数都有原函数。

### 5.3 一般变限积分

若

$$
\Phi(x)
=\int_{\alpha(x)}^{\beta(x)}f(t)\,dt
$$

且相关函数可导、$f$ 连续，则

$$
\Phi'(x)
=f(\beta(x))\beta'(x)
-f(\alpha(x))\alpha'(x).
$$

---

## 6. Newton–Leibniz 公式

**定理（微积分基本定理第二部分）**  
若 $f$ 在 $[a,b]$ 上连续，$F$ 是 $f$ 的任意一个原函数，则

$$
\int_a^bf(x)\,dx
=F(b)-F(a).
$$

常记作

$$
\int_a^bf(x)\,dx
=\left.F(x)\right|_a^b.
$$

Newton–Leibniz 公式把由极限定义的定积分转化为原函数在端点的差。

更一般地，只要 $f$ Riemann 可积并且存在原函数，公式仍成立。

---

## 7. 定积分换元法

**定理**  
设 $\varphi\in C^1([\alpha,\beta])$，$f$ 在 $\varphi([\alpha,\beta])$ 上连续，则

$$
\int_\alpha^\beta
f(\varphi(t))\varphi'(t)\,dt
=
\int_{\varphi(\alpha)}^{\varphi(\beta)}
f(x)\,dx.
$$

换元后必须同时更换积分上下限；若已经更换上下限，就不需要再换回原变量。

当 $\varphi$ 单调减少时，新上下限的次序会自动体现符号变化。

---

## 8. 定积分分部积分

若 $u,v\in C^1([a,b])$，则

$$
\int_a^bu(x)v'(x)\,dx
=
\left.u(x)v(x)\right|_a^b
-\int_a^bu'(x)v(x)\,dx.
$$

也写作

$$
\int_a^b u\,dv
=
\left.uv\right|_a^b
-\int_a^b v\,du.
$$

与不定积分不同，定积分分部积分后需要计算边界项。

---

## 9. 积分不等式

### 9.1 Cauchy–Schwarz 不等式

若 $f,g$ 连续，则

$$
\left(
\int_a^bf(x)g(x)\,dx
\right)^2
\le
\left(\int_a^bf(x)^2\,dx\right)
\left(\int_a^bg(x)^2\,dx\right).
$$

取 $g\equiv1$ 得

$$
\left(\int_a^bf(x)\,dx\right)^2
\le
(b-a)\int_a^bf(x)^2\,dx.
$$

### 9.2 Jensen 不等式的积分形式

若 $\varphi$ 为凸函数，$f$ 可积且取值落在 $\varphi$ 的定义区间内，则在适当条件下

$$
\varphi\left(
\frac1{b-a}\int_a^bf(x)\,dx
\right)
\le
\frac1{b-a}\int_a^b\varphi(f(x))\,dx.
$$

---

## 10. 对称性

若 $f$ 在 $[-a,a]$ 上可积，则：

- $f$ 为奇函数时，

  $$
  \int_{-a}^af(x)\,dx=0;
  $$

- $f$ 为偶函数时，

  $$
  \int_{-a}^af(x)\,dx
  =2\int_0^af(x)\,dx.
  $$

若 $f$ 以 $T$ 为周期，则对任意 $a$，

$$
\int_a^{a+T}f(x)\,dx
=\int_0^Tf(x)\,dx.
$$

---

## 11. 本篇要点

1. 定积分具有线性、区间可加性和保序性。
2. 积分中值定理给出函数的平均值。
3. 可积函数的变上限积分连续。
4. 被积函数连续时，变上限积分的导数等于被积函数。
5. Newton–Leibniz 公式用原函数计算定积分。
6. 换元和分部积分在定积分中必须正确处理上下限与边界项。

下一篇将整理**定积分在面积、体积、弧长、曲率和物理量中的应用**。

---

## 参考教材

1. 华东师范大学数学系，《数学分析（上册）》，高等教育出版社。
2. Tom M. Apostol, *Calculus, Vol. 1*, 2nd ed.
