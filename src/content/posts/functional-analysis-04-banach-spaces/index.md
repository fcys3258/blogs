---
title: "泛函分析 04：Banach 空间与典型例子"
date: 2026-08-25T14:03:00+08:00
tags: ["泛函分析", "Banach空间", "序列空间", "函数空间"]
description: "系统整理 Banach 空间的定义与判定，并集中介绍序列空间、连续函数空间、可微函数空间和 Lp 空间等典型例子。"
draft: false
---

赋范空间中的向量可以比较大小和距离，但空间未必包含所有 Cauchy 点列的极限。完备性保证在空间内部进行极限运算不会产生“跑到空间外”的对象。

完备的赋范线性空间称为 Banach 空间。它是泛函分析最基本的工作环境：一致有界原理、开映射定理和闭图像定理等核心结果都以 Banach 空间为自然假设。

本文集中整理 Banach 空间及其典型例子。$L^p$ 空间已经在实变函数系列中详细介绍，这里只说明它在泛函分析中的位置，不再重复测度、积分与对偶理论。

本文约定 $\mathbb K=\mathbb R$ 或 $\mathbb C$，并令

$$
\mathbb N_+=\{1,2,3,\ldots\}.
$$

---

## 1. Banach 空间

### 1.1 定义

**定义（Banach 空间）**  
若赋范空间 $(X,\|\cdot\|)$ 关于范数诱导的度量

$$
d(x,y)=\|x-y\|
$$

是完备度量空间，则称 $X$ 是 Banach 空间。

也就是说，对 $X$ 中任意 Cauchy 点列 $\{x_n\}$，都存在 $x\in X$，使

$$
\|x_n-x\|\to0.
$$

### 1.2 有限维空间

**定理**  
每个有限维赋范空间都是 Banach 空间。

因此有限维空间中的完备性不依赖范数的选择。无限维赋范空间则可能完备，也可能不完备。

### 1.3 等价范数与完备性

若 $\|\cdot\|_a$ 与 $\|\cdot\|_b$ 是等价范数，则

$$
(X,\|\cdot\|_a)\text{ 完备}
\Longleftrightarrow
(X,\|\cdot\|_b)\text{ 完备}.
$$

所以等价范数不会改变 Banach 空间性质。

---

## 2. Banach 空间的判定

### 2.1 绝对收敛级数判据

**定理（Banach 空间的级数判据）**  
赋范空间 $X$ 是 Banach 空间，当且仅当对任意序列 $\{x_n\}\subseteq X$，

$$
\sum_{n=1}^{\infty}\|x_n\|<\infty
$$

都能推出向量级数

$$
\sum_{n=1}^{\infty}x_n
$$

在 $X$ 中收敛。

这常被概括为：

$$
\text{Banach 空间中绝对收敛推出收敛}.
$$

### 2.2 闭子空间

**定理**  
设 $X$ 是 Banach 空间，$M\subseteq X$ 是线性子空间。则

$$
M\text{ 是 Banach 空间}
\Longleftrightarrow
M\text{ 在 }X\text{ 中闭}.
$$

因此判断一个具体子空间是否完备，常常可以转化为判断它是否闭。

### 2.3 乘积空间

若 $X_1,\ldots,X_n$ 都是 Banach 空间，则有限乘积

$$
X_1\times\cdots\times X_n
$$

在范数

$$
\|(x_1,\ldots,x_n)\|
=
\max_{1\le k\le n}\|x_k\|
$$

下是 Banach 空间。

在有限乘积上改用范数和

$$
\sum_{k=1}^n\|x_k\|
$$

或其他等价乘积范数，不改变完备性。

---

## 3. 序列空间

### 3.1 $\ell^p$ 空间

设 $1\le p<\infty$。定义

$$
\ell^p
=
\left\{
x=(x_n)_{n\ge1}:
\sum_{n=1}^{\infty}|x_n|^p<\infty
\right\},
$$

并定义范数

$$
\|x\|_p
=
\left(
\sum_{n=1}^{\infty}|x_n|^p
\right)^{1/p}.
$$

**定理**  
对每个 $1\le p<\infty$，$\ell^p$ 都是 Banach 空间。

三角不等式来自离散形式的 Minkowski 不等式。

### 3.2 $\ell^\infty$ 空间

定义所有有界标量序列组成的空间

