---
title: "泛函分析 08：弱拓扑、弱收敛与弱星收敛"
date: 2026-08-31T12:00:00+08:00
tags: ["泛函分析", "弱拓扑", "弱收敛", "弱星收敛"]
description: "系统整理弱拓扑与弱星拓扑、弱收敛与弱星收敛的定义、性质、典型例子，以及范数拓扑、弱拓扑和弱星拓扑之间的区别。"
draft: false
---

范数收敛要求向量之间的距离趋于零，这在无限维空间中往往过强。许多有界序列没有范数收敛子列，却可能在所有连续线性泛函的观察下收敛。

弱拓扑把“所有连续线性泛函都连续”作为最低要求；弱星拓扑则把对偶空间中的泛函逐点作用于原空间。它们保留了求极值、提取子列和研究对偶性所需要的结构，同时放宽了收敛条件。

本文设 $X$ 为 $\mathbb K$ 上的赋范空间，其中 $\mathbb K=\mathbb R$ 或 $\mathbb C$；$X^*$ 表示连续对偶空间。

---

## 1. 为什么引入弱收敛

### 1.1 范数收敛的局限

在无限维空间中，闭单位球通常不是范数紧集。因此一个有界序列未必存在范数收敛子列。

例如在 Hilbert 空间 $\ell^2$ 中，标准单位向量

$$
e_n=(0,\ldots,0,1,0,\ldots)
$$

满足

$$
\|e_n\|_2=1
$$

以及

$$
\|e_n-e_m\|_2=\sqrt2,
\qquad n\ne m.
$$

所以 $\{e_n\}$ 没有范数 Cauchy 子列。

但对每个 $y=(y_k)\in\ell^2$，

$$
\langle e_n,y\rangle=y_n\to0.
$$

从每个固定连续线性泛函的角度看，$e_n$ 趋于 $0$。这正是弱收敛。

### 1.2 “弱”指拓扑更弱

弱拓扑包含的开集比范数拓扑少，因此在弱拓扑下更容易收敛：

$$
\text{范数收敛}
\Longrightarrow
\text{弱收敛}.
$$

“弱收敛”不是近似或不严格的收敛，而是相对于另一种拓扑的严格收敛概念。

---

## 2. 弱拓扑

### 2.1 定义

**定义（弱拓扑）**  
$X$ 上使每个连续线性泛函

$$
f:X\to\mathbb K,
\qquad f\in X^*,
$$

都连续的最弱拓扑，称为 $X$ 上的弱拓扑，记作

$$
\sigma(X,X^*).
$$

这里“最弱”表示：任何使所有 $f\in X^*$ 连续的拓扑，都至少包含弱拓扑中的全部开集。

### 2.2 基本弱邻域

固定 $x_0\in X$，取有限个泛函

$$
f_1,\ldots,f_m\in X^*
$$

和 $\varepsilon>0$。定义

$$
U(x_0;f_1,\ldots,f_m;\varepsilon)
=
\left\{
x\in X:
|f_j(x-x_0)|<\varepsilon,\ 1\le j\le m
\right\}.
$$

所有这类集合构成 $x_0$ 的弱邻域基。

关键点是：每个基本弱邻域只检查有限个泛函，而不是同时检查整个 $X^*$。

### 2.3 弱拓扑是 Hausdorff 的

Hahn–Banach 定理保证连续线性泛函能够分离不同点：

$$
x\ne y
\Longrightarrow
\exists f\in X^*,\ f(x)\ne f(y).
$$

因此弱拓扑是 Hausdorff 拓扑，弱极限如果存在则唯一。

### 2.4 与范数拓扑的关系

每个 $f\in X^*$ 在范数拓扑下连续，所以

$$
\sigma(X,X^*)
\subseteq
\text{范数拓扑}.
$$

若 $X$ 有限维，则两种拓扑相同。

若 $X$ 无限维，则弱拓扑严格弱于范数拓扑。此时每个非空基本弱开集都包含某个有限余维子空间的平移，因而在范数下无界。

所以无限维空间中不存在非空且范数有界的弱开集。

---

## 3. 弱收敛

### 3.1 定义

**定义（弱收敛）**  
点列 $\{x_n\}\subseteq X$ 称为弱收敛到 $x\in X$，如果对每个 $f\in X^*$，

$$
f(x_n)\to f(x).
$$

记作

$$
x_n\rightharpoonup x
$$

或

$$
x_n\xrightarrow{w}x.
$$

更一般地，对网 $\{x_\alpha\}$，定义

$$
x_\alpha\rightharpoonup x
\Longleftrightarrow
f(x_\alpha)\to f(x),
\quad \forall f\in X^*.
$$

### 3.2 范数收敛推出弱收敛

若

$$
\|x_n-x\|\to0,
$$

则对每个 $f\in X^*$，

