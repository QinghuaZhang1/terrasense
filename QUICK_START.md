# ⚡ 快速开始 - GitHub Pages 部署

## 🎯 目标

将你的项目部署到 GitHub Pages，并确保 `http://localhost:3000/#showcase` 这样的路由在 GitHub 上也能正常工作。

## 📝 3 步完成部署

### 步骤 1: 修改仓库名称 ⚠️ 必须

打开 `vite.config.ts` 文件，找到第 13 行：

```typescript
const GITHUB_REPO_NAME = 'github_deploy'; // ⚠️ 修改为你的 GitHub 仓库名
```

**将 `'github_deploy'` 改为你的实际 GitHub 仓库名**

例如：
- 仓库名是 `terrasense` → 改为 `'terrasense'`
- 仓库名是 `my-project` → 改为 `'my-project'`

### 步骤 2: 安装部署工具

```bash
npm install --save-dev gh-pages
```

### 步骤 3: 部署

```bash
npm run deploy
```

或者使用 PowerShell 脚本：

```powershell
.\deploy.ps1
```

## ✅ 完成！

部署完成后（通常 1-2 分钟），访问：

```
https://your-username.github.io/your-repo-name/
```

### 测试路由

- ✅ 首页：`https://your-username.github.io/your-repo-name/`
- ✅ Showcase：`https://your-username.github.io/your-repo-name/#showcase`
- ✅ Benchmarks：`https://your-username.github.io/your-repo-name/#benchmarks`
- ✅ Tasks：`https://your-username.github.io/your-repo-name/#tasks`

## 🔍 如果遇到问题

1. **页面空白** → 检查 `vite.config.ts` 中的仓库名是否正确
2. **路由不工作** → 确认使用的是 hash 路由（`#showcase`），不是普通路由
3. **资源加载失败** → 检查浏览器控制台的错误信息

详细说明请查看 [GITHUB_PAGES_SETUP.md](GITHUB_PAGES_SETUP.md)

