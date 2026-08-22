---
title: "实变函数 07：$L^p$ 空间"
date: 2026-08-20T18:45:48+08:00
tags: ["实变函数", "Lp空间", "Hilbert空间"]
description: "系统整理 Lp 范数、几乎处处等价类、Hölder 与 Minkowski 不等式、完备性、稠密性、对偶性及 L2 的 Hilbert 空间结构。"
draft: false
---

Lebesgue 积分不仅用于计算函数的总量，还给出了衡量函数大小和函数间距离的自然方式。由此得到的 $L^p$ 空间把积分理论转化为完备的几何结构，是泛函分析、偏微分方程、概率论和 Fourier 分析的共同语言。

本文设 $E\subseteq\mathbb R^n$ 为 Lebesgue 可测集，函数可以取实值或复值。除非特别说明，

$$
1\le p\le\infty.
$$

---

## 1. $L^p$ 空间的定义

### 1.1 $1\le p<\infty$

**定义（$L^p$ 可积）**  
若可测函数 $f:E\to\mathbb C$ 满足

$$
\int_E|f(x)|^p\,dx<\infty,
$$

则称 $f$ 为 $p$ 次可积函数。

定义

$$
\|f\|_p
=
\left(
\int_E|f(x)|^p\,dx
\right)^{1/p}.
$$

### 1.2 $L^\infty$

**定义（本质上有界）**  
若存在常数 $M\ge0$，使

$$
|f(x)|\le M
$$

几乎处处成立，则称 $f$ 本质上有界。

定义本质上确界

$$
\|f\|_\infty
=\operatorname*{ess\,sup}_{x\in E}|f(x)|
$$

为所有满足 $|f|\le M$ 几乎处处的常数 $M$ 的下确界。

等价地，

$$
\|f\|_\infty
=\inf\{M\ge0:|\{|f|>M\}|=0\}.
$$

### 1.3 为什么使用本质上确界

函数在零测集上的异常取值不影响 Lebesgue 积分，也不应影响 $L^\infty$ 的大小。

例如在 $[0,1]$ 上定义

$$
f(x)=
\begin{cases}
100, & x=0,\\
1, & x\ne0.
\end{cases}
$$

则普通上确界是 $100$，但

$$
\|f\|_\infty=1.
$$

---

## 2. 几乎处处等价类

### 2.1 零范数问题

若 $f=0$ 几乎处处，则

$$
\|f\|_p=0,
$$

但 $f$ 未必在每一点都等于零。因此直接把点态函数作为元素时，$\|\cdot\|_p$ 只能算半范数。

### 2.2 等价关系

定义

$$
f\sim g
\quad\Longleftrightarrow\quad
f=g\ \text{几乎处处}.
$$

$L^p(E)$ 严格来说是所有相应可测函数关于这个等价关系形成的等价类空间。

在 $L^p(E)$ 中，

$$
f=g
$$

表示二者几乎处处相等。

### 2.3 范数

经过等价类化后，

$$
\|f\|_p=0
\quad\Longleftrightarrow\quad
f=0\quad\text{在 }L^p(E)\text{ 中}.
$$

因此 $\|\cdot\|_p$ 成为真正的范数。

---

## 3. 示性函数与基本例子

### 3.1 示性函数

若 $A\subseteq E$ 可测且 $1\le p<\infty$，则

$$
\|\mathbf 1_A\|_p
=|A|^{1/p}.
$$

若 $|A|>0$，则

$$
\|\mathbf 1_A\|_\infty=1.
$$

如果 $|A|=0$，那么 $\mathbf 1_A$ 在所有 $L^p$ 空间中都代表零元。

### 3.2 原点附近的幂函数

在单位球

$$
B(0,1)\subseteq\mathbb R^n
$$

上考虑

$$
f(x)=|x|^{-\alpha},
\qquad \alpha>0.
$$

则

$$
f\in L^p(B(0,1))
\quad\Longleftrightarrow\quad
\alpha p<n.
$$

### 3.3 无穷远处的幂函数

在集合 $\{x\in\mathbb R^n:|x|>1\}$ 上，

$$
|x|^{-\alpha}\in L^p
\quad\Longleftrightarrow\quad
\alpha p>n.
$$

原点附近要求奇性不能太强，无穷远处则要求衰减足够快。

---

## 4. 共轭指数与 Young 不等式

### 4.1 共轭指数

