import escapeRegExp from '../re/escapeRegExp';

/**
 * Replace all occurences in a string or array.
 *
 * @example
 *
 * replaceAll('What????', '?', '!');
 * // => 'What!!!!'
 *
 */

function replaceAll(
  target: string,
  searchValue: string,
  replaceValue: string
): string;

/**
 * Replace all occurences in a string or array.
 *
 * @example
 *
 * replaceAll(['a', 'b', 'c', 'c'], 'c', 'z');
 * // => ['a', 'b', 'z', 'z'];
 *
 */

function replaceAll<T, U>(
  target: T[],
  searchValue: any,
  replaceValue: U
): (T | U)[];

function replaceAll<T, U>(
  target: T[] | string,
  searchValue: any,
  replaceValue: any
): (T | U)[] | string {
  if (typeof target === 'string') {
    return target.replace(
      new RegExp(escapeRegExp(searchValue), 'g'),
      replaceValue
    );
  } else {
    return target.map(item => (item === searchValue ? replaceValue : item));
  }
}

export default replaceAll;
