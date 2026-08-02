---
title: "数学分析 01：实数集与函数"
date: 2026-08-02
tags: ["数学分析", "实数理论", "函数"]
description: "系统整理集合与映射、实数的序结构、绝对值、区间与邻域、上下界、确界原理以及实函数的基本性质。"
draft: false
---

数学分析研究极限过程，而极限理论建立在实数系的序结构与完备性之上。本系列沿国内数学分析教材常见的“实数集与函数—数列极限—函数极限与连续—微分—积分”主线展开，同时吸收英文实分析教材对实数完备性的强调。

本文约定

$$
\mathbb N=\{1,2,3,\ldots\},\qquad
\mathbb Z\subset\mathbb Q\subset\mathbb R.
$$

---

## 1. 集合与基本运算

### 1.1 集合、子集与相等

**定义（子集）**  
设 $A,B$ 为集合。若 $A$ 的每个元素都属于 $B$，则称 $A$ 是 $B$ 的子集，记作

$$
A\subseteq B.
$$

若 $A\subseteq B$ 且 $A\ne B$，则称 $A$ 是 $B$ 的真子集。

**定理（集合相等的判定）**

$$
A=B\quad\Longleftrightarrow\quad A\subseteq B\ \text{且}\ B\subseteq A.
$$

空集记作 $\varnothing$。对任意集合 $A$，都有 $\varnothing\subseteq A$。

### 1.2 集合运算

设 $A,B$ 是全集 $X$ 的子集。

| 运算 | 记号 | 定义 |
|---|---|---|
| 并集 | $A\cup B$ | 属于 $A$ 或属于 $B$ 的元素 |
| 交集 | $A\cap B$ | 同时属于 $A$ 和 $B$ 的元素 |
| 差集 | $A\setminus B$ | 属于 $A$ 但不属于 $B$ 的元素 |
| 补集 | $A^c=X\setminus A$ | 全集 $X$ 中不属于 $A$ 的元素 |
| 对称差 | $A\triangle B$ | 只属于 $A,B$ 中一个集合的元素 |

**定理（De Morgan 律）**

$$
(A\cup B)^c=A^c\cap B^c,\qquad
(A\cap B)^c=A^c\cup B^c.
$$

对于集合族 $\{A_\lambda\}_{\lambda\in\Lambda}$，有

$$
\left(\bigcup_{\lambda\in\Lambda}A_\lambda\right)^c
=\bigcap_{\lambda\in\Lambda}A_\lambda^c,\qquad
\left(\bigcap_{\lambda\in\Lambda}A_\lambda\right)^c
=\bigcup_{\lambda\in\Lambda}A_\lambda^c.
$$

### 1.3 Cartesian 积

**定义（Cartesian 积）**

$$
A\times B=\{(a,b):a\in A,\ b\in B\}.
$$

一般来说 $A\times B\ne B\times A$。实平面可写成 $\mathbb R^2=\mathbb R\times\mathbb R$。

---

## 2. 映射与函数

### 2.1 映射

**定义（映射）**  
设 $X,Y$ 为非空集合。若某个对应法则 $f$ 使每个 $x\in X$ 都有唯一的 $y\in Y$ 与之对应，则称 $f$ 是从 $X$ 到 $Y$ 的映射，记作

$$
f:X\to Y,\qquad y=f(x).
$$

其中：

- $X$ 称为定义域；
- $Y$ 称为陪域；
- $f(X)=\{f(x):x\in X\}$ 称为值域；
- 总有 $f(X)\subseteq Y$，但未必 $f(X)=Y$。

> 陪域是映射定义的一部分，值域则是函数实际取得的值所组成的集合。

### 2.2 单射、满射与双射

**定义**

- 若 $f(x_1)=f(x_2)$ 必推出 $x_1=x_2$，则 $f$ 为**单射**；
- 若对每个 $y\in Y$，都存在 $x\in X$ 使 $f(x)=y$，则 $f$ 为**满射**；
- 既是单射又是满射的映射称为**双射**。

**定理（反函数存在条件）**  
映射 $f:X\to Y$ 存在反函数 $f^{-1}:Y\to X$，当且仅当 $f$ 是双射。

### 2.3 复合映射

若 $f:X\to Y$，$g:Y\to Z$，则复合映射定义为

$$
g\circ f:X\to Z,\qquad (g\circ f)(x)=g(f(x)).
$$

复合运算满足结合律 $h\circ(g\circ f)=(h\circ g)\circ f$，但一般不满足交换律。

