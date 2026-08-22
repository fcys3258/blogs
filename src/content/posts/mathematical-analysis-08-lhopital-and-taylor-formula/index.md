---
title: "数学分析 08：L’Hôpital 法则与 Taylor 公式"
date: 2026-08-22T17:25:00+08:00
tags: ["数学分析", "Taylor公式", "L’Hôpital法则"]
description: "系统整理 L’Hôpital 法则的适用条件、各类未定式的转化、Taylor 公式及常用 Maclaurin 展开。"
draft: false
---

L’Hôpital 法则利用导数之比处理特定未定式，Taylor 公式则用多项式及余项描述函数的局部结构。

---

## 1. L’Hôpital 法则

### 1.1 $0/0$ 型

**定理**  
设当 $x\to x_0$ 时：

1. $f(x)\to0$，$g(x)\to0$；
2. $f,g$ 在 $x_0$ 的某个去心邻域内可导；
3. $g'(x)\ne0$；
4. 极限

   $$
   \lim_{x\to x_0}\frac{f'(x)}{g'(x)}=A
   $$

   存在，其中 $A$ 可以是有限值或正负无穷；

则

$$
\lim_{x\to x_0}\frac{f(x)}{g(x)}=A.
$$

相应的单侧极限以及 $x\to\pm\infty$ 情形也成立。

### 1.2 $\infty/\infty$ 型

**定理**  
将条件中的 $f(x)\to0$、$g(x)\to0$ 换为

$$
|f(x)|\to\infty,\qquad |g(x)|\to\infty,
$$

其余条件不变，仍有

$$
\lim\frac{f(x)}{g(x)}
=\lim\frac{f'(x)}{g'(x)}.
$$

### 1.3 使用注意

L’Hôpital 法则不能反向使用。即使

$$
\lim\frac{f(x)}{g(x)}
$$

存在，

$$
\lim\frac{f'(x)}{g'(x)}
$$

也可能不存在。

在使用前必须先确认原式确实属于 $0/0$ 型或 $\infty/\infty$ 型。

法则可以连续使用多次，但每次都必须重新检查条件。

---

## 2. 其他未定式的转化

### 2.1 $0\cdot\infty$

乘积

$$
f(x)g(x)
$$

可改写为

$$
\frac{f(x)}{1/g(x)}
\quad\text{或}\quad
\frac{g(x)}{1/f(x)},
$$

从而转化为商的未定式。

### 2.2 $\infty-\infty$

通常通过通分、有理化或提取主项转化。例如

$$
\sqrt{x^2+x}-x
=\frac{x}{\sqrt{x^2+x}+x}.
$$

### 2.3 幂指型

对

$$
1^\infty,\qquad 0^0,\qquad \infty^0
$$

型，令

$$
y=u(x)^{v(x)}
$$

并取对数：

$$
\ln y=v(x)\ln u(x).
$$

先求 $\ln y$ 的极限，再利用指数函数连续性还原。

---

## 3. 高阶无穷小与阶的比较

设 $\alpha(x),\beta(x)\to0$。

- 若 $\alpha/\beta\to0$，称 $\alpha$ 是比 $\beta$ 高阶的无穷小，记作

  $$
  \alpha=o(\beta);
  $$

- 若 $\alpha/\beta\to c\ne0$，称二者同阶；
- 若 $\alpha/\beta\to1$，称二者等价；
- 若 $\alpha/\beta^k\to c\ne0$，称 $\alpha$ 是关于 $\beta$ 的 $k$ 阶无穷小。

Landau 记号

$$
\alpha=O(\beta)
$$

表示 $\alpha/\beta$ 在相应极限过程中有界。

---

## 4. Taylor 多项式

设函数 $f$ 在 $x_0$ 具有直到 $n$ 阶的导数。定义 $n$ 次 Taylor 多项式

$$
T_n(x)
=\sum_{k=0}^n
\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k.
$$

即

$$
T_n(x)
=f(x_0)+f'(x_0)(x-x_0)
+\cdots+
\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n.
$$

当 $x_0=0$ 时，称为 Maclaurin 多项式。

Taylor 多项式在 $x_0$ 处与原函数具有相同的前 $n$ 阶导数。

---

## 5. Taylor 公式

### 5.1 Peano 余项

**定理（Taylor 公式的 Peano 形式）**  
若 $f$ 在 $x_0$ 处 $n$ 阶可导，则

$$
f(x)
=\sum_{k=0}^n
\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k
+o\bigl((x-x_0)^n\bigr).
$$

Peano 形式适合求极限和比较无穷小的阶。

### 5.2 Lagrange 余项

