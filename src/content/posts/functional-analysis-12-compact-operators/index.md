---
title: "泛函分析 12：紧算子与有限秩逼近"
date: 2026-09-01T12:00:00+08:00
tags: ["泛函分析", "紧算子", "有限秩算子", "Arzelà–Ascoli定理"]
description: "系统整理紧算子的定义与判定、算子理想、有限秩逼近、Schauder 定理、弱收敛到范数收敛，以及积分算子和紧嵌入等典型例子。"
draft: false
---

有限维空间中的有界集虽然未必紧，但其闭包在适当条件下具有紧致性。无限维空间的闭单位球不再紧，因此一般有界线性算子不能保证从有界序列中提取收敛像子列。

紧算子恢复了这种有限维式的紧致性：它把有界集映成相对紧集。紧算子未必是有限秩算子，但在许多经典空间中可以用有限秩算子作算子范数逼近，因此是无限维空间中最接近矩阵的一类算子。

本文设 $X,Y,Z$ 为赋范空间。需要完备性时会明确假设它们是 Banach 空间。

---

## 1. 紧算子的定义

### 1.1 定义

**定义（紧算子）**  
线性算子 $T:X\to Y$ 称为紧算子，如果 $X$ 中每个有界集 $A$ 的像

$$
T(A)
$$

在 $Y$ 中相对紧，即 $\overline{T(A)}$ 是紧集。

所有从 $X$ 到 $Y$ 的紧算子组成的空间记作

$$
\mathcal K(X,Y).
$$

当 $X=Y$ 时简记为

$$
\mathcal K(X).
$$

### 1.2 单位球判定

记闭单位球为

$$
B_X=\{x\in X:\|x\|\le1\}.
$$

线性算子 $T:X\to Y$ 紧，当且仅当

$$
T(B_X)
$$

相对紧。

因此只需检查一个有界集——闭单位球。

### 1.3 序列判定

**定理**  
线性算子 $T:X\to Y$ 紧，当且仅当对 $X$ 中任意有界序列 $\{x_n\}$，都存在子列 $\{x_{n_k}\}$，使

$$
\{Tx_{n_k}\}
$$

在 $Y$ 中范数收敛。

这通常是验证紧算子最方便的形式。

### 1.4 紧算子自动有界

若 $T(B_X)$ 相对紧，则它有界。因此存在 $C>0$，使

$$
\|Tx\|\le C\|x\|,
$$

所以每个紧线性算子都是有界线性算子：

$$
\mathcal K(X,Y)\subseteq\mathcal B(X,Y).
$$

反向一般不成立。

---

## 2. 有限秩算子

### 2.1 定义

**定义（有限秩算子）**  
若线性算子 $T:X\to Y$ 的值域

$$
\operatorname{ran}T
$$

是有限维子空间，则称 $T$ 为有限秩算子。

$T$ 的秩定义为

$$
\operatorname{rank}T
=
\dim\operatorname{ran}T.
$$

所有有界有限秩算子组成的空间记作

$$
\mathcal F(X,Y).
$$

### 2.2 秩一算子

设 $f\in X^*$，$y\in Y$。定义

$$
(f\otimes y)(x)=f(x)y.
$$

则

$$
\operatorname{ran}(f\otimes y)
\subseteq
\operatorname{span}\{y\},
$$

所以它的秩至多为 $1$，并且

$$
\|f\otimes y\|=\|f\|\,\|y\|.
$$

每个有限秩算子都可以写成有限个秩一算子的和：

$$
Tx
=
\sum_{j=1}^m f_j(x)y_j.
$$

### 2.3 有限秩算子紧

**定理**

$$
\mathcal F(X,Y)
\subseteq
\mathcal K(X,Y).
$$

因为 $T(B_X)$ 是有限维值域中的有界集，其闭包在有限维空间中紧。

---

## 3. 紧算子的代数性质

### 3.1 线性组合

若 $S,T\in\mathcal K(X,Y)$，$\alpha,\beta\in\mathbb K$，则

$$
\alpha S+\beta T\in\mathcal K(X,Y).
$$

因此 $\mathcal K(X,Y)$ 是 $\mathcal B(X,Y)$ 的线性子空间。

### 3.2 与有界算子的复合

