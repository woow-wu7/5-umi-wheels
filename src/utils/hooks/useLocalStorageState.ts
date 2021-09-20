import { useState, useCallback, useEffect, useRef } from 'react';

const isFunction = <T>(obj: any): obj is T => {
  return typeof obj === 'function';
};

const jsonToStringify = (value: Object) => {
  return JSON.stringify(value);
};

const useUpdateEffect: typeof useEffect = (effect, deps) => {
  const isMount = useRef(true);
  useEffect(() => {
    if (isMount.current) {
      isMount.current = false;
    } else {
      effect();
    }
  }, deps);
};

interface IDefaultValueFn<T> {
  (pervValue?: T): T;
}

const useLocalStorageState = <T>(
  key: string,
  defaultValue?: T | IDefaultValueFn<T>,
) => {
  const storage = window.localStorage;

  const getStorageValue = () => {
    try {
      const raw = storage.getItem(key);
      if (raw) {
        return JSON.parse(raw);
      }
      if (isFunction<IDefaultValueFn<T>>(defaultValue)) {
        return defaultValue();
      }
      return defaultValue;
    } catch (err) {
      console.log(`err`, err);
    }
  };

  const [state, setState] = useState<T | undefined>(() => getStorageValue());
  useUpdateEffect(() => {
    setState(() => getStorageValue());
  }, [key]);

  const updateState = useCallback(
    (value?: T | IDefaultValueFn<T>) => {
      try {
        if (typeof value === 'undefined') {
          storage.removeItem(key);
          setState(() => undefined);
        } else if (isFunction<IDefaultValueFn<T>>(value)) {
          const pervState = getStorageValue();
          const nextState = value(pervState);
          storage.setItem(key, jsonToStringify(nextState));
          setState(() => nextState);
        } else {
          storage.setItem(key, jsonToStringify(value));
          setState(() => value);
        }
      } catch (err) {
        console.log(`err`, err);
      }
    },
    [key],
  );

  if (!storage) {
    return [
      isFunction<IDefaultValueFn<any>>(defaultValue)
        ? defaultValue()
        : defaultValue,
      () => {},
    ];
  }

  return [state, updateState];
};

export { useLocalStorageState };
