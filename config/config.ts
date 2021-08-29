import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  // 如果您曾经在编写配置时使用 IntelliSense，那么从 'umi' 导入 defineConfig 会有所帮助
  layout: {
    // 构建时配置
    // @umijs/plugin-layout
    // 1 开启插件
    // - 不添加layout不会有菜单部分的布局，添加了配置后，需要要从新 cnpm run start，webpack会在后台增量编译
    // 2 配置方式有两种
    // - 构建时配置：这里就是构建时配置 config/config.js -> layout
    // - 运行时配置：运行时配置，需要在 src/app.tsx -> layout
    // - 官方说明：https://umijs.org/zh-CN/plugins/plugin-layout
    name: 'umi-数字滚动',
    navTheme: 'light', // 'light' | 'dark'
    layout: 'side', // 'side' | 'top'
    fixSiderbar: true,
    locale: true,
  },
  routes: routes,
  antd: {
    // 开启插件 plugin - antd
    dark: false,
    // compact: true, // 紧凑模式
  },
});