若

$$
T\in\mathcal K(X,Y),
\qquad
A\in\mathcal B(Y,Z),
\qquad
B\in\mathcal B(Z,X),
$$

则

$$
AT\in\mathcal K(X,Z)
$$

以及

$$
TB\in\mathcal K(Z,Y).
$$

因此当 $X$ 是 Banach 空间时，$\mathcal K(X)$ 是 Banach 代数 $\mathcal B(X)$ 的双边理想。

### 3.3 算子范数闭性

**定理**  
若 $Y$ 是 Banach 空间，$T_n\in\mathcal K(X,Y)$，并且

$$
\|T_n-T\|\to0,
$$

则

$$
T\in\mathcal K(X,Y).
$$

所以

$$
\mathcal K(X,Y)
$$

是 $\mathcal B(X,Y)$ 的闭子空间；特别地，它本身是 Banach 空间。

值域完备性保证全有界像集的闭包仍然紧。

---

## 4. 紧算子与有限维空间

### 4.1 单位算子

**定理**

$$
I_X\text{ 紧}
\Longleftrightarrow
X\text{ 有限维}.
$$

如果 $X$ 无限维，Riesz 引理说明闭单位球不紧，因此单位算子不是紧算子。

### 4.2 紧可逆算子

若紧算子

$$
T:X\to Y
$$

存在有界逆，则

$$
I_X=T^{-1}T
$$

也是紧算子。因此 $X$ 必须有限维。

所以无限维 Banach 空间之间不存在有界可逆的紧算子。

### 4.3 闭值域

**定理**  
设 $X,Y$ 是 Banach 空间，$T\in\mathcal K(X,Y)$。若

$$
\operatorname{ran}T
$$

是闭子空间，则它必为有限维空间。

因此无限秩紧算子的值域不可能闭。

---

## 5. 弱收敛与紧算子

### 5.1 弱收敛变成范数收敛

**定理**  
若 $T\in\mathcal K(X,Y)$，并且

$$
x_n\rightharpoonup x
\quad\text{于 }X,
$$

则

$$
\|Tx_n-Tx\|_Y\to0.
$$

紧算子把弱收敛序列变成范数收敛序列。

### 5.2 完全连续算子

把弱收敛序列映成范数收敛序列的算子常称为完全连续算子。

因此

$$
\text{紧算子}
\Longrightarrow
\text{完全连续算子}.
$$

在一般 Banach 空间上反向不一定成立。

如果 $X$ 自反，则 $X$ 中每个有界序列都有弱收敛子列，因此

$$
T\text{ 紧}
\Longleftrightarrow
T\text{ 完全连续}.
$$

不同教材有时直接把“完全连续”作为“紧”的同义词，使用时应先确认定义。

### 5.3 弱紧算子

若 $T(B_X)$ 在弱拓扑下相对紧，则称 $T$ 为弱紧算子。

每个紧算子都是弱紧算子，但反向不成立。例如无限维自反 Banach 空间上的单位算子弱紧，却不紧。

---

## 6. Schauder 定理

### 6.1 共轭算子的紧性

设 $X,Y$ 是 Banach 空间，$T\in\mathcal B(X,Y)$，共轭算子为

$$
T^*:Y^*\to X^*.
$$

**定理（Schauder）**

$$
T\text{ 紧}
\Longleftrightarrow
T^*\text{ 紧}.
$$

紧性在取共轭算子时双向保持。

### 6.2 与二次对偶的关系

因为

$$
(T^*)^*=T^{**},
$$

Schauder 定理还给出

$$
T\text{ 紧}
\Longleftrightarrow
T^{**}\text{ 紧}.
$$

自然嵌入满足

$$
T^{**}J_X=J_YT.
$$

---

## 7. 有限秩逼近

### 7.1 有限秩算子的闭包

由于有限秩算子紧，并且紧算子空间在算子范数下闭，

$$
\overline{\mathcal F(X,Y)}^{\,\|\cdot\|}
\subseteq
\mathcal K(X,Y).
$$

左侧元素称为可逼近算子。

### 7.2 并非每个紧算子都可逼近

在一般 Banach 空间中，可能存在不能由有限秩算子作算子范数逼近的紧算子。

