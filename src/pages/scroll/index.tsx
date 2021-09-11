import { PageContainer } from '@ant-design/pro-layout';
import Flip from './Flip';

const Scroll = () => {
  return (
    <PageContainer
      header={{
        title: '数字滚动',
        ghost: true,
        breadcrumb: {
          routes: [
            {
              path: '',
              breadcrumbName: '首页',
            },
            {
              path: '',
              breadcrumbName: '数字滚动',
            },
          ],
        },
      }}
    >
      <Flip />
    </PageContainer>
  );
};

export default Scroll;
