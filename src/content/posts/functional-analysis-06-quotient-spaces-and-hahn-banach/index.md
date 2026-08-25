---
title: "泛函分析 06：商空间、直和与 Hahn–Banach 定理"
date: 2026-08-25T14:05:00+08:00
tags: ["泛函分析", "商空间", "Hahn–Banach定理", "对偶性"]
description: "系统整理商空间与商范数、直和与投影、零化子，以及 Hahn–Banach 定理的延拓、分离和对偶性推论。"
draft: false
---

子空间描述一个空间内部的线性结构，商空间则把某个子空间中的差异全部忽略。两者通过对偶空间中的零化子联系起来。

Hahn–Banach 定理是这种联系的核心：它允许把子空间上的连续线性泛函延拓到整个空间，并保持范数不变。由此可以证明连续线性泛函足够丰富，能够区分点、刻画范数、分离闭子空间和建立商空间的对偶关系。

本文设 $X$ 为 $\mathbb K$ 上的赋范空间，其中 $\mathbb K=\mathbb R$ 或 $\mathbb C$；$M,N$ 表示 $X$ 的线性子空间。

---

## 1. 商线性空间

### 1.1 等价关系

固定线性子空间 $M\subseteq X$。定义

$$
x\sim y
\Longleftrightarrow
x-y\in M.
$$

这是 $X$ 上的等价关系。$x$ 所在的等价类为

$$
x+M=\{x+m:m\in M\},
$$

称为 $x$ 关于 $M$ 的陪集。

两个陪集相等当且仅当

$$
x+M=y+M
\Longleftrightarrow
x-y\in M.
$$

### 1.2 商空间

**定义（商空间）**

$$
X/M=\{x+M:x\in X\}
$$

称为 $X$ 关于 $M$ 的商线性空间。

加法和数乘定义为

$$
(x+M)+(y+M)=(x+y)+M,
$$

$$
\alpha(x+M)=\alpha x+M.
$$

这些定义与代表元的选择无关。

商空间把 $M$ 中的所有向量视为零，因为

$$
x+M=M
\Longleftrightarrow
x\in M.
$$

### 1.3 商映射

定义自然商映射

$$
Q:X\to X/M,
\qquad
Qx=x+M.
$$

$Q$ 是线性满射，并且

$$
\ker Q=M.
$$

由线性代数第一同构定理，任意线性算子 $T:X\to Y$ 都诱导代数同构

$$
X/\ker T\cong\operatorname{ran}T.
$$

在赋范空间中，要把它提升为拓扑同构，还需要值域闭性和有界逆等额外条件。

---

## 2. 商范数

### 2.1 定义

设 $M$ 是 $X$ 的闭子空间。对 $x+M\in X/M$，定义

$$
\|x+M\|
=
\inf_{m\in M}\|x-m\|
=
d(x,M).
$$

这称为商范数。

商范数表示陪集 $x+M$ 到零陪集 $M$ 的距离。

### 2.2 为什么要求 $M$ 闭

如果 $M$ 不闭，并且

$$
x\in\overline M\setminus M,
$$

则 $x+M\ne M$，但

$$
\|x+M\|=d(x,M)=0.
$$

此时上式只能定义半范数，不能定义范数。

因此

$$
X/M\text{ 上的商半范数是范数}
\Longleftrightarrow
M\text{ 闭}.
$$

### 2.3 商映射的范数

由

$$
\|Qx\|
=
\inf_{m\in M}\|x-m\|
\le
\|x\|
$$

可知

$$
\|Q\|\le1.
$$

如果 $M\ne X$，则

$$
\|Q\|=1.
$$

商范数正是使自然商映射成为范数为 $1$ 的开映射的自然选择。

### 2.4 商空间的完备性

**定理**  
若 $X$ 是 Banach 空间，$M$ 是闭子空间，则

$$
X/M
$$

在商范数下也是 Banach 空间。

反过来，若 $M$ 本身和 $X/M$ 都是 Banach 空间，则 $X$ 也是 Banach 空间。

---

## 3. 商空间的例子

### 3.1 有限维例子

在 $\mathbb R^2$ 上使用 $1$-范数

$$
\|(x,y)\|_1=|x|+|y|,
$$

令

$$
M=\{(x,0):x\in\mathbb R\}.
$$

则

$$
\|(x,y)+M\|
=
\inf_{t\in\mathbb R}\|(x-t,y)\|_1
=|y|.
$$