**定义（逼近性质）**  
若对每个紧集 $K\subseteq X$ 和 $\varepsilon>0$，都存在有限秩算子 $F:X\to X$，使

$$
\sup_{x\in K}\|Fx-x\|<\varepsilon,
$$

则称 $X$ 具有逼近性质。

Hilbert 空间以及常见的 $\ell^p$、$L^p$、$C(K)$ 空间在标准条件下具有逼近性质，但一般 Banach 空间未必具有。

### 7.3 Hilbert 空间情形

设 $H_1,H_2$ 是 Hilbert 空间。则每个紧算子

$$
T:H_1\to H_2
$$

都可以由有限秩算子在算子范数下逼近。

后续的奇异值分解会给出自然的有限秩截断：

$$
T_Nx
=
\sum_{n=1}^N
s_n\langle x,u_n\rangle v_n,
$$

并且

$$
\|T-T_N\|\to0.
$$

---

## 8. 对角算子

### 8.1 定义

设 $a=(a_n)\in\ell^\infty$。在 $\ell^p$ 或 $c_0$ 上定义

$$
(D_ax)_n=a_nx_n.
$$

则

$$
\|D_a\|=\sup_n|a_n|.
$$

### 8.2 紧性判定

**定理**

$$
D_a\text{ 紧}
\Longleftrightarrow
a_n\to0.
$$

当 $a_n\to0$ 时，定义有限秩截断

$$
D_a^{(N)}x
=
(a_1x_1,\ldots,a_Nx_N,0,\ldots).
$$

则

$$
\|D_a-D_a^{(N)}\|
=
\sup_{n>N}|a_n|
\to0.
$$

因此 $D_a$ 是有限秩算子的算子范数极限。

若 $a_n$ 不趋于 $0$，则可以选取子列使 $|a_{n_k}|\ge\varepsilon>0$，而 $\{D_ae_{n_k}\}$ 没有收敛子列，所以 $D_a$ 不紧。

---

## 9. Arzelà–Ascoli 定理

### 9.1 等度连续

设 $K$ 是紧度量空间，$\mathcal F\subseteq C(K)$。

**定义（等度连续）**  
若对任意 $\varepsilon>0$，都存在 $\delta>0$，使对任意 $f\in\mathcal F$ 和 $x,y\in K$，

$$
d(x,y)<\delta
\Longrightarrow
|f(x)-f(y)|<\varepsilon,
$$

则称 $\mathcal F$ 等度连续。

$\delta$ 必须同时适用于整个函数族。

### 9.2 定理

**定理（Arzelà–Ascoli）**  
对紧度量空间 $K$，集合 $\mathcal F\subseteq C(K)$ 在一致范数下相对紧，当且仅当：

1. $\mathcal F$ 等度连续；
2. 对每个 $x\in K$，集合

   $$
   \{f(x):f\in\mathcal F\}
   $$

   相对紧。

当函数取实数或复数值时，第二条等价于逐点有界。

若 $\mathcal F$ 还是闭集，则“相对紧”可以改为“紧”。

---

## 10. Volterra 积分算子

### 10.1 定义

在 $C[0,1]$ 上定义

$$
(Vf)(x)=\int_0^xf(t)\,dt.
$$

### 10.2 有界性

对 $\|f\|_\infty\le1$，

$$
|(Vf)(x)|
\le
\int_0^x|f(t)|\,dt
\le1.
$$

所以

$$
\|V\|\le1.
$$

取 $f\equiv1$ 可得

$$
\|V\|=1.
$$

### 10.3 紧性

若 $\|f\|_\infty\le1$，则

$$
|(Vf)(x)-(Vf)(y)|
\le
|x-y|.
$$

因此

$$
V(B_{C[0,1]})
$$

一致有界且等度连续。由 Arzelà–Ascoli 定理，$V$ 是紧算子。

---

## 11. 连续核积分算子

设

$$
K\in C([a,b]\times[c,d]).
$$

定义

$$
(Tf)(x)
=
\int_c^dK(x,t)f(t)\,dt,
\qquad
f\in C[c,d].
$$

则

$$
T:C[c,d]\to C[a,b]
$$

有界。

对单位球中的 $f$，

$$
|(Tf)(x)|
\le
\int_c^d|K(x,t)|\,dt
$$

