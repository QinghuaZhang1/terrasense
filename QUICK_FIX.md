# ⚡ 快速修复：启用自动化部署

## 🎯 问题
GitHub Pages 已设置为 "GitHub Actions"，但自动化部署没有运行。

## ✅ 解决方案（3步）

### 步骤 1: 手动触发首次部署

1. **打开 Actions 页面**
   - 直接访问: https://github.com/QinghuaZhang1/terrasense/actions

2. **找到 "Deploy to GitHub Pages" 工作流**
   - 在左侧工作流列表中

3. **点击 "Run workflow" 按钮**（右上角）

4. **选择分支 `main`**

5. **点击绿色的 "Run workflow" 按钮**

6. **等待 2-5 分钟**

### 步骤 2: 验证部署状态

1. **在 Actions 页面查看运行状态**
   - 应该看到两个任务：`build` 和 `deploy`
   - 两个都显示 ✅ 绿色时，部署成功

2. **访问你的网站**
   - https://qinghuazhang1.github.io/terrasense

### 步骤 3: 确认自动部署已启用

部署成功后，**以后每次推送代码都会自动部署**。

## 🔍 如果仍然不工作

### 检查 1: 工作流文件是否存在

访问: https://github.com/QinghuaZhang1/terrasense/blob/main/.github/workflows/deploy.yml

如果文件不存在，需要重新推送：

```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Actions workflow"
git push origin main
```

### 检查 2: GitHub Actions 是否启用

1. **进入 Settings > Actions > General**
   - https://github.com/QinghuaZhang1/terrasense/settings/actions

2. **确认 "Allow all actions and reusable workflows" 已启用**

### 检查 3: 工作流权限

1. **在 Settings > Actions > General 页面**
2. **找到 "Workflow permissions"**
3. **选择 "Read and write permissions"**
4. **勾选 "Allow GitHub Actions to create and approve pull requests"**
5. **点击 "Save"**

## 📝 立即操作

**现在就做**：
1. 打开: https://github.com/QinghuaZhang1/terrasense/actions
2. 点击 "Run workflow"
3. 等待完成

---

**完成这些步骤后，自动化部署就会工作了！** 🎉



