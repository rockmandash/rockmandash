import shuffle from '../../functions/random/shuffle';
import loop from '../../functions/utility/loop';
import times from '../../functions/utility/times';

describe('shuffle', () => {
  it('returns elements, randomly sorted', () => {
    const count = 10;
    const testTimes = 2000;

    let numbersObj: { [numberIndexName: string]: number[] } = {};

    loop(count, index => {
      numbersObj[`number${index}Index`] = times(count, () => 0);
    });

    loop(testTimes, () => {
      const original = times(count, index => index);
      const shuffled = shuffle(original);

      loop(count, index => {
        numbersObj[`number${index}Index`][shuffled.indexOf(index)] += 1;
      });

      expect(original !== shuffled).toBe(true);
      expect(original).not.toEqual(shuffled);

      expect(original.sort()).toEqual(shuffled.sort());
    });

    // Teesting Probability
    loop(count, index => {
      loop(count, index2 => {
        const probability =
          numbersObj[`number${index}Index`][index2] / (testTimes / count);

        expect(probability).toBeGreaterThanOrEqual(0.75);
        expect(probability).toBeLessThanOrEqual(1.25);
      });
    });
  });
});
