# 🔧 自动化部署故障排除

## 问题：GitHub Actions 没有自动部署

### ✅ 步骤 1: 检查 GitHub Actions 是否运行

1. **进入 Actions 标签页**
   - 访问: https://github.com/QinghuaZhang1/terrasense/actions
   - 查看是否有 "Deploy to GitHub Pages" 工作流

2. **如果没有看到工作流运行**：
   - 可能是首次推送，需要等待几秒钟
   - 或者工作流文件没有被正确识别

### ✅ 步骤 2: 手动触发部署

如果工作流没有自动运行，可以手动触发：

1. **进入 Actions 标签页**
   - https://github.com/QinghuaZhang1/terrasense/actions

2. **选择 "Deploy to GitHub Pages" 工作流**

3. **点击 "Run workflow" 按钮**（在右侧）

4. **选择分支**（通常是 `main`）

5. **点击绿色的 "Run workflow" 按钮**

### ✅ 步骤 3: 检查工作流文件位置

确保工作流文件在正确的位置：
- 文件路径: `.github/workflows/deploy.yml`
- 文件必须存在于仓库中

**检查方法**：
```bash
# 在本地检查
ls .github/workflows/deploy.yml
```

如果文件不存在，需要重新创建。

### ✅ 步骤 4: 验证 GitHub Pages 设置

1. **进入 Settings > Pages**
   - https://github.com/QinghuaZhang1/terrasense/settings/pages

2. **确认 Source 设置为 "GitHub Actions"**
   - 不是 "Deploy from a branch"
   - 不是 "None"

3. **如果显示 "Your site is ready to be published"**
   - 说明配置正确，等待首次部署完成

### ✅ 步骤 5: 检查工作流权限

如果工作流运行但失败，检查：

1. **进入 Settings > Actions > General**
   - https://github.com/QinghuaZhang1/terrasense/settings/actions

2. **确认 "Workflow permissions" 设置为**：
   - ✅ "Read and write permissions"
   - ✅ "Allow GitHub Actions to create and approve pull requests"

### ✅ 步骤 6: 重新推送触发部署

如果以上都不行，尝试重新推送：

```bash
# 创建一个空提交来触发工作流
git commit --allow-empty -m "Trigger GitHub Actions deployment"
git push origin main
```

## 🚨 常见错误及解决方案

### 错误 1: "Workflow run failed"

**可能原因**:
- 构建失败
- 权限不足
- 配置文件错误

**解决**:
1. 点击失败的工作流运行
2. 查看错误日志
3. 根据错误信息修复

### 错误 2: "No workflow found"

**可能原因**:
- 工作流文件路径错误
- 工作流文件格式错误

**解决**:
1. 确认文件在 `.github/workflows/` 目录
2. 检查 YAML 语法是否正确

### 错误 3: "Permission denied"

**可能原因**:
- GitHub Actions 权限不足

**解决**:
1. Settings > Actions > General
2. 设置 "Workflow permissions" 为 "Read and write"

## 📋 快速检查清单

- [ ] 代码已推送到 GitHub
- [ ] `.github/workflows/deploy.yml` 文件存在
- [ ] Settings > Pages > Source 设置为 "GitHub Actions"
- [ ] Actions 标签页中有工作流运行记录
- [ ] 工作流运行成功（显示绿色 ✅）

## 🎯 立即操作

1. **访问 Actions 页面**: https://github.com/QinghuaZhang1/terrasense/actions
2. **查看是否有工作流运行**
3. **如果没有，点击 "Run workflow" 手动触发**
4. **等待 2-5 分钟完成部署**

---

如果问题仍然存在，请提供：
- Actions 标签页的截图
- 工作流运行的错误日志



