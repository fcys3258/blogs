---
title: "数学分析 11：Riemann 积分"
date: 2026-08-22T17:28:00+08:00
tags: ["数学分析", "Riemann积分", "可积性"]
description: "系统整理分割、Riemann 和、定积分定义、Darboux 上下和、可积准则以及连续、单调与分段连续函数的可积性。"
draft: false
---

Riemann 积分通过把区间分成许多小段、累加局部矩形面积并取极限，严格定义定积分。

---

## 1. 区间分割

### 1.1 分割

**定义（分割）**  
闭区间 $[a,b]$ 的一个分割是有限点集

$$
P:\quad
a=x_0<x_1<\cdots<x_n=b.
$$

第 $i$ 个小区间为

$$
[x_{i-1},x_i],
$$

其长度为

$$
\Delta x_i=x_i-x_{i-1}.
$$

### 1.2 分割的模

定义分割的模为

$$
\|P\|
=\max_{1\le i\le n}\Delta x_i.
$$

$\|P\|\to0$ 表示所有小区间的最大长度趋于零。

### 1.3 标志点

在每个小区间 $[x_{i-1},x_i]$ 中任取一点

$$
\xi_i\in[x_{i-1},x_i],
$$

称为该小区间的标志点。

---

## 2. Riemann 和与定积分

### 2.1 Riemann 和

对有界函数 $f:[a,b]\to\mathbb R$，定义 Riemann 和

$$
S(f;P,\xi)
=\sum_{i=1}^n
f(\xi_i)\Delta x_i.
$$

### 2.2 Riemann 可积

**定义（Riemann 积分）**  
若存在实数 $I$，使得对任意 $\varepsilon>0$，都存在 $\delta>0$，只要

$$
\|P\|<\delta,
$$

无论怎样选择标志点 $\xi_i$，都有

$$
\left|
\sum_{i=1}^nf(\xi_i)\Delta x_i-I
\right|<\varepsilon,
$$

则称 $f$ 在 $[a,b]$ 上 Riemann 可积，并记

$$
I=\int_a^bf(x)\,dx.
$$

积分值必须与分割方式及标志点选择无关。

### 2.3 必要条件

**定理**  
Riemann 可积函数必有界。

有界性不是充分条件。Dirichlet 函数

$$
D(x)=
\begin{cases}
1,&x\in\mathbb Q,\\
0,&x\notin\mathbb Q
\end{cases}
$$

在任意闭区间上有界，但不可 Riemann 积。

---

## 3. Darboux 上下和

设 $f$ 在 $[a,b]$ 上有界。对分割 $P$ 的第 $i$ 个小区间，令

$$
M_i=\sup_{x\in[x_{i-1},x_i]}f(x),
$$

$$
m_i=\inf_{x\in[x_{i-1},x_i]}f(x).
$$

定义 Darboux 上和与下和：

$$
U(f,P)
=\sum_{i=1}^nM_i\Delta x_i,
$$

$$
L(f,P)
=\sum_{i=1}^nm_i\Delta x_i.
$$

总有

$$
L(f,P)
\le
S(f;P,\xi)
\le
U(f,P).
$$

---

## 4. 分割加细

若分割 $P^\ast$ 包含 $P$ 的所有分点，则称 $P^\ast$ 是 $P$ 的加细。

**定理**

$$
L(f,P)\le L(f,P^\ast),
$$

$$
U(f,P^\ast)\le U(f,P).
$$

即加细分割后，下和不减，上和不增。

对任意两个分割 $P_1,P_2$，总有

$$
L(f,P_1)\le U(f,P_2).
$$

---

## 5. 上积分与下积分

定义 Darboux 下积分

$$
\underline{\int_a^b}f
=\sup_P L(f,P),
$$

以及 Darboux 上积分

$$
\overline{\int_a^b}f
=\inf_P U(f,P).
$$

总有

$$
\underline{\int_a^b}f
\le
\overline{\int_a^b}f.
$$

