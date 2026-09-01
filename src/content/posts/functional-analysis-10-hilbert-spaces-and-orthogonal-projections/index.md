---
title: "泛函分析 10：Hilbert 空间、正交性与投影定理"
date: 2026-09-01T11:58:00+08:00
tags: ["泛函分析", "Hilbert空间", "内积空间", "正交投影"]
description: "系统整理内积与内积诱导范数、Hilbert 空间、正交补、最佳逼近、闭凸集投影定理、闭子空间正交分解以及 Hilbert 空间中的弱收敛。"
draft: false
---

Banach 空间只有范数和线性结构，Hilbert 空间还具有内积。内积不仅给出向量长度，还能描述夹角、正交性和投影，使无限维空间保留 Euclid 几何的核心结构。

这种几何结构带来一系列 Banach 空间中通常不存在的结论：

- 每个闭子空间都有正交补；
- 每个向量都能唯一分解为子空间分量与正交分量；
- 到闭凸集和闭子空间的最佳逼近一定存在且唯一；
- 对偶空间可以通过内积与原空间自然对应；
- 自伴和正规算子可以发展正交谱理论。

本文约定标量域 $\mathbb K=\mathbb R$ 或 $\mathbb C$。在复空间中，内积对第一个变量线性、对第二个变量共轭线性。

---

## 1. 内积空间

### 1.1 内积

**定义（内积）**  
设 $X$ 是 $\mathbb K$ 上的线性空间。映射

$$
\langle\cdot,\cdot\rangle:
X\times X\to\mathbb K
$$

称为内积，如果对任意 $x,y,z\in X$ 和 $\alpha,\beta\in\mathbb K$ 满足：

1. **正定性**

   $$
   \langle x,x\rangle\ge0,
   \qquad
   \langle x,x\rangle=0
   \Longleftrightarrow
   x=0;
   $$

2. **共轭对称性**

   $$
   \langle x,y\rangle
   =
   \overline{\langle y,x\rangle};
   $$

3. **第一变量线性**

   $$
   \langle\alpha x+\beta y,z\rangle
   =
   \alpha\langle x,z\rangle
   +
   \beta\langle y,z\rangle.
   $$

由共轭对称性，第二变量满足

$$
\langle x,\alpha y+\beta z\rangle
=
\overline\alpha\langle x,y\rangle
+
\overline\beta\langle x,z\rangle.
$$

二元组 $(X,\langle\cdot,\cdot\rangle)$ 称为内积空间。

### 1.2 实数情形

当 $\mathbb K=\mathbb R$ 时，共轭对称性退化为对称性：

$$
\langle x,y\rangle=\langle y,x\rangle,
$$

内积对两个变量分别线性。

---

## 2. Cauchy–Schwarz 不等式

### 2.1 定理

**定理（Cauchy–Schwarz）**

$$
|\langle x,y\rangle|
\le
\sqrt{\langle x,x\rangle}
\sqrt{\langle y,y\rangle}.
$$

等号成立当且仅当 $x,y$ 线性相关。

### 2.2 内积诱导范数

定义

$$
\|x\|
=
\sqrt{\langle x,x\rangle}.
$$

Cauchy–Schwarz 不等式可以写成

$$
|\langle x,y\rangle|
\le
\|x\|\,\|y\|.
$$

由此可得三角不等式

$$
\|x+y\|
\le
\|x\|+\|y\|.
$$

所以每个内积都诱导一个范数。

### 2.3 内积的连续性

由

$$
|\langle x_n,y_n\rangle-\langle x,y\rangle|
\le
\|x_n-x\|\,\|y_n\|
+
\|x\|\,\|y_n-y\|
$$

可知：若

$$
x_n\to x,
\qquad
y_n\to y,
$$

则

$$
\langle x_n,y_n\rangle
\to
\langle x,y\rangle.
$$

---

## 3. 平行四边形恒等式与极化公式

### 3.1 平行四边形恒等式

内积诱导的范数满足

$$
\|x+y\|^2+\|x-y\|^2
=
2\|x\|^2+2\|y\|^2.
$$

它表示平行四边形两条对角线平方和等于四条边平方和。

### 3.2 Jordan–von Neumann 定理

**定理**  
赋范空间的范数来自某个内积，当且仅当它满足平行四边形恒等式。

