import React from 'react';
import { useUpdateEffect, useUpdate } from '@/utils';
import { Button } from 'antd';

const UseUpdateEffect = () => {
  useUpdateEffect(
    () => console.log('useUpdateEffect => componentDidUpdate'),
    [],
  );

  return (
    <div>
      <p>{'useUpdateEffect => componentDidUpdate'}</p>
      <Button onClick={useUpdate()}>update</Button>
    </div>
  );
};

export default UseUpdateEffect;
