---
title: "复变函数 02：复导数与解析函数"
date: 2026-08-20T18:12:44+08:00
tags: ["复变函数", "解析函数", "Cauchy–Riemann方程"]
description: "系统整理复导数、解析函数、Cauchy–Riemann 方程、Wirtinger 导数、保角映射、调和函数以及指数、对数和三角函数等初等解析函数。"
draft: false
---

复函数的极限与连续性可以逐分量地归结为二元实函数，但复可导性要严格得多：差商必须在复平面中的所有方向上趋于同一个值。这一要求把函数的实部和虚部紧密联系起来，并最终导出解析函数特有的刚性。

本文承接“复变函数 01”，系统整理复导数、Cauchy–Riemann 方程、解析函数、保角性与调和函数，并介绍后续复积分中反复使用的初等解析函数。仍以定义和定理为主，不展开证明。

除非特别说明，本文设

$$
z=x+iy,\qquad
f(z)=u(x,y)+iv(x,y),
$$

其中 $u,v$ 为实值函数。

---

## 1. 复导数

### 1.1 复可导的定义

**定义（复导数）**  
设 $f$ 定义在点 $z_0$ 的某个邻域内。若极限

$$
\lim_{\Delta z\to0}
\frac{f(z_0+\Delta z)-f(z_0)}{\Delta z}
$$

存在，则称 $f$ 在 $z_0$ 处复可导，并把这个极限称为 $f$ 在 $z_0$ 处的导数，记作

$$
f'(z_0)
=\lim_{\Delta z\to0}
\frac{f(z_0+\Delta z)-f(z_0)}{\Delta z}.
$$

这里 $\Delta z$ 可以沿复平面中的任意路径趋于 $0$。只有所有方向和路径得到同一个有限极限，复导数才存在。

等价地，$f$ 在 $z_0$ 处可导，当且仅当存在复数 $A$，使

$$
f(z_0+\Delta z)
=f(z_0)+A\Delta z+o(|\Delta z|),
\qquad \Delta z\to0.
$$

此时 $A=f'(z_0)$。

> 实函数的导数只比较左右两个方向；复导数则要同时兼容平面中的无穷多个方向。这是复可导远强于实可导的根本原因。

### 1.2 可导与连续

**定理**  
若 $f$ 在 $z_0$ 处复可导，则 $f$ 在 $z_0$ 处连续。

反之不成立。例如

$$
f(z)=\overline z
$$

在整个 $\mathbb C$ 上连续，却在任何点都不复可导。

### 1.3 基本求导法则

若 $f,g$ 在 $z_0$ 处可导，$c\in\mathbb C$，则

$$
(f+g)'=f'+g',\qquad
(cf)'=cf',
$$

$$
(fg)'=f'g+fg'.
$$

若 $g(z_0)\ne0$，则

$$
\left(\frac fg\right)'
=\frac{f'g-fg'}{g^2}.
$$

若复合函数有意义，则链式法则为

$$
(g\circ f)'(z_0)
=g'(f(z_0))f'(z_0).
$$

特别地，

$$
(z^n)'=nz^{n-1},
\qquad n\in\mathbb N_+.
$$

---

## 2. Cauchy–Riemann 方程

### 2.1 Cartesian 坐标形式

设

$$
f(z)=u(x,y)+iv(x,y).
$$

**定理（必要条件）**  
若 $f$ 在 $z_0=x_0+iy_0$ 处复可导，则 $u,v$ 在 $(x_0,y_0)$ 处满足 Cauchy–Riemann 方程

$$
u_x=v_y,\qquad
u_y=-v_x.
$$

并且导数可以写成

$$
f'(z_0)
=u_x+iv_x
=v_y-iu_y.
$$

这是分别让增量沿实轴方向和虚轴方向趋于 $0$ 所得到的一致性条件。

### 2.2 充分条件

仅在一点满足 Cauchy–Riemann 方程，通常不足以保证复可导。

**定理（常用充分条件）**  
若 $u,v$ 在 $z_0$ 的某个邻域内具有一阶偏导数，这些偏导数在 $z_0$ 处连续，并且在 $z_0$ 满足

$$
u_x=v_y,\qquad u_y=-v_x,
$$

则 $f=u+iv$ 在 $z_0$ 处复可导。

更本质地说，只要 $u,v$ 在 $(x_0,y_0)$ 处作为二元实函数可微，并在该点满足 Cauchy–Riemann 方程，就足以推出 $f$ 在 $z_0$ 处复可导。

### 2.3 反例：只验证方程还不够

定义

