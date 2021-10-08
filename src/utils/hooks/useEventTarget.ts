import { useState, useCallback } from 'react';

// type V = string | number | readonly string[] | undefined;

interface EventTarget<U> {
  target: {
    value: U;
  };
}

interface Options<T, U> {
  initValue?: T;
  transformer?: (value: U) => T;
}

export const useEventTarget = <T, U>(options: Options<T, U>) => {
  const { initValue, transformer } = options;
  const [value, setValue] = useState(initValue);

  const onChange = useCallback((e: EventTarget<U>) => {
    const value = e.target.value;

    if (typeof transformer === 'function') {
      const res = transformer(value);
      setValue(res);
      return;
    }

    // no transformer => U and T should be the same
    // 没有转换函数，则直接设置
    setValue(value as unknown as T);
  }, []);

  const reset = useCallback(() => setValue(initValue), []);

  return [
    value,
    { // 记得用useCallback缓存这两个返回的函数
      onChange,
      reset,
    },
  ] as const;
};