所以 $\mathbb R^2/M$ 与 $\mathbb R$ 等距同构。

### 3.2 收敛序列模去零收敛序列

在 Banach 空间 $c$ 上定义极限泛函

$$
L:c\to\mathbb K,
\qquad
L(x)=\lim_{n\to\infty}x_n.
$$

则

$$
\ker L=c_0,
\qquad
\|L\|=1.
$$

由第一同构思想，

$$
c/c_0\cong\mathbb K.
$$

在商范数下，这个同构还是等距的。

### 3.3 商掉常数函数

在 $C[a,b]$ 中令

$$
M=\{f:f\text{ 为常值函数}\}.
$$

则

$$
\|f+M\|
=
\inf_{c\in\mathbb K}\|f-c\|_\infty.
$$

商范数衡量 $f$ 与所有常值函数之间的最佳一致逼近误差。

---

## 4. 直和

### 4.1 代数直和

若

$$
X=M+N
$$

并且

$$
M\cap N=\{0\},
$$

则称 $X$ 是 $M$ 与 $N$ 的代数直和，记作

$$
X=M\oplus N.
$$

此时每个 $x\in X$ 都有唯一分解

$$
x=m+n,
\qquad
m\in M,\ n\in N.
$$

### 4.2 投影

在分解 $X=M\oplus N$ 下，定义

$$
P_M(m+n)=m.
$$

$P_M$ 称为沿 $N$ 到 $M$ 的投影，并满足

$$
P_M^2=P_M,
$$

$$
\operatorname{ran}P_M=M,
\qquad
\ker P_M=N.
$$

反过来，任意满足 $P^2=P$ 的线性算子都给出分解

$$
X=\operatorname{ran}P\oplus\ker P.
$$

### 4.3 拓扑直和与补子空间

若投影 $P_M$ 有界，则称

$$
X=M\oplus N
$$

为拓扑直和。

闭子空间 $M$ 称为有补的，如果存在闭子空间 $N$，使 $X=M\oplus N$ 为拓扑直和。

**定理**  
若 $X$ 是 Banach 空间，$M,N$ 都闭，并且 $X=M\oplus N$ 是代数直和，则相应投影自动有界。

这个结论可以由下一篇的闭图像定理推出。

### 4.4 例子

在 $c$ 中，每个收敛序列 $x$ 可以唯一写成

$$
x
=
\bigl(x-L(x)\mathbf1\bigr)
+L(x)\mathbf1,
$$

其中

$$
\mathbf1=(1,1,\ldots).
$$

第一项属于 $c_0$，第二项属于 $\operatorname{span}\{\mathbf1\}$，因此

$$
c=c_0\oplus\operatorname{span}\{\mathbf1\}.
$$

并非 Banach 空间的每个闭子空间都有补空间，这是无限维空间区别于有限维空间的重要现象。

---

## 5. 实 Hahn–Banach 定理

### 5.1 次线性泛函

设 $X$ 是实线性空间。

**定义（次线性泛函）**  
映射 $p:X\to\mathbb R$ 称为次线性的，如果

$$
p(x+y)\le p(x)+p(y)
$$

以及

$$
p(\lambda x)=\lambda p(x),
\qquad \lambda\ge0.
$$

次线性泛函不要求 $p(-x)=p(x)$，因此比半范数更一般。

### 5.2 解析形式

**定理（Hahn–Banach，实形式）**  
设 $M$ 是实线性空间 $X$ 的线性子空间，$p:X\to\mathbb R$ 是次线性泛函，$f:M\to\mathbb R$ 是线性泛函，并且

$$
f(x)\le p(x),
\qquad x\in M.
$$

则存在 $X$ 上的线性泛函 $F:X\to\mathbb R$，使

$$
F|_M=f
$$

并且

$$
F(x)\le p(x),
\qquad x\in X.
$$

这个定理是纯线性空间结论，不要求 $X$ 完备，甚至不要求 $X$ 已经带有范数。

---

## 6. 范数保持延拓

### 6.1 实数与复数形式

**定理（Hahn–Banach 范数保持延拓）**  
设 $X$ 是实或复赋范空间，$M\subseteq X$ 是线性子空间，$f\in M^*$。则存在 $F\in X^*$，使

$$
F|_M=f
$$

并且

$$
\|F\|=\|f\|.
$$

复数形式可以通过先延拓泛函的实部，再恢复复线性泛函得到。

### 6.2 不需要闭性和完备性

范数保持延拓不要求：

