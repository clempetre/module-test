const { add, sub } = require('../main');

describe('add function', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
  });

  test('adds 0 + 0 to equal 0', () => {
    expect(add(0, 0)).toBe(0);
  });

});

describe('sub function', () => {
    test('sub 4 - 3 to equal 1', () => {
        expect(sub(4, 3)).toBe(1);
      });
});
