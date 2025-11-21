import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    
    // GitHub Pages 部署配置
    // 如果部署到 GitHub Pages，请修改下面的仓库名
    // 例如：如果仓库名是 'terrasense'，则设置为 '/terrasense/'
    // 如果使用自定义域名，设置为 '/'
    // 本地开发时保持为 '/'
    const GITHUB_REPO_NAME = 'terrasense'; // ⚠️ 修改为你的 GitHub 仓库名
    const base = mode === 'production' && GITHUB_REPO_NAME ? `/${GITHUB_REPO_NAME}/` : '/';
    
    return {
      base: base,
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
