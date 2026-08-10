---
title: "实变函数 02：Lebesgue 测度"
date: 2026-08-10T16:16:27+08:00
tags: ["实变函数", "Lebesgue测度", "可测集"]
description: "系统整理 Lebesgue 外测度、Carathéodory 可测性、Lebesgue 测度的可数可加性与连续性、零测集、正则性及不可测集。"
draft: false
---

长度、面积和体积都是对集合“大小”的度量。Riemann 积分主要通过区间分割处理较规则的集合，而 Lebesgue 理论希望给更广泛的点集赋予长度，并且要求这种长度与可数并、极限过程相容。

本文从外测度出发定义 Lebesgue 可测集与 Lebesgue 测度。除非特别说明，

$$
E,A,E_k\subseteq\mathbb R^n,
$$

$\lambda^n$ 表示 $\mathbb R^n$ 上的 Lebesgue 测度；在 $\mathbb R$ 上简记为 $\lambda$。

---

## 1. 长方体的体积

### 1.1 区间的长度

有界区间 $I$ 的长度定义为

$$
|I|=b-a,
$$

其中 $a,b$ 是区间端点。端点是否包含在区间中不影响长度，因此

$$
|(a,b)|=|[a,b]|=|[a,b)|=|(a,b]|=b-a.
$$

单点可以看作退化区间，其长度为 $0$。

### 1.2 $n$ 维长方体

设

$$
Q=I_1\times I_2\times\cdots\times I_n
$$

是 $\mathbb R^n$ 中的长方体，其中每个 $I_j$ 都是有界区间。定义

$$
|Q|=\prod_{j=1}^{n}|I_j|.
$$

这与通常的长度、面积和体积一致。外测度的基本思想是：用可数个长方体覆盖任意集合，并取所有覆盖总体积的下确界。

---

## 2. Lebesgue 外测度

### 2.1 定义

**定义（Lebesgue 外测度）**  
对任意 $E\subseteq\mathbb R^n$，定义

$$
\lambda^{n,*}(E)
=\inf\left\{
\sum_{k=1}^{\infty}|Q_k|:
E\subseteq\bigcup_{k=1}^{\infty}Q_k
\right\},
$$

其中 $\{Q_k\}$ 遍历所有覆盖 $E$ 的可数个开长方体族。

约定

$$
\lambda^{n,*}(\varnothing)=0.
$$

外测度对所有子集都有定义，其值属于 $[0,+\infty]$。

> “外”表示从集合外部用较简单的长方体覆盖它；取下确界表示寻找任意精细的最佳覆盖，而不要求最佳覆盖一定存在。

### 2.2 基本性质

**定理（外测度的基本性质）**

1. 空集性：

   $$
   \lambda^{n,*}(\varnothing)=0.
   $$

2. 单调性：若 $A\subseteq E$，则

   $$
   \lambda^{n,*}(A)\le\lambda^{n,*}(E).
   $$

3. 可数次次可加性：

   $$
   \lambda^{n,*}\left(\bigcup_{k=1}^{\infty}E_k\right)
   \le
   \sum_{k=1}^{\infty}\lambda^{n,*}(E_k).
   $$

4. 平移不变性：对任意 $a\in\mathbb R^n$，

   $$
   \lambda^{n,*}(E+a)=\lambda^{n,*}(E).
   $$

5. 齐次性：对任意 $c\in\mathbb R\setminus\{0\}$，

   $$
   \lambda^{n,*}(cE)=|c|^n\lambda^{n,*}(E).
   $$

外测度只有可数次可加性，不一定对不相交集合满足等号。这正是还需要筛选“可测集”的原因。

### 2.3 长方体与开集的外测度

**定理**  
对任意长方体 $Q$，

$$
\lambda^{n,*}(Q)=|Q|.
$$

在一维情形，如果开集 $G$ 分解为至多可数个互不相交开区间

$$
G=\bigcup_{k=1}^{\infty}I_k,
$$

则

$$
\lambda(G)=\sum_{k=1}^{\infty}|I_k|.
$$

---

## 3. Carathéodory 可测性

### 3.1 定义

**定义（Lebesgue 可测集）**  
集合 $E\subseteq\mathbb R^n$ 称为 Lebesgue 可测集，如果对任意 $A\subseteq\mathbb R^n$ 都有

$$
\lambda^{n,*}(A)
=\lambda^{n,*}(A\cap E)
+\lambda^{n,*}(A\setminus E).
$$

这个条件称为 Carathéodory 条件。

