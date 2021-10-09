import { useEventListener, useToggle } from './index';

interface Options {
  onEnter?: Function;
  onLeave?: Function;
}
export const useHover = (ref: any, options?: Options) => {
  const { onEnter, onLeave } = options || {};
  const [state, { toggle }] = useToggle(false);

  useEventListener(
    'mouseenter',
    () => {
      onEnter && onEnter();
      toggle();
    },
    {
      target: ref,
    },
  );

  useEventListener(
    'mouseleave',
    () => {
      onLeave && onLeave();
      toggle();
    },
    {
      target: ref,
    },
  );

  return state;
};