**定理（Taylor 公式的 Lagrange 形式）**  
若 $f$ 在连接 $x_0$ 与 $x$ 的闭区间上具有直到 $n$ 阶的连续导数，在开区间内存在 $n+1$ 阶导数，则存在位于 $x_0$ 与 $x$ 之间的 $\xi$，使

$$
f(x)
=T_n(x)
+\frac{f^{(n+1)}(\xi)}{(n+1)!}(x-x_0)^{n+1}.
$$

余项记作

$$
R_n(x)
=\frac{f^{(n+1)}(\xi)}{(n+1)!}(x-x_0)^{n+1}.
$$

Lagrange 余项适合估计近似误差。

### 5.3 一阶情形

$n=0$ 时，Taylor 公式退化为 Lagrange 中值公式：

$$
f(x)=f(x_0)+f'(\xi)(x-x_0).
$$

---

## 6. 常用 Maclaurin 展开

当 $x\to0$ 时：

$$
e^x
=1+x+\frac{x^2}{2!}
+\cdots+
\frac{x^n}{n!}
+o(x^n),
$$

$$
\sin x
=x-\frac{x^3}{3!}
+\frac{x^5}{5!}
-\cdots,
$$

$$
\cos x
=1-\frac{x^2}{2!}
+\frac{x^4}{4!}
-\cdots,
$$

$$
\ln(1+x)
=x-\frac{x^2}{2}
+\frac{x^3}{3}
-\cdots,
$$

$$
(1+x)^\alpha
=1+\alpha x
+\frac{\alpha(\alpha-1)}{2!}x^2
+\cdots,
$$

$$
\frac1{1-x}
=1+x+x^2+\cdots+x^n+O(x^{n+1}).
$$

三角、对数和二项式展开只在相应定义域及余项条件下使用。

### 6.1 常见低阶形式

$$
\sin x=x-\frac{x^3}{6}+o(x^3),
$$

$$
\cos x=1-\frac{x^2}{2}+o(x^2),
$$

$$
e^x=1+x+\frac{x^2}{2}+o(x^2),
$$

$$
\ln(1+x)=x-\frac{x^2}{2}+o(x^2).
$$

---

## 7. Taylor 公式的用途

### 7.1 求极限

展开到首个不相消的非零项，即可比较分子与分母的阶。

例如

$$
1-\cos x=\frac{x^2}{2}+o(x^2),
$$

所以

$$
\lim_{x\to0}\frac{1-\cos x}{x^2}
=\frac12.
$$

### 7.2 近似计算

用 $T_n(x)$ 代替 $f(x)$，并通过余项估计误差：

$$
f(x)=T_n(x)+R_n(x).
$$

### 7.3 判断极值

若

$$
f'(x_0)=\cdots=f^{(n-1)}(x_0)=0,
\qquad
f^{(n)}(x_0)\ne0,
$$

则首个非零高阶项决定局部形态：

- $n$ 为偶数且 $f^{(n)}(x_0)>0$：严格局部最小；
- $n$ 为偶数且 $f^{(n)}(x_0)<0$：严格局部最大；
- $n$ 为奇数：不是局部极值点。

---

## 8. 方法选择

| 极限结构 | 优先方法 |
|---|---|
| 简单乘积或商 | 极限运算、等价无穷小 |
| $0/0$、$\infty/\infty$ 且易求导 | L’Hôpital 法则 |
| 多项相消，需要知道阶 | Taylor 展开 |
| 需要明确误差界 | Taylor 公式的 Lagrange 余项 |
| 幂指未定式 | 先取对数 |

Taylor 展开通常比反复使用 L’Hôpital 法则提供更多结构信息。

---

## 9. 常见误区

1. L’Hôpital 法则只直接适用于 $0/0$ 和 $\infty/\infty$ 型。
2. 导数之比没有极限时，原函数之比仍可能有极限。
3. 等价无穷小不能随意替换加减式中的一项。
4. Taylor 多项式不等于原函数，必须保留余项信息。
5. 写到 $x^n$ 的展开必须确认余项确实为 $o(x^n)$ 或相应阶。

---

## 10. 本篇要点

1. L’Hôpital 法则用导数之比处理两类商式未定式。
2. 其他未定式通常先转化为商式或对数形式。
3. Taylor 多项式匹配函数在展开点处的有限阶导数。
4. Peano 余项适合求极限，Lagrange 余项适合误差估计。
5. Taylor 展开揭示函数局部行为和无穷小的阶。

下一篇将整理**单调性、极值、凹凸性、渐近线以及函数图像分析**。

---

## 参考教材

1. 华东师范大学数学系，《数学分析（上册）》，高等教育出版社。
2. Walter Rudin, *Principles of Mathematical Analysis*, 3rd ed.
