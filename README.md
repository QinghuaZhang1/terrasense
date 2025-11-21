<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# 🌍 TerraSense - Earth Intelligence

> An 8-billion parameter multimodal model designed for complex reasoning, multi-turn dialogue, and fine-grained perception in remote sensing.

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?logo=vite)](https://vitejs.dev/)

## 📖 项目简介

TerraSense 是一个展示 TerraSense-Base 8B 遥感基础模型的官方网站。该项目提供了一个现代化的 Web 界面，用于展示模型在遥感图像分析、目标检测、土地覆盖分类等任务中的卓越性能。

### ✨ 主要特性

- 🛰️ **交互式图像分析** - 上传卫星图像，实时获得 AI 分析结果
- 📊 **性能基准展示** - 详细的模型性能对比数据
- 💬 **多轮对话模拟** - 展示模型的理解和推理能力
- 🎨 **现代化 UI** - 深色主题，流畅动画，响应式设计
- ⚡ **快速响应** - 基于 Vite 构建，开发体验极佳

## 🚀 快速开始

### 环境要求

- Node.js 18+ 
- npm 或 yarn

### 安装步骤

1. **克隆仓库**
   ```bash
   git clone https://github.com/your-username/terrasense.git
   cd terrasense
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **配置环境变量**
   
   复制 `env.example` 文件为 `.env.local`：
   ```bash
   # Windows (PowerShell)
   Copy-Item env.example .env.local
   
   # Linux/Mac
   cp env.example .env.local
   ```
   
   在 `.env.local` 中填入你的 Gemini API Key：
   ```env
   GEMINI_API_KEY=your_api_key_here
   ```
   
   > 💡 获取 API Key: 访问 [Google AI Studio](https://aistudio.google.com/) 获取 Gemini API Key

4. **启动开发服务器**
   ```bash
   npm run dev
   ```
   
   应用将在 `http://localhost:3000` 启动

## 📦 构建部署

### 构建生产版本

```bash
npm run build
```

构建产物将输出到 `dist` 目录。

### 预览构建结果

```bash
npm run preview
```

### 部署到 GitHub Pages

#### ⚠️ 重要：部署前配置

1. **修改仓库名称配置**
   
   打开 `vite.config.ts`，找到第 13 行，修改为你的 GitHub 仓库名：
   ```typescript
   const GITHUB_REPO_NAME = 'your-repo-name'; // 修改这里
   ```

2. **安装 gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **一键部署**
   ```bash
   npm run deploy
   ```
   
   或者使用 PowerShell 脚本：
   ```powershell
   .\deploy.ps1
   ```

4. **访问你的网站**
   
   部署完成后，访问：`https://your-username.github.io/your-repo-name/`
   
   测试路由：
   - `https://your-username.github.io/your-repo-name/#showcase`
   - `https://your-username.github.io/your-repo-name/#benchmarks`
   - `https://your-username.github.io/your-repo-name/#tasks`

> 📖 详细部署指南请查看 [GITHUB_PAGES_SETUP.md](GITHUB_PAGES_SETUP.md)

## 🛠️ 技术栈

- **前端框架**: React 19.2.0
- **语言**: TypeScript 5.8.2
- **构建工具**: Vite 6.2.0
- **样式**: Tailwind CSS
- **AI 服务**: Google Gemini API (@google/genai)
- **图标**: Lucide React

## 📁 项目结构

```
github_deploy/
├── App.tsx              # 主应用组件
├── index.tsx            # 入口文件
├── index.html           # HTML 模板
├── types.ts             # TypeScript 类型定义
├── vite.config.ts       # Vite 配置
├── package.json         # 依赖管理
├── components/          # React 组件
│   ├── Navbar.tsx       # 导航栏
│   ├── Hero.tsx         # 首页英雄区
│   ├── ModelSpecs.tsx   # 模型规格
│   ├── ModelShowcase.tsx # 模型展示
│   ├── InteractiveDemo.tsx # 交互式演示
│   ├── Footer.tsx       # 页脚
│   └── Icons.tsx        # 图标组件
└── services/
    └── geminiService.ts # Gemini API 服务
```

## 🎯 功能说明

### 1. 模型性能展示
- 展示 TerraSense-Base 8B 在多个基准测试中的性能指标
- 包含 Precision、Recall、F1 Score、Mean IoU 等关键指标

### 2. 交互式演示
- 支持上传本地图像文件（TIFF/JPEG/PNG）
- 或选择预设的示例图像
- 使用 Gemini API 进行实时图像分析

### 3. 多轮对话模拟
- 展示模型在遥感图像理解任务中的对话能力
- 支持目标检测、土地覆盖分类等任务

## 🔧 配置说明

### 环境变量

| 变量名 | 说明 | 必需 |
|--------|------|------|
| `GEMINI_API_KEY` | Google Gemini API 密钥 | 是 |

### Vite 配置

开发服务器默认运行在 `http://localhost:3000`，可在 `vite.config.ts` 中修改。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📝 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 🔗 相关链接

- [AI Studio 预览](https://ai.studio/apps/temp/2)
- [Google Gemini API 文档](https://ai.google.dev/docs)
- [React 文档](https://react.dev/)
- [Vite 文档](https://vitejs.dev/)

## 📧 联系方式

如有问题或建议，请通过以下方式联系：

- 提交 [Issue](https://github.com/your-username/terrasense/issues)
- 发送邮件至: your-email@example.com

---

<div align="center">
Made with ❤️ by TerraSense Team
</div>