### 2.4 像与原像

设 $A\subseteq X$，$B\subseteq Y$。定义

$$
f(A)=\{f(x):x\in A\},\qquad
f^{-1}(B)=\{x\in X:f(x)\in B\}.
$$

这里的 $f^{-1}(B)$ 表示集合 $B$ 的原像，不要求 $f$ 存在反函数。

**定理（原像与集合运算）**

$$
\begin{aligned}
f^{-1}(B_1\cup B_2)&=f^{-1}(B_1)\cup f^{-1}(B_2),\\
f^{-1}(B_1\cap B_2)&=f^{-1}(B_1)\cap f^{-1}(B_2),\\
f^{-1}(Y\setminus B)&=X\setminus f^{-1}(B).
\end{aligned}
$$

---

## 3. 实数系

### 3.1 数系之间的关系

常用数系包括

$$
\mathbb N\subset\mathbb Z\subset\mathbb Q\subset\mathbb R.
$$

- $\mathbb N$：自然数集；
- $\mathbb Z$：整数集；
- $\mathbb Q$：有理数集；
- $\mathbb R\setminus\mathbb Q$：无理数集；
- $\mathbb R$：实数集。

有理数可写成

$$
\mathbb Q=\left\{\frac pq:p\in\mathbb Z,\ q\in\mathbb N\right\}.
$$

### 3.2 有序域

**定义（有序域）**  
若一个数系同时具有域的代数运算和与运算相容的全序关系，则称其为有序域。

实数的序关系满足：

1. 任意 $x,y\in\mathbb R$，恰有 $x<y$、$x=y$、$x>y$ 之一成立；
2. 若 $x<y$ 且 $y<z$，则 $x<z$；
3. 若 $x<y$，则对任意 $z\in\mathbb R$，有 $x+z<y+z$；
4. 若 $x<y$ 且 $z>0$，则 $xz<yz$。

有理数 $\mathbb Q$ 也是有序域，但它不是完备的。例如集合

$$
\{q\in\mathbb Q:q^2<2\}
$$

在 $\mathbb Q$ 中没有上确界。

### 3.3 完备有序域

**实数系的刻画**  
实数系 $\mathbb R$ 是完备有序域。更准确地说，在保持加法、乘法和序关系的同构意义下，完备有序域是唯一的。

“完备”排除了实数轴上的空隙。它是实数区别于有理数的核心性质，也是极限存在性定理的基础。

---

## 4. 绝对值与距离

### 4.1 绝对值

**定义**

$$
|x|=
\begin{cases}
x, & x\ge 0,\\
-x, & x<0.
\end{cases}
$$

常用性质如下：

$$
|x|\ge 0,\qquad |x|=0\Longleftrightarrow x=0,
$$

$$
|xy|=|x||y|,\qquad
\left|\frac{x}{y}\right|=\frac{|x|}{|y|}\quad(y\ne0),
$$

$$
|x+y|\le |x|+|y|,\qquad
\bigl||x|-|y|\bigr|\le |x-y|.
$$

最后两个不等式分别称为三角不等式与反三角不等式。

### 4.2 绝对值不等式

设 $a>0$，则

$$
|x|<a\Longleftrightarrow -a<x<a,
$$

$$
|x|\le a\Longleftrightarrow -a\le x\le a,
$$

$$
|x|>a\Longleftrightarrow x<-a\ \text{或}\ x>a.
$$

更一般地，

$$
|x-x_0|<\delta
\Longleftrightarrow
x_0-\delta<x<x_0+\delta.
$$

因此 $|x-y|$ 可以理解为数轴上两点 $x,y$ 之间的距离。

---

## 5. 区间与邻域

### 5.1 区间

设 $a<b$。

| 名称 | 记号 | 集合表示 |
|---|---|---|
| 开区间 | $(a,b)$ | $\{x:a<x<b\}$ |
| 闭区间 | $[a,b]$ | $\{x:a\le x\le b\}$ |
| 左闭右开 | $[a,b)$ | $\{x:a\le x<b\}$ |
| 左开右闭 | $(a,b]$ | $\{x:a<x\le b\}$ |
| 无界区间 | $(a,+\infty)$ | $\{x:x>a\}$ |

符号 $+\infty$ 和 $-\infty$ 不是实数，因此无穷端点一侧总使用圆括号。

### 5.2 邻域

