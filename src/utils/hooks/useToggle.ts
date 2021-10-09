import { useState, useMemo } from 'react';

type IState = string | number | boolean | undefined;

export const useToggle = (initialState?: IState, reverseState?: IState) => {
  const [state, setState] = useState(initialState);

  const actions = useMemo(() => {
    const reverse = reverseState === undefined ? !initialState : reverseState;

    const left = () => setState(() => initialState);

    const right = () => setState(() => reverse);

    const toggle = (value?: IState) => {
      if (value === undefined) {
        setState((prevState: IState) =>
          prevState === initialState ? reverse : initialState,
        );
        return;
      }
      setState(() => value);
    };

    return {
      toggle,
      left,
      right,
    };
  }, [initialState, reverseState]);

  return [state, actions] as const;
};
