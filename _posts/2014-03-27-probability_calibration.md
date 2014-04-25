---
layout: post
title: "概率值校正"
description: "大多数的分类模型，得到的预测结果仅有定序意义，而不能够定量。很多情况下，仅仅得到一个好的AUC值是远远不够的，我们需要得到一个准确的概率值。这就要求，模型的输出结果从定序上升为定距。"
category: 机器学习
tags: 保序回归 普拉托校准
---

大多数的分类模型，得到的预测结果仅有定序意义，而不能够定量。很多情况下，仅仅得到一个好的AUC值是远远不够的，我们需要得到一个准确的概率值。这就要求，模型的输出结果从定序上升为定距。
有两种方法可以实现由定序到定距：普拉托变换（Platt Scaling）和保序回归(Isotonic Regression).Platt Scaling的适用条件较为严格，他仅适用于被扭曲的预测结果是sigmoid的模型；Isotonic Regression的适用条件较为宽松，它只要预测结果是单调的。不幸的是，力量需要代价：相比Platt Scaling， Isotonic Regression更容易过拟合，尤其是当训练数据集稀少的时候。

##Platt Scaling

普拉托在1999年提出可以通过sigmoid函数来讲SVM的预测结果转化为一个后验的概率值。主要分为三步:
###1）sigmoid变换
假设SVM的输出结果为$f(x)$, 为了得到校准之后的概率值，我们对$f(x)$进行变换

$$P(y=1 \| f(x))=\frac{1}{1+e^{Af(x)+B}}$$

其中参数A和B为参数。
###2）采用极大似然法求解A和B	
假设$f_i$ 为模型的预测值，$y_i$为真实结果，则对于训练集$（f_i，y_i）$,极大似然函数为

$$max\prod_{i=1}^{n}p_{i}^{y_i}(1-p_i)^{1-y_i}$$

其中$p_i=\frac{1}{1+e^{Af(x)+B}}$。
为了计算方便，我们对极大似然函数取对数，并将$max$变为$min$，则原问题变为

$$argmin_{A,B} \sum_{i=1}^{n}(y_ilog(p_i)+(1-y_i)log(1-p_i)$$

3） 为了防止过拟合，在极大似然函数中，y值并不是简单的0或者1.
假设训练集中有$N^+个$正样本，$N^-$个负样本，则普拉托变换采用$y^+$ 和$y^-$ 代替1和0.

$$y^+ = \frac{N^+ +1}{N^+ +2},y^-=\frac{1}{N^-+2}$$

##Isotonic Regression
对于给定的训练集$（f_i，y_i）$，其中$f_i$为模型的预测值（为正样本的概率），$y_i$为真实分类。Isotonic Regression寻找变换$m$，使得

$$m= argmin_z\sum_{i=1}^{n}(y_i-z(f_i))^2$$ 

Isotonic Regression的一个最为广发的实现是Pool Adjacent Violators算法，简称PAV算法，算法流程如下图。

![PAV算法伪代码][1]

时间复杂度$O(n)$,空间复杂度$O(n)$

下图为PAV算法在15个样本（6个负样本，9个正样本）上的运行示例。

![PAV算法运行实例][2]

我们预估得到的概率值必须具有单调性，即Score值越大，预估概率值也应当越大，PAV算法的主要思想就是通过不断合并、调整违反单调性的局部区间，使得最终得到的区间满足单调性。具体过程如下：
 1. PAV算法首先将所有样本按照Score的值由大到小降序排列；然后，将每个样本划分为15个独立的区间
 
$$A_0,A_1,A_2,......,A_{13},A_{14}$$

此时，每个区间内只有一个样本，对包含负样本（0）的区间赋予概率值0，对包含正样本（1）的区间赋予概率值1；

 2. PAV由底向上（$$A_{16}\rightarrow A_{0}$$)寻找相邻的两个违反单调性的区间，第一对违反单调性的区间出现在$$A_{12}$$和$$A_{13}$$两个区间，PAV将这两个区间合并，并采用两个区间中较小的序号为新建区间重新命名，记为$$A_{12}$$，将新的$$A_{12}$$内所有元素的概率值求平均，该区间内每个样本的预估概率值为1/2；
 
 3. PAV继续向后查找，发现下两个违反单调性的区间是$$A_{12}$$和$$A_{11}$$,将这两个区间合并，命名为$$A_{11}$$,$$A_{11}$$内的每个元素的概率值现在变为1/3。
 
 4. 重复上述动作，直至剩下的所有区间都满足单调性要求。

附上一个我自己用Python实现的PAV。

    import sys
    class Node:
	def __init__(self, start, end, prob, total_cases, next):
        	self.start = start
		self.end = end
		self.prob = prob
		self.total_cases = total_cases
		self.next = next

    def main(train_file):
    '''输入文件格式uid，待校验的概率值（比如正样本概率），真实结果（0或者1）
    ！！！ATTENTION！！！ 需要输入文件已经按照待校验的概率值排序'''
	head = None
	for line in open(train_file,'r'):
		vec = line.split('\t')
		if not head:
			head = Node(float(vec[0]), float(vec[0]), float(vec[1]), 1, None)
			last_node = head
		else:
			last_node.next = Node(float(vec[0]), float(vec[0]), float(vec[1]), 1, None)
			last_node = last_node.next

	completed = False
	while not completed:
		completed = True
		iter = head
		while iter.next:
			if iter.prob >= iter.next.prob:
				iter.end = iter.next.end
				iter.prob = (iter.prob * iter.total_cases + iter.next.prob * iter.next.total_cases) /(iter.total_cases + iter.next.total_cases)
				iter.total_cases = iter.total_cases + iter.next.total_cases
				iter.next = iter.next.next
				completed = False
				break
			iter = iter.next

	iter = head
	while iter:
		print iter.start, iter.end, iter.prob
		iter = iter.next

  [1]: http://ww1.sinaimg.cn/mw690/7c225887jw1efrvnzcmu5j20e507nmyb.jpg
  [2]: http://ww3.sinaimg.cn/mw690/7c225887jw1efrvswllklj20cw0bb757.jpg