**定义（邻域）**  
设 $\delta>0$。点 $a$ 的 $\delta$-邻域为

$$
U(a,\delta)=\{x:|x-a|<\delta\}=(a-\delta,a+\delta).
$$

**定义（去心邻域）**

$$
\mathring U(a,\delta)
=\{x:0<|x-a|<\delta\}
=(a-\delta,a)\cup(a,a+\delta).
$$

去心邻域排除了中心点 $a$，它将在函数极限的定义中频繁出现。

相应地，还可以定义左邻域和右邻域：

$$
U^-(a,\delta)=(a-\delta,a),\qquad
U^+(a,\delta)=(a,a+\delta).
$$

---

## 6. 有界集、最大值与最小值

设 $A\subseteq\mathbb R$ 且 $A\ne\varnothing$。

### 6.1 上界与下界

**定义（上界）**  
若存在 $M\in\mathbb R$，使得对所有 $x\in A$ 都有 $x\le M$，则称 $M$ 是 $A$ 的一个上界，并称 $A$ 有上界。

**定义（下界）**  
若存在 $m\in\mathbb R$，使得对所有 $x\in A$ 都有 $m\le x$，则称 $m$ 是 $A$ 的一个下界。

集合既有上界又有下界时，称为有界集。等价地，存在 $K>0$ 使

$$
|x|\le K,\qquad \forall x\in A.
$$

> 上界或下界通常不唯一。例如 $(0,1)$ 的每个 $M\ge1$ 都是上界。

### 6.2 最大值与最小值

**定义（最大值）**  
若 $M\in A$ 且对所有 $x\in A$ 都有 $x\le M$，则称 $M$ 是 $A$ 的最大值，记作 $M=\max A$。

最小值 $\min A$ 类似定义。最大值和最小值若存在，则必定唯一，并且必须属于集合本身。

---

## 7. 上确界、下确界与确界原理

### 7.1 上确界与下确界

**定义（上确界）**  
数 $s\in\mathbb R$ 称为 $A$ 的上确界，如果：

1. $s$ 是 $A$ 的上界；
2. $s$ 小于或等于 $A$ 的每一个上界。

记作 $s=\sup A$。

**定义（下确界）**  
数 $t\in\mathbb R$ 称为 $A$ 的下确界，如果：

1. $t$ 是 $A$ 的下界；
2. $t$ 大于或等于 $A$ 的每一个下界。

记作 $t=\inf A$。确界如果存在则必定唯一，但不一定属于集合。

**定理（上确界的 $\varepsilon$ 刻画）**  
设 $A\ne\varnothing$ 且有上界。数 $s=\sup A$ 当且仅当：

1. 对所有 $x\in A$，有 $x\le s$；
2. 对任意 $\varepsilon>0$，都存在 $x_\varepsilon\in A$，使 $s-\varepsilon<x_\varepsilon$。

第二条表示：虽然 $s$ 未必属于 $A$，但集合中的点可以任意接近 $s$。下确界有完全类似的刻画。

### 7.2 例子

**例 1**  
对 $A=(0,1)$，有

$$
\inf A=0,\qquad \sup A=1,
$$

但 $A$ 没有最小值和最大值。

**例 2**  
令

$$
B=\left\{1-\frac1n:n\in\mathbb N\right\}.
$$

集合 $B$ 的前几项为 $0,\frac12,\frac23,\frac34,\ldots$，并且

$$
\min B=0,\qquad \sup B=1.
$$

由于每个元素都严格小于 $1$，所以 $B$ 没有最大值。

**例 3**  
令

$$
C=\{x\in\mathbb R:x^2<2\}=(-\sqrt2,\sqrt2).
$$

因此

$$
\inf C=-\sqrt2,\qquad \sup C=\sqrt2,
$$

且 $C$ 没有最大值或最小值。

### 7.3 确界原理

**定理（确界原理）**  
实数集的任意非空且有上界的子集都存在上确界。

等价地，实数集的任意非空且有下界的子集都存在下确界。

确界原理是实数完备性的基本表达之一。后续将遇到的单调收敛定理、区间套定理、Cauchy 收敛准则和 Bolzano–Weierstrass 定理，都与这一完备性密切相关。

---

## 8. 实数完备性的常用推论

### 8.1 Archimedes 性质

**定理（Archimedes 性质）**  
对任意 $x\in\mathbb R$，存在 $n\in\mathbb N$，使得 $n>x$。

它等价于：对任意 $\varepsilon>0$，存在 $n\in\mathbb N$，使得