因此一般 Banach 空间不一定能定义与原范数相容的内积。

例如 $\ell^p$ 的标准范数只有在

$$
p=2
$$

时来自内积。

### 3.3 极化公式

范数如果来自内积，就能恢复内积。

在实内积空间中，

$$
\langle x,y\rangle
=
\frac14
\left(
\|x+y\|^2-\|x-y\|^2
\right).
$$

在采用第一变量线性的复内积空间中，

$$
\langle x,y\rangle
=
\frac14
\left(
\|x+y\|^2-\|x-y\|^2
\right)
+
\frac{i}{4}
\left(
\|x+iy\|^2-\|x-iy\|^2
\right).
$$

---

## 4. Hilbert 空间

### 4.1 定义

**定义（Hilbert 空间）**  
若内积空间 $H$ 关于内积诱导的范数

$$
\|x\|=\sqrt{\langle x,x\rangle}
$$

完备，则称 $H$ 为 Hilbert 空间。

Hilbert 空间既是内积空间，也是 Banach 空间。

### 4.2 有限维空间

每个有限维内积空间都是 Hilbert 空间。

典型例子是

$$
\mathbb R^n
$$

上的 Euclid 内积

$$
\langle x,y\rangle
=
\sum_{k=1}^nx_ky_k,
$$

以及

$$
\mathbb C^n
$$

上的标准内积

$$
\langle x,y\rangle
=
\sum_{k=1}^nx_k\overline{y_k}.
$$

### 4.3 序列空间 $\ell^2$

定义

$$
\ell^2
=
\left\{
x=(x_n):
\sum_{n=1}^{\infty}|x_n|^2<\infty
\right\},
$$

内积为

$$
\langle x,y\rangle
=
\sum_{n=1}^{\infty}
x_n\overline{y_n}.
$$

$\ell^2$ 完备，因此是 Hilbert 空间。

### 4.4 函数空间 $L^2$

在测度空间上定义

$$
\langle f,g\rangle
=
\int f\overline g\,d\mu.
$$

相应范数为

$$
\|f\|_2
=
\left(
\int|f|^2\,d\mu
\right)^{1/2}.
$$

Riesz–Fischer 完备性定理说明 $L^2$ 是 Hilbert 空间。其测度论细节已在[实变函数 07：$L^p$ 空间](/posts/real-analysis-07-lp-spaces/)中整理。

### 4.5 不完备的内积空间

内积空间不一定完备。

例如有限支撑序列空间 $c_{00}$ 使用 $\ell^2$ 内积时不完备，其完备化是 $\ell^2$。

---

## 5. 正交性

### 5.1 正交向量

**定义（正交）**  
若

$$
\langle x,y\rangle=0,
$$

则称 $x$ 与 $y$ 正交，记作

$$
x\perp y.
$$

零向量与每个向量正交。

### 5.2 Pythagoras 定理

若 $x\perp y$，则

$$
\|x+y\|^2
=
\|x\|^2+\|y\|^2.
$$

更一般地，若 $x_1,\ldots,x_n$ 两两正交，则

$$
\left\|
\sum_{k=1}^nx_k
\right\|^2
=
\sum_{k=1}^n\|x_k\|^2.
$$

### 5.3 正交与线性无关

非零的两两正交向量族必线性无关。

因此标准正交系自动是线性无关族。

---

## 6. 正交补

### 6.1 定义

设 $M\subseteq H$。定义

$$
M^\perp
=
\{x\in H:
\langle x,m\rangle=0,\
\forall m\in M\}.
$$

$M^\perp$ 称为 $M$ 的正交补。

### 6.2 基本性质

**定理**

1. $M^\perp$ 总是闭线性子空间；
2. 

   $$
   M\subseteq(M^\perp)^\perp;
   $$

3. 

   $$
   (M^\perp)^\perp
   =
   \overline{\operatorname{span}M};
   $$

4. 

   $$
   M^\perp=\{0\}
   \Longleftrightarrow
   \overline{\operatorname{span}M}=H.
   $$

如果 $M$ 本身是线性子空间，则

$$
(M^\perp)^\perp=\overline M.
$$

### 6.3 稠密性判定

线性子空间 $M$ 在 $H$ 中稠密，当且仅当

