---
title: "复变函数 01：复数、复平面与复函数"
date: 2026-08-20T18:06:10+08:00
tags: ["复变函数", "复数", "复平面"]
description: "系统整理复数的代数与几何表示、模与辐角、复数的乘方和方根、扩充复平面、平面点集、复数列以及复函数的极限与连续性。"
draft: false
---

复变函数论研究定义在复数域上的函数。与实函数相比，复函数的自变量和函数值都同时包含两个实分量；但也正因为复数乘法把伸缩与旋转统一起来，复可导会产生远强于实可导的结构。

本文作为复变函数系列的预备篇，按照常见教材“复数与复平面—复函数的极限与连续—解析函数—复积分”的顺序，先整理进入复微分之前所需的基本概念。集合与一般映射的基础知识已在“数学分析 01”中介绍，这里不再重复。

本文约定

$$
\mathbb C=\{x+iy:x,y\in\mathbb R\},\qquad i^2=-1,
$$

并用 $\widehat{\mathbb C}=\mathbb C\cup\{\infty\}$ 表示扩充复平面。

---

## 1. 复数及其代数运算

### 1.1 复数

**定义（复数）**  
形如

$$
z=x+iy,\qquad x,y\in\mathbb R,
$$

的数称为复数，其中 $x$ 称为 $z$ 的实部，$y$ 称为 $z$ 的虚部，分别记作

$$
\operatorname{Re}z=x,\qquad \operatorname{Im}z=y.
$$

需要注意，虚部是实数 $y$，不是 $iy$。

两个复数相等，当且仅当其实部和虚部分别相等：

$$
x_1+iy_1=x_2+iy_2
\quad\Longleftrightarrow\quad
x_1=x_2,\ y_1=y_2.
$$

当 $y=0$ 时，$z=x$ 是实数。因此 $\mathbb R\subset\mathbb C$。

### 1.2 四则运算

设

$$
z_1=x_1+iy_1,\qquad z_2=x_2+iy_2.
$$

则

$$
z_1+z_2=(x_1+x_2)+i(y_1+y_2),
$$

$$
z_1z_2=(x_1x_2-y_1y_2)+i(x_1y_2+x_2y_1).
$$

当 $z_2\ne0$ 时，

$$
\frac{z_1}{z_2}
=\frac{(x_1+iy_1)(x_2-iy_2)}{x_2^2+y_2^2}.
$$

例如，

$$
\frac{1+2i}{1-i}
=-\frac12+\frac32i.
$$

复数在通常加法和乘法下构成域，但不存在与这些运算相容的全序关系。因此，一般不能写 $z_1<z_2$；比较复数“大小”时通常比较它们的模。

---

## 2. 共轭复数与模

### 2.1 共轭复数

**定义（共轭复数）**  
若 $z=x+iy$，则 $z$ 的共轭复数定义为

$$
\overline z=x-iy.
$$

共轭运算满足

$$
\overline{z_1+z_2}=\overline{z_1}+\overline{z_2},
\qquad
\overline{z_1z_2}=\overline{z_1}\,\overline{z_2},
$$

$$
\overline{\left(\frac{z_1}{z_2}\right)}
=\frac{\overline{z_1}}{\overline{z_2}}
\quad(z_2\ne0),
\qquad
\overline{\overline z}=z.
$$

实部与虚部可以写成

$$
\operatorname{Re}z=\frac{z+\overline z}{2},
\qquad
\operatorname{Im}z=\frac{z-\overline z}{2i}.
$$

并且

$$
z\in\mathbb R
\quad\Longleftrightarrow\quad
z=\overline z.
$$

### 2.2 复数的模

**定义（模）**  
复数 $z=x+iy$ 的模定义为

$$
|z|=\sqrt{x^2+y^2}.
$$

它满足

$$
|z|\ge0,\qquad
|z|=0\Longleftrightarrow z=0,
$$

$$
z\overline z=|z|^2,\qquad
|\overline z|=|z|,
$$