$$
\ell^\infty
=
\left\{
x=(x_n):
\sup_{n\ge1}|x_n|<\infty
\right\},
$$

范数为

$$
\|x\|_\infty=\sup_{n\ge1}|x_n|.
$$

**定理**  
$\ell^\infty$ 是 Banach 空间。

### 3.3 $c$、$c_0$ 与 $c_{00}$

定义

$$
c=\{x=(x_n):x_n\text{ 收敛}\},
$$

$$
c_0=\{x=(x_n):x_n\to0\},
$$

以及

$$
c_{00}
=
\{x=(x_n):x_n\text{ 只有有限个非零项}\}.
$$

这些空间都使用最大范数

$$
\|x\|_\infty=\sup_n|x_n|.
$$

它们满足

$$
c_{00}\subseteq c_0\subseteq c\subseteq\ell^\infty.
$$

**定理**

1. $c_0$ 和 $c$ 是 $\ell^\infty$ 的闭子空间，因此都是 Banach 空间；
2. $c_{00}$ 在 $c_0$ 中稠密；
3. $c_{00}$ 不是完备空间，其完备化是 $c_0$。

### 3.4 坐标向量

令

$$
e_n=(0,\ldots,0,1,0,\ldots),
$$

其中第 $n$ 项为 $1$。

对 $x=(x_n)\in\ell^p$，$1\le p<\infty$，有

$$
x=\sum_{n=1}^{\infty}x_ne_n
$$

并且级数在 $\ell^p$ 范数下收敛。

对 $x\in c_0$，同一展开在最大范数下收敛。

但对常值序列

$$
\mathbf 1=(1,1,\ldots)\in\ell^\infty,
$$

其截断序列与 $\mathbf 1$ 的最大范数距离始终为 $1$。所以 $c_{00}$ 在 $\ell^\infty$ 中不稠密。

---

## 4. 序列空间的包含关系

### 4.1 不同 $\ell^p$ 之间的包含

**定理**  
对序列空间，若

$$
1\le p<q\le\infty,
$$

则

$$
\ell^p\subseteq\ell^q
$$

并且

$$
\|x\|_q\le\|x\|_p.
$$

这个方向与有限测度空间上的 $L^p$ 包含关系相反，不能混淆。

### 4.2 典型序列

考虑

$$
x_n=\frac1{n^\alpha}.
$$

则

$$
x\in\ell^p
\Longleftrightarrow
\alpha p>1.
$$

特别地，

$$
\left(\frac1n\right)\in\ell^p
\quad(p>1),
$$

但

$$
\left(\frac1n\right)\notin\ell^1.
$$

另一方面，$1/n\to0$，所以该序列总属于 $c_0$。

### 4.3 有限支撑序列的稠密性

**定理**

$$
\overline{c_{00}}^{\,\|\cdot\|_p}=\ell^p,
\qquad 1\le p<\infty,
$$

以及

$$
\overline{c_{00}}^{\,\|\cdot\|_\infty}=c_0.
$$

因此有限支撑序列可以逼近每个有限指数 $\ell^p$ 序列和每个零收敛序列，但不能逼近一般有界序列。

---

## 5. 序列空间的可分性

### 5.1 $\ell^p$ 与 $c_0$

**定理**

1. 当 $1\le p<\infty$ 时，$\ell^p$ 可分；
2. $c_0$ 可分；
3. $c$ 可分。

可以取所有有限支撑且坐标属于 $\mathbb Q$ 或 $\mathbb Q+i\mathbb Q$ 的序列作为可数稠密集。

### 5.2 $\ell^\infty$

**定理**  
$\ell^\infty$ 不可分。

直观上，对每个只取 $0$ 和 $1$ 的序列，都得到 $\ell^\infty$ 中的一个点；任意两个不同的这种序列之间的最大范数距离都是 $1$。这样的点有不可数多个，不可能由可数集合稠密逼近。

---

## 6. 有界函数空间

### 6.1 $B(S)$

设 $S$ 为任意非空集合。定义

$$
B(S)
=
\{f:S\to\mathbb K:f\text{ 有界}\},
$$

并赋予上确界范数

$$
\|f\|_\infty=\sup_{x\in S}|f(x)|.
$$

**定理**  
$B(S)$ 是 Banach 空间。

其完备性的核心是：一致 Cauchy 的有界函数列逐点存在极限，而且收敛实际上是一致的，极限仍然有界。