$$
f(z)=
\begin{cases}
\displaystyle
\frac{x^3+iy^3}{x^2+y^2},
&z=x+iy\ne0,\\[6pt]
0,&z=0.
\end{cases}
$$

在原点，

$$
u_x=1,\quad u_y=0,\quad
v_x=0,\quad v_y=1,
$$

所以 Cauchy–Riemann 方程成立。

但是沿实轴 $z=t$ 有

$$
\frac{f(z)-f(0)}z=1,
$$

而沿直线 $z=t(1+i)$ 有

$$
\frac{f(z)-f(0)}z=\frac12.
$$

两个方向的差商极限不同，因此 $f'(0)$ 不存在。这个例子说明，还必须控制函数在该点附近的整体线性逼近。

---

## 3. 三个基本例子

### 3.1 多项式 $f(z)=z^2$

将

$$
f(z)=z^2=(x^2-y^2)+i(2xy)
$$

写成

$$
u=x^2-y^2,\qquad v=2xy.
$$

则

$$
u_x=2x=v_y,\qquad
u_y=-2y=-v_x.
$$

Cauchy–Riemann 方程在整个复平面成立，并且

$$
f'(z)=2x+2iy=2z.
$$

### 3.2 共轭函数 $f(z)=\overline z$

此时

$$
u=x,\qquad v=-y,
$$

所以

$$
u_x=1,\qquad v_y=-1.
$$

Cauchy–Riemann 方程处处不成立，因此 $\overline z$ 处处不可导。

从差商也可以直接看出：

$$
\frac{\overline{z_0+\Delta z}-\overline{z_0}}{\Delta z}
=\frac{\overline{\Delta z}}{\Delta z}.
$$

当 $\Delta z$ 沿实轴趋于 $0$ 时结果为 $1$，沿虚轴趋于 $0$ 时结果为 $-1$。

### 3.3 模平方 $f(z)=|z|^2$

因为

$$
f(z)=x^2+y^2,
$$

Cauchy–Riemann 方程只在原点成立。函数在原点的差商为

$$
\frac{|z|^2}{z}=\overline z\to0,
$$

所以

$$
f'(0)=0.
$$

在其他点它均不可导。这个例子说明：一个函数可以只在孤立点复可导，却不在任何区域内解析。

---

## 4. 解析函数

### 4.1 解析与全纯

**定义（点处解析）**  
若 $f$ 在 $z_0$ 的某个邻域内处处可导，则称 $f$ 在 $z_0$ 处解析。

**定义（区域上解析）**  
若 $f$ 在区域 $D$ 的每一点都可导，则称 $f$ 在 $D$ 上解析，也称 $f$ 在 $D$ 上**全纯**，记作

$$
f\in\mathcal H(D).
$$

若 $f$ 在整个复平面 $\mathbb C$ 上解析，则称 $f$ 为**整函数**。

多项式、指数函数、正弦和余弦函数都是整函数；有理函数在分母不为零的区域内解析。

> “在一点可导”只是一点上的性质；“在一点解析”要求它在该点的整个邻域内都可导。二者不能混用。

### 4.2 解析函数的刚性

**定理**  
解析函数具有任意阶复导数。

**定理（幂级数展开）**  
若 $f$ 在 $z_0$ 的某个邻域内解析，则 $f$ 可以在 $z_0$ 附近展开为收敛幂级数

$$
f(z)=\sum_{n=0}^{\infty}
\frac{f^{(n)}(z_0)}{n!}(z-z_0)^n.
$$

因此在复变函数论中，“解析”与“局部可展开为幂级数”等价。这个结论远强于实函数中“可导”或“无穷次可导”的情形，它将在 Cauchy 积分公式之后得到。

**定理**  
若 $D$ 是区域，$f\in\mathcal H(D)$ 且

$$
f'(z)=0,\qquad z\in D,
$$

则 $f$ 在 $D$ 上是常值函数。

---

## 5. Wirtinger 导数

### 5.1 定义

对关于 $x,y$ 可微的函数，引入形式微分算子

$$
\frac{\partial}{\partial z}
=\frac12\left(
\frac{\partial}{\partial x}
-i\frac{\partial}{\partial y}
\right),
$$

$$
\frac{\partial}{\partial\overline z}
=\frac12\left(
\frac{\partial}{\partial x}
+i\frac{\partial}{\partial y}
\right).
$$

相应地，

$$
f_z
=\frac12(f_x-if_y),
\qquad
f_{\overline z}
=\frac12(f_x+if_y).
$$

它们称为 Wirtinger 导数。

### 5.2 与 Cauchy–Riemann 方程的关系

若 $f=u+iv$，则

