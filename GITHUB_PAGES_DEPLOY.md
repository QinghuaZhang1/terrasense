# 🚀 GitHub Pages 完整部署指南

本指南将帮助你将 TerraSense 项目部署到 GitHub Pages，实现与本地 `http://localhost:3000` 完全相同的效果。

## 📋 部署前准备

### 1. 确认项目信息

- **GitHub 用户名**: `QinghuaZhang1`
- **仓库名称**: `terrasense`
- **部署后的访问地址**: `https://qinghuazhang1.github.io/terrasense`

> 💡 **重要**: 如果你要部署到其他仓库，请记住：
> - 仓库名不同时，需要修改 `vite.config.ts` 中的 `base` 路径
> - 仓库名不同时，需要修改 `package.json` 中的 `homepage` 字段

## 🔧 步骤 1: 配置项目文件

### 1.1 更新 vite.config.ts

确保 `vite.config.ts` 中的 `base` 路径正确：

```typescript
base: '/terrasense/',  // 仓库名是 terrasense
```

**如果部署到其他仓库**，例如仓库名是 `my-terrasense`，则改为：
```typescript
base: '/my-terrasense/',
```

### 1.2 更新 package.json

确保 `package.json` 中的 `homepage` 字段正确：

```json
"homepage": "https://qinghuazhang1.github.io/terrasense"
```

**如果部署到其他仓库**，例如用户名是 `your-username`，仓库名是 `my-repo`，则改为：
```json
"homepage": "https://your-username.github.io/my-repo"
```

## 📦 步骤 2: 安装部署工具（方法一：手动部署）

如果你想手动部署，需要安装 `gh-pages`：

```bash
npm install --save-dev gh-pages
```

然后运行：
```bash
npm run deploy
```

## 🤖 步骤 3: 使用 GitHub Actions 自动部署（推荐）

### 3.1 检查 GitHub Actions 工作流

项目已包含 `.github/workflows/deploy.yml` 文件，这是自动部署配置。

### 3.2 在 GitHub 上启用 Pages

1. **打开你的 GitHub 仓库**: https://github.com/QinghuaZhang1/terrasense

2. **进入 Settings（设置）**
   - 点击仓库页面顶部的 "Settings" 标签

3. **找到 Pages 设置**
   - 在左侧菜单中找到 "Pages"
   - 或直接访问: https://github.com/QinghuaZhang1/terrasense/settings/pages

4. **配置 Pages 源**
   - 在 "Source" 部分，选择 **"GitHub Actions"**
   - 不要选择 "Deploy from a branch"

5. **保存设置**

### 3.3 推送代码触发部署

```bash
# 确保所有更改已提交
git add .
git commit -m "Configure for GitHub Pages deployment"

# 推送到 GitHub
git push origin main
```

### 3.4 查看部署状态

1. 进入仓库的 **Actions** 标签页
2. 你会看到 "Deploy to GitHub Pages" 工作流正在运行
3. 等待部署完成（通常需要 2-5 分钟）
4. 部署成功后，访问: https://qinghuazhang1.github.io/terrasense

## 🔄 步骤 4: 验证部署

### 4.1 访问网站

部署完成后，访问：
- **主页**: https://qinghuazhang1.github.io/terrasense
- **Showcase 页面**: https://qinghuazhang1.github.io/terrasense/#showcase

### 4.2 检查功能

- ✅ 页面正常加载
- ✅ 导航栏工作正常
- ✅ 所有组件显示正确
- ✅ 路由和锚点链接正常（如 `#showcase`）

## 🛠️ 部署到其他 GitHub 仓库

如果你想将项目部署到**其他 GitHub 仓库**，按以下步骤操作：

### 方案 A: 部署到新仓库（相同用户名）

1. **创建新仓库**（例如：`terrasense-v2`）

2. **修改 vite.config.ts**
   ```typescript
   base: '/terrasense-v2/',  // 改为新仓库名
   ```

3. **修改 package.json**
   ```json
   "homepage": "https://qinghuazhang1.github.io/terrasense-v2"
   ```