若

$$
1<p<\infty,
$$

定义 $p$ 的共轭指数 $q$ 为

$$
\frac1p+\frac1q=1.
$$

即

$$
q=\frac{p}{p-1}.
$$

约定 $1$ 与 $\infty$ 互为共轭指数。

### 4.2 Young 不等式

**定理（Young 不等式）**  
若 $a,b\ge0$，$1<p,q<\infty$ 且 $1/p+1/q=1$，则

$$
ab
\le
\frac{a^p}{p}
+\frac{b^q}{q}.
$$

等号成立当且仅当

$$
a^p=b^q.
$$

Young 不等式是 Hölder 不等式的点态基础。

---

## 5. Hölder 不等式

**定理（Hölder）**  
设 $1\le p,q\le\infty$ 且

$$
\frac1p+\frac1q=1.
$$

若 $f\in L^p(E)$、$g\in L^q(E)$，则

$$
fg\in L^1(E)
$$

并且

$$
\|fg\|_1
\le
\|f\|_p\|g\|_q.
$$

当 $p=q=2$ 时，这就是 Cauchy–Schwarz 不等式：

$$
\left|\int_E f\overline g\right|
\le
\|f\|_2\|g\|_2.
$$

### 5.1 积分泛函

若 $g\in L^q(E)$，则

$$
T_g(f)=\int_E f\overline g
$$

定义了 $L^p(E)$ 上的有界线性泛函，并且

$$
|T_g(f)|
\le\|f\|_p\|g\|_q.
$$

### 5.2 广义 Hölder 不等式

若

$$
\frac1{p_1}+\cdots+\frac1{p_m}=1,
$$

$f_j\in L^{p_j}(E)$，则

$$
\left\|
\prod_{j=1}^{m}f_j
\right\|_1
\le
\prod_{j=1}^{m}\|f_j\|_{p_j}.
$$

---

## 6. Minkowski 不等式

**定理（Minkowski）**  
若 $1\le p\le\infty$，$f,g\in L^p(E)$，则

$$
\|f+g\|_p
\le
\|f\|_p+\|g\|_p.
$$

这就是 $L^p$ 范数的三角不等式。

因此

$$
d_p(f,g)=\|f-g\|_p
$$

定义了 $L^p(E)$ 上的距离。

### 6.1 反三角不等式

由 Minkowski 不等式可得

$$
\bigl|\|f\|_p-\|g\|_p\bigr|
\le
\|f-g\|_p.
$$

所以范数是关于 $L^p$ 距离的连续函数。

---

## 7. 不同 $L^p$ 空间之间的包含关系

### 7.1 有限测度集

若

$$
|E|<\infty
$$

并且

$$
1\le p<q\le\infty,
$$

则

$$
L^q(E)\subseteq L^p(E).
$$

并有估计

$$
\|f\|_p
\le
|E|^{\frac1p-\frac1q}\|f\|_q.
$$

在有限测度集上，较大的指数对大函数值控制更强。

### 7.2 无限测度集

若 $|E|=\infty$，不同 $L^p(E)$ 之间一般没有包含关系。

例如在 $(1,\infty)$ 上，可以通过选择不同的 $\alpha$ 使

$$
f(x)=x^{-\alpha}
$$

属于某个 $L^p$ 而不属于另一个 $L^q$。

### 7.3 插值估计

若 $f\in L^1(E)\cap L^\infty(E)$，则对每个 $1\le p<\infty$，

$$
\|f\|_p
\le
\|f\|_1^{1/p}
\|f\|_\infty^{1-1/p}.
$$

更一般地，若 $f\in L^{p_0}\cap L^{p_1}$，则中间指数的范数可以由两端范数控制。

---

## 8. $L^p$ 收敛

### 8.1 定义

**定义（$L^p$ 收敛）**  
若

$$
\|f_k-f\|_p\to0,
$$

则称 $f_k$ 在 $L^p$ 意义下收敛于 $f$。

### 8.2 蕴含依测度收敛

若 $1\le p<\infty$ 且 $f_k\to f$ 于 $L^p(E)$，则对任意 $\varepsilon>0$，

$$
|\{|f_k-f|\ge\varepsilon\}|
\le
\frac{\|f_k-f\|_p^p}{\varepsilon^p}
\to0.
$$

因此

$$
L^p\text{ 收敛}
\Longrightarrow
\text{依测度收敛}.
$$

