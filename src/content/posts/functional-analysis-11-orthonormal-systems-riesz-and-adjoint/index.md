---
title: "泛函分析 11：标准正交系、Riesz 表示与伴随算子"
date: 2026-09-01T11:59:00+08:00
tags: ["泛函分析", "标准正交系", "Riesz表示定理", "伴随算子"]
description: "系统整理 Hilbert 空间中的标准正交系、Bessel 不等式、Parseval 等式、Fourier 展开、Riesz–Fischer 定理、Riesz 表示定理以及伴随、自伴、正常、酉与正算子。"
draft: false
---

设 $H$ 是实或复 Hilbert 空间，内积记为 $\langle x,y\rangle$。本文仍约定：在复 Hilbert 空间中，内积对第一个变量线性、对第二个变量共轭线性。

上一篇从内积出发介绍了 Hilbert 空间、正交补和投影定理。本文继续整理 Hilbert 空间最重要的两组工具：用标准正交系表示向量，以及用内积表示连续线性泛函并定义算子的伴随。

---

## 1. 正交系与标准正交系

设 $I$ 是指标集，$(e_\alpha)_{\alpha\in I}\subset H$。

- 若任意 $\alpha\ne\beta$ 都有 $\langle e_\alpha,e_\beta\rangle=0$，则称 $(e_\alpha)_{\alpha\in I}$ 为**正交系**；
- 若它还是正交系且对所有 $\alpha\in I$ 都有 $\|e_\alpha\|=1$，则称其为**标准正交系**。

对任意非零正交系 $(u_\alpha)$，令

$$
e_\alpha=\frac{u_\alpha}{\|u_\alpha\|},
$$

便可得到标准正交系。

若 $e_1,\dots,e_n$ 是标准正交向量，则对任意标量 $c_1,\dots,c_n$，由勾股等式有

$$
\left\|\sum_{k=1}^n c_k e_k\right\|^2
=\sum_{k=1}^n |c_k|^2.
$$

因此标准正交系中的有限线性组合与有限维 Euclidean 空间中的坐标具有完全相同的范数结构。

---

## 2. Fourier 系数与 Bessel 不等式

给定标准正交系 $(e_\alpha)_{\alpha\in I}$ 和 $x\in H$，数

$$
\widehat{x}(\alpha)=\langle x,e_\alpha\rangle
$$

称为 $x$ 关于 $e_\alpha$ 的 **Fourier 系数**。

对任意有限子集 $F\subset I$，令

$$
S_Fx=\sum_{\alpha\in F}\langle x,e_\alpha\rangle e_\alpha.
$$

则 $x-S_Fx$ 与每个 $e_\alpha\;(\alpha\in F)$ 正交，从而

$$
\|x\|^2
=\|x-S_Fx\|^2
+\sum_{\alpha\in F}|\langle x,e_\alpha\rangle|^2.
$$

立即得到 **Bessel 不等式**：

$$
\sum_{\alpha\in I}|\langle x,e_\alpha\rangle|^2
\le \|x\|^2.
$$

当 $I$ 不可数时，左端定义为所有有限部分和的上确界。Bessel 不等式还说明：对固定的 $x$，至多只有可数多个 Fourier 系数非零。

---

## 3. 完备标准正交系与 Hilbert 基

标准正交系 $(e_\alpha)_{\alpha\in I}$ 称为**完备标准正交系**，如果不存在与其中所有向量都正交的非零向量，即

$$
\{e_\alpha:\alpha\in I\}^{\perp}=\{0\}.
$$

它也常称为 $H$ 的**标准正交基**或 **Hilbert 基**。这里的“基”通常不是代数意义下的 Hamel 基：一般向量可能需要通过无穷级数而不是有限线性组合表示。

以下条件彼此等价：

1. $(e_\alpha)_{\alpha\in I}$ 是完备标准正交系；
2. $\overline{\operatorname{span}}\{e_\alpha:\alpha\in I\}=H$；
3. 若 $x\in H$ 且对所有 $\alpha$ 都有 $\langle x,e_\alpha\rangle=0$，则 $x=0$；
4. 对每个 $x\in H$，其 Fourier 展开在 $H$ 中收敛到 $x$；
5. 对每个 $x\in H$，Parseval 等式成立。

