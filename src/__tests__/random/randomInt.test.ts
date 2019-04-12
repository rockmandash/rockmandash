import randomInt from '../../functions/random/randomInt';
import loop from '../../functions/utility/loop';

describe('randomInt', () => {
  it('generates a random integer between provided min and max.', () => {
    const min = 0;
    const max = 10;
    loop(100, () => {
      const randomNumber = randomInt(min, max);

      expect(randomNumber).toBeGreaterThanOrEqual(min);
      expect(randomNumber).toBeLessThanOrEqual(max);
    });

    expect(randomInt(2, 2)).toBe(2);
  });

  it('will throw error when min is bigger than max.', () => {
    expect(() => {
      randomInt(10, 0);
    }).toThrow();
  });

  it('will throw error when passing floating points.', () => {
    expect(() => {
      randomInt(0, 2.5);
    }).toThrow();
  });
});