### 8.3 几乎处处收敛子列

**定理**  
若 $1\le p<\infty$ 且

$$
f_k\to f\quad\text{于 }L^p(E),
$$

则存在子列 $\{f_{k_j}\}$，使

$$
f_{k_j}\to f
\quad\text{几乎处处}.
$$

整个函数列未必几乎处处收敛。

### 8.4 几乎处处收敛不蕴含 $L^p$ 收敛

在 $(0,1)$ 上令

$$
f_k(x)=k^{1/p}\mathbf 1_{(0,1/k)}(x).
$$

则 $f_k\to0$ 几乎处处，但

$$
\|f_k\|_p=1.
$$

所以 $f_k$ 不在 $L^p$ 中收敛到 $0$。

---

## 9. $L^p$ 中的控制收敛

若 $1\le p<\infty$，$f_k\to f$ 几乎处处，并且存在 $g\in L^p(E)$ 使

$$
|f_k|\le g
$$

几乎处处成立，则

$$
|f_k-f|^p\le (2g)^p.
$$

由 Lebesgue 控制收敛定理，

$$
\|f_k-f\|_p^p
=\int_E|f_k-f|^p\to0.
$$

因此

$$
f_k\to f\quad\text{于 }L^p(E).
$$

这里的控制函数必须属于 $L^p$，而不是只要求点态有限。

---

## 10. 完备性与 Riesz–Fischer 定理

### 10.1 Cauchy 列

函数列 $\{f_k\}$ 称为 $L^p$-Cauchy 列，如果对任意 $\varepsilon>0$，存在 $N$，使得当 $m,k\ge N$ 时，

$$
\|f_m-f_k\|_p<\varepsilon.
$$

### 10.2 完备性

**定理（Riesz–Fischer）**  
对每个

$$
1\le p\le\infty,
$$

$L^p(E)$ 都是完备的赋范线性空间，即 Banach 空间。

换言之，每个 $L^p$-Cauchy 列都收敛于某个 $L^p(E)$ 中的元素。

### 10.3 绝对收敛级数

Banach 空间完备性等价于：若

$$
\sum_{k=1}^{\infty}\|f_k\|_p<\infty,
$$

则函数级数

$$
\sum_{k=1}^{\infty}f_k
$$

在 $L^p(E)$ 中收敛。

---

## 11. 稠密子集

### 11.1 简单函数

**定理**  
若 $1\le p<\infty$，则取有限值且支集具有有限测度的简单函数在 $L^p(E)$ 中稠密。

也就是说，对每个 $f\in L^p(E)$ 和每个 $\varepsilon>0$，存在简单函数 $\varphi$，使

$$
\|f-\varphi\|_p<\varepsilon.
$$

### 11.2 连续紧支集函数

在 $\mathbb R^n$ 上，对 $1\le p<\infty$，

$$
C_c(\mathbb R^n)
$$

在 $L^p(\mathbb R^n)$ 中稠密。

这里 $C_c$ 表示连续且具有紧支集的函数。

### 11.3 光滑紧支集函数

更强地，

$$
C_c^\infty(\mathbb R^n)
$$

在 $L^p(\mathbb R^n)$ 中稠密，其中 $1\le p<\infty$。

因此一般 $L^p$ 函数可以在范数意义下由光滑函数逼近。这是弱导数和 Sobolev 空间理论的基础。

### 11.4 $L^\infty$ 的区别

简单函数在 $L^\infty$ 中仍可逼近本质有界函数，但 $C_c^\infty(\mathbb R^n)$ 一般不在 $L^\infty(\mathbb R^n)$ 中稠密。

例如常函数 $1$ 与任意紧支集函数的 $L^\infty$ 距离至少为 $1$。

---

## 12. 可分性与反射性

### 12.1 可分性

**定理**  
对 Lebesgue 测度空间中的

$$
1\le p<\infty,
$$

$L^p(E)$ 是可分空间，即存在可数稠密子集。

$L^\infty(E)$ 在一般非平凡情形下不可分。

### 12.2 反射性

**定理**

- 当 $1<p<\infty$ 时，$L^p(E)$ 是反射 Banach 空间；
- $L^1(E)$ 和 $L^\infty(E)$ 一般不是反射空间。

反射性在弱收敛、变分法和偏微分方程中十分重要。

---

## 13. $L^p$ 对偶

