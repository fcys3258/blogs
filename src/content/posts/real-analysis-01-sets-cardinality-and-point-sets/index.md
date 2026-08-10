---
title: "实变函数 01：集合、基数与点集"
date: 2026-08-10T15:44:07+08:00
tags: ["实变函数", "集合论", "点集拓扑"]
description: "系统整理集合的基数、可数与不可数集合、集合列的上下极限，以及欧氏空间中开集、闭集、紧集、完美集和 Borel 集等基础概念。"
draft: false
---

实变函数论以 Lebesgue 测度与 Lebesgue 积分为主线。与数学分析主要研究单个点附近的极限不同，测度论需要反复处理无穷集合、集合列以及点集的拓扑结构。

本文作为实变函数系列的预备篇，先整理集合的“大小”和 $\mathbb R^n$ 中点集的基本性质。基础集合运算已在“数学分析 01”中介绍，这里不再重复。

本文约定

$$
\mathbb N=\{0,1,2,\ldots\},\qquad
\mathbb N_+=\{1,2,3,\ldots\}.
$$

除非特别说明，点集均指欧氏空间 $\mathbb R^n$ 的子集。

---

## 1. 集合的对等与基数

### 1.1 对等

**定义（集合对等）**  
设 $A,B$ 为集合。若存在双射

$$
f:A\to B,
$$

则称 $A$ 与 $B$ 对等，记作

$$
A\sim B.
$$

对等关系满足自反性、对称性和传递性，因此是一种等价关系。

> 对有限集合来说，对等就是元素个数相同；对无限集合来说，对等提供了比较“元素个数”的严格方法。

例如，正整数集与偶数集对等，因为映射

$$
f(n)=2n
$$

是从 $\mathbb N_+$ 到正偶数集的双射。这说明无限集合可以与自己的真子集对等。

### 1.2 基数

**定义（基数）**  
集合 $A$ 的基数记作 $|A|$。两个集合基数相同，当且仅当它们对等：

$$
|A|=|B|\quad\Longleftrightarrow\quad A\sim B.
$$

若存在从 $A$ 到 $B$ 的单射，则记

$$
|A|\le |B|.
$$

**定理（Cantor–Schröder–Bernstein）**  
若同时存在单射 $f:A\to B$ 和 $g:B\to A$，则存在双射 $h:A\to B$，从而

$$
|A|=|B|.
$$

这个定理允许我们通过构造两个方向的单射来证明两个集合基数相同，而不必直接写出双射。

### 1.3 有限集与无限集

**定义**

- 若 $A$ 与某个 $\{1,2,\ldots,m\}$ 对等，则称 $A$ 为有限集；
- 不是有限集的集合称为无限集。

**定理（Dedekind 刻画）**  
一个集合是无限集，当且仅当它与自己的某个真子集对等。

---

## 2. 可数集合

### 2.1 可数与至多可数

**定义（可数无限集）**  
若

$$
A\sim\mathbb N_+,
$$

则称 $A$ 为可数无限集。

**定义（至多可数集）**  
有限集与可数无限集统称为至多可数集。部分教材直接把“至多可数”简称为“可数”，阅读时需要注意所采用的约定。

一个无限集合 $A$ 可数，当且仅当它的元素可以排成一个不重不漏的序列：

$$
A=\{a_1,a_2,\ldots,a_n,\ldots\}.
$$

### 2.2 常见可数集合

**定理**

1. $\mathbb N$、$\mathbb N_+$ 和 $\mathbb Z$ 都是可数集；
2. 有理数集 $\mathbb Q$ 是可数集；
3. 有限个至多可数集的 Cartesian 积仍然至多可数；
4. 至多可数集的任意子集仍然至多可数；
5. 可数个至多可数集的并仍然至多可数。

特别地，

$$
\mathbb N_+^m
=\underbrace{\mathbb N_+\times\cdots\times\mathbb N_+}_{m\text{ 个}}
$$

对任意固定的 $m\in\mathbb N_+$ 都是可数集。

有理数稠密地分布在实数轴上，但仍是可数集。这说明“到处都有”和“元素很多”是不同的概念。

### 2.3 可数并定理

**定理（可数并定理）**  
若每个 $A_k$ 都至多可数，则

$$
\bigcup_{k=1}^{\infty}A_k
$$

至多可数。

这个结论在测度论中非常重要。以后将看到：可数可加性、可数个零测集的并仍为零测集等结论，都以“可数”而不是“任意”为限。

---

## 3. 不可数集合与连续统

### 3.1 不可数集合

