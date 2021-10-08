import { Input, Button, Space } from 'antd';
import { PageContainer } from '_@ant-design_pro-layout@6.24.3@@ant-design/pro-layout';
import { useEventTarget } from '@/utils/hooks/useEventTarget';

export default function UseInterval() {
  const [value, { onChange, reset }] = useEventTarget({
    initValue: '',
    transformer: (val: string) => val.replace(/[^\d]/g, ''),
    // 正则表示：输入的不是数字的部分都会被转成''
    // [^] 是 ( 字符类 ) 中的 ( 脱字符 )，表示除了字符类之中的字符，其他字符都可以匹配
    // - 字符类（class）表示有一系列字符可供选择，只要匹配其中一个就可以了。所有可供选择的字符都放在方括号内，比如[xyz] 表示x、y、z之中任选一个匹配
  });

  return (
    <PageContainer
      header={{
        title: 'useEventTarget',
        ghost: true,
        breadcrumb: {
          routes: [
            {
              path: '',
              breadcrumbName: 'a-hooks',
            },
            {
              path: '',
              breadcrumbName: 'useEventTarget',
            },
          ],
        },
      }}
    >
      <Space>
        <Input value={value} onChange={onChange} placeholder="请输入" />{' '}
        <Button onClick={reset}>重置</Button>
      </Space>
    </PageContainer>
  );
}
