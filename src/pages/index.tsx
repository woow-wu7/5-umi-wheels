import { Button } from 'antd';
import { useUpdate } from '@/utils/useUpdate';
import { PageContainer } from '@ant-design/pro-layout';
import styles from './index.less';

export default function IndexPage() {
  return (
    <PageContainer
      header={{
        title: 'update',
        ghost: true,
        breadcrumb: {
          routes: [
            {
              path: '',
              breadcrumbName: '首页',
            },
            {
              path: '',
              breadcrumbName: 'update',
            },
          ],
        },
      }}
    >
      <h1 className={styles.title}>Time: {`${+new Date()}`}</h1>
      <Button onClick={useUpdate()}>Test-useUpdate</Button>
    </PageContainer>
  );
}
