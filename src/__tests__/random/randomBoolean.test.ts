import randomBoolean from '../../functions/random/randomBoolean';
import loop from '../../functions/utility/loop';

describe('randomBoolean', () => {
  it('generate a random boolean.', () => {
    let trueCount = 0;
    let falseCount = 0;
    const loopTimes = 10000;
    loop(loopTimes, () => {
      if (randomBoolean()) {
        trueCount += 1;
      } else {
        falseCount += 1;
      }
    });

    expect(trueCount / loopTimes).toBeGreaterThanOrEqual(0.49);
    expect(trueCount / loopTimes).toBeLessThanOrEqual(0.51);

    expect(falseCount / loopTimes).toBeGreaterThanOrEqual(0.49);
    expect(falseCount / loopTimes).toBeLessThanOrEqual(0.51);
  });
});
