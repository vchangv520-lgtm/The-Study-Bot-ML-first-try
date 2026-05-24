const phases = [
  { id: "all", label: "全部" },
  { id: "foundation", label: "基础" },
  { id: "neural", label: "神经网络" },
  { id: "decision", label: "决策与贝叶斯" },
  { id: "pgm", label: "PGM 与 EM" }
];

const lectures = [
  {
    id: 1,
    phase: "foundation",
    title: "Maths Review: 概率、线代、极限",
    file: "Lecture 1.pdf",
    pages: 56,
    level: "start",
    time: "90-120 min",
    summary: "这讲是从 0 进入 StatML 的地基。你不需要先把所有数学都完美掌握，但要能读懂随机变量、矩阵运算、范数、极限和收敛这些语言。",
    goals: ["把 probability mass/density、expectation、variance 说清楚", "把向量、矩阵、内积、特征值和投影连起来", "知道为什么机器学习里总在谈 convergence"],
    prep: ["高中/本科微积分的导数和积分直觉", "矩阵乘法和转置", "基本概率符号 P(A), P(A|B), E[X]"],
    practice: ["手算一个二元离散分布的 marginal 和 conditional", "用 2D 向量画出内积和投影", "写下你对 overfitting 的直觉定义"],
    quiz: {
      q: "如果两个随机变量独立，P(X,Y) 和 P(X)P(Y) 的关系是什么？为什么这对模型分解重要？",
      a: "独立时 P(X,Y)=P(X)P(Y)。这让联合分布可以拆成更小的因子，是后面 PGM、Naive Bayes、HMM 推导的基本节省。"
    }
  },
  {
    id: 2,
    phase: "foundation",
    title: "Statistical Schools of Thought",
    file: "Lecture 2.pdf",
    pages: 29,
    level: "concept",
    time: "70-90 min",
    summary: "这一讲解释不同学习算法从哪里来：frequentist、decision theory、Bayesian。它还给出 parametric/non-parametric、generative/discriminative 的地图。",
    goals: ["区分 frequentist estimate、Bayesian posterior 和 decision risk", "解释 generative model 与 discriminative model 的学习目标", "知道 parametric model 为什么更省数据但更受假设限制"],
    prep: ["Lecture 1 的概率符号", "loss function 的直觉", "一个分类问题的输入 x 和标签 y"],
    practice: ["把 linear regression 分别写成 MLE、risk minimization、Bayesian 的问题", "找三个模型并标注 generative/discriminative", "为同一个问题设计 0-1 loss 和 squared loss"],
    quiz: {
      q: "为什么 Naive Bayes 是 generative，而 logistic regression 是 discriminative？",
      a: "Naive Bayes 建模 p(x,y) 或 p(x|y)p(y)，可以生成特征；logistic regression 直接建模 p(y|x)，专注决策边界。"
    }
  },
  {
    id: 3,
    phase: "foundation",
    title: "Linear Regression",
    file: "Lecture 3.pdf",
    pages: 26,
    level: "model",
    time: "90 min",
    summary: "第一套完整模型。重点不是背公式，而是理解线性假设、平方损失、解析解、basis expansion 和 bias-variance 的关系。",
    goals: ["从平方损失推出 least squares", "解释 basis expansion 如何让线性模型表达非线性关系", "知道 analytic solution 的便利和局限"],
    prep: ["矩阵乘法、逆矩阵、转置", "导数为 0 的最优化直觉", "均方误差 MSE"],
    practice: ["手推一维 least squares 的斜率", "画出多项式 basis expansion 的效果", "比较 underfit 和 overfit 曲线"],
    quiz: {
      q: "为什么 basis expansion 后模型仍然可以叫 linear regression？",
      a: "因为模型对参数 w 仍然是线性的，只是输入 x 先被变换成 phi(x)。非线性发生在特征空间，不在参数形式里。"
    }
  },
  {
    id: 4,
    phase: "foundation",
    title: "Iterative Optimisation & Logistic Regression",
    file: "Lecture 4.pdf",
    pages: 28,
    level: "model",
    time: "100 min",
    summary: "从解析解转向迭代优化：gradient descent、Newton-Raphson，再进入 logistic regression 这个线性分类器主力。",
    goals: ["解释学习率如何影响 gradient descent", "用 sigmoid 把线性分数变成概率", "理解 logistic loss 和分类边界的关系"],
    prep: ["导数和梯度", "Lecture 3 的线性模型", "二分类标签 y in {0,1} 或 {-1,1}"],
    practice: ["在交互实验里调 linear classifier 的 w 和 b", "手算 sigmoid(0), sigmoid(2), sigmoid(-2)", "比较 squared loss 和 logistic loss 对离群点的反应"],
    quiz: {
      q: "logistic regression 为什么不是用 step function 直接分类？",
      a: "step function 不平滑，难以用梯度优化；sigmoid 提供可微的概率输出，让 loss 可以被稳定最小化。"
    }
  },
  {
    id: 5,
    phase: "foundation",
    title: "Regularisation",
    file: "Lecture 5.pdf",
    pages: 41,
    level: "model hygiene",
    time: "90 min",
    summary: "正则化是防止模型被噪声牵着走的第一条安全绳。Ridge、Lasso、MAP 和 bias-variance 在这里接上。",
    goals: ["区分 L1 与 L2 regularisation 的效果", "把 regularisation 看成 loss 加惩罚项", "理解 MAP 如何给 regularisation 一个 Bayesian 解释"],
    prep: ["Linear regression loss", "过拟合/欠拟合", "范数 norm"],
    practice: ["画出 L1 和 L2 的约束形状", "解释为什么 Lasso 会产生稀疏权重", "给一个高维小样本任务选择正则化方案"],
    quiz: {
      q: "Ridge 和 Lasso 最大的行为差异是什么？",
      a: "Ridge 倾向把权重压小但保留；Lasso 更容易把一些权重压到 0，因此可做特征选择。"
    }
  },
  {
    id: 6,
    phase: "foundation",
    title: "PAC Learning Theory",
    file: "Lecture 6.pdf",
    pages: 26,
    level: "theory",
    time: "80 min",
    summary: "PAC 把“能不能学到”说成概率与误差界。先抓住 excess risk、approximation error、estimation error，再看 high probability bound。",
    goals: ["解释 Bayes risk 和 irreducible error", "区分 approximation 与 estimation", "知道 PAC 的 probably 和 approximately 分别指什么"],
    prep: ["经验误差和真实误差", "概率上界", "loss 的期望"],
    practice: ["用一句话解释为什么训练误差低不代表泛化好", "把模型类太小和模型类太大分别对应到两类 error", "写出一个高概率陈述的普通语言版本"],
    quiz: {
      q: "为什么 excess risk 要分解成 approximation error 和 estimation error？",
      a: "这样能区分问题来自模型类表达力不够，还是样本有限导致选错模型。二者对应不同解决办法。"
    }
  },
  {
    id: 7,
    phase: "foundation",
    title: "VC Theory",
    file: "Lecture 7.pdf",
    pages: 28,
    level: "theory",
    time: "90 min",
    summary: "VC theory 继续回答无限模型类怎么控制泛化。关键词是 growth function、shattering、VC dimension。",
    goals: ["解释 shatter 一个数据集是什么意思", "把 VC dimension 理解成模型类容量", "知道容量越大不总是越好"],
    prep: ["PAC bound 的动机", "二分类概念", "组合数量级直觉"],
    practice: ["判断 1D threshold 能 shatter 几个点", "比较线性分类器在 1D 与 2D 的 VC dimension 直觉", "用自己的话写出 capacity 与 overfitting 的关系"],
    quiz: {
      q: "VC dimension 高说明模型一定更好吗？",
      a: "不一定。高 VC dimension 表示表达力强，但样本不足时 estimation error 可能更大，更容易过拟合。"
    }
  },
  {
    id: 8,
    phase: "neural",
    title: "Perceptron & Artificial Neural Networks",
    file: "Lecture 8.pdf",
    pages: 40,
    level: "model",
    time: "90 min",
    summary: "从 perceptron 进入神经网络。重点是把神经元看成线性变换加非线性激活，再理解多层网络为什么能表达复杂函数。",
    goals: ["解释 perceptron 更新规则", "识别 layer、activation、weight、bias", "理解 universal approximation 的直觉含义"],
    prep: ["Linear classifier", "gradient descent", "向量化计算"],
    practice: ["手算一个 perceptron 对单个错分点的更新", "画一个两层网络的计算图", "比较 linear model 与 MLP 的决策边界"],
    quiz: {
      q: "如果神经网络每层都没有非线性激活，多层叠加会发生什么？",
      a: "多个线性变换的组合仍然是线性变换，所以表达力不会真正超过单层线性模型。"
    }
  },
  {
    id: 9,
    phase: "neural",
    title: "Backpropagation & Deep Training",
    file: "Lecture 9.pdf",
    pages: 35,
    level: "training",
    time: "100 min",
    summary: "Backprop 是链式法则在计算图上的系统应用。看懂误差信号如何从 loss 反向流动，就能读大多数深度学习训练流程。",
    goals: ["把 backprop 解释为链式法则", "理解 representation learning 为什么需要深层模型", "知道优化器和正则化在深网训练中的位置"],
    prep: ["链式法则", "Lecture 8 的神经网络结构", "loss 对参数求梯度"],
    practice: ["对 y=(ax+b)^2 手写反向传播", "标出一个三层 MLP 的 forward/backward 变量", "列出三种训练深网时常见的不稳定来源"],
    quiz: {
      q: "Backpropagation 本身是优化算法吗？",
      a: "不是。Backprop 负责高效计算梯度；SGD、Adam 等优化器使用这些梯度来更新参数。"
    }
  },
  {
    id: 10,
    phase: "neural",
    title: "Convolutional Neural Networks",
    file: "Lecture 10.pdf",
    pages: 30,
    level: "architecture",
    time: "90 min",
    summary: "CNN 的核心是局部连接、权重共享和平移结构。先理解 convolution operator，再看 LeNet、ResNet 这种架构为什么有用。",
    goals: ["解释卷积核如何在图像上滑动", "理解 weight sharing 降低参数量", "知道 pooling、padding、stride 的作用"],
    prep: ["矩阵和小窗口运算", "神经网络 layer 概念", "图像像素张量"],
    practice: ["手算一个 3x3 image 与 2x2 kernel 的卷积", "比较全连接层和卷积层参数量", "画出 stride=2 的输出尺寸变化"],
    quiz: {
      q: "为什么 CNN 比全连接网络更适合图像？",
      a: "图像有局部空间结构。CNN 用局部 receptive field 和共享卷积核捕捉模式，参数更少，也更符合平移相关性。"
    }
  },
  {
    id: 11,
    phase: "neural",
    title: "Autoencoders & Deep Generative Models",
    file: "Lecture 11.pdf",
    pages: 29,
    level: "representation",
    time: "90 min",
    summary: "Autoencoder 让模型学压缩表示，VAE 则把潜变量和概率建模接起来。重点是 encoder、latent code、decoder 这条管线。",
    goals: ["解释 autoencoder 为什么不是简单复制输入", "区分 sparse、denoising、contractive autoencoder 的动机", "理解 VAE 的潜变量建模直觉"],
    prep: ["MLP forward pass", "重构误差", "概率分布基础"],
    practice: ["画出 encoder-code-decoder 的信息流", "说明 denoising autoencoder 为什么要加噪声", "把 VAE 和 PCA 做直觉比较"],
    quiz: {
      q: "Autoencoder 的瓶颈层为什么重要？",
      a: "瓶颈限制信息通道，迫使模型学习压缩表示，而不是逐像素记忆输入。"
    }
  },
  {
    id: 12,
    phase: "neural",
    title: "RNN, Attention & Transformer",
    file: "Lecture 12.pdf",
    pages: 22,
    level: "sequence",
    time: "100 min",
    summary: "从 recurrent state 处理序列，到 attention 直接建立 token 间依赖，再到 Transformer。重点是序列建模的依赖路径。",
    goals: ["解释 RNN hidden state 的作用", "知道 BPTT 为什么可能有梯度问题", "把 attention 理解成 query-key-value 的加权检索"],
    prep: ["链式法则", "神经网络层", "序列数据例子"],
    practice: ["画一个长度为 4 的 RNN 展开图", "解释 LSTM 为什么需要门控", "用一句话说明 self-attention 和 RNN 的区别"],
    quiz: {
      q: "Transformer 为什么能更容易并行训练？",
      a: "Self-attention 不需要按时间步递推 hidden state，可以同时计算多个 token 的相互关系。"
    }
  },
  {
    id: 13,
    phase: "decision",
    title: "Support Vector Machines",
    file: "Lecture 13.pdf",
    pages: 32,
    level: "classifier",
    time: "90 min",
    summary: "SVM 把分类看成最大化 margin。先理解 hard-margin、soft-margin 和 hinge loss，再接 kernel trick。",
    goals: ["解释 maximum margin 的几何意义", "区分 hard-margin 与 soft-margin", "把 SVM 目标看成 regularized loss"],
    prep: ["线性分类器", "向量到直线的距离", "regularisation"],
    practice: ["在交互实验里找最大 margin 的直觉位置", "画出 hinge loss", "说明 C 参数变大/变小的效果"],
    quiz: {
      q: "为什么 SVM 只由 support vectors 决定边界？",
      a: "只有落在 margin 上或违反 margin 的点对约束/损失有直接影响，远离边界且分类正确的点不改变最优边界。"
    }
  },
  {
    id: 14,
    phase: "decision",
    title: "Kernel Methods",
    file: "Lecture 14.pdf",
    pages: 41,
    level: "feature space",
    time: "100 min",
    summary: "Kernel trick 让你在高维特征空间做点积，而不显式构造高维特征。它把 SVM 从线性边界扩展到复杂边界。",
    goals: ["理解 dual formulation 为什么只需要点积", "解释 kernel function 的角色", "知道 Mercer condition 与合法 kernel 的关系"],
    prep: ["SVM primal/dual 的动机", "内积", "basis expansion"],
    practice: ["比较 polynomial kernel 和 RBF kernel 的直觉", "写出 K(x,z) 作为相似度函数的解释", "说明 kernel 如何处理字符串或图等非常规数据"],
    quiz: {
      q: "Kernel trick 真的没有进入高维空间吗？",
      a: "概念上等价于进入高维特征空间；计算上只通过 kernel 直接得到点积，避免显式构造 phi(x)。"
    }
  },
  {
    id: 15,
    phase: "decision",
    title: "Multi-armed Bandits",
    file: "Lecture 15.pdf",
    pages: 25,
    level: "sequential decision",
    time: "80 min",
    summary: "Bandit 是最干净的 explore-vs-exploit 问题。用 epsilon-greedy 和 UCB 体会为什么短期最优不一定长期最优。",
    goals: ["定义 arm、reward、regret", "区分 exploration 和 exploitation", "解释 UCB 为什么偏向不确定但可能高收益的选择"],
    prep: ["期望收益", "随机试验", "分类之外的决策问题"],
    practice: ["运行 bandit lab 比较两种策略", "解释 regret 曲线代表什么", "设计一个广告推荐里的 bandit 场景"],
    quiz: {
      q: "epsilon-greedy 的 epsilon 太小会有什么风险？",
      a: "探索不足，早期噪声可能让算法锁定次优 arm，长期 regret 变大。"
    }
  },
  {
    id: 16,
    phase: "decision",
    title: "Bayesian Regression",
    file: "Lecture 16.pdf",
    pages: 27,
    level: "Bayesian",
    time: "100 min",
    summary: "Bayesian regression 不只给一个点估计，而是保留参数不确定性。重点是 prior、likelihood、posterior 和 predictive distribution。",
    goals: ["解释 posterior 如何由 prior 和 likelihood 更新", "理解 conjugate prior 的便利", "区分参数不确定性和观测噪声"],
    prep: ["Bayes rule", "linear regression", "Normal distribution"],
    practice: ["用 Bayes lab 看成功/失败观测如何改变后验", "画出数据变多时 posterior 变窄的直觉", "说明 Bayesian prediction 为什么可以给 uncertainty"],
    quiz: {
      q: "Bayesian regression 和 ridge regression 的联系是什么？",
      a: "在 Gaussian likelihood 和 Gaussian prior 下，MAP estimate 会得到类似 ridge 的 L2 正则化形式。"
    }
  },
  {
    id: 17,
    phase: "decision",
    title: "Bayesian Classification",
    file: "Lecture 17.pdf",
    pages: 16,
    level: "Bayesian",
    time: "80 min",
    summary: "从 Beta-Binomial 这种离散共轭例子进入 Bayesian classification，并看到 logistic regression 的 non-conjugacy 难点。",
    goals: ["掌握 Beta-Binomial 更新直觉", "理解 conjugate pair 为什么省计算", "知道 Bayesian logistic regression 为什么需要近似"],
    prep: ["Bayes rule", "二分类", "Beta distribution 形状直觉"],
    practice: ["用不同 prior 跑 Bayes lab", "解释 sunrise example 的 prior 敏感性", "写出 posterior proportional to likelihood times prior"],
    quiz: {
      q: "为什么共轭先验有用？",
      a: "posterior 与 prior 属于同一分布族，更新后只需改参数，推导和计算都更简单。"
    }
  },
  {
    id: 18,
    phase: "pgm",
    title: "PGM Representation",
    file: "Lecture 18.pdf",
    pages: 27,
    level: "graphical models",
    time: "90 min",
    summary: "Probabilistic graphical models 用图表达联合分布的结构。先理解 directed/undirected、factorization、conditional independence。",
    goals: ["把 joint distribution 分解成 factors", "解释 graph structure 如何编码独立性", "区分 representation、probabilistic inference、statistical inference"],
    prep: ["联合分布与条件分布", "Bayes rule", "图里的节点和边"],
    practice: ["为三变量链 X -> Y -> Z 写出 factorization", "判断一个简单图中的条件独立", "把 Naive Bayes 画成 PGM"],
    quiz: {
      q: "PGM 为什么不仅是画图工具？",
      a: "图结构约束了联合分布如何分解，也决定哪些推理和学习算法可以高效运行。"
    }
  },
  {
    id: 19,
    phase: "pgm",
    title: "PGM Independence & Examples",
    file: "Lecture 19.pdf",
    pages: 32,
    level: "graphical models",
    time: "90 min",
    summary: "这一讲正式处理 independence、conditional independence、explaining away、d-separation、Markov blanket。",
    goals: ["解释 explaining away", "用 d-separation 判断条件独立", "理解 Markov blanket 对局部推理的意义"],
    prep: ["PGM factorization", "条件概率", "简单有向图"],
    practice: ["画 collider、chain、fork 三种结构", "比较给定中间节点前后的独立关系", "为一个节点找 Markov blanket"],
    quiz: {
      q: "Collider X -> Z <- Y 中，观察 Z 后 X 和 Y 为什么可能相关？",
      a: "因为 Z 的结果会让 X 与 Y 互相解释对方的可能性，这就是 explaining away。"
    }
  },
  {
    id: 20,
    phase: "pgm",
    title: "Inference on PGMs",
    file: "Lecture 20.pdf",
    pages: 22,
    level: "inference",
    time: "90 min",
    summary: "有了图以后，需要计算 marginal 和 conditional marginal。精确方法看 elimination，近似方法看 sampling，并引出参数估计和 EM。",
    goals: ["理解 probabilistic inference 的目标", "解释 variable elimination 的基本操作", "知道 latent variables 为什么让学习更难"],
    prep: ["PGM factors", "marginalization 求和/积分", "MLE 基础"],
    practice: ["对三个离散变量手做一次 eliminate", "说明 factor 顺序会影响计算量", "列出一个需要近似推理的场景"],
    quiz: {
      q: "为什么 latent variable 会推动我们使用 EM？",
      a: "因为缺失的隐藏标签让直接 MLE 变难；EM 通过估计隐藏变量分布和更新参数交替优化。"
    }
  },
  {
    id: 21,
    phase: "pgm",
    title: "HMMs & Message Passing",
    file: "Lecture 21.pdf",
    pages: 25,
    level: "sequence PGM",
    time: "100 min",
    summary: "HMM 是 PGM 的序列案例。forward、Baum-Welch、Viterbi 都可以看成 elimination/message passing 的不同实例。",
    goals: ["区分 evaluation、learning、decoding 三类 HMM 问题", "理解 forward algorithm 和 Viterbi 的差异", "知道 sum-product 如何推广 elimination"],
    prep: ["PGM inference", "序列数据", "动态规划直觉"],
    practice: ["画一个长度为 4 的 HMM", "比较 sum-product 与 max-product", "解释 Viterbi 为什么用 max 替代 sum"],
    quiz: {
      q: "HMM 的两个核心独立性假设是什么？",
      a: "当前隐藏状态只依赖前一隐藏状态；当前观测只依赖当前隐藏状态。"
    }
  },
  {
    id: 22,
    phase: "pgm",
    title: "Gaussian Mixture Models",
    file: "Lecture 22.pdf",
    pages: 22,
    level: "unsupervised",
    time: "90 min",
    summary: "GMM 把 clustering 变成概率模型：每个点来自某个隐藏高斯成分。它自然引出 EM。",
    goals: ["区分 k-means 和 GMM 的聚类观点", "解释 mixture weight、mean、covariance", "理解 responsibility 的直觉"],
    prep: ["Gaussian distribution", "clustering", "latent variable"],
    practice: ["运行 EM lab 看 responsibility 如何改变参数", "比较 hard assignment 与 soft assignment", "说明 covariance 对簇形状的影响"],
    quiz: {
      q: "GMM 中 responsibility 是什么？",
      a: "它是某个数据点属于某个 mixture component 的 posterior probability，用于软分配。"
    }
  },
  {
    id: 23,
    phase: "pgm",
    title: "Expectation Maximization",
    file: "Lecture 23.pdf",
    pages: 28,
    level: "optimization",
    time: "100 min",
    summary: "EM 用 E-step 和 M-step 交替优化含隐藏变量模型的 likelihood。Jensen inequality 给出 lower bound 视角。",
    goals: ["解释 E-step 和 M-step 分别做什么", "理解 lower bound 为什么会逐步提高", "把 EM 应用回 GMM 参数学习"],
    prep: ["GMM", "log-likelihood", "Jensen inequality 的 concavity 直觉"],
    practice: ["在 EM lab 连续运行 8 步观察 log-likelihood", "写出 E-step 的普通语言解释", "比较 EM 与 k-means 的关系"],
    quiz: {
      q: "EM 是否保证找到全局最优？",
      a: "通常不保证。它保证每步不降低目标下界或 likelihood，但可能收敛到局部最优，初始化很重要。"
    }
  },
  {
    id: 24,
    phase: "pgm",
    title: "Case Study: Ensembling Unreliable Sources",
    file: "Lecture 24.pdf",
    pages: 43,
    level: "case study",
    time: "90 min",
    summary: "最后一讲把模型思维用到 truth inference：多个不可靠来源如何组合出更可信的答案。适合作为全课整合案例。",
    goals: ["识别真实标签、来源可靠度和观测之间的关系", "把 case study 画成 latent variable model", "总结本课从 linear models 到 PGM 的共同主题"],
    prep: ["Bayesian thinking", "PGM representation", "EM/GMM 的隐藏变量视角"],
    practice: ["为多个 annotator 的投票建立一个概率图模型", "说明多数投票什么时候会失败", "写一段课程总结：你现在如何定义 statistical machine learning"],
    quiz: {
      q: "为什么简单多数投票可能输给概率模型？",
      a: "多数投票默认来源同等可靠且独立；概率模型可以估计来源可靠度和隐藏真值，因此在噪声不均匀时更稳。"
    }
  }
];

