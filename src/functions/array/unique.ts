/**
 * Create an `string` without duplicates.
 *
 * @example
 *
 * unique('hello world');
 * // => ['h', 'e', 'l', 'o', ' ', 'w', 'r', 'd'];
 *
 */

function unique(str: string): string[];

/**
 * Create an `array` without duplicates.
 *
 * @example
 *
 * unique([0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 5]);
 * // => [0, 1, 2, 3, 4, 5];
 *
 */

function unique<T>(arr: T[]): T[];

function unique(arrOrString: any): any {
  return [...new Set(arrOrString)];
}

export default unique;
