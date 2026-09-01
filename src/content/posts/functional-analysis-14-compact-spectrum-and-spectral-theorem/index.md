---
title: "泛函分析 14：紧算子的谱与紧自伴谱定理"
date: 2026-09-01T12:02:00+08:00
tags: ["泛函分析", "紧算子谱", "Fredholm择一定理", "谱定理", "奇异值分解"]
description: "系统整理紧算子的 Riesz–Schauder 谱理论、Fredholm 择一定理，以及紧自伴和紧正规算子的谱分解、奇异值分解与积分方程应用。"
draft: false
---

一般有界算子的谱可能包含大片连续区域，也可能完全没有特征值。紧算子的非零谱却重新表现出有限维矩阵的特征：每个非零谱点都是有限重特征值，非零特征值至多可数，并且只能向 $0$ 聚集。

在 Hilbert 空间中，如果紧算子还是自伴或正规算子，则可以用标准正交特征向量进行谱分解。对一般紧算子，奇异值分解则通过正算子 $T^*T$ 给出类似的正交表示。

本文前半设 $X$ 为复 Banach 空间，$T\in\mathcal K(X)$；后半设 $H,H_1,H_2$ 为复 Hilbert 空间。实 Hilbert 空间的紧自伴结论具有相同形式。

关于 $L^2$ 的内积、正交系、Parseval 恒等式和正交投影，可参见[实变函数 07：$L^p$ 空间](/posts/real-analysis-07-lp-spaces/)。

---

## 1. 非零特征值

### 1.1 特征空间

设 $\lambda\ne0$ 是紧算子 $T$ 的特征值。对应特征空间为

$$
E_\lambda
=
\ker(\lambda I-T).
$$

### 1.2 有限维性

**定理**  
紧算子的每个非零特征空间都是有限维的：

$$
\dim E_\lambda<\infty,
\qquad
\lambda\ne0.
$$

如果 $E_\lambda$ 无限维，则 $T$ 在 $E_\lambda$ 上等于 $\lambda I$。这会迫使无限维空间上的单位算子紧，与 Riesz 引理矛盾。

### 1.3 不同特征值的线性无关性

任意线性算子对应于不同特征值的特征向量都线性无关。

因此如果紧算子存在无限多个不同的非零特征值，其对应单位特征向量构成无限线性无关族。

紧性进一步限制这些特征值只能趋于 $0$。

---

## 2. Riesz–Schauder 谱理论

### 2.1 非零谱点都是特征值

**定理（Riesz–Schauder）**  
设 $T\in\mathcal K(X)$。若

$$
\lambda\in\sigma(T),
\qquad
\lambda\ne0,
$$

则 $\lambda$ 是 $T$ 的特征值：

$$
\ker(\lambda I-T)\ne\{0\}.
$$

因此

$$
\sigma(T)\setminus\{0\}
=
\sigma_p(T)\setminus\{0\}.
$$

紧算子的连续谱或剩余谱只能在 $0$ 处出现。

### 2.2 非零谱的结构

**定理**

1. $\sigma(T)\setminus\{0\}$ 至多可数；
2. 每个非零谱点都是孤立点；
3. 每个非零特征值的几何重数有限；
4. 每个非零特征值的代数重数有限；
5. 非零特征值的唯一可能聚点是 $0$。

因此可以把不同非零特征值排列成有限列或数列

$$
\lambda_1,\lambda_2,\ldots,
$$

若有无限多个，则

$$
\lambda_n\to0.
$$

### 2.3 代数重数

对孤立特征值 $\lambda\ne0$，广义特征空间为

$$
\mathcal G_\lambda
=
\bigcup_{m=1}^{\infty}
\ker(\lambda I-T)^m.
$$

对紧算子，这个递增子空间列最终稳定，并且 $\mathcal G_\lambda$ 有限维。

其维数

$$
\dim\mathcal G_\lambda
$$

