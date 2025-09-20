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

服务器会自动处理前后端的集成，前端和API都运行在同一端口（默认3000）。

## 生产部署

### Docker 部署（推荐）

本项目现在支持 Docker 部署，提供开箱即用的容器化解决方案：

#### 使用 Docker Compose（推荐）

1. 确保已安装 Docker 和 Docker Compose
2. 配置环境变量：
   ```bash
   cp .env.example .env
   # 编辑 .env 文件，设置你的 GEMINI_API_KEY
   ```
3. 构建并运行容器：
   ```bash
   docker-compose up -d
   ```
4. 应用将在 http://localhost:3000 上运行

#### 使用 Docker 命令

```bash
# 构建镜像
docker build -t bananaface .

# 运行容器
docker run -p 3000:3000 \
  -e GEMINI_API_KEY=your_api_key_here \
  -e NODE_ENV=production \
  bananaface
```

#### Docker 部署的优势

- ✅ 环境一致性
- ✅ 易于扩展和维护
- ✅ 内置健康检查
- ✅ 安全性增强（使用非root用户）
- ✅ 更小的生产镜像（多阶段构建）

### 传统部署方式

由于项目需要服务器端API处理，推荐使用支持Node.js的平台部署：

#### Railway 部署（推荐）

1. 将代码推送到GitHub
2. 在Railway中导入项目
3. Railway会自动检测并使用 `package.json` 中的脚本
4. 设置环境变量：
   - `GEMINI_API_KEY`: 你的Gemini API key
   - `NODE_ENV`: production

#### Render 部署

1. 将代码推送到GitHub
2. 在Render中创建Web Service
3. 设置构建命令：`npm run build`
4. 设置启动命令：`npm run start`
5. 设置环境变量：
   - `GEMINI_API_KEY`: 你的Gemini API key
   - `NODE_ENV`: production

#### 其他Node.js平台

对于支持Node.js的平台（如Heroku, DigitalOcean App Platform等）：

1. 构建项目：`npm run build`
2. 启动服务器：`npm run start`
3. 设置环境变量：`GEMINI_API_KEY`
4. 确保服务器监听 `process.env.PORT`（默认为3000）

### 本地部署测试

```bash
# 构建项目
npm run build

# 启动生产服务器
npm run start
```

## 架构说明

- ✅ 使用Express服务器处理API路由
- ✅ Vite处理前端构建和开发服务器
- ✅ API key只在服务器端使用
- ✅ 前端通过相对路径调用API
- ✅ 支持SPA路由处理

## 安全注意事项

- ✅ API key现在只在服务器端使用，不会暴露到浏览器
- ✅ 前端通过HTTP请求调用后端API
- ✅ 后端处理所有Gemini API调用
- ⚠️ 确保生产环境使用HTTPS
- ⚠️ 定期轮换你的API key
- ⚠️ 监控API使用量以避免超出限制
