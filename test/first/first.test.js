import { sum } from './first';

describe('sum的返回值是3吗？', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3); // 测试sum函数的返回值，是不是3
  });
});

// 测试
// 1
// expect(value)
// 作用：测试一个值时使用 expect 函数
// 参数：value是代码产生的值
// toBe
// 作用：toBe 是 ( 匹配器函数 )
