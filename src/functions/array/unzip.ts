import times from '../utility/times';
import maxBy from '../math/maxBy';
import invariant from '../../.internal/invariant';

/**
 * unzips arrays together.
 *
 * @example
 *
 * unzip(zip([1, 2, 3], ['a', 'b', 'c']));
 * // => [[1, 2, 3], ['a', 'b', 'c']];
 *
 */

function unzip<T extends any[][]>(arrs: T): (T[number][number])[][] {
  invariant(arrs.length !== 0, `There is no items in argument array: ${arrs}`);

  const maxLength = maxBy(arrs, 'length');

  return times(maxLength, index =>
    arrs.flatMap(arr => (arr[index] === undefined ? [] : arr[index]))
  );
}

export default unzip;
