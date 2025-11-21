# 🚀 GitHub Pages 部署完整步骤

本指南将一步一步帮你将项目部署到 GitHub Pages，实现和本地 `http://localhost:3000` 一样的效果。

**你的仓库地址**: https://github.com/QinghuaZhang1/terrasense

---

## ✅ 步骤 1: 更新配置文件（已完成）

我已经为你更新了：
- ✅ `vite.config.ts` - 设置了 `base: '/terrasense/'`
- ✅ `package.json` - 添加了 `homepage` 和 `deploy` 脚本

---

## 🔧 步骤 2: 解决网络连接问题

从你的终端输出看，遇到了代理连接问题。我们有几个解决方案：

### 方案 A: 使用 SSH 连接（推荐）

1. **检查是否已有 SSH 密钥**
   ```bash
   ls ~/.ssh
   ```
   如果看到 `id_rsa` 或 `id_ed25519`，说明已有密钥。

2. **如果没有，生成 SSH 密钥**
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```
   按 Enter 使用默认设置（不要设置密码，直接按 Enter）

3. **复制公钥**
   ```bash
   cat ~/.ssh/id_ed25519.pub
   ```
   复制输出的内容

4. **添加到 GitHub**
   - 访问：https://github.com/settings/keys
   - 点击 "New SSH key"
   - 粘贴公钥内容
   - 保存

5. **更改 remote 为 SSH**
   ```bash
   git remote set-url origin git@github.com:QinghuaZhang1/terrasense.git
   ```

### 方案 B: 配置 Git 代理（如果使用代理）

如果你使用代理，需要配置：

```bash
# 取消代理设置（如果不需要）
git config --global --unset http.proxy
git config --global --unset https.proxy

# 或者设置正确的代理地址
git config --global http.proxy http://127.0.0.1:你的代理端口
git config --global https.proxy http://127.0.0.1:你的代理端口
```

### 方案 C: 使用 GitHub Desktop（最简单）

1. 下载安装 [GitHub Desktop](https://desktop.github.com/)
2. 登录你的 GitHub 账号
3. 打开仓库
4. 点击 "Push origin" 推送代码

---

## 📤 步骤 3: 提交并推送代码

### 3.1 提交配置更改

```bash
git add vite.config.ts package.json
git commit -m "Configure for GitHub Pages deployment"
```

### 3.2 推送代码

**如果使用 HTTPS（需要解决代理问题）：**
```bash
git push -u origin main
```

**如果使用 SSH（推荐）：**
```bash
git remote set-url origin git@github.com:QinghuaZhang1/terrasense.git
git push -u origin main
```

---

## 🌐 步骤 4: 配置 GitHub Pages

### 方法 1: 使用 GitHub Actions（推荐，已配置）

1. 打开浏览器，访问：https://github.com/QinghuaZhang1/terrasense
2. 点击 **Settings**（设置）
3. 在左侧菜单找到 **Pages**
4. 在 "Source" 部分，选择 **"GitHub Actions"**
5. 保存设置

### 方法 2: 使用 gh-pages 手动部署

1. **安装 gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **运行部署命令**
   ```bash
   npm run deploy
   ```

3. **在 GitHub 设置 Pages**
   - 访问：https://github.com/QinghuaZhang1/terrasense/settings/pages
   - Source 选择 **"gh-pages"** 分支
   - 保存

---

## ✅ 步骤 5: 验证部署

部署完成后（通常需要 1-2 分钟），访问：

**你的网站地址**: https://qinghuazhang1.github.io/terrasense

或者带路径的地址：
- https://qinghuazhang1.github.io/terrasense/#showcase
- https://qinghuazhang1.github.io/terrasense/#demo

---

## 🔍 故障排除

### 问题 1: 页面显示 404

- 检查 `vite.config.ts` 中的 `base` 路径是否正确：`/terrasense/`
- 确认仓库名是 `terrasense`（小写）
- 等待几分钟让 GitHub Pages 更新

### 问题 2: 资源加载失败（CSS/JS 404）

- 确认 `base` 路径设置正确
- 检查浏览器控制台的错误信息
- 重新构建并部署：`npm run build && npm run deploy`

### 问题 3: 路由不工作（刷新后 404）

如果使用 GitHub Actions，需要添加 `404.html` 重定向。创建 `public/404.html`：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>TerraSense</title>
    <script>
      // Single Page Apps for GitHub Pages
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
        l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
        (l.search ? '&' + l.search.slice(1).replace(/l/g, '%7C') : '') +
        l.hash
      );
    </script>
  </head>
  <body>
  </body>
</html>
```

---

## 📝 后续更新

每次修改代码后，只需：

```bash
git add .
git commit -m "Update: 描述你的更改"
git push origin main
```

如果使用 GitHub Actions，会自动重新部署。如果使用 gh-pages，运行：

```bash
npm run deploy
```

---

## 🎉 完成！

部署成功后，你的网站就可以通过以下地址访问：

- **主页**: https://qinghuazhang1.github.io/terrasense
- **展示页**: https://qinghuazhang1.github.io/terrasense/#showcase
- **演示页**: https://qinghuazhang1.github.io/terrasense/#demo

效果应该和本地 `http://localhost:3000` 完全一样！

---

**需要帮助？** 如果遇到任何问题，请告诉我具体的错误信息。
