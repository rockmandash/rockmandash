import clamp from '../../functions/math/clamp';

describe('clamp', () => {
  it('clamps `number` between `min` and `max` bounds.', () => {
    let value1 = 5;

    expect(clamp(1, value1, 12)).toBe(5);
    expect(clamp(8.2, value1, 9.4)).toBe(8.2);
    expect(clamp(3.9, value1, 4.2)).toBe(4.2);
    expect(clamp(0, value1, 0)).toBe(0);

    let value2 = -2;

    expect(clamp(1, value2, 12)).toBe(1);
    expect(clamp(-7, value2, -4)).toBe(-4);
  });

  it('should throw error when passing invalid arguments', () => {
    let value3 = 1;

    expect(() => {
      clamp(10, value3, 9.9);
    }).toThrow();

    expect(() => {
      clamp(10, value3, NaN);
    }).toThrow();
  });
});
