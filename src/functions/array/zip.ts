import times from '../utility/times';
import maxBy from '../math/maxBy';
import invariant from '../../.internal/invariant';

/**
 * zips arrays together.
 *
 * @example
 *
 * zip([1, 2, 3], ['a', 'b', 'c']);
 * // => [[1, 'a'], [2, 'b'], [3, 'c']];
 *
 */

function zip<T extends any[][]>(...arrs: T): (T[number][number])[][] {
  invariant(arrs.length !== 0, `There is no items in argument array: ${arrs}`);

  const maxLength = maxBy(arrs, 'length');

  return times(maxLength, index => arrs.map(arr => arr[index]));
}

export default zip;
