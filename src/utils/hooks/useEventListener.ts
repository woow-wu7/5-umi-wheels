import React, { useEffect } from 'react';

interface Options<T = any> {
  target?: React.MutableRefObject<undefined | T>;
  capture?: boolean;
  once?: boolean;
  passive?: boolean;
}

export const useEventListener = (
  name: string,
  handler: Function,
  options: Options,
) => {
  const {
    target,
    capture = false,
    once = false,
    passive = false,
  } = options || {};

  useEffect(() => {
    const DOM = target?.current ?? window;
    DOM.addEventListener(name, handler, { capture, once, passive });
    return () => {
      DOM.removeEventListener(name, handler, { capture });
    };
  }, [target, capture, once, passive]);
};
