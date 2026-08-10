---
title: "实变函数 04：Lebesgue 积分"
date: 2026-08-10T16:21:52+08:00
tags: ["实变函数", "Lebesgue积分", "积分收敛定理"]
description: "从非负简单函数出发定义 Lebesgue 积分，整理可积函数的性质、Fatou 引理、单调与控制收敛定理、积分绝对连续性及 Tonelli–Fubini 定理。"
draft: false
---

Riemann 积分沿定义域分割区间，Lebesgue 积分则按照函数值的层次组织点集并测量其大小。这样的定义对函数列极限更加稳定，是现代分析、概率论和偏微分方程中的基本工具。

本文设 $E\subseteq\mathbb R^n$ 为 Lebesgue 可测集，$\lambda^n$ 为 Lebesgue 测度。积分

$$
\int_E f\,d\lambda^n
$$

也常简记为 $\int_E f$ 或 $\int_E f(x)\,dx$。

---

## 1. 非负简单函数的积分

### 1.1 标准表示

设 $\varphi:E\to[0,+\infty)$ 是非负简单函数，其标准表示为

$$
\varphi
=\sum_{j=1}^{m}a_j\mathbf 1_{E_j},
$$

其中

$$
a_j\ge0,
$$

$E_1,\ldots,E_m$ 两两不交、可测，并且其并为 $E$。

### 1.2 积分定义

**定义（非负简单函数的积分）**

$$
\int_E\varphi\,d\lambda^n
=\sum_{j=1}^{m}a_j\lambda^n(E_j).
$$

积分值可以是 $+\infty$。约定

$$
0\cdot(+\infty)=0.
$$

这个定义与简单函数采用哪一种表示无关。

### 1.3 在子集上的积分

若 $A\subseteq E$ 可测，则定义

$$
\int_A\varphi\,d\lambda^n
=\int_E\varphi\mathbf 1_A\,d\lambda^n.
$$

因此

$$
\int_A\varphi\,d\lambda^n
=\sum_{j=1}^{m}a_j\lambda^n(A\cap E_j).
$$

特别地，

$$
\int_E\mathbf 1_A\,d\lambda^n
=\lambda^n(A)
\qquad(A\subseteq E).
$$

积分可以看成测度从集合示性函数向一般函数的推广。

---

## 2. 非负可测函数的积分

### 2.1 定义

设

$$
f:E\to[0,+\infty]
$$

可测。

**定义（非负可测函数的积分）**

$$
\int_E f\,d\lambda^n
=\sup\left\{
\int_E\varphi\,d\lambda^n:
0\le\varphi\le f,\ 
\varphi\text{ 为简单函数}
\right\}.
$$

这个积分总有定义，但允许取值 $+\infty$。

### 2.2 用简单函数列计算

若非负简单函数列满足

$$
0\le\varphi_k\uparrow f,
$$

则

$$
\int_E f\,d\lambda^n
=\lim_{k\to\infty}\int_E\varphi_k\,d\lambda^n.
$$

结果与所选取的单调逼近序列无关。

### 2.3 单调收敛定理

**定理（Beppo Levi 单调收敛定理）**  
若 $\{f_k\}$ 是非负可测函数列，并且

$$
f_k(x)\uparrow f(x)
\quad\text{a.e. on }E,
$$

则

$$
\int_E f\,d\lambda^n
=\lim_{k\to\infty}\int_E f_k\,d\lambda^n.
$$

两侧都允许取 $+\infty$。

这个定理说明：对非负递增函数列，可以直接交换极限与积分，而不需要预先知道积分有限。

### 2.4 非负函数级数

若每个 $f_k\ge0$ 且可测，则

$$
\int_E\sum_{k=1}^{\infty}f_k\,d\lambda^n
=\sum_{k=1}^{\infty}\int_E f_k\,d\lambda^n.
$$

这是单调收敛定理应用于部分和

