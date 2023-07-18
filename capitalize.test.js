const capitalize = require('./capitalize');

describe('capitalize', () => {
  test('capitalizes the first character', () => {
    expect(capitalize('radar')).toBe('Radar');
    expect(capitalize('world')).toBe('World');
  });
});
