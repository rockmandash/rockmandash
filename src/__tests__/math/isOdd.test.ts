import isOdd from '../../functions/math/isOdd';

describe('isOdd', () => {
  it('returns true if the given number is odd.', () => {
    expect(isOdd(0)).toBe(false);
    expect(isOdd(2)).toBe(false);
    expect(isOdd(1)).toBe(true);
    expect(isOdd(3)).toBe(true);
    expect(isOdd(-1)).toBe(true);
    expect(isOdd(-3)).toBe(true);
  });

  it('will throw error when passing invalid number ', () => {
    expect(() => {
      isOdd(1.5);
    }).toThrow();

    expect(() => {
      isOdd(Number.MAX_SAFE_INTEGER + 1);
    }).toThrow();

    expect(() => {
      isOdd(NaN);
    }).toThrow();
  });
});