给出一致有界性。

又因为 $K$ 在紧矩形上一致连续，

$$
|(Tf)(x)-(Tf)(y)|
\le
\int_c^d|K(x,t)-K(y,t)|\,dt
$$

给出等度连续性。

由 Arzelà–Ascoli 定理：

**定理**  
连续核积分算子

$$
T:C[c,d]\to C[a,b]
$$

是紧算子。

---

## 12. 紧嵌入

### 12.1 定义

设 $X$ 连续嵌入 $Y$，即恒等映射

$$
i:X\to Y
$$

有界。如果 $i$ 还是紧算子，则称 $X$ 紧嵌入 $Y$，记作

$$
X\hookrightarrow\hookrightarrow Y.
$$

### 12.2 基本例子

嵌入

$$
C^1[a,b]\hookrightarrow C[a,b]
$$

是紧的，其中 $C^1[a,b]$ 使用

$$
\|f\|_{C^1}
=
\|f\|_\infty+\|f'\|_\infty.
$$

$C^1$ 单位球一致有界，并且由导数的一致控制得到等度连续性，因此可应用 Arzelà–Ascoli 定理。

### 12.3 与偏微分方程的关系

Sobolev 紧嵌入把弱控制提升为强收敛，是偏微分方程中处理非线性项和证明解存在性的关键工具。

具体的 Rellich–Kondrachov 定理需要 Sobolev 空间和区域正则性，将在相应专题中整理。

---

## 13. 非紧算子的例子

### 13.1 无限维单位算子

无限维赋范空间上的

$$
I_X
$$

不是紧算子。

### 13.2 移位算子

在 $\ell^2$ 上定义右移算子

$$
S(x_1,x_2,\ldots)
=(0,x_1,x_2,\ldots).
$$

则

$$
Se_n=e_{n+1}.
$$

单位向量列有界，但 $\{Se_n\}$ 没有范数收敛子列，所以 $S$ 不紧。

### 13.3 有界不等于紧

紧算子必有界，但有界算子未必紧。紧性要求像集在无限维空间中具有额外的“有限维式集中性”，远强于单纯的范数控制。

---

## 14. 概念辨析

### 14.1 紧算子与紧空间

紧算子的定义域和值域不需要是紧空间。它要求的是有界集的像相对紧。

### 14.2 紧算子与有限秩算子

有限秩算子一定紧；紧算子可以具有无限秩。

Volterra 算子就是无限秩紧算子。

### 14.3 紧与完全连续

紧算子总把弱收敛序列变成范数收敛序列。反向在一般 Banach 空间中不成立，但在自反定义域上成立。

### 14.4 可逼近与紧

有限秩算子的算子范数极限一定紧；一般紧算子未必可由有限秩算子逼近，除非空间具有适当的逼近性质。

---

## 15. 本篇要点

1. 紧算子把有界集映成相对紧集，也可以用有界序列的像子列判定。
2. 每个有限秩算子都紧，但紧算子可以具有无限秩。
3. 紧算子构成算子理想；当值域完备时，它们在算子范数下闭。
4. 无限维空间的单位算子不是紧算子。
5. 紧算子把弱收敛序列变成范数收敛序列。
6. Schauder 定理说明 $T$ 紧当且仅当 $T^*$ 紧。
7. 有限秩算子的闭包包含于紧算子；二者是否相等与逼近性质有关。
8. 对角算子紧当且仅当其对角系数趋于零。
9. Arzelà–Ascoli 定理是验证函数空间算子紧性的主要工具。
10. Volterra 算子、连续核积分算子和 $C^1\hookrightarrow C$ 是典型紧算子或紧嵌入。

下一篇将整理**谱、预解集、预解算子、谱半径和谱映射定理**。

---

## 参考教材

1. 张恭庆、林源渠，《泛函分析讲义》，北京大学出版社。
2. 夏道行、吴卓人、严绍宗、舒五昌，《实变函数论与泛函分析》，高等教育出版社。
3. John B. Conway, *A Course in Functional Analysis*, 2nd ed.
4. Walter Rudin, *Functional Analysis*, 2nd ed.
5. Erwin Kreyszig, *Introductory Functional Analysis with Applications*.
