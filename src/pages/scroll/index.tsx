import { PageContainer } from '@ant-design/pro-layout';
import { useModel } from 'umi';
import Flip from './Flip';

const Scroll = () => {
  // const { user } = useModel('user', model => ({ user: model.user }));
  const { user } = useModel('user');
  console.log(`user`, user);
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
