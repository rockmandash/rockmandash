import unique from './unique';
import count from '../array-string/count';

/**
 * Finds all repeat values from given array.
 *
 * @example
 *
 * findRepeat([1, 2, 2, 3, 4, 5])
 * // => [2]
 *
 */

function findRepeat<T>(arr: T[]): T[] {
  const uniqueArr = unique(arr);

  let result: T[] = [];

  uniqueArr.forEach(uniqueItem => {
    if (count(arr, uniqueItem) >= 2) {
      result.push(uniqueItem);
    }
  });

  return result;
}

export default findRepeat;
