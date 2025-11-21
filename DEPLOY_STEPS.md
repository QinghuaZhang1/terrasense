# 📋 部署步骤清单（一步一步）

这是为 **QinghuaZhang1/terrasense** 仓库准备的详细部署步骤。

## ✅ 步骤 1: 确认当前配置

当前项目已配置为：
- **仓库名**: `terrasense`
- **GitHub 用户名**: `QinghuaZhang1`
- **部署地址**: `https://qinghuazhang1.github.io/terrasense`

## ✅ 步骤 2: 检查并提交代码

在终端中执行：

```bash
# 1. 确认你在项目目录
cd C:\Users\NRRS_User01\Desktop\github_deploy

# 2. 检查 Git 状态
git status

# 3. 添加所有更改
git add .

# 4. 提交更改
git commit -m "Configure for GitHub Pages deployment"

# 5. 检查远程仓库配置
git remote -v
```

**预期输出**应该显示：
```
origin  https://github.com/QinghuaZhang1/terrasense.git (fetch)
origin  https://github.com/QinghuaZhang1/terrasense.git (push)
```

如果显示 `error: remote origin already exists`，说明已经配置好了，可以跳过步骤 3。

## ✅ 步骤 3: 配置远程仓库（如果需要）

如果远程仓库未配置或需要更新：

```bash
# 删除旧的远程仓库（如果存在）
git remote remove origin

# 添加正确的远程仓库
git remote add origin https://github.com/QinghuaZhang1/terrasense.git

# 验证配置
git remote -v
```

## ✅ 步骤 4: 推送代码到 GitHub

```bash
# 推送到 main 分支
git push -u origin main
```

**如果遇到网络问题**（如代理错误）：
- 可以稍后重试
- 或使用 SSH 方式（需要配置 SSH key）

## ✅ 步骤 5: 在 GitHub 上启用 Pages

### 5.1 打开仓库设置

1. 访问: https://github.com/QinghuaZhang1/terrasense
2. 点击仓库页面顶部的 **"Settings"** 标签

### 5.2 配置 Pages

1. 在左侧菜单中找到并点击 **"Pages"**
2. 在 "Source" 部分：
   - 选择 **"GitHub Actions"**（不是 "Deploy from a branch"）
3. 页面会自动保存

### 5.3 验证配置

你应该看到类似这样的提示：
> "Your site is ready to be published at https://qinghuazhang1.github.io/terrasense"

## ✅ 步骤 6: 触发首次部署

### 方法 A: 通过推送代码（自动触发）

如果你已经推送了代码，GitHub Actions 会自动开始部署。

### 方法 B: 手动触发

1. 进入仓库的 **"Actions"** 标签页
2. 在左侧选择 **"Deploy to GitHub Pages"** 工作流
3. 点击 **"Run workflow"** 按钮
4. 选择分支（通常是 `main`）
5. 点击绿色的 **"Run workflow"** 按钮

## ✅ 步骤 7: 等待部署完成

1. 在 **"Actions"** 标签页查看部署进度
2. 你会看到两个任务：
   - `build` - 构建项目
   - `deploy` - 部署到 GitHub Pages
3. 等待两个任务都显示 ✅（通常需要 2-5 分钟）

## ✅ 步骤 8: 访问你的网站

部署成功后，访问：

- **主页**: https://qinghuazhang1.github.io/terrasense
- **Showcase 页面**: https://qinghuazhang1.github.io/terrasense/#showcase
- **Demo 页面**: https://qinghuazhang1.github.io/terrasense/#demo

## 🔄 后续更新

每次修改代码后，只需：

```bash
git add .
git commit -m "Update: your changes"
git push origin main
```

GitHub Actions 会自动重新部署。

## 🛠️ 部署到其他仓库

如果你想部署到**其他 GitHub 仓库**，按以下步骤：

### 示例：部署到新仓库 `my-terrasense`

1. **在 GitHub 上创建新仓库** `my-terrasense`

2. **修改 vite.config.ts**
   ```typescript
   base: '/my-terrasense/',  // 改为新仓库名
   ```

3. **修改 package.json**
   ```json
   "homepage": "https://qinghuazhang1.github.io/my-terrasense"
   ```

4. **更新远程仓库**
   ```bash
   git remote set-url origin https://github.com/QinghuaZhang1/my-terrasense.git
   git add .
   git commit -m "Update for new repository"
   git push origin main
   ```

5. **在新仓库中启用 Pages**（Settings > Pages > Source: GitHub Actions）

### 示例：部署到不同用户的仓库

假设要部署到 `other-user/terrasense`：

1. **修改 vite.config.ts**
   ```typescript
   base: '/terrasense/',  // 仓库名保持不变
   ```

2. **修改 package.json**
   ```json
   "homepage": "https://other-user.github.io/terrasense"
   ```

3. **添加新的远程仓库**
   ```bash
   git remote add other https://github.com/other-user/terrasense.git
   git push other main
   ```

4. **在新仓库中启用 Pages**

## ❌ 故障排除

### 问题：推送失败（网络错误）

**解决方案**:
```bash
# 检查代理设置
git config --global http.proxy
git config --global https.proxy

# 如果需要，清除代理
git config --global --unset http.proxy
git config --global --unset https.proxy

# 或使用 SSH（需要先配置 SSH key）
git remote set-url origin git@github.com:QinghuaZhang1/terrasense.git
```

### 问题：部署后页面空白

**检查**:
1. 确认 `vite.config.ts` 中 `base: '/terrasense/'` 正确
2. 确认 `package.json` 中 `homepage` 正确
3. 查看浏览器控制台是否有错误
4. 检查 GitHub Actions 日志

### 问题：资源文件 404

**解决方案**:
- 确保 `base` 路径以 `/` 开头和结尾
- 重新构建并推送

## 📞 需要帮助？

如果按照以上步骤仍有问题，请检查：
1. GitHub Actions 的日志输出
2. 浏览器控制台的错误信息
3. 所有配置文件是否正确

---

**祝你部署成功！** 🎉

