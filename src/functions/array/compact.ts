/**
 * Creates an array with all falsey values removed. The values `false`, `null`,
 * `0`, `""`, `undefined`, and `NaN` are falsey.
 *
 * @example
 *
 * compact([1, "", 3, null, 0])
 * // => [1, 3]
 *
 */

function compact<T>(arr: T[]): T[] {
  return arr.filter(Boolean);
}

export default compact;
