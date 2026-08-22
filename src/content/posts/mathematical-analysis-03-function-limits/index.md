---
title: "数学分析 03：函数极限"
date: 2026-08-22T17:20:00+08:00
tags: ["数学分析", "函数极限", "极限"]
description: "系统整理函数极限、单侧极限、无穷极限、Heine 归结原则、Cauchy 准则、极限运算与无穷小量比较。"
draft: false
---

数列极限研究离散指标 $n\to\infty$ 时的变化；函数极限则研究自变量趋近某一点或趋于无穷时，函数值的变化规律。

---

## 1. 聚点与函数极限

### 1.1 定义域的聚点

**定义（聚点）**  
设 $D\subseteq\mathbb R$。若点 $x_0$ 的任意去心邻域都含有 $D$ 中的点，即对任意 $\delta>0$，

$$
\mathring U(x_0,\delta)\cap D\ne\varnothing,
$$

则称 $x_0$ 为 $D$ 的聚点。

$x_0$ 可以属于 $D$，也可以不属于 $D$。只有当 $x_0$ 是定义域的聚点时，讨论 $x\to x_0$ 的函数极限才有意义。

### 1.2 有限极限

**定义（函数在一点的极限）**  
设函数 $f$ 定义在 $x_0$ 的某个去心邻域内。若对任意 $\varepsilon>0$，都存在 $\delta>0$，使得当

$$
0<|x-x_0|<\delta
$$

时总有

$$
|f(x)-A|<\varepsilon,
$$

则称当 $x\to x_0$ 时 $f(x)$ 的极限为 $A$，记作

$$
\lim_{x\to x_0}f(x)=A.
$$

这里的 $\delta$ 可以依赖于 $\varepsilon$，但不能依赖于具体的 $x$。

> 定义使用去心邻域，所以极限与 $f(x_0)$ 是否存在、以及 $f(x_0)$ 取什么值无关。

### 1.3 极限定义的否定

命题

$$
\lim_{x\to x_0}f(x)\ne A
$$

表示存在某个 $\varepsilon_0>0$，使得对任意 $\delta>0$，都能找到 $x\in D$ 满足

$$
0<|x-x_0|<\delta,
\qquad
|f(x)-A|\ge\varepsilon_0.
$$

这个形式常用于证明某个极限不存在。

---

## 2. 单侧极限

### 2.1 左极限与右极限

**定义（左极限）**  
若对任意 $\varepsilon>0$，存在 $\delta>0$，使得

$$
x_0-\delta<x<x_0
\quad\Longrightarrow\quad
|f(x)-A|<\varepsilon,
$$

则称 $A$ 为 $f$ 在 $x_0$ 处的左极限，记作

$$
\lim_{x\to x_0^-}f(x)=A
\quad\text{或}\quad
f(x_0-0)=A.
$$

右极限 $\lim_{x\to x_0^+}f(x)$ 类似定义。

**定理（双侧极限的判定）**

$$
\lim_{x\to x_0}f(x)=A
$$

当且仅当

$$
\lim_{x\to x_0^-}f(x)
=\lim_{x\to x_0^+}f(x)
=A.
$$

例如符号函数

$$
\operatorname{sgn}x=
\begin{cases}
-1,&x<0,\\
0,&x=0,\\
1,&x>0
\end{cases}
$$

在 $0$ 处的左右极限分别为 $-1$ 和 $1$，所以双侧极限不存在。

---

## 3. 自变量趋于无穷

### 3.1 $x\to+\infty$

**定义**  
设函数 $f$ 在某个区间 $(a,+\infty)$ 上有定义。若对任意 $\varepsilon>0$，都存在 $X>0$，使得

$$
x>X\quad\Longrightarrow\quad |f(x)-A|<\varepsilon,
$$

则称

$$
\lim_{x\to+\infty}f(x)=A.
$$

$x\to-\infty$ 的情形类似。本文始终把两个方向分别写成 $x\to+\infty$ 和 $x\to-\infty$，以避免歧义。若某教材约定 $x\to\infty$ 表示 $|x|\to+\infty$，则

$$
\lim_{x\to\infty}f(x)=A.
$$

成立当且仅当两个方向的极限都等于 $A$。

---

## 4. 无穷极限

### 4.1 趋于正无穷

**定义**  
设 $f$ 定义在 $x_0$ 的某个去心邻域内。若对任意 $M>0$，都存在 $\delta>0$，使得

$$
0<|x-x_0|<\delta
\quad\Longrightarrow\quad
f(x)>M,
$$

则称

$$
\lim_{x\to x_0}f(x)=+\infty.
$$

趋于 $-\infty$ 类似定义。自变量趋于无穷而函数值也趋于无穷的情形，只需同时替换相应的邻域条件。

$+\infty$ 和 $-\infty$ 不是实数，因此无穷极限不属于有限极限。

### 4.2 垂直与水平渐近线

若

$$
\lim_{x\to x_0^\pm}f(x)=\pm\infty,
$$

则直线 $x=x_0$ 是函数图像的一条垂直渐近线。

若

$$
\lim_{x\to+\infty}f(x)=A
$$

或

$$
\lim_{x\to-\infty}f(x)=A,
$$

则直线 $y=A$ 是相应方向上的水平渐近线。

---

## 5. 极限的基本性质

### 5.1 唯一性与局部性质

**定理**

1. 函数极限若存在，则必定唯一；
2. 若 $\lim_{x\to x_0}f(x)=A$，则 $f$ 在 $x_0$ 的某个去心邻域内有界；
3. 若 $A>0$，则 $f$ 在 $x_0$ 的某个去心邻域内为正；
4. 若 $A<0$，则 $f$ 在 $x_0$ 的某个去心邻域内为负。

