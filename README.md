# 🔮 神秘塔罗 - 塔罗牌占卜应用

一个精美的塔罗牌占卜应用，采用神秘风格设计，支持移动端访问，可免费部署到 GitHub Pages 或 Vercel。

## ✨ 功能特点

- **精美神秘风格**：深色主题，星空背景，金色点缀
- **22张大阿卡纳牌**：完整的塔罗牌库
- **交互式体验**：流畅的动画和转场效果
- **移动端适配**：完美支持手机和平板
- **个性化占卜**：支持用户输入问题
- **即时反馈**：快速显示占卜结果
- **无需后端**：纯前端实现，部署简单

## 🎯 占卜流程

1. **开始占卜**：点击首页的卡牌
2. **专注问题**：可输入你想要询问的问题
3. **选择卡牌**：从9张随机卡牌中选择一张
4. **查看结果**：获取详细的卡牌解读和建议

## 🚀 部署指南

### 方法一：GitHub Pages（推荐）

#### 步骤 1：创建 GitHub 仓库
```bash
# 1. 访问 github.com，点击 "New repository"
# 2. 仓库名称：tarot-divination
# 3. 选择 "Public"
# 4. 勾选 "Add a README file"
# 5. 点击 "Create repository"
```

#### 步骤 2：上传文件
```bash
# 1. 在仓库页面点击 "Add file" -> "Upload files"
# 2. 拖拽或选择以下文件上传：
#    - index.html
#    - style.css
#    - script.js
# 3. 点击 "Commit changes"
```

#### 步骤 3：启用 GitHub Pages
```bash
# 1. 进入仓库的 "Settings"
# 2. 左侧菜单选择 "Pages"
# 3. 在 "Source" 下选择：
#    - Branch: main (或 master)
#    - Folder: / (root)
# 4. 点击 "Save"
# 5. 等待 1-2 分钟，你的网站将在：
#    https://yourusername.github.io/tarot-divination/
```

### 方法二：Vercel（更快速）

#### 步骤 1：准备代码
```bash
# 确保你的项目文件夹包含：
# - index.html
# - style.css
# - script.js
```

#### 步骤 2：部署到 Vercel
```bash
# 1. 访问 vercel.com 并登录（使用 GitHub 账号）
# 2. 点击 "Add New..." -> "Project"
# 3. 选择 "Import Git Repository"
# 4. 授权并选择你的项目
# 5. 点击 "Deploy"
# 6. 等待部署完成，即可获得网址
```

### 方法三：Netlify

#### 步骤 1：拖拽部署
```bash
# 1. 访问 netlify.com
# 2. 注册/登录
# 3. 在仪表盘点击 "Add new site" -> "Deploy manually"
# 4. 拖拽整个项目文件夹到指定区域
# 5. 等待部署完成
```

## 📁 项目结构

```
tarot-divination/
├── index.html          # 主页面 HTML
├── style.css           # 样式文件（神秘风格）
├── script.js           # JavaScript 逻辑
└── README.md           # 说明文档
```

## 🎨 自定义修改

### 修改卡牌数据
在 `script.js` 中找到 `tarotCards` 数组，可以：
- 修改现有牌的解读
- 添加新牌
- 调整牌的数量

### 修改样式
在 `style.css` 中可以调整：
- 主题颜色：修改 `:root` 变量
- 字体：替换 Google Fonts 链接
- 动画效果：调整 `@keyframes`

### 修改界面文本
直接在 `index.html` 中修改：
- 标题文字
- 按钮文本
- 说明文字

## 🔧 技术栈

- **HTML5**: 语义化结构
- **CSS3**: Flexbox/Grid 布局，CSS 变量，动画
- **JavaScript ES6+**: 现代 JS 特性
- **Google Fonts**: Cinzel 和 Noto Serif SC 字体
- **无依赖**: 不使用任何第三方库

## 📱 响应式设计

- **桌面端** (> 768px): 3x3 卡牌网格
- **平板端** (480px - 768px): 2x2 卡牌网格
- **手机端** (< 480px): 1x1 卡牌列表

## 🎭 功能细节

### 背景动画
- **星空闪烁**: 随机分布的星星，随机闪烁动画
- **漂浮粒子**: 15个粒子从下到上漂浮
- **动画同步**: 所有动画使用 CSS 关键帧

### 卡牌交互
- **悬停效果**: 放大、发光、轻微旋转
- **选择反馈**: 脉冲动画，颜色高亮
- **延迟动画**: 卡牌逐个出现，营造神秘感

### 结果展示
- **翻牌动画**: 卡牌从背面翻转到正面
- **个性化**: 如果输入问题，会包含在解读中
- **详细信息**: 名称、编号、意义、建议

## 🛡️ 隐私保护

- **无数据收集**: 不收集任何用户数据
- **无后端请求**: 所有计算在本地完成
- **无需登录**: 完全匿名使用
- **离线支持**: 可保存为 PWA 使用

## 💡 使用建议

### 个人使用
- 每日一牌：作为晨间指引
- 决策辅助：遇到选择时寻求启发
- 自我反思：通过牌意了解内心状态

### 商业用途
- 占卜服务网站的基础
- 可作为付费占卜的免费体验版
- 增加用户粘性的趣味功能

## 🔗 相关链接

- **GitHub Pages 文档**: https://docs.github.com/en/pages
- **Vercel 文档**: https://vercel.com/docs
- **Netlify 文档**: https://docs.netlify.com

## 📝 许可证

本项目完全开源，可自由使用、修改和部署。

---

**祝您占卜愉快！愿指引之光照亮您的道路。** 🔮✨

---

### 快速开始

如果你已经准备好了，只需要：

1. ✅ 创建 GitHub 仓库
2. ✅ 上传这 3 个文件
3. ✅ 启用 GitHub Pages
4. ✅ 访问你的网站

**总耗时：约 2 分钟** ⚡