$$
S_m=\sum_{k=1}^{m}f_k
$$

得到的结论。

---

## 3. 一般可测函数的积分

### 3.1 正部与负部

对扩充实值可测函数 $f$，定义

$$
f^+=\max\{f,0\},
\qquad
f^-=\max\{-f,0\}.
$$

则

$$
f=f^+-f^-,
\qquad
|f|=f^++f^-.
$$

### 3.2 Lebesgue 积分

若

$$
\int_E f^+\,d\lambda^n
$$

与

$$
\int_E f^-\,d\lambda^n
$$

至少有一个有限，则定义

$$
\int_E f\,d\lambda^n
=\int_E f^+\,d\lambda^n
-\int_E f^-\,d\lambda^n.
$$

如果正部与负部的积分都是 $+\infty$，则出现未定义形式

$$
+\infty-\infty,
$$

此时称 $f$ 的 Lebesgue 积分不存在。

### 3.3 可积函数

**定义（Lebesgue 可积）**  
若

$$
\int_E|f|\,d\lambda^n<\infty,
$$

则称 $f$ 在 $E$ 上 Lebesgue 可积，也称绝对可积，记作

$$
f\in L^1(E).
$$

**定理**  
下列条件等价：

1. $f\in L^1(E)$；
2. $\int_E f^+<\infty$ 且 $\int_E f^-<\infty$；
3. $\int_E f$ 是有限实数，并且正负两部分的积分均有意义。

Lebesgue 可积函数必定几乎处处取有限值。

---

## 4. Lebesgue 积分的基本性质

设 $f,g\in L^1(E)$，$a,b\in\mathbb R$。

### 4.1 线性

$$
\int_E(af+bg)\,d\lambda^n
=a\int_E f\,d\lambda^n
+b\int_E g\,d\lambda^n.
$$

### 4.2 单调性

若

$$
f\le g\quad\text{a.e.},
$$

则

$$
\int_E f\,d\lambda^n
\le
\int_E g\,d\lambda^n.
$$

### 4.3 绝对值不等式

$$
\left|\int_E f\,d\lambda^n\right|
\le
\int_E|f|\,d\lambda^n.
$$

更一般地，

$$
\left|\int_E f-\int_E g\right|
\le
\int_E|f-g|.
$$

### 4.4 零积分判据

若 $f\ge0$，则

$$
\int_E f\,d\lambda^n=0
\quad\Longleftrightarrow\quad
f=0\quad\text{a.e. on }E.
$$

因此，若 $f=g$ 几乎处处，则

$$
\int_E f\,d\lambda^n
=\int_E g\,d\lambda^n
$$

只要其中一侧有定义。

### 4.5 对积分区域的可数可加性

若 $\{E_k\}$ 两两不交、可测，且

$$
E=\bigcup_{k=1}^{\infty}E_k,
$$

则对非负可测函数 $f$，

$$
\int_E f\,d\lambda^n
=\sum_{k=1}^{\infty}\int_{E_k}f\,d\lambda^n.
$$

当 $f\in L^1(E)$ 时，该等式也成立，并且右侧级数绝对收敛。

---

## 5. 基本积分例子

### 5.1 示性函数与简单函数

若 $A\subseteq E$ 可测，则

$$
\int_E\mathbf 1_A\,d\lambda^n
=\lambda^n(A).
$$

若

$$
\varphi=\sum_{j=1}^{m}a_j\mathbf 1_{E_j},
$$

则

$$
\int_E\varphi\,d\lambda^n
=\sum_{j=1}^{m}a_j\lambda^n(E_j).
$$

### 5.2 Dirichlet 函数

在 $[0,1]$ 上，

$$
f=\mathbf 1_{\mathbb Q}
$$

几乎处处等于 $0$，所以

$$
\int_0^1\mathbf 1_{\mathbb Q}(x)\,dx=0.
$$

它不是 Riemann 可积函数，却是 Lebesgue 可积函数。

