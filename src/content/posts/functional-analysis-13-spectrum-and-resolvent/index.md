---
title: "泛函分析 13：谱、预解集与谱半径"
date: 2026-09-01T12:01:00+08:00
tags: ["泛函分析", "谱理论", "预解集", "谱半径"]
description: "系统整理有界线性算子的谱与预解集、点谱与连续谱、Neumann 级数、预解恒等式、谱的紧致性、谱半径公式和谱映射定理。"
draft: false
---

有限维线性代数通过特征值研究矩阵，但无限维算子可能没有任何特征值，却仍然存在不可逆的参数。谱把“特征值”推广为所有使

$$
\lambda I-T
$$

不可逆的标量。

谱不仅记录齐次方程

$$
Tx=\lambda x
$$

是否有非零解，还检测值域不满、值域不稠密或逆算子不连续等无限维现象。

本文主要设 $X$ 是非零复 Banach 空间，$T\in\mathcal B(X)$。实 Banach 空间的情形将在文末说明。

---

## 1. 可逆算子

### 1.1 可逆性

算子 $A\in\mathcal B(X)$ 称为可逆的，如果存在 $B\in\mathcal B(X)$，使

$$
AB=BA=I.
$$

此时 $B$ 唯一，记作

$$
A^{-1}.
$$

由于 $X$ 是 Banach 空间，若 $A$ 是有界线性双射，则有界逆定理保证

$$
A^{-1}\in\mathcal B(X).
$$

### 1.2 可逆算子群

所有可逆算子组成的集合记作

$$
\operatorname{GL}(X).
$$

它是 $\mathcal B(X)$ 中的开集。

若 $A$ 可逆并且

$$
\|A-B\|<\frac1{\|A^{-1}\|},
$$

则 $B$ 也可逆。

因此可逆性对算子范数下的小扰动稳定。

---

## 2. Neumann 级数

### 2.1 基本定理

**定理（Neumann 级数）**  
若 $A\in\mathcal B(X)$ 满足

$$
\|A\|<1,
$$

则 $I-A$ 可逆，并且

$$
(I-A)^{-1}
=
\sum_{n=0}^{\infty}A^n
=
I+A+A^2+\cdots.
$$

级数在算子范数下绝对收敛。

### 2.2 逆算子估计

有

$$
\|(I-A)^{-1}\|
\le
\sum_{n=0}^{\infty}\|A\|^n
=
\frac1{1-\|A\|}.
$$

### 2.3 一般扰动形式

若 $A$ 可逆，且

$$
\|A^{-1}(B-A)\|<1,
$$

则 $B$ 可逆，因为

$$
B
=
A\left[I+A^{-1}(B-A)\right].
$$

并且

$$
B^{-1}
=
\left[I+A^{-1}(B-A)\right]^{-1}A^{-1}.
$$

---

## 3. 谱与预解集

### 3.1 预解集

**定义（预解集）**

$$
\rho(T)
=
\{\lambda\in\mathbb C:
\lambda I-T\text{ 可逆}\}
$$

称为 $T$ 的预解集。

### 3.2 谱

**定义（谱）**

$$
\sigma(T)
=
\mathbb C\setminus\rho(T)
$$

称为 $T$ 的谱。

因此

$$
\lambda\in\sigma(T)
\Longleftrightarrow
\lambda I-T
\text{ 不具有有界逆}.
$$

### 3.3 为什么不只看特征值

在有限维空间中，

$$
\lambda I-T\text{ 不可逆}
\Longleftrightarrow
\ker(\lambda I-T)\ne\{0\}.
$$

所以谱就是特征值集合。

在无限维空间中，$\lambda I-T$ 可能单射但不满射，或者是双射但逆算子不连续。因此谱通常严格大于特征值集合。

---

## 4. 预解算子

### 4.1 定义

对 $\lambda\in\rho(T)$，定义预解算子

$$
R(\lambda,T)
=(\lambda I-T)^{-1}.
$$

### 4.2 大参数展开

当

