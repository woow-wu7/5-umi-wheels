import React, { useRef, useState } from 'react';
import { Input, Button, Space } from 'antd';
import { PageContainer } from '_@ant-design_pro-layout@6.24.3@@ant-design/pro-layout';
import { useToggle, useEventListener, useHover } from '@/utils/hooks/index';
export default function UseHover() {
  const [state, { toggle, left, right }] = useToggle(1);
  const [number, setNumber] = useState(0);

  const ref = useRef<any>();
  const hoverRef = useRef<any>();

  useEventListener('click', () => setNumber((prev) => prev + 1), {
    target: ref,
  });

  const isHover = useHover(hoverRef, {
    onEnter() {
      console.log('enter');
    },
    onLeave() {
      console.log('leave');
    },
  });

  return (
    <PageContainer
      header={{
        title: 'useHover',
        ghost: true,
        breadcrumb: {
          routes: [
            {
              path: '',
              breadcrumbName: 'a-hooks',
            },
            {
              path: '',
              breadcrumbName: 'useHover',
            },
          ],
        },
      }}
      style={{ marginBottom: '20px' }}
    >
      <p>useHover - 依赖 useBoolean 和 useToggle</p>
      <div style={{ background: '#fff' }}>
        <p>useToggle</p>
        <div>
          <p>current: {state}</p>
          <Space>
            <button onClick={() => toggle()}>toggle</button>
            <button onClick={() => toggle(2)}>toggle(2)</button>
            <button onClick={() => toggle(1)}>toggle(1)</button>
            <button onClick={() => left()}>left</button>
            <button onClick={() => right()}>right</button>
          </Space>
        </div>
      </div>

      <div style={{ background: '#fff', marginTop: '20px' }}>
        <p>useEventListener</p>
        <p>number: {number}</p>
        <Space>
          <Button ref={ref}>useEventListener</Button>
        </Space>
      </div>

      <div style={{ background: '#fff', marginTop: '20px' }}>
        <p style={{ marginTop: '20px' }} ref={hoverRef}>
          {isHover ? 'enter' : 'leave'}
        </p>
        <Space>
          <Button>useHover</Button>
        </Space>
      </div>
    </PageContainer>
  );
}
