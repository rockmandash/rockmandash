import inRange from '../../functions/math/inRange';

describe('inRange', () => {
  it('checks if a number is in a specified range', () => {
    const num1 = 10;
    const num2 = 0;
    const num3 = 5.5;

    expect(inRange(0, num1, 10)).toBe(true);
    expect(inRange(0, num2, 10)).toBe(true);
    expect(inRange(0, num3, 10)).toBe(true);
    expect(inRange(0, num3, 5.5)).toBe(true);

    const num4 = 20;
    const num5 = -10;
    const num6 = -1.2;

    expect(inRange(0, num4, 10)).toBe(false);
    expect(inRange(0, num5, 10)).toBe(false);
    expect(inRange(0, num6, 10)).toBe(false);
  });

  it('will throw error when argument min is bigger than max.', () => {
    const min = 10;
    const max = 9;

    expect(() => {
      inRange(min, 0, max);
    }).toThrow();
  });
});
