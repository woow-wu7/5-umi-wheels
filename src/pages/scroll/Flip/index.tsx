import React, { useState } from 'react';
import { Row, Col, Button } from 'antd';
import {
  processColsToArray,
  processColToArray,
  getColWrapClassName,
} from './utils';
import styles from './index.less';

interface NumberScrollProps {
  data?: number;
}

const Flip: React.FC<NumberScrollProps> = (props) => {
  const [count, setCount] = useState(0);
  const [colsArray] = useState(() =>
    processColsToArray(props?.data || 1234567),
  );

  const renderCols = () =>
    colsArray.map((col, colIndex) => (
      <Col key={colIndex} className={styles.Cols}>
        {renderCol(col, colIndex)}
      </Col>
    ));

  const renderCol = (col: any, colIndex: number) => {
    const colArr = processColToArray(col);
    return (
      <div className={getColWrapClassName(colIndex, count)}>
        {colArr.map((colItem, index) => (
          <div key={index} className={styles.colItem}>
            {colItem}
          </div>
        ))}
      </div>
    );
  };

  const renderButton = () => (
    <div
      style={{ marginTop: '30px', display: 'flex', justifyContent: 'center' }}
    >
      <Button onClick={() => setCount((prev) => prev + 1)}>run</Button>
    </div>
  );

  return (
    <>
      <Row
        style={{
          fontSize: '160px',
        }}
      >
        {renderCols()}
      </Row>
      {renderButton()}
    </>
  );
};

export default Flip;
