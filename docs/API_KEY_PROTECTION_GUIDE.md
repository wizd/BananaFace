# Vite项目API Key保护指南

## 🔍 问题识别

### 常见暴露方式
1. **vite.config.ts中的define配置**
```typescript
// ❌ 危险：API key会暴露到前端
define: {
  'process.env.API_KEY': JSON.stringify(env.API_KEY)
}
```

2. **前端代码直接使用环境变量**
```typescript
// ❌ 危险：前端无法访问.env文件
const apiKey = process.env.API_KEY
```

3. **环境变量直接传递给前端**
```typescript
// ❌ 危险：前端代码可见
const config = {
  apiKey: import.meta.env.VITE_API_KEY
}
```

## ✅ 解决方案：使用Vite中间件

### 核心思路
- API key只在**服务器端**使用
- 前端通过**相对路径**调用API
- 使用Vite的**configureServer中间件**处理API路由

### 实施步骤

#### 1. 移除危险配置
```typescript
// vite.config.ts - 删除这些行
define: {
  'process.env.API_KEY': JSON.stringify(env.API_KEY),
  'process.env.VITE_API_KEY': JSON.stringify(env.API_KEY)
}
```

#### 2. 配置Vite中间件
```typescript
// vite.config.ts
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.API_KEY;
if (!apiKey) {
  throw new Error('API_KEY is not set');
}

const ai = new GoogleGenAI({ apiKey });

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'api-middleware',
      configureServer(server) {
        // 处理API请求
        server.middlewares.use('/api/your-endpoint', async (req, res, next) => {
          if (req.method !== 'POST') return next();

          try {
            let body = '';
            req.on('data', chunk => {
              body += chunk.toString();
            });

            req.on('end', async () => {
              const data = JSON.parse(body);
              // 处理API调用
              const result = await ai.someApiCall(data);
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify(result));
            });
          } catch (error) {
            res.statusCode = 500;
            res.end(JSON.stringify({ error: error.message }));
          }
        });
      }
    }
  ]
});
```

#### 3. 更新前端服务
```typescript
// services/apiService.ts
export const callApi = async (data: any) => {
  // ✅ 安全：使用相对路径，API key不会暴露
  const response = await fetch('/api/your-endpoint', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  return response.json();
};
```

#### 4. 环境变量配置
```bash
# .env (服务器端使用)
API_KEY=your_secret_key

# .env.example (模板)
API_KEY=your_api_key_here
```

## 📋 完整检查清单

### ✅ 安全检查
- [ ] API key不在前端代码中使用
- [ ] vite.config.ts中没有define暴露API key
- [ ] 前端只使用相对路径调用API
- [ ] .env文件已添加到.gitignore

### ✅ 代码检查
- [ ] 安装了必要的依赖 (dotenv, API客户端库)
- [ ] Vite中间件正确配置
- [ ] 错误处理完善
- [ ] 前端fetch调用正确

### ✅ 部署检查
- [ ] 生产环境设置了环境变量
- [ ] 服务器支持HTTPS
- [ ] API调用有速率限制

## 🔧 通用模板

### vite.config.ts模板
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import { YourApiClient } from 'your-api-library';

dotenv.config();

const apiKey = process.env.YOUR_API_KEY;
if (!apiKey) {
  throw new Error('YOUR_API_KEY is required');
}

const apiClient = new YourApiClient({ apiKey });

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'api-middleware',
      configureServer(server) {
        server.middlewares.use('/api/your-service', async (req, res, next) => {
          // 处理你的API调用
        });
      }
    }
  ]
});
```

### 前端服务模板
```typescript
const API_BASE_URL = '';

export const apiService = {
  async yourMethod(params: any) {
    const response = await fetch(`${API_BASE_URL}/api/your-service`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params)
    });

    if (!response.ok) {
      throw new Error('API call failed');
    }

    return response.json();
  }
};
```

## 🚀 部署建议

### Vercel (推荐)
1. 设置环境变量在Vercel控制台
2. 推送到GitHub，自动部署
3. API路由自动工作

### 其他平台
1. 构建：`npm run build`
2. 部署dist目录
3. 设置服务器环境变量

## ⚠️ 重要提醒

1. **永远不要**在前端代码中使用API key
2. **永远不要**在define配置中暴露敏感信息
3. **始终**使用服务器端中间件处理API调用
4. **定期**轮换API key
5. **监控**API使用量和错误日志

## 🛠️ 故障排除

### 常见问题
1. **API调用失败**: 检查环境变量是否正确设置
2. **CORS错误**: 确保前端使用相对路径
3. **构建失败**: 检查依赖是否正确安装

### 调试技巧
- 使用浏览器开发者工具检查网络请求
- 检查服务器日志中的错误信息
- 验证环境变量是否正确加载

---

这个方案适用于任何需要在Vite项目中保护API key的场景，提供了安全、简单、可维护的解决方案。
