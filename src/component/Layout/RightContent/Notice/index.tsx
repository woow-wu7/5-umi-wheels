import React, { useState, useEffect } from 'react';
import { BellOutlined } from '@ant-design/icons';
import { Badge } from 'antd';
import styles from './index.less';
import NoticeCard from './Card';
import { useLocalStorageState } from '@/utils/hooks';

interface NoticeProps {}

const cardContent = () => [
  ['更新：更新了部分ui渲染和逻辑处理', 'yellow'],
  ['修复：修复了页面重复渲染的bug', 'red'],
  ['更新内容 33333333333333333'],
  ['更新内容 444444444'],
  ['更新内容 555555555'],
];

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
