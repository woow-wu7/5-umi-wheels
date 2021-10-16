// app.tsx
// 1. -> 运行时配置文件
// 2. -> 可以在这里扩展运行时的能力，比如：修改路由，修改render()方法等

export { layout } from '../config/layout';
export { request } from '../config/request';

export async function getInitialState() {
  console.log('init-app');
  // const data = await fetchXXX();
  const data = await new Promise((resolve) => {
    setTimeout(() =>
      resolve({
        name: 'woow_wu7',
      }),
    );
  });
  return data;
}