### 6.2 $C_b(S)$

若 $S$ 是拓扑空间，定义

$$
C_b(S)
=
\{f:S\to\mathbb K:f\text{ 连续且有界}\}.
$$

在上确界范数下，$C_b(S)$ 是 $B(S)$ 的闭子空间，因此是 Banach 空间。

这里使用了连续函数列一致收敛时，其极限仍连续这一结论。

---

## 7. 连续函数空间

### 7.1 $C(K)$

设 $K$ 是紧空间。每个连续函数 $f:K\to\mathbb K$ 都有界，因此定义

$$
C(K)=\{f:K\to\mathbb K:f\text{ 连续}\}
$$

和范数

$$
\|f\|_\infty=\max_{x\in K}|f(x)|.
$$

**定理**  
$C(K)$ 在上确界范数下是 Banach 空间。

特别地，

$$
C[a,b]
$$

是 Banach 空间。

### 7.2 一致范数的含义

在 $C(K)$ 中，

$$
\|f_n-f\|_\infty\to0
$$

等价于 $f_n$ 一致收敛到 $f$。

因此 $C(K)$ 的完备性正是：

> 连续函数的一致 Cauchy 列一致收敛到连续函数。

### 7.3 多项式子空间

设 $\mathcal P[a,b]$ 是 $[a,b]$ 上所有多项式组成的空间，并使用上确界范数。

由 Weierstrass 逼近定理，

$$
\overline{\mathcal P[a,b]}^{\,\|\cdot\|_\infty}
=C[a,b].
$$

因此 $\mathcal P[a,b]$ 在 $C[a,b]$ 中稠密，但不是闭集，也不是 Banach 空间；其完备化是 $C[a,b]$。

---

## 8. 可微函数空间

### 8.1 $C^m[a,b]$

定义