### 5.3 幂函数在原点附近

对实数 $p$，

$$
\int_0^1 x^{-p}\,dx
\begin{cases}
<\infty, & p<1,\\
=+\infty, & p\ge1.
\end{cases}
$$

当 $p<1$ 时，

$$
\int_0^1x^{-p}\,dx=\frac1{1-p}.
$$

### 5.4 幂函数在无穷远处

$$
\int_1^\infty x^{-p}\,dx
\begin{cases}
<\infty, & p>1,\\
=+\infty, & p\le1.
\end{cases}
$$

当 $p>1$ 时，

$$
\int_1^\infty x^{-p}\,dx=\frac1{p-1}.
$$

---

## 6. Fatou 引理

### 6.1 非负形式

**定理（Fatou 引理）**  
若 $f_k:E\to[0,+\infty]$ 可测，则

$$
\int_E\liminf_{k\to\infty}f_k\,d\lambda^n
\le
\liminf_{k\to\infty}
\int_E f_k\,d\lambda^n.
$$

Fatou 引理只给出一个方向的不等式。它表示：函数列的“极限下方”不会产生超过积分下极限的质量。

### 6.2 有可积下界的形式

若存在 $g\in L^1(E)$，使

$$
f_k\ge g\quad\text{a.e.},
$$

则仍有

$$
\int_E\liminf_{k\to\infty}f_k
\le
\liminf_{k\to\infty}\int_E f_k.
$$

### 6.3 反向 Fatou 引理

若存在 $g\in L^1(E)$，使

$$
f_k\le g\quad\text{a.e.},
$$

则

$$
\limsup_{k\to\infty}\int_E f_k
\le
\int_E\limsup_{k\to\infty}f_k.
$$

---

## 7. 控制收敛定理

**定理（Lebesgue 控制收敛定理）**  
设 $f_k$ 可测，并且

$$
f_k\to f\quad\text{a.e. on }E.
$$

若存在 $g\in L^1(E)$，使对所有 $k$ 都有

$$
|f_k|\le g\quad\text{a.e.},
$$

则：

1. $f\in L^1(E)$；
2. $f_k\to f$ 在 $L^1$ 意义下成立：

   $$
   \int_E|f_k-f|\,d\lambda^n\to0;
   $$

3. 可以交换极限与积分：

   $$
   \lim_{k\to\infty}\int_E f_k\,d\lambda^n
   =
   \int_E f\,d\lambda^n.
   $$

控制函数 $g$ 必须可积。仅仅存在统一常数上界，在无限测度集上通常不够。

### 7.1 有界收敛定理

**定理（有界收敛定理）**  
若 $\lambda^n(E)<\infty$，$f_k\to f$ 几乎处处，并且存在常数 $M$ 使

$$
|f_k|\le M,
$$

则

$$
\int_E f_k\to\int_E f.
$$

这是控制收敛定理取

$$
g=M\mathbf 1_E
$$

得到的推论。

### 7.2 逐项积分

若

$$
\sum_{k=1}^{\infty}\int_E|f_k|\,d\lambda^n<\infty,
$$

则级数

$$
\sum_{k=1}^{\infty}f_k(x)
$$

几乎处处绝对收敛，其和函数可积，并且

$$
\int_E\sum_{k=1}^{\infty}f_k\,d\lambda^n
=
\sum_{k=1}^{\infty}\int_E f_k\,d\lambda^n.
$$

---

## 8. 三个核心结论的区别

| 结论 | 函数列条件 | 主要结论 |
|---|---|---|
| 单调收敛定理 | $0\le f_k\uparrow f$ | $\int f_k\uparrow\int f$ |
| Fatou 引理 | $f_k\ge0$ | $\int\liminf f_k\le\liminf\int f_k$ |
| 控制收敛定理 | $f_k\to f$ a.e. 且 $|f_k|\le g\in L^1$ | $\int|f_k-f|\to0$，积分与极限可交换 |

