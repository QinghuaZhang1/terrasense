# GitHub Pages 部署脚本 (PowerShell)
# 使用方法: .\deploy.ps1

Write-Host "🚀 开始部署到 GitHub Pages..." -ForegroundColor Cyan

# 检查是否安装了 gh-pages
$ghPagesInstalled = Test-Path "node_modules\gh-pages"
if (-not $ghPagesInstalled) {
    Write-Host "📦 正在安装 gh-pages..." -ForegroundColor Yellow
    npm install --save-dev gh-pages
}

# 构建项目
Write-Host "🔨 正在构建项目..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ 构建失败！请检查错误信息。" -ForegroundColor Red
    exit 1
}

# 部署到 GitHub Pages
Write-Host "📤 正在部署到 GitHub Pages..." -ForegroundColor Yellow
npm run deploy

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ 部署成功！" -ForegroundColor Green
    Write-Host "🌐 请访问你的 GitHub Pages URL 查看网站" -ForegroundColor Cyan
} else {
    Write-Host "❌ 部署失败！请检查错误信息。" -ForegroundColor Red
    exit 1
}

