/**
 * Computes the sum of the values in `array`.
 *
 * @example
 *
 * sum([0, 1, 2, 3, 4, 5]);
 * // => 15
 *
 */

function sum(arr: number[]): number {
  return arr.reduce((prev, current) => prev + current, 0);
}

export default sum;