const englishLectures = {
  1: {
    title: "Maths Review: Probability, Linear Algebra, Limits",
    summary: "This lecture is the mathematical foundation for StatML. You do not need perfect fluency yet, but you should be able to read the language of random variables, matrix operations, norms, limits, and convergence.",
    goals: ["Explain probability mass/density, expectation, and variance", "Connect vectors, matrices, inner products, eigenvalues, and projections", "Understand why convergence appears throughout machine learning"],
    prep: ["Basic calculus intuition for derivatives and integrals", "Matrix multiplication and transposes", "Core probability notation: P(A), P(A|B), E[X]"],
    practice: ["Compute marginals and conditionals for a small discrete joint distribution", "Draw inner products and projections with 2D vectors", "Write your own definition of overfitting"],
    quiz: {
      q: "If two random variables are independent, what is the relationship between P(X,Y) and P(X)P(Y), and why does it matter for model factorization?",
      a: "Independence gives P(X,Y)=P(X)P(Y). This lets a joint distribution split into smaller factors, which later powers PGMs, Naive Bayes, and HMMs."
    }
  },
  2: {
    title: "Statistical Schools of Thought",
    summary: "This lecture explains where learning algorithms come from: frequentist statistics, decision theory, and Bayesian statistics. It also maps parametric/non-parametric and generative/discriminative models.",
    goals: ["Distinguish frequentist estimates, Bayesian posteriors, and decision risk", "Explain the learning goals of generative and discriminative models", "Understand why parametric models use less data but rely on stronger assumptions"],
    prep: ["Probability notation from Lecture 1", "The intuition of a loss function", "Inputs x and labels y in a classification task"],
    practice: ["Write linear regression as MLE, risk minimization, and Bayesian inference", "Label three models as generative or discriminative", "Design 0-1 loss and squared loss for the same task"],
    quiz: {
      q: "Why is Naive Bayes generative while logistic regression is discriminative?",
      a: "Naive Bayes models p(x,y) or p(x|y)p(y), so it describes how features could be generated. Logistic regression models p(y|x) directly and focuses on the decision boundary."
    }
  },
  3: {
    title: "Linear Regression",
    summary: "This is the first complete model. The point is not to memorize formulas, but to understand linear assumptions, squared loss, analytic solutions, basis expansion, and the bias-variance tradeoff.",
    goals: ["Derive least squares from squared loss", "Explain how basis expansion gives a linear model nonlinear behavior", "Know the strengths and limits of an analytic solution"],
    prep: ["Matrix multiplication, inverses, and transposes", "The optimization idea of setting a derivative to zero", "Mean squared error"],
    practice: ["Derive the slope for one-dimensional least squares", "Sketch the effect of polynomial basis expansion", "Compare underfit and overfit curves"],
    quiz: {
      q: "Why can a model still be called linear regression after basis expansion?",
      a: "The model is still linear in the parameters w. The input x is transformed into phi(x), so the nonlinearity lives in feature space rather than in the parameter form."
    }
  },
  4: {
    title: "Iterative Optimisation and Logistic Regression",
    summary: "The course moves from analytic solutions to iterative optimization: gradient descent, Newton-Raphson, and then logistic regression as a workhorse linear classifier.",
    goals: ["Explain how the learning rate affects gradient descent", "Use the sigmoid function to turn a linear score into a probability", "Understand the relationship between logistic loss and the classification boundary"],
    prep: ["Derivatives and gradients", "The linear model from Lecture 3", "Binary labels such as y in {0,1} or {-1,1}"],
    practice: ["Use the linear-classifier lab to adjust w and b", "Compute sigmoid(0), sigmoid(2), and sigmoid(-2)", "Compare squared loss and logistic loss on outliers"],
    quiz: {
      q: "Why not classify with a step function directly in logistic regression?",
      a: "A step function is not smooth and is hard to optimize with gradients. The sigmoid gives a differentiable probability output and supports stable loss minimization."
    }
  },
  5: {
    title: "Regularisation",
    summary: "Regularisation keeps a model from chasing noise. Ridge, Lasso, MAP estimation, and the bias-variance tradeoff meet in this lecture.",
    goals: ["Distinguish the effects of L1 and L2 regularisation", "View regularisation as loss plus a penalty term", "Understand the Bayesian MAP interpretation of regularisation"],
    prep: ["Linear regression loss", "Overfitting and underfitting", "Vector norms"],
    practice: ["Draw the constraint shapes for L1 and L2 penalties", "Explain why Lasso tends to produce sparse weights", "Choose a regularisation strategy for a high-dimensional small-data task"],
    quiz: {
      q: "What is the main behavioral difference between Ridge and Lasso?",
      a: "Ridge shrinks weights while usually keeping them nonzero; Lasso can drive some weights exactly to zero, making it useful for feature selection."
    }
  },
  6: {
    title: "PAC Learning Theory",
    summary: "PAC theory turns the question of learnability into probability and error bounds. Focus on excess risk, approximation error, estimation error, and high-probability guarantees.",
    goals: ["Explain Bayes risk and irreducible error", "Separate approximation error from estimation error", "Know what probably and approximately mean in PAC learning"],
    prep: ["Empirical error versus true error", "Probability bounds", "Expected loss"],
    practice: ["Explain why low training error does not imply good generalization", "Map small model classes and large model classes to different error types", "Translate a high-probability statement into ordinary language"],
    quiz: {
      q: "Why decompose excess risk into approximation error and estimation error?",
      a: "The decomposition separates lack of expressiveness from finite-sample uncertainty. Each problem calls for a different fix."
    }
  },
  7: {
    title: "VC Theory",
    summary: "VC theory extends PAC ideas to infinite hypothesis classes. The key terms are growth function, shattering, and VC dimension.",
    goals: ["Explain what it means to shatter a dataset", "Interpret VC dimension as model-class capacity", "Understand why higher capacity is not automatically better"],
    prep: ["The motivation behind PAC bounds", "Binary classification", "Basic combinatorial growth intuition"],
    practice: ["Decide how many points a 1D threshold can shatter", "Compare the capacity of linear classifiers in 1D and 2D", "Explain the link between capacity and overfitting"],
    quiz: {
      q: "Does a higher VC dimension always mean a better model?",
      a: "No. Higher VC dimension means stronger expressiveness, but with limited samples it can increase estimation error and overfitting."
    }
  },
  8: {
    title: "Perceptron and Artificial Neural Networks",
    summary: "This lecture moves from the perceptron to neural networks. Treat a neuron as a linear transformation followed by a nonlinear activation, then understand why multiple layers express complex functions.",
    goals: ["Explain the perceptron update rule", "Identify layers, activations, weights, and biases", "Understand the intuition behind universal approximation"],
    prep: ["Linear classifiers", "Gradient descent", "Vectorized computation"],
    practice: ["Manually update a perceptron on one misclassified point", "Draw the computation graph for a two-layer network", "Compare linear-model and MLP decision boundaries"],
    quiz: {
      q: "What happens if every layer in a neural network has no nonlinear activation?",
      a: "A composition of linear transformations is still linear, so the network has no real expressive advantage over a single linear layer."
    }
  },
  9: {
    title: "Backpropagation and Training Deep Networks",
    summary: "Backpropagation is the chain rule applied systematically to computation graphs. Once you see how error signals flow backward from the loss, most deep-learning training pipelines become readable.",
    goals: ["Explain backpropagation as the chain rule", "Understand why deep models support representation learning", "Know where optimizers and regularisation fit in deep-network training"],
    prep: ["The chain rule", "Neural-network structure from Lecture 8", "Gradients of loss with respect to parameters"],
    practice: ["Backpropagate through y=(ax+b)^2 by hand", "Label forward and backward variables in a three-layer MLP", "List three sources of instability when training deep networks"],
    quiz: {
      q: "Is backpropagation itself an optimization algorithm?",
      a: "No. Backpropagation computes gradients efficiently; optimizers such as SGD or Adam use those gradients to update parameters."
    }
  },
  10: {
    title: "Convolutional Neural Networks",
    summary: "CNNs rely on local connectivity, weight sharing, and spatial structure. First understand the convolution operator, then read architectures such as LeNet and ResNet.",
    goals: ["Explain how a convolution kernel slides over an image", "Understand how weight sharing reduces parameter count", "Know the roles of pooling, padding, and stride"],
    prep: ["Matrix and small-window operations", "Neural-network layer concepts", "Image tensors"],
    practice: ["Compute a convolution between a 3x3 image and a 2x2 kernel", "Compare parameter counts for dense and convolutional layers", "Sketch the output-size effect of stride 2"],
    quiz: {
      q: "Why are CNNs better suited to images than fully connected networks?",
      a: "Images have local spatial structure. CNNs use local receptive fields and shared kernels to capture patterns with fewer parameters and better spatial bias."
    }
  },
  11: {
    title: "Autoencoders and Deep Generative Models",
    summary: "Autoencoders learn compressed representations, while VAEs connect latent variables to probabilistic modeling. Focus on the encoder, latent code, and decoder pipeline.",
    goals: ["Explain why an autoencoder is not simply copying the input", "Distinguish sparse, denoising, and contractive autoencoders", "Understand the latent-variable intuition of VAEs"],
    prep: ["MLP forward passes", "Reconstruction error", "Basic probability distributions"],
    practice: ["Draw the encoder-code-decoder information flow", "Explain why a denoising autoencoder adds noise", "Compare a VAE with PCA at an intuitive level"],
    quiz: {
      q: "Why is the bottleneck layer important in an autoencoder?",
      a: "The bottleneck limits the information channel and forces the model to learn a compressed representation instead of memorizing the input pixel by pixel."
    }
  },
  12: {
    title: "RNNs, Attention, and Transformers",
    summary: "The lecture moves from recurrent states for sequence modeling to attention over token relationships and then to Transformers. Focus on the dependency path through a sequence.",
    goals: ["Explain the role of an RNN hidden state", "Know why BPTT can suffer from gradient issues", "Interpret attention as weighted retrieval using query, key, and value vectors"],
    prep: ["The chain rule", "Neural-network layers", "Examples of sequence data"],
    practice: ["Unroll an RNN over four time steps", "Explain why LSTMs use gates", "State the difference between self-attention and recurrence"],
    quiz: {
      q: "Why can Transformers be easier to train in parallel?",
      a: "Self-attention does not require sequential hidden-state recurrence, so relationships among many tokens can be computed at the same time."
    }
  },
  13: {
    title: "Support Vector Machines",
    summary: "SVMs frame classification as margin maximization. Understand hard-margin, soft-margin, and hinge loss before moving to the kernel trick.",
    goals: ["Explain the geometry of maximum margin", "Distinguish hard-margin and soft-margin SVMs", "View the SVM objective as regularized loss"],
    prep: ["Linear classifiers", "Distance from a vector to a line", "Regularisation"],
    practice: ["Use the lab to build intuition for a large margin", "Draw hinge loss", "Explain the effect of increasing or decreasing C"],
    quiz: {
      q: "Why is the SVM boundary determined by support vectors?",
      a: "Only points on or inside the margin directly affect the constraints or loss. Correct points far from the boundary do not change the optimum."
    }
  },
  14: {
    title: "Kernel Methods",
    summary: "The kernel trick lets you compute dot products in a high-dimensional feature space without explicitly constructing that space. It extends SVMs beyond linear boundaries.",
    goals: ["Understand why the dual formulation only needs dot products", "Explain the role of a kernel function", "Know the meaning of Mercer's condition for valid kernels"],
    prep: ["The motivation for SVM primal and dual forms", "Inner products", "Basis expansion"],
    practice: ["Compare polynomial and RBF kernels intuitively", "Interpret K(x,z) as a similarity function", "Explain how kernels can work on strings or graphs"],
    quiz: {
      q: "Does the kernel trick really avoid the high-dimensional space?",
      a: "Conceptually it is equivalent to using a high-dimensional feature space, but computationally it obtains the needed dot product directly through the kernel."
    }
  },
  15: {
    title: "Multi-armed Bandits",
    summary: "Bandits are a clean setting for the exploration-versus-exploitation problem. Use epsilon-greedy and UCB to see why short-term greed can lose long-term reward.",
    goals: ["Define arms, rewards, and regret", "Distinguish exploration from exploitation", "Explain why UCB favors uncertain but promising arms"],
    prep: ["Expected reward", "Random trials", "Decision problems beyond classification"],
    practice: ["Run the bandit lab and compare the two policies", "Explain what the regret curve represents", "Design a bandit setting for ad recommendation"],
    quiz: {
      q: "What risk appears when epsilon in epsilon-greedy is too small?",
      a: "The algorithm may explore too little. Early noise can lock it onto a suboptimal arm and increase long-term regret."
    }
  },
  16: {
    title: "Bayesian Regression",
    summary: "Bayesian regression preserves uncertainty over parameters instead of returning only a point estimate. Focus on prior, likelihood, posterior, and predictive distribution.",
    goals: ["Explain how prior and likelihood update into a posterior", "Understand why conjugate priors are convenient", "Separate parameter uncertainty from observation noise"],
    prep: ["Bayes' rule", "Linear regression", "The Normal distribution"],
    practice: ["Use the Bayes lab to see observations update a posterior", "Sketch how more data narrows a posterior", "Explain why Bayesian prediction can report uncertainty"],
    quiz: {
      q: "What is the link between Bayesian regression and ridge regression?",
      a: "With a Gaussian likelihood and Gaussian prior, the MAP estimate has the same form as an L2-regularized ridge objective."
    }
  },
  17: {
    title: "Bayesian Classification",
    summary: "This lecture moves from discrete conjugate examples such as Beta-Binomial to Bayesian classification, then shows why Bayesian logistic regression is harder because it is non-conjugate.",
    goals: ["Master the intuition of Beta-Binomial updating", "Understand why conjugate pairs reduce computation", "Know why Bayesian logistic regression usually needs approximation"],
    prep: ["Bayes' rule", "Binary classification", "The shape intuition of Beta distributions"],
    practice: ["Run the Bayes lab with different priors", "Explain the prior sensitivity of the sunrise example", "Write posterior proportional to likelihood times prior"],
    quiz: {
      q: "Why are conjugate priors useful?",
      a: "The posterior stays in the same distribution family as the prior, so updating only changes parameters and makes inference simpler."
    }
  },
  18: {
    title: "Probabilistic Graphical Model Representation",
    summary: "PGMs use graphs to express the structure of joint distributions. Start with directed and undirected graphs, factorization, and conditional independence.",
    goals: ["Factor a joint distribution into smaller factors", "Explain how graph structure encodes independence", "Distinguish representation, probabilistic inference, and statistical inference"],
    prep: ["Joint and conditional distributions", "Bayes' rule", "Nodes and edges in a graph"],
    practice: ["Write the factorization for X -> Y -> Z", "Judge conditional independence in a small graph", "Draw Naive Bayes as a PGM"],
    quiz: {
      q: "Why is a PGM more than just a drawing?",
      a: "The graph constrains how a joint distribution factorizes and determines which inference and learning algorithms can run efficiently."
    }
  },
  19: {
    title: "PGM Independence and Example Models",
    summary: "This lecture formalizes independence, conditional independence, explaining away, d-separation, and Markov blankets.",
    goals: ["Explain explaining away", "Use d-separation to reason about conditional independence", "Understand why the Markov blanket matters for local inference"],
    prep: ["PGM factorization", "Conditional probability", "Simple directed graphs"],
    practice: ["Draw collider, chain, and fork structures", "Compare independence before and after conditioning on a middle node", "Find a node's Markov blanket"],
    quiz: {
      q: "In a collider X -> Z <- Y, why can observing Z make X and Y dependent?",
      a: "The observed value of Z makes X and Y compete to explain the same effect. This is the explaining-away effect."
    }
  },
  20: {
    title: "Inference on Probabilistic Graphical Models",
    summary: "Once the graph exists, we need to compute marginal and conditional marginal distributions. Exact inference uses elimination; approximate inference often uses sampling; latent variables lead toward EM.",
    goals: ["Understand the goal of probabilistic inference", "Explain the basic operation of variable elimination", "Know why latent variables make learning harder"],
    prep: ["PGM factors", "Marginalization by summing or integrating", "Basics of maximum likelihood estimation"],
    practice: ["Eliminate one variable by hand in a three-variable discrete model", "Explain why factor ordering changes computation cost", "Name a case where approximate inference is needed"],
    quiz: {
      q: "Why do latent variables motivate EM?",
      a: "Missing hidden labels make direct MLE difficult. EM alternates between estimating hidden-variable distributions and updating parameters."
    }
  },
  21: {
    title: "HMMs and Message Passing",
    summary: "HMMs are a sequence case study for PGMs. Forward evaluation, Baum-Welch learning, and Viterbi decoding can all be seen as elimination or message passing variants.",
    goals: ["Distinguish evaluation, learning, and decoding in HMMs", "Understand the difference between the forward algorithm and Viterbi", "Know how sum-product generalizes elimination"],
    prep: ["PGM inference", "Sequence data", "Dynamic-programming intuition"],
    practice: ["Draw an HMM with four time steps", "Compare sum-product and max-product", "Explain why Viterbi replaces sums with maxima"],
    quiz: {
      q: "What are the two core independence assumptions in an HMM?",
      a: "The current hidden state depends only on the previous hidden state, and the current observation depends only on the current hidden state."
    }
  },
  22: {
    title: "Gaussian Mixture Models",
    summary: "GMMs turn clustering into a probabilistic model: each point is generated by a hidden Gaussian component. This naturally leads to EM.",
    goals: ["Distinguish the clustering viewpoints of k-means and GMMs", "Explain mixture weights, means, and covariance", "Understand the intuition of responsibilities"],
    prep: ["Gaussian distributions", "Clustering", "Latent variables"],
    practice: ["Run the EM lab and watch responsibilities update parameters", "Compare hard assignment and soft assignment", "Explain how covariance changes cluster shape"],
    quiz: {
      q: "What is a responsibility in a GMM?",
      a: "It is the posterior probability that a data point belongs to a particular mixture component, giving a soft assignment."
    }
  },
  23: {
    title: "Expectation Maximization",
    summary: "EM alternates E-steps and M-steps to optimize likelihood in models with hidden variables. Jensen's inequality gives the lower-bound view.",
    goals: ["Explain what the E-step and M-step do", "Understand why the lower bound improves over iterations", "Apply EM to GMM parameter learning"],
    prep: ["GMMs", "Log-likelihood", "The concavity intuition behind Jensen's inequality"],
    practice: ["Run eight EM steps and observe the log-likelihood", "Describe the E-step in ordinary language", "Compare EM with k-means"],
    quiz: {
      q: "Does EM guarantee a global optimum?",
      a: "Usually no. It guarantees that each step does not decrease the bound or likelihood, but it may converge to a local optimum, so initialization matters."
    }
  },
  24: {
    title: "Case Study: Ensembling Unreliable Sources",
    summary: "The final lecture applies model thinking to truth inference: how can several unreliable sources combine into a more reliable answer? It is a useful whole-course integration case.",
    goals: ["Identify the relationship among true labels, source reliability, and observations", "Draw the case study as a latent-variable model", "Summarize the course theme from linear models to PGMs"],
    prep: ["Bayesian thinking", "PGM representation", "The hidden-variable view from EM and GMMs"],
    practice: ["Build a probabilistic graphical model for multiple annotator votes", "Explain when majority voting fails", "Write a short course summary defining statistical machine learning"],
    quiz: {
      q: "Why can a probabilistic model beat simple majority voting?",
      a: "Majority voting assumes equally reliable and independent sources. A probabilistic model can estimate reliability and hidden truth, making it more robust under uneven noise."
    }
  }
};

