---
layout: post
title: "十张图解释机器学习的基本概念"
description: "十张图解释机器学习的基本概念"
category: 机器学习
---

### 1.Test and training error
为什么低训练误差并不总是一件好的事情呢？下图为以模型复杂度为变量的测试及训练错误函数。
 ![Alt text](http://ww2.sinaimg.cn/mw690/7c225887tw1efw7q3nj2wj20j60da751.jpg)

### 2.Underfitting and Overfitting

 ![Alt text](http://ww1.sinaimg.cn/mw690/7c225887tw1efw7q43vqcj20j60e2jsg.jpg)

欠拟合和过拟合的例子。绿色为数据集生成曲线（带噪音），红色为拟合曲线，M为多项式拟合的最高级数。

### 3.奥卡姆剃刀原理（即简单有效原理）
 
![Alt text](http://ww1.sinaimg.cn/mw690/7c225887tw1efw7q32m8bj20aa04yt8n.jpg)  
这张图给了为什么复杂模型原来是小概率事件这个问题一个基本的直观的解释。  
水平轴代表了可能的数据集$$D$$空间。贝叶斯定理以他们预测的数据出现的程度成比例地反馈模型。这些预测被数据$$D$$上归一化概率分布量化。数据的概率给出了一种模型$$H_i$$,$$P(D|H_i)$$被称作支持Hi模型的证据。一个简单的模型$$H_1$$仅可以做到一种有限预测，以$$P(D|H_1)$$展示；一个更加强大的模型$$H_2$$，举例来说，可以比模型$$H_1$$拥有更加自由的参数，可以预测更多种类的数据集。这也表明，无论如何，$$H_2$$在$$C_1$$域中对数据集的预测做不到像$$H_1$$那样强大。假设相等的先验概率被分配给这两种模型，之后数据集落在$$C_1$$区域，不那么强大的模型$$H_1$$将会是更加合适的模型。

### 4.Feature Combination
![Alt text](http://ww3.sinaimg.cn/mw690/7c225887tw1efw7q1vmqoj20bi0bdt9m.jpg)

(1)	为什么集体相关的特征单独来看时无关紧要，这也是（2）线性方法可能会失败的原因。

### 5.Irrelevant Features

![Alt text](http://ww2.sinaimg.cn/mw690/7c225887tw1efw7q2hxlaj20j6067aa3.jpg)

为什么无关紧要的特征会损害KNN，聚类，以及其它以相似点聚集的方法。左右的图展示了两类数据很好地被分离在纵轴上。右图添加了一条不切题的横轴，它破坏了分组，并且使得许多点成为相反类的近邻。

### 6.Basis Functions
![Alt text](http://ww4.sinaimg.cn/mw690/7c225887tw1efw7q1beacj20bv0cwzke.jpg)  

非线性的基础函数是如何使一个低维度的非线性边界的分类问题，转变为一个高维度的线性边界问题。
上图为将一个单维度的非线性带有输入x的分类问题转化为一个2维的线性可分的$$z=(x,x^2)$$问题。  

注意：未升维之前的数据集（其实就是上述点集在x轴上的投影）是不可分的。

### 7.Discriminative vs. Generative

 ![Alt text](http://ww1.sinaimg.cn/mw690/7c225887tw1efw7q1lwftj20j60910tb.jpg)  
 
为什么判别式学习比产生式更加简单？
这两类方法的分类条件的密度举例，有一个单一的输入变量$$x$$（左图），连同相应的后验概率（右图）。注意到左侧的分类条件密度$$p(x|C_1)$$的模式，在左图中以蓝色线条表示，对后验概率没有影响。右图中垂直的绿线展示了$$x$$中的决策边界，它给出了最小的误判率。

### 8. Loss Functions

 ![Alt text](http://ww2.sinaimg.cn/mw690/7c225887tw1efw7q2rpvpj20g80cydg8.jpg)

学习算法可以被视作优化不同的损失函数：应用于支持向量机中的“铰链”错误函数图形，以蓝色线条表示，为了逻辑回归，随着错误函数被因子$$\frac{1}{ln2}$$重新调整，它通过点（0，1），以红色线条表示。黑色线条表示误分，均方误差以绿色线条表示。

### 9. Geometry of least squares

![Alt text](http://ww3.sinaimg.cn/mw690/7c225887tw1efw7q2653zj20ey0amq34.jpg)

带有两个预测的最小二乘回归的N维几何图形。结果向量y正交投影到被输入向量$$x_1$$和$$x_2$$所跨越的超平面。投影$$\hat y$$代表了最小二乘预测的向量。
 
### 10.	Sparsity
 ![Alt text](http://ww2.sinaimg.cn/mw690/7c225887tw1efw7q3bltvj20i70afwf0.jpg)
为什么Lasso算法（L1正规化或者拉普拉斯先验）给出了稀疏的解决方案（比如：带更多0的加权向量）：lasso算法的估算图像(左)以及岭回归算法的估算图像（右）。展示了错误的等值线以及约束函数。分别的，当红色椭圆是最小二乘误差函数的等高线时，实心的蓝色区域是约束区域  
左图：$$|\beta_1| + |\beta_2| \le  t$$  
右图： $$\beta_1^2 + \beta_2^2 \le t^2$$