4. **更新远程仓库**
   ```bash
   git remote set-url origin https://github.com/QinghuaZhang1/terrasense-v2.git
   git push origin main
   ```

5. **在新仓库中启用 GitHub Pages**（Settings > Pages > Source: GitHub Actions）

### 方案 B: 部署到不同用户的仓库

1. **创建新仓库**（例如：用户名 `other-user`，仓库名 `terrasense`）

2. **修改 vite.config.ts**
   ```typescript
   base: '/terrasense/',  // 仓库名
   ```

3. **修改 package.json**
   ```json
   "homepage": "https://other-user.github.io/terrasense"
   ```

4. **添加新的远程仓库**
   ```bash
   git remote add other-origin https://github.com/other-user/terrasense.git
   git push other-origin main
   ```

5. **在新仓库中启用 GitHub Pages**

## 📝 常见问题解决

### 问题 1: 页面显示 404

**原因**: `base` 路径配置不正确

**解决**:
1. 检查 `vite.config.ts` 中的 `base` 是否与仓库名匹配
2. 重新构建并部署：
   ```bash
   npm run build
   git add dist
   git commit -m "Fix base path"
   git push
   ```

### 问题 2: 资源文件加载失败（CSS/JS 404）

**原因**: 路径问题

**解决**:
1. 确保 `vite.config.ts` 中 `base` 路径正确
2. 确保路径以 `/` 开头和结尾，例如 `/terrasense/` 而不是 `/terrasense`

### 问题 3: 路由不工作（刷新后 404）

**原因**: GitHub Pages 是静态托管，不支持客户端路由

**解决**: 
- 本项目使用锚点链接（`#showcase`），应该可以正常工作
- 如果使用 React Router，需要配置 404 重定向（本项目不需要）

### 问题 4: GitHub Actions 部署失败

**检查清单**:
- ✅ 仓库 Settings > Pages > Source 设置为 "GitHub Actions"
- ✅ `.github/workflows/deploy.yml` 文件存在且正确
- ✅ 代码已推送到 `main` 或 `master` 分支
- ✅ 查看 Actions 标签页中的错误信息

### 问题 5: 网络连接问题（无法推送）

如果遇到 `Failed to connect to 127.0.0.1 port 1080` 错误：

**解决**:
1. 检查代理设置
2. 或使用 SSH 方式：
   ```bash
   git remote set-url origin git@github.com:QinghuaZhang1/terrasense.git
   ```

## 🔍 验证清单

部署前确认：

- [ ] `vite.config.ts` 中 `base` 路径正确
- [ ] `package.json` 中 `homepage` 字段正确
- [ ] `.github/workflows/deploy.yml` 文件存在
- [ ] GitHub 仓库 Settings > Pages > Source 设置为 "GitHub Actions"
- [ ] 代码已推送到 GitHub
- [ ] GitHub Actions 工作流运行成功

## 📚 快速命令参考

```bash
# 本地开发
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview

# 手动部署（如果安装了 gh-pages）
npm run deploy

# Git 操作
git add .
git commit -m "Your commit message"
git push origin main
```

## 🎯 部署后的访问地址

部署成功后，你的网站将在以下地址可访问：

- **主页**: https://qinghuazhang1.github.io/terrasense
- **Showcase**: https://qinghuazhang1.github.io/terrasense/#showcase
- **Demo**: https://qinghuazhang1.github.io/terrasense/#demo

## 💡 提示

1. **每次代码更新后**，推送到 GitHub 会自动触发部署
2. **部署通常需要 2-5 分钟**，可以在 Actions 标签页查看进度
3. **首次部署可能需要更长时间**，请耐心等待
4. **如果修改了仓库名**，记得同步更新 `vite.config.ts` 和 `package.json`

---

## 🆘 需要帮助？

如果遇到问题：
1. 检查 GitHub Actions 的日志输出
2. 确认所有配置文件正确
3. 查看本文档的"常见问题解决"部分

祝你部署顺利！🎉