外测度的次可加性总能给出

$$
\lambda^{n,*}(A)
\le
\lambda^{n,*}(A\cap E)
+\lambda^{n,*}(A\setminus E),
$$

所以可测性的实质是反向不等式也成立。

> 可测集能够把任意集合 $A$ 分割成位于 $E$ 内外的两部分，并且不会产生额外的“长度损失”。

### 3.2 可测集族

全体 Lebesgue 可测集组成的集合族记作

$$
\mathcal L(\mathbb R^n).
$$

**定理**

1. $\mathcal L(\mathbb R^n)$ 是一个 $\sigma$-代数；
2. 所有开集和闭集都是 Lebesgue 可测集；
3. 所有 Borel 集都是 Lebesgue 可测集；
4. 若 $\lambda^{n,*}(N)=0$，则 $N$ 及其任意子集都可测。

因此

$$
\mathcal B(\mathbb R^n)
\subsetneq
\mathcal L(\mathbb R^n)
\subsetneq
\mathcal P(\mathbb R^n).
$$

第一个包含严格，是因为 Lebesgue $\sigma$-代数补入了所有零测集的子集；第二个包含严格，是因为存在不可测集。

### 3.3 Lebesgue 测度

**定义（Lebesgue 测度）**  
把外测度限制在 Lebesgue 可测集族上，得到 Lebesgue 测度：

$$
\lambda^n(E)=\lambda^{n,*}(E),
\qquad E\in\mathcal L(\mathbb R^n).
$$

在一维情形，通常写成 $\lambda(E)$ 或 $m(E)$。

---

## 4. 测度的基本性质

### 4.1 可数可加性

**定理（可数可加性）**  
若 $\{E_k\}$ 两两不交且每个 $E_k$ 都可测，则

$$
\lambda^n\left(\bigcup_{k=1}^{\infty}E_k\right)
=\sum_{k=1}^{\infty}\lambda^n(E_k).
$$

这是测度区别于一般外测度的核心性质。

### 4.2 有限可加性与差集

若 $E,F$ 可测且不相交，则

$$
\lambda^n(E\cup F)=\lambda^n(E)+\lambda^n(F).
$$

若 $E\subseteq F$ 且 $\lambda^n(E)<\infty$，则

$$
\lambda^n(F\setminus E)
=\lambda^n(F)-\lambda^n(E).
$$

有限性条件不能随意删除，因为 $+\infty-\infty$ 没有定义。

### 4.3 包含—排除公式

若 $E,F$ 可测，并且等式右侧没有出现未定义的 $+\infty-\infty$，则

$$
\lambda^n(E\cup F)
=\lambda^n(E)+\lambda^n(F)-\lambda^n(E\cap F).
$$

特别地，

$$
\lambda^n(E\triangle F)
=\lambda^n(E\setminus F)+\lambda^n(F\setminus E),
$$

其中 $E\triangle F$ 是对称差。

### 4.4 平移、伸缩与刚体运动

若 $E$ 可测，则对任意 $a\in\mathbb R^n$ 和 $c\in\mathbb R\setminus\{0\}$，

$$
\lambda^n(E+a)=\lambda^n(E),
$$

$$
\lambda^n(cE)=|c|^n\lambda^n(E).
$$

当 $c=0$ 时，$cE$ 至多为单点集，因而测度为 $0$。更一般地，正交变换保持 Lebesgue 测度不变。

---

## 5. 测度关于集合列的连续性

### 5.1 从下连续

**定理（测度从下连续）**  
若

$$
E_1\subseteq E_2\subseteq\cdots,
\qquad E_k\uparrow E,
$$

则

$$
\lambda^n(E)
=\lim_{k\to\infty}\lambda^n(E_k).
$$

这里不要求 $\lambda^n(E_k)$ 有限。

### 5.2 从上连续

**定理（测度从上连续）**  
若

$$
E_1\supseteq E_2\supseteq\cdots,
\qquad E_k\downarrow E,
$$

并且

$$
\lambda^n(E_1)<\infty,
$$

则

$$
\lambda^n(E)
=\lim_{k\to\infty}\lambda^n(E_k).
$$

这里的有限性条件必不可少。例如

$$
E_k=[k,+\infty)
$$

满足 $E_k\downarrow\varnothing$，但每个 $E_k$ 的测度都是 $+\infty$。

### 5.3 一般集合列的估计

对任意可测集合列 $\{E_k\}$，