$$
|\lambda|>\|T\|
$$

时，

$$
\lambda I-T
=
\lambda\left(I-\frac T\lambda\right).
$$

由 Neumann 级数，

$$
R(\lambda,T)
=
\frac1\lambda
\sum_{n=0}^{\infty}
\left(\frac T\lambda\right)^n
=
\sum_{n=0}^{\infty}
\frac{T^n}{\lambda^{n+1}}.
$$

并且

$$
\|R(\lambda,T)\|
\le
\frac1{|\lambda|-\|T\|}.
$$

### 4.3 预解恒等式

若 $\lambda,\mu\in\rho(T)$，则

$$
R(\lambda,T)-R(\mu,T)
=(\mu-\lambda)
R(\lambda,T)R(\mu,T).
$$

由于两个预解算子都是 $T$ 的函数，它们彼此交换：

$$
R(\lambda,T)R(\mu,T)
=
R(\mu,T)R(\lambda,T).
$$

### 4.4 解析性

**定理**

1. $\rho(T)$ 是 $\mathbb C$ 中的开集；
2. $\sigma(T)$ 是闭集；
3. 映射

   $$
   \lambda\mapsto R(\lambda,T)
   $$

   在 $\rho(T)$ 上是算子值解析函数；
4. 其导数为

   $$
   \frac{d}{d\lambda}R(\lambda,T)
   =
   -R(\lambda,T)^2.
   $$

---

## 5. 谱的基本性质

### 5.1 谱有界

由大参数 Neumann 展开，

$$
|\lambda|>\|T\|
\Longrightarrow
\lambda\in\rho(T).
$$

所以

$$
\sigma(T)
\subseteq
\{\lambda\in\mathbb C:|\lambda|\le\|T\|\}.
$$

### 5.2 谱非空

**定理**  
非零复 Banach 空间上每个有界线性算子的谱都非空。

这个结论依赖复分析。实 Banach 空间上的实谱可能为空，因此通常先把实空间和实算子复化。

### 5.3 谱紧致

谱既闭又有界，因此

$$
\sigma(T)
$$

是非空紧集。

### 5.4 平移与缩放

对 $\alpha,\beta\in\mathbb C$，

$$
\sigma(\alpha T+\beta I)
=
\alpha\sigma(T)+\beta
$$

当 $\alpha\ne0$ 时成立。

若 $\alpha=0$，则

$$
\sigma(\beta I)=\{\beta\}.
$$

---

## 6. 谱的分类

令

$$
A_\lambda=\lambda I-T.
$$

### 6.1 点谱

**定义（点谱）**  
若 $A_\lambda$ 不是单射，即存在 $x\ne0$ 使

$$
Tx=\lambda x,
$$

则称 $\lambda$ 是 $T$ 的特征值。

所有特征值组成点谱

$$
\sigma_p(T).
$$

### 6.2 连续谱

**定义（连续谱）**  
若 $A_\lambda$：

1. 单射；
2. 值域稠密；
3. 不是满射；

则称 $\lambda$ 属于连续谱。

此时 $A_\lambda^{-1}$ 在值域上定义，但不能延拓为整个 $X$ 上的有界算子。

### 6.3 剩余谱

**定义（剩余谱）**  
若 $A_\lambda$ 单射，但

$$
\overline{\operatorname{ran}A_\lambda}\ne X,
$$

则称 $\lambda$ 属于剩余谱。

### 6.4 三类谱

在上述约定下，

$$
\sigma(T)
=
\sigma_p(T)
\cup
\sigma_c(T)
\cup
\sigma_r(T),
$$

并且三者两两不交。

不同教材对连续谱和剩余谱的边界定义可能略有差异，使用时应核对值域是否要求稠密以及是否要求不满。

---

## 7. 近似点谱

### 7.1 定义

**定义（近似特征值）**  
若存在单位向量列 $\{x_n\}$，使

$$
\|(\lambda I-T)x_n\|\to0,
$$

则称 $\lambda$ 属于 $T$ 的近似点谱，记作

