import sum from './sum';
import invariant from '../../.internal/invariant';

/**
 * Computes the mean of the values in `array`.
 *
 * @example
 *
 * mean([0, 1, 2, 3, 4, 5]);
 * // => 2.5
 *
 */

function mean(arr: number[]): number {
  invariant(arr.length !== 0, `There is no items in argument array: ${arr}`);

  return sum(arr) / arr.length;
}

export default mean;
