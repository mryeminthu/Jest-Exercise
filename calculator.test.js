const Calculator = require('./calculator');

describe('calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add', () => {
    test('adds two numbers', () => {
      expect(calculator.add(2, 8)).toBe(10);
    });

    test('add negative numbers', () => {
      expect(calculator.add(-4, -4)).toBe(-8);
    });
  });

  describe('subtract', () => {
    test('subtracts two numbers', () => {
      expect(calculator.subtract(6, 5)).toBe(1);
    });
  });

  describe('divide', () => {
    test('divides two numbers', () => {
      expect(calculator.divide(12, 3)).toBe(4);
    });

    test('throws an error when dividing by zero', () => {
      expect(() => {
        calculator.divide(10, 0);
      }).toThrow('It should not be zero');
    });
  });

  describe('multiply', () => {
    test('multiplies two numbers', () => {
      expect(calculator.multiply(4, 4)).toBe(16);
    });

    test('returns zero when multiplying by zero', () => {
      expect(calculator.multiply(5, 0)).toBe(0);
    });
  });
});
