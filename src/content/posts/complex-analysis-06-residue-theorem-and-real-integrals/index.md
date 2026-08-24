---
title: "复变函数 06：留数定理与实积分"
date: 2026-08-24T15:39:41+08:00
tags: ["复变函数", "留数定理", "实积分"]
description: "系统整理留数的定义与计算、留数定理、无穷远点留数，以及有理积分、三角积分、Fourier 型积分、主值积分和支割积分的围道方法。"
draft: false
---

留数把围道内每个孤立奇点对积分的贡献压缩成一个复数。利用留数定理，复杂的闭路积分可以化成有限个局部系数之和，许多实积分也由此转化为代数计算。

本文先整理留数及其计算公式，再归纳本科课程中常见的围道积分类型。重点是适用条件和方法选择，而不是展开证明。

---

## 1. 留数

### 1.1 定义

设 $a$ 是 $f$ 的孤立奇点，Laurent 展开为

$$
f(z)=\sum_{n=-\infty}^{\infty}c_n(z-a)^n.
$$

**定义（留数）**  
系数 $c_{-1}$ 称为 $f$ 在 $a$ 点的留数，记作

$$
\operatorname{Res}(f,a)=c_{-1}.
$$

### 1.2 积分表示

若小圆 $|z-a|=\rho$ 内不含其他奇点，则

$$
\operatorname{Res}(f,a)
=\frac1{2\pi i}
\int_{|z-a|=\rho}f(z)\,dz.
$$

因此

$$
\int_{|z-a|=\rho}f(z)\,dz
=2\pi i\,\operatorname{Res}(f,a).
$$

留数是孤立奇点对局部闭路积分的全部贡献。

---

## 2. 留数的计算

### 2.1 可去奇点

若 $a$ 是可去奇点，则 Laurent 展开没有负幂项，所以

$$
\operatorname{Res}(f,a)=0.
$$

反之，留数为零并不保证奇点可去；例如 $1/z^2$ 在原点留数为零，但原点是二阶极点。

### 2.2 简单极点

若 $a$ 是简单极点，则

$$
\operatorname{Res}(f,a)
=\lim_{z\to a}(z-a)f(z).
$$

若

$$
f(z)=\frac{\varphi(z)}{\psi(z)},
$$

$\varphi,\psi$ 在 $a$ 附近解析，并且

$$
\psi(a)=0,\qquad \psi'(a)\ne0,
$$

则

