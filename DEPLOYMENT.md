# 部署指南

## 安全说明

这个项目已经修复了API key暴露的安全问题。现在API key只在Vite服务器端使用，不会暴露到前端。

## 本地开发

```bash
# 安装依赖
pnpm install

# 配置环境变量
cp .env.example .env
# 编辑 .env 文件，设置你的 GEMINI_API_KEY

# 运行应用
pnpm run dev
```

Vite会自动处理前后端的集成，前端运行在5173端口，后端API路由也由Vite处理。

## 生产部署

### Vercel 部署（推荐）

1. 将代码推送到GitHub
2. 在Vercel中导入项目
3. 设置环境变量：
   - `GEMINI_API_KEY`: 你的Gemini API key
   - `NODE_ENV`: production

Vercel会自动处理构建和部署，API路由也会正常工作。

### 其他平台部署

对于其他平台（如Netlify, Railway等），你可能需要：

1. 构建项目：`pnpm run build`
2. 部署 `dist` 目录
3. 确保平台支持Node.js环境变量
4. 设置 `GEMINI_API_KEY` 环境变量

## 架构说明

- ✅ 使用Vite的内置中间件处理API路由
- ✅ API key只在服务器端使用
- ✅ 前端通过相对路径调用API
- ✅ 单一部署，无需分离前后端

## 安全注意事项

- ✅ API key现在只在服务器端使用，不会暴露到浏览器
- ✅ 前端通过HTTP请求调用后端API
- ✅ 后端处理所有Gemini API调用
- ⚠️ 确保生产环境使用HTTPS
- ⚠️ 定期轮换你的API key
- ⚠️ 监控API使用量以避免超出限制
