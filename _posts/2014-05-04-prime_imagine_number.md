---
layout: post
title: "质数、虚数和线性变换的直观理解"
description: "质数、虚数和线性变换的直观理解"
category: 数学
tags: 线性代数
---

1. 什么是质数？

	教科书上说，质数就是除了 1 和自身以外，没有其它约数的数。不对，这只是质数的一个性质，我们想要知道的是，质数究竟是什么？其实，质数就是不可再分的数，是组成一切自然数的基本元素。 比如，12 是由两个 2 和一个 3 组成的，正如水分子是由两个 H 原子和一个 O 原子组成的一样。只是和化学世界不同，质数有无穷多个,算术世界的元素也就有无穷多个。算术世界内的一切对象、定理和方法，都是由其基本元素——质数组成的，这才是质数为什么那么重要的原因。

2. 什么是虚数？
	
	教科书上说，人们建立复数理论，是因为有时需要处理根号里是复数的情况，这当然是虚数的一个重要产生背景。但是，其实，人们建立复数理论，更重要的是为了完善数学体系：如果承认虚数，那么n次多像是就会有恰好n个根，数系一下子就如同水晶球一般的完美了。

	但是虚数并不能形象的呈现在一维的数轴上：这不仅是因为实数在数轴上已经完备了，还因为实数的数学运算都能够相应的对应到数轴上的几何操作。比如，"乘以2"，就代表数轴上的点距离远点的距离扩大到原来的2倍；"乘以1/2"，会将距离再减半。同样的，"乘以-1"表示把点翻折到数轴的另一侧，"-1的平方"就会把这个点又返回来。

	那么，怎么在数轴上表示"乘以i"的操作呢？换句话说，什么操作连坐两次能够把1变成-1？一个颇具革命性的创意答案便是，把这个点绕着原点旋转90度：转90度转两次，自然就跑到数轴的另一侧了！如果说实数空间是1维的，那么复数空间就是2维的，复数把数轴扩展到了二维平面：横坐标(水平方向)为实数，纵坐标(垂直方向)为虚数，正好解决了复数没地方表示的问题。

	所以，复数的乘法可以解释为缩放加旋转，二维空间内复数本身的通用表达方式也就变成了$$z=r(cos\theta + sint\theta i)$$。

3. 什么是线性变换？

	学习线性代数的时候，我们经常需要把做把(x,y)变成(2x+y,x-3y)之类的操作，教科书上管这叫线性变换，至于线性变换具体是干嘛的，有什么意义，全没讲 ::>_<::  导致当时学的时候那个晕啊

	其实，从集合上看，线性变换就是把平面上的每个点(x,y)都变到(2x+y,x-3y)的位置上去，效果相当于对平面进行了一个"线性的拉扯"。

	![线性变换](http://ww1.sinaimg.cn/mw690/7c225887jw1eg2i16bxhyj206909bt8w.jpg)

	矩阵的乘法，其实就是多个线性变换叠加的效果，它显然满足结合律，但不满足交换律。主对角线全是1的矩阵所对应的线性变换其实就是不变的意思，因此它叫做单位矩阵。矩阵A乘以矩阵B等于是做完线性变换 A 后再做一次线性变换 B 就又变回去了的意思，难怪我们说矩阵 B 是矩阵 A 的逆矩阵。

	课本上对行列式的定义也千奇百怪，牵扯到什么逆序对，伴随矩阵等等。其实，行列式的真正定义就一句话：每个单位正方形在线性变换之后的面积。因此，单位矩阵的行列式当然就为 1，某行全为 0 的行列式显然为 0 （因为某一维度会被无视掉，线性变换会把整个平面压扁）， \|A·B\| 显然等于 \|A\|·\|B\| 。行列式为 0 ，对应的矩阵当然不可逆，因为这样的线性变换已经把平面压成一条线了，什么都不能把它变回去了。当然，更高阶的矩阵就对应了更高维的空间。