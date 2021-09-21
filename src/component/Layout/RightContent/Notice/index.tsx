import React, { useState, useEffect } from 'react';
import { BellOutlined } from '@ant-design/icons';
import { Badge } from 'antd';
import NoticeCard from './Card';
import { useLocalStorageState } from '@/utils/hooks';
import { cardContent } from '@/utils';
import styles from './index.less';

interface NoticeProps {}

const Notice: React.FC<NoticeProps> = (props) => {
  const {} = props;
  const [dotVisible, setDotVisible] = useLocalStorageState('dot', true);
  const [card, setCard] = useLocalStorageState('card', cardContent());
  const [cardVisible, setCardVisible] = useState(false);

  useEffect(() => {
    if (String(cardContent()) !== String(card)) {
      setDotVisible(() => true);
    }
  }, []);

  const showCard = () => {
    setCardVisible((visible: boolean) => !visible);
  };

  const handleOk = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setCard(() => cardContent());
    setDotVisible(() => false);
    setCardVisible(() => false);
  };

  return (
    <div className={styles.noticeWrap} onClick={showCard}>
      <Badge dot={dotVisible}>
        <BellOutlined className={styles.icon} />
      </Badge>
      <NoticeCard
        visible={cardVisible}
        data={cardContent()}
        handleOk={handleOk}
      />
    </div>
  );
};

export default Notice;