- $M$ 是闭子空间；
- $X$ 是 Banach 空间；
- $M$ 是 Banach 空间。

延拓的存在由 Hahn–Banach 定理保证，但延拓一般不唯一。

### 6.3 一维子空间上的延拓

固定 $x_0\ne0$。在

$$
M=\operatorname{span}\{x_0\}
$$

上定义

$$
f(\alpha x_0)=\alpha\|x_0\|.
$$

则

$$
\|f\|=1.
$$

Hahn–Banach 定理保证存在 $F\in X^*$，满足

$$
\|F\|=1,
\qquad
F(x_0)=\|x_0\|.
$$

这样的泛函称为 $x_0$ 的一个范数泛函或支撑泛函。

---

## 7. 连续线性泛函分离点

### 7.1 分离非零向量

**定理**  
对任意 $x_0\in X$，$x_0\ne0$，都存在 $F\in X^*$，使

$$
F(x_0)\ne0.
$$

更准确地，可以取

$$
\|F\|=1,
\qquad
F(x_0)=\|x_0\|.
$$

因此连续对偶足以区分 $X$ 中不同的点：

$$
x\ne y
\Longrightarrow
\exists F\in X^*,\ F(x)\ne F(y).
$$

### 7.2 范数的对偶表示

**定理**

$$
\|x\|
=
\sup_{\|F\|\le1}|F(x)|.
$$

上界来自

$$
|F(x)|\le\|F\|\,\|x\|,
$$

而 Hahn–Banach 定理保证存在达到该上界的泛函。

这说明原空间的范数可以完全由对偶空间恢复。

### 7.3 连续对偶的平凡性

在一般拓扑线性空间中，连续对偶可能无法区分点。但对赋范空间，Hahn–Banach 定理保证

$$
X^*=\{0\}
\Longleftrightarrow
X=\{0\}.
$$

---

## 8. 到闭子空间的距离

### 8.1 分离点与闭子空间

设 $M\subseteq X$ 是闭子空间，$x_0\notin M$。则

$$
d(x_0,M)>0.
$$

**定理（Hahn–Banach 分离）**  
存在 $F\in X^*$，使

$$
F|_M=0,
$$

$$
\|F\|=1,
$$

并且

$$
F(x_0)=d(x_0,M).
$$

在复数情形中可以选择相位，使右端为正实数。

### 8.2 距离公式

定义 $M$ 的零化子

$$
M^\perp
=
\{F\in X^*:F(m)=0,\ \forall m\in M\}.
$$

则

$$
d(x,M)
=
\sup\left\{
|F(x)|:
F\in M^\perp,\ \|F\|\le1
\right\}.
$$

若 $M$ 闭且 $x\notin M$，上确界可以达到。

### 8.3 闭子空间的对偶刻画

对任意线性子空间 $M\subseteq X$，

$$
\overline M
=
\bigcap_{F\in M^\perp}\ker F.
$$

因此

$$
\overline M=X
\Longleftrightarrow
M^\perp=\{0\}.
$$

这与上一篇

$$
\overline{\operatorname{ran}T}=Y
\Longleftrightarrow
\ker T^*=\{0\}
$$

是同一个对偶思想。

---

## 9. 凸集的分离

### 9.1 点与闭凸集

**定理（严格分离）**  
设 $C\subseteq X$ 是非空闭凸集，$x_0\notin C$。则存在 $F\in X^*$ 和实数 $\alpha$，使

$$
\sup_{x\in C}\operatorname{Re}F(x)
<
\alpha
<
\operatorname{Re}F(x_0).
$$

在实数空间中可以去掉 $\operatorname{Re}$。

这个结论把几何上的“点在凸集外”转化为某个连续线性泛函下的严格数值不等式。

### 9.2 两个凸集

若两个非空凸集不相交，并且其中一个是开集，则存在非零连续线性泛函把它们分离。

若要得到严格分离或正距离分离，通常还需要闭性、紧致性或其中一方具有更强的条件。

### 9.3 支撑超平面

设 $C$ 是凸集，$x_0\in\partial C$。若存在非零 $F\in X^*$，使

$$
\operatorname{Re}F(x)
\le
\operatorname{Re}F(x_0),
\qquad x\in C,
$$

则仿射超平面

$$
\{x:\operatorname{Re}F(x)=\operatorname{Re}F(x_0)\}
$$

称为 $C$ 在 $x_0$ 处的支撑超平面。

---

## 10. 零化子与商空间对偶