const uiCopy = {
  bilingual: {
    documentTitle: "COMP90051 Statistical Machine Learning 学习站",
    phaseLabels: { all: "全部 / All", foundation: "基础 / Foundations", neural: "神经网络 / Neural Nets", decision: "决策与贝叶斯 / Decision & Bayes", pgm: "PGM 与 EM / PGM & EM" },
    brandSubtitle: "从 0 开始学 COMP90051 / Learn COMP90051 from zero",
    progressLabel: "学习进度 / Progress",
    searchLabel: "搜索 / Search",
    searchPlaceholder: "linear, Bayesian, PGM...",
    topEyebrow: "Lecture-note order, rebuilt as a bilingual study path",
    resetProgress: "重置进度 / Reset",
    changeLanguage: "切换语言 / Language",
    source: "原始仓库 / Source",
    stats: [
      ["课程结构 / Structure", "24 lectures", "按讲义顺序组织为 4 个阶段，每讲只保留学习决策需要的信息。 / Organized into four phases following the lecture-note order, with only the study-critical decisions surfaced."],
      ["建议节奏 / Pace", "8 weeks", "每周 3 讲左右，先做概念检查，再打开 PDF 深挖推导。 / About three lectures per week: check concepts first, then open the PDF for full derivations."],
      ["交互重点 / Labs", "4 labs", "线性分隔、贝叶斯更新、bandit、EM/GMM，覆盖课程主线。 / Linear boundaries, Bayesian updating, bandits, and EM/GMM cover the course spine."]
    ],
    done: "已完成 / Done",
    goals: "学习目标 / Goals",
    prep: "先补什么 / Prerequisites",
    practice: "动手练习 / Practice",
    quiz: "检查点 / Checkpoint",
    reveal: "显示答案 / Reveal",
    hideAnswer: "隐藏答案 / Hide",
    pdfLink: "打开本地讲义 PDF / Open PDF",
    startInteractive: "开始互动课 / Start Interactive Lesson",
    preview: "讲义第一页 / First page",
    hidePreview: "隐藏 / Hide",
    showPreview: "显示 / Show",
    labsEyebrow: "Interactive labs",
    labsHeading: "把公式压成可以动的直觉 / Turn formulas into movable intuition",
    labLabels: { linear: "线性边界 / Linear", bayes: "贝叶斯更新 / Bayes", bandit: "Bandit", em: "EM/GMM" },
    labs: {
      linear: ["线性分类器: Logistic / SVM 的共同骨架", "拖动滑杆观察决策边界、margin 和训练点分类结果。先把“超平面”看懂，再回去读 Lecture 4, 13, 14 会轻很多。 / Move the sliders to see the boundary, margin, and classification results. Once the hyperplane is visual, Lectures 4, 13, and 14 read much more easily."],
      bayes: ["贝叶斯更新: Beta-Binomial", "把先验看成“还没观察数据前的信念”，滑动观测数量，看 posterior 如何被数据拉动。对应 Lecture 16, 17。 / Treat the prior as belief before data, then watch observations pull the posterior. This supports Lectures 16 and 17."],
      bandit: ["Multi-armed bandit: 探索 vs 利用", "对比 epsilon-greedy 和 UCB。你会看到短期贪心为什么容易错过真正高回报的 arm。对应 Lecture 15。 / Compare epsilon-greedy and UCB to see why short-term greed can miss the best arm. This supports Lecture 15."],
      em: ["GMM + EM: 让隐藏标签自己浮出来", "每点一次 EM step，就交替更新 responsibility 和参数。先看直觉，再读 Lecture 22, 23 的 Jensen 推导。 / Each EM step alternates responsibilities and parameter updates. Build intuition first, then read the Jensen derivation in Lectures 22 and 23."]
    },
    policy: "策略 / Policy",
    banditStep: "运行 1 次 / Run 1",
    banditBurst: "运行 50 次 / Run 50",
    reset: "重置 / Reset",
    roadmap: "建议学习节奏 / Suggested Route",
    emptySearch: "没有匹配的 lecture。试试 Bayesian、linear、PGM。 / No matching lecture. Try Bayesian, linear, or PGM."
  },
  english: {
    documentTitle: "COMP90051 Statistical Machine Learning Study Site",
    phaseLabels: { all: "All", foundation: "Foundations", neural: "Neural Nets", decision: "Decision & Bayes", pgm: "PGM & EM" },
    brandSubtitle: "Learn COMP90051 from zero",
    progressLabel: "Progress",
    searchLabel: "Search",
    searchPlaceholder: "linear, Bayesian, PGM...",
    topEyebrow: "Lecture-note order, rebuilt as a study path",
    resetProgress: "Reset Progress",
    changeLanguage: "Language",
    source: "Source Repo",
    stats: [
      ["Course Structure", "24 lectures", "Organized into four phases following the lecture-note order, with only the study-critical decisions surfaced."],
      ["Suggested Pace", "8 weeks", "About three lectures per week: check concepts first, then open the PDF for the full derivations."],
      ["Interactive Focus", "4 labs", "Linear boundaries, Bayesian updating, bandits, and EM/GMM cover the course spine."]
    ],
    done: "Done",
    goals: "Goals",
    prep: "Prerequisites",
    practice: "Practice",
    quiz: "Checkpoint",
    reveal: "Reveal Answer",
    hideAnswer: "Hide Answer",
    pdfLink: "Open Local Lecture PDF",
    startInteractive: "Start Interactive Lesson",
    preview: "First Page",
    hidePreview: "Hide",
    showPreview: "Show",
    labsEyebrow: "Interactive labs",
    labsHeading: "Turn formulas into movable intuition",
    labLabels: { linear: "Linear Boundary", bayes: "Bayesian Update", bandit: "Bandit", em: "EM/GMM" },
    labs: {
      linear: ["Linear Classifier: The Shared Skeleton of Logistic Regression and SVMs", "Move the sliders to see the decision boundary, margin, and training-point classifications. Once the hyperplane is visual, Lectures 4, 13, and 14 read much more easily."],
      bayes: ["Bayesian Updating: Beta-Binomial", "Treat the prior as belief before observing data, then move the observation sliders to see how the posterior changes. This supports Lectures 16 and 17."],
      bandit: ["Multi-armed Bandits: Exploration vs Exploitation", "Compare epsilon-greedy and UCB. You will see why short-term greedy choices can miss the arm with the best long-term reward. This supports Lecture 15."],
      em: ["GMM + EM: Let Hidden Labels Emerge", "Each EM step alternates responsibilities and parameter updates. Build the intuition first, then read the Jensen derivation in Lectures 22 and 23."]
    },
    policy: "Policy",
    banditStep: "Run 1 Step",
    banditBurst: "Run 50 Steps",
    reset: "Reset",
    roadmap: "Suggested Study Route",
    emptySearch: "No matching lecture. Try Bayesian, linear, or PGM."
  }
};

const progressKey = "statml-studio-progress-v1";
const state = {
  activePhase: "all",
  activeLecture: 1,
  activeLab: "linear",
  language: null,
  completed: new Set(JSON.parse(localStorage.getItem(progressKey) || "[]"))
};

const $ = (selector) => document.querySelector(selector);

function saveProgress() {
  localStorage.setItem(progressKey, JSON.stringify([...state.completed]));
}

function encodePdfPath(file) {
  return `assets/lectures/${encodeURIComponent(file)}`;
}

function encodePreviewPath(file) {
  return `assets/previews/${encodeURIComponent(file)}.png`;
}

function copy() {
  return uiCopy[state.language || "english"];
}

function joinBilingual(zh, en, separator = " / ") {
  if (state.language === "english") return en;
  return zh === en ? en : `${zh}${separator}${en}`;
}

function localizedLecture(lecture) {
  const en = englishLectures[lecture.id];
  if (state.language === "english") {
    return { ...lecture, ...en, quiz: en.quiz };
  }
  return {
    ...lecture,
    title: joinBilingual(lecture.title, en.title),
    summary: joinBilingual(lecture.summary, en.summary, "\n\n"),
    goals: lecture.goals.map((item, index) => joinBilingual(item, en.goals[index] || "")),
    prep: lecture.prep.map((item, index) => joinBilingual(item, en.prep[index] || "")),
    practice: lecture.practice.map((item, index) => joinBilingual(item, en.practice[index] || "")),
    quiz: {
      q: joinBilingual(lecture.quiz.q, en.quiz.q, "\n\n"),
      a: joinBilingual(lecture.quiz.a, en.quiz.a, "\n\n")
    }
  };
}

function phaseLabel(id) {
  return copy().phaseLabels[id] || id;
}

function applyStaticCopy() {
  const text = copy();
  document.title = text.documentTitle;
  $("#brandSubtitle").textContent = text.brandSubtitle;
  $("#progressLabel").textContent = text.progressLabel;
  $("#searchLabel").textContent = text.searchLabel;
  $("#searchInput").placeholder = text.searchPlaceholder;
  $("#topEyebrow").textContent = text.topEyebrow;
  $("#resetProgressButton").textContent = text.resetProgress;
  $("#changeLanguageButton").textContent = text.changeLanguage;
  $(".source-link").textContent = text.source;
  text.stats.forEach((stat, index) => {
    const slot = index + 1;
    $(`#stat${slot}Label`).textContent = stat[0];
    $(`#stat${slot}Value`).textContent = stat[1];
    $(`#stat${slot}Text`).textContent = stat[2];
  });
  $(".done-toggle span").textContent = text.done;
  $("#goalsHeading").textContent = text.goals;
  $("#prepHeading").textContent = text.prep;
  $("#practiceHeading").textContent = text.practice;
  $("#quizHeading").textContent = text.quiz;
  $("#pdfLink").textContent = text.pdfLink;
  $("#startInteractiveButton").textContent = text.startInteractive;
  $("#previewHeading").textContent = text.preview;
  $("#labsEyebrow").textContent = text.labsEyebrow;
  $("#labsHeading").textContent = text.labsHeading;
  $("#linearLabTitle").textContent = text.labs.linear[0];
  $("#linearLabText").textContent = text.labs.linear[1];
  $("#bayesLabTitle").textContent = text.labs.bayes[0];
  $("#bayesLabText").textContent = text.labs.bayes[1];
  $("#banditLabTitle").textContent = text.labs.bandit[0];
  $("#banditLabText").textContent = text.labs.bandit[1];
  $("#emLabTitle").textContent = text.labs.em[0];
  $("#emLabText").textContent = text.labs.em[1];
  $("#policyLabel").textContent = text.policy;
  $("#banditStepButton").textContent = text.banditStep;
  $("#banditBurstButton").textContent = text.banditBurst;
  $("#banditResetButton").textContent = text.reset;
  $("#emResetButton").textContent = text.reset;
  $("#roadmapHeading").textContent = text.roadmap;
  $("#togglePdfButton").textContent = $("#previewBody").classList.contains("hidden-preview") ? text.showPreview : text.hidePreview;
  $("#revealAnswerButton").textContent = $("#quizAnswer").classList.contains("visible") ? text.hideAnswer : text.reveal;
}

function renderPhaseTabs() {
  const host = $("#phaseTabs");
  host.innerHTML = "";
  phases.forEach((phase) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = phaseLabel(phase.id);
    button.className = phase.id === state.activePhase ? "active" : "";
    button.addEventListener("click", () => {
      state.activePhase = phase.id;
      renderPhaseTabs();
      renderLessonList();
    });
    host.appendChild(button);
  });
}