$$
f_{\overline z}
=\frac12
\bigl[(u_x-v_y)+i(v_x+u_y)\bigr].
$$

因此，在实可微的前提下，

$$
f\text{ 复可导}
\quad\Longleftrightarrow\quad
f_{\overline z}=0,
$$

并且此时

$$
f'(z)=f_z.
$$

例如，

$$
\frac{\partial z}{\partial\overline z}=0,
\qquad
\frac{\partial\overline z}{\partial\overline z}=1.
$$

Wirtinger 记号把两个 Cauchy–Riemann 方程压缩成一个方程，在复偏微分方程和拟共形映射中尤其常用。

---

## 6. 极坐标形式的 Cauchy–Riemann 方程

令

$$
z=re^{i\theta},\qquad
x=r\cos\theta,\quad y=r\sin\theta,
$$

并把 $u,v$ 看作 $r,\theta$ 的函数。

当 $r>0$ 时，Cauchy–Riemann 方程等价于

$$
u_r=\frac1r v_\theta,
\qquad
v_r=-\frac1r u_\theta.
$$

导数可以写成

$$
f'(z)
=e^{-i\theta}(u_r+iv_r),
$$

也可以写成

$$
f'(z)
=-\frac{i}{r}e^{-i\theta}
(u_\theta+iv_\theta).
$$

极坐标形式适合处理含 $|z|$、$\arg z$、径向函数或圆对称区域的问题。由于极坐标在 $r=0$ 处退化，这组公式不能直接用于原点。

---

## 7. Jacobian 与局部几何

### 7.1 实 Jacobian

把复函数视为平面映射

$$
(x,y)\longmapsto(u(x,y),v(x,y)).
$$

它的 Jacobian 矩阵为

$$
Df=
\begin{pmatrix}
u_x&u_y\\
v_x&v_y
\end{pmatrix}.
$$

若 $f$ 复可导，则由 Cauchy–Riemann 方程，

$$
Df=
\begin{pmatrix}
a&-b\\
b&a
\end{pmatrix},
\qquad
a+ib=f'(z).
$$

这正是“先按 $|f'(z)|$ 伸缩，再按 $\arg f'(z)$ 旋转”的线性变换。

### 7.2 Jacobian 行列式

若 $f$ 复可导，则

$$
J_f
=\det Df
=u_xv_y-u_yv_x
=u_x^2+u_y^2
=|f'(z)|^2.
$$

因此

$$
f'(z_0)\ne0
\quad\Longleftrightarrow\quad
J_f(z_0)>0.
$$

这说明非退化的解析映射局部保持定向。

### 7.3 局部可逆

**定理（复逆函数定理）**  
若 $f$ 在 $z_0$ 附近解析，且

$$
f'(z_0)\ne0,
$$

则 $f$ 在 $z_0$ 的某个邻域内一一对应，并存在局部解析反函数。若 $w_0=f(z_0)$，则