**定理（Darboux 可积准则）**  
有界函数 $f$ 在 $[a,b]$ 上可积，当且仅当

$$
\underline{\int_a^b}f
=
\overline{\int_a^b}f.
$$

此时共同的值就是 Riemann 积分。

---

## 6. 振幅准则

在小区间 $[x_{i-1},x_i]$ 上定义振幅

$$
\omega_i=M_i-m_i.
$$

于是

$$
U(f,P)-L(f,P)
=\sum_{i=1}^n
\omega_i\Delta x_i.
$$

**定理（Riemann 可积准则）**  
有界函数 $f$ 在 $[a,b]$ 上可积，当且仅当对任意 $\varepsilon>0$，存在分割 $P$，使

$$
U(f,P)-L(f,P)<\varepsilon.
$$

等价地，

$$
\sum_{i=1}^n
\omega_i\Delta x_i<\varepsilon.
$$

---

## 7. 常见可积函数

### 7.1 连续函数

**定理**  
闭区间上的连续函数 Riemann 可积：

$$
f\in C([a,b])
\quad\Longrightarrow\quad
f\in R([a,b]).
$$

其基础是连续函数在闭区间上一致连续。

### 7.2 单调函数

**定理**  
闭区间上的单调函数 Riemann 可积。

单调函数可以有间断点，但其间断只能是跳跃型，且间断点至多可数。

### 7.3 分段连续函数

若 $f$ 在 $[a,b]$ 上只有有限个第一类间断点，则 $f$ 在 $[a,b]$ 上 Riemann 可积。

### 7.4 有界且只有有限个间断点

**定理**  
有界函数若在闭区间上只有有限个间断点，则 Riemann 可积。

有限个点上的函数值改变不影响积分值。

---

## 8. Lebesgue 可积判别

**定理（Lebesgue 判别准则）**  
有界函数在闭区间上 Riemann 可积，当且仅当其间断点集合的 Lebesgue 测度为零。

这一结论需要测度论。它说明 Riemann 可积函数可以有无穷多个间断点，但这些间断点必须足够“稀少”。

例如 Thomae 函数在有理点间断、无理点连续，其间断点集合可数，所以 Riemann 可积。

---

## 9. 可积性的保持

若 $f,g\in R([a,b])$，则

$$
f\pm g,\qquad fg,\qquad |f|
$$

都在 $[a,b]$ 上可积。

若还存在 $m>0$ 使

$$
|g(x)|\ge m,
$$

则

$$
\frac fg
$$

也可积。

若 $f$ 可积，且 $\varphi$ 在包含 $f([a,b])$ 的区间上连续，则

$$
\varphi\circ f
$$

可积。

特别地，若 $f$ 可积，则 $f^2$ 可积。

需要注意：

$$
f^2\text{可积}
$$

一般不能反推出 $f$ 可积。

---

## 10. 可积函数的绝对值

若 $f$ 可积，则 $|f|$ 可积，并且

$$
\left|\int_a^bf(x)\,dx\right|
\le
\int_a^b|f(x)|\,dx.
$$

逆命题不成立。例如令 $f$ 在有理点取 $1$、无理点取 $-1$，则 $|f|\equiv1$ 可积，但 $f$ 不可积。

---

## 11. 本篇要点

1. Riemann 积分是所有细分和标志点下 Riemann 和的共同极限。
2. 可积函数必有界，但有界函数未必可积。
3. Darboux 上下和给出不依赖标志点的可积性刻画。
4. 上和与下和之差可以任意小时，函数可积。
5. 连续、单调和分段连续函数在闭区间上可积。
6. 修改有限个点的函数值不改变积分。

下一篇将整理**定积分的性质、积分中值定理以及微积分基本定理**。

---

## 参考教材

1. 华东师范大学数学系，《数学分析（上册）》，高等教育出版社。
2. Walter Rudin, *Principles of Mathematical Analysis*, 3rd ed.
3. Tom M. Apostol, *Calculus, Vol. 1*, 2nd ed.
