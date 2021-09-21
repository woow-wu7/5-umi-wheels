import React from 'react';
import { useState } from 'react';
import { Button } from 'antd';
import { PageContainer } from '_@ant-design_pro-layout@6.24.3@@ant-design/pro-layout';
import { useInterval } from '@/utils/hooks';

export default function UseInterval() {
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [immediate, setImmediate] = useState(false);

  useInterval(
    () => {
      setCount(count + 1);
    },
    delay,
    { immediate },
  );

  const click = (type: 'add' | 'dec') => {
    setDelay((prev) => prev + (type === 'add' ? 1000 : -1000));
  };

  return (
    <PageContainer
      header={{
        title: 'useInterval',
        ghost: true,
        breadcrumb: {
          routes: [
            {
              path: '',
              breadcrumbName: 'a-hooks',
            },
            {
              path: '',
              breadcrumbName: 'useInterval',
            },
          ],
        },
      }}
    >
      <p>{'useInterval'}</p>
      <p>count: {count}</p>
      <p>delay: {delay}</p>
      <p>
        注意：改变immediate=true时，在改变delay时，每一次delay改变都会立即执行
      </p>
      <Button onClick={() => click('add')}>delay: +1000</Button>
      <Button onClick={() => click('dec')}>delay: -1000</Button>
      <Button onClick={() => setImmediate(true)}>immediate: true</Button>
      <Button onClick={() => setImmediate(false)}>not-immediate: false</Button>
    </PageContainer>
  );
}
