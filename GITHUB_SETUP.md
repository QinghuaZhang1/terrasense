# 📋 GitHub 项目设置指南

本文档将帮助你完成在 GitHub 上发布项目的所有步骤。

## ✅ 已完成的准备工作

我已经为你创建了以下文件：

1. ✅ **README.md** - 详细的项目介绍和使用说明
2. ✅ **env.example** - 环境变量模板文件
3. ✅ **DEPLOYMENT.md** - 部署指南
4. ✅ **.github/workflows/deploy.yml** - GitHub Actions 自动部署配置

## 🚀 下一步操作

### 1. 初始化 Git 仓库（如果还没有）

```bash
git init
git add .
git commit -m "Initial commit: TerraSense project"
```

### 2. 在 GitHub 上创建新仓库

1. 访问 [GitHub](https://github.com) 并登录
2. 点击右上角的 "+" 号，选择 "New repository"
3. 填写仓库信息：
   - **Repository name**: `terrasense` (或你喜欢的名字)
   - **Description**: `TerraSense - Earth Intelligence: 8B Remote Sensing Foundation Model`
   - **Visibility**: 选择 Public 或 Private
   - **不要**勾选 "Initialize this repository with a README"（因为我们已经有了）

### 3. 连接本地仓库到 GitHub

```bash
git remote add origin https://github.com/your-username/terrasense.git
git branch -M main
git push -u origin main
```

> 将 `your-username` 和 `terrasense` 替换为你的实际 GitHub 用户名和仓库名

### 4. 配置 GitHub Pages（可选）

如果你想使用 GitHub Pages 托管网站：

#### 方法 A: 使用 GitHub Actions（推荐，已配置）

1. 进入仓库的 **Settings** > **Pages**
2. 在 "Source" 下选择 **"GitHub Actions"**
3. 每次推送到 `main` 分支时，会自动构建并部署

#### 方法 B: 手动部署

1. 安装 gh-pages：
   ```bash
   npm install --save-dev gh-pages
   ```

2. 更新 `package.json`：
   ```json
   {
     "homepage": "https://your-username.github.io/terrasense",
     "scripts": {
       "deploy": "npm run build && gh-pages -d dist"
     }
   }
   ```

3. 更新 `vite.config.ts`，取消注释并设置 base：
   ```typescript
   base: '/terrasense/', // 替换为你的仓库名
   ```

4. 运行部署：
   ```bash
   npm run deploy
   ```

### 5. 更新 README.md 中的链接

在 `README.md` 中，找到以下位置并更新：

- 第 1 行：`git clone` 命令中的 URL
- 第 2 行：`homepage` 字段（如果使用 GitHub Pages）
- 底部：GitHub 链接和联系方式

### 6. 添加项目标签和主题

在 GitHub 仓库页面，点击 ⚙️ 图标，可以：
- 添加 Topics（标签）：`react`, `typescript`, `vite`, `remote-sensing`, `ai`, `gemini`
- 添加 Description（描述）
- 选择 License（许可证）

### 7. 创建 Release（可选）

1. 进入仓库的 **Releases** 页面
2. 点击 **"Create a new release"**
3. 填写版本号（如 `v1.0.0`）
4. 添加发布说明
5. 发布

## 📝 重要提示

### 环境变量安全

⚠️ **不要**将 `.env.local` 文件提交到 Git！

`.gitignore` 已经配置为忽略 `*.local` 文件，但请确认：
- `.env.local` 不在仓库中
- 只提交 `env.example` 作为模板

### API Key 管理

对于生产环境，建议：
- 使用后端代理 API 请求
- 或使用环境变量（Vercel/Netlify 等平台支持）
- GitHub Pages 不支持服务端环境变量，需要其他方案

## 🎨 美化仓库

### 添加徽章（可选）

可以在 README.md 顶部添加更多徽章，例如：

```markdown
![GitHub stars](https://img.shields.io/github/stars/your-username/terrasense)
![GitHub forks](https://img.shields.io/github/forks/your-username/terrasense)
![GitHub issues](https://img.shields.io/github/issues/your-username/terrasense)
```

### 添加截图

可以在 README.md 中添加项目截图，展示界面效果。

## 🔍 检查清单

在推送代码前，确认：

- [ ] `.env.local` 已添加到 `.gitignore`
- [ ] `env.example` 已创建并提交
- [ ] README.md 中的链接已更新
- [ ] package.json 中的信息正确
- [ ] 所有文件已提交
- [ ] 代码可以正常运行（`npm run dev`）

## 📚 相关资源

- [GitHub 文档](https://docs.github.com/)
- [GitHub Pages 文档](https://docs.github.com/pages)
- [Git 基础教程](https://git-scm.com/book)

---

完成以上步骤后，你的项目就可以在 GitHub 上完美展示了！🎉