$$
0<\frac1n<\varepsilon.
$$

这条性质说明自然数在实数中没有上界，而 $1/n$ 可以任意接近 $0$。

### 8.2 整数部分定理

**定理（整数部分）**  
对任意 $x\in\mathbb R$，存在唯一的 $m\in\mathbb Z$，使得

$$
m\le x<m+1.
$$

这个整数就是 $\lfloor x\rfloor$。

### 8.3 稠密性

**定理（有理数与无理数的稠密性）**  
若 $a,b\in\mathbb R$ 且 $a<b$，则存在有理数 $r$ 和无理数 $s$，使得

$$
a<r<b,\qquad a<s<b.
$$

因此任意两个不同实数之间既有有理数，也有无理数，而且两者都有无穷多个。

---

## 9. 实函数的基本性质

设 $D\subseteq\mathbb R$，$f:D\to\mathbb R$。

### 9.1 有界性

**定义（有界函数）**  
若存在 $M>0$，使得

$$
|f(x)|\le M,\qquad \forall x\in D,
$$

则称 $f$ 在 $D$ 上有界。

分别地：

- 若存在 $M$ 使 $f(x)\le M$，则称 $f$ 有上界；
- 若存在 $m$ 使 $m\le f(x)$，则称 $f$ 有下界。

函数 $f$ 在 $D$ 上有界，当且仅当值域 $f(D)$ 是有界集。

### 9.2 单调性

对任意 $x_1,x_2\in D$ 且 $x_1<x_2$：

- 若 $f(x_1)\le f(x_2)$，称 $f$ 单调增加；
- 若 $f(x_1)<f(x_2)$，称 $f$ 严格增加；
- 若 $f(x_1)\ge f(x_2)$，称 $f$ 单调减少；
- 若 $f(x_1)>f(x_2)$，称 $f$ 严格减少。

单调增加和单调减少统称单调函数。不同教材对“单调”是否默认严格可能有不同约定，使用时应明确不等号类型。

**定理**  
严格单调函数必为单射，因此在其值域上存在反函数；其反函数与原函数具有相同的单调方向。

### 9.3 奇偶性

若定义域 $D$ 关于原点对称，则：

- 当 $f(-x)=f(x)$ 时，称 $f$ 为偶函数；
- 当 $f(-x)=-f(x)$ 时，称 $f$ 为奇函数。

偶函数的图像关于 $y$ 轴对称，奇函数的图像关于原点中心对称。

### 9.4 周期性

**定义（周期函数）**  
若存在 $T\ne0$，使得对所有适用的 $x$ 都有

$$
f(x+T)=f(x),
$$

则称 $f$ 为周期函数，$T$ 为其一个周期。

若正周期中存在最小者，则称其为最小正周期。周期函数不一定存在最小正周期；例如常值函数的任意非零实数都是周期。

---

## 10. 概念之间的区别

| 概念 | 是否要求属于集合 | 含义 |
|---|---:|---|
| 上界 | 否 | 大于或等于集合中所有元素 |
| 最大值 | 是 | 集合中最大的元素 |
| 上确界 | 否 | 所有上界中最小的一个 |
| 下界 | 否 | 小于或等于集合中所有元素 |
| 最小值 | 是 | 集合中最小的元素 |
| 下确界 | 否 | 所有下界中最大的一个 |

特别地，

$$
\max A\ \text{存在}\Longrightarrow \max A=\sup A,
$$

但 $\sup A$ 存在并不保证 $\max A$ 存在。

---

## 11. 本篇要点

1. 函数是带有定义域和陪域的映射，值域不一定等于陪域。
2. 实数不仅是有序域，还是完备有序域。
3. 绝对值表示实数轴上的距离，邻域可用绝对值不等式描述。
4. 最大值必须属于集合，确界不一定属于集合。
5. 确界原理是实数完备性的核心表达。
6. Archimedes 性质和有理数、无理数的稠密性是常用基础结论。
7. 后续数列极限的存在性理论依赖实数的完备性。

下一篇将整理**数列极限的定义、收敛数列的基本性质以及常用判定方法**。

---

## 参考教材

1. 华东师范大学数学系，《数学分析（上册）》，高等教育出版社。
2. Walter Rudin, *Principles of Mathematical Analysis*, 3rd ed.
3. Stephen Abbott, *Understanding Analysis*, 2nd ed.
4. Terence Tao, *Analysis I*, 4th ed.