**定义（不可数集）**  
不是至多可数集的集合称为不可数集。

**定理（Cantor 对角线定理）**  
区间 $[0,1]$ 不可数，因此实数集 $\mathbb R$ 不可数。

任意非退化区间，即任意满足 $a<b$ 的

$$
(a,b),\quad [a,b],\quad [a,b),\quad (a,b],
$$

都与 $\mathbb R$ 对等。它们的共同基数称为**连续统基数**，常记作

$$
\mathfrak c=|\mathbb R|.
$$

因此，区间的长度不同并不影响其基数。

### 3.2 幂集

**定义（幂集）**  
集合 $A$ 的所有子集组成的集合称为 $A$ 的幂集，记作

$$
\mathcal P(A)=\{E:E\subseteq A\}.
$$

**定理（Cantor 定理）**  
对任意集合 $A$，都有

$$
|A|<|\mathcal P(A)|.
$$

特别地，

$$
|\mathcal P(\mathbb N)|=\mathfrak c.
$$

所以不存在“最大的基数”：对任何集合取幂集，都能得到基数严格更大的集合。

---

## 4. 集合列的上极限与下极限

设 $\{E_k\}_{k=1}^{\infty}$ 是集合列。

### 4.1 上极限

**定义（集合列的上极限）**

$$
\limsup_{k\to\infty}E_k
=\bigcap_{m=1}^{\infty}\bigcup_{k=m}^{\infty}E_k.
$$

一个点 $x$ 属于 $\limsup E_k$，当且仅当 $x$ 属于无穷多个 $E_k$。

### 4.2 下极限

**定义（集合列的下极限）**

$$
\liminf_{k\to\infty}E_k
=\bigcup_{m=1}^{\infty}\bigcap_{k=m}^{\infty}E_k.
$$

一个点 $x$ 属于 $\liminf E_k$，当且仅当从某一项开始，$x$ 属于之后的每个 $E_k$。

总有

$$
\liminf_{k\to\infty}E_k
\subseteq
\limsup_{k\to\infty}E_k.
$$

若二者相等，则称集合列 $\{E_k\}$ 收敛，并把共同的集合记作 $\lim E_k$。

### 4.3 单调集合列

若

$$
E_1\subseteq E_2\subseteq\cdots,
$$

则称 $E_k$ 单调增加，记作 $E_k\uparrow E$，其中

$$
E=\bigcup_{k=1}^{\infty}E_k.
$$

若

$$
E_1\supseteq E_2\supseteq\cdots,
$$

则称 $E_k$ 单调减少，记作 $E_k\downarrow E$，其中

$$
E=\bigcap_{k=1}^{\infty}E_k.
$$

两种情况下均有

$$
\liminf E_k=\limsup E_k=E.
$$

### 4.4 两个例子

**例 1**  
令

$$
E_k=\left(-\frac1k,\frac1k\right).
$$

则 $E_k\downarrow\{0\}$，所以

$$
\lim_{k\to\infty}E_k=\{0\}.
$$

**例 2**  
令 $E_{2k}=A$，$E_{2k-1}=B$，则

$$
\limsup E_k=A\cup B,\qquad
\liminf E_k=A\cap B.
$$

这与振荡数列的上极限、下极限十分相似。

---

## 5. 示性函数

**定义（示性函数）**  
设 $E\subseteq X$。集合 $E$ 的示性函数定义为

$$
\mathbf 1_E(x)=
\begin{cases}
1, & x\in E,\\
0, & x\notin E.
\end{cases}
$$

部分教材也记作 $\chi_E$。

集合运算可以转化为示性函数运算。例如

$$
\mathbf 1_{E^c}=1-\mathbf 1_E,
$$

$$
\mathbf 1_{E\cap F}=\mathbf 1_E\mathbf 1_F,
$$

$$
\mathbf 1_{E\cup F}
=\mathbf 1_E+\mathbf 1_F-\mathbf 1_E\mathbf 1_F.
$$

对于集合列，

$$
\mathbf 1_{\liminf E_k}
=\liminf_{k\to\infty}\mathbf 1_{E_k},
\qquad
\mathbf 1_{\limsup E_k}
=\limsup_{k\to\infty}\mathbf 1_{E_k}.
$$

因此，集合列的收敛等价于其示性函数逐点收敛。示性函数将在可测函数与 Lebesgue 积分中反复出现。

---

## 6. $\mathbb R^n$ 中的距离与邻域

### 6.1 Euclid 范数与距离

设