---

## 4. Fourier 展开与 Parseval 等式

若 $(e_\alpha)_{\alpha\in I}$ 是完备标准正交系，则每个 $x\in H$ 都有唯一的展开

$$
x=\sum_{\alpha\in I}\langle x,e_\alpha\rangle e_\alpha,
$$

并且成立 **Parseval 等式**

$$
\|x\|^2
=\sum_{\alpha\in I}|\langle x,e_\alpha\rangle|^2.
$$

在可数情形 $I=\mathbb N$，展开的含义是

$$
\lim_{n\to\infty}
\left\|x-\sum_{k=1}^n\langle x,e_k\rangle e_k\right\|=0.
$$

它描述的是 Hilbert 空间范数下的收敛，并不自动蕴含函数逐点收敛或一致收敛。例如，$L^2$ 中 Fourier 级数的 $L^2$ 收敛与逐点收敛是不同的问题。

由极化恒等式还可得到 Parseval 等式的双线性形式：

$$
\langle x,y\rangle
=\sum_{\alpha\in I}
\langle x,e_\alpha\rangle
\overline{\langle y,e_\alpha\rangle}.
$$

---

## 5. Gram–Schmidt 标准正交化

设 $x_1,x_2,\dots$ 线性无关。Gram–Schmidt 过程递归地定义

$$
u_1=x_1,
\qquad
e_1=\frac{u_1}{\|u_1\|},
$$

以及

$$
u_n
=x_n-\sum_{k=1}^{n-1}\langle x_n,e_k\rangle e_k,
\qquad
e_n=\frac{u_n}{\|u_n\|}.
$$

则 $(e_n)$ 是标准正交系，并且对每个 $n$ 都有

$$
\operatorname{span}\{e_1,\dots,e_n\}
=\operatorname{span}\{x_1,\dots,x_n\}.
$$

若 $(x_n)$ 的线性张成在 $H$ 中稠密，则所得 $(e_n)$ 是 $H$ 的完备标准正交系。

---

## 6. 可分 Hilbert 空间与标准正交基

每个 Hilbert 空间都存在完备标准正交系；这一结论可由 Zorn 引理得到。

对 Hilbert 空间 $H$，以下条件等价：

1. $H$ 可分；
2. $H$ 存在至多可数的完备标准正交系。

因此，每个无限维可分 Hilbert 空间都存在可数标准正交基 $(e_n)_{n\ge1}$。

典型例子包括：

- $\ell^2$ 中的单位向量 $e_n=(0,\dots,0,1,0,\dots)$；
- $L^2(-\pi,\pi)$ 中适当归一化后的三角函数系；
- $L^2(0,1)$ 中适当归一化后的 Haar 系。

---

## 7. Riesz–Fischer 定理

设 $(e_n)$ 是 Hilbert 空间中的标准正交系。若 $(c_n)\in\ell^2$，则级数

$$
\sum_{n=1}^{\infty}c_ne_n
$$

在 $H$ 中收敛，并且

$$
\left\|\sum_{n=1}^{\infty}c_ne_n\right\|^2
=\sum_{n=1}^{\infty}|c_n|^2.
$$

若 $(e_n)$ 还是完备标准正交系，则映射

$$
U:H\to\ell^2,
\qquad
Ux=(\langle x,e_n\rangle)_{n\ge1}
$$

是满的线性等距映射。于是：

> 在同一标量域上，任意两个无限维可分 Hilbert 空间在等距同构意义下没有区别；它们都等距同构于相应的 $\ell^2$。

这并不意味着不同函数空间中的具体问题完全相同，因为微分、积分、边界条件等附加结构并不会被任意 Hilbert 空间同构保留。

---

## 8. Riesz 表示定理

### 8.1 定理

设 $H$ 是 Hilbert 空间，$f\in H^*$。则存在唯一的 $y_f\in H$，使得