$$
|z_1z_2|=|z_1||z_2|,
\qquad
\left|\frac{z_1}{z_2}\right|
=\frac{|z_1|}{|z_2|}
\quad(z_2\ne0).
$$

因此，非零复数的倒数可以写成

$$
\frac1z=\frac{\overline z}{|z|^2}.
$$

### 2.3 三角不等式

**定理（三角不等式）**

$$
|z_1+z_2|\le |z_1|+|z_2|.
$$

**定理（反三角不等式）**

$$
\bigl||z_1|-|z_2|\bigr|
\le |z_1-z_2|.
$$

等号

$$
|z_1+z_2|=|z_1|+|z_2|
$$

成立，当且仅当 $z_1,z_2$ 中至少一个为零，或者二者方向相同，即存在实数 $\lambda>0$ 使 $z_1=\lambda z_2$ 或 $z_2=\lambda z_1$。

---

## 3. 复平面及其几何意义

### 3.1 复平面

把复数 $z=x+iy$ 与平面上的点 $(x,y)$ 对应，就得到**复平面**，也称 Gauss 平面。

- 横轴称为实轴；
- 纵轴称为虚轴；
- 原点对应复数 $0$；
- $|z|$ 是点 $z$ 到原点的 Euclid 距离；
- $|z_1-z_2|$ 是点 $z_1,z_2$ 之间的距离。

因此，

$$
|z-z_0|=r
$$

表示以 $z_0$ 为圆心、$r$ 为半径的圆，而

$$
|z-z_0|<r
$$

表示这个圆的内部。

### 3.2 加法、乘法的几何意义

复数加法对应平面向量的加法。若 $a\in\mathbb C$，则变换

$$
w=z+a
$$

表示把平面平移向量 $a$。

非零复数乘法则同时改变长度和方向。若

$$
a=\rho(\cos\alpha+i\sin\alpha),\qquad \rho>0,
$$

则

$$
w=az
$$

把每个向量的长度放大为原来的 $\rho$ 倍，并逆时针旋转角 $\alpha$。

特别地，乘以 $i$ 表示逆时针旋转 $\pi/2$。

---

## 4. 辐角、三角形式与指数形式

### 4.1 辐角

设 $z\ne0$。从正实轴到向量 $z$ 的有向角称为 $z$ 的一个**辐角**。若 $\theta$ 是一个辐角，则全部辐角为

$$
\arg z=\theta+2k\pi,\qquad k\in\mathbb Z.
$$

小写 $\arg z$ 常表示所有辐角组成的多值集合。本文把区间 $(-\pi,\pi]$ 中的唯一辐角称为**主辐角**，记作

$$
\operatorname{Arg}z\in(-\pi,\pi].
$$

不同教材也可能采用 $[0,2\pi)$ 等主值区间，使用主辐角公式时必须先确认约定。

零没有辐角，即 $\arg 0$ 无定义。

### 4.2 三角形式

设 $z=x+iy\ne0$，$r=|z|$，$\theta\in\arg z$，则

$$
x=r\cos\theta,\qquad y=r\sin\theta,
$$

从而

$$
z=r(\cos\theta+i\sin\theta).
$$

这称为复数的三角形式或极坐标形式。

例如，

$$
z=-1+\sqrt3\,i
$$

满足

$$
|z|=2,\qquad \operatorname{Arg}z=\frac{2\pi}{3},
$$

所以

$$
z=2\left(\cos\frac{2\pi}{3}
+i\sin\frac{2\pi}{3}\right).
$$

### 4.3 Euler 公式

**Euler 公式**

$$
e^{i\theta}=\cos\theta+i\sin\theta.
$$

因此复数可以写成指数形式

$$
z=re^{i\theta}.
$$

若

$$
z_1=r_1e^{i\theta_1},\qquad
z_2=r_2e^{i\theta_2},
$$

则

$$
z_1z_2=r_1r_2e^{i(\theta_1+\theta_2)},
$$

$$
\frac{z_1}{z_2}
=\frac{r_1}{r_2}e^{i(\theta_1-\theta_2)}
\quad(z_2\ne0).
$$

