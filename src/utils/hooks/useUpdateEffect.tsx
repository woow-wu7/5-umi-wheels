import React, { useRef, useEffect } from 'react';

// useUpdateEffect
// 1
// 类型：是一个 useEffect 函数类型
// 2
// useUpdateEffect(
//   effect: () => (void | (() => void | undefined)),
//   deps?: deps,
// )
const useUpdateEffect: typeof useEffect = (effect, deps) => {
  const isMount = useRef(false);

  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
    } else {
      return effect();
      // 1. update => 第一次不执行effect()，只有也只会在依赖更新时执行即除了第一次，以后和useEffect行为保持一致
      // 2. 如果没有依赖项 deps，则和 ( componentDidMount ) 行为保持一致

      // 注意：
      // 1. 这里的 return 是为了完全模拟 useEffect，因为 useEffect 可以还有清除函数
      // 2. effect函数签名是：effect: () => (void | (() => void | undefined)) 说明可以返回一个清除函数
    }
  }, deps);
};

export { useUpdateEffect };