$$
f(x)=\langle x,y_f\rangle,
\qquad x\in H,
$$

并且

$$
\|f\|=\|y_f\|.
$$

因此，每个连续线性泛函都可以唯一地表示为“与某个固定向量作内积”。

### 8.2 Riesz 映射

定义

$$
J:H\to H^*,
\qquad
Jy=\langle\,\cdot\,,y\rangle.
$$

则 $J$ 是满的等距映射。在实 Hilbert 空间中 $J$ 线性；在采用本文内积约定的复 Hilbert 空间中，$J$ 共轭线性：

$$
J(\lambda y)=\overline{\lambda}\,Jy.
$$

Riesz 表示定理给出了 $H$ 与 $H^*$ 的自然对应，也是 Hilbert 空间理论比一般 Banach 空间更具体的重要原因。

### 8.3 一个有限维例子

在 $\mathbb R^n$ 中，若

$$
f(x)=a_1x_1+\cdots+a_nx_n,
$$

则 $f(x)=\langle x,a\rangle$，其中 $a=(a_1,\dots,a_n)$，并且 $\|f\|=\|a\|_2$。Riesz 表示定理正是这一事实在任意 Hilbert 空间中的推广。

---

## 9. 伴随算子

设 $H,K$ 是 Hilbert 空间，$T\in\mathcal B(H,K)$。对每个 $y\in K$，映射

$$
x\longmapsto\langle Tx,y\rangle
$$

是 $H$ 上的连续线性泛函。由 Riesz 表示定理，存在唯一的向量 $T^*y\in H$，使得

$$
\langle Tx,y\rangle
=\langle x,T^*y\rangle,
\qquad x\in H.
$$

由此得到有界线性算子

$$
T^*:K\to H,
$$

称为 $T$ 的**伴随算子**。

在有限维 Euclidean 空间中，若 $T$ 的矩阵为 $A$，则 $T^*$ 的矩阵为共轭转置 $A^*=\overline A^{\mathsf T}$；实数情形就是转置矩阵 $A^{\mathsf T}$。

---

## 10. 伴随运算的基本性质

设 $S,T$ 是可复合的有界线性算子，$\lambda$ 是标量，则

$$
(T^*)^*=T,
$$

$$
(S+T)^*=S^*+T^*,
$$

$$
(\lambda T)^*=\overline\lambda\,T^*,
$$

$$
(ST)^*=T^*S^*.
$$

此外，

$$
\|T^*\|=\|T\|,
$$

以及非常重要的 **$C^*$-恒等式**

$$
\|T^*T\|=\|T\|^2.
$$

由

$$
\langle T^*Tx,x\rangle=\|Tx\|^2
$$

可见 $T^*T$ 总是正算子。

---

## 11. 核与值域的正交关系

设 $T\in\mathcal B(H,K)$，则

$$
\ker T^*=(\operatorname{ran}T)^\perp,
$$

$$
\ker T=(\operatorname{ran}T^*)^\perp.
$$

取正交补可得

$$
\overline{\operatorname{ran}T}
=(\ker T^*)^\perp,
$$

$$
\overline{\operatorname{ran}T^*}
=(\ker T)^\perp.
$$

这里不能随意删去闭包，因为有界线性算子的值域未必闭。若值域确实闭，则这些关系变成真正的正交直和分解，例如

$$
K=\operatorname{ran}T\oplus\ker T^*.
$$

---

## 12. 自伴、正常、酉与正算子

以下算子类在 Hilbert 空间中尤其重要。

### 12.1 自伴算子

若 $T\in\mathcal B(H)$ 满足

$$
T=T^*,
$$

则称 $T$ 为**自伴算子**。

对自伴算子，$\langle Tx,x\rangle$ 总为实数。正交投影是最基本的自伴算子之一。

### 12.2 正常算子

若

$$
T^*T=TT^*,
$$

则称 $T$ 为**正常算子**。

自伴算子和酉算子都是正常算子。正常性是在复 Hilbert 空间谱理论中得到良好结构的关键条件。