$$
(f^{-1})'(w_0)
=\frac1{f'(z_0)}.
$$

---

## 8. 保角映射

### 8.1 保角性

**定义（保角）**  
若映射在一点保持两条光滑曲线交角的大小和方向，则称它在该点保角。

**定理**  
若 $f$ 在 $z_0$ 处解析且

$$
f'(z_0)\ne0,
$$

则 $f$ 在 $z_0$ 处保角。

局部地，

$$
f(z_0+\Delta z)-f(z_0)
=f'(z_0)\Delta z+o(|\Delta z|).
$$

因此 $f'(z_0)$ 的作用可以分解为：

- 按 $|f'(z_0)|$ 进行局部伸缩；
- 按 $\arg f'(z_0)$ 进行局部旋转。

### 8.2 导数为零的点

若 $f'(z_0)=0$，上面的非退化线性近似失效，不能直接断言保角。

例如，

$$
f(z)=z^n,\qquad n\ge2,
$$

在原点的导数为零。它把经过原点的角在局部放大为原来的 $n$ 倍，因此在原点不保角。

> 解析并不自动意味着处处保角；还必须排除导数为零的临界点。

---

## 9. 调和函数

### 9.1 调和函数

**定义（调和函数）**  
设实值函数 $u\in C^2(D)$。若

$$
\Delta u
=u_{xx}+u_{yy}=0
$$

在区域 $D$ 内成立，则称 $u$ 在 $D$ 内调和。

算子

$$
\Delta
=\frac{\partial^2}{\partial x^2}
+\frac{\partial^2}{\partial y^2}
$$

称为二维 Laplace 算子。

### 9.2 解析函数与调和函数

**定理**  
若

$$
f=u+iv
$$

在区域 $D$ 内解析，则 $u,v$ 都在 $D$ 内调和：

$$
u_{xx}+u_{yy}=0,
\qquad
v_{xx}+v_{yy}=0.
$$

解析函数的实部和虚部因此构成一对相互关联的调和函数。

例如，

$$
e^z=e^x\cos y+i\,e^x\sin y,
$$

所以

$$
u=e^x\cos y,\qquad
v=e^x\sin y
$$

都满足 Laplace 方程。

### 9.3 调和共轭

**定义（调和共轭）**  
若实值函数 $u,v$ 满足 Cauchy–Riemann 方程，使

$$
f=u+iv
$$

解析，则称 $v$ 是 $u$ 的调和共轭。

在连通区域中，给定 $u$ 后，其调和共轭若存在，则至多相差一个实常数。

**定理**  
单连通区域上的每个调和函数都存在全局调和共轭。

单连通条件不能随意删除。例如

$$
u(z)=\log|z|
$$

在 $\mathbb C\setminus\{0\}$ 上调和，但它的局部调和共轭是 $\arg z$；由于辐角绕原点一周会增加 $2\pi$，不存在定义在整个穿孔平面上的单值调和共轭。

---

## 10. 复指数函数

### 10.1 定义与基本性质

**定义**

$$
e^z=e^{x+iy}
=e^x(\cos y+i\sin y).
$$

复指数函数是整函数，并满足

$$
(e^z)'=e^z,
$$

$$
e^{z_1+z_2}=e^{z_1}e^{z_2},
$$

$$
e^z\ne0,\qquad z\in\mathbb C.
$$

它的模和辐角满足

$$
|e^z|=e^x,\qquad
\arg(e^z)=y+2k\pi.
$$

### 10.2 周期性

复指数函数具有纯虚周期：

$$
e^{z+2k\pi i}=e^z,
\qquad k\in\mathbb Z.
$$

反过来，

$$
e^{z_1}=e^{z_2}
\quad\Longleftrightarrow\quad
z_1-z_2=2k\pi i
$$

对某个 $k\in\mathbb Z$ 成立。

因此 $e^z$ 在整个复平面上不是一一映射，但限制在任意高度为 $2\pi$ 的适当水平带内后可以成为单射。

---

## 11. 复对数与复幂

### 11.1 多值对数

**定义（复对数）**  
若 $e^w=z\ne0$，则 $w$ 称为 $z$ 的一个对数值。全部对数值为

$$
\log z
=\ln|z|+i(\arg z)
=\ln|z|+i(\theta+2k\pi),
\qquad k\in\mathbb Z.
$$

因此复对数本质上是多值的。

### 11.2 对数分支

要得到单值解析函数，必须在不绕过原点的区域上连续选择辐角。

**定义（对数的解析分支）**  
若区域 $D\subseteq\mathbb C\setminus\{0\}$ 上的解析函数 $L$ 满足

$$
e^{L(z)}=z,
$$

则称 $L$ 是 $D$ 上的一个对数分支。

任意对数分支都满足

$$
L'(z)=\frac1z.
$$

**定理**  
若 $D\subseteq\mathbb C\setminus\{0\}$ 是单连通区域，则 $D$ 上存在对数的解析分支。

在割平面

$$
\mathbb C\setminus(-\infty,0]
$$

上取

$$
\operatorname{Arg}z\in(-\pi,\pi),
$$

得到主值对数

$$
\operatorname{Log}z
=\ln|z|+i\operatorname{Arg}z.
$$

### 11.3 复幂

对 $\alpha\in\mathbb C$，形式上定义

$$
z^\alpha=e^{\alpha\log z}.
$$

由于 $\log z$ 多值，$z^\alpha$ 通常也是多值的。选定对数分支 $L$ 后，才得到相应的单值分支

$$
z^\alpha=e^{\alpha L(z)}.
$$

在该分支的定义域内，

$$
\frac{d}{dz}z^\alpha
=\alpha z^{\alpha-1}.
$$

当 $\alpha$ 是整数时，通常的整数幂不依赖对数分支；非整数幂则必须留意分支切割。

---

## 12. 复三角函数与双曲函数

### 12.1 三角函数

通过指数函数定义

$$
\sin z=\frac{e^{iz}-e^{-iz}}{2i},
\qquad
\cos z=\frac{e^{iz}+e^{-iz}}2.
$$

它们都是整函数，并满足

$$
(\sin z)'=\cos z,
\qquad
(\cos z)'=-\sin z,
$$

$$
\sin^2z+\cos^2z=1.
$$

复正弦和复余弦仍以 $2\pi$ 为周期，但在复平面上无界。

将 $z=x+iy$ 展开，有

$$
\sin z
=\sin x\cosh y
+i\cos x\sinh y,
$$

$$
\cos z
=\cos x\cosh y
-i\sin x\sinh y.
$$

### 12.2 双曲函数

定义

$$
\sinh z=\frac{e^z-e^{-z}}2,
\qquad
\cosh z=\frac{e^z+e^{-z}}2.
$$

它们也是整函数，并满足

$$
(\sinh z)'=\cosh z,
\qquad
(\cosh z)'=\sinh z,
$$

$$
\cosh^2z-\sinh^2z=1.
$$

三角函数与双曲函数通过纯虚变量相互联系：

$$
\sin(iz)=i\sinh z,
\qquad
\cos(iz)=\cosh z.
$$

---

## 13. 概念速查

| 概念 | 判定或含义 |
|---|---|
| 在一点复可导 | 复差商沿所有方向趋于同一值 |
| 在一点解析 | 在该点的某个邻域内处处复可导 |
| 区域上解析 | 在区域每一点复可导，也称全纯 |
| 整函数 | 在整个 $\mathbb C$ 上解析 |
| Cauchy–Riemann 方程 | $u_x=v_y,\ u_y=-v_x$ |
| Wirtinger 判据 | 实可微时，$f_{\overline z}=0$ |
| 临界点 | $f'(z_0)=0$ 的点 |
| 保角点 | 解析且 $f'(z_0)\ne0$ 时保持有向角 |
| 调和函数 | 满足 $u_{xx}+u_{yy}=0$ |
| 调和共轭 | 与 $u$ 组成解析函数 $u+iv$ 的函数 $v$ |
| 对数分支 | 在指定区域内对多值对数作连续解析选择 |

---

## 14. 常见误区

### 14.1 一点可导不等于一点解析

$f(z)=|z|^2$ 只在 $0$ 处可导，但它在 $0$ 处并不解析，因为原点的任何邻域都包含不可导点。

### 14.2 Cauchy–Riemann 方程不是无条件充分条件

只验证某一点的偏导数满足方程还不够。常用充分条件还要求实部、虚部在该点实可微；偏导数在邻域存在并在该点连续，是保证实可微的一种方便条件。

### 14.3 解析不等于处处保角

只有在 $f'(z_0)\ne0$ 时，解析函数才在 $z_0$ 保角。导数为零的点需要单独分析。

### 14.4 调和函数不一定有全局调和共轭

局部调和共轭总能构造，但要把它扩展为整个区域上的单值函数，通常需要单连通性。

### 14.5 $\log z$ 不是全平面上的单值函数

绕原点一周会使辐角增加 $2\pi$。必须指定区域和分支，才可以把复对数当作普通解析函数并使用

$$
(\log z)'=\frac1z.
$$

### 14.6 实变量恒等式未必能直接照搬

许多由代数或幂级数得到的恒等式可以延拓到复数，例如

$$
\sin^2z+\cos^2z=1.
$$

但涉及大小、次序、单调性、主值或分支的实变量结论通常不能直接照搬。

---

## 15. 本篇要点

1. 复导数要求差商沿复平面中的所有趋近方式具有同一极限。
2. 复可导必连续；连续函数未必在任何点复可导。
3. Cauchy–Riemann 方程是复可导的必要条件，配合实可微性后也是充分条件。
4. 在一点可导与在一点解析不同；解析要求在整个邻域内可导。
5. 解析函数具有任意阶导数，并能在每一点附近展开成幂级数。
6. Wirtinger 导数用 $f_{\overline z}=0$ 简洁表达 Cauchy–Riemann 方程。
7. 当 $f'(z_0)\ne0$ 时，解析函数局部表现为旋转与伸缩，因而保角并局部可逆。
8. 解析函数的实部和虚部均为调和函数；单连通区域上的调和函数存在全局调和共轭。
9. 指数函数是整函数，复对数和一般复幂则必须处理多值性与分支。
10. 复三角函数和双曲函数可统一地由指数函数定义。

下一篇将整理 **复积分、光滑曲线、Cauchy 积分定理、原函数与 Cauchy 积分公式**。

---

## 参考教材

1. 钟玉泉，《复变函数论》，第 5 版，高等教育出版社。
2. 余家荣，《复变函数》，高等教育出版社。
3. Lars V. Ahlfors, *Complex Analysis*, 3rd ed.
4. James Ward Brown and Ruel V. Churchill, *Complex Variables and Applications*, 9th ed.
5. John B. Conway, *Functions of One Complex Variable I*, 2nd ed.