$$
|f(x_n)-f(x)|
\le
\|f\|\,\|x_n-x\|\to0.
$$

因此

$$
x_n\to x
\Longrightarrow
x_n\rightharpoonup x.
$$

反向一般不成立。

### 3.3 弱极限的唯一性

若

$$
x_n\rightharpoonup x
$$

并且

$$
x_n\rightharpoonup y,
$$

则对所有 $f\in X^*$，

$$
f(x-y)=0.
$$

由 Hahn–Banach 分离点的性质可得

$$
x=y.
$$

---

## 4. 弱收敛序列的基本性质

### 4.1 弱收敛序列有界

**定理**  
若

$$
x_n\rightharpoonup x,
$$

则

$$
\sup_n\|x_n\|<\infty.
$$

这个结论来自一致有界原理。把每个 $x_n$ 看成 $X^*$ 上的泛函

$$
Jx_n(f)=f(x_n),
$$

则对每个固定 $f\in X^*$，数列 $\{Jx_n(f)\}$ 收敛，因而有界。

弱收敛只保证有界，不保证范数趋于极限的范数。

### 4.2 范数的弱下半连续性

**定理**  
若

$$
x_n\rightharpoonup x,
$$

则

$$
\|x\|
\le
\liminf_{n\to\infty}\|x_n\|.
$$

所以范数在弱拓扑下是下半连续函数。

等号不必成立。例如在 $\ell^2$ 中，

$$
e_n\rightharpoonup0,
$$

但

$$
\|e_n\|_2=1,
\qquad
\|0\|_2=0.
$$

### 4.3 线性运算保持弱收敛

若

$$
x_n\rightharpoonup x,
\qquad
y_n\rightharpoonup y,
\qquad
\alpha_n\to\alpha,
$$

则

$$
x_n+y_n\rightharpoonup x+y
$$

以及

$$
\alpha_nx_n\rightharpoonup\alpha x.
$$

### 4.4 有界线性算子保持弱收敛

设 $T\in\mathcal B(X,Y)$。若

$$
x_n\rightharpoonup x\text{ 于 }X,
$$

则

$$
Tx_n\rightharpoonup Tx\text{ 于 }Y.
$$

因为对任意 $g\in Y^*$，

$$
g(Tx_n)
=(T^*g)(x_n)
\to
(T^*g)(x)
=g(Tx).
$$

因此有界线性算子不仅范数连续，也弱—弱连续。

---

## 5. 弱收敛的典型例子

### 5.1 $\ell^p$ 中的单位向量

设

$$
1<p<\infty,
\qquad
\frac1p+\frac1q=1.
$$

因为

$$
(\ell^p)^*\cong\ell^q,
$$

对每个 $y=(y_n)\in\ell^q$，

$$
\langle e_n,y\rangle=y_n\to0.
$$

因此

$$
e_n\rightharpoonup0
\quad\text{于 }\ell^p,
$$

但

$$
\|e_n\|_p=1.
$$

### 5.2 $c_0$ 中的单位向量

因为

$$
(c_0)^*\cong\ell^1,
$$

而每个 $\ell^1$ 序列都满足 $y_n\to0$，所以

$$
e_n\rightharpoonup0
\quad\text{于 }c_0.
$$

### 5.3 $\ell^1$ 中的例外

在 $\ell^1$ 中，

$$
(\ell^1)^*\cong\ell^\infty.
$$

取

$$
\mathbf1=(1,1,\ldots)\in\ell^\infty,
$$

则

$$
\langle e_n,\mathbf1\rangle=1.
$$

因此 $e_n$ 在 $\ell^1$ 中不弱收敛到 $0$。

更强地，$\ell^1$ 具有 **Schur 性质**：

$$
x_n\rightharpoonup x
\Longrightarrow
\|x_n-x\|_1\to0.
$$

这并不表示 $\ell^1$ 的弱拓扑与范数拓扑相同；它们只是具有相同的收敛序列。

---

## 6. 弱闭集

### 6.1 弱闭与范数闭

因为弱拓扑比范数拓扑弱，所以

$$
\text{弱闭}
\Longrightarrow
\text{范数闭}.
$$

反向对一般集合不成立。

### 6.2 闭凸集的等价性

**定理**  
若 $C\subseteq X$ 是凸集，则

$$
C\text{ 范数闭}
\Longleftrightarrow
C\text{ 弱闭}.
$$

其中关键方向由 Hahn–Banach 分离定理得到：若 $x_0\notin C$，可用连续线性泛函把 $x_0$ 与闭凸集 $C$ 严格分离。

### 6.3 线性子空间

线性子空间自动是凸集，因此

$$
M\text{ 范数闭}
\Longleftrightarrow
M\text{ 弱闭}.
$$

特别地，有界线性算子的核在范数拓扑和弱拓扑下都闭。