### 13.1 由 $L^q$ 函数产生泛函

设 $1\le p<\infty$，$q$ 是共轭指数。对每个 $g\in L^q(E)$，定义

$$
T_g(f)=\int_E f\overline g.
$$

则 $T_g$ 是 $L^p(E)$ 上的有界线性泛函，并且

$$
\|T_g\|=\|g\|_q.
$$

### 13.2 对偶表示

**定理（$L^p$ 对偶）**  
在 Lebesgue 测度空间上，若 $1\le p<\infty$，则 $L^p(E)$ 上每个有界线性泛函都可以唯一表示为

$$
T(f)=\int_E f\overline g
$$

其中

$$
g\in L^q(E).
$$

因此

$$
(L^p(E))^*
\cong L^q(E).
$$

特别地，

$$
(L^1(E))^*\cong L^\infty(E).
$$

一般来说，$(L^\infty)^*$ 比 $L^1$ 大，不能简单写成

$$
(L^\infty)^*=L^1.
$$

---

## 14. $L^2$ 的内积结构

### 14.1 内积

在复值 $L^2(E)$ 中定义

$$
\langle f,g\rangle
=\int_E f(x)\overline{g(x)}\,dx.
$$

对应范数为

$$
\|f\|_2
=\sqrt{\langle f,f\rangle}.
$$

由于 $L^2(E)$ 完备，它是 Hilbert 空间。

### 14.2 正交

若

$$
\langle f,g\rangle=0,
$$

则称 $f$ 与 $g$ 正交，记作

$$
f\perp g.
$$

若 $f\perp g$，则 Pythagoras 恒等式成立：

$$
\|f+g\|_2^2
=\|f\|_2^2+\|g\|_2^2.
$$

### 14.3 平行四边形恒等式

对任意 $f,g\in L^2(E)$，

$$
\|f+g\|_2^2+\|f-g\|_2^2
=2\|f\|_2^2+2\|g\|_2^2.
$$

平行四边形恒等式体现了 $L^2$ 范数来自内积。一般 $p\ne2$ 的 $L^p$ 范数不具有这种结构。

---

## 15. 正交系与 Fourier 系数

### 15.1 标准正交系

函数族 $\{e_k\}$ 称为标准正交系，如果

$$
\langle e_j,e_k\rangle
=
\begin{cases}
1, & j=k,\\
0, & j\ne k.
\end{cases}
$$

对 $f\in L^2(E)$，定义 Fourier 系数

$$
c_k=\langle f,e_k\rangle.
$$

### 15.2 Bessel 不等式

**定理（Bessel）**

$$
\sum_{k=1}^{\infty}
|\langle f,e_k\rangle|^2
\le
\|f\|_2^2.
$$

### 15.3 Parseval 恒等式

若 $\{e_k\}$ 是 $L^2(E)$ 的完备标准正交系，则

$$
f=\sum_{k=1}^{\infty}
\langle f,e_k\rangle e_k
$$

在 $L^2$ 意义下成立，并且

$$
\|f\|_2^2
=
\sum_{k=1}^{\infty}
|\langle f,e_k\rangle|^2.
$$

这称为 Parseval 恒等式。

### 15.4 $L^2$ 中的 Riesz–Fischer 定理

若 $\{e_k\}$ 是标准正交系且

$$
\{c_k\}\in\ell^2,
$$

则级数

$$
\sum_{k=1}^{\infty}c_ke_k
$$

在 $L^2$ 中收敛。

若该正交系完备，则每个 $\ell^2$ 系数列都对应唯一的 $L^2$ 元素。

---

## 16. 最佳逼近与正交投影

设 $M$ 是 Hilbert 空间 $L^2(E)$ 的闭线性子空间。

**定理（正交投影）**  
对每个 $f\in L^2(E)$，存在唯一的 $P_Mf\in M$，使

$$
\|f-P_Mf\|_2
=\inf_{g\in M}\|f-g\|_2.
$$

并且

$$
f-P_Mf\perp M.
$$

若

$$
M=\operatorname{span}\{e_1,\ldots,e_m\},
$$

其中 $\{e_k\}$ 标准正交，则

$$
P_Mf
=\sum_{k=1}^{m}
\langle f,e_k\rangle e_k.
$$

这说明 Fourier 部分和是 $L^2$ 意义下的最佳平方逼近。

---

## 17. 常用范数关系速查

