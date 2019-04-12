import randomInt from './randomInt';
import swapArray from '../array/swapArray';
import loop from '../utility/loop';

/**
 * Creates an array of shuffled values, using a version of the
 * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
 * [Fisher-Yates shuffle visualization](https://bost.ocks.org/mike/shuffle/).
 *
 * @example
 *
 * shuffle([1, 2, 3, 4, 5]);
 * // => [4, 1, 2, 3, 5]
 *
 */

function shuffle<T>(arr: T[]): T[] {
  let result = Array.from(arr);

  if (arr.length > 0) {
    loop(result.length - 1, index => {
      const current = result.length - 1 - index;
      const randomIndex = randomInt(0, current);
      swapArray(result, current, randomIndex);
    });
  }
  return result;
}

export default shuffle;