$$
\lambda^n\left(\liminf_{k\to\infty}E_k\right)
\le
\liminf_{k\to\infty}\lambda^n(E_k).
$$

若存在某个可测集 $F$ 使 $E_k\subseteq F$ 且 $\lambda^n(F)<\infty$，则

$$
\limsup_{k\to\infty}\lambda^n(E_k)
\le
\lambda^n\left(\limsup_{k\to\infty}E_k\right).
$$

这些结论是 Fatou 引理在示性函数情形下的集合版本。

---

## 6. 零测集与“几乎处处”

### 6.1 零测集

**定义（零测集）**  
若

$$
\lambda^{n,*}(N)=0,
$$

则称 $N$ 为零测集。

等价地，对任意 $\varepsilon>0$，都可以用可数个开长方体 $\{Q_k\}$ 覆盖 $N$，并使

$$
\sum_{k=1}^{\infty}|Q_k|<\varepsilon.
$$

**定理**

1. 零测集的任意子集仍是零测集；
2. 可数个零测集的并仍是零测集；
3. 每个至多可数集都是零测集；
4. 零测集一定可测。

因此

$$
\lambda(\mathbb Q)=0,
$$

尽管 $\mathbb Q$ 在 $\mathbb R$ 中稠密。

### 6.2 Cantor 集

标准三分 Cantor 集 $C$ 是不可数集，但

$$
\lambda(C)=0.
$$

它说明基数与测度描述的是两种完全不同的“大小”：集合可以拥有连续统多个点，却仍然是零测集。

### 6.3 几乎处处

**定义（几乎处处）**  
若某个性质在 $E$ 上除去一个零测集后处处成立，则称该性质在 $E$ 上几乎处处成立，记作

$$
\text{a.e. on }E.
$$

例如，函数 $f,g$ 在 $E$ 上几乎处处相等，是指

$$
\lambda^n(\{x\in E:f(x)\ne g(x)\})=0.
$$

Lebesgue 积分不会区分只在零测集上取值不同的函数。

---

## 7. Lebesgue 测度的正则性

### 7.1 外正则性

**定理（外正则性）**  
若 $E$ 可测，则

$$
\lambda^n(E)
=\inf\{\lambda^n(G):E\subseteq G,\ G\text{ 为开集}\}.
$$

因此，可测集可以从外部用开集任意精确地逼近。

### 7.2 内正则性

**定理（内正则性）**  
若 $E$ 可测，则

$$
\lambda^n(E)
=\sup\{\lambda^n(K):K\subseteq E,\ K\text{ 为紧集}\}.
$$

因此，可测集也可以从内部用紧集任意精确地逼近。

### 7.3 误差形式

若 $E$ 可测且 $\lambda^n(E)<\infty$，则对任意 $\varepsilon>0$，存在开集 $G$ 和紧集 $K$，使

$$
K\subseteq E\subseteq G
$$

且

$$
\lambda^n(G\setminus E)<\varepsilon,
\qquad
\lambda^n(E\setminus K)<\varepsilon.
$$

**定理（Borel 逼近）**  
对每个 Lebesgue 可测集 $E$，都存在 $G_\delta$ 集 $G$ 和 $F_\sigma$ 集 $F$，满足

$$
F\subseteq E\subseteq G,
$$

$$
\lambda^n(G\setminus E)
=\lambda^n(E\setminus F)=0.
$$

这里 $G_\delta$ 表示可数个开集的交，$F_\sigma$ 表示可数个闭集的并。

---

## 8. 拓扑大小与测度大小

集合在拓扑意义下“稠密”或“内部为空”，与测度大小没有直接对应关系。

### 8.1 稠密零测集

$\mathbb Q$ 在 $\mathbb R$ 中稠密，但

$$
\lambda(\mathbb Q)=0.
$$

### 8.2 无处稠密的正测度集

Smith–Volterra–Cantor 集，也称胖 Cantor 集，是闭集、内部为空且无处稠密，但其测度为

$$
\frac12.
$$

它说明内部为空并不意味着测度为零。

### 8.3 开集可以有任意小的正测度

对任意 $\varepsilon>0$，存在包含 $\mathbb Q\cap[0,1]$ 的开集 $G$，使

$$
\lambda(G)<\varepsilon.
$$

因此，一个开集可以包含稠密子集，却仍具有任意小的测度。

---

## 9. 不可测集

### 9.1 Vitali 集

在 $[0,1]$ 上定义等价关系

$$
x\sim y
\quad\Longleftrightarrow\quad
x-y\in\mathbb Q.
$$

