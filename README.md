# COMP90051 Statistical Machine Learning 学习站

这是一个本地静态学习网站，把 `infinityglow/COMP90051-Statistical-Machine-Learning` 的 lecture slides 按讲义顺序整理成从 0 开始的学习路径。进入网站后会先选择学习模式：双语版或纯英文版。

## 使用

直接打开 `index.html` 可以浏览；更推荐启动本地服务：

```bash
python3 -m http.server 4173
```

然后访问 `http://localhost:4173`。

## 内容结构

- `index.html`：页面结构
- `styles.css`：界面样式
- `app.js`：课程数据、进度保存、交互实验
- `assets/lectures/`：24 个 lecture PDF，本地预览使用
- `assets/source-data/README.md`：原仓库 README 备份

## 学习路线

网站把 24 讲分成四段：基础、神经网络、决策与贝叶斯、PGM 与 EM。每讲包含学习目标、预备知识、练习、检查点和本地 PDF 入口。交互实验覆盖线性分类器、贝叶斯更新、multi-armed bandit、GMM/EM。

## 语言模式

- `Bilingual`：中文解释 + 英文课程表达，适合先理解概念。
- `English Only`：纯英文界面和课程文案，适合训练英文 lecture note 阅读。

## Lecture 1-3 互动课

Lecture 1-3 现在有单独的互动 lesson player。进入对应 lecture 后点击 `开始互动课`，会进入关卡式练习。

Lecture 1:

- 概率符号选择题
- 数学符号匹配
- 条件概率人群模型
- 可拖拽向量投影模型
- 序列收敛滑杆
- 最终 mastery check

Lecture 2:

- 统计学派识别
- 生成式/判别式、参数/非参数模型地图
- decision-theoretic loss matrix 和阈值模型
- 最终 mastery check

Lecture 3:

- 手动调 slope/intercept 拟合线性回归
- MSE loss surface 热力图
- polynomial basis expansion 复杂度滑杆
- 最终 mastery check