称为 $\lambda$ 的代数重数。

几何重数为

$$
\dim\ker(\lambda I-T),
$$

总是不超过代数重数。

---

## 3. 零点的特殊地位

### 3.1 无限维情形

**定理**  
若 $X$ 无限维，$T\in\mathcal K(X)$，则

$$
0\in\sigma(T).
$$

否则 $T$ 有界可逆，从而

$$
I=T^{-1}T
$$

是紧算子，这与无限维空间的单位算子不紧矛盾。

### 3.2 零未必是特征值

$0\in\sigma(T)$ 不保证

$$
\ker T\ne\{0\}.
$$

例如在 $\ell^2$ 上定义

$$
(Tx)_n=\frac{x_n}{n}.
$$

$T$ 紧且单射，所以 $0$ 不是特征值；但 $T^{-1}$ 在值域上不有界，因此

$$
0\in\sigma(T).
$$

### 3.3 有限维情形

若 $X$ 有限维，则每个算子都紧。此时 $0$ 是否属于谱只取决于 $T$ 是否可逆。

所以“紧算子的谱一定包含 $0$”必须附加无限维假设。

---

## 4. Fredholm 算子

### 4.1 定义

设 $A\in\mathcal B(X,Y)$。

**定义（Fredholm 算子）**  
若：

1. $\ker A$ 有限维；
2. $\operatorname{ran}A$ 闭；
3. 商空间

   $$
   Y/\operatorname{ran}A
   $$

   有限维；

则称 $A$ 为 Fredholm 算子。

余维

$$
\operatorname{codim}\operatorname{ran}A
=
\dim\bigl(Y/\operatorname{ran}A\bigr)
$$

称为余核维数。

### 4.2 Fredholm 指标

**定义（指标）**

$$
\operatorname{ind}A
=
\dim\ker A
-
\operatorname{codim}\operatorname{ran}A.
$$

指标衡量齐次方程解空间的维数与非齐次方程兼容条件数目之间的差异。

### 4.3 单位算子的紧扰动

**定理**  
若 $T\in\mathcal K(X)$，则

$$
I-T
$$

是 Fredholm 算子，并且

$$
\operatorname{ind}(I-T)=0.
$$

更一般地，对 $\lambda\ne0$，

$$
\lambda I-T
$$

是指标为 $0$ 的 Fredholm 算子。

---

## 5. Fredholm 择一定理

### 5.1 基本形式

**定理（Fredholm alternative）**  
设 $T\in\mathcal K(X)$。以下条件等价：

1. 齐次方程

   $$
   x-Tx=0
   $$

   只有零解；
2. 对每个 $y\in X$，非齐次方程

   $$
   x-Tx=y
   $$

   都有唯一解；
3. $I-T$ 是单射；
4. $I-T$ 是满射；
5. $I-T$ 有界可逆。

简言之：

$$
I-T\text{ 单射}
\Longleftrightarrow
I-T\text{ 满射}.
$$

### 5.2 一般参数形式

对 $\lambda\ne0$，

$$
\lambda I-T\text{ 单射}
\Longleftrightarrow
\lambda I-T\text{ 满射}.
$$

因此要判断非零 $\lambda$ 是否属于预解集，只需检查齐次方程

$$
Tx=\lambda x
$$

是否存在非零解。

### 5.3 不可逆情形

如果 $I-T$ 不可逆，则：

1. 齐次方程存在非零解；
2. 非齐次方程不对所有 $y$ 可解；
3. 解空间和兼容条件空间都是有限维的；
4. 两者维数相同。

---

## 6. 对偶形式的可解条件

设

$$
A=I-T.
$$

因为 $\operatorname{ran}A$ 闭，

$$
\operatorname{ran}A
=
{}^\perp\ker A^*,
$$

即

$$
y\in\operatorname{ran}A
\Longleftrightarrow
f(y)=0
\quad
\forall f\in\ker A^*.
$$

