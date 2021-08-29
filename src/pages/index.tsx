import { Button } from 'antd';
import { useUpdate } from '@/utils/useUpdate';
import styles from './index.less';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Time: {`${+new Date()}`}</h1>

      <Button onClick={useUpdate()}>Test-useUpdate</Button>
    </div>
  );
}
