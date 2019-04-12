import unique from '../array/unique';
import count from './count';

/**
 * Checks if `array` has no duplicated value.
 *
 * @example
 *
 * isUnique('aabcd');
 * // => false
 *
 */

function isUnique(str: string): boolean;

/**
 * Checks if `array` has no duplicated value.
 *
 * @example
 *
 * isUnique([0, 1, 2, 3, 4, 5]);
 * // => true
 *
 */

function isUnique(arr: any[]): boolean;

function isUnique(arrOrString: string | any[]): boolean {
  if (typeof arrOrString === 'string') {
    return unique(arrOrString).length === arrOrString.length;
  } else {
    return arrOrString.every(item => count(arrOrString, item) === 1);
  }
}

export default isUnique;