function lectureMatches(lecture, query) {
  if (!query) return true;
  const localized = localizedLecture(lecture);
  const haystack = [
    localized.title,
    localized.summary,
    lecture.phase,
    ...localized.goals,
    ...localized.practice
  ].join(" ").toLowerCase();
  return haystack.includes(query.toLowerCase());
}

function renderLessonList() {
  const host = $("#lessonList");
  const query = $("#searchInput").value.trim();
  const items = lectures.filter((lecture) => {
    const phaseMatch = state.activePhase === "all" || lecture.phase === state.activePhase;
    return phaseMatch && lectureMatches(lecture, query);
  });
  host.innerHTML = "";

  items.forEach((lecture) => {
    const localized = localizedLecture(lecture);
    const button = document.createElement("button");
    button.type = "button";
    button.className = [
      "lesson-button",
      lecture.id === state.activeLecture ? "active" : "",
      state.completed.has(lecture.id) ? "done" : ""
    ].join(" ");
    const title = document.createElement("strong");
    title.textContent = `L${lecture.id}. ${localized.title}`;
    const meta = document.createElement("span");
    meta.textContent = `${phaseLabel(lecture.phase)} · ${lecture.time}`;
    button.append(title, meta);
    button.addEventListener("click", () => {
      state.activeLecture = lecture.id;
      renderLesson();
      renderLessonList();
    });
    host.appendChild(button);
  });

  if (!items.length) {
    const empty = document.createElement("p");
    empty.className = "metric-line";
    empty.textContent = copy().emptySearch;
    host.appendChild(empty);
  }
}

function renderList(selector, items) {
  const host = $(selector);
  host.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    host.appendChild(li);
  });
}

function renderLesson() {
  const rawLecture = lectures.find((item) => item.id === state.activeLecture) || lectures[0];
  const lecture = localizedLecture(rawLecture);
  $("#pageTitle").textContent = `Lecture ${lecture.id}: ${lecture.title}`;
  $("#lessonPhase").textContent = phaseLabel(lecture.phase);
  $("#lessonTitle").textContent = `Lecture ${lecture.id}. ${lecture.title}`;
  $("#lessonSummary").textContent = lecture.summary;
  $("#quizQuestion").textContent = lecture.quiz.q;
  $("#quizAnswer").textContent = lecture.quiz.a;
  $("#quizAnswer").classList.remove("visible");
  $("#revealAnswerButton").textContent = copy().reveal;
  $("#lectureMeta").textContent = `${lecture.pages} pages · ${lecture.level} · ${lecture.time}`;
  $("#doneToggle").checked = state.completed.has(lecture.id);
  $("#pdfLink").href = encodePdfPath(lecture.file);
  $("#startInteractiveButton").hidden = ![1, 2, 3].includes(lecture.id);
  $("#startInteractiveButton").textContent = `${copy().startInteractive} · Lecture ${lecture.id}`;
  $("#pdfPreview").src = encodePreviewPath(lecture.file);
  $("#pdfPreview").alt = state.language === "english" ? `Lecture ${lecture.id} first page preview` : `Lecture ${lecture.id} 第一页预览`;
  renderList("#goalList", lecture.goals);
  renderList("#prepList", lecture.prep);
  renderList("#practiceList", lecture.practice);
  updateProgress();
}

function updateProgress() {
  const count = state.completed.size;
  $("#progressText").textContent = `${count} / ${lectures.length}`;
  $("#progressFill").style.width = `${Math.round((count / lectures.length) * 100)}%`;
}

function renderWeekGrid() {
  const zhWeeks = [
    ["数学和统计视角", "Lecture 1-3。目标是能读懂概率、矩阵和 linear regression 的三种解释。"],
    ["优化、正则化、泛化", "Lecture 4-7。把 logistic regression、regularisation、PAC/VC 串成模型选择框架。"],
    ["神经网络基础", "Lecture 8-10。perceptron、backprop、CNN，重在计算图和参数共享。"],
    ["深度模型扩展", "Lecture 11-12。autoencoder、VAE、RNN、attention、Transformer。"],
    ["Margin、Kernel、Bandit", "Lecture 13-15。SVM 和 kernel 是判别模型高光，bandit 则进入序贯决策。"],
    ["Bayesian 方法", "Lecture 16-17。把不确定性从点估计里释放出来，练 prior 到 posterior 的转换。"],
    ["PGM 推理", "Lecture 18-21。从图结构到 d-separation、elimination、HMM/message passing。"],
    ["GMM、EM、案例整合", "Lecture 22-24。用 latent variable 和 EM 收束全课，再做 truth inference 案例。"]
  ];
  const enWeeks = [
    ["Mathematical and Statistical Viewpoints", "Lectures 1-3. Learn the probability, matrix, and linear-regression language used throughout the course."],
    ["Optimization, Regularisation, Generalisation", "Lectures 4-7. Connect logistic regression, regularisation, PAC learning, and VC theory into one model-selection frame."],
    ["Neural Network Foundations", "Lectures 8-10. Perceptron, backpropagation, and CNNs, with emphasis on computation graphs and parameter sharing."],
    ["Deep Model Extensions", "Lectures 11-12. Autoencoders, VAEs, RNNs, attention, and Transformers."],
    ["Margins, Kernels, and Bandits", "Lectures 13-15. SVMs and kernels are the discriminative-model highlight; bandits introduce sequential decision-making."],
    ["Bayesian Methods", "Lectures 16-17. Move beyond point estimates and practice the path from prior to posterior."],
    ["PGM Inference", "Lectures 18-21. Graph structure, d-separation, elimination, HMMs, and message passing."],
    ["GMM, EM, and Integration", "Lectures 22-24. Use latent variables and EM to close the course, then finish with truth inference."]
  ];
  const weeks = enWeeks.map((week, index) => ({
    tag: `Week ${index + 1}`,
    title: joinBilingual(zhWeeks[index][0], week[0]),
    text: joinBilingual(zhWeeks[index][1], week[1])
  }));
  const host = $("#weekGrid");
  host.innerHTML = "";
  weeks.forEach((week) => {
    const article = document.createElement("article");
    article.className = "week-card";
    article.innerHTML = `<span class="week-tag">${week.tag}</span><h4>${week.title}</h4><p>${week.text}</p>`;
    host.appendChild(article);
  });
}

function renderLabTabs() {
  const labels = copy().labLabels;
  const labs = [
    { id: "linear", label: labels.linear },
    { id: "bayes", label: labels.bayes },
    { id: "bandit", label: labels.bandit },
    { id: "em", label: labels.em }
  ];
  const host = $("#labTabs");
  host.innerHTML = "";
  labs.forEach((lab) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = lab.id === state.activeLab ? "active" : "";
    button.textContent = lab.label;
    button.addEventListener("click", () => {
      state.activeLab = lab.id;
      renderLabTabs();
      updateLabVisibility();
    });
    host.appendChild(button);
  });
}

function updateLabVisibility() {
  ["linear", "bayes", "bandit", "em"].forEach((id) => {
    $(`#${id}Lab`).classList.toggle("hidden", id !== state.activeLab);
  });
  drawLinearLab();
  drawBayesLab();
  drawBanditLab();
  drawEmLab();
}

function renderAll() {
  applyStaticCopy();
  renderPhaseTabs();
  renderLessonList();
  renderLesson();
  renderWeekGrid();
  renderLabTabs();
  updateLabVisibility();
}

function openLanguageGate() {
  document.body.classList.add("gate-open");
  $("#languageGate").classList.remove("hidden");
  $("#appShell").setAttribute("aria-hidden", "true");
}

function selectLanguage(language) {
  state.language = language;
  document.body.classList.remove("gate-open");
  $("#languageGate").classList.add("hidden");
  $("#appShell").setAttribute("aria-hidden", "false");
  renderAll();
}

const lectureOnePlayer = {
  lectureId: 1,
  step: 0,
  xp: 0,
  hearts: 3,
  awarded: new Set(),
  matchSelected: null,
  matched: new Set(),
  vector: { x: 1.2, y: 2.6, dragging: false },
  sequenceN: 8,
  riskThreshold: 0.5,
  regression: { slope: 0, intercept: 0 },
  lossPoint: { slope: 0, intercept: 0 },
  basisDegree: 1
};

const lectureOneSteps = ["intro", "choice", "match", "probability", "vector", "sequence", "final", "complete"];
const lectureTwoSteps = ["intro", "schools", "taxonomy", "risk", "final", "complete"];
const lectureThreeSteps = ["intro", "fit", "loss", "basis", "final", "complete"];

function currentLectureSteps() {
  if (lectureOnePlayer.lectureId === 2) return lectureTwoSteps;
  if (lectureOnePlayer.lectureId === 3) return lectureThreeSteps;
  return lectureOneSteps;
}

function playerText(zh, en, separator = " / ") {
  return joinBilingual(zh, en, separator);
}

function playerLabel(key) {
  const labels = {
    next: playerText("继续", "Continue"),
    check: playerText("检查", "Check"),
    retry: playerText("再试一次", "Try again"),
    finish: playerText("完成并回到课程", "Finish and return"),
    start: playerText("开始第 1 关", "Start Level 1"),
    exit: playerText("退出", "Exit"),
    hearts: playerText("生命", "Hearts"),
    xp: "XP"
  };
  return labels[key];
}

function openInteractivePlayer(lectureId = 1) {
  lectureOnePlayer.lectureId = lectureId;
  lectureOnePlayer.step = 0;
  lectureOnePlayer.xp = 0;
  lectureOnePlayer.hearts = 3;
  lectureOnePlayer.awarded = new Set();
  lectureOnePlayer.matchSelected = null;
  lectureOnePlayer.matched = new Set();
  lectureOnePlayer.vector = { x: 1.2, y: 2.6, dragging: false };
  lectureOnePlayer.sequenceN = 8;
  lectureOnePlayer.riskThreshold = 0.5;
  lectureOnePlayer.regression = { slope: 0, intercept: 0 };
  lectureOnePlayer.lossPoint = { slope: 0, intercept: 0 };
  lectureOnePlayer.basisDegree = 1;
  $("#lessonPlayer").classList.remove("hidden");
  $("#lessonPlayer").setAttribute("aria-hidden", "false");
  document.body.classList.add("gate-open");
  document.body.classList.add("player-open");
  renderLectureOnePlayer();
}

function closeLectureOnePlayer() {
  $("#lessonPlayer").classList.add("hidden");
  $("#lessonPlayer").setAttribute("aria-hidden", "true");
  document.body.classList.remove("gate-open");
  document.body.classList.remove("player-open");
  renderAll();
}

function updatePlayerTopbar() {
  const steps = currentLectureSteps();
  const progress = (lectureOnePlayer.step / (steps.length - 1)) * 100;
  $("#playerProgressFill").style.width = `${Math.max(4, progress)}%`;
  $("#playerHearts").textContent = `${playerLabel("hearts")} ${lectureOnePlayer.hearts}`;
  $("#playerXp").textContent = `${lectureOnePlayer.xp} ${playerLabel("xp")}`;
  $("#closePlayerButton").textContent = playerLabel("exit");
}

function awardStep(stepId, amount) {
  if (lectureOnePlayer.awarded.has(stepId)) return 0;
  lectureOnePlayer.awarded.add(stepId);
  lectureOnePlayer.xp += amount;
  return amount;
}

function loseHeart() {
  lectureOnePlayer.hearts = Math.max(0, lectureOnePlayer.hearts - 1);
  updatePlayerTopbar();
}

function setPlayerStage(html) {
  $("#playerStage").innerHTML = html;
  updatePlayerTopbar();
}

function showPlayerFeedback(success, message, xp = 0) {
  const panel = $("#playerFeedback");
  if (!panel) return;
  panel.className = `feedback-panel visible ${success ? "success" : ""}`;
  const xpText = xp > 0 ? `<span class="xp-burst">+${xp} XP</span>` : "";
  panel.innerHTML = `<strong>${success ? playerText("正确", "Correct") : playerText("还差一点", "Not quite")}</strong><p>${message}</p>${xpText}`;
  updatePlayerTopbar();
}

function nextLectureOneStep() {
  const steps = currentLectureSteps();
  lectureOnePlayer.step = Math.min(lectureOnePlayer.step + 1, steps.length - 1);
  renderLectureOnePlayer();
}

function renderLectureOnePlayer() {
  const step = currentLectureSteps()[lectureOnePlayer.step];
  if (lectureOnePlayer.lectureId === 2) {
    if (step === "intro") renderL2Intro();
    if (step === "schools") renderL2Schools();
    if (step === "taxonomy") renderL2Taxonomy();
    if (step === "risk") renderL2Risk();
    if (step === "final") renderL2Final();
    if (step === "complete") renderPlayerComplete(2, playerText("Lecture 2 已解锁", "Lecture 2 unlocked"), playerText("你已经能区分统计学派、模型类型和 decision-theoretic risk。", "You can now distinguish statistical schools, model types, and decision-theoretic risk."));
    return;
  }
  if (lectureOnePlayer.lectureId === 3) {
    if (step === "intro") renderL3Intro();
    if (step === "fit") renderL3Fit();
    if (step === "loss") renderL3Loss();
    if (step === "basis") renderL3Basis();
    if (step === "final") renderL3Final();
    if (step === "complete") renderPlayerComplete(3, playerText("Lecture 3 已解锁", "Lecture 3 unlocked"), playerText("你已经亲手调过线性回归、MSE loss surface 和 basis expansion。", "You have directly manipulated linear regression, the MSE loss surface, and basis expansion."));
    return;
  }
  if (step === "intro") renderL1Intro();
  if (step === "choice") renderL1Choice();
  if (step === "match") renderL1Match();
  if (step === "probability") renderL1Probability();
  if (step === "vector") renderL1Vector();
  if (step === "sequence") renderL1Sequence();
  if (step === "final") renderL1Final();
  if (step === "complete") renderL1Complete();
}

function renderL1Intro() {
  setPlayerStage(`
    <section class="lesson-step">
      <div class="step-hero">
        <div class="step-card">
          <p class="step-kicker">Lecture 1 interactive</p>
          <h2>${playerText("StatML 地基训练", "StatML Foundation Trainer")}</h2>
          <p>${playerText(
            "这一节不再只是看讲义。你会用小关卡把 Lecture 1 的三个底层能力练出来：概率语言、线性代数几何、序列收敛。",
            "This is not a slide list. You will train the three foundations behind Lecture 1: probability language, linear-algebra geometry, and sequence convergence.",
            "\n\n"
          )}</p>
          <div class="step-actions">
            <button id="playerStartButton" type="button">${playerLabel("start")}</button>
          </div>
        </div>
        <div class="mini-map">
          <div class="mini-map-card"><span>1</span><div><strong>${playerText("概率符号", "Probability symbols")}</strong><small>${playerText("条件概率和期望", "Conditional probability and expectation")}</small></div></div>
          <div class="mini-map-card"><span>2</span><div><strong>${playerText("向量投影", "Vector projection")}</strong><small>${playerText("点积不再只是公式", "Dot products as geometry")}</small></div></div>
          <div class="mini-map-card"><span>3</span><div><strong>${playerText("极限直觉", "Limit intuition")}</strong><small>${playerText("用 epsilon 逼近收敛", "Convergence through epsilon")}</small></div></div>
        </div>
      </div>
    </section>
  `);
  $("#playerStartButton").addEventListener("click", nextLectureOneStep);
}

function renderL1Choice() {
  const options = [
    ["P(A|B)", playerText("已知 B 发生后，A 发生的概率", "Probability of A after B is known"), true],
    ["P(A)P(B)", playerText("A 与 B 独立时联合概率的一种分解", "A factorization for independent A and B"), false],
    ["E[X]", playerText("随机变量的平均值", "The mean of a random variable"), false],
    ["||v||", playerText("向量长度", "Vector length"), false]
  ];
  setPlayerStage(`
    <section class="lesson-step">
      <div class="step-card">
        <p class="step-kicker">${playerText("第 1 关：读懂符号", "Level 1: Read the notation")}</p>
        <h3>${playerText("哪个表达式表示“已知 B 后 A 的概率”？", "Which expression means the probability of A after B is known?")}</h3>
      </div>
      <div class="choice-grid">
        ${options.map((option, index) => `
          <button class="choice-card" type="button" data-correct="${option[2]}" data-index="${index}">
            <strong>${option[0]}</strong>
            <span>${option[1]}</span>
          </button>
        `).join("")}
      </div>
      <div class="feedback-panel" id="playerFeedback"></div>
      <div class="step-actions"><button class="ghost-button" id="choiceContinue" type="button" disabled>${playerLabel("next")}</button></div>
    </section>
  `);
  document.querySelectorAll(".choice-card").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".choice-card").forEach((item) => item.classList.remove("selected", "correct", "wrong"));
      const correct = button.dataset.correct === "true";
      button.classList.add(correct ? "correct" : "wrong");
      if (correct) {
        const xp = awardStep("choice", 10);
        showPlayerFeedback(true, playerText("条件概率是 Lecture 1 后面所有概率模型的基本语言。", "Conditional probability is the basic language behind later probabilistic models."), xp);
        $("#choiceContinue").disabled = false;
      } else {
        loseHeart();
        showPlayerFeedback(false, playerText("看竖线：A|B 读作 A given B。", "Look for the vertical bar: A|B reads as A given B."));
      }
    });
  });
  $("#choiceContinue").addEventListener("click", nextLectureOneStep);
}

