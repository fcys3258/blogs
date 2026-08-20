---
title: "实变函数 05：微分理论"
date: 2026-08-20T18:41:11+08:00
tags: ["实变函数", "微分理论", "Lebesgue微分定理"]
description: "系统整理 Vitali 覆盖、Hardy–Littlewood 极大函数、Lebesgue 微分与密度定理、单调函数和 Lipschitz 函数的几乎处处可微性。"
draft: false
---

经典微积分从连续函数出发讨论导数；实变函数论则进一步追问：可积函数能否由局部平均恢复，单调函数或 Lipschitz 函数是否必须可微，以及变上限 Lebesgue 积分能否求导。

这些问题的共同工具是覆盖定理和极大函数。本文主要在 $\mathbb R^n$ 中陈述结果；涉及普通导数和单调函数时，定义域取实轴上的区间。

---

## 1. 局部可积函数

### 1.1 定义

**定义（局部可积）**  
可测函数 $f:\mathbb R^n\to\overline{\mathbb R}$ 称为局部可积函数，如果对每个紧集 $K\subseteq\mathbb R^n$ 都有

$$
\int_K|f(x)|\,dx<\infty.
$$

记作

$$
f\in L^1_{\mathrm{loc}}(\mathbb R^n).
$$

等价地，只需对每个有界长方体或每个球验证积分有限。

### 1.2 局部平均

设 $B(x,r)$ 是以 $x$ 为中心、半径为 $r$ 的开球。函数 $f$ 在该球上的平均值记作

$$
\fint_{B(x,r)}f(y)\,dy
=\frac{1}{|B(x,r)|}
\int_{B(x,r)}f(y)\,dy.
$$

符号 $\fint$ 表示积分平均。

若 $f$ 在 $x$ 连续，则

$$
\lim_{r\to0}
\fint_{B(x,r)}f(y)\,dy=f(x).
$$

Lebesgue 微分定理把这个结论推广到局部可积函数的几乎每一点。

---

## 2. 覆盖定理

### 2.1 Vitali 覆盖

**定义（Vitali 覆盖）**  
设 $E\subseteq\mathbb R^n$。球族 $\mathcal V$ 称为 $E$ 的 Vitali 覆盖，如果对每个 $x\in E$ 和每个 $\delta>0$，都存在以 $x$ 为中心、半径小于 $\delta$ 的球属于 $\mathcal V$。

这表示在 $E$ 的每一点附近，都能从球族中找到任意小的球。

### 2.2 Vitali 覆盖定理

**定理（Vitali 覆盖定理）**  
设 $E\subseteq\mathbb R^n$ 可测且 $|E|<\infty$，$\mathcal V$ 是 $E$ 的 Vitali 覆盖。则可以从 $\mathcal V$ 中选出至多可数个两两不交的球 $\{B_k\}$，使

$$
\left|E\setminus\bigcup_{k=1}^{\infty}B_k\right|=0.
$$

因此，虽然原球族可能高度重叠，仍能选出一个几乎覆盖 $E$ 的不交子族。

### 2.3 有限覆盖引理

**定理（$5r$ 覆盖引理）**  
设 $\mathcal B$ 是一族半径有统一上界的球。可以选出至多可数个两两不交的球 $\{B_k\}\subseteq\mathcal B$，使

$$
\bigcup_{B\in\mathcal B}B
\subseteq
\bigcup_k 5B_k,
$$

其中 $5B_k$ 表示与 $B_k$ 同心、半径为原来 $5$ 倍的球。

不同版本中的膨胀常数可能不同，但只依赖于空间维数和所采用的几何形状。

---

## 3. Hardy–Littlewood 极大函数

### 3.1 定义

**定义（中心极大函数）**  
设 $f\in L^1_{\mathrm{loc}}(\mathbb R^n)$。定义

$$
Mf(x)
=\sup_{r>0}
\fint_{B(x,r)}|f(y)|\,dy.
$$

$Mf(x)$ 记录所有尺度上包含点 $x$ 的局部平均绝对值中的最大者。

由于取了绝对值，

$$
\left|
\fint_{B(x,r)}f(y)\,dy
\right|
\le Mf(x).
$$

