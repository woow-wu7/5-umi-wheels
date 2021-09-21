import { useEffect, useRef } from 'react';

interface Ifn {
  (...args: any[]): void;
}

export const useInterval = (
  fn: Ifn,
  delay: number | undefined | null,
  options?: {
    immediate: boolean;
  },
) => {
  const { immediate = false } = options || { immediate: false };

  const refFn = useRef<Ifn>();
  refFn.current = fn;

  useEffect(() => {
    if (delay === null || delay === undefined) return;

    if (immediate) {
      refFn.current?.();
    }

    const timer = globalThis.setInterval(() => {
      refFn.current?.();
    }, delay);
    return () => { // 一定要清除上一次的定时器，不然事件之间会相互影响，比如执行改变delay的事件时
      globalThis.clearInterval(timer);
    };
  }, [delay, immediate]);
};
