import { defineConfig } from 'umi';

export default defineConfig({
  layout: {}, // 不添加layout不会有菜单部分的布局，添加了配置后，需要要从新 cnpm run start，webpack会在后台增量编译
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
});
