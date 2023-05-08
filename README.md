## 🚀 开发

```bash
# 配置
1. 一键安装 .vscode 目录中推荐的插件
3. node 版本 16+
4. pnpm 版本 7.x

# 克隆项目
-

# 进入项目目录
cd nuxt3-elementplus

# 安装依赖
pnpm i

# 启动服务
pnpm dev
```

## 📦️ 多环境打包

```bash
# 构建测试环境
pnpm build:test
pnpm post

# 构建预发布环境
pnpm build:staging
pnpm post

# 构建生产环境
pnpm build:prod
pnpm post
```

## Git 提交规范参考

- `feat` 增加新的业务功能
- `fix` 修复业务问题/BUG
- `perf` 优化性能
- `style` 更改代码风格, 不影响运行结果
- `refactor` 重构代码
- `revert` 撤销更改
- `test` 测试相关, 不涉及业务代码的更改
- `docs` 文档和注释相关
- `chore` 更新依赖/修改脚手架配置等琐事
- `workflow` 工作流改进
- `ci` 持续集成相关
- `types` 类型定义文件更改
- `wip` 开发中

## 特性

- **Nuxt3**：基于 Vue3 的应用框架，提供服务器端渲染和静态网站生成功能
- **Element Plus**：Vue3 版本的 Element UI 组件库，提供丰富的 UI 组件
- **Pinia**：Vue3 的状态管理库，提供更加直观和易用的 API
- **Vite**：快速的现代化前端构建工具，提供了快速的热重载和构建速度
- **TypeScript**：JavaScript 的超集，提供类型检查和更加严谨的语法
- **PNPM**：快速、节省空间的包管理工具，支持多种版本共存
- **SCSS**：CSS 预处理器，提供更加丰富的样式编写功能
- **ESLint**：JavaScript 代码校验工具，提高代码质量和可读性
- **Stylelint**：CSS 样式代码校验工具，提高样式代码质量和可读性
- **Vueuse**：Vue3 生态中的工具库，提供了许多实用的自定义 hooks
- ~~**兼容移动端**：提供移动端布局和分辨率适配方案~~
- ~~**Echarts**：开源的数据可视化库，提供了丰富的图表和数据展示方式~~