### 6.4 非凸集合

非凸范数闭集未必弱闭。

例如无限维 Hilbert 空间中的单位球面

$$
S=\{x:\|x\|=1\}
$$

范数闭，但标准正交序列满足

$$
e_n\rightharpoonup0,
$$

而 $0\notin S$。所以 $S$ 不是弱闭集。

---

## 7. 弱 Cauchy 点列

### 7.1 定义

**定义（弱 Cauchy）**  
点列 $\{x_n\}\subseteq X$ 称为弱 Cauchy 点列，如果对每个 $f\in X^*$，标量数列

$$
\{f(x_n)\}
$$

都是 Cauchy 数列。

每个弱收敛点列都是弱 Cauchy 点列。

### 7.2 弱序列完备

**定义（弱序列完备）**  
若 $X$ 中每个弱 Cauchy 点列都弱收敛于 $X$ 中某点，则称 $X$ 弱序列完备。

每个自反 Banach 空间都弱序列完备，但反向不成立。例如 $\ell^1$ 弱序列完备，却不是自反空间。

弱序列完备与范数完备是不同概念。

---

## 8. 弱星拓扑

### 8.1 定义

对每个 $x\in X$，定义取值映射

$$
\operatorname{ev}_x:X^*\to\mathbb K,
\qquad
\operatorname{ev}_x(f)=f(x).
$$

**定义（弱星拓扑）**  
$X^*$ 上使所有 $\operatorname{ev}_x$ 连续的最弱拓扑，称为弱星拓扑，记作

$$
\sigma(X^*,X).
$$

符号中的第二个 $X$ 表示：弱星拓扑只使用原空间中的向量来检验对偶泛函。

### 8.2 基本弱星邻域

固定 $f_0\in X^*$，取有限个向量

$$
x_1,\ldots,x_m\in X
$$

和 $\varepsilon>0$。集合

$$
V(f_0;x_1,\ldots,x_m;\varepsilon)
=
\left\{
f\in X^*:
|f(x_j)-f_0(x_j)|<\varepsilon,\ 1\le j\le m
\right\}
$$

构成 $f_0$ 的弱星邻域基。

---

## 9. 弱星收敛

### 9.1 定义

**定义（弱星收敛）**  
点列或网 $\{f_\alpha\}\subseteq X^*$ 称为弱星收敛到 $f\in X^*$，如果对每个 $x\in X$，

$$
f_\alpha(x)\to f(x).
$$

记作

$$
f_\alpha\xrightarrow{w^*}f.
$$

弱星收敛就是对偶泛函在原空间每个点上的逐点收敛。

### 9.2 范数收敛、弱收敛与弱星收敛

在 $X^*$ 上有三种常见收敛：

$$
\text{范数收敛}
\Longrightarrow
\text{弱收敛}
\Longrightarrow
\text{弱星收敛}.
$$

其中：

- 弱收敛使用 $X^{**}$ 中所有泛函检验；
- 弱星收敛只使用自然嵌入 $J(X)\subseteq X^{**}$ 中的泛函检验。

反向一般不成立。

### 9.3 弱星极限的有界性

若 $\{f_n\}\subseteq X^*$ 是弱星收敛的**序列**，则对每个 $x\in X$，

$$
\sup_n|f_n(x)|<\infty.
$$

当 $X$ 是 Banach 空间时，由一致有界原理，

$$
\sup_n\|f_n\|<\infty.
$$

对一般网需要更谨慎：收敛网的全部取值集合未必有界，因此通常直接在有界集合或单位球中使用弱星紧致性。

---

## 10. 弱星收敛的例子

### 10.1 $\ell^1=(c_0)^*$ 中的单位向量

把 $\ell^1$ 看作 $c_0$ 的对偶空间。对任意 $x=(x_n)\in c_0$，

$$
\langle e_n,x\rangle=x_n\to0.
$$

所以

$$
e_n\xrightarrow{w^*}0
\quad\text{于 }\ell^1=(c_0)^*.
$$

但 $\ell^1$ 具有 Schur 性质，且

$$
\|e_n\|_1=1,
$$

所以 $e_n$ 在 $\ell^1$ 中不弱收敛到 $0$。

这个例子明确说明：

$$
\text{弱星收敛}\centernot\Longrightarrow\text{弱收敛}.
$$

### 10.2 $\ell^\infty=(\ell^1)^*$ 中的坐标泛函

把 $e_n\in\ell^\infty$ 看作 $\ell^1$ 上的第 $n$ 个坐标泛函。对任意 $x=(x_n)\in\ell^1$，

$$
\langle e_n,x\rangle=x_n\to0.
$$

因此

$$
e_n\xrightarrow{w^*}0
\quad\text{于 }\ell^\infty.
$$

### 10.3 Dirac 测度

