import styles from '../index.less';

export const processColsToArray = (data: number) => {
  return String(data)
    .split('')
    .map((str) => Number(str));
};

export const processColToArray = (col: number) => {
  const colArr = new Array(8).fill(0).map((_, index) => index % 10);
  colArr.push(col);
  colArr.unshift(col);
  return colArr;
};

export const getColWrapClassName = (colIndex: number, count: number) => {
  return colIndex % 2 === 0
    ? count % 2 === 0
      ? styles.colContentDown
      : styles.colContentUp
    : count % 2 === 0
    ? styles.colContentUp
    : styles.colContentDown;
};