模相乘、辐角相加是复数乘法最重要的几何特征。

---

## 5. 复数的乘方与方根

### 5.1 De Moivre 公式

对任意整数 $n$，

$$
(\cos\theta+i\sin\theta)^n
=\cos(n\theta)+i\sin(n\theta).
$$

等价地，若 $z=re^{i\theta}$，则

$$
z^n=r^ne^{in\theta}.
$$

### 5.2 $n$ 次方根

设 $w=\rho e^{i\varphi}\ne0$，$n\in\mathbb N_+$。方程

$$
z^n=w
$$

在复数域中恰有 $n$ 个不同的根：

$$
z_k=\rho^{1/n}
\exp\left(i\frac{\varphi+2k\pi}{n}\right),
\qquad k=0,1,\ldots,n-1.
$$

这些根均匀分布在以原点为中心、$\rho^{1/n}$ 为半径的圆上，相邻两根的辐角相差 $2\pi/n$。

例如，方程

$$
z^4=-16
$$

的四个根为

$$
z_k=2\exp\left(i\left(\frac\pi4+\frac{k\pi}{2}\right)\right),
\qquad k=0,1,2,3,
$$

也就是

$$
\sqrt2(1+i),\quad
\sqrt2(-1+i),\quad
\sqrt2(-1-i),\quad
\sqrt2(1-i).
$$

> 符号 $\sqrt[n]{w}$ 在复数范围内通常是多值的。只有指定某个分支或主值之后，它才表示单值函数。

### 5.3 单位根

方程

$$
z^n=1
$$

的根称为 $n$ 次单位根：

$$
\omega_k=e^{2k\pi i/n},
\qquad k=0,1,\ldots,n-1.
$$

它们是单位圆上的正 $n$ 边形顶点，并满足

$$
\sum_{k=0}^{n-1}\omega_k=0
\qquad(n\ge2).
$$

---

## 6. 扩充复平面与 Riemann 球面

### 6.1 扩充复平面

在复平面上添加一个无穷远点 $\infty$，得到

$$
\widehat{\mathbb C}
=\mathbb C\cup\{\infty\},
$$

称为扩充复平面。

这里所有趋向不同方向的无穷远过程都对应同一个点 $\infty$。无穷远点的邻域可以写成

$$
\{z\in\mathbb C:|z|>R\}\cup\{\infty\},
\qquad R>0.
$$

在扩充复平面上通常约定

$$
z+\infty=\infty,\qquad
z\cdot\infty=\infty\quad(z\ne0),
$$

$$
\frac z0=\infty\quad(z\ne0),\qquad
\frac z\infty=0.
$$

但

$$
\infty-\infty,\qquad
0\cdot\infty,\qquad
\frac00,\qquad
\frac\infty\infty
$$

仍然没有定义。

### 6.2 Riemann 球面

将复平面与单位球面的北极作球极投影，可以在扩充复平面和球面之间建立一一对应：

- 每个有限复数对应球面上除北极外的一点；
- 无穷远点 $\infty$ 对应北极。

因此 $\widehat{\mathbb C}$ 也称为 **Riemann 球面**。

> 在普通复平面中，“趋于无穷”是离开每个有界集合；在 Riemann 球面上，它就是趋于一个普通的点 $\infty$。

扩充复平面的这种紧化，使有理函数在无穷远处的行为可以与有限点统一处理。

---

## 7. 复平面上的点集

设 $E\subseteq\mathbb C$，$z_0\in\mathbb C$。

### 7.1 邻域、圆盘与圆环

**定义（邻域）**  
点 $z_0$ 的 $\delta$-邻域为

$$
U(z_0,\delta)
=\{z:|z-z_0|<\delta\}.
$$

它是以 $z_0$ 为圆心、$\delta$ 为半径的开圆盘。

去心邻域为

$$
\mathring U(z_0,\delta)
=\{z:0<|z-z_0|<\delta\}.
$$

集合

$$
\{z:r<|z-z_0|<R\},
\qquad 0\le r<R,
$$

