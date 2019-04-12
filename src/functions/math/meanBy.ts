import mean from './mean';
import invariant from '../../.internal/invariant';

/**
 * This method calculates mean value in the given array by using provided callback.
 *
 * @example
 *
 * const data = [
 *   { value: 1, k: 123 },
 *   { hello: 2, value: 10 },
 *   { value: 3 },
 *   { value: 4 }
 * ];
 *
 * meanBy(data, 'value');
 * // => 4.5
 *
 */

function meanBy<K extends string, T extends { [key in K]: number }>(
  arr: T[],
  str: K
): number;

/**
 * This method calculates mean value in the given array by using provided callback.
 *
 * @example
 *
 * const data = [
 *   { value: 1, k: 123 },
 *   { hello: 2, value: 10 },
 *   { value: 3 },
 *   { value: 4 }
 * ];
 *
 * meanBy(data, item => item.value);
 * // => 4.5
 *
 */

function meanBy<T>(arr: T[], callback: (value: T) => number): number;

function meanBy<K extends string, T extends { [key in K]: number }>(
  arr: T[],
  callbackOrString: K | ((value: T) => number)
): number {
  invariant(arr.length !== 0, `There is no items in argument array: ${arr}`);

  const numbers =
    typeof callbackOrString === 'string'
      ? arr.map(item => item[callbackOrString])
      : arr.map(item => callbackOrString(item));

  return mean(numbers);
}

export default meanBy;
