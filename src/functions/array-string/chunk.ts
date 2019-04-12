import loop from '../utility/loop';
import invariant from '../../.internal/invariant';

/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * @example
 *
 * chunk('HelloWorld', 3);
 * // => ['Hel', 'loW', 'orl', 'd'];
 *
 */

function chunk(str: string, size: number): string[];

/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * @example
 *
 * chunk([0, 1, 2, 3, 4, 5], 4);
 * // => [[0, 1, 2, 3], [4, 5]];
 *
 */

function chunk<T>(arr: T[], size: number): T[][];

function chunk(arrOrString: any, size: number): any {
  invariant(
    Number.isSafeInteger(size),
    `Size argument must be a Safe Integer, but got size: ${size}`
  );
  invariant(
    size > 0,
    `Size argument must be greater than zero, but got size: ${size}`
  );
  invariant(
    size <= arrOrString.length,
    `Size argument can't be greater than Array or String length, but got size: ${size}`
  );

  const totalGroupCount = Math.ceil(arrOrString.length / size);
  let result = new Array(totalGroupCount);

  loop(totalGroupCount, index => {
    const startPosition = index * size;
    result[index] = arrOrString.slice(startPosition, startPosition + size);
  });
  return result;
}

export default chunk;