function renderL1Match() {
  const pairs = [
    ["cond", "P(A|B)", playerText("给定 B 后 A 的概率", "Probability of A given B")],
    ["expect", "E[X]", playerText("随机变量的长期平均值", "Long-run average of a random variable")],
    ["variance", "Var(X)", playerText("随机变量围绕均值的分散程度", "Spread around the mean")],
    ["norm", "||v||", playerText("向量长度", "Vector length")]
  ];
  const meanings = [pairs[2], pairs[0], pairs[3], pairs[1]];
  setPlayerStage(`
    <section class="lesson-step">
      <div class="step-card">
        <p class="step-kicker">${playerText("第 2 关：匹配术语", "Level 2: Match the concepts")}</p>
        <h3>${playerText("把符号和它的含义配对", "Match each symbol to its meaning")}</h3>
        <p>${playerText("先点左边符号，再点右边含义。错了会扣生命，但不会卡死。", "Click a symbol, then its meaning. A mistake costs a heart, but it will not block you.")}</p>
      </div>
      <div class="match-board">
        <div class="match-column">
          ${pairs.map((pair) => `<button class="match-card" type="button" data-side="symbol" data-id="${pair[0]}">${pair[1]}</button>`).join("")}
        </div>
        <div class="match-column">
          ${meanings.map((pair) => `<button class="match-card" type="button" data-side="meaning" data-id="${pair[0]}">${pair[2]}</button>`).join("")}
        </div>
      </div>
      <div class="feedback-panel" id="playerFeedback"></div>
      <div class="step-actions"><button class="ghost-button" id="matchContinue" type="button" disabled>${playerLabel("next")}</button></div>
    </section>
  `);
  document.querySelectorAll(".match-card").forEach((card) => {
    card.addEventListener("click", () => handleMatchCard(card));
  });
  $("#matchContinue").addEventListener("click", nextLectureOneStep);
}

function handleMatchCard(card) {
  if (card.classList.contains("matched")) return;
  const selected = lectureOnePlayer.matchSelected;
  if (!selected || selected.side === card.dataset.side) {
    document.querySelectorAll(".match-card").forEach((item) => item.classList.remove("selected"));
    lectureOnePlayer.matchSelected = { id: card.dataset.id, side: card.dataset.side, element: card };
    card.classList.add("selected");
    return;
  }
  if (selected.id === card.dataset.id) {
    selected.element.classList.remove("selected");
    selected.element.classList.add("matched");
    selected.element.disabled = true;
    card.classList.add("matched");
    card.disabled = true;
    lectureOnePlayer.matched.add(card.dataset.id);
    lectureOnePlayer.matchSelected = null;
    if (lectureOnePlayer.matched.size === 4) {
      const xp = awardStep("match", 15);
      showPlayerFeedback(true, playerText("很好。你现在已经能读 Lecture 1 的核心数学符号。", "Nice. You can now read the core mathematical notation used in Lecture 1."), xp);
      $("#matchContinue").disabled = false;
    }
  } else {
    loseHeart();
    card.classList.add("wrong");
    selected.element.classList.remove("selected");
    lectureOnePlayer.matchSelected = null;
    showPlayerFeedback(false, playerText("这两个不是一组。先想它描述的是概率、平均、分散，还是长度。", "Those two do not match. Ask whether the symbol describes probability, average, spread, or length."));
    setTimeout(() => card.classList.remove("wrong"), 650);
  }
}

function probabilityValues() {
  const prior = Number($("#priorSlider")?.value || 10) / 100;
  const tpr = Number($("#tprSlider")?.value || 80) / 100;
  const fpr = Number($("#fprSlider")?.value || 20) / 100;
  const posterior = (prior * tpr) / (prior * tpr + (1 - prior) * fpr);
  return { prior, tpr, fpr, posterior };
}

function renderL1Probability() {
  setPlayerStage(`
    <section class="lesson-step">
      <div class="model-layout">
        <div class="model-panel">
          <p class="step-kicker">${playerText("第 3 关：条件概率模型", "Level 3: Conditional probability model")}</p>
          <h3>${playerText("看到 P(A|B) 的含义", "See what P(A|B) means")}</h3>
          <p>${playerText("调节 base rate、true positive、false positive。画布会把一个人群分成“真正 A 且检测为 +”和“不是 A 但检测为 +”。你的任务是估计 P(A|+)。", "Adjust the base rate, true positive rate, and false positive rate. The canvas splits a population into true positives and false positives. Your task is to estimate P(A|+).", "\n\n")}</p>
          <div class="model-controls">
            <label>${playerText("A 的基础率", "Base rate of A")} <input id="priorSlider" type="range" min="1" max="60" value="10"></label>
            <label>${playerText("P(+|A)", "P(+|A)")} <input id="tprSlider" type="range" min="5" max="99" value="80"></label>
            <label>${playerText("P(+|not A)", "P(+|not A)")} <input id="fprSlider" type="range" min="1" max="80" value="20"></label>
          </div>
          <p class="metric-line" id="probabilityReadout"></p>
          <div class="answer-row">
            <input id="posteriorGuess" type="number" min="0" max="100" step="1" placeholder="${playerText("输入百分比", "Enter percent")}">
            <button id="checkProbabilityButton" type="button">${playerLabel("check")}</button>
          </div>
        </div>
        <canvas class="math-canvas" id="probabilityCanvas" width="720" height="460" aria-label="conditional probability population model"></canvas>
      </div>
      <div class="feedback-panel" id="playerFeedback"></div>
      <div class="step-actions"><button class="ghost-button" id="probabilityContinue" type="button" disabled>${playerLabel("next")}</button></div>
    </section>
  `);
  ["priorSlider", "tprSlider", "fprSlider"].forEach((id) => $(`#${id}`).addEventListener("input", drawProbabilityModel));
  $("#checkProbabilityButton").addEventListener("click", checkProbabilityModel);
  $("#probabilityContinue").addEventListener("click", nextLectureOneStep);
  drawProbabilityModel();
}

function drawProbabilityModel() {
  const { prior, tpr, fpr, posterior } = probabilityValues();
  $("#probabilityReadout").textContent = `${playerText("当前后验", "Current posterior")} P(A|+) = ${(posterior * 100).toFixed(1)}%`;
  const { ctx, width, height } = getCanvasContext("#probabilityCanvas");
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#fbfaf5";
  ctx.fillRect(0, 0, width, height);
  const total = 200;
  const positivesA = Math.round(total * prior * tpr);
  const positivesNotA = Math.round(total * (1 - prior) * fpr);
  const aNegative = Math.round(total * prior * (1 - tpr));
  const cells = [];
  for (let i = 0; i < positivesA; i += 1) cells.push("#2867b2");
  for (let i = 0; i < positivesNotA; i += 1) cells.push("#b86f1d");
  for (let i = 0; i < aNegative; i += 1) cells.push("#93b5ad");
  while (cells.length < total) cells.push("#ded8cc");
  const cols = 20;
  const size = Math.min((width - 80) / cols, (height - 120) / 10);
  const startX = (width - cols * size) / 2;
  const startY = 38;
  cells.forEach((color, i) => {
    const x = startX + (i % cols) * size;
    const y = startY + Math.floor(i / cols) * size;
    ctx.fillStyle = color;
    ctx.fillRect(x + 1, y + 1, size - 2, size - 2);
  });
  ctx.fillStyle = "#1f2523";
  ctx.font = "14px system-ui";
  ctx.fillText(playerText("蓝色: A 且 +", "Blue: A and +"), startX, height - 62);
  ctx.fillText(playerText("橙色: not A 但 +", "Orange: not A but +"), startX, height - 38);
  ctx.fillStyle = "#66726e";
  ctx.fillText(`${playerText("在所有 + 中，真正 A 的比例", "Among all + cases, the fraction truly A")} = ${(posterior * 100).toFixed(1)}%`, startX, height - 14);
}

function checkProbabilityModel() {
  const guess = Number($("#posteriorGuess").value);
  const actual = probabilityValues().posterior * 100;
  if (Number.isFinite(guess) && Math.abs(guess - actual) <= 3) {
    const xp = awardStep("probability", 20);
    showPlayerFeedback(true, playerText("这就是条件概率的冲击：基础率会强烈影响 P(A|+)。", "This is the punchline of conditional probability: the base rate strongly shapes P(A|+)."), xp);
    $("#probabilityContinue").disabled = false;
  } else {
    loseHeart();
    showPlayerFeedback(false, playerText(`接近 ${(actual).toFixed(1)}%。先数蓝色 + 和橙色 +，再算蓝色占所有 + 的比例。`, `It is close to ${(actual).toFixed(1)}%. Count blue positives and orange positives, then compute the blue share of all positives.`));
  }
}

function renderL1Vector() {
  setPlayerStage(`
    <section class="lesson-step">
      <div class="model-layout">
        <div class="model-panel">
          <p class="step-kicker">${playerText("第 4 关：线代几何", "Level 4: Linear algebra geometry")}</p>
          <h3>${playerText("把点积拖成投影", "Drag the dot product into a projection")}</h3>
          <p>${playerText("拖动绿色向量 v。目标：让 v 在蓝色方向 u 上的投影长度约等于 2。你会看到 dot product 为什么不是纯代数符号。", "Drag the green vector v. Goal: make the projection of v onto the blue direction u approximately 2. You will see why the dot product is geometry, not just algebra.", "\n\n")}</p>
          <p class="metric-line" id="vectorReadout"></p>
          <div class="step-actions"><button id="checkVectorButton" type="button">${playerLabel("check")}</button></div>
        </div>
        <canvas class="math-canvas" id="vectorCanvas" width="720" height="460" aria-label="vector projection model"></canvas>
      </div>
      <div class="feedback-panel" id="playerFeedback"></div>
      <div class="step-actions"><button class="ghost-button" id="vectorContinue" type="button" disabled>${playerLabel("next")}</button></div>
    </section>
  `);
  const canvas = $("#vectorCanvas");
  canvas.addEventListener("pointerdown", startVectorDrag);
  canvas.addEventListener("pointermove", moveVectorDrag);
  canvas.addEventListener("pointerup", endVectorDrag);
  canvas.addEventListener("pointerleave", endVectorDrag);
  $("#checkVectorButton").addEventListener("click", checkVectorModel);
  $("#vectorContinue").addEventListener("click", nextLectureOneStep);
  drawVectorModel();
}

function vectorProjection() {
  const u = { x: 3, y: 1 };
  const v = lectureOnePlayer.vector;
  const uLength = Math.hypot(u.x, u.y);
  const projection = (v.x * u.x + v.y * u.y) / uLength;
  const dot = v.x * u.x + v.y * u.y;
  return { u, v, uLength, projection, dot };
}

function canvasToVector(event) {
  const canvas = $("#vectorCanvas");
  const rect = canvas.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width) * 8 - 4;
  const y = 4 - ((event.clientY - rect.top) / rect.height) * 8;
  return { x: Math.max(-3.8, Math.min(3.8, x)), y: Math.max(-3.8, Math.min(3.8, y)) };
}

function startVectorDrag(event) {
  lectureOnePlayer.vector.dragging = true;
  lectureOnePlayer.vector = { ...lectureOnePlayer.vector, ...canvasToVector(event), dragging: true };
  drawVectorModel();
}

function moveVectorDrag(event) {
  if (!lectureOnePlayer.vector.dragging) return;
  lectureOnePlayer.vector = { ...lectureOnePlayer.vector, ...canvasToVector(event), dragging: true };
  drawVectorModel();
}

function endVectorDrag() {
  lectureOnePlayer.vector.dragging = false;
}

function drawArrow(ctx, sx, sy, vector, color, width = 4) {
  const x0 = sx(0);
  const y0 = sy(0);
  const x1 = sx(vector.x);
  const y1 = sy(vector.y);
  const angle = Math.atan2(y1 - y0, x1 - x0);
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = width;
  ctx.beginPath();
  ctx.moveTo(x0, y0);
  ctx.lineTo(x1, y1);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x1 - 14 * Math.cos(angle - 0.45), y1 - 14 * Math.sin(angle - 0.45));
  ctx.lineTo(x1 - 14 * Math.cos(angle + 0.45), y1 - 14 * Math.sin(angle + 0.45));
  ctx.closePath();
  ctx.fill();
}

function drawVectorModel() {
  const { ctx, width, height } = getCanvasContext("#vectorCanvas");
  const sx = (x) => (width / 2) + (x / 8) * width;
  const sy = (y) => (height / 2) - (y / 8) * height;
  const { u, v, projection, dot, uLength } = vectorProjection();
  const unitU = { x: u.x / uLength, y: u.y / uLength };
  const projected = { x: unitU.x * projection, y: unitU.y * projection };
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#fbfaf5";
  ctx.fillRect(0, 0, width, height);
  ctx.strokeStyle = "#ded8cc";
  ctx.lineWidth = 1;
  for (let i = -4; i <= 4; i += 1) {
    ctx.beginPath();
    ctx.moveTo(sx(-4), sy(i));
    ctx.lineTo(sx(4), sy(i));
    ctx.moveTo(sx(i), sy(-4));
    ctx.lineTo(sx(i), sy(4));
    ctx.stroke();
  }
  ctx.strokeStyle = "#1f2523";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(sx(-4), sy(0));
  ctx.lineTo(sx(4), sy(0));
  ctx.moveTo(sx(0), sy(-4));
  ctx.lineTo(sx(0), sy(4));
  ctx.stroke();
  drawArrow(ctx, sx, sy, u, "#2867b2", 5);
  drawArrow(ctx, sx, sy, v, "#187b77", 5);
  ctx.strokeStyle = "#b86f1d";
  ctx.lineWidth = 3;
  ctx.setLineDash([8, 6]);
  ctx.beginPath();
  ctx.moveTo(sx(v.x), sy(v.y));
  ctx.lineTo(sx(projected.x), sy(projected.y));
  ctx.stroke();
  ctx.setLineDash([]);
  drawArrow(ctx, sx, sy, projected, "#b86f1d", 3);
  ctx.fillStyle = "#1f2523";
  ctx.font = "14px system-ui";
  ctx.fillText("u", sx(u.x) + 8, sy(u.y));
  ctx.fillText("v", sx(v.x) + 8, sy(v.y));
  $("#vectorReadout").textContent = `dot(v,u) = ${dot.toFixed(2)} · ${playerText("投影长度", "projection length")} = ${projection.toFixed(2)} · ${playerText("目标", "target")} ≈ 2.00`;
}

function checkVectorModel() {
  const { projection } = vectorProjection();
  if (Math.abs(projection - 2) <= 0.25) {
    const xp = awardStep("vector", 20);
    showPlayerFeedback(true, playerText("你把点积的几何意义拖出来了：它测量一个向量在另一个方向上的成分。", "You made the dot product geometric: it measures how much one vector lies in another direction."), xp);
    $("#vectorContinue").disabled = false;
  } else {
    loseHeart();
    showPlayerFeedback(false, playerText("把绿色向量沿蓝色方向再调一调。目标不是长度等于 2，而是在蓝色方向上的投影等于 2。", "Adjust the green vector along the blue direction. The target is not length 2; it is projection onto the blue direction equal to 2."));
  }
}

function renderL1Sequence() {
  setPlayerStage(`
    <section class="lesson-step">
      <div class="model-layout">
        <div class="model-panel">
          <p class="step-kicker">${playerText("第 5 关：极限", "Level 5: Limits")}</p>
          <h3>${playerText("用 epsilon 亲手抓住收敛", "Catch convergence with epsilon")}</h3>
          <p>${playerText("Lecture 1 里的极限不是玄学：当 n 足够大，a_n 可以被压进任意小的误差带。把 n 调到让 |1/n| < 0.05。", "Limits are not mystical: when n is large enough, a_n can be forced inside any chosen error band. Move n until |1/n| < 0.05.", "\n\n")}</p>
          <label>${playerText("n 的大小", "Value of n")} <input id="sequenceSlider" type="range" min="1" max="80" value="${lectureOnePlayer.sequenceN}"></label>
          <p class="metric-line" id="sequenceReadout"></p>
          <div class="step-actions"><button id="checkSequenceButton" type="button">${playerLabel("check")}</button></div>
        </div>
        <canvas class="math-canvas" id="sequenceCanvas" width="720" height="460" aria-label="sequence convergence model"></canvas>
      </div>
      <div class="feedback-panel" id="playerFeedback"></div>
      <div class="step-actions"><button class="ghost-button" id="sequenceContinue" type="button" disabled>${playerLabel("next")}</button></div>
    </section>
  `);
  $("#sequenceSlider").addEventListener("input", () => {
    lectureOnePlayer.sequenceN = Number($("#sequenceSlider").value);
    drawSequenceModel();
  });
  $("#checkSequenceButton").addEventListener("click", checkSequenceModel);
  $("#sequenceContinue").addEventListener("click", nextLectureOneStep);
  drawSequenceModel();
}

function drawSequenceModel() {
  const n = Number($("#sequenceSlider").value);
  const value = 1 / n;
  $("#sequenceReadout").textContent = `a_n = 1/n = ${value.toFixed(3)} · epsilon = 0.05`;
  const { ctx, width, height } = getCanvasContext("#sequenceCanvas");
  const pad = 44;
  const sx = (x) => pad + ((x - 1) / 79) * (width - pad * 2);
  const sy = (y) => height - pad - ((y + 0.15) / 1.2) * (height - pad * 2);
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#fbfaf5";
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = "rgba(24, 123, 119, 0.10)";
  ctx.fillRect(pad, sy(0.05), width - pad * 2, sy(-0.05) - sy(0.05));
  ctx.strokeStyle = "#ded8cc";
  ctx.beginPath();
  ctx.moveTo(pad, sy(0));
  ctx.lineTo(width - pad, sy(0));
  ctx.stroke();
  for (let i = 1; i <= 80; i += 1) {
    ctx.beginPath();
    ctx.arc(sx(i), sy(1 / i), i === n ? 5 : 2.2, 0, Math.PI * 2);
    ctx.fillStyle = i === n ? "#b86f1d" : "#2867b2";
    ctx.fill();
  }
  ctx.fillStyle = "#1f2523";
  ctx.font = "14px system-ui";
  ctx.fillText("a_n = 1/n", pad, pad - 12);
  ctx.fillStyle = "#66726e";
  ctx.fillText(playerText("绿色带: |a_n| < 0.05", "Green band: |a_n| < 0.05"), width - 220, pad - 12);
}

function checkSequenceModel() {
  const n = Number($("#sequenceSlider").value);
  if (1 / n < 0.05) {
    const xp = awardStep("sequence", 20);
    showPlayerFeedback(true, playerText("对。这里的关键词是“足够大”。n 超过 20 后，1/n 就进入 0.05 的误差带。", "Correct. The key phrase is sufficiently large. Once n is above 20, 1/n enters the 0.05 error band."), xp);
    $("#sequenceContinue").disabled = false;
  } else {
    loseHeart();
    showPlayerFeedback(false, playerText("继续把 n 调大。你要让 1/n 小于 0.05，所以 n 需要大于 20。", "Increase n. You need 1/n below 0.05, so n must be greater than 20."));
  }
}