称为圆环域。

### 7.2 内点、聚点与边界点

**定义**

- 若存在 $\delta>0$ 使 $U(z_0,\delta)\subseteq E$，则 $z_0$ 是 $E$ 的内点；
- 若每个去心邻域 $\mathring U(z_0,\delta)$ 都与 $E$ 相交，则 $z_0$ 是 $E$ 的聚点；
- 若每个邻域 $U(z_0,\delta)$ 都同时与 $E$ 和 $E^c$ 相交，则 $z_0$ 是 $E$ 的边界点；
- 若 $z_0\in E$ 且不是聚点，则 $z_0$ 是 $E$ 的孤立点。

聚点不一定属于原集合，边界点也不一定属于原集合。

### 7.3 开集、闭集与有界集

**定义**

- 若 $E$ 的每个点都是内点，则 $E$ 是开集；
- 若 $E$ 包含自己的全部聚点，则 $E$ 是闭集；
- 若存在 $M>0$ 使每个 $z\in E$ 都满足 $|z|\le M$，则 $E$ 是有界集。

在 $\mathbb C$ 中，集合紧当且仅当它闭且有界。

需要注意，$\mathbb C$ 本身既是开集也是闭集，但不是有界集；在 Riemann 球面中，整个 $\widehat{\mathbb C}$ 是紧的。

### 7.4 区域与连通性

**定义（区域）**  
连通的开集称为区域，也常称为域。

**定义（单连通区域）**  
若区域 $D$ 内任意闭曲线都可以在 $D$ 内连续收缩为一点，则称 $D$ 为单连通区域。

直观地说，单连通区域没有“洞”。例如：

- 圆盘 $\{z:|z|<1\}$ 是单连通区域；
- 去心圆盘 $\{z:0<|z|<1\}$ 不是单连通区域；
- 圆环 $\{z:1<|z|<2\}$ 不是单连通区域。

在复平面中，区域 $D$ 单连通，当且仅当它在 Riemann 球面中的补集 $\widehat{\mathbb C}\setminus D$ 连通。

---

## 8. 复数列

### 8.1 复数列的极限

**定义（收敛）**  
复数列 $\{z_n\}$ 收敛于 $z_0$，是指对任意 $\varepsilon>0$，存在 $N\in\mathbb N_+$，使得当 $n>N$ 时，

$$
|z_n-z_0|<\varepsilon.
$$

记作

$$
\lim_{n\to\infty}z_n=z_0.
$$

设

$$
z_n=x_n+iy_n,\qquad z_0=x_0+iy_0.
$$

**定理（分量判别）**

$$
z_n\to z_0
\quad\Longleftrightarrow\quad
x_n\to x_0\ \text{且}\ y_n\to y_0.
$$

因此复数列的收敛仍可归结为两个实数列的收敛。

收敛复数列的极限唯一，并且每个收敛复数列都有界。

### 8.2 Cauchy 收敛准则

**定义（Cauchy 列）**  
若对任意 $\varepsilon>0$，存在 $N\in\mathbb N_+$，使得当 $m,n>N$ 时，

$$
|z_n-z_m|<\varepsilon,
$$

则称 $\{z_n\}$ 为 Cauchy 列。

**定理（Cauchy 收敛准则）**  
复数列收敛，当且仅当它是 Cauchy 列。

这表明 $\mathbb C$ 是完备度量空间。

### 8.3 极限的运算

若 $z_n\to z$，$w_n\to w$，则

$$
z_n+w_n\to z+w,
\qquad
z_nw_n\to zw.
$$

若 $w\ne0$，则从某一项开始 $w_n\ne0$，并且

$$
\frac{z_n}{w_n}\to\frac zw.
$$

此外，

$$
\overline{z_n}\to\overline z,
\qquad
|z_n|\to|z|.
$$

---

## 9. 复函数

### 9.1 复函数及其实部、虚部

设 $D\subseteq\mathbb C$。映射

$$
f:D\to\mathbb C
$$

称为定义在 $D$ 上的复函数。

令

