# 🚀 部署指南

本文档介绍如何将 TerraSense 项目部署到各种平台。

## GitHub Pages 部署

### 方法一：使用 gh-pages 包（推荐）

1. **安装 gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **更新 package.json**
   
   在 `package.json` 的 `scripts` 中添加：
   ```json
   {
     "scripts": {
       "deploy": "npm run build && gh-pages -d dist"
     }
   }
   ```
   
   同时添加 `homepage` 字段（替换为你的 GitHub 用户名和仓库名）：
   ```json
   {
     "homepage": "https://your-username.github.io/terrasense"
   }
   ```

3. **更新 vite.config.ts**
   
   确保 `base` 路径正确：
   ```typescript
   export default defineConfig({
     base: '/terrasense/', // 替换为你的仓库名
     // ... 其他配置
   });
   ```

4. **部署**
   ```bash
   npm run deploy
   ```

### 方法二：使用 GitHub Actions（自动化）

1. **创建 `.github/workflows/deploy.yml`**
   ```yaml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [ main ]
   
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: '18'
         - run: npm install
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

2. **在 GitHub 仓库设置中启用 Pages**
   - 进入 Settings > Pages
   - Source 选择 "GitHub Actions"

## Vercel 部署

1. **安装 Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **部署**
   ```bash
   vercel
   ```

   或通过 [Vercel Dashboard](https://vercel.com) 直接导入 GitHub 仓库。

3. **配置环境变量**
   - 在 Vercel 项目设置中添加 `GEMINI_API_KEY`

## Netlify 部署

1. **安装 Netlify CLI**
   ```bash
   npm i -g netlify-cli
   ```

2. **创建 `netlify.toml`**
   ```toml
   [build]
     command = "npm run build"
     publish = "dist"
   
   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

3. **部署**
   ```bash
   netlify deploy --prod
   ```

4. **配置环境变量**
   - 在 Netlify 项目设置中添加 `GEMINI_API_KEY`

## 注意事项

⚠️ **重要**: 
- 不要在代码中硬编码 API Key
- 使用环境变量管理敏感信息
- 生产环境建议使用后端代理 API 请求，避免在前端暴露 API Key

## 环境变量配置

不同平台的环境变量配置方式：

- **GitHub Pages**: 不支持服务端环境变量，需要使用其他方式（如后端代理）
- **Vercel**: Settings > Environment Variables
- **Netlify**: Site settings > Build & deploy > Environment variables