使用时可以按以下顺序判断：

1. 非负且单调增加：优先使用单调收敛定理；
2. 只有非负性，没有单调性：先考虑 Fatou 引理；
3. 有几乎处处极限和统一可积控制函数：使用控制收敛定理。

---

## 9. 积分的绝对连续性

**定理（Lebesgue 积分的绝对连续性）**  
若 $f\in L^1(E)$，则对任意 $\varepsilon>0$，存在 $\delta>0$，使得对任意可测集 $A\subseteq E$，只要

$$
\lambda^n(A)<\delta,
$$

就有

$$
\int_A|f|\,d\lambda^n<\varepsilon.
$$

这个结论说明：可积函数在小测度集合上的积分必然很小。

但不能简单用

$$
\int_A|f|\le M\lambda^n(A)
$$

来解释一般情形，因为可积函数未必有界。

### 9.1 截断尾部

若 $f\in L^1(E)$，则

$$
\int_{\{|f|>M\}}|f|\,d\lambda^n
\to0
\qquad(M\to\infty).
$$

这说明可积函数可以通过有界截断

$$
f_M=\max\{-M,\min\{f,M\}\}
$$

在 $L^1$ 意义下逼近。

---

## 10. Markov–Chebyshev 不等式

**定理（Markov–Chebyshev）**  
若 $f$ 可测、$f\ge0$，则对任意 $a>0$，

$$
\lambda^n(\{f\ge a\})
\le
\frac1a\int_E f\,d\lambda^n.
$$

对一般可测函数，

$$
\lambda^n(\{|f|\ge a\})
\le
\frac1a\int_E|f|\,d\lambda^n.
$$

更一般地，若 $p>0$，则

$$
\lambda^n(\{|f|\ge a\})
\le
\frac1{a^p}\int_E|f|^p\,d\lambda^n.
$$

### 10.1 $L^1$ 收敛蕴含依测度收敛

定义

$$
\|f\|_1=\int_E|f|\,d\lambda^n.
$$

若

$$
\|f_k-f\|_1\to0,
$$

则对任意 $\varepsilon>0$，

$$
\lambda^n(\{|f_k-f|\ge\varepsilon\})
\le
\frac1\varepsilon\|f_k-f\|_1
\to0.
$$

所以

$$
L^1\text{ 收敛}
\Longrightarrow
\text{依测度收敛}.
$$

反向一般不成立。

---

## 11. 层析公式

**定理（Cavalieri 原理、层析公式）**  
若 $f:E\to[0,+\infty]$ 可测，则

$$
\int_E f(x)\,d\lambda^n(x)
=
\int_0^\infty
\lambda^n(\{x\in E:f(x)>t\})\,dt.
$$

若 $f$ 为一般实值可测函数，则

$$
\int_E|f|\,d\lambda^n
=
\int_0^\infty
\lambda^n(\{|f|>t\})\,dt.
$$

层析公式把函数积分表示为所有水平集测度的积分，直接体现了 Lebesgue 积分“按函数值分层”的思想。

---

## 12. 与 Riemann 积分的关系

### 12.1 有界闭区间上的比较

**定理**  
若有界函数 $f:[a,b]\to\mathbb R$ Riemann 可积，则 $f$ Lebesgue 可积，并且两种积分相等：

$$
\int_a^b f(x)\,dx_{\mathrm R}
=
\int_{[a,b]}f\,d\lambda.
$$

### 12.2 Lebesgue 判别准则

**定理（Riemann 可积的 Lebesgue 判据）**  
有界函数 $f:[a,b]\to\mathbb R$ Riemann 可积，当且仅当它的间断点集合是零测集。

因此：

- 连续函数 Riemann 可积；
- 单调函数只有至多可数个间断点，所以 Riemann 可积；
- Dirichlet 函数处处不连续，所以不 Riemann 可积；
- Dirichlet 函数却几乎处处为零，所以 Lebesgue 积分为零。