$$
\sigma_{\mathrm{ap}}(T).
$$

$x_n$ 称为近似特征向量。

### 7.2 基本关系

每个特征值都是近似特征值：

$$
\sigma_p(T)
\subseteq
\sigma_{\mathrm{ap}}(T).
$$

并且

$$
\partial\sigma(T)
\subseteq
\sigma_{\mathrm{ap}}(T)
\subseteq
\sigma(T).
$$

因此谱的边界总能用近似特征向量检测，即使不存在真正的特征向量。

---

## 8. 谱半径

### 8.1 定义

**定义（谱半径）**

$$
r(T)
=
\max_{\lambda\in\sigma(T)}|\lambda|.
$$

由于谱非空紧致，最大值确实存在。

显然

$$
r(T)\le\|T\|.
$$

### 8.2 Gelfand 谱半径公式

**定理**

$$
r(T)
=
\lim_{n\to\infty}\|T^n\|^{1/n}
=
\inf_{n\ge1}\|T^n\|^{1/n}.
$$

极限总存在。

### 8.3 拟幂零算子

若

$$
r(T)=0,
$$

则称 $T$ 为拟幂零算子。

此时

$$
\sigma(T)=\{0\}.
$$

幂零算子一定拟幂零，但拟幂零算子未必幂零。Volterra 算子就是典型例子。

---

## 9. 谱映射定理

### 9.1 多项式形式

设 $p$ 是复系数多项式。

**定理（谱映射）**

$$
\sigma(p(T))
=
p(\sigma(T))
=
\{p(\lambda):\lambda\in\sigma(T)\}.
$$

例如，

$$
\sigma(T^n)
=
\{\lambda^n:\lambda\in\sigma(T)\}.
$$

### 9.2 逆算子的谱

若 $T$ 可逆，则 $0\notin\sigma(T)$，并且

$$
\sigma(T^{-1})
=
\left\{
\lambda^{-1}:
\lambda\in\sigma(T)
\right\}.
$$

### 9.3 解析函数形式

谱映射定理还可以推广到在 $\sigma(T)$ 邻域内解析的函数 $f$：

$$
\sigma(f(T))=f(\sigma(T)).
$$

这需要解析函数演算，本文只记录结论，不展开构造。

---

## 10. 基本例子

### 10.1 标量算子

若

$$
T=\alpha I,
$$

则

$$
\sigma(T)=\{\alpha\}.
$$

### 10.2 投影

设 $P^2=P$。由谱映射定理，

$$
\sigma(P)\subseteq\{0,1\}.
$$

如果 $P$ 既不是零算子也不是单位算子，则

$$
\sigma(P)=\{0,1\}.
$$

### 10.3 幂零算子

若存在 $m\ge1$ 使

$$
T^m=0,
$$

则

$$
\sigma(T)=\{0\}.
$$

### 10.4 对角算子

设 $D_a$ 是 $\ell^p$ 或 $c_0$ 上的有界对角算子：

$$
(D_ax)_n=a_nx_n.
$$

则

$$
\sigma(D_a)
=
\overline{\{a_n:n\ge1\}}.
$$

每个实际出现的 $a_n$ 都是特征值；对角系数的极限点可能属于谱，但不一定是特征值。

### 10.5 乘法算子

设 $K$ 是紧 Hausdorff 空间，$g\in C(K)$。在 $C(K)$ 上定义

$$
(M_gf)(x)=g(x)f(x).
$$

则

$$
\sigma(M_g)=g(K).
$$

因为 $\lambda I-M_g$ 可逆，当且仅当

$$
\lambda-g(x)\ne0
$$

对所有 $x\in K$ 成立；此时逆算子是乘以 $(\lambda-g)^{-1}$。

---

## 11. Volterra 算子的谱

在 $C[0,1]$ 上定义

$$
(Vf)(x)=\int_0^xf(t)\,dt.
$$

反复积分给出

$$
(V^nf)(x)
=
\frac1{(n-1)!}
\int_0^x(x-t)^{n-1}f(t)\,dt.
$$

