import randomInt from './randomInt';
import pullAt from '../array/pullAt';
import times from '../utility/times';
import invariant from '../../.internal/invariant';

function randomPickOne<T>(arr: T[]): T {
  return arr[randomInt(0, arr.length - 1)];
}

/**
 * Gets `n` random elements from `array`
 *
 * @example
 *
 * sample([1, 2, 3, 4, 5, 6, 7]);
 * // => 6
 *
 */

function sample<T>(arr: T[]): T;

/**
 * Gets `n` random elements from `array`
 *
 * @example
 *
 * sample([1, 2, 3, 4, 5, 6, 7], 3);
 * // => [3, 1, 2]
 *
 */

function sample<T>(arr: T[], size: number): T[];

function sample<T>(arr: T[], size?: number): T | T[] {
  if (typeof size === 'number') {
    invariant(
      Number.isInteger(size),
      `Argument size: ${size} should be integer.`
    );

    invariant(
      size >= 0,
      `Argument size: ${size} should be bigger than or equal to zero.`
    );

    invariant(
      size <= arr.length,
      `Argument size: ${size} should should be less than or equal to array's length: ${
        arr.length
      }.`
    );

    if (size === 0) {
      return [];
    }
    if (size === 1) {
      return [randomPickOne(arr)];
    }

    let newArr = Array.from(arr);

    return times(size, () => pullAt(newArr, randomInt(0, newArr.length - 1)));
  } else {
    return randomPickOne(arr);
  }
}

export default sample;
