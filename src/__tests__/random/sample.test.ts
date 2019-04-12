import sample from '../../functions/random/sample';
import loop from '../../functions/utility/loop';
import randomInt from '../../functions/random/randomInt';
import isUnique from '../../functions/array-string/isUnique';

describe('sample', () => {
  it('gets 1 random elements from `array`', () => {
    loop(100, () => {
      const arr = [1, 2, 3, 4, 5, 6, 7];
      let sampledOne = sample(arr);
      expect(arr.includes(sampledOne)).toBeTruthy();
    });
  });

  it('gets `n` random elements from `array` if passing second argument.', () => {
    loop(500, () => {
      const size = randomInt(1, 7);
      const arr = [1, 2, 3, 4, 5, 6, 7];
      let sampled = sample(arr, size);

      expect(sampled.length).toBe(size);
      expect(sampled.every(item => arr.includes(item))).toBeTruthy();
      expect(isUnique(sampled)).toBeTruthy();

      if (size === 7) {
        expect(sampled).not.toEqual(arr);
        expect(sampled.sort()).toEqual(arr);
      }
    });
  });

  it('will throw error when passing invalid arguments.`', () => {
    expect(() => {
      sample([1, 2, 3], -1);
    }).toThrow();

    expect(() => {
      sample([1, 2, 3], 1.5);
    }).toThrow();

    expect(() => {
      sample([1, 2, 3], 4);
    }).toThrow();
  });
});
