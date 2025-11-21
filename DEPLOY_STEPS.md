# 🚀 GitHub Pages 部署步骤指南

本指南将帮助你一步步将项目部署到 GitHub Pages，实现和本地 `http://localhost:3000/#showcase` 一样的效果。

## ✅ 已完成的配置

1. ✅ `vite.config.ts` - 已设置 base 路径为 `/terrasense/`
2. ✅ `package.json` - 已添加 homepage 和 deploy 脚本
3. ✅ `gh-pages` - 已安装部署工具

## 📋 部署步骤

### 步骤 1: 解决 Git 网络连接问题

从终端输出看，你遇到了代理连接问题。让我们先解决这个问题：

#### 方法 A: 取消 Git 代理设置（推荐）

```bash
git config --global --unset http.proxy
git config --global --unset https.proxy
```

#### 方法 B: 如果方法 A 不行，检查并配置正确的代理

```bash
# 查看当前代理设置
git config --global --get http.proxy
git config --global --get https.proxy

# 如果需要设置代理（根据你的实际情况）
# git config --global http.proxy http://127.0.0.1:1080
# git config --global https.proxy http://127.0.0.1:1080
```

### 步骤 2: 提交配置更改

```bash
# 添加更改的文件
git add vite.config.ts package.json package-lock.json

# 提交更改
git commit -m "Configure GitHub Pages deployment"
```

### 步骤 3: 推送到 GitHub

```bash
# 推送到 GitHub（如果之前失败，现在再试一次）
git push -u origin main
```

**如果仍然遇到连接问题，可以尝试：**

1. **使用 SSH 方式**（需要先配置 SSH key）：
   ```bash
   git remote set-url origin git@github.com:QinghuaZhang1/terrasense.git
   git push -u origin main
   ```

2. **或者使用 GitHub Desktop**（图形界面工具）

### 步骤 4: 在 GitHub 上启用 Pages

1. 打开浏览器，访问：https://github.com/QinghuaZhang1/terrasense
2. 点击仓库顶部的 **Settings**（设置）
3. 在左侧菜单中找到 **Pages**（页面）
4. 在 "Source" 下选择：
   - **Branch**: `gh-pages`
   - **Folder**: `/ (root)`
5. 点击 **Save**（保存）

### 步骤 5: 部署到 GitHub Pages

回到终端，运行部署命令：

```bash
npm run deploy
```

这个命令会：
1. 构建项目（`npm run build`）
2. 将构建产物推送到 `gh-pages` 分支
3. GitHub 会自动部署到 Pages

### 步骤 6: 等待部署完成

1. 部署通常需要 1-2 分钟
2. 在 GitHub 仓库页面，点击 **Settings** > **Pages**
3. 你会看到部署状态和网站地址

### 步骤 7: 访问你的网站

部署完成后，你的网站地址将是：
**https://QinghuaZhang1.github.io/terrasense**

访问 `https://QinghuaZhang1.github.io/terrasense/#showcase` 就能看到和本地一样的效果！

## 🔄 后续更新

每次修改代码后，只需：

```bash
# 1. 提交更改
git add .
git commit -m "Update: 描述你的更改"
git push origin main

# 2. 重新部署
npm run deploy
```

## ⚠️ 注意事项

1. **API Key 问题**：
   - GitHub Pages 是静态网站，无法使用服务端环境变量
   - 交互式演示功能需要 API Key，但不会在 GitHub Pages 上暴露
   - 用户可以在页面上手动输入 API Key 使用

2. **首次部署可能需要几分钟**：
   - GitHub 需要时间构建和部署
   - 刷新页面查看最新状态

3. **如果部署失败**：
   - 检查 GitHub Actions 日志（如果有）
   - 确认 `gh-pages` 分支已创建
   - 检查 `vite.config.ts` 中的 base 路径是否正确

## 🐛 常见问题

### Q: 部署后页面显示 404？
A: 检查 `vite.config.ts` 中的 `base` 路径是否与仓库名一致

### Q: 样式丢失或资源加载失败？
A: 确保所有资源路径都是相对路径，base 配置正确

### Q: 如何更新网站内容？
A: 修改代码后，运行 `npm run deploy` 重新部署

---

完成以上步骤后，你的网站就可以在 GitHub Pages 上访问了！🎉

