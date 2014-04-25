---
layout: post
title: "泊松分布"
description: "介绍了泊松分布的由来，及其于伯努利分布的关系"
category: maths
---

{% include JB/setup %}

若随机变量 $X$ 的可能取值为0,1,2，...,且概率分布为$$P(X = i) = \frac{e^{-\lambda}\lambda^i}{i!} .........公式(1)$$则成 $X$ 服从泊松分布，常记为 $X$ ~$P(\lambda)$。此处，$\lambda$>0是某一常数.

由于$$e^\lambda=\frac{\sum_{i=0}^{\infty}\lambda^i}{i!}.........公式(2)$$,可知公式(1)右边对$i=0,1,...$求和的结果为1.

泊松分布是最重要的离散分布之一，它多出现在当$X$表示在一定的时间或空间内出现的时间个数这种场合。在一定时间内某交通路口所发生的事故个数，是一个典型的例子。泊松分布的产生机制可以通过如下例子来解释。

为方便记，设所观察的这段时间为[0,1),取一个很大的自然数$n$，把时间段[0,1)分为等长的$n$段：$$l_1 = [0,\frac{1}{n}],l_2 = [\frac{1}{n},\frac{2}{n}],...,l_i = [\frac{i-1}{n},\frac{i}{n}],...,l_n = [\frac{n-1}{n},1]$$

我们做如下两个假定：

1. 在每段$l_i$内，恰发生一个事故的概率，近似的与这段时间的长$\frac{1}{n}$成正比，可设为$\frac{\lambda}{n}$。当$n$很大时，$\frac{1}{n}$很小时，在$l_i$这么短暂的一段时间内，要发生两次或者更多次事故是不可能的。因此在$l_i$这段时间内不发生事故的概率为$1-\frac{\lambda}{n}$。
2. $l_i,...,l_n$各段是否发生事故是独立的

把在[0,1)时段内发生的事故数$X$视作在$n$个划分之后的小时段$l_i,...,l_n$内有事故的时段数，则按照上述两个假定，$X$应服从二项分布$B(n,\frac{\lambda}{n})$。于是，我们有 $$P(X = i) = {n \choose i}(\frac{\lambda}{n})^i(1-\frac{\lambda}{n})^{n-i}$$

注意到当$n\rightarrow \infty$取极限时，我们有$$\frac{n \choose i}{n^i}\rightarrow \frac{1}{i!}, (1-\frac{\lambda}{n})^n\rightarrow e^{-\lambda}$$因此
$$P(X = i) = {n \choose i}(\frac{\lambda}{n})^i(1-\frac{\lambda}{n})^{n-i}\\=\frac{e^{-\lambda}\lambda^i}{i!}$$
从上述推导可以看出：泊松分布可作为二项分布的极限而得到。一般的说，若$X~B(n,p)$,其中$n$很大，$p$很小，因而$np=\lambda$不太大时，$X$的分布接近于泊松分布$P(\lambda)$。这个事实有时可将较难计算的二项分布转化为泊松分布去计算。
