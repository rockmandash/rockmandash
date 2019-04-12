import invariant from '../../.internal/invariant';

/**
 * This method calculates max value in the given array by using provided callback.
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
 * maxBy(data, 'value');
 * // => 10
 *
 */

function maxBy<K extends string, T extends { [key in K]: number }>(
  arr: T[],
  str: K
): number;

/**
 * This method calculates max value in the given array by using provided callback.
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
 * maxBy(data, item => item.value);
 * // => 10
 *
 */

function maxBy<T>(arr: T[], callback: (value: T) => number): number;

function maxBy<K extends string, T extends { [key in K]: number }>(
  arr: T[],
  callbackOrString: K | ((value: T) => number)
): number {
  invariant(arr.length !== 0, `There is no items in argument array: ${arr}`);

  const numbers =
    typeof callbackOrString === 'string'
      ? arr.map(item => item[callbackOrString])
      : arr.map(item => callbackOrString(item));

  return Math.max(...numbers);
}

export default maxBy;
