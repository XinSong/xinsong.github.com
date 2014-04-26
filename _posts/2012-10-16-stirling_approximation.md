---
layout: post
title: "Stirling公式"
description: "Stirling公式"
category: 数学
---

 斯特灵公式（Stirling Approximation）是一条用来取n阶乘近似值的数学公式。一般来说，当n很大的时候，n阶乘的计算量十分大，所以斯特灵公式十分好用，而且，即使在n很小的时候，斯特灵公式的取值已经十分准确。

 $$n! \approx \sqrt{2\pi n}(\frac{n}{e})^n$$

这个公式最早是亚伯拉罕·棣莫弗首先发现的，形式为

$$n!\sim 常数\times n^{n+1/2}e^{-n}$$

斯特灵证明了公式中的常数为$$\sqrt{2\pi}$$。

斯特灵公式的一个直观的、非严格的推导如下：

 $$\begin{align}ln\ (n!) &= ln\ 1 + ln\ 2 + ... + ln\ n \\
 &\approx \int_1^n ln(x)dx \\
 &= nln\ n-n+1 \end{align}$$

下图为$$ln n!$$与$$nln\ n -n$$的收敛图。

![Stirling Approximation][1]

 Stirling公式的意义在于:当n足够大之后n!计算起来十分困难,但利用Stirling公式可以将阶乘转化成幂函数,使得阶乘的结果得以更好的估计.而且n越大,估计得就越准确。

  [1]: http://ww3.sinaimg.cn/mw690/7c225887tw1eftg7diekdj20lf0go755.jpg