利用选择公理，从每个等价类中选取一个代表，得到 Vitali 集。

**定理**  
Vitali 集不是 Lebesgue 可测集。

不可测性的根源在于：如果同时要求所有子集可测、平移不变和可数可加，就会产生矛盾。

### 9.2 为什么实际分析中很少直接遇到不可测集

所有由开集、闭集经过可数次集合运算得到的 Borel 集都是可测的；零测集的任意子集也可测。不可测集通常需要选择公理进行非构造性选取，普通公式直接定义的集合往往属于可测范围。

---

## 10. Lebesgue 测度与 Jordan 测度

Jordan 测度只适用于有界集合，并以有限个长方体覆盖为基础；Lebesgue 测度允许可数覆盖，因此能处理更多极限构造。

**定理**  
有界集合 $E\subseteq\mathbb R^n$ Jordan 可测，当且仅当

$$
\lambda^n(\partial E)=0.
$$

此时 Jordan 测度与 Lebesgue 测度相等。

例如：

- 闭区间、长方体和边界光滑的有界区域 Jordan 可测；
- $\mathbb Q\cap[0,1]$ Lebesgue 可测且测度为 $0$，但不是 Jordan 可测；
- Smith–Volterra–Cantor 集 Lebesgue 可测，但因边界就是自身且测度为 $1/2$，所以不是 Jordan 可测。

---

## 11. 概念速查

| 概念 | 定义或核心性质 |
|---|---|
| 外测度 $\lambda^{n,*}$ | 可数长方体覆盖总体积的下确界 |
| Lebesgue 可测集 | 满足 Carathéodory 分割条件 |
| Lebesgue 测度 $\lambda^n$ | 外测度在可测集上的限制 |
| 零测集 | 外测度为 $0$ 的集合 |
| 几乎处处 | 允许在一个零测集上例外 |
| 外正则性 | 从外部用开集逼近 |
| 内正则性 | 从内部用紧集逼近 |
| Borel 集 | 由开集生成的 $\sigma$-代数中的集合 |
| Vitali 集 | 典型的不可测集 |

---

## 12. 常见误区

### 12.1 外测度有限不等于可测

外测度对任意集合都有定义。即使 $\lambda^{n,*}(E)<\infty$，也不能据此断定 $E$ 可测。

### 12.2 测度为零不等于集合为空

单点集、可数集以及 Cantor 集都可以非空甚至不可数，但测度为零。

### 12.3 稠密不等于测度大

$\mathbb Q$ 在 $\mathbb R$ 中稠密，却是零测集。

### 12.4 测度可数可加不等于任意可加

每个单点集 $\{x\}$ 的测度都是 $0$，但

$$
[0,1]=\bigcup_{x\in[0,1]}\{x\}
$$

是不可数并，而 $\lambda([0,1])=1$。

### 12.5 从上连续需要有限性条件

若 $E_k\downarrow E$，只有在某个初始集合具有有限测度时，才能保证

$$
\lambda^n(E_k)\to\lambda^n(E).
$$

---

## 13. 本篇要点

1. 外测度通过可数长方体覆盖定义，并对所有集合有意义。
2. Carathéodory 条件筛选出 Lebesgue 可测集。
3. Lebesgue 测度具有可数可加性、平移不变性和伸缩齐次性。
4. 测度对单调集合列具有从下连续性；从上连续需要有限测度条件。
5. 可数集和 Cantor 集都是零测集，零测集的任意子集仍可测。
6. “几乎处处”允许忽略零测集，是可测函数和积分理论中的基本语言。
7. 正则性保证可测集可以用开集、闭集和紧集进行测度逼近。
8. 拓扑意义的稠密、无处稠密与测度大小没有直接对应关系。
9. Vitali 集说明不能给 $\mathbb R^n$ 的所有子集同时赋予满足自然要求的测度。

下一篇将整理 **可测函数、简单函数、几乎处处收敛、依测度收敛以及 Egorov、Lusin 定理**。

---

## 参考教材

1. 江泽坚、吴智泉、纪友清，《实变函数论》，第 4 版，高等教育出版社。
2. 邓东皋、常心怡，《实变函数简明教程》，高等教育出版社。
3. H. L. Royden and P. M. Fitzpatrick, *Real Analysis*, 4th ed.
4. G. B. Folland, *Real Analysis: Modern Techniques and Their Applications*, 2nd ed.
5. D. L. Cohn, *Measure Theory*, 2nd ed.