$$
x=(x_1,\ldots,x_n),\qquad
y=(y_1,\ldots,y_n)\in\mathbb R^n.
$$

**定义（Euclid 范数）**

$$
\|x\|=\left(\sum_{i=1}^{n}x_i^2\right)^{1/2}.
$$

**定义（距离）**

$$
d(x,y)=\|x-y\|.
$$

距离满足：

1. $d(x,y)\ge0$，且 $d(x,y)=0$ 当且仅当 $x=y$；
2. $d(x,y)=d(y,x)$；
3. $d(x,z)\le d(x,y)+d(y,z)$。

### 6.2 开球与邻域

**定义（开球）**  
以 $x_0$ 为中心、$r>0$ 为半径的开球为

$$
B(x_0,r)=\{x\in\mathbb R^n:\|x-x_0\|<r\}.
$$

当 $n=1$ 时，$B(x_0,r)$ 就是开区间 $(x_0-r,x_0+r)$。

若某个集合包含 $x_0$ 的一个开球，则称该集合为 $x_0$ 的一个邻域。

### 6.3 点到集合的距离

设 $E\ne\varnothing$。点 $x$ 到集合 $E$ 的距离定义为

$$
d(x,E)=\inf_{y\in E}\|x-y\|.
$$

有

$$
d(x,E)=0
\quad\Longleftrightarrow\quad
x\in\overline E.
$$

需要注意：$d(x,E)=0$ 不一定推出 $x\in E$。例如 $E=(0,1)$ 时，$d(0,E)=0$，但 $0\notin E$。

---

## 7. 点的分类

设 $E\subseteq\mathbb R^n$，$x\in\mathbb R^n$。

### 7.1 内点、外点与边界点

**定义（内点）**  
若存在 $r>0$ 使

$$
B(x,r)\subseteq E,
$$

则称 $x$ 为 $E$ 的内点。全体内点组成 $E$ 的内部，记作 $E^\circ$。

**定义（外点）**  
若存在 $r>0$ 使

$$
B(x,r)\subseteq E^c,
$$

则称 $x$ 为 $E$ 的外点。

**定义（边界点）**  
若对每个 $r>0$，开球 $B(x,r)$ 都同时与 $E$ 和 $E^c$ 相交，则称 $x$ 为 $E$ 的边界点。全体边界点组成 $E$ 的边界，记作 $\partial E$。

内点、外点和边界点将整个空间分成互不相交的三部分。

### 7.2 聚点与孤立点

**定义（聚点）**  
若对每个 $r>0$，

$$
\bigl(B(x,r)\setminus\{x\}\bigr)\cap E\ne\varnothing,
$$

则称 $x$ 为 $E$ 的聚点。

全体聚点组成 $E$ 的导集，记作 $E'$。

**定义（孤立点）**  
若 $x\in E$，但 $x$ 不是 $E$ 的聚点，则称 $x$ 为 $E$ 的孤立点。等价地，存在 $r>0$ 使

$$
B(x,r)\cap E=\{x\}.
$$

聚点不一定属于原集合。例如，$0$ 是

$$
E=\left\{\frac1k:k\in\mathbb N_+\right\}
$$

的聚点，但 $0\notin E$；而每个 $1/k$ 都是 $E$ 的孤立点。

### 7.3 闭包

**定义（闭包）**  
集合 $E$ 与其全部聚点组成的集合称为 $E$ 的闭包：

$$
\overline E=E\cup E'.
$$

等价地，

$$
x\in\overline E
\quad\Longleftrightarrow\quad
B(x,r)\cap E\ne\varnothing
\quad\text{对每个 }r>0.
$$

内部、闭包和边界满足

$$
\partial E=\overline E\setminus E^\circ
=\overline E\cap\overline{E^c}.
$$

---

## 8. 开集与闭集

### 8.1 开集

**定义（开集）**  
若 $E$ 的每个点都是内点，即

$$
E=E^\circ,
$$

则称 $E$ 为开集。

**定理**

1. $\varnothing$ 与 $\mathbb R^n$ 是开集；
2. 任意多个开集的并是开集；
3. 有限多个开集的交是开集。

无限多个开集的交未必是开集。例如

$$
\bigcap_{k=1}^{\infty}
\left(-\frac1k,\frac1k\right)
=\{0\}.
$$

### 8.2 闭集

**定义（闭集）**  
若 $E^c$ 是开集，则称 $E$ 为闭集。

下列条件等价：

