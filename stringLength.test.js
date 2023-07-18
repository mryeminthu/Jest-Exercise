const stringLength = require('./stringLength');

describe('stringLength', () => {
  test('returns the correct length', () => {
    expect(stringLength('calculator')).toBe(10);
  });


  test('an error for a string longer than 10 characters', () => {
    expect(() => {
      stringLength('encyclopedia');
    }).toThrow('String should not exceed 10 characters');
  });

  test('throws an error', () => {
    expect(() => {
      stringLength('');
    }).toThrow('String should have at least 1 character');
  });
});