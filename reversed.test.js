const reverseString = require('./reversed');

describe('reverseString', () => {
  test('return reversed string', () => {
    expect(reverseString('world')).toBe('dlrow');
  });
});