1. $E$ 是闭集；
2. $E$ 包含自己的全部聚点；
3. $E'\subseteq E$；
4. $\overline E=E$；
5. $E$ 中任意收敛点列的极限仍属于 $E$。

**定理**

1. $\varnothing$ 与 $\mathbb R^n$ 是闭集；
2. 任意多个闭集的交是闭集；
3. 有限多个闭集的并是闭集。

集合可以同时开且闭。例如 $\varnothing$ 和 $\mathbb R^n$；集合也可以既不开也不闭，例如 $[0,1)$。

### 8.3 一维开集的结构

**定理（一维开集构造定理）**  
$\mathbb R$ 中的任意开集都可以唯一地表示为至多可数个互不相交开区间的并，其中允许出现无界区间。

例如

$$
(0,1)\cup(2,3)\cup(4,+\infty)
$$

就是三个互不相交开区间的并。

这个定理把一般开集化成区间族，是定义开集“长度”并进一步构造 Lebesgue 外测度的重要基础。

---

## 9. 稠密集、完美集与 Cantor 集

### 9.1 稠密集

**定义（稠密）**  
若 $E\subseteq F$ 且

$$
\overline E=F,
$$

则称 $E$ 在 $F$ 中稠密。

等价地，$F$ 中每个非空开球都与 $E$ 相交。

例如，

$$
\overline{\mathbb Q}=\mathbb R,\qquad
\overline{\mathbb R\setminus\mathbb Q}=\mathbb R.
$$

因此有理数集和无理数集都在 $\mathbb R$ 中稠密。

### 9.2 可分性

**定义（可分空间）**  
若一个空间含有可数稠密子集，则称该空间可分。

由于 $\mathbb Q^n$ 是 $\mathbb R^n$ 的可数稠密子集，所以 $\mathbb R^n$ 是可分空间。

可分性使许多“对任意点”的问题可以通过可数个点进行逼近，这与测度论偏好可数运算的结构相适应。

### 9.3 完美集

**定义（完美集）**  
若 $E$ 是闭集并且每个点都是聚点，即

$$
E=E',
$$

则称 $E$ 为完美集。部分中文教材也称其为完备集；这里的“完美”不要与度量空间的完备性混淆。

**定理**  
$\mathbb R^n$ 中任意非空完美集都是不可数集。

闭区间 $[a,b]$ 是完美集，而

$$
\left\{\frac1k:k\in\mathbb N_+\right\}\cup\{0\}
$$

虽然是闭集，却不是完美集，因为每个 $1/k$ 都是孤立点。

### 9.4 Cantor 集

从 $[0,1]$ 出发，每一步删去各闭区间的中间三分之一：

$$
C_0=[0,1],
$$

$$
C_1=\left[0,\frac13\right]\cup
\left[\frac23,1\right],
$$

并递归定义 $C_k$。Cantor 集为

$$
C=\bigcap_{k=0}^{\infty}C_k.
$$

它具有以下性质：

1. $C$ 是闭集；
2. $C$ 是完美集；
3. $C$ 没有内点；
4. $C$ 不可数，且 $|C|=\mathfrak c$；
5. 第 $k$ 阶保留下来的 $2^k$ 个闭区间总长度为 $(2/3)^k$，趋于 $0$。

Cantor 集说明：一个集合可以不可数，却又在长度意义下极其“稀薄”。在下一篇中，将用 Lebesgue 测度把这一说法严格化。

---

## 10. 紧集

### 10.1 开覆盖

**定义（开覆盖）**  
设 $E\subseteq\mathbb R^n$。若一族开集 $\{G_\alpha\}_{\alpha\in A}$ 满足

$$
E\subseteq\bigcup_{\alpha\in A}G_\alpha,
$$

则称它是 $E$ 的一个开覆盖。

从这个开覆盖中选出的有限多个开集，如果仍能覆盖 $E$，则称为有限子覆盖。

### 10.2 紧集

**定义（紧集）**  
若 $E$ 的每个开覆盖都有有限子覆盖，则称 $E$ 为紧集。

**定理（Heine–Borel）**  
在 $\mathbb R^n$ 中，

$$
E\text{ 紧}
\quad\Longleftrightarrow\quad
E\text{ 闭且有界}.
$$

**定理（列紧性）**  
对 $E\subseteq\mathbb R^n$，下列条件等价：

1. $E$ 是紧集；
2. $E$ 中的每个点列都有收敛子列，并且子列极限属于 $E$。

**定理（Bolzano–Weierstrass）**  
$\mathbb R^n$ 中的每个有界无限集至少有一个聚点。