### 12.3 反常积分

若反常 Riemann 积分绝对收敛，则相应函数 Lebesgue 可积，且两种积分相等。

条件收敛的反常积分未必是 Lebesgue 积分。例如

$$
\int_0^\infty\frac{\sin x}{x}\,dx
$$

作为反常积分收敛，但

$$
\int_0^\infty\left|\frac{\sin x}{x}\right|dx=+\infty.
$$

因此 $\sin x/x$ 在 $(0,\infty)$ 上不属于 $L^1$。

---

## 13. 乘积测度与截面

把

$$
\mathbb R^{p+q}
=\mathbb R^p\times\mathbb R^q
$$

中的点写成 $(x,y)$。

### 13.1 乘积集合

若 $A\subseteq\mathbb R^p$、$B\subseteq\mathbb R^q$ 可测，则 $A\times B$ 可测，并且

$$
\lambda^{p+q}(A\times B)
=\lambda^p(A)\lambda^q(B),
$$

其中乘积按非负扩充实数的约定理解。

### 13.2 集合与函数的截面

对 $E\subseteq\mathbb R^{p+q}$，定义固定 $x$ 的截面

$$
E_x=\{y\in\mathbb R^q:(x,y)\in E\}.
$$

对函数 $f(x,y)$，定义

$$
f_x(y)=f(x,y),
\qquad
f^y(x)=f(x,y).
$$

若 $E$ 或 $f$ Lebesgue 可测，则相应截面在几乎所有参数处可测。

---

## 14. Tonelli 与 Fubini 定理

### 14.1 Tonelli 定理

**定理（Tonelli）**  
若

$$
f:\mathbb R^p\times\mathbb R^q
\to[0,+\infty]
$$

可测，则

$$
\int_{\mathbb R^{p+q}}f(x,y)\,d(x,y)
=
\int_{\mathbb R^p}
\left(
\int_{\mathbb R^q}f(x,y)\,dy
\right)dx
$$

并且

$$
=
\int_{\mathbb R^q}
\left(
\int_{\mathbb R^p}f(x,y)\,dx
\right)dy.
$$

等式允许取 $+\infty$。

Tonelli 定理适用于非负函数，不要求预先知道积分有限。

### 14.2 Fubini 定理

**定理（Fubini）**  
若 $f$ 可测且绝对可积：

$$
\int_{\mathbb R^{p+q}}|f(x,y)|\,d(x,y)<\infty,
$$

则：

1. 对几乎所有 $x$，函数 $y\mapsto f(x,y)$ 可积；
2. 对几乎所有 $y$，函数 $x\mapsto f(x,y)$ 可积；
3. 两个累次积分都存在且

   $$
   \int_{\mathbb R^{p+q}}f(x,y)\,d(x,y)
   =
   \int_{\mathbb R^p}
   \left(\int_{\mathbb R^q}f(x,y)\,dy\right)dx
   $$

   $$
   =
   \int_{\mathbb R^q}
   \left(\int_{\mathbb R^p}f(x,y)\,dx\right)dy.
   $$

Tonelli 用“非负”保证合法，Fubini 用“绝对可积”保证合法。如果两项条件都不满足，交换积分次序可能失败。

---

## 15. 典型二重积分

考虑

$$
f(x,y)=e^{-(x+y)},
\qquad (x,y)\in(0,\infty)^2.
$$

由于 $f\ge0$，Tonelli 定理给出

$$
\int_0^\infty\int_0^\infty
e^{-(x+y)}\,dy\,dx
=
\left(\int_0^\infty e^{-x}\,dx\right)
\left(\int_0^\infty e^{-y}\,dy\right)
=1.
$$

更一般地，若 $g\ge0$、$h\ge0$ 可测，则