因此

$$
\|V^n\|
\le
\frac1{n!}.
$$

由谱半径公式，

$$
r(V)
\le
\lim_{n\to\infty}
\left(\frac1{n!}\right)^{1/n}
=0.
$$

所以

$$
\sigma(V)=\{0\}.
$$

但 $V$ 不是幂零算子，因为对每个 $n$，

$$
V^n\ne0.
$$

因此 $V$ 是拟幂零但非幂零的紧算子。

---

## 12. 谱与共轭算子

设 $T\in\mathcal B(X)$，Banach 空间共轭算子为

$$
T^*:X^*\to X^*.
$$

在采用线性对偶泛函的约定下，

$$
\sigma(T^*)=\sigma(T).
$$

并且

$$
\lambda\in\sigma_r(T)
$$

与

$$
\lambda\in\sigma_p(T^*)
$$

之间存在紧密联系，因为

$$
\overline{\operatorname{ran}(\lambda I-T)}=X
\Longleftrightarrow
\ker(\lambda I-T)^*=\{0\}.
$$

在复 Hilbert 空间中使用内积伴随时，通常写成

$$
\sigma(T^*)=\overline{\sigma(T)},
$$

这是因为 Hilbert 伴随对标量取复共轭。

---

## 13. 实 Banach 空间的谱

若 $X$ 是实 Banach 空间，实算子 $T$ 的实特征值可能不能反映全部行为。

通常构造复化空间

$$
X_{\mathbb C}
=
X\oplus iX
$$

以及复化算子

$$
T_{\mathbb C}(x+iy)
=
Tx+iTy.
$$

然后定义

$$
\sigma(T)
:=
\sigma(T_{\mathbb C}).
$$

例如实平面上的旋转算子没有实特征值，但复化后的谱包含

$$
i
\quad\text{和}\quad
-i.
$$

---

## 14. 概念辨析

### 14.1 谱与特征值

每个特征值都属于谱，但无限维空间中的谱点未必是特征值。

### 14.2 谱半径与算子范数

总有

$$
r(T)\le\|T\|,
$$

但等号一般不成立。幂零算子或 Volterra 算子可以满足

$$
r(T)=0
$$

而

$$
\|T\|>0.
$$

### 14.3 预解集与值域

$\lambda\in\rho(T)$ 不仅要求 $\lambda I-T$ 单射和满射，还要求逆算子有界。

在 Banach 空间上，有界逆定理保证双射时逆自动有界。

### 14.4 实谱与复谱

谱非空定理是复 Banach 空间结论。对实算子通常通过复化定义谱。

---

## 15. 本篇要点

1. 谱由所有使 $\lambda I-T$ 不可逆的复数构成。
2. 无限维空间中的谱可能包含不是特征值的点。
3. Neumann 级数给出 $I-A$ 的逆以及可逆性的扰动判据。
4. 预解集开、谱闭，预解算子在预解集上解析。
5. 复 Banach 空间上每个有界算子的谱都是非空紧集。
6. 谱包含于半径 $\|T\|$ 的闭圆盘。
7. 点谱、连续谱和剩余谱描述不可逆的不同原因。
8. Gelfand 公式用 $\|T^n\|^{1/n}$ 计算谱半径。
9. 多项式谱映射定理给出 $\sigma(p(T))=p(\sigma(T))$。
10. Volterra 算子说明拟幂零不等于幂零。

下一篇将整理**紧算子的非零谱、Fredholm 择一定理以及紧自伴算子的谱分解**。

---

## 参考教材

1. 张恭庆、林源渠，《泛函分析讲义》，北京大学出版社。
2. 夏道行、吴卓人、严绍宗、舒五昌，《实变函数论与泛函分析》，高等教育出版社。
3. John B. Conway, *A Course in Functional Analysis*, 2nd ed.
4. Walter Rudin, *Functional Analysis*, 2nd ed.
5. Erwin Kreyszig, *Introductory Functional Analysis with Applications*.
