import randomFloat from '../../functions/random/randomFloat';
import loop from '../../functions/utility/loop';

describe('randomFloat', () => {
  it('generates a random float between provided min and max.', () => {
    const min = 2;
    const max = 10;
    loop(100, () => {
      const randomNumber = randomFloat(min, max);

      expect(randomNumber).toBeGreaterThanOrEqual(min);
      expect(randomNumber).toBeLessThanOrEqual(max);
    });

    expect(randomFloat(2, 2)).toBe(2);
  });

  it('will throw error when min is bigger than max.', () => {
    expect(() => {
      randomFloat(10, 0);
    }).toThrow();
  });
});