### 10.1 零化子

对任意线性子空间 $M\subseteq X$，

$$
M^\perp
=
\{F\in X^*:F|_M=0\}
$$

是 $X^*$ 的闭子空间。

如果只知道 $M$ 而不知道其闭包，则

$$
M^\perp=(\overline M)^\perp.
$$

### 10.2 商空间的对偶

设 $M$ 是闭子空间，$Q:X\to X/M$ 是自然商映射。定义

$$
Q^*:(X/M)^*\to X^*,
\qquad
Q^*\varphi=\varphi\circ Q.
$$

**定理**  
$Q^*$ 是从 $(X/M)^*$ 到 $M^\perp$ 的等距同构。因此

$$
(X/M)^*\cong M^\perp.
$$

商空间上的连续线性泛函，等价于原空间上所有在 $M$ 上为零的连续线性泛函。

### 10.3 子空间的对偶

定义限制映射

$$
R:X^*\to M^*,
\qquad
R(F)=F|_M.
$$

Hahn–Banach 定理说明 $R$ 是满射，并且每个 $f\in M^*$ 都有保持范数的延拓。

又因为

$$
\ker R=M^\perp,
$$

所以

$$
M^*\cong X^*/M^\perp
$$

为等距同构。

这给出两组对偶关系：

$$
(X/M)^*\cong M^\perp,
$$

$$
M^*\cong X^*/M^\perp.
$$

---

## 11. 自然嵌入到二次对偶

### 11.1 自然映射

对每个 $x\in X$，定义 $Jx\in X^{**}$：

$$
(Jx)(F)=F(x),
\qquad F\in X^*.
$$

由此得到线性映射

$$
J:X\to X^{**}.
$$

### 11.2 等距性

由对偶范数表示，

$$
\|Jx\|
=
\sup_{\|F\|\le1}|F(x)|
=
\|x\|.
$$

因此 $J$ 是线性等距嵌入。

这说明每个赋范空间都可以自然地视为其二次对偶的子空间。

若 $J$ 还是满射，则称 $X$ 为自反空间。自反性将在弱拓扑部分集中整理。

---

## 12. 概念辨析

### 12.1 子空间与商空间

- 子空间 $M$ 保留 $M$ 中的向量；
- 商空间 $X/M$ 把相差一个 $M$ 中向量的元素视为相同；
- $M$ 闭保证商空间中的不同陪集具有正距离。

### 12.2 代数直和与拓扑直和

代数直和只要求分解存在且唯一；拓扑直和还要求相应投影连续。

在无限维赋范空间中，代数分解不自动给出稳定的拓扑分解。

### 12.3 Hahn–Banach 定理不保证唯一延拓

定理保证存在保持范数的延拓，但通常有多个不同延拓。只有在额外几何条件下才可能唯一。

### 12.4 对偶空间不能简单看成原空间

有限维时，$X$ 与 $X^*$ 维数相同，但两者之间没有不依赖基的自然线性同构。

Hilbert 空间借助内积具有 Riesz 表示；一般 Banach 空间没有这种自然识别。

---

## 13. 本篇要点

1. 商空间 $X/M$ 把子空间 $M$ 中的方向视为零。
2. 商半范数成为范数，当且仅当 $M$ 是闭子空间。
3. Banach 空间关于闭子空间的商仍是 Banach 空间。
4. 直和对应唯一分解，有界投影对应拓扑直和。
5. Hahn–Banach 定理允许连续线性泛函保持范数地从子空间延拓到整个空间。
6. 连续线性泛函能够分离不同点，并给出范数的对偶表示。
7. 闭子空间可以由其零化子刻画，点到闭子空间的距离也可由对偶泛函表示。
8. $(X/M)^*\cong M^\perp$，而 $M^*\cong X^*/M^\perp$。
9. 自然映射 $J:X\to X^{**}$ 是线性等距嵌入。

下一篇将以 Baire 纲定理为共同基础，集中整理**一致有界原理、开映射定理、逆算子定理和闭图像定理**。

---

## 参考教材

1. 张恭庆、林源渠，《泛函分析讲义》，北京大学出版社。
2. 夏道行、吴卓人、严绍宗、舒五昌，《实变函数论与泛函分析》，高等教育出版社。
3. Erwin Kreyszig, *Introductory Functional Analysis with Applications*.
4. John B. Conway, *A Course in Functional Analysis*, 2nd ed.
5. Walter Rudin, *Functional Analysis*, 2nd ed.