因此方程

$$
x-Tx=y
$$

有解，当且仅当 $y$ 满足所有伴随齐次方程产生的兼容条件。

并且

$$
\dim\ker(I-T)
=
\dim\ker(I-T)^*.
$$

对一般 $\lambda\ne0$，同样有

$$
y\in\operatorname{ran}(\lambda I-T)
\Longleftrightarrow
f(y)=0
\quad
\forall f\in\ker(\lambda I-T)^*.
$$

---

## 7. Hilbert 空间中的伴随

从本节开始设 $H$ 是 Hilbert 空间，并约定内积对第一个变量线性、对第二个变量共轭线性。

### 7.1 伴随算子

对 $T\in\mathcal B(H)$，存在唯一算子 $T^*\in\mathcal B(H)$，使

$$
\langle Tx,y\rangle
=
\langle x,T^*y\rangle,
\qquad x,y\in H.
$$

并且

$$
\|T^*\|=\|T\|,
$$

$$
(ST)^*=T^*S^*,
$$

$$
(\lambda T)^*=\overline\lambda T^*.
$$

### 7.2 自伴、正规与正算子

**定义**

- 若 $T=T^*$，则称 $T$ 自伴；
- 若

  $$
  TT^*=T^*T,
  $$

  则称 $T$ 正规；
- 若

  $$
  \langle Tx,x\rangle\ge0,
  \qquad x\in H,
  $$

  则称 $T$ 为正算子，记作 $T\ge0$。

正算子一定自伴，自伴算子一定正规。

### 7.3 Hilbert 空间中的可解条件

对有闭值域的算子 $A$，

$$
\operatorname{ran}A
=
(\ker A^*)^\perp.
$$

因此

$$
Ax=y
$$

有解，当且仅当

$$
y\perp\ker A^*.
$$

对

$$
A=\lambda I-T
$$

有

$$
A^*
=
\overline\lambda I-T^*.
$$

---

## 8. 紧自伴算子的特征值

设 $T\in\mathcal K(H)$ 且 $T=T^*$。

### 8.1 特征值为实数

若

$$
Tx=\lambda x,
\qquad x\ne0,
$$

则

$$
\lambda\|x\|^2
=
\langle Tx,x\rangle
=
\langle x,Tx\rangle
=
\overline\lambda\|x\|^2.
$$

因此

$$
\lambda\in\mathbb R.
$$

### 8.2 不同特征空间正交

若

$$
Tx=\lambda x,
\qquad
Ty=\mu y,
\qquad
\lambda\ne\mu,
$$

则

$$
\langle x,y\rangle=0.
$$

所以不同特征值对应的特征空间彼此正交。

### 8.3 范数由特征值达到

若 $T\ne0$，则 $\|T\|$ 或 $-\|T\|$ 至少有一个是 $T$ 的特征值。

因此

$$
\|T\|
=
\max_{\lambda\in\sigma(T)}|\lambda|.
$$

这一结论对一般紧算子不成立；自伴性十分关键。

---

## 9. 紧自伴算子的谱定理

### 9.1 定理

**定理（紧自伴谱定理）**  
设 $T\in\mathcal K(H)$ 且 $T=T^*$。则存在有限或可数个非零实特征值

$$
\lambda_1,\lambda_2,\ldots
$$

以及对应的标准正交特征向量族

$$
\{e_n\},
$$

使：

1. 每个非零特征值按其有限重数重复列出；
2. 若非零特征值有无限多个，则

   $$
   \lambda_n\to0;
   $$

3. 

   $$
   \overline{\operatorname{span}}\{e_n\}
   =
   (\ker T)^\perp
   =
   \overline{\operatorname{ran}T};
   $$

4. 对每个 $x\in H$，

   $$
   Tx
   =
   \sum_n
   \lambda_n
   \langle x,e_n\rangle e_n,
   $$

   级数在 Hilbert 空间范数下收敛。