$$
z=x+iy,\qquad
f(z)=u(x,y)+iv(x,y),
$$

其中 $u,v$ 是两个二元实函数，分别称为 $f$ 的实部函数与虚部函数。

> 复函数可以视为从 $\mathbb R^2$ 到 $\mathbb R^2$ 的映射，但复可导绝不只是两个分量分别可导。下一篇的 Cauchy–Riemann 方程将刻画这种额外约束。

### 9.2 复函数的极限

设 $z_0$ 是 $D$ 的聚点。

**定义（有限极限）**  
若存在 $A\in\mathbb C$，使对任意 $\varepsilon>0$，都存在 $\delta>0$，当

$$
z\in D,\qquad 0<|z-z_0|<\delta
$$

时均有

$$
|f(z)-A|<\varepsilon,
$$

则称 $f(z)$ 在 $z\to z_0$ 时以 $A$ 为极限，记作

$$
\lim_{z\to z_0}f(z)=A.
$$

极限存在时与 $z$ 趋近 $z_0$ 的路径无关。因此，只要沿两条路径得到不同结果，就可以断定极限不存在；但检查有限条路径结果相同，不能证明极限存在。

**定理（Heine 归结原则）**  

$$
\lim_{z\to z_0}f(z)=A
$$

当且仅当对 $D\setminus\{z_0\}$ 中任意满足 $z_n\to z_0$ 的数列，都有

$$
f(z_n)\to A.
$$

### 9.3 极限的分量判别

若

$$
f(z)=u(x,y)+iv(x,y),\qquad
A=a+ib,
$$

则

$$
\lim_{z\to z_0}f(z)=A
$$

当且仅当

$$
\lim_{(x,y)\to(x_0,y_0)}u(x,y)=a,
\qquad
\lim_{(x,y)\to(x_0,y_0)}v(x,y)=b.
$$

复函数极限的和、积、商法则与实函数相同，其中商的极限要求分母的极限不为零。

---

## 10. 连续性与无穷远处的极限

### 10.1 连续性

**定义（点处连续）**  
若 $f$ 在 $z_0\in D$ 处满足

$$
\lim_{\substack{z\to z_0\\z\in D}}f(z)=f(z_0),
$$

则称 $f$ 在 $z_0$ 处连续。

若 $f$ 在 $D$ 的每一点都连续，则称 $f$ 在 $D$ 上连续。

设 $f=u+iv$。函数 $f$ 在 $z_0$ 连续，当且仅当 $u,v$ 作为二元实函数都在 $(x_0,y_0)$ 连续。

连续函数的和、差、积仍连续；在分母不为零处，商也连续；连续函数的复合仍连续。

特别地：

- 多项式在整个 $\mathbb C$ 上连续；
- 有理函数在分母不为零的点连续；
- $z\mapsto\overline z$、$z\mapsto|z|$、$\operatorname{Re}z$、$\operatorname{Im}z$ 都在 $\mathbb C$ 上连续。

连续不等于复可导。例如共轭函数 $f(z)=\overline z$ 处处连续，但它在任何点都不复可导。

### 10.2 与无穷远有关的极限

**定义**

$$
\lim_{z\to z_0}f(z)=\infty
$$

是指对任意 $M>0$，存在 $\delta>0$，使

$$
0<|z-z_0|<\delta
\quad\Longrightarrow\quad
|f(z)|>M.
$$

而

$$
\lim_{z\to\infty}f(z)=A
$$

是指对任意 $\varepsilon>0$，存在 $R>0$，使

$$
|z|>R
\quad\Longrightarrow\quad
|f(z)-A|<\varepsilon.
$$

这两类极限可以通过变量替换 $w=1/z$ 化为有限点处的极限：

$$
\lim_{z\to\infty}f(z)=A
\quad\Longleftrightarrow\quad
\lim_{w\to0}f\left(\frac1w\right)=A.
$$

---

## 11. 概念速查

