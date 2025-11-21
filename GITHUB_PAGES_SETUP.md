# 🚀 GitHub Pages 部署完整指南

本指南将帮助你将项目部署到 GitHub Pages，并确保所有功能（包括 `#showcase` 等路由）正常工作。

## 📋 前置准备

1. ✅ 项目已安装依赖：`npm install`
2. ✅ 已创建 GitHub 仓库
3. ✅ 代码已推送到 GitHub

## 🔧 配置步骤

### 步骤 1: 修改仓库名称配置

打开 `vite.config.ts` 文件，找到第 10 行：

```typescript
const GITHUB_REPO_NAME = 'github_deploy'; // ⚠️ 修改为你的 GitHub 仓库名
```

**将 `'github_deploy'` 替换为你的实际 GitHub 仓库名**

例如：
- 如果仓库名是 `terrasense`，则改为：`const GITHUB_REPO_NAME = 'terrasense';`
- 如果仓库名是 `my-terrasense-project`，则改为：`const GITHUB_REPO_NAME = 'my-terrasense-project';`

### 步骤 2: 安装 gh-pages 包

```bash
npm install --save-dev gh-pages
```

### 步骤 3: 更新 package.json（可选）

如果你想使用自定义的 GitHub Pages URL，可以在 `package.json` 中添加：

```json
{
  "homepage": "https://your-username.github.io/your-repo-name"
}
```

> ⚠️ 注意：`homepage` 字段是可选的，主要用于某些工具。实际部署路径由 `vite.config.ts` 中的 `base` 配置决定。

## 🚀 部署方法

### 方法一：使用 npm 脚本（推荐）

1. **构建并部署**
   ```bash
   npm run deploy
   ```

   这个命令会：
   - 运行 `npm run build` 构建项目
   - 将 `dist` 目录部署到 `gh-pages` 分支

2. **等待部署完成**
   - 部署通常需要 1-2 分钟
   - 可以在 GitHub 仓库的 Actions 标签页查看进度

### 方法二：使用 GitHub Actions（自动化，已配置）

如果你已经配置了 GitHub Actions（`.github/workflows/deploy.yml`），每次推送到 `main` 分支时会自动部署。

1. **推送代码到 main 分支**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **在 GitHub 上启用 Pages**
   - 进入仓库的 **Settings** > **Pages**
   - 在 "Source" 下选择 **"GitHub Actions"**
   - 保存设置

3. **自动部署**
   - 每次推送到 `main` 分支时，GitHub Actions 会自动构建并部署

## ✅ 验证部署

部署完成后，访问你的 GitHub Pages URL：

```
https://your-username.github.io/your-repo-name/
```

### 测试路由功能

1. **测试首页**
   - 访问：`https://your-username.github.io/your-repo-name/`
   - 应该能看到完整的页面

2. **测试 #showcase 路由**
   - 访问：`https://your-username.github.io/your-repo-name/#showcase`
   - 页面应该自动滚动到 "Academic Benchmarks & Capabilities" 部分

3. **测试 #benchmarks 路由**
   - 访问：`https://your-username.github.io/your-repo-name/#benchmarks`
   - 页面应该滚动到性能对比表部分

4. **测试 #tasks 路由**
   - 访问：`https://your-username.github.io/your-repo-name/#tasks`
   - 页面应该滚动到任务列表部分

5. **测试导航链接**
   - 点击导航栏中的 "Capabilities"、"Benchmarks"、"Tasks" 链接
   - 应该能正常跳转到对应部分

## 🔍 常见问题

### 问题 1: 页面显示空白

**原因**：`base` 路径配置不正确

**解决方案**：
1. 检查 `vite.config.ts` 中的 `GITHUB_REPO_NAME` 是否与仓库名一致
2. 重新构建：`npm run build`
3. 检查 `dist/index.html` 中的资源路径是否正确（应该以 `/your-repo-name/` 开头）

### 问题 2: 路由不工作（404 错误）

**原因**：GitHub Pages 不支持客户端路由

**解决方案**：
- ✅ 本项目使用 hash 路由（`#showcase`），不需要额外配置
- ✅ 如果使用其他路由方式，需要配置 404.html 重定向

### 问题 3: 样式或资源加载失败

**原因**：资源路径不正确

**解决方案**：
1. 确认 `vite.config.ts` 中的 `base` 配置正确
2. 检查浏览器控制台的错误信息
3. 确认所有资源路径都以正确的 base 路径开头

### 问题 4: API Key 不工作

**原因**：GitHub Pages 是静态托管，无法使用服务端环境变量

**解决方案**：
- 在交互式演示中，用户需要手动输入 API Key
- 或者使用后端代理 API 请求（需要额外的后端服务）

## 📝 更新部署

每次更新代码后：

1. **使用 npm 脚本**
   ```bash
   npm run deploy
   ```

2. **使用 GitHub Actions**
   ```bash
   git add .
   git commit -m "Update content"
   git push origin main
   ```
   然后等待自动部署完成

## 🎯 快速检查清单

部署前确认：

- [ ] `vite.config.ts` 中的 `GITHUB_REPO_NAME` 已更新为实际仓库名
- [ ] 已安装 `gh-pages`：`npm install --save-dev gh-pages`
- [ ] 代码已推送到 GitHub
- [ ] 已运行 `npm run build` 测试构建是否成功
- [ ] GitHub Pages 已启用（Settings > Pages）

## 🔗 相关链接

- [GitHub Pages 文档](https://docs.github.com/pages)
- [Vite 部署指南](https://vitejs.dev/guide/static-deploy.html)
- [gh-pages 文档](https://github.com/tschaub/gh-pages)

---

完成以上步骤后，你的网站就可以在 GitHub Pages 上正常访问了！🎉

访问地址格式：`https://your-username.github.io/your-repo-name/#showcase`