function renderL1Final() {
  const options = [
    [playerText("背下所有公式，然后直接刷 PDF", "Memorize every formula, then rush through the PDF"), false],
    [playerText("先能读符号，再操作条件概率、投影和收敛模型", "First read the notation, then manipulate conditional probability, projection, and convergence models"), true],
    [playerText("跳过数学，等机器学习模型出现再说", "Skip the math and wait until the machine-learning models appear"), false],
    [playerText("只看定义，不做任何计算或图形操作", "Read definitions only, with no computation or visual manipulation"), false]
  ];
  setPlayerStage(`
    <section class="lesson-step">
      <div class="step-card">
        <p class="step-kicker">${playerText("最终检查", "Final check")}</p>
        <h3>${playerText("打开 Lecture 1 PDF 前，最强的学习策略是哪一个？", "Before opening the Lecture 1 PDF, which study strategy is strongest?")}</h3>
      </div>
      <div class="choice-grid">
        ${options.map((option, index) => `<button class="choice-card" type="button" data-correct="${option[1]}" data-index="${index}"><strong>${option[0]}</strong></button>`).join("")}
      </div>
      <div class="feedback-panel" id="playerFeedback"></div>
      <div class="step-actions"><button class="ghost-button" id="finalContinue" type="button" disabled>${playerLabel("next")}</button></div>
    </section>
  `);
  document.querySelectorAll(".choice-card").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".choice-card").forEach((item) => item.classList.remove("correct", "wrong"));
      const correct = button.dataset.correct === "true";
      button.classList.add(correct ? "correct" : "wrong");
      if (correct) {
        const xp = awardStep("final", 15);
        showPlayerFeedback(true, playerText("这才是 Lecture 1 的正确打开方式：先让符号和模型变成直觉。", "That is the right way into Lecture 1: turn notation and models into intuition first."), xp);
        $("#finalContinue").disabled = false;
      } else {
        loseHeart();
        showPlayerFeedback(false, playerText("这门课的数学要被使用，而不是只被背诵。", "The mathematics in this course should be used, not merely memorized."));
      }
    });
  });
  $("#finalContinue").addEventListener("click", nextLectureOneStep);
}

function renderL1Complete() {
  state.completed.add(1);
  saveProgress();
  updateProgress();
  renderLessonList();
  setPlayerStage(`
    <section class="lesson-step">
      <div class="step-card">
        <p class="step-kicker">${playerText("Lecture 1 unlocked", "Lecture 1 unlocked")}</p>
        <h2>${playerText("你已经准备好读讲义了", "You are ready for the lecture notes")}</h2>
        <p>${playerText(
          `这次不是“看过一遍”，而是完成了概率符号、条件概率模型、向量投影和序列收敛的主动练习。总分：${lectureOnePlayer.xp} XP。`,
          `This was not passive reading. You actively trained probability notation, conditional probability, vector projection, and sequence convergence. Score: ${lectureOnePlayer.xp} XP.`,
          "\n\n"
        )}</p>
        <div class="step-actions">
          <a href="${encodePdfPath("Lecture 1.pdf")}" target="_blank" rel="noreferrer">${copy().pdfLink}</a>
          <button id="finishPlayerButton" type="button">${playerLabel("finish")}</button>
        </div>
      </div>
    </section>
  `);
  $("#finishPlayerButton").addEventListener("click", closeLectureOnePlayer);
}

function renderPlayerComplete(lectureId, title, summary) {
  state.completed.add(lectureId);
  saveProgress();
  updateProgress();
  renderLessonList();
  setPlayerStage(`
    <section class="lesson-step">
      <div class="step-card">
        <p class="step-kicker">Lecture ${lectureId} unlocked</p>
        <h2>${title}</h2>
        <p>${summary}\n\n${playerText(`总分：${lectureOnePlayer.xp} XP。`, `Score: ${lectureOnePlayer.xp} XP.`)}</p>
        <div class="step-actions">
          <a href="${encodePdfPath(`Lecture ${lectureId}.pdf`)}" target="_blank" rel="noreferrer">${copy().pdfLink}</a>
          <button id="finishPlayerButton" type="button">${playerLabel("finish")}</button>
        </div>
      </div>
    </section>
  `);
  $("#finishPlayerButton").addEventListener("click", closeLectureOnePlayer);
}

function renderL2Intro() {
  setPlayerStage(`
    <section class="lesson-step">
      <div class="step-hero">
        <div class="step-card">
          <p class="step-kicker">Lecture 2 interactive</p>
          <h2>${playerText("统计学派决策训练", "Statistical Schools Decision Trainer")}</h2>
          <p>${playerText(
            "Lecture 2 的目标不是背 frequentist、Bayesian 这些名字，而是看到一个学习问题时能判断：我在估计参数、最小化风险，还是更新信念？模型是在学 p(y|x)，还是学整个数据生成过程？",
            "Lecture 2 is not about memorizing names like frequentist or Bayesian. The goal is to look at a learning problem and decide: am I estimating a parameter, minimizing risk, or updating belief? Is the model learning p(y|x), or the whole data-generation process?",
            "\n\n"
          )}</p>
          <div class="step-actions"><button id="playerStartButton" type="button">${playerLabel("start")}</button></div>
        </div>
        <div class="mini-map">
          <div class="mini-map-card"><span>1</span><div><strong>${playerText("三大学派", "Three schools")}</strong><small>${playerText("Frequentist / Bayesian / Decision theory", "Frequentist / Bayesian / Decision theory")}</small></div></div>
          <div class="mini-map-card"><span>2</span><div><strong>${playerText("模型地图", "Model map")}</strong><small>${playerText("生成式、判别式、参数、非参数", "Generative, discriminative, parametric, non-parametric")}</small></div></div>
          <div class="mini-map-card"><span>3</span><div><strong>${playerText("风险阈值", "Risk threshold")}</strong><small>${playerText("用 loss matrix 做决定", "Make decisions with a loss matrix")}</small></div></div>
        </div>
      </div>
    </section>
  `);
  $("#playerStartButton").addEventListener("click", nextLectureOneStep);
}

function renderL2Schools() {
  const options = [
    ["Frequentist", playerText("把参数当固定未知量，用重复采样性质评价估计器。", "Treat parameters as fixed unknowns and evaluate estimators by repeated sampling."), false],
    ["Bayesian", playerText("从 prior 出发，用 evidence 更新成 posterior。", "Start with a prior and update it with evidence into a posterior."), true],
    ["Decision theory", playerText("先定义 action 和 loss，再选 expected loss 最小的 action。", "Define actions and loss, then choose the action with minimum expected loss."), false],
    ["Non-parametric", playerText("让模型复杂度随数据增长。", "Let model complexity grow with the data."), false]
  ];
  setPlayerStage(`
    <section class="lesson-step">
      <div class="step-card">
        <p class="step-kicker">${playerText("第 1 关：学派识别", "Level 1: Identify the school")}</p>
        <h3>${playerText("“我先有一个 prior，看见数据后更新成 posterior。”这句话属于哪种观点？", "I start with a prior, observe data, and update to a posterior. Which viewpoint is this?")}</h3>
      </div>
      <div class="choice-grid">
        ${options.map((option, index) => `
          <button class="choice-card" type="button" data-correct="${option[2]}" data-index="${index}">
            <strong>${option[0]}</strong><span>${option[1]}</span>
          </button>
        `).join("")}
      </div>
      <div class="feedback-panel" id="playerFeedback"></div>
      <div class="step-actions"><button class="ghost-button" id="schoolContinue" type="button" disabled>${playerLabel("next")}</button></div>
    </section>
  `);
  document.querySelectorAll(".choice-card").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".choice-card").forEach((item) => item.classList.remove("correct", "wrong"));
      const correct = button.dataset.correct === "true";
      button.classList.add(correct ? "correct" : "wrong");
      if (correct) {
        const xp = awardStep("l2-schools", 15);
        showPlayerFeedback(true, playerText("对。Bayesian 的核心动作就是 prior -> likelihood -> posterior。", "Correct. The core Bayesian move is prior -> likelihood -> posterior."), xp);
        $("#schoolContinue").disabled = false;
      } else {
        loseHeart();
        showPlayerFeedback(false, playerText("找关键词：prior 和 posterior 几乎直接把答案指向 Bayesian。", "Look for the keywords: prior and posterior point almost directly to Bayesian."));
      }
    });
  });
  $("#schoolContinue").addEventListener("click", nextLectureOneStep);
}

function renderL2Taxonomy() {
  const options = [
    [playerText("参数 + 生成式", "Parametric + generative"), true],
    [playerText("参数 + 判别式", "Parametric + discriminative"), false],
    [playerText("非参数 + 生成式", "Non-parametric + generative"), false],
    [playerText("非参数 + 判别式", "Non-parametric + discriminative"), false]
  ];
  setPlayerStage(`
    <section class="lesson-step">
      <div class="model-layout">
        <div class="model-panel">
          <p class="step-kicker">${playerText("第 2 关：模型地图", "Level 2: Model map")}</p>
          <h3>${playerText("Naive Bayes 应该放到哪里？", "Where should Naive Bayes go?")}</h3>
          <p>${playerText("提示：它会建模 p(x|y)p(y)，并且通常有固定数量的参数。", "Hint: it models p(x|y)p(y), and usually has a fixed number of parameters.")}</p>
          <div class="equation-strip">p(x, y) = p(x|y)p(y)</div>
        </div>
        <div class="taxonomy-plane">
          <div>${playerText("生成式 / Generative", "Generative")}</div>
          <div>${playerText("判别式 / Discriminative", "Discriminative")}</div>
          <div>${playerText("参数 / Parametric", "Parametric")}</div>
          <div>${playerText("非参数 / Non-parametric", "Non-parametric")}</div>
        </div>
      </div>
      <div class="choice-grid">
        ${options.map((option, index) => `<button class="choice-card" type="button" data-correct="${option[1]}" data-index="${index}"><strong>${option[0]}</strong></button>`).join("")}
      </div>
      <div class="feedback-panel" id="playerFeedback"></div>
      <div class="step-actions"><button class="ghost-button" id="taxonomyContinue" type="button" disabled>${playerLabel("next")}</button></div>
    </section>
  `);
  document.querySelectorAll(".choice-card").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".choice-card").forEach((item) => item.classList.remove("correct", "wrong"));
      const correct = button.dataset.correct === "true";
      button.classList.add(correct ? "correct" : "wrong");
      if (correct) {
        const xp = awardStep("l2-taxonomy", 20);
        showPlayerFeedback(true, playerText("对。Naive Bayes 描述数据如何生成，而且参数数量由特征/类别结构固定。", "Correct. Naive Bayes describes how data is generated, and its parameter count is fixed by the feature/class structure."), xp);
        $("#taxonomyContinue").disabled = false;
      } else {
        loseHeart();
        showPlayerFeedback(false, playerText("如果模型学的是 p(x,y) 或 p(x|y)p(y)，它更像生成式；如果直接学 p(y|x)，更像判别式。", "If a model learns p(x,y) or p(x|y)p(y), it is generative; if it learns p(y|x) directly, it is discriminative."));
      }
    });
  });
  $("#taxonomyContinue").addEventListener("click", nextLectureOneStep);
}

function renderL2Risk() {
  setPlayerStage(`
    <section class="lesson-step">
      <div class="model-layout">
        <div class="model-panel">
          <p class="step-kicker">${playerText("第 3 关：Decision theory", "Level 3: Decision theory")}</p>
          <h3>${playerText("用 loss matrix 选阈值", "Choose a threshold using a loss matrix")}</h3>
          <p>${playerText("如果漏诊成本是 8，误诊成本是 1，你应该在多低的疾病概率就采取 treat？拖动阈值，让 expected loss 尽量小。", "If a false negative costs 8 and a false positive costs 1, how low should the disease probability be before you treat? Move the threshold to minimize expected loss.", "\n\n")}</p>
          <div class="risk-matrix">
            <div></div><strong>${playerText("真实有病", "Disease")}</strong><strong>${playerText("真实无病", "No disease")}</strong>
            <strong>${playerText("Treat", "Treat")}</strong><span>0</span><span>1</span>
            <strong>${playerText("Don't treat", "Don't treat")}</strong><span>8</span><span>0</span>
          </div>
          <label>${playerText("治疗阈值", "Treatment threshold")} <input id="riskThresholdSlider" type="range" min="0.02" max="0.8" step="0.01" value="${lectureOnePlayer.riskThreshold}"></label>
          <p class="metric-line" id="riskReadout"></p>
          <div class="step-actions"><button id="checkRiskButton" type="button">${playerLabel("check")}</button></div>
        </div>
        <canvas class="math-canvas" id="riskCanvas" width="720" height="460" aria-label="decision risk threshold model"></canvas>
      </div>
      <div class="feedback-panel" id="playerFeedback"></div>
      <div class="step-actions"><button class="ghost-button" id="riskContinue" type="button" disabled>${playerLabel("next")}</button></div>
    </section>
  `);
  $("#riskThresholdSlider").addEventListener("input", () => {
    lectureOnePlayer.riskThreshold = Number($("#riskThresholdSlider").value);
    drawRiskModel();
  });
  $("#checkRiskButton").addEventListener("click", checkRiskModel);
  $("#riskContinue").addEventListener("click", nextLectureOneStep);
  drawRiskModel();
}

function drawRiskModel() {
  const threshold = Number($("#riskThresholdSlider").value);
  const optimal = 1 / 9;
  $("#riskReadout").textContent = `${playerText("你的阈值", "Your threshold")} = ${(threshold * 100).toFixed(0)}% · ${playerText("理论最优", "theoretical optimum")} ≈ ${(optimal * 100).toFixed(0)}%`;
  const { ctx, width, height } = getCanvasContext("#riskCanvas");
  const pad = 44;
  const sx = (p) => pad + p * (width - pad * 2);
  const sy = (loss) => height - pad - (loss / 8) * (height - pad * 2);
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#fbfaf5";
  ctx.fillRect(0, 0, width, height);
  ctx.strokeStyle = "#ded8cc";
  ctx.beginPath();
  ctx.moveTo(pad, pad);
  ctx.lineTo(pad, height - pad);
  ctx.lineTo(width - pad, height - pad);
  ctx.stroke();
  function plot(fn, color) {
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.beginPath();
    for (let i = 0; i <= 100; i += 1) {
      const p = i / 100;
      const x = sx(p);
      const y = sy(fn(p));
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
  }
  plot((p) => 1 - p, "#2867b2");
  plot((p) => 8 * p, "#b64b45");
  ctx.strokeStyle = "#187b77";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(sx(threshold), pad);
  ctx.lineTo(sx(threshold), height - pad);
  ctx.stroke();
  ctx.fillStyle = "#1f2523";
  ctx.font = "14px system-ui";
  ctx.fillText(playerText("Treat risk = 1-p", "Treat risk = 1-p"), sx(0.55), sy(0.45));
  ctx.fillText(playerText("No treat risk = 8p", "No treat risk = 8p"), sx(0.18), sy(2.2));
}

function checkRiskModel() {
  const threshold = Number($("#riskThresholdSlider").value);
  if (threshold >= 0.08 && threshold <= 0.16) {
    const xp = awardStep("l2-risk", 25);
    showPlayerFeedback(true, playerText("对。漏诊代价很高，所以只要疾病概率稍微超过约 11%，treat 的期望损失就更低。", "Correct. False negatives are costly, so once disease probability is just above about 11%, treating has lower expected loss."), xp);
    $("#riskContinue").disabled = false;
  } else {
    loseHeart();
    showPlayerFeedback(false, playerText("把两条 risk 曲线相交的位置找出来：1-p = 8p，所以 p ≈ 0.11。", "Find where the two risk curves cross: 1-p = 8p, so p is about 0.11."));
  }
}

function renderL2Final() {
  const options = [
    [playerText("Frequentist: prior -> posterior；Bayesian: repeated sampling", "Frequentist: prior -> posterior; Bayesian: repeated sampling"), false],
    [playerText("Decision theory: 选 expected loss 最小的 action", "Decision theory: choose the action with minimum expected loss"), true],
    [playerText("Generative model: 只直接学 p(y|x)", "Generative model: only learns p(y|x) directly"), false],
    [playerText("Non-parametric: 参数数量永远固定", "Non-parametric: parameter count is always fixed"), false]
  ];
  setPlayerStage(`
    <section class="lesson-step">
      <div class="step-card">
        <p class="step-kicker">${playerText("最终检查", "Final check")}</p>
        <h3>${playerText("哪一句最准确？", "Which statement is most accurate?")}</h3>
      </div>
      <div class="choice-grid">
        ${options.map((option, index) => `<button class="choice-card" type="button" data-correct="${option[1]}" data-index="${index}"><strong>${option[0]}</strong></button>`).join("")}
      </div>
      <div class="feedback-panel" id="playerFeedback"></div>
      <div class="step-actions"><button class="ghost-button" id="l2FinalContinue" type="button" disabled>${playerLabel("next")}</button></div>
    </section>
  `);
  document.querySelectorAll(".choice-card").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".choice-card").forEach((item) => item.classList.remove("correct", "wrong"));
      const correct = button.dataset.correct === "true";
      button.classList.add(correct ? "correct" : "wrong");
      if (correct) {
        const xp = awardStep("l2-final", 15);
        showPlayerFeedback(true, playerText("对。Lecture 2 的核心是把学习问题翻译成统计视角和决策目标。", "Correct. The core of Lecture 2 is translating learning problems into statistical viewpoints and decision objectives."), xp);
        $("#l2FinalContinue").disabled = false;
      } else {
        loseHeart();
        showPlayerFeedback(false, playerText("回到关键词：prior/posterior 是 Bayesian；expected loss 是 decision theory。", "Return to the keywords: prior/posterior is Bayesian; expected loss is decision theory."));
      }
    });
  });
  $("#l2FinalContinue").addEventListener("click", nextLectureOneStep);
}