$$
\operatorname{Res}(f,a)
=\frac{\varphi(a)}{\psi'(a)}.
$$

### 2.3 高阶极点

若 $a$ 是 $m$ 阶极点，则

$$
\operatorname{Res}(f,a)
=\frac1{(m-1)!}
\lim_{z\to a}
\frac{d^{m-1}}{dz^{m-1}}
\left[(z-a)^m f(z)\right].
$$

例如，

$$
f(z)=\frac{e^z}{(z-1)^3}
$$

在 $z=1$ 有三阶极点，并且

$$
\operatorname{Res}(f,1)
=\frac1{2!}
\left.\frac{d^2}{dz^2}e^z\right|_{z=1}
=\frac e2.
$$

### 2.4 通过展开取系数

若函数由指数、三角函数或已知级数组成，直接展开并寻找 $(z-a)^{-1}$ 项往往更方便。

例如，

$$
\frac{e^z}{z^3}
=\frac1{z^3}+\frac1{z^2}
+\frac1{2z}+\frac1{3!}+\cdots,
$$

所以

$$
\operatorname{Res}\left(\frac{e^z}{z^3},0\right)
=\frac12.
$$

---

## 3. 留数定理

**定理（留数定理）**  
设 $f$ 在正向简单闭曲线 $\gamma$ 及其内部除有限个孤立奇点

$$
a_1,\ldots,a_n
$$

外解析，并且这些奇点均不在曲线上，则

$$
\int_\gamma f(z)\,dz
=2\pi i
\sum_{k=1}^n
\operatorname{Res}(f,a_k).
$$

更一般地，对任意适当闭曲线，

$$
\int_\gamma f(z)\,dz
=2\pi i
\sum_k
\operatorname{Ind}(\gamma,a_k)
\operatorname{Res}(f,a_k).
$$

因此只有绕数不为零的奇点才对积分产生贡献。

### 3.1 使用流程

计算闭路积分时通常按以下顺序：

1. 找出被积函数的全部奇点；
2. 判断哪些奇点位于围道内部；
3. 确认围道上没有奇点；
4. 计算内部各奇点的留数；
5. 乘以 $2\pi i$ 并求和；
6. 若围道不是正向或有多重绕行，再修正方向与绕数。

---

## 4. 无穷远点的留数

### 4.1 定义

若 $f$ 在充分大的 $|z|$ 外亚纯，则定义

$$
\operatorname{Res}(f,\infty)
=-\operatorname{Res}
\left(
\frac1{w^2}f\left(\frac1w\right),0
\right).
$$

等价地，若 $f$ 在无穷远处有 Laurent 展开

$$
f(z)=\cdots+\frac{c_{-1}}z+\frac{c_{-2}}{z^2}+\cdots,
$$

则

$$
\operatorname{Res}(f,\infty)=-c_{-1}.
$$

### 4.2 球面上的留数和

**定理**  
Riemann 球面上亚纯函数的全部留数之和为零：

$$
\sum_{a\in\mathbb C}
\operatorname{Res}(f,a)
+\operatorname{Res}(f,\infty)=0.
$$

当有限奇点很多而无穷远处展开简单时，可以先计算无穷远点留数，再反推出有限留数之和。

---

## 5. 实轴上的有理积分

考虑

$$
\int_{-\infty}^{\infty}R(x)\,dx,
$$

其中 $R=P/Q$ 为有理函数。

若：

1. $Q$ 在实轴上无零点；
2. $\deg Q\ge\deg P+2$；

则通常可以在上半平面取大半圆围道。大圆弧积分趋于零，从而

$$
\int_{-\infty}^{\infty}R(x)\,dx
=2\pi i
\sum_{\operatorname{Im}a_k>0}
\operatorname{Res}(R,a_k).
$$

例如，

$$
\int_{-\infty}^{\infty}
\frac{dx}{x^2+1}
=2\pi i\,
\operatorname{Res}
\left(\frac1{z^2+1},i\right)
=\pi.
$$

若被积函数为偶函数，则

$$
\int_0^\infty R(x)\,dx
=\frac12
\int_{-\infty}^{\infty}R(x)\,dx.
$$

---

## 6. 正半轴上的有理积分

例如计算

$$
\int_0^\infty\frac{dx}{x^4+1}.
$$

由于被积函数为偶函数，可以先求全实轴积分。上半平面的极点为

$$
e^{i\pi/4},\qquad e^{3i\pi/4}.
$$

留数求和后得到

$$
\int_{-\infty}^{\infty}
\frac{dx}{x^4+1}
=\frac{\pi}{\sqrt2},
$$

所以

$$
\int_0^\infty\frac{dx}{x^4+1}
=\frac{\pi}{2\sqrt2}.
$$

对于

$$
\int_0^\infty\frac{x^{\alpha-1}}{1+x^\beta}\,dx,
$$

若含有非整数幂，通常需要选定对数分支并使用扇形或钥匙孔围道。

---

## 7. 三角函数积分

对

$$
\int_0^{2\pi}
R(\cos\theta,\sin\theta)\,d\theta,
$$

使用代换

$$
z=e^{i\theta},\qquad |z|=1,
$$

则

$$
d\theta=\frac{dz}{iz},
$$

$$
\cos\theta=\frac12\left(z+\frac1z\right),
\qquad
\sin\theta=\frac1{2i}\left(z-\frac1z\right).
$$

原积分因此化为单位圆上的有理函数积分，再由留数定理计算。

例如，当 $a>|b|$ 时，

$$
\int_0^{2\pi}
\frac{d\theta}{a+b\cos\theta}
=\frac{2\pi}{\sqrt{a^2-b^2}}.
$$

代换后必须选择单位圆内部的极点，而不能只按代数方程列出全部根。

---

## 8. Fourier 型积分与 Jordan 引理

考虑

$$
\int_{-\infty}^{\infty}
R(x)e^{iax}\,dx,
\qquad a>0.
$$

由于

$$
|e^{iaz}|=e^{-a\,\operatorname{Im}z},
$$

在上半平面指数因子衰减，因此通常取上半圆围道。

**Jordan 引理（常用形式）**  
在适当衰减条件下，若 $a>0$，则

$$
\int_{\Gamma_R}
R(z)e^{iaz}\,dz\to0,
\qquad R\to\infty,
$$

其中 $\Gamma_R$ 是上半圆。

若 $a<0$，则应改用下半平面，使指数项仍然衰减。

最后取复积分的实部或虚部，可以分别得到余弦积分或正弦积分。

---

## 9. Cauchy 主值与实轴奇点

若被积函数在实轴上有奇点，普通反常积分可能不存在，但对称极限可能存在。

**定义（Cauchy 主值）**

$$
\operatorname{PV}
\int_{-\infty}^{\infty}f(x)\,dx
=\lim_{R\to\infty}
\int_{-R}^R f(x)\,dx,
$$

并在有限奇点处采用对称挖去的极限。

若使用上半平面围道，并以小半圆从上方绕过实轴上的简单极点，则典型公式为

$$
\operatorname{PV}
\int_{-\infty}^{\infty}f(x)\,dx
=2\pi i
\sum_{\text{上半平面}}
\operatorname{Res}(f,a_k)
+i\pi
\sum_{\text{实轴}}
\operatorname{Res}(f,b_j).
$$

符号取决于围道方向和绕行在上方还是下方，不能机械套用。

经典结果为

$$
\operatorname{PV}
\int_{-\infty}^{\infty}
\frac{e^{ix}}x\,dx=i\pi,
$$

从而

$$
\int_0^\infty\frac{\sin x}{x}\,dx
=\frac\pi2.
$$

---

## 10. 支割与钥匙孔围道

含有

$$
z^\alpha,\qquad \log z
$$

的函数通常是多值函数。使用留数定理前必须：

1. 选定对数分支；
2. 指定支割；
3. 比较支割两侧的边界值；
4. 估计大圆与小圆上的积分；
5. 再令相应半径趋于 $\infty$ 或 $0$。

钥匙孔围道常用于

$$
\int_0^\infty
\frac{x^{\alpha-1}}{1+x}\,dx,
\qquad 0<\alpha<1,
$$

并可得到

$$
\int_0^\infty
\frac{x^{\alpha-1}}{1+x}\,dx
=\frac{\pi}{\sin(\pi\alpha)}.
$$

分支约定不同会改变围道两侧的相位因子，但最终实积分结果应一致。

---

## 11. 常见误区

### 11.1 留数为零不等于奇点可去

$1/z^2$ 的留数为零，但原点仍是二阶极点。

### 11.2 只计算围道内部的奇点

围道外部的奇点不贡献积分；围道上的奇点则使普通留数定理不能直接使用。

### 11.3 大圆弧积分不会自动趋于零

必须使用 ML 不等式、Jordan 引理或其他估计同时控制被积函数和弧长。

### 11.4 上半平面并非总是正确选择

含 $e^{iaz}$ 时应选择指数衰减的半平面：$a>0$ 取上半平面，$a<0$ 取下半平面。

### 11.5 主值不等于普通反常积分

Cauchy 主值可能存在，而左右两个普通反常积分分别发散。

### 11.6 多值函数必须先选分支

不指定 $\log z$ 或 $z^\alpha$ 的分支，就无法严格比较支割两侧的值。

---

## 12. 本篇要点

1. 留数是 Laurent 展开中 $(z-a)^{-1}$ 的系数。
2. 简单极点可用极限计算，高阶极点可用求导公式计算。
3. 留数定理把闭路积分化成围道内留数之和。
4. Riemann 球面上全部有限点留数与无穷远点留数之和为零。
5. 有理实积分通常使用半圆围道，前提是圆弧积分能够消失。
6. 三角积分通过 $z=e^{i\theta}$ 化为单位圆积分。
7. Fourier 型积分根据指数衰减方向选择上、下半平面。
8. 实轴奇点需要小圆绕行并区分普通积分与 Cauchy 主值。
9. 非整数幂和对数积分需要支割及钥匙孔围道。

下一篇将整理 **辐角原理、对数导数、Rouché 定理以及解析方程的零点计数**。

---

## 参考教材

1. 钟玉泉，《复变函数论》，第 5 版，高等教育出版社。
2. 余家荣，《复变函数》，高等教育出版社。
3. Lars V. Ahlfors, *Complex Analysis*, 3rd ed.
4. James Ward Brown and Ruel V. Churchill, *Complex Variables and Applications*, 9th ed.
5. John B. Conway, *Functions of One Complex Variable I*, 2nd ed.