**定理（保序性）**  
若在 $x_0$ 的某个去心邻域内有

$$
f(x)\le g(x),
$$

并且

$$
\lim_{x\to x_0}f(x)=A,\qquad
\lim_{x\to x_0}g(x)=B,
$$

则 $A\le B$。

### 5.2 四则运算

若

$$
\lim_{x\to x_0}f(x)=A,\qquad
\lim_{x\to x_0}g(x)=B,
$$

则

$$
\lim_{x\to x_0}[f(x)\pm g(x)]=A\pm B,
$$

$$
\lim_{x\to x_0}f(x)g(x)=AB.
$$

当 $B\ne0$ 时，

$$
\lim_{x\to x_0}\frac{f(x)}{g(x)}=\frac AB.
$$

### 5.3 夹逼定理

**定理（夹逼定理）**  
若在 $x_0$ 的某个去心邻域内

$$
f(x)\le g(x)\le h(x),
$$

并且

$$
\lim_{x\to x_0}f(x)
=\lim_{x\to x_0}h(x)
=A,
$$

则

$$
\lim_{x\to x_0}g(x)=A.
$$

常用形式为

$$
|g(x)-A|\le\varphi(x),
\qquad
\varphi(x)\to0
\quad\Longrightarrow\quad
g(x)\to A.
$$

---

## 6. Heine 归结原则

**定理（Heine 归结原则）**  
设 $x_0$ 是 $D$ 的聚点。则

$$
\lim_{\substack{x\to x_0\\x\in D}}f(x)=A
$$

当且仅当对任意满足

$$
x_n\in D\setminus\{x_0\},
\qquad
x_n\to x_0
$$

的数列 $\{x_n\}$，都有

$$
f(x_n)\to A.
$$

Heine 原则把函数极限问题转化为数列极限问题。

**推论（极限不存在的判定）**  
若存在两个趋于 $x_0$ 的数列 $\{x_n\}$、$\{y_n\}$，使得

$$
\lim_{n\to\infty}f(x_n)
\ne
\lim_{n\to\infty}f(y_n),
$$

则 $\lim_{x\to x_0}f(x)$ 不存在。

---

## 7. Cauchy 准则

**定理（函数极限的 Cauchy 准则）**  
有限极限

$$
\lim_{x\to x_0}f(x)
$$

存在，当且仅当对任意 $\varepsilon>0$，存在 $\delta>0$，使得任意 $x',x''\in D$ 只要满足

$$
0<|x'-x_0|<\delta,
\qquad
0<|x''-x_0|<\delta,
$$

就有

$$
|f(x')-f(x'')|<\varepsilon.
$$

Cauchy 准则不需要预先知道候选极限，其成立依赖于实数系的完备性。

---

## 8. 无穷小量与等价无穷小

### 8.1 无穷小量

若在某一极限过程中

$$
\alpha(x)\to0,
$$

则称 $\alpha(x)$ 为该过程中的无穷小量。

函数 $f(x)\to A$ 当且仅当

$$
f(x)=A+\alpha(x),
\qquad
\alpha(x)\to0.
$$

有限个无穷小量的和与乘积仍是无穷小量；有界函数与无穷小量的乘积仍是无穷小量。

### 8.2 同阶与等价无穷小

设 $\alpha(x)\to0$，$\beta(x)\to0$。

- 若 $\alpha(x)/\beta(x)\to c\ne0$，称二者为同阶无穷小；
- 若 $\alpha(x)/\beta(x)\to1$，称二者为等价无穷小，记作

  $$
  \alpha(x)\sim\beta(x).
  $$

当 $x\to0$ 时，常用等价无穷小包括

$$
\sin x\sim x,\qquad
\tan x\sim x,\qquad
\arcsin x\sim x,
$$

$$
\ln(1+x)\sim x,\qquad
e^x-1\sim x,
$$

$$
(1+x)^\alpha-1\sim\alpha x.
$$

等价无穷小通常可以在乘积或商中替换，但不能直接在加减式中替换。

---

## 9. 两个基本极限

数学分析中最常用的两个基本极限是

$$
\lim_{x\to0}\frac{\sin x}{x}=1
$$

和

$$
\lim_{x\to0}(1+x)^{1/x}=e.
$$

第二个极限也可写成

$$
\lim_{x\to\infty}\left(1+\frac1x\right)^x=e.
$$

由它们可以导出大量三角、指数与对数函数的极限。

---

## 10. 未定式

直接代入极限运算法则无法确定结果的形式称为未定式，常见类型包括

$$
\frac00,\quad
\frac{\infty}{\infty},\quad
0\cdot\infty,\quad
\infty-\infty,
$$

$$
1^\infty,\quad
0^0,\quad
\infty^0.
$$

“未定式”只表示现有信息不足，并不表示极限不存在。处理方法包括恒等变形、夹逼、等价无穷小、Taylor 展开和 L’Hôpital 法则。

---

## 11. 本篇要点

1. 函数极限只考察去心邻域中的函数值，与点值无关。
2. 双侧极限存在当且仅当左右极限存在且相等。
3. Heine 原则在函数极限与数列极限之间建立了桥梁。
4. Cauchy 准则无需预先知道极限值。
5. 等价无穷小适合乘除式，不能随意用于加减式。
6. 有限极限、无穷极限和自变量趋于无穷必须分别理解。

下一篇将整理**连续函数的定义、间断点分类以及连续性的运算规则**。

---

## 参考教材

1. 华东师范大学数学系，《数学分析（上册）》，高等教育出版社。
2. Walter Rudin, *Principles of Mathematical Analysis*, 3rd ed.
3. Stephen Abbott, *Understanding Analysis*, 2nd ed.
