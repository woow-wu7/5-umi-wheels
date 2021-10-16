// https://umijs.org/zh-CN/plugins/plugin-layout

export default [
  {
    path: '/login',
    name: 'login',
    component: '@/pages/Login',
    layout: false,
    hideInMenu: true,
  },
  {
    path: '/',
    name: 'home',
    extract: true,
    redirect: '/a-hooks/useUpdate',
    hideInMenu: true,
  },
  {
    path: '/a-hooks',
    name: 'a-hooks',
    routes: [
      {
        path: 'useUpdate',
        name: 'useUpdate',
        component: '@/pages/Ahooks/UseUpdate',
      },
      {
        path: 'useUpdateEffect',
        name: 'useUpdateEffect',
        component: '@/pages/Ahooks/UseUpdateEffect',
      },
      {
        path: 'useInterval',
        name: 'useInterval',
        component: '@/pages/Ahooks/UseInterval',
      },
      {
        path: 'useEventTarget',
        name: 'useEventTarget',
        component: '@/pages/Ahooks/useEventTarget',
      },
      {
        path: 'useHover',
        name: 'useHover',
        component: '@/pages/Ahooks/useHover',
      },
    ],
  },
  {
    path: '/number',
    name: '数字滚动',
    component: '@/pages/Scroll',
    target: '_blank',
    access: 'canViewNumber',
  }, // 之前在这里配置路由没有生效，原因是存在 .umirc.ts 和 config/config.js 两个文件配置不一样，并且 .umirc.ts 优先级别计较高
  {
    path: '/drag',
    name: '拖动',
    component: '@/pages/Drag',
    target: '_blank',
  },
];
