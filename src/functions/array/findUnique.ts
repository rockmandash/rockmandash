import unique from './unique';
import count from '../array-string/count';

/**
 * Finds all unique value from given array.
 *
 * @example
 *
 * findUnique([1, 2, 2, 3, 4, 5])
 * // => [1, 3, 4, 5]
 *
 */

function findUnique<T>(arr: T[]): T[] {
  const uniqueArr = unique(arr);

  let result: T[] = [];

  uniqueArr.forEach(uniqueItem => {
    if (count(arr, uniqueItem) === 1) {
      result.push(uniqueItem);
    }
  });

  return result;
}

export default findUnique;
