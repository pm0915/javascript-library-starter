import sum from '../src/sum';

// 测试sum函数
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