$$
C^m[a,b]
=
\{f:[a,b]\to\mathbb K:
f,f',\ldots,f^{(m)}\text{ 连续}\}.
$$

赋予范数

$$
\|f\|_{C^m}
=
\sum_{k=0}^m\|f^{(k)}\|_\infty.
$$

**定理**  
$C^m[a,b]$ 在 $\|\cdot\|_{C^m}$ 下是 Banach 空间。

也可以使用等价范数

$$
\|f\|'_{C^m}
=
\max_{0\le k\le m}\|f^{(k)}\|_\infty.
$$

### 8.2 为什么只用一致范数不够

$C^1[-1,1]$ 如果只赋予

$$
\|f\|_\infty
=\max_{x\in[-1,1]}|f(x)|
$$

就不是完备空间。

例如

$$
f_n(x)=\sqrt{x^2+\frac1n}
$$

属于 $C^1[-1,1]$，并且

$$
\|f_n-|x|\|_\infty=\frac1{\sqrt n}\to0.
$$

但极限函数 $|x|$ 在 $x=0$ 处不可微，不属于 $C^1[-1,1]$。

这说明空间是否完备不仅取决于元素集合，也取决于所选范数。$\|\cdot\|_{C^1}$ 同时控制函数和导数，能够阻止上述极限离开空间。

---

## 9. $L^p$ 空间在泛函分析中的位置

$L^p$ 空间的定义、Hölder 不等式、Minkowski 不等式、完备性、稠密性和对偶性已经在[实变函数 07：$L^p$ 空间](/posts/real-analysis-07-lp-spaces/)中整理。

这里只记录泛函分析中最常使用的结论。

**Riesz–Fischer 完备性定理**  
对任意测度空间和

$$
1\le p\le\infty,
$$

$L^p$ 都是 Banach 空间。

其中：

- $L^p$ 的元素是几乎处处相等意义下的等价类；
- $1\le p<\infty$ 时使用积分范数；
- $p=\infty$ 时使用本质上确界范数；
- $L^2$ 的标准范数来自内积，因此 $L^2$ 还是 Hilbert 空间；
- 一般 $p\ne2$ 时，$L^p$ 的标准范数不来自内积。

泛函分析后续讨论对偶空间、弱收敛和自反性时，会直接使用这些结论。

---

## 10. 常见 Banach 空间对照

| 空间 | 元素 | 范数 | 是否可分 |
|---|---|---|---:|
| $\ell^p,\ 1\le p<\infty$ | $p$ 次可和序列 | $\left(\sum|x_n|^p\right)^{1/p}$ | 是 |
| $\ell^\infty$ | 有界序列 | $\sup_n|x_n|$ | 否 |
| $c_0$ | 收敛到 $0$ 的序列 | $\sup_n|x_n|$ | 是 |
| $c$ | 收敛序列 | $\sup_n|x_n|$ | 是 |
| $B(S)$ | $S$ 上有界函数 | $\sup_{x\in S}|f(x)|$ | 通常否 |
| $C(K)$ | 紧空间上的连续函数 | $\max_{x\in K}|f(x)|$ | $K$ 为紧度量空间时是 |
| $C^m[a,b]$ | $m$ 次连续可微函数 | $\sum_{k=0}^m\|f^{(k)}\|_\infty$ | 是 |
| $L^p$ | 可测函数的等价类 | $L^p$ 范数 | 依赖测度空间 |

表中的可分性结论需要相应的常见假设。例如一般测度空间上的 $L^p$ 未必可分，而 Euclid 空间中 Lebesgue 测度下的有限指数 $L^p$ 通常可分。

---

## 11. 常见非完备空间

### 11.1 有限支撑序列

$c_{00}$ 在最大范数下不完备，其完备化为 $c_0$。

### 11.2 多项式空间

$\mathcal P[a,b]$ 在一致范数下不完备，其完备化为 $C[a,b]$。

### 11.3 使用过弱范数的可微函数空间

$C^1[a,b]$ 在 $\|\cdot\|_\infty$ 下不完备，但在

$$
\|f\|_{C^1}
=\|f\|_\infty+\|f'\|_\infty
$$

下完备。

这些例子体现了同一种现象：Cauchy 点列的极限存在于更大的空间中，却不再满足原空间的额外条件。

---

## 12. 概念辨析

### 12.1 Banach 空间与有限维空间

每个有限维赋范空间都是 Banach 空间，但 Banach 空间可以是无限维的，例如 $\ell^p$、$C[a,b]$ 和 $L^p$。

### 12.2 完备与紧致

Banach 空间只要求 Cauchy 点列收敛，不要求每个有界点列都有收敛子列。

无限维 Banach 空间的闭单位球完备且有界，但不紧。

### 12.3 $\ell^p$ 与 $L^p$

- $\ell^p$ 使用可数求和，可以看作计数测度下的 $L^p$；
- 一般 $L^p$ 使用积分；
- 对序列空间，$p<q$ 时 $\ell^p\subseteq\ell^q$；
- 对有限测度空间，$p<q$ 时通常是 $L^q\subseteq L^p$。

### 12.4 完备性依赖范数

同一个线性空间在一个范数下可能完备，在另一个不等价范数下可能不完备。

但等价范数总是同时完备或同时不完备。

---

## 13. 本篇要点

1. Banach 空间是完备的赋范线性空间。
2. 一个赋范空间是 Banach 空间，当且仅当绝对收敛的向量级数总收敛。
3. Banach 空间的线性子空间完备，当且仅当它是闭子空间。
4. $\ell^p$、$\ell^\infty$、$c_0$ 和 $c$ 都是 Banach 空间，$c_{00}$ 不是。
5. 当 $p<q$ 时有 $\ell^p\subseteq\ell^q$，这一方向不能与有限测度空间上的 $L^p$ 混淆。
6. $B(S)$、$C_b(S)$ 和 $C(K)$ 在上确界范数下都是 Banach 空间。
7. $C^m[a,b]$ 需要使用同时控制各阶导数的范数才能保证完备。
8. 每个 $L^p$ 都是 Banach 空间，而标准范数只有在 $p=2$ 时来自内积。

至此，泛函分析第一部分已经完成：

$$
\text{度量空间}
\longrightarrow
\text{完备性与紧致性}
\longrightarrow
\text{赋范线性空间}
\longrightarrow
\text{Banach 空间}.
$$

下一篇将进入第二部分，整理**有界线性算子、算子范数以及算子空间**。

---

## 参考教材

1. 张恭庆、林源渠，《泛函分析讲义》，北京大学出版社。
2. 夏道行、吴卓人、严绍宗、舒五昌，《实变函数论与泛函分析》，高等教育出版社。
3. Erwin Kreyszig, *Introductory Functional Analysis with Applications*.
4. John B. Conway, *A Course in Functional Analysis*, 2nd ed.
5. Walter Rudin, *Functional Analysis*, 2nd ed.
