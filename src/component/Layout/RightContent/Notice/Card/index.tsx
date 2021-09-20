import React from 'react';
import { Card, Button } from 'antd';
import styles from './index.less';

interface NoticeModalProps {
  visible: boolean;
  data: string[][];
  handleOk: (e: any) => void;
}

const NoticeModal: React.FC<NoticeModalProps> = (props) => {
  const { visible = false, data = [[]], handleOk } = props;

  const renderCards = () =>
    data.map((cardItemArr, index) => {
      const [content, color] = cardItemArr;
      if (cardItemArr.length === 1) {
        return <p key={index}>{content}</p>;
      } else {
        return (
          <p key={index}>
            <span style={{ background: `${color}` }}>{content}</span>
          </p>
        );
      }
    });

  return (
    <Card
      title="消息更新推送"
      className={visible ? styles.cardShow : styles.cardHide}
      size="small"
    >
      {renderCards()}
      <Button size="small" type="primary" onClick={(e: any) => handleOk(e)}>
        知道了
      </Button>
    </Card>
  );
};

export default NoticeModal;