### 3.2 弱型 $(1,1)$ 不等式

**定理（Hardy–Littlewood 极大不等式）**  
若 $f\in L^1(\mathbb R^n)$，则对任意 $\alpha>0$，

$$
\left|\{x\in\mathbb R^n:Mf(x)>\alpha\}\right|
\le
\frac{C_n}{\alpha}\|f\|_1,
$$

其中常数 $C_n$ 只依赖于维数 $n$。

这称为极大算子的弱型 $(1,1)$ 估计。它不表示 $Mf\in L^1$，而是控制 $Mf$ 的超水平集大小。

### 3.3 强型 $(p,p)$ 不等式

**定理**  
若 $1<p\le+\infty$，则存在只依赖于 $n,p$ 的常数 $C_{n,p}$，使

$$
\|Mf\|_p
\le C_{n,p}\|f\|_p.
$$

因此极大算子在 $L^p$ 上有界，但在 $L^1$ 上通常只有弱型估计。

---

## 4. Lebesgue 微分定理

### 4.1 Lebesgue 点

**定义（Lebesgue 点）**  
设 $f\in L^1_{\mathrm{loc}}(\mathbb R^n)$。若

$$
\lim_{r\to0}
\fint_{B(x,r)}
|f(y)-f(x)|\,dy=0,
$$

则称 $x$ 是 $f$ 的 Lebesgue 点。

在 Lebesgue 点处，函数在足够小邻域内的大部分取值都接近 $f(x)$。

### 4.2 微分定理

**定理（Lebesgue 微分定理）**  
若

$$
f\in L^1_{\mathrm{loc}}(\mathbb R^n),
$$

则几乎每个 $x\in\mathbb R^n$ 都是 $f$ 的 Lebesgue 点。

因此对几乎每个 $x$，

$$
\lim_{r\to0}
\fint_{B(x,r)}f(y)\,dy=f(x).
$$

这里的结论与函数在零测集上的取值无关。严格地说，局部平均恢复的是 $f$ 的某个几乎处处代表元。

### 4.3 一维形式

若 $f\in L^1_{\mathrm{loc}}(\mathbb R)$，则对几乎每个 $x$，

$$
\lim_{h\to0^+}
\frac{1}{2h}
\int_{x-h}^{x+h}
|f(t)-f(x)|\,dt=0.
$$

也可以使用单侧区间：

$$
\lim_{h\to0^+}
\frac1h\int_x^{x+h}f(t)\,dt=f(x)
$$

对几乎每个 $x$ 成立。

---

## 5. Lebesgue 密度定理

### 5.1 集合在点附近的密度

设 $E\subseteq\mathbb R^n$ 可测。定义 $E$ 在点 $x$ 的密度为

$$
D_E(x)
=\lim_{r\to0}
\frac{|E\cap B(x,r)|}{|B(x,r)|},
$$

只要该极限存在。

这个比值表示：在越来越小的球中，属于 $E$ 的部分所占比例。

### 5.2 密度点

若

$$
D_E(x)=1,
$$

则称 $x$ 是 $E$ 的密度点；若 $D_E(x)=0$，则称 $x$ 是 $E$ 的稀疏点。

### 5.3 密度定理

**定理（Lebesgue 密度定理）**  
若 $E\subseteq\mathbb R^n$ 可测，则

$$
D_E(x)=1
$$

对几乎每个 $x\in E$ 成立；同时

$$
D_E(x)=0
$$

对几乎每个 $x\in E^c$ 成立。

等价地，

$$
\lim_{r\to0}
\fint_{B(x,r)}\mathbf 1_E(y)\,dy
=\mathbf 1_E(x)
$$

几乎处处成立。

密度定理正是 Lebesgue 微分定理应用于示性函数 $\mathbf 1_E$ 的结果。

### 5.4 拓扑内部与密度点的区别

如果 $x$ 是 $E$ 的内点，则它一定是密度点；反向不成立。一个点附近可以始终存在补集中的点，但这些点所占比例仍趋于零。

例如，Smith–Volterra–Cantor 集内部为空，却有正测度，因此其中几乎每个点都是密度点。