$$
\int_{\mathbb R^{p+q}}g(x)h(y)\,d(x,y)
=
\left(\int_{\mathbb R^p}g(x)\,dx\right)
\left(\int_{\mathbb R^q}h(y)\,dy\right),
$$

两侧允许为 $+\infty$。

若一个一维积分为 $0$、另一个为 $+\infty$，则右侧乘积按 $0\cdot(+\infty)=0$ 理解。

---

## 16. 常见误区

### 16.1 非负可测不等于可积

非负可测函数的积分总有定义，但可能等于 $+\infty$。只有积分有限时才称为可积。

### 16.2 积分存在不等于绝对可积

对 Lebesgue 可积的有限值定义而言，必须有

$$
\int|f|<\infty.
$$

正部和负部积分同时为无穷时，不能用形式上的抵消定义积分。

### 16.3 几乎处处收敛不能单独交换极限与积分

函数列

$$
f_k=k\mathbf 1_{(0,1/k)}
$$

几乎处处趋于零，但每项积分都等于 $1$。

### 16.4 一致有界不一定足够

在无限测度集上，常数函数 $1$ 不是可积控制函数。控制收敛定理要求存在 $g\in L^1$。

### 16.5 从 $\int f=0$ 不能推出 $f=0$ a.e.

只有在 $f\ge0$ 时才成立。一般函数可能发生正负抵消。

### 16.6 交换二重积分必须检查条件

非负时使用 Tonelli；绝对可积时使用 Fubini。若函数变号且不绝对可积，两个累次积分可能不存在或结果不同。

---

## 17. 定理选择速查

| 已知条件 | 优先使用 |
|---|---|
| $0\le f_k\uparrow f$ | 单调收敛定理 |
| 只有 $f_k\ge0$ | Fatou 引理 |
| $f_k\to f$ a.e. 且有 $L^1$ 控制函数 | 控制收敛定理 |
| 有限测度集上统一有界且 a.e. 收敛 | 有界收敛定理 |
| 非负函数级数 | 单调收敛定理逐项积分 |
| 绝对可积函数级数 | 控制收敛或绝对收敛判据 |
| 非负二元函数 | Tonelli 定理 |
| 绝对可积二元函数 | Fubini 定理 |
| 需要估计大函数值点集 | Markov–Chebyshev 不等式 |

---

## 18. 本篇要点

1. Lebesgue 积分先对非负简单函数定义，再通过下方简单函数的上确界推广。
2. 非负可测函数的积分允许为 $+\infty$；可积要求绝对值积分有限。
3. 积分具有线性、单调性、绝对值估计和对积分区域的可数可加性。
4. 单调收敛定理处理非负递增函数列，Fatou 引理提供下极限估计。
5. 控制收敛定理在可积函数控制下允许交换极限与积分。
6. 可积函数在小测度集合上的积分很小，这称为积分的绝对连续性。
7. Markov–Chebyshev 不等式说明 $L^1$ 收敛蕴含依测度收敛。
8. 层析公式把函数积分写成水平集测度的积分。
9. 有界闭区间上的 Riemann 可积函数一定 Lebesgue 可积且积分相同，反向不成立。
10. Tonelli 处理非负二元函数，Fubini 处理绝对可积二元函数。

至此，实变函数系列已经从集合与点集、Lebesgue 测度、可测函数推进到 Lebesgue 积分。后续可以继续整理 **$L^p$ 空间、绝对连续函数与微分理论**。

---

## 参考教材

1. 江泽坚、吴智泉、纪友清，《实变函数论》，第 4 版，高等教育出版社。
2. 邓东皋、常心怡，《实变函数简明教程》，高等教育出版社。
3. H. L. Royden and P. M. Fitzpatrick, *Real Analysis*, 4th ed.
4. G. B. Folland, *Real Analysis: Modern Techniques and Their Applications*, 2nd ed.
5. D. L. Cohn, *Measure Theory*, 2nd ed.
