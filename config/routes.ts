export default [
  { path: '/', name: 'useUpdate', component: 'index' },
  { path: '/useUpdateEffect', name: 'useUpdateEffect', component: '@/pages/useUpdateEffect' },
  { path: '/number', name: '数字滚动', component: '@/pages/scroll' }, // 之前在这里配置路由没有生效，原因是存在 .umirc.ts 和 config/config.js 两个文件配置不一样，并且 .umirc.ts 优先级别计较高
];