### 12.3 等距算子与酉算子

若对所有 $x\in H$ 都有

$$
\|Tx\|=\|x\|,
$$

则称 $T$ 为**等距算子**。对 Hilbert 空间上的有界线性算子，等价地有

$$
T^*T=I.
$$

若 $T$ 还是满射，则称其为**酉算子**（实 Hilbert 空间中也称正交算子），此时

$$
T^*T=TT^*=I,
\qquad
T^{-1}=T^*.
$$

### 12.4 正算子

若 $T=T^*$ 且

$$
\langle Tx,x\rangle\ge0,
\qquad x\in H,
$$

则称 $T$ 为**正算子**，记作 $T\ge0$。

每个正有界算子 $T$ 都存在唯一的正有界算子 $S$，使得

$$
S^2=T.
$$

这个 $S$ 记为 $T^{1/2}$，称为 $T$ 的正平方根。

### 12.5 正交投影

有界算子 $P\in\mathcal B(H)$ 是某个闭子空间上的正交投影，当且仅当

$$
P^2=P,
\qquad
P^*=P.
$$

因此，“幂等”给出投影的代数性质，“自伴”保证投影方向与目标子空间正交。

---

## 13. 最小二乘与正规方程

设 $T\in\mathcal B(H,K)$，希望在 $x\in H$ 中寻找使 $\|Tx-y\|$ 最小的向量。若最优解 $x_0$ 存在，则残差 $y-Tx_0$ 必须与 $\operatorname{ran}T$ 正交，因此

$$
T^*(Tx_0-y)=0,
$$

即

$$
T^*Tx_0=T^*y.
$$

这称为**正规方程**。它把最佳逼近问题转化为由正算子 $T^*T$ 控制的方程。

若 $\operatorname{ran}T$ 闭，则 $y$ 在 $\operatorname{ran}T$ 上存在正交投影，最小二乘解存在；解的唯一性还需要 $T$ 为单射。若 $T$ 有非平凡核，则所有最小二乘解相差一个 $\ker T$ 中的向量。

---

## 14. 几组容易混淆的概念

### 14.1 Hilbert 基与 Hamel 基

- Hamel 基要求每个向量表示为有限线性组合；
- Hilbert 基允许按范数收敛的无穷展开，并要求标准正交。

无限维 Banach 空间不可能具有可数 Hamel 基，但可分 Hilbert 空间具有可数 Hilbert 基。

### 14.2 Bessel 不等式与 Parseval 等式

- 任意标准正交系都满足 Bessel 不等式；
- 只有标准正交系完备时，才对所有向量成立 Parseval 等式。

### 14.3 Banach 对偶与 Hilbert 伴随

一般 Banach 空间中的对偶算子为

$$
T':K^*\to H^*,
\qquad T'f=f\circ T.
$$

Hilbert 空间中的伴随算子 $T^*:K\to H$ 是利用 Riesz 表示把 $K^*$、$H^*$ 分别识别为 $K$、$H$ 后得到的更具体对象。

---

## 15. 本文小结

本文整理了 Hilbert 空间中的坐标表示与伴随理论：

1. 标准正交系使有限线性组合满足 Euclidean 型勾股等式；
2. Bessel 不等式控制 Fourier 系数，完备性把它加强为 Parseval 等式；
3. 可分无限维 Hilbert 空间都等距同构于 $\ell^2$；
4. Riesz 表示定理把连续线性泛函唯一表示为内积；
5. 伴随算子满足 $\|T^*\|=\|T\|$ 和 $\|T^*T\|=\|T\|^2$；
6. 自伴、正常、酉和正算子构成 Hilbert 空间谱理论的基本对象。

下一篇将整理**紧算子、有限秩逼近及其基本性质**。

---

## 参考资料

- John B. Conway, *A Course in Functional Analysis*.
- Walter Rudin, *Functional Analysis*.
- Erwin Kreyszig, *Introductory Functional Analysis with Applications*.
- 夏道行、吴卓人、严绍宗、舒五昌，《实变函数论与泛函分析》下册。