const regressionData = [
  { x: -2.4, y: -2.7 }, { x: -1.8, y: -1.7 }, { x: -1.1, y: -0.8 },
  { x: -0.4, y: 0.55 }, { x: 0.3, y: 1.25 }, { x: 0.9, y: 2.55 },
  { x: 1.6, y: 3.35 }, { x: 2.2, y: 4.25 }
];

function lineMse(slope, intercept) {
  return regressionData.reduce((sum, point) => {
    const err = point.y - (slope * point.x + intercept);
    return sum + err * err;
  }, 0) / regressionData.length;
}

function renderL3Intro() {
  setPlayerStage(`
    <section class="lesson-step">
      <div class="step-hero">
        <div class="step-card">
          <p class="step-kicker">Lecture 3 interactive</p>
          <h2>${playerText("线性回归训练场", "Linear Regression Playground")}</h2>
          <p>${playerText(
            "这节课你会亲手调一条线，观察 MSE 如何变化，再用 basis expansion 看到“对参数线性”和“对输入非线性”可以同时成立。",
            "In this lesson you will tune a line by hand, watch MSE change, and use basis expansion to see how a model can be linear in parameters while nonlinear in inputs.",
            "\n\n"
          )}</p>
          <div class="step-actions"><button id="playerStartButton" type="button">${playerLabel("start")}</button></div>
        </div>
        <div class="mini-map">
          <div class="mini-map-card"><span>1</span><div><strong>${playerText("拟合一条线", "Fit a line")}</strong><small>MSE feedback</small></div></div>
          <div class="mini-map-card"><span>2</span><div><strong>${playerText("Loss surface", "Loss surface")}</strong><small>${playerText("看见最优点", "See the optimum")}</small></div></div>
          <div class="mini-map-card"><span>3</span><div><strong>Basis expansion</strong><small>${playerText("非线性来自特征变换", "Nonlinearity from feature transforms")}</small></div></div>
        </div>
      </div>
    </section>
  `);
  $("#playerStartButton").addEventListener("click", nextLectureOneStep);
}

function renderL3Fit() {
  setPlayerStage(`
    <section class="lesson-step">
      <div class="model-layout">
        <div class="model-panel">
          <p class="step-kicker">${playerText("第 1 关：手动拟合", "Level 1: Manual fitting")}</p>
          <h3>${playerText("调 slope 和 intercept，让 MSE 降下来", "Tune slope and intercept to reduce MSE")}</h3>
          <p>${playerText("目标：MSE < 0.35。你不是在猜答案，而是在感受每个参数怎样移动整条线。", "Goal: MSE < 0.35. You are not guessing; you are feeling how each parameter moves the whole line.")}</p>
          <div class="model-controls">
            <label>slope <input id="fitSlope" type="range" min="-1" max="3.5" step="0.05" value="${lectureOnePlayer.regression.slope}"></label>
            <label>intercept <input id="fitIntercept" type="range" min="-2" max="3" step="0.05" value="${lectureOnePlayer.regression.intercept}"></label>
          </div>
          <p class="metric-line" id="fitReadout"></p>
          <div class="step-actions"><button id="checkFitButton" type="button">${playerLabel("check")}</button></div>
        </div>
        <canvas class="math-canvas" id="fitCanvas" width="720" height="460" aria-label="linear regression fitting model"></canvas>
      </div>
      <div class="feedback-panel" id="playerFeedback"></div>
      <div class="step-actions"><button class="ghost-button" id="fitContinue" type="button" disabled>${playerLabel("next")}</button></div>
    </section>
  `);
  ["fitSlope", "fitIntercept"].forEach((id) => $(`#${id}`).addEventListener("input", drawFitModel));
  $("#checkFitButton").addEventListener("click", checkFitModel);
  $("#fitContinue").addEventListener("click", nextLectureOneStep);
  drawFitModel();
}

function drawRegressionAxes(ctx, width, height) {
  const pad = 44;
  const sx = (x) => pad + ((x + 3) / 6) * (width - pad * 2);
  const sy = (y) => height - pad - ((y + 3) / 8) * (height - pad * 2);
  ctx.fillStyle = "#fbfaf5";
  ctx.fillRect(0, 0, width, height);
  ctx.strokeStyle = "#ded8cc";
  for (let i = -3; i <= 5; i += 1) {
    ctx.beginPath();
    ctx.moveTo(sx(-3), sy(i));
    ctx.lineTo(sx(3), sy(i));
    ctx.stroke();
  }
  for (let i = -3; i <= 3; i += 1) {
    ctx.beginPath();
    ctx.moveTo(sx(i), sy(-3));
    ctx.lineTo(sx(i), sy(5));
    ctx.stroke();
  }
  return { sx, sy };
}

function drawFitModel() {
  const slope = Number($("#fitSlope").value);
  const intercept = Number($("#fitIntercept").value);
  lectureOnePlayer.regression = { slope, intercept };
  const mse = lineMse(slope, intercept);
  $("#fitReadout").textContent = `y = ${slope.toFixed(2)}x + ${intercept.toFixed(2)} · MSE = ${mse.toFixed(3)}`;
  const { ctx, width, height } = getCanvasContext("#fitCanvas");
  const { sx, sy } = drawRegressionAxes(ctx, width, height);
  regressionData.forEach((point) => {
    const prediction = slope * point.x + intercept;
    ctx.strokeStyle = "rgba(182, 75, 69, 0.45)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(sx(point.x), sy(point.y));
    ctx.lineTo(sx(point.x), sy(prediction));
    ctx.stroke();
    ctx.fillStyle = "#2867b2";
    ctx.beginPath();
    ctx.arc(sx(point.x), sy(point.y), 5, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.strokeStyle = "#187b77";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(sx(-3), sy(slope * -3 + intercept));
  ctx.lineTo(sx(3), sy(slope * 3 + intercept));
  ctx.stroke();
}

function checkFitModel() {
  const { slope, intercept } = lectureOnePlayer.regression;
  const mse = lineMse(slope, intercept);
  if (mse < 0.35) {
    const xp = awardStep("l3-fit", 20);
    showPlayerFeedback(true, playerText("漂亮。红色残差线越短，平方损失越低。你刚刚手动做了最小二乘的目标。", "Nice. Shorter red residuals mean lower squared loss. You just manually optimized the least-squares objective."), xp);
    $("#fitContinue").disabled = false;
  } else {
    loseHeart();
    showPlayerFeedback(false, playerText("还可以更贴近数据。试着让 slope 接近 1.5，intercept 接近 0.9。", "You can fit closer. Try a slope near 1.5 and an intercept near 0.9."));
  }
}

function renderL3Loss() {
  setPlayerStage(`
    <section class="lesson-step">
      <div class="model-layout">
        <div class="model-panel">
          <p class="step-kicker">${playerText("第 2 关：Loss surface", "Level 2: Loss surface")}</p>
          <h3>${playerText("看见解析解在找什么", "See what the analytic solution searches for")}</h3>
          <p>${playerText("热力图显示不同 slope/intercept 的 MSE。把白点移动到低损失区域。", "The heatmap shows MSE for different slope/intercept pairs. Move the white point into the low-loss basin.")}</p>
          <div class="model-controls">
            <label>slope <input id="lossSlope" type="range" min="-1" max="3.5" step="0.05" value="${lectureOnePlayer.regression.slope}"></label>
            <label>intercept <input id="lossIntercept" type="range" min="-2" max="3" step="0.05" value="${lectureOnePlayer.regression.intercept}"></label>
          </div>
          <p class="metric-line" id="lossReadout"></p>
          <div class="step-actions"><button id="checkLossButton" type="button">${playerLabel("check")}</button></div>
        </div>
        <canvas class="math-canvas" id="lossCanvas" width="720" height="460" aria-label="MSE loss surface"></canvas>
      </div>
      <div class="feedback-panel" id="playerFeedback"></div>
      <div class="step-actions"><button class="ghost-button" id="lossContinue" type="button" disabled>${playerLabel("next")}</button></div>
    </section>
  `);
  ["lossSlope", "lossIntercept"].forEach((id) => $(`#${id}`).addEventListener("input", drawLossSurface));
  $("#checkLossButton").addEventListener("click", checkLossSurface);
  $("#lossContinue").addEventListener("click", nextLectureOneStep);
  drawLossSurface();
}

function drawLossSurface() {
  const slope = Number($("#lossSlope").value);
  const intercept = Number($("#lossIntercept").value);
  lectureOnePlayer.lossPoint = { slope, intercept };
  const mse = lineMse(slope, intercept);
  $("#lossReadout").textContent = `MSE = ${mse.toFixed(3)} · slope ${slope.toFixed(2)} · intercept ${intercept.toFixed(2)}`;
  const { ctx, width, height } = getCanvasContext("#lossCanvas");
  const pad = 44;
  const minS = -1;
  const maxS = 3.5;
  const minB = -2;
  const maxB = 3;
  const sx = (s) => pad + ((s - minS) / (maxS - minS)) * (width - pad * 2);
  const sy = (b) => height - pad - ((b - minB) / (maxB - minB)) * (height - pad * 2);
  ctx.clearRect(0, 0, width, height);
  const cols = 60;
  const rows = 60;
  for (let i = 0; i < cols; i += 1) {
    for (let j = 0; j < rows; j += 1) {
      const s = minS + (i / (cols - 1)) * (maxS - minS);
      const b = minB + (j / (rows - 1)) * (maxB - minB);
      const value = Math.min(1, lineMse(s, b) / 8);
      const red = Math.round(248 - value * 20);
      const green = Math.round(248 - value * 110);
      const blue = Math.round(238 - value * 130);
      ctx.fillStyle = `rgb(${red}, ${green}, ${blue})`;
      ctx.fillRect(sx(s), sy(b), (width - pad * 2) / cols + 1, (height - pad * 2) / rows + 1);
    }
  }
  ctx.strokeStyle = "#1f2523";
  ctx.strokeRect(pad, pad, width - pad * 2, height - pad * 2);
  ctx.fillStyle = "#1f2523";
  ctx.font = "14px system-ui";
  ctx.fillText("slope", width / 2 - 20, height - 12);
  ctx.save();
  ctx.translate(14, height / 2 + 30);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText("intercept", 0, 0);
  ctx.restore();
  ctx.fillStyle = "white";
  ctx.strokeStyle = "#1f2523";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(sx(slope), sy(intercept), 8, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
}

function checkLossSurface() {
  const { slope, intercept } = lectureOnePlayer.lossPoint;
  const mse = lineMse(slope, intercept);
  if (mse < 0.35) {
    const xp = awardStep("l3-loss", 20);
    showPlayerFeedback(true, playerText("对。解析解就是用矩阵运算直接跳到这个低损失盆地。", "Correct. The analytic solution uses matrix operations to jump directly to this low-loss basin."), xp);
    $("#lossContinue").disabled = false;
  } else {
    loseHeart();
    showPlayerFeedback(false, playerText("白点还在高损失区域。往颜色更浅、更中心的盆地移动。", "The white point is still in a higher-loss region. Move it toward the lighter central basin."));
  }
}

function renderL3Basis() {
  setPlayerStage(`
    <section class="lesson-step">
      <div class="model-layout">
        <div class="model-panel">
          <p class="step-kicker">${playerText("第 3 关：Basis expansion", "Level 3: Basis expansion")}</p>
          <h3>${playerText("让线性模型变弯", "Make a linear model bend")}</h3>
          <p>${playerText("这些点是 U 形的。调节 polynomial degree，找一个能表达曲线但不过度摆动的复杂度。", "These points are U-shaped. Adjust polynomial degree and find a complexity that captures the curve without excessive wiggle.")}</p>
          <label>degree <input id="basisDegreeSlider" type="range" min="1" max="8" step="1" value="${lectureOnePlayer.basisDegree}"></label>
          <p class="metric-line" id="basisReadout"></p>
          <div class="step-actions"><button id="checkBasisButton" type="button">${playerLabel("check")}</button></div>
        </div>
        <canvas class="math-canvas" id="basisCanvas" width="720" height="460" aria-label="basis expansion model"></canvas>
      </div>
      <div class="feedback-panel" id="playerFeedback"></div>
      <div class="step-actions"><button class="ghost-button" id="basisContinue" type="button" disabled>${playerLabel("next")}</button></div>
    </section>
  `);
  $("#basisDegreeSlider").addEventListener("input", () => {
    lectureOnePlayer.basisDegree = Number($("#basisDegreeSlider").value);
    drawBasisModel();
  });
  $("#checkBasisButton").addEventListener("click", checkBasisModel);
  $("#basisContinue").addEventListener("click", nextLectureOneStep);
  drawBasisModel();
}

function basisCurve(x, degree) {
  if (degree === 1) return 0.2 + 0.15 * x;
  if (degree === 2) return 0.15 + 0.72 * x * x;
  if (degree === 3) return 0.15 + 0.68 * x * x - 0.04 * x * x * x;
  return 0.18 + 0.7 * x * x + 0.14 * Math.sin(degree * x * 1.55) + 0.025 * degree * Math.cos(degree * x * 2.2);
}

function drawBasisModel() {
  const degree = Number($("#basisDegreeSlider").value);
  const message = degree === 1
    ? playerText("underfit: 太硬", "underfit: too rigid")
    : degree <= 3
      ? playerText("good fit: 弯曲但稳定", "good fit: flexible but stable")
      : playerText("overfit risk: 开始摆动", "overfit risk: starting to wiggle");
  $("#basisReadout").textContent = `degree = ${degree} · ${message}`;
  const { ctx, width, height } = getCanvasContext("#basisCanvas");
  const points = [
    [-2.5, 4.9], [-1.8, 2.45], [-1.1, 0.9], [-0.3, 0.2],
    [0.4, 0.25], [1.0, 0.85], [1.7, 2.25], [2.4, 4.55]
  ];
  const pad = 44;
  const sx = (x) => pad + ((x + 3) / 6) * (width - pad * 2);
  const sy = (y) => height - pad - ((y + 0.5) / 6) * (height - pad * 2);
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#fbfaf5";
  ctx.fillRect(0, 0, width, height);
  ctx.strokeStyle = "#ded8cc";
  for (let i = 0; i <= 6; i += 1) {
    ctx.beginPath();
    ctx.moveTo(pad, sy(i));
    ctx.lineTo(width - pad, sy(i));
    ctx.stroke();
  }
  ctx.strokeStyle = "#187b77";
  ctx.lineWidth = 4;
  ctx.beginPath();
  for (let i = 0; i <= 180; i += 1) {
    const x = -2.8 + (i / 180) * 5.6;
    const y = basisCurve(x, degree);
    if (i === 0) ctx.moveTo(sx(x), sy(y));
    else ctx.lineTo(sx(x), sy(y));
  }
  ctx.stroke();
  points.forEach(([x, y]) => {
    ctx.fillStyle = "#2867b2";
    ctx.beginPath();
    ctx.arc(sx(x), sy(y), 6, 0, Math.PI * 2);
    ctx.fill();
  });
}

function checkBasisModel() {
  const degree = Number($("#basisDegreeSlider").value);
  if (degree === 2 || degree === 3) {
    const xp = awardStep("l3-basis", 25);
    showPlayerFeedback(true, playerText("对。basis expansion 让输入变成 [1, x, x², ...]，模型对参数仍然是线性的。", "Correct. Basis expansion turns the input into [1, x, x², ...], while the model remains linear in its parameters."), xp);
    $("#basisContinue").disabled = false;
  } else {
    loseHeart();
    showPlayerFeedback(false, playerText("degree 1 欠拟合；degree 太高会开始追噪声。找一个刚好表达 U 形的复杂度。", "Degree 1 underfits; very high degree starts chasing noise. Find the simplest degree that captures the U-shape."));
  }
}

function renderL3Final() {
  const options = [
    [playerText("Basis expansion 后，模型对参数仍然可以是线性的。", "After basis expansion, the model can still be linear in its parameters."), true],
    [playerText("MSE 越大，模型一定越好。", "A larger MSE always means a better model."), false],
    [playerText("残差是预测值减预测值，所以总是 0。", "A residual is prediction minus prediction, so it is always 0."), false],
    [playerText("高 degree 永远不会过拟合。", "A high degree can never overfit."), false]
  ];
  setPlayerStage(`
    <section class="lesson-step">
      <div class="step-card">
        <p class="step-kicker">${playerText("最终检查", "Final check")}</p>
        <h3>${playerText("哪一句抓住了 Lecture 3 的重点？", "Which statement captures the key point of Lecture 3?")}</h3>
      </div>
      <div class="choice-grid">
        ${options.map((option, index) => `<button class="choice-card" type="button" data-correct="${option[1]}" data-index="${index}"><strong>${option[0]}</strong></button>`).join("")}
      </div>
      <div class="feedback-panel" id="playerFeedback"></div>
      <div class="step-actions"><button class="ghost-button" id="l3FinalContinue" type="button" disabled>${playerLabel("next")}</button></div>
    </section>
  `);
  document.querySelectorAll(".choice-card").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".choice-card").forEach((item) => item.classList.remove("correct", "wrong"));
      const correct = button.dataset.correct === "true";
      button.classList.add(correct ? "correct" : "wrong");
      if (correct) {
        const xp = awardStep("l3-final", 15);
        showPlayerFeedback(true, playerText("对。Lecture 3 最重要的桥就是：特征可以非线性，参数形式仍可线性。", "Correct. The key bridge in Lecture 3 is that features can be nonlinear while the parameter form remains linear."), xp);
        $("#l3FinalContinue").disabled = false;
      } else {
        loseHeart();
        showPlayerFeedback(false, playerText("想想刚才的 degree slider：弯的是输入特征，不是参数线性结构。", "Think about the degree slider: the input features bend, not the linear-in-parameters structure."));
      }
    });
  });
  $("#l3FinalContinue").addEventListener("click", nextLectureOneStep);
}

