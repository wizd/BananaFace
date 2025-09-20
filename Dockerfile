# 使用 Node.js 20 Alpine 作为构建阶段的基础镜像
FROM node:20-alpine AS builder

# 设置工作目录
WORKDIR /app

# 安装 pnpm
RUN npm install -g pnpm

# 复制包管理文件
COPY package.json pnpm-lock.yaml ./

# 安装依赖
RUN pnpm install --frozen-lockfile

# 复制源代码
COPY . .

# 构建前端应用
RUN pnpm run build

# 生产阶段使用更小的镜像
FROM node:20-alpine AS production

# 设置工作目录
WORKDIR /app

# 安装 pnpm
RUN npm install -g pnpm

# 复制包管理文件
COPY package.json pnpm-lock.yaml ./

# 只安装生产依赖
RUN pnpm install --frozen-lockfile --prod

# 从构建阶段复制构建好的前端文件
COPY --from=builder /app/dist ./dist

# 复制服务器代码
COPY server.js ./

# 创建非root用户
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# 改变文件所有权
RUN chown -R nextjs:nodejs /app

# 切换到非root用户
USER nextjs

# 暴露端口
EXPOSE 3000

# 设置环境变量
ENV NODE_ENV=production
ENV PORT=3000

# 启动应用
CMD ["node", "server.js"]