### 9.2 空间分解

有正交直和

$$
H
=
\ker T
\oplus
\overline{\operatorname{span}}\{e_n\}.
$$

若在 $\ker T$ 中再选取一组标准正交基，就得到整个 $H$ 的标准正交基，其中每个基向量都是 $T$ 的特征向量。

### 9.3 谱的形式

非零谱恰为

$$
\{\lambda_n\}.
$$

若 $H$ 无限维，则

$$
\sigma(T)
=
\{0\}\cup\{\lambda_n\}.
$$

若 $H$ 有限维且 $T$ 可逆，则 $0$ 不属于谱。

---

## 10. 正紧算子与极值刻画

设 $T\ge0$ 且紧。所有非零特征值均为正数，可以排列为

$$
\lambda_1\ge\lambda_2\ge\cdots>0,
$$

若有无限多个，则 $\lambda_n\to0$。

### 10.1 最大特征值

有

$$
\lambda_1
=
\|T\|
=
\max_{\|x\|=1}
\langle Tx,x\rangle.
$$

达到最大值的单位向量正是对应于 $\lambda_1$ 的特征向量。

### 10.2 递归极值

设 $e_1,\ldots,e_{n-1}$ 已选为前面特征值的标准正交特征向量，则

$$
\lambda_n
=
\max
\left\{
\langle Tx,x\rangle:
\|x\|=1,\
x\perp e_1,\ldots,e_{n-1}
\right\}.
$$

这给出通过 Rayleigh 商逐个寻找特征值的变分方法。

### 10.3 正平方根

每个正算子 $T\ge0$ 都存在唯一正算子

$$
T^{1/2}\ge0
$$

满足

$$
(T^{1/2})^2=T.
$$

若 $T$ 紧，则 $T^{1/2}$ 也紧，并且其非零特征值为

$$
\sqrt{\lambda_n}.
$$

---

## 11. 紧正规算子

设 $T\in\mathcal K(H)$ 且

$$
TT^*=T^*T.
$$

**定理（紧正规谱定理）**  
存在有限或可数个非零复特征值 $\{\lambda_n\}$ 和标准正交特征向量族 $\{e_n\}$，使

$$
Tx
=
\sum_n
\lambda_n
\langle x,e_n\rangle e_n.
$$

并且

$$
H
=
\ker T
\oplus
\overline{\operatorname{span}}\{e_n\}.
$$

不同特征值的特征空间正交，若有无限多个非零特征值，则

$$
\lambda_n\to0.
$$

自伴算子是特征值全为实数的特殊正规算子。

---

## 12. 奇异值分解

设

$$
T:H_1\to H_2
$$

是紧算子。

### 12.1 绝对值算子

定义

$$
|T|
=(T^*T)^{1/2}.
$$

$|T|$ 是 $H_1$ 上的正紧算子。

### 12.2 奇异值

$|T|$ 的非零特征值称为 $T$ 的奇异值，记作

$$
s_1\ge s_2\ge\cdots>0.
$$

若有无限多个，则

$$
s_n\to0.
$$

并且

$$
s_1=\|T\|.
$$

### 12.3 Schmidt 分解

存在 $H_1$ 中的标准正交系 $\{u_n\}$ 和 $H_2$ 中的标准正交系 $\{v_n\}$，使

$$
Tu_n=s_nv_n,
$$

$$
T^*v_n=s_nu_n,
$$

并且对每个 $x\in H_1$，

$$
Tx
=
\sum_n
s_n\langle x,u_n\rangle v_n.
$$

这就是紧算子的奇异值分解，也称 Schmidt 分解。

### 12.4 最佳有限秩逼近

定义秩至多为 $N$ 的截断

$$
T_Nx
=
\sum_{n=1}^N
s_n\langle x,u_n\rangle v_n.
$$

则

$$
\|T-T_N\|=s_{N+1}.
$$

