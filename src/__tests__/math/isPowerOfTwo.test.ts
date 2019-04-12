import isPowerOfTwo from '../../functions/math/isPowerOfTwo';

describe('isPowerOfTwo', () => {
  it('tests whether a number is power of two.', () => {
    expect(isPowerOfTwo(-16)).toBeFalsy();
    expect(isPowerOfTwo(-8)).toBeFalsy();
    expect(isPowerOfTwo(-4)).toBeFalsy();
    expect(isPowerOfTwo(-2)).toBeFalsy();
    expect(isPowerOfTwo(-1)).toBeFalsy();
    expect(isPowerOfTwo(0)).toBeFalsy();
    expect(isPowerOfTwo(3.5)).toBeFalsy();

    expect(isPowerOfTwo(0.25)).toBeTruthy();
    expect(isPowerOfTwo(0.5)).toBeTruthy();
    expect(isPowerOfTwo(1)).toBeTruthy();
    expect(isPowerOfTwo(2)).toBeTruthy();
    expect(isPowerOfTwo(16)).toBeTruthy();
    expect(isPowerOfTwo(32)).toBeTruthy();
  });

  it('will throw error when passing invalid number ', () => {
    expect(() => {
      isPowerOfTwo(NaN);
    }).toThrow();
  });
});
