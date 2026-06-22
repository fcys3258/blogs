---
title: "Bessel函数"
date: 2026-06-15
tags: ["特殊函数"]
description: "Bessel 函数的定义与基本公式"
---

## Bessel 方程

称
$$
x^2y''+xy'+(x^2-\nu^2)^y=0, \quad x>0,
$$
为 $\nu$ 阶 Bessel 方程, $\nu$ 为给定实数.

---

## 第一类 Bessel 函数

使用 Frobenius 方法, 可以得出 Bessel 方程的一个级数解
$$
\left(\frac{x}{2}\right)^{\nu} \sum_{m=0}^{\infty} \frac{(-1)^m}{m!\Gamma(m+\nu+1)}\left(\frac{x}{2}\right)^{2m},
$$
称其为第一类 Bessel 函数, 并记作 $J_{\nu}(x)$.

---

## 第二类 Bessel 函数

注意到将 $\nu$ 改为 $-\nu$ 不会改变 Bessel方程, 因此我们可以得出 Bessel 方程的另一个解 $J_{-\nu}(x)$. 当 $\nu$ 为非整数时，$J_{\nu}(x)$ 和 $J_{-\nu}(x)$ 线性无关. 当 $\nu$ 为整数时, 根据 Gamma 函数的性质可知
$$
J_{-n}(x) = (-1)^{n}J_{n}(x).
$$
为了得到与 $J_{n}(x)$ 线性无关的解, 引入**诺伊曼**函数
$$
Y_{\nu}(x) = \frac{J_{\nu}(x)\cos \nu \pi - J_{-\nu}(x)}{\sin \nu \pi}, \quad \nu 不为整数.
$$
称其为第二类 Bessel 函数, 且
$$
Y_n(x) = \lim_{\nu\rightarrow n}Y_v(x).
$$

---

## 常用公式

1、
$$
\frac{d}{dx}\left[x^{-\nu}J_{\nu}(x)\right] = -x^{-\nu}J_{\nu + 1}(x), \quad x > 0, \nu \geq 0.
$$
2、
$$
J_{\nu-1}(x) - J_{\nu+1}(x) = 2 J_{\nu}'(x).
$$
3、
$$
J_{\nu-1}(x) + J_{\nu+1}(x) = \frac{2\nu}{x} J_{\nu}(x).
$$
4、
$$
J_{1/2}(x) = \sqrt{\frac{2}{πx}} \sin x, \quad J_{−1/2}(x) = \sqrt{\frac{2}{πx}} \cos x.
$$