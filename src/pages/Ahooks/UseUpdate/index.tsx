import { Button } from 'antd';
import { useUpdate } from '@/utils/hooks';
import { PageContainer } from '@ant-design/pro-layout';
import { fetchError } from '@/services/login';
import styles from './index.less';

export default function UseUpdate() {
  const errorHandler = () => fetchError();

  return (
    <PageContainer
      header={{
        title: 'useUpdate',
        ghost: true,
        breadcrumb: {
          routes: [
            {
              path: '',
              breadcrumbName: 'a-hooks',
            },
            {
              path: '',
              breadcrumbName: 'useUpdate',
            },
          ],
        },
      }}
    >
      <h1 className={styles.title}>Time: {`${+new Date()}`}</h1>
      <Button onClick={useUpdate()}>Test-useUpdate</Button>
      <Button onClick={errorHandler}>Test-errorHandler</Button>
    </PageContainer>
  );
}
