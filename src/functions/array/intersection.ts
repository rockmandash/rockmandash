import unique from './unique';

/**
 * Creates an array of unique values that are included in all given arrays
 *
 * @example
 *
 * intersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7], [3, 4, 5, 8, 9])
 * // => [3, 4, 5]
 *
 */

function intersection<T extends any[][]>(...rest: T): (T[number][number])[] {
  return unique(rest.reduce((a, b) => a.filter(c => b.includes(c))));
}

export default intersection;