---

## 6. 变上限积分的求导

### 6.1 不定积分

设 $f\in L^1([a,b])$，定义

$$
F(x)=\int_a^x f(t)\,dt,
\qquad x\in[a,b].
$$

$F$ 称为 $f$ 的 Lebesgue 不定积分。

### 6.2 几乎处处求导

**定理（微积分基本定理的第一部分）**  
若 $f\in L^1([a,b])$，则

$$
F'(x)=f(x)
$$

对几乎每个 $x\in[a,b]$ 成立。

其核心计算是

$$
\frac{F(x+h)-F(x)}{h}
=
\frac1h\int_x^{x+h}f(t)\,dt,
$$

右侧是 $f$ 在小区间上的平均值，Lebesgue 微分定理保证它几乎处处趋于 $f(x)$。

### 6.3 连续情形

若 $f$ 在点 $x$ 连续，则无需忽略零测集，直接有

$$
F'(x)=f(x).
$$

Lebesgue 理论把经典结论从连续函数推广到所有 $L^1$ 函数，但结论相应改为几乎处处成立。

---

## 7. Dini 导数

设 $f:[a,b]\to\mathbb R$，$x\in(a,b)$。

### 7.1 四个 Dini 导数

定义右上、右下 Dini 导数：

$$
D^+f(x)
=\limsup_{h\to0^+}
\frac{f(x+h)-f(x)}{h},
$$

$$
D_+f(x)
=\liminf_{h\to0^+}
\frac{f(x+h)-f(x)}{h}.
$$

定义左上、左下 Dini 导数：

$$
D^-f(x)
=\limsup_{h\to0^-}
\frac{f(x+h)-f(x)}{h},
$$

$$
D_-f(x)
=\liminf_{h\to0^-}
\frac{f(x+h)-f(x)}{h}.
$$

它们允许取扩充实数值。

### 7.2 与普通导数的关系

函数 $f$ 在 $x$ 可导，当且仅当四个 Dini 导数都有限且相等。此时共同的值就是

$$
f'(x).
$$

Dini 导数适合描述普通导数不存在时差商的上下振荡，也是证明单调函数几乎处处可微的重要工具。

---

## 8. 单调函数的微分

### 8.1 可微性定理

**定理（Lebesgue）**  
定义在 $[a,b]$ 上的单调函数几乎处处存在有限导数。

若 $f$ 单调增加，则

$$
f'(x)\ge0
$$

几乎处处成立。

### 8.2 导数的可积性

**定理**  
若 $f:[a,b]\to\mathbb R$ 单调增加，则 $f'$ 可测且可积，并有

$$
\int_a^b f'(x)\,dx
\le f(b)-f(a).
$$

不等号可能严格成立。

### 8.3 Cantor 函数

标准 Cantor 函数 $C:[0,1]\to[0,1]$ 连续、单调增加，并且

$$
C'(x)=0
$$

几乎处处成立，但

$$
C(1)-C(0)=1.
$$

因此

$$
\int_0^1 C'(x)\,dx=0
<
C(1)-C(0).
$$

这说明连续、单调且几乎处处可导，仍不足以保证函数增量可以由导数积分恢复。缺少的条件是绝对连续性。

---

## 9. Lipschitz 函数与 Rademacher 定理

### 9.1 Lipschitz 条件

**定义（Lipschitz 函数）**  
若存在常数 $L\ge0$，使

$$
|f(x)-f(y)|
\le L\|x-y\|
$$

对定义域中任意 $x,y$ 成立，则称 $f$ 为 Lipschitz 函数。

### 9.2 一维情形

若 $f:[a,b]\to\mathbb R$ 是 $L$-Lipschitz 函数，则 $f$ 几乎处处可导，并且

$$
|f'(x)|\le L
$$

几乎处处成立。

### 9.3 多维情形

**定理（Rademacher）**  
若

$$
f:\mathbb R^n\to\mathbb R^m
$$

局部 Lipschitz，则 $f$ 几乎处处可微。

这里的可微指存在一个线性映射 $Df(x)$，使

$$
\lim_{h\to0}
\frac{\|f(x+h)-f(x)-Df(x)h\|}{\|h\|}=0.
$$

