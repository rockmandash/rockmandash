import findUnique from './findUnique';
import unique from './unique';

/**
 * Creates an array of unique values based on all given arrays.
 *
 * @example
 *
 * xor([2, 1], [2, 3]);
 * // => [1, 3]
 *
 */

function xor<T>(...arrs: T[][]): T[] {
  const uniqueArrs = arrs.map(arr => unique(arr));
  return findUnique(uniqueArrs.flat());
}

export default xor;
