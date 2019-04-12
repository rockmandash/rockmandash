import unique from './unique';

/**
 * Creates an array of unique values from all given arrays.
 *
 * @example
 *
 * union([1, 2, 3, 4, 5], [3, 4, 5, 6, 7], [1, 2, 4, 6, 7]);
 * // => [1, 2, 3, 4, 5, 6, 7]
 *
 */

function union<T>(...arrs: T[][]): T[] {
  return unique(arrs.flat());
}

export default union;