$$
M^\perp=\{0\}.
$$

这给出 Hilbert 空间中判断函数族或正交系完备性的常用方法。

---

## 7. 到闭凸集的最佳逼近

### 7.1 距离

设 $C\subseteq H$ 非空，定义

$$
d(x,C)
=
\inf_{y\in C}\|x-y\|.
$$

### 7.2 投影定理

**定理（闭凸集投影）**  
若 $C$ 非空、闭且凸，则对每个 $x\in H$，存在唯一 $y_0\in C$，使

$$
\|x-y_0\|
=
d(x,C).
$$

$y_0$ 称为 $x$ 在 $C$ 上的最佳逼近或度量投影，记作

$$
P_Cx=y_0.
$$

在一般 Banach 空间中，即使集合闭且凸，最佳逼近也可能不存在或不唯一。

### 7.3 变分刻画

$y_0=P_Cx$ 当且仅当

$$
\operatorname{Re}
\langle x-y_0,y-y_0\rangle
\le0,
\qquad
\forall y\in C.
$$

当 $C$ 是线性子空间时，这个不等式进一步变成正交条件。

### 7.4 非扩张性

闭凸集投影满足

$$
\|P_Cx-P_Cy\|
\le
\|x-y\|.
$$

因此 $P_C$ 是 $1$-Lipschitz 连续映射。

但当 $C$ 不是线性子空间时，$P_C$ 一般不是线性映射。

---

## 8. 闭子空间投影定理

设 $M\subseteq H$ 是闭线性子空间。

### 8.1 正交分解

**定理（正交投影定理）**  
对每个 $x\in H$，存在唯一的

$$
m\in M,
\qquad
n\in M^\perp,
$$

使

$$
x=m+n.
$$

因此

$$
H=M\oplus M^\perp.
$$

这是正交直和。

### 8.2 正交投影

定义

$$
P_Mx=m,
$$

其中 $x=m+n$ 是上述唯一分解。

$P_M$ 称为到 $M$ 的正交投影。

并且

$$
x-P_Mx\in M^\perp,
$$

$$
\|x-P_Mx\|
=
d(x,M).
$$

### 8.3 Pythagoras 分解

因为

$$
P_Mx\perp x-P_Mx,
$$

所以

$$
\|x\|^2
=
\|P_Mx\|^2
+
\|x-P_Mx\|^2.
$$

由此可得

$$
\|P_Mx\|\le\|x\|.
$$

---

## 9. 正交投影算子

### 9.1 基本性质

正交投影 $P_M$ 满足

$$
P_M^2=P_M,
$$

$$
\operatorname{ran}P_M=M,
$$

$$
\ker P_M=M^\perp.
$$

如果 $M\ne\{0\}$，则

$$
\|P_M\|=1.
$$

### 9.2 自伴性

正交投影满足

$$
\langle P_Mx,y\rangle
=
\langle x,P_My\rangle.
$$

引入伴随算子后，这可以写成

$$
P_M^*=P_M.
$$

### 9.3 投影的刻画

**定理**  
有界线性算子 $P\in\mathcal B(H)$ 是正交投影，当且仅当

$$
P^2=P
$$

且

$$
P^*=P.
$$

只满足 $P^2=P$ 的算子称为投影或斜投影，其值域与核未必正交，算子范数也可能大于 $1$。

### 9.4 补投影

如果 $P_M$ 是到 $M$ 的正交投影，则

$$
I-P_M
$$

是到 $M^\perp$ 的正交投影。

因此

$$
P_{M^\perp}=I-P_M.
$$

---

## 10. 有限维逼近

设 $e_1,\ldots,e_n$ 是标准正交向量，令

$$
M=\operatorname{span}\{e_1,\ldots,e_n\}.
$$

则

$$
P_Mx
=
\sum_{k=1}^n
\langle x,e_k\rangle e_k.
$$

并且对任意 $y\in M$，

$$
\|x-P_Mx\|
\le
\|x-y\|.
$$

所以 Fourier 截断不是任意近似，而是在该有限维子空间中的唯一最佳逼近。

误差满足

$$
\|x-P_Mx\|^2
=
\|x\|^2
-
\sum_{k=1}^n
|\langle x,e_k\rangle|^2.
$$

---

## 11. Hilbert 空间中的弱收敛

