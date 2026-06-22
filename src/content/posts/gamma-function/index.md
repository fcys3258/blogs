---
title: "伽马函数的渐近分析"
date: 2026-06-15
tags: ["特殊函数", "渐近分析"]
description: "Gamma函数的渐近展开与计算方法"
---

## 1. 对数伽马函数 (`gammaln`) 的斯特林公式

在数值分析和渐近分析中，处理大自变量的伽马函数通常使用对数形式 $\ln\Gamma(z)$ 的斯特林渐近展开（Stirling's asymptotic series）。

当 $|z| \to \infty$ 且 $|\arg(z)| < \pi$ 时：
$$
\ln \Gamma(z) \sim \left( z - \frac{1}{2} \right) \ln z - z + \frac{1}{2} \ln(2\pi) + \sum_{k=1}^{\infty} \frac{B_{2k}}{2k(2k-1)z^{2k-1}}
$$
其中 $B_{2k}$ 为伯努利数。截断前几项的常用形式为：
$$
\ln \Gamma(z) \approx \left( z - \frac{1}{2} \right) \ln z - z + \frac{1}{2} \ln(2\pi) + \frac{1}{12z} - \frac{1}{360z^3} + \mathcal{O}\left(z^{-5}\right)
$$

---

## 2. 伽马函数比值的渐近展开

在计算高阶正交多项式时，常遇到 $\frac{\Gamma(n+a)}{\Gamma(n+b)}$。直接计算 $\Gamma$ 会导致浮点溢出（双精度下 $n>171$ 即溢出），大数 $\ln\Gamma$ 直接相减则会导致灾难性取消（Catastrophic cancellation）。

### Tricomi-Erdélyi 展开
由 Tricomi 和 Erdélyi 提出，直接描述了伽马函数比值的渐近行为：
$$
\frac{\Gamma(z+a)}{\Gamma(z+b)} \sim z^{a-b} \sum_{n=0}^{\infty} c_n z^{-n}
$$
展开到前两项的高阶近似形式为：
$$
\frac{\Gamma(n+a)}{\Gamma(n+b)} \sim n^{a-b} \left[ 1 + \frac{(a-b)(a+b-1)}{2n} + \mathcal{O}\left(n^{-2}\right) \right]
$$

### 数值计算策略
* **中等规模 $n$**：利用语言内置函数 `exp(gammaln(n+a) - gammaln(n+b))`。
* **超大规模 $n$**：必须使用上述 Tricomi-Erdélyi 渐近公式直接计算，避免精度丢失。

---

## 3. `gammaln` 差值的广义斯特林展开

如果直接处理对数差值 $\ln\Gamma(z+a) - \ln\Gamma(z+b)$，可以利用带有伯努利多项式 $B_n(x)$ 的广义斯特林展开。该公式结构严密，直接将渐近系数映射到伯努利多项式的差分上：
$$
\ln\Gamma(z+a) - \ln\Gamma(z+b) \sim (a-b)\ln z + \sum_{k=1}^\infty \frac{(-1)^{k+1} (B_{k+1}(a) - B_{k+1}(b))}{k(k+1)z^k}
$$
代入 $k=1$ 时的 $B_2(x) = x^2 - x + \frac{1}{6}$，可严格推导出现 $\mathcal{O}(z^{-1})$ 项的系数 $\frac{(a-b)(a+b-1)}{2z}$。

---

## 4. 伯努利多项式 (Bernoulli Polynomials) 简析

通过母函数（Generating Function）定义为：
$$
\frac{t e^{xt}}{e^t - 1} = \sum_{n=0}^{\infty} B_n(x) \frac{t^n}{n!}
$$
前几项为：
* $B_0(x) = 1$
* $B_1(x) = x - \frac{1}{2}$
* $B_2(x) = x^2 - x + \frac{1}{6}$