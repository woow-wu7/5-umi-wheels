import React, { useEffect } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card } from 'antd';

interface DragComponentProps {}

const DragComponent: React.FC<DragComponentProps> = (props) => {
  const {} = props;
  useEffect(() => {
    // 拖拽事件
    document.addEventListener('dragstart', () => console.log('dragstart'), false);
    document.addEventListener('dragenter', () => console.log('dragenter'), false);
    document.addEventListener('dragover', () => console.log('dragover'), false);
    document.addEventListener('drop', () => console.log('drop'), false);
    document.addEventListener('dragend', () => console.log('dragend'), false);
  }, []);
  return (
    <PageContainer
      header={{
        title: 'Drag',
        ghost: true,
        breadcrumb: {
          routes: [
            {
              path: '',
              breadcrumbName: '首页',
            },
            {
              path: '',
              breadcrumbName: 'Drag',
            },
          ],
        },
      }}
    >
      <Card title="拖拽事件" style={{
        height: '200px',
        width: '300px'
      }}></Card>
    </PageContainer>
  );
};

export default DragComponent;