### 11.1 内积判定

由 Riesz 表示定理，Hilbert 空间中的每个连续线性泛函都可以写成

$$
f_y(x)=\langle x,y\rangle.
$$

因此

$$
x_n\rightharpoonup x
\Longleftrightarrow
\langle x_n,y\rangle
\to
\langle x,y\rangle,
\quad
\forall y\in H.
$$

### 11.2 标准正交序列

若 $\{e_n\}$ 是标准正交序列，则对每个 $y\in H$，

$$
\langle e_n,y\rangle\to0.
$$

所以

$$
e_n\rightharpoonup0.
$$

但

$$
\|e_n\|=1,
$$

因此它通常不范数收敛。

### 11.3 弱收敛加范数收敛

**定理**  
若

$$
x_n\rightharpoonup x
$$

并且

$$
\|x_n\|\to\|x\|,
$$

则

$$
\|x_n-x\|\to0.
$$

因为

$$
\|x_n-x\|^2
=
\|x_n\|^2+\|x\|^2
-
2\operatorname{Re}\langle x_n,x\rangle.
$$

这一性质在一般 Banach 空间中不一定成立。

---

## 12. Hilbert 空间的几何性质

### 12.1 一致凸性

Hilbert 空间满足

$$
\left\|
\frac{x+y}{2}
\right\|^2
=
\frac{\|x\|^2+\|y\|^2}{2}
-
\frac{\|x-y\|^2}{4}.
$$

所以 Hilbert 空间一致凸。

由 Milman–Pettis 定理，每个 Hilbert 空间都是自反 Banach 空间。

### 12.2 弱紧致性

Hilbert 空间的闭单位球弱紧。因此每个有界序列都有弱收敛子列。

这与正交投影和弱下半连续性结合，是最小二乘法和变分法存在性结论的基础。

### 12.3 严格凸性

若 $x\ne y$ 且 $\|x\|=\|y\|=1$，则

$$
\left\|\frac{x+y}{2}\right\|<1.
$$

严格凸性解释了最佳逼近的唯一性；完备性和闭性则保证最佳逼近的存在性。

---

## 13. 概念辨析

### 13.1 内积空间与 Hilbert 空间

内积空间不一定完备；完备的内积空间才是 Hilbert 空间。

### 13.2 正交补与代数补

$M^\perp$ 是由内积自然确定的闭子空间。一般代数补空间不唯一，也未必与 $M$ 正交。

### 13.3 度量投影与正交投影

- 到闭凸集的度量投影存在且唯一，但一般非线性；
- 到闭线性子空间的投影是线性正交投影；
- 斜投影满足 $P^2=P$，但不一定自伴。

### 13.4 正交分解与普通直和

普通直和只要求表示唯一；正交直和还要求两个子空间彼此正交，并自动具有稳定的范数几何。

---

## 14. 本篇要点

1. 内积诱导范数，并满足 Cauchy–Schwarz、Pythagoras 和平行四边形恒等式。
2. 范数来自内积，当且仅当满足平行四边形恒等式。
3. 完备的内积空间称为 Hilbert 空间。
4. $\ell^2$ 和 $L^2$ 是最重要的无限维 Hilbert 空间。
5. $M^\perp$ 总是闭子空间，并且 $(M^\perp)^\perp=\overline M$。
6. Hilbert 空间中每个非空闭凸集都有唯一最佳逼近。
7. 每个闭线性子空间 $M$ 都给出正交分解 $H=M\oplus M^\perp$。
8. 正交投影由 $P^2=P=P^*$ 刻画。
9. Hilbert 空间中弱收敛加范数收敛推出强收敛。
10. Hilbert 空间一致凸，因此自反。

下一篇将整理**标准正交系、Fourier 展开、Riesz 表示定理和 Hilbert 空间伴随算子**。

---

## 参考教材

1. 张恭庆、林源渠，《泛函分析讲义》，北京大学出版社。
2. 夏道行、吴卓人、严绍宗、舒五昌，《实变函数论与泛函分析》，高等教育出版社。
3. John B. Conway, *A Course in Functional Analysis*, 2nd ed.
4. Erwin Kreyszig, *Introductory Functional Analysis with Applications*.
5. Walter Rudin, *Functional Analysis*, 2nd ed.
