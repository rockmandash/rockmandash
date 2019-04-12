import { MAX_ARRAY_LENGTH } from '../../constant';
import loop from './loop';
import invariant from '../../.internal/invariant';

/**
 * This function makes writing for loops more functional way.
 * It invokes the iteratee `n` times, and it will return new Array of provided callback result.
 *
 * @example
 *
 * times(5, index => index);
 * // => [0, 1, 2, 3, 4]
 *
 */

function times<T>(loopTimes: number, callback: (index: number) => T): T[] {
  invariant(
    loopTimes >= 0,
    `loopTimes argument must be greater or equal than 0, but got number: ${loopTimes}`
  );

  invariant(
    Number.isSafeInteger(loopTimes),
    `loopTimes argument must be a Safe Integer, but got number: ${loopTimes}`
  );

  invariant(
    loopTimes <= MAX_ARRAY_LENGTH,
    `loopTimes should be less than or equal to MAX_ARRAY_LENGTH: ${MAX_ARRAY_LENGTH}`
  );

  let result = new Array(loopTimes);

  loop(loopTimes, index => {
    result[index] = callback(index);
  });

  return result;
}

export default times;