Rademacher 定理是“较弱正则性仍蕴含几乎处处微分结构”的典型结果。

---

## 10. 导数与积分之间的三个层次

设 $F:[a,b]\to\mathbb R$。

### 10.1 从积分到导数

若

$$
F(x)=F(a)+\int_a^x f(t)\,dt,
\qquad f\in L^1([a,b]),
$$

则

$$
F'=f
$$

几乎处处成立。

### 10.2 从导数到函数增量

即使 $F'$ 几乎处处存在且可积，也不一定有

$$
F(x)-F(a)=\int_a^xF'(t)\,dt.
$$

Cantor 函数就是反例。

### 10.3 准确条件

要使

$$
F(x)=F(a)+\int_a^xF'(t)\,dt
$$

对所有 $x\in[a,b]$ 成立，需要 $F$ 具有绝对连续性。下一篇将系统整理这一条件。

---

## 11. 概念速查

| 概念 | 核心内容 |
|---|---|
| 局部可积 | 在每个紧集上绝对可积 |
| Vitali 覆盖 | 每点附近包含任意小的覆盖球 |
| 极大函数 $Mf$ | 所有尺度局部平均绝对值的上确界 |
| Lebesgue 点 | 局部平均振荡趋于零的点 |
| 密度点 | 集合在小球中所占比例趋于 $1$ |
| Dini 导数 | 单侧差商的上极限或下极限 |
| 单调函数 | 几乎处处存在有限导数 |
| Lipschitz 函数 | 距离按统一常数控制，几乎处处可微 |

---

## 12. 常见误区

### 12.1 几乎处处可导不等于处处可导

单调函数和 Lipschitz 函数都只保证几乎处处可导，例外点集仍可能非空甚至不可数。

### 12.2 导数几乎处处为零不等于函数为常数

Cantor 函数连续、单调且导数几乎处处为零，但不是常函数。

### 12.3 局部平均收敛不要求处处连续

Lebesgue 微分定理适用于 $L^1_{\mathrm{loc}}$ 函数，但只保证几乎处处成立。

### 12.4 密度点不等于内点

密度点只要求补集所占比例趋于零，不要求存在完整邻域包含于集合。

### 12.5 极大函数的弱型估计不等于 $L^1$ 有界性

一般不能由 $f\in L^1$ 推出 $Mf\in L^1$。弱型 $(1,1)$ 只控制超水平集。

### 12.6 可积导数不能自动恢复原函数

要由 $F'$ 的积分恢复 $F$，还需要绝对连续性等额外条件。

---

## 13. 本篇要点

1. Vitali 覆盖定理把高度重叠的局部球族化为几乎覆盖集合的不交子族。
2. Hardy–Littlewood 极大函数控制所有尺度上的局部平均。
3. 极大算子满足弱型 $(1,1)$ 估计，并在 $1<p\le\infty$ 时满足强型估计。
4. 局部可积函数几乎每一点都是 Lebesgue 点。
5. Lebesgue 密度定理是微分定理应用于示性函数的结果。
6. 变上限 Lebesgue 积分的导数几乎处处等于原函数。
7. Dini 导数描述普通导数不存在时差商的上下行为。
8. 单调函数几乎处处可导，但导数积分可能严格小于函数总增量。
9. Lipschitz 函数几乎处处可微；多维版本是 Rademacher 定理。
10. 由导数积分完全恢复函数的准确条件是绝对连续性。

下一篇将整理 **有界变差函数、Jordan 分解、绝对连续函数以及 Lebesgue 形式的微积分基本定理**。

---

## 参考教材

1. 江泽坚、吴智泉、纪友清，《实变函数论》，第 4 版，高等教育出版社。
2. 胡适耕，《实变函数》，第 2 版，高等教育出版社。
3. H. L. Royden and P. M. Fitzpatrick, *Real Analysis*, 4th ed.
4. G. B. Folland, *Real Analysis: Modern Techniques and Their Applications*, 2nd ed.
5. E. M. Stein and R. Shakarchi, *Real Analysis: Measure Theory, Integration, and Hilbert Spaces*.
