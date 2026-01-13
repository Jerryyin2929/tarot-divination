#!/bin/bash

# 🔮 神秘塔罗 - 快速部署脚本
# 这个脚本可以帮助你快速部署到 GitHub Pages

echo "🔮 欢迎使用神秘塔罗部署助手！"
echo ""

# 检查是否已安装 git
if ! command -v git &> /dev/null; then
    echo "❌ 未检测到 Git，请先安装 Git"
    echo "访问: https://git-scm.com/downloads"
    exit 1
fi

# 检查当前目录是否已有项目
if [ -f "index.html" ] && [ -f "style.css" ] && [ -f "script.js" ]; then
    echo "✅ 检测到项目文件，开始部署流程..."
else
    echo "❌ 未找到项目文件，请确保在正确的目录下运行"
    echo "需要的文件: index.html, style.css, script.js"
    exit 1
fi

# 询问 GitHub 用户名
read -p "请输入你的 GitHub 用户名: " GITHUB_USERNAME

if [ -z "$GITHUB_USERNAME" ]; then
    echo "❌ GitHub 用户名不能为空"
    exit 1
fi

# 仓库名称
REPO_NAME="tarot-divination"
FULL_REPO="${GITHUB_USERNAME}/${REPO_NAME}"

echo ""
echo "📦 准备创建仓库: ${FULL_REPO}"
echo ""

# 创建本地 git 仓库
echo "1️⃣  初始化 Git 仓库..."
git init
git config user.name "${GITHUB_USERNAME}"
git config user.email "${GITHUB_USERNAME}@users.noreply.github.com"

# 添加文件
echo "2️⃣  添加项目文件..."
git add index.html style.css script.js README.md

# 创建初始提交
echo "3️⃣  创建提交..."
git commit -m "✨ 初始提交：神秘塔罗占卜应用"

# 设置默认分支
echo "4️⃣  设置主分支..."
git branch -M main

echo ""
echo "🚨 重要提示："
echo "你需要手动完成以下步骤来创建远程仓库："
echo ""
echo "步骤 1: 访问 https://github.com/new"
echo "步骤 2: 创建名为 '${REPO_NAME}' 的仓库"
echo "步骤 3: 选择 'Public'"
echo "步骤 4: 不要勾选 'Initialize this repository with a README'"
echo "步骤 5: 点击 'Create repository'"
echo ""
echo "步骤 6: 运行以下命令（复制粘贴）："
echo ""
echo "   git remote add origin https://github.com/${FULL_REPO}.git"
echo "   git push -u origin main"
echo ""
echo "步骤 7: 启用 GitHub Pages"
echo "   - 访问: https://github.com/${FULL_REPO}/settings/pages"
echo "   - Source: main branch, / (root)"
echo "   - 点击 'Save'"
echo ""
echo "🚀 你的网站将在: https://${GITHUB_USERNAME}.github.io/${REPO_NAME}/"
echo ""
echo "💡 提示：首次部署后，GitHub Pages 可能需要 1-2 分钟才能生效。"
echo ""
echo "祝你部署顺利！🔮✨"