| 条件 | 结论 |
|---|---|
| $f\in L^p,\ g\in L^q,\ 1/p+1/q=1$ | $\|fg\|_1\le\|f\|_p\|g\|_q$ |
| $f,g\in L^p$ | $\|f+g\|_p\le\|f\|_p+\|g\|_p$ |
| $\lvert E\rvert<\infty,\ p<q$ | $\lVert f\rVert_p\le\lvert E\rvert^{1/p-1/q}\lVert f\rVert_q$ |
| $f\in L^1\cap L^\infty$ | $\|f\|_p\le\|f\|_1^{1/p}\|f\|_\infty^{1-1/p}$ |
| $f_k\to f$ 于 $L^p$ | $f_k\to f$ 依测度 |
| $f_k\to f$ 于 $L^p$ | 存在子列几乎处处收敛于 $f$ |
| $f\perp g$ 于 $L^2$ | $\|f+g\|_2^2=\|f\|_2^2+\|g\|_2^2$ |

---

## 18. 常见误区

### 18.1 $L^p$ 元素不是单个点态函数

它是几乎处处相等函数组成的等价类。修改零测集上的取值不会改变 $L^p$ 元素。

### 18.2 $p$ 越大不一定集合越小

只有在有限测度集上才有

$$
L^q\subseteq L^p
\qquad(p<q).
$$

无限测度集上一般没有包含关系。

### 18.3 $L^p$ 收敛不保证整个序列几乎处处收敛

它只保证依测度收敛，并能抽出几乎处处收敛的子列。

### 18.4 几乎处处收敛不保证 $L^p$ 收敛

还需要控制函数、一致可积性或其他额外条件。

### 18.5 本质上有界不等于处处有界

$L^\infty$ 忽略零测集上的异常取值。

### 18.6 只有 $L^2$ 具有这里的内积结构

一般 $L^p$ 都是 Banach 空间，但只有 $p=2$ 时标准范数来自内积。

### 18.7 $L^\infty$ 与有限指数空间差异明显

$L^\infty$ 通常不可分，光滑紧支集函数也通常不在 $L^\infty$ 范数下稠密。

---

## 19. 本篇要点

1. $L^p$ 空间的元素是几乎处处相等意义下的等价类。
2. 对 $p<\infty$，范数由 $|f|^p$ 的积分定义；$L^\infty$ 使用本质上确界。
3. Young 不等式是 Hölder 不等式的基础，Minkowski 不等式给出三角不等式。
4. 在有限测度集上，$p<q$ 时有 $L^q\subseteq L^p$；无限测度集上一般没有包含关系。
5. $L^p$ 收敛蕴含依测度收敛，并且可以抽出几乎处处收敛子列。
6. 每个 $L^p$ 空间都是 Banach 空间，这就是 Riesz–Fischer 完备性定理。
7. 对 $p<\infty$，简单函数、连续紧支集函数和光滑紧支集函数提供逐级稠密逼近。
8. $1<p<\infty$ 时 $L^p$ 反射；有限指数 $L^p$ 的对偶由共轭指数 $L^q$ 表示。
9. $L^2$ 是 Hilbert 空间，具有正交、投影、Bessel 不等式和 Parseval 恒等式。
10. Fourier 展开本质上是 $L^2$ 中相对于完备标准正交系的坐标展开。

至此，实变函数系列的本科核心主线已经完整覆盖：

$$
\text{集合与点集}
\longrightarrow
\text{Lebesgue 测度}
\longrightarrow
\text{可测函数}
\longrightarrow
\text{Lebesgue 积分}
$$

$$
\longrightarrow
\text{微分理论}
\longrightarrow
\text{有界变差与绝对连续}
\longrightarrow
L^p\text{ 空间}.
$$

后续若继续扩展，可以进入符号测度、Radon–Nikodym 定理、一般测度空间或 Fourier 分析。

---

## 参考教材

1. 江泽坚、吴智泉、纪友清，《实变函数论》，第 4 版，高等教育出版社。
2. 胡适耕，《实变函数》，第 2 版，高等教育出版社。
3. H. L. Royden and P. M. Fitzpatrick, *Real Analysis*, 4th ed.
4. G. B. Folland, *Real Analysis: Modern Techniques and Their Applications*, 2nd ed.
5. E. M. Stein and R. Shakarchi, *Real Analysis: Measure Theory, Integration, and Hilbert Spaces*.
