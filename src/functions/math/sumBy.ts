import sum from './sum';

/**
 * This method calculates sum in the given array by using provided callback.
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
 * sumBy(data, 'value');
 * // => 18
 *
 */

function sumBy<K extends string, T extends { [key in K]: number }>(
  arr: T[],
  str: K
): number;

/**
 * This method calculates sum in the given array by using provided callback.
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
 * sumBy(data, item => item.value)
 * // => 18
 *
 */

function sumBy<T>(arr: T[], callback: (value: T) => number): number;

function sumBy<K extends string, T extends { [key in K]: number }>(
  arr: T[],
  callbackOrString: K | ((value: T) => number)
): number {
  const numbers =
    typeof callbackOrString === 'string'
      ? arr.map(item => item[callbackOrString])
      : arr.map(item => callbackOrString(item));

  return sum(numbers);
}

export default sumBy;