并且对任意秩不超过 $N$ 的算子 $F$，

$$
\|T-F\|\ge s_{N+1}.
$$

因此奇异值截断是在算子范数下的最佳有限秩逼近。

---

## 13. Fredholm 积分方程

考虑连续核积分算子

$$
(Tf)(x)
=
\int_a^bK(x,t)f(t)\,dt
$$

以及第二类积分方程

$$
f-\mu Tf=g.
$$

因为 $T$ 紧，Fredholm 择一定理给出：

1. 如果齐次方程

   $$
   f-\mu Tf=0
   $$

   只有零解，则对每个 $g$ 都存在唯一解；
2. 如果齐次方程存在非零解，则非齐次方程只对满足有限个兼容条件的 $g$ 可解；
3. 在 Hilbert 空间中，兼容条件可以写成

   $$
   g\perp
   \ker(I-\overline\mu T^*).
   $$

若核满足对称条件

$$
K(x,t)=\overline{K(t,x)},
$$

则相应积分算子自伴，可以使用标准正交特征函数展开。

---

## 14. 概念辨析

### 14.1 非零谱与零谱

紧算子的非零谱点都是有限重特征值；$0$ 的行为可能完全不同，它可以是特征值、连续谱点或其他谱点。

### 14.2 几何重数与代数重数

- 几何重数是特征空间 $\ker(\lambda I-T)$ 的维数；
- 代数重数是广义特征空间的维数；
- 对自伴或正规算子，两者相同；
- 对一般紧算子，两者可能不同。

### 14.3 自伴与正规

自伴算子满足 $T=T^*$，其谱为实数。

正规算子只要求 $TT^*=T^*T$，其特征值可以是复数，但仍具有正交谱分解。

### 14.4 特征值与奇异值

- 特征值来自 $Tx=\lambda x$，可以为负数或复数；
- 奇异值是 $|T|=(T^*T)^{1/2}$ 的非负特征值；
- 一般算子的奇异值比特征值更稳定，并直接控制最佳低秩逼近。

---

## 15. 本篇要点

1. 紧算子的每个非零谱点都是有限代数重数的孤立特征值。
2. 非零特征值至多可数，唯一可能的聚点是 $0$。
3. 无限维空间上的紧算子必有 $0\in\sigma(T)$，但 $0$ 未必是特征值。
4. $I-T$ 是指标为 $0$ 的 Fredholm 算子。
5. Fredholm 择一定理说明 $I-T$ 单射当且仅当满射。
6. 非齐次方程的可解性由伴随齐次方程给出的有限个条件刻画。
7. 紧自伴算子具有标准正交特征向量谱分解，所有特征值为实数。
8. 紧正规算子也有标准正交谱分解，但特征值可以为复数。
9. 一般 Hilbert 空间紧算子具有奇异值分解。
10. 奇异值截断给出算子范数下的最佳有限秩逼近。

至此，紧算子与谱理论部分已经完成：

$$
\text{紧算子与有限秩逼近}
\longrightarrow
\text{谱与预解集}
\longrightarrow
\text{Riesz\text{–}Schauder 与 Fredholm}
\longrightarrow
\text{紧自伴谱定理与奇异值分解}.
$$

后续可以继续整理**一般有界自伴算子的谱定理、无界自伴算子以及算子半群**。

---

## 参考教材

1. 张恭庆、林源渠，《泛函分析讲义》，北京大学出版社。
2. 夏道行、吴卓人、严绍宗、舒五昌，《实变函数论与泛函分析》，高等教育出版社。
3. John B. Conway, *A Course in Functional Analysis*, 2nd ed.
4. Walter Rudin, *Functional Analysis*, 2nd ed.
5. Erwin Kreyszig, *Introductory Functional Analysis with Applications*.
6. Michael Reed and Barry Simon, *Methods of Modern Mathematical Physics, Vol. I: Functional Analysis*.
