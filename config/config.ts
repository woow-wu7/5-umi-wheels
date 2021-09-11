import { defineConfig } from 'umi';
import routes from './routes';
import { layout } from './layout';

// config/config.ts
// 1. config/config.ts -> 配置项目和插件，支持es6语法
// 2. Umi 在 .umirc.ts 或 config/config.ts 中配置项目和插件

export default defineConfig({
  // 如果您曾经在编写配置时使用 IntelliSense，那么从 'umi' 导入 defineConfig 会有所帮助
  // 1
  // layout
  // @umijs/plugin-layout
  // 1 开启插件
  // - 不添加layout不会有菜单部分的布局，添加了配置后，需要要从新 cnpm run start，webpack会在后台增量编译
  // 2 配置方式有两种
  // - 构建时配置：这里就是构建时配置 config/config.js -> layout
  // - 运行时配置：运行时配置，需要在 src/app.tsx -> layout
  // - 官方说明：https://umijs.org/zh-CN/plugins/plugin-layout
  layout,
  routes,
  antd: {
    // 开启插件 plugin - antd
    dark: false,
    // compact: true, // 紧凑模式
  },
});
