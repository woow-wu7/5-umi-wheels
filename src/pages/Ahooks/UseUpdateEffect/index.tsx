import { useUpdateEffect, useUpdate } from '@/utils';
import { Button } from 'antd';
import { PageContainer } from '_@ant-design_pro-layout@6.24.3@@ant-design/pro-layout';

export default function UseUpdateEffect() {
  useUpdateEffect(
    () => console.log('useUpdateEffect => componentDidUpdate'),
    [],
  );

  return (
    <PageContainer
      header={{
        title: 'UseUpdateEffect',
        ghost: true,
        breadcrumb: {
          routes: [
            {
              path: '',
              breadcrumbName: 'a-hooks',
            },
            {
              path: '',
              breadcrumbName: 'useUpdateEffect',
            },
          ],
        },
      }}
    >
      <p>{'useUpdateEffect => componentDidUpdate'}</p>
      <Button onClick={useUpdate()}>Test-useUpdateEffect</Button>
    </PageContainer>
  );
}