需要注意，“闭且有界等价于紧”是有限维欧氏空间中的结论，在一般度量空间或无限维赋范空间中未必成立。

---

## 11. Borel 集

### 11.1 $\sigma$-代数

**定义（$\sigma$-代数）**  
设 $X$ 为非空集合。若集合族 $\mathcal A\subseteq\mathcal P(X)$ 满足：

1. $X\in\mathcal A$；
2. 若 $E\in\mathcal A$，则 $E^c\in\mathcal A$；
3. 若 $E_k\in\mathcal A$，则

   $$
   \bigcup_{k=1}^{\infty}E_k\in\mathcal A,
   $$

则称 $\mathcal A$ 是 $X$ 上的一个 $\sigma$-代数。

由 De Morgan 律可知，$\sigma$-代数也对可数交封闭。

### 11.2 Borel $\sigma$-代数

**定义（Borel 集）**  
包含 $\mathbb R^n$ 中全部开集的最小 $\sigma$-代数称为 Borel $\sigma$-代数，记作

$$
\mathcal B(\mathbb R^n).
$$

其中的集合称为 Borel 集。

所有开集、闭集，以及由它们经过可数次并、交和补运算得到的集合，都是 Borel 集。

Borel 集是拓扑结构与测度结构之间的桥梁。但 Lebesgue 可测集比 Borel 集更多：它还包含所有零测集的子集。

---

## 12. 概念速查

| 概念 | 判定要点 |
|---|---|
| 可数无限集 | 能与 $\mathbb N_+$ 建立双射 |
| 内点 | 某个邻域完全包含在集合中 |
| 边界点 | 每个邻域同时碰到集合及其补集 |
| 聚点 | 每个去心邻域都碰到集合 |
| 孤立点 | 属于集合，但不是聚点 |
| 开集 | 每个点都是内点 |
| 闭集 | 包含全部聚点，或等于自身闭包 |
| 稠密集 | 闭包等于整个目标空间 |
| 完美集 | 闭且没有孤立点 |
| 紧集 | 每个开覆盖都有有限子覆盖 |
| Borel 集 | 由开集生成的 $\sigma$-代数中的集合 |

---

## 13. 常见误区

### 13.1 稠密不等于不可数

$\mathbb Q$ 在 $\mathbb R$ 中稠密，但 $\mathbb Q$ 可数。

### 13.2 闭集不一定包含内点

Cantor 集是闭集，但内部为空。单点集 $\{x\}$ 也是闭集，同样没有内点。

### 13.3 边界点不一定属于集合

对开区间 $E=(0,1)$，

$$
\partial E=\{0,1\},
$$

但 $0,1\notin E$。

### 13.4 聚点不一定属于集合

集合 $\{1/k:k\in\mathbb N_+\}$ 的聚点 $0$ 不属于原集合。

### 13.5 不相交集合之间的距离未必为正

两个集合即使不相交，其距离下确界仍可能为 $0$。只有在附加紧性等条件后，才能从不相交推出严格正距离。

### 13.6 任意并与可数并不可混淆

$\sigma$-代数只要求对可数并封闭；测度的可加性也只要求可数可加，而不是对任意指标集可加。

---

## 14. 本篇要点

1. 基数通过集合之间的双射定义，无限集合可以与自己的真子集对等。
2. 可数个至多可数集的并仍至多可数，但 $\mathbb R$ 和任意非退化区间不可数。
3. 集合列的上极限描述“出现无穷多次”，下极限描述“最终始终出现”。
4. 示性函数把集合运算和函数运算联系起来。
5. 内点、边界点、聚点与孤立点描述点相对于集合的不同位置。
6. 开集对任意并和有限交封闭；闭集对任意交和有限并封闭。
7. $\mathbb R^n$ 中紧集等价于闭有界集，也等价于列紧集。
8. Cantor 集是闭、完美、不可数但内部为空的典型点集。
9. Borel $\sigma$-代数由开集生成，是进入测度论的自然起点。

下一篇将整理 **Lebesgue 外测度、可测集、零测集以及 Lebesgue 测度的基本性质**。

---

## 参考教材

1. 江泽坚、吴智泉、纪友清，《实变函数论》，第 4 版，高等教育出版社。
2. 邓东皋、常心怡，《实变函数简明教程》，高等教育出版社。
3. H. L. Royden and P. M. Fitzpatrick, *Real Analysis*, 4th ed.
4. N. L. Carothers, *Real Analysis*.
5. G. B. Folland, *Real Analysis: Modern Techniques and Their Applications*, 2nd ed.