| 概念 | 记号或判定要点 |
|---|---|
| 共轭复数 | $\overline z=x-iy$ |
| 模 | $\lvert z\rvert=\sqrt{x^2+y^2}$，表示到原点的距离 |
| 辐角 | $\arg z=\theta+2k\pi$，是多值的 |
| 主辐角 | 本文约定 $\operatorname{Arg}z\in(-\pi,\pi]$ |
| 三角形式 | $z=r(\cos\theta+i\sin\theta)$ |
| 指数形式 | $z=re^{i\theta}$ |
| 扩充复平面 | $\widehat{\mathbb C}=\mathbb C\cup\{\infty\}$ |
| 区域 | 连通的开集 |
| 单连通区域 | 区域内闭曲线均可在区域内收缩为一点 |
| 复数列收敛 | 实部数列和虚部数列分别收敛 |
| 复函数极限 | 对所有趋近路径必须得到同一结果 |
| 连续 | 极限等于函数在该点的值 |

---

## 12. 常见误区

### 12.1 虚部不是含有 $i$ 的项

若 $z=3-2i$，则

$$
\operatorname{Im}z=-2,
$$

而不是 $-2i$。

### 12.2 $\arg z$ 与 $\operatorname{Arg}z$ 不同

$\arg z$ 表示相差 $2k\pi$ 的全部辐角；$\operatorname{Arg}z$ 是选定区间中的一个主值。主辐角通常不满足无条件的普通加法：

$$
\operatorname{Arg}(z_1z_2)
\ne \operatorname{Arg}z_1+\operatorname{Arg}z_2
$$

时有发生，右侧可能还需要加减 $2\pi$ 才回到主值区间。

### 12.3 共轭与倒数不可混淆

一般来说，

$$
\frac1z\ne\overline z.
$$

只有当 $|z|=1$ 时，才有 $1/z=\overline z$。

### 12.4 复数方根通常有多个值

方程 $z^n=w\ne0$ 有 $n$ 个不同的根。写 $\sqrt[n]{w}$ 时，如果没有指定分支，就不能把它当然地视为全平面上的单值连续函数。

### 12.5 无穷远点不是普通复数

$\infty\notin\mathbb C$。加入 $\infty$ 是为了得到扩充复平面，包含 $\infty$ 的运算也不是普通域运算，不定式仍然没有定义。

### 12.6 检查几条路径不能证明极限存在

沿不同路径得到不同极限足以否定极限；但沿有限条路径结果相同，只能提供线索，不能代替 $\varepsilon$-$\delta$ 证明或其他充分判据。

### 12.7 连续远弱于解析

复函数可以处处连续却处处不复可导。复可导要求差商对复平面中的所有趋近方向具有同一个极限。

---

## 13. 本篇要点

1. 复数域把平面点与代数运算统一起来，但复数之间没有与域运算相容的大小顺序。
2. 共轭和模满足良好的代数性质，模同时给出复平面上的 Euclid 距离。
3. 非零复数可以写成三角形式或指数形式；乘法对应模相乘、辐角相加。
4. 非零复数的 $n$ 次方根共有 $n$ 个，均匀分布在同一个圆周上。
5. 扩充复平面把所有无穷远方向合并为一点，并可等同于 Riemann 球面。
6. 区域是连通开集；单连通区域直观上没有洞。
7. 复数列收敛等价于实部、虚部分别收敛，$\mathbb C$ 是完备的。
8. 复函数极限必须与趋近路径无关；连续性可以按实部和虚部分别判定。
9. 连续不保证复可导，复可导所需的额外结构将在下一篇展开。

下一篇将整理 **复导数、解析函数、Cauchy–Riemann 方程、调和函数以及初等解析函数**。

---

## 参考教材

1. 钟玉泉，《复变函数论》，第 5 版，高等教育出版社。
2. 余家荣，《复变函数》，高等教育出版社。
3. Lars V. Ahlfors, *Complex Analysis*, 3rd ed.
4. James Ward Brown and Ruel V. Churchill, *Complex Variables and Applications*, 9th ed.
5. John B. Conway, *Functions of One Complex Variable I*, 2nd ed.