设 $K$ 是紧空间，$\delta_t\in C(K)^*$ 为点值泛函

$$
\delta_t(f)=f(t).
$$

若 $t_n\to t$，则对每个 $f\in C(K)$，

$$
\delta_{t_n}(f)
=f(t_n)
\to
f(t)
=\delta_t(f).
$$

所以

$$
\delta_{t_n}\xrightarrow{w^*}\delta_t.
$$

这说明测度的弱星收敛可以通过对连续测试函数积分来描述。

---

## 11. 网与序列

### 11.1 为什么需要网

弱拓扑和弱星拓扑通常不可度量，也未必满足第一可数性。此时仅用序列不能完全刻画闭包和紧致性。

**定义（有向集）**  
偏序集 $A$ 称为有向集，如果对任意 $\alpha,\beta\in A$，都存在 $\gamma\in A$，使

$$
\gamma\ge\alpha,
\qquad
\gamma\ge\beta.
$$

以有向集为指标的族

$$
\{x_\alpha\}_{\alpha\in A}
$$

称为网。

数列是以 $\mathbb N_+$ 为有向集的特殊网。

### 11.2 拓扑刻画

在任意拓扑空间中：

- $x\in\overline A$ 当且仅当存在 $A$ 中的网收敛到 $x$；
- 紧致性等价于每个网都存在收敛子网。

对应的序列结论只在度量空间或其他具有额外可数性条件的空间中自动成立。

### 11.3 什么时候序列足够

如果 $X$ 可分，则 $X^*$ 的闭单位球在弱星拓扑下可度量。此时弱星紧致性可以用序列刻画。

Banach 空间中的弱紧致性还有 Eberlein–Šmulian 定理保证序列刻画，下一篇将集中整理。

---

## 12. 三种拓扑的对照

在对偶空间 $X^*$ 上：

| 拓扑 | 记号 | 用什么检验 | 相对强弱 |
|---|---|---|---|
| 范数拓扑 | $\|\cdot\|$ | 对偶范数 | 最强 |
| 弱拓扑 | $\sigma(X^*,X^{**})$ | 全部 $X^{**}$ 元素 | 中间 |
| 弱星拓扑 | $\sigma(X^*,X)$ | 原空间 $X$ 的取值 | 最弱 |

因此

$$
\sigma(X^*,X)
\subseteq
\sigma(X^*,X^{**})
\subseteq
\text{范数拓扑}.
$$

若 $X$ 自反，则

$$
J(X)=X^{**},
$$

从而 $X^*$ 上的弱拓扑和弱星拓扑相同。

---

## 13. 常见误区

### 13.1 弱收敛不是逐坐标收敛

在具有坐标的空间中，弱收敛通常推出逐坐标收敛，但逐坐标收敛还需要配合有界性和空间结构，才可能推出弱收敛。

### 13.2 有界不保证弱收敛

有界点列未必弱收敛。只有在自反性或弱紧致性等额外条件下，才能保证存在弱收敛子列。

### 13.3 弱星拓扑取决于预对偶

同一个 Banach 空间可能以不同方式表示为某个空间的对偶。弱星拓扑依赖所选的原空间或预对偶，不只由对偶空间自身的范数决定。

### 13.4 弱闭包不一定由序列给出

在不可度量的弱拓扑中，某点可能属于集合的弱闭包，却不是任何弱收敛序列的极限。一般理论需要使用网。

---

## 14. 本篇要点

1. 弱拓扑 $\sigma(X,X^*)$ 是使所有连续线性泛函连续的最弱拓扑。
2. 弱收敛等价于每个连续线性泛函作用后的标量收敛。
3. 范数收敛推出弱收敛，反向一般不成立。
4. 弱收敛序列必有界，并满足范数的弱下半连续性。
5. 有界线性算子保持弱收敛。
6. 凸集范数闭当且仅当弱闭；一般非凸闭集不具有这一性质。
7. 弱星拓扑 $\sigma(X^*,X)$ 描述对偶泛函在原空间上的逐点收敛。
8. 在 $X^*$ 上，范数拓扑强于弱拓扑，弱拓扑又强于弱星拓扑。
9. 一般弱拓扑需要使用网；在可度量或具有序列紧致性定理的场景中才能只用序列。

下一篇将整理**Banach–Alaoglu 定理、Goldstine 定理、自反空间和弱紧致性的等价刻画**。

---

## 参考教材

1. 张恭庆、林源渠，《泛函分析讲义》，北京大学出版社。
2. 夏道行、吴卓人、严绍宗、舒五昌，《实变函数论与泛函分析》，高等教育出版社。
3. John B. Conway, *A Course in Functional Analysis*, 2nd ed.
4. Walter Rudin, *Functional Analysis*, 2nd ed.
5. Haim Brezis, *Functional Analysis, Sobolev Spaces and Partial Differential Equations*.