function setupLessonEvents() {
  $("#searchInput").addEventListener("input", renderLessonList);
  $("#doneToggle").addEventListener("change", (event) => {
    const id = state.activeLecture;
    if (event.target.checked) {
      state.completed.add(id);
    } else {
      state.completed.delete(id);
    }
    saveProgress();
    updateProgress();
    renderLessonList();
  });
  $("#revealAnswerButton").addEventListener("click", () => {
    const answer = $("#quizAnswer");
    const visible = answer.classList.toggle("visible");
    $("#revealAnswerButton").textContent = visible ? copy().hideAnswer : copy().reveal;
  });
  $("#resetProgressButton").addEventListener("click", () => {
    state.completed.clear();
    saveProgress();
    renderLesson();
    renderLessonList();
  });
  $("#togglePdfButton").addEventListener("click", () => {
    const preview = $("#previewBody");
    const hidden = preview.classList.toggle("hidden-preview");
    $("#togglePdfButton").textContent = hidden ? copy().showPreview : copy().hidePreview;
  });
  $("#changeLanguageButton").addEventListener("click", openLanguageGate);
  $("#startInteractiveButton").addEventListener("click", () => openInteractivePlayer(state.activeLecture));
  $("#closePlayerButton").addEventListener("click", closeLectureOnePlayer);
  document.querySelectorAll(".language-option").forEach((button) => {
    button.addEventListener("click", () => selectLanguage(button.dataset.lang));
  });
}

function getCanvasContext(id) {
  const canvas = $(id);
  const rect = canvas.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  canvas.width = Math.max(320, Math.floor(rect.width * dpr));
  canvas.height = Math.max(260, Math.floor(rect.height * dpr));
  const ctx = canvas.getContext("2d");
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  return { canvas, ctx, width: rect.width, height: rect.height };
}

function deterministicPoints() {
  const points = [];
  let seed = 17;
  const next = () => {
    seed = (seed * 1103515245 + 12345) % 2147483648;
    return seed / 2147483648;
  };
  for (let i = 0; i < 42; i += 1) {
    const x = next() * 2 - 1;
    const y = next() * 2 - 1;
    const noise = (next() - 0.5) * 0.35;
    const label = x * 0.9 - y * 0.65 + noise > 0 ? 1 : -1;
    points.push({ x, y, label });
  }
  return points;
}

const linearPoints = deterministicPoints();

function drawLinearLab() {
  if (state.activeLab !== "linear") return;
  const { ctx, width, height } = getCanvasContext("#linearCanvas");
  const w1 = Number($("#linearW1").value);
  const w2 = Number($("#linearW2").value);
  const b = Number($("#linearBias").value);
  const pad = 34;
  const sx = (x) => pad + ((x + 1.2) / 2.4) * (width - pad * 2);
  const sy = (y) => height - pad - ((y + 1.2) / 2.4) * (height - pad * 2);
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#fbfaf5";
  ctx.fillRect(0, 0, width, height);
  ctx.strokeStyle = "#ddd4c4";
  ctx.lineWidth = 1;
  for (let i = -1; i <= 1; i += 0.5) {
    ctx.beginPath();
    ctx.moveTo(sx(-1.2), sy(i));
    ctx.lineTo(sx(1.2), sy(i));
    ctx.moveTo(sx(i), sy(-1.2));
    ctx.lineTo(sx(i), sy(1.2));
    ctx.stroke();
  }

  function linePoints(offset) {
    const yLeft = (-w1 * -1.2 - b + offset) / w2;
    const yRight = (-w1 * 1.2 - b + offset) / w2;
    return [sx(-1.2), sy(yLeft), sx(1.2), sy(yRight)];
  }

  if (Math.abs(w2) > 0.02) {
    ctx.strokeStyle = "rgba(24, 123, 119, 0.22)";
    ctx.lineWidth = 2;
    [-0.45, 0.45].forEach((offset) => {
      const p = linePoints(offset);
      ctx.beginPath();
      ctx.moveTo(p[0], p[1]);
      ctx.lineTo(p[2], p[3]);
      ctx.stroke();
    });
    const p = linePoints(0);
    ctx.strokeStyle = "#187b77";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(p[0], p[1]);
    ctx.lineTo(p[2], p[3]);
    ctx.stroke();
  } else {
    const x = -b / w1;
    ctx.strokeStyle = "#187b77";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(sx(x), sy(-1.2));
    ctx.lineTo(sx(x), sy(1.2));
    ctx.stroke();
  }

  let correct = 0;
  let hinge = 0;
  linearPoints.forEach((point) => {
    const score = w1 * point.x + w2 * point.y + b;
    const pred = score >= 0 ? 1 : -1;
    if (pred === point.label) correct += 1;
    hinge += Math.max(0, 1 - point.label * score);
    ctx.beginPath();
    ctx.arc(sx(point.x), sy(point.y), 6, 0, Math.PI * 2);
    ctx.fillStyle = point.label > 0 ? "#2867b2" : "#b64b45";
    ctx.globalAlpha = pred === point.label ? 0.9 : 0.35;
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.strokeStyle = pred === point.label ? "#1f2523" : "#b64b45";
    ctx.lineWidth = pred === point.label ? 1 : 2;
    ctx.stroke();
  });

  $("#linearMetrics").textContent = `accuracy ${(correct / linearPoints.length * 100).toFixed(0)}% · average hinge loss ${(hinge / linearPoints.length).toFixed(2)}`;
}

function logGamma(z) {
  const coeffs = [676.5203681218851, -1259.1392167224028, 771.3234287776531, -176.6150291621406, 12.507343278686905, -0.13857109526572012, 9.984369578019572e-6, 1.5056327351493116e-7];
  if (z < 0.5) return Math.log(Math.PI) - Math.log(Math.sin(Math.PI * z)) - logGamma(1 - z);
  let x = 0.9999999999998099;
  const shifted = z - 1;
  coeffs.forEach((c, i) => {
    x += c / (shifted + i + 1);
  });
  const t = shifted + coeffs.length - 0.5;
  return 0.5 * Math.log(2 * Math.PI) + (shifted + 0.5) * Math.log(t) - t + Math.log(x);
}

function betaPdf(x, a, b) {
  if (x <= 0 || x >= 1) return 0;
  const logBeta = logGamma(a) + logGamma(b) - logGamma(a + b);
  return Math.exp((a - 1) * Math.log(x) + (b - 1) * Math.log(1 - x) - logBeta);
}

function drawBayesLab() {
  if (state.activeLab !== "bayes") return;
  const { ctx, width, height } = getCanvasContext("#bayesCanvas");
  const alpha = Number($("#alphaInput").value);
  const beta = Number($("#betaInput").value);
  const success = Number($("#successInput").value);
  const failure = Number($("#failureInput").value);
  const postA = alpha + success;
  const postB = beta + failure;
  const pad = 42;
  const xs = Array.from({ length: 160 }, (_, i) => (i + 1) / 162);
  const prior = xs.map((x) => betaPdf(x, alpha, beta));
  const posterior = xs.map((x) => betaPdf(x, postA, postB));
  const maxY = Math.max(...prior, ...posterior) * 1.08;
  const sx = (x) => pad + x * (width - pad * 2);
  const sy = (y) => height - pad - (y / maxY) * (height - pad * 2);
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#fbfaf5";
  ctx.fillRect(0, 0, width, height);
  ctx.strokeStyle = "#d9d0bf";
  ctx.beginPath();
  ctx.moveTo(pad, pad);
  ctx.lineTo(pad, height - pad);
  ctx.lineTo(width - pad, height - pad);
  ctx.stroke();

  function plot(values, color, lineWidth) {
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    values.forEach((value, i) => {
      const x = sx(xs[i]);
      const y = sy(value);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();
  }

  plot(prior, "#b86f1d", 2);
  plot(posterior, "#187b77", 3);
  ctx.fillStyle = "#1f2523";
  ctx.font = "13px system-ui";
  ctx.fillText("prior", width - 112, pad + 6);
  ctx.fillStyle = "#b86f1d";
  ctx.fillRect(width - 152, pad - 3, 30, 4);
  ctx.fillStyle = "#1f2523";
  ctx.fillText("posterior", width - 112, pad + 28);
  ctx.fillStyle = "#187b77";
  ctx.fillRect(width - 152, pad + 19, 30, 4);
  ctx.fillStyle = "#66726e";
  ctx.fillText("p", width - pad + 8, height - pad + 4);
  ctx.fillText("0", pad - 4, height - pad + 20);
  ctx.fillText("1", width - pad - 4, height - pad + 20);

  const mean = postA / (postA + postB);
  $("#bayesMetrics").textContent = `posterior Beta(${postA}, ${postB}) · mean ${mean.toFixed(3)} · observations ${success + failure}`;
}

const bandit = {
  truth: [0.26, 0.54, 0.72],
  pulls: [0, 0, 0],
  rewards: [0, 0, 0],
  totalReward: 0,
  totalPulls: 0,
  regret: 0
};

function resetBandit() {
  bandit.pulls = [0, 0, 0];
  bandit.rewards = [0, 0, 0];
  bandit.totalReward = 0;
  bandit.totalPulls = 0;
  bandit.regret = 0;
}

function chooseArm() {
  const policy = $("#banditPolicy").value;
  const epsilon = Number($("#epsilonInput").value);
  if (bandit.totalPulls < bandit.truth.length) return bandit.totalPulls;
  if (policy === "epsilon" && Math.random() < epsilon) {
    return Math.floor(Math.random() * bandit.truth.length);
  }
  const scores = bandit.truth.map((_, i) => {
    const mean = bandit.rewards[i] / Math.max(1, bandit.pulls[i]);
    if (policy === "ucb") {
      return mean + Math.sqrt((2 * Math.log(Math.max(2, bandit.totalPulls))) / Math.max(1, bandit.pulls[i]));
    }
    return mean;
  });
  return scores.indexOf(Math.max(...scores));
}

function runBanditStep(times = 1) {
  for (let i = 0; i < times; i += 1) {
    const arm = chooseArm();
    const reward = Math.random() < bandit.truth[arm] ? 1 : 0;
    bandit.pulls[arm] += 1;
    bandit.rewards[arm] += reward;
    bandit.totalReward += reward;
    bandit.totalPulls += 1;
    bandit.regret += Math.max(...bandit.truth) - bandit.truth[arm];
  }
  drawBanditLab();
}

function drawBanditLab() {
  if (state.activeLab !== "bandit") return;
  const { ctx, width, height } = getCanvasContext("#banditCanvas");
  const pad = 42;
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#fbfaf5";
  ctx.fillRect(0, 0, width, height);
  ctx.strokeStyle = "#d9d0bf";
  ctx.beginPath();
  ctx.moveTo(pad, pad);
  ctx.lineTo(pad, height - pad);
  ctx.lineTo(width - pad, height - pad);
  ctx.stroke();
  const barWidth = (width - pad * 2) / 8;
  bandit.truth.forEach((truth, i) => {
    const x = pad + 36 + i * barWidth * 2.1;
    const estimate = bandit.rewards[i] / Math.max(1, bandit.pulls[i]);
    const truthHeight = truth * (height - pad * 2);
    const estHeight = estimate * (height - pad * 2);
    ctx.fillStyle = "rgba(40, 103, 178, 0.28)";
    ctx.fillRect(x, height - pad - truthHeight, barWidth, truthHeight);
    ctx.fillStyle = "#187b77";
    ctx.fillRect(x + barWidth + 5, height - pad - estHeight, barWidth, estHeight);
    ctx.fillStyle = "#1f2523";
    ctx.font = "13px system-ui";
    ctx.fillText(`arm ${i + 1}`, x, height - pad + 20);
    ctx.fillStyle = "#66726e";
    ctx.fillText(`${bandit.pulls[i]} pulls`, x, height - pad + 38);
  });
  ctx.fillStyle = "rgba(40, 103, 178, 0.28)";
  ctx.fillRect(width - 160, pad, 24, 12);
  ctx.fillStyle = "#1f2523";
  ctx.fillText("true rate", width - 128, pad + 11);
  ctx.fillStyle = "#187b77";
  ctx.fillRect(width - 160, pad + 24, 24, 12);
  ctx.fillStyle = "#1f2523";
  ctx.fillText("estimate", width - 128, pad + 35);

  const avg = bandit.totalReward / Math.max(1, bandit.totalPulls);
  $("#banditMetrics").textContent = `pulls ${bandit.totalPulls} · total reward ${bandit.totalReward} · average ${avg.toFixed(3)} · regret ${bandit.regret.toFixed(2)}`;
}

function buildGmmData() {
  const data = [];
  let seed = 41;
  const next = () => {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return seed / 4294967296;
  };
  const normal = (mean, std) => {
    const u1 = Math.max(1e-6, next());
    const u2 = next();
    return mean + std * Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
  };
  for (let i = 0; i < 90; i += 1) data.push(normal(-1.15, 0.45));
  for (let i = 0; i < 70; i += 1) data.push(normal(1.05, 0.58));
  return data;
}

const gmm = {
  data: buildGmmData(),
  means: [-1.7, 1.5],
  weights: [0.5, 0.5],
  variance: 0.32,
  step: 0,
  logLikelihood: 0
};

function normalPdf(x, mean, variance) {
  return Math.exp(-((x - mean) ** 2) / (2 * variance)) / Math.sqrt(2 * Math.PI * variance);
}

function resetGmm() {
  gmm.means = [Number($("#meanAInput").value), Number($("#meanBInput").value)];
  gmm.weights = [0.5, 0.5];
  gmm.variance = 0.32;
  gmm.step = 0;
  gmm.logLikelihood = 0;
}

function runEmStep() {
  const responsibilities = gmm.data.map((x) => {
    const a = gmm.weights[0] * normalPdf(x, gmm.means[0], gmm.variance);
    const b = gmm.weights[1] * normalPdf(x, gmm.means[1], gmm.variance);
    const total = a + b;
    return [a / total, b / total];
  });
  [0, 1].forEach((k) => {
    const nk = responsibilities.reduce((sum, row) => sum + row[k], 0);
    gmm.weights[k] = nk / gmm.data.length;
    gmm.means[k] = gmm.data.reduce((sum, x, i) => sum + responsibilities[i][k] * x, 0) / nk;
  });
  const varianceNumerator = gmm.data.reduce((sum, x, i) => {
    return sum + responsibilities[i][0] * ((x - gmm.means[0]) ** 2) + responsibilities[i][1] * ((x - gmm.means[1]) ** 2);
  }, 0);
  gmm.variance = Math.max(0.08, varianceNumerator / gmm.data.length);
  gmm.logLikelihood = gmm.data.reduce((sum, x) => {
    const px = gmm.weights[0] * normalPdf(x, gmm.means[0], gmm.variance) + gmm.weights[1] * normalPdf(x, gmm.means[1], gmm.variance);
    return sum + Math.log(px);
  }, 0);
  gmm.step += 1;
  $("#meanAInput").value = gmm.means[0].toFixed(1);
  $("#meanBInput").value = gmm.means[1].toFixed(1);
  drawEmLab();
}

function drawEmLab() {
  if (state.activeLab !== "em") return;
  const { ctx, width, height } = getCanvasContext("#emCanvas");
  const pad = 42;
  const minX = -3.2;
  const maxX = 3.2;
  const sx = (x) => pad + ((x - minX) / (maxX - minX)) * (width - pad * 2);
  const sy = (y) => height - pad - y * (height - pad * 2);
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#fbfaf5";
  ctx.fillRect(0, 0, width, height);
  ctx.strokeStyle = "#d9d0bf";
  ctx.beginPath();
  ctx.moveTo(pad, pad);
  ctx.lineTo(pad, height - pad);
  ctx.lineTo(width - pad, height - pad);
  ctx.stroke();

  const bins = Array.from({ length: 34 }, () => 0);
  gmm.data.forEach((x) => {
    const index = Math.max(0, Math.min(bins.length - 1, Math.floor(((x - minX) / (maxX - minX)) * bins.length)));
    bins[index] += 1;
  });
  const maxBin = Math.max(...bins);
  bins.forEach((count, i) => {
    const x = pad + (i / bins.length) * (width - pad * 2);
    const bw = (width - pad * 2) / bins.length - 2;
    const h = (count / maxBin) * (height - pad * 2) * 0.58;
    ctx.fillStyle = "rgba(102, 114, 110, 0.24)";
    ctx.fillRect(x, height - pad - h, bw, h);
  });

  function plotComponent(k, color) {
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.beginPath();
    for (let i = 0; i <= 180; i += 1) {
      const x = minX + (i / 180) * (maxX - minX);
      const y = Math.min(1, gmm.weights[k] * normalPdf(x, gmm.means[k], gmm.variance) * 1.25);
      if (i === 0) ctx.moveTo(sx(x), sy(y));
      else ctx.lineTo(sx(x), sy(y));
    }
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(sx(gmm.means[k]), height - pad, 5, 0, Math.PI * 2);
    ctx.fill();
  }

  plotComponent(0, "#2867b2");
  plotComponent(1, "#b64b45");
  $("#emMetrics").textContent = `step ${gmm.step} · means ${gmm.means.map((m) => m.toFixed(2)).join(", ")} · variance ${gmm.variance.toFixed(2)} · log-likelihood ${gmm.logLikelihood.toFixed(1)}`;
}

function setupLabEvents() {
  ["linearW1", "linearW2", "linearBias"].forEach((id) => $(`#${id}`).addEventListener("input", drawLinearLab));
  ["alphaInput", "betaInput", "successInput", "failureInput"].forEach((id) => $(`#${id}`).addEventListener("input", drawBayesLab));
  $("#banditStepButton").addEventListener("click", () => runBanditStep(1));
  $("#banditBurstButton").addEventListener("click", () => runBanditStep(50));
  $("#banditResetButton").addEventListener("click", () => {
    resetBandit();
    drawBanditLab();
  });
  $("#banditPolicy").addEventListener("change", drawBanditLab);
  $("#epsilonInput").addEventListener("input", drawBanditLab);
  $("#emStepButton").addEventListener("click", runEmStep);
  $("#emResetButton").addEventListener("click", () => {
    resetGmm();
    drawEmLab();
  });
  ["meanAInput", "meanBInput"].forEach((id) => $(`#${id}`).addEventListener("input", () => {
    resetGmm();
    drawEmLab();
  }));
  window.addEventListener("resize", () => {
    drawLinearLab();
    drawBayesLab();
    drawBanditLab();
    drawEmLab();
  });
}

function init() {
  setupLessonEvents();
  setupLabEvents();
  openLanguageGate();
}

init();
