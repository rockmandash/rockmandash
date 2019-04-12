import invariant from '../../.internal/invariant';

/**
 * Test whether a number is power of two.
 *
 * @example
 *
 * isPowerOfTwo(-16);
 * // false
 *
 * isPowerOfTwo(0.25);
 * // true
 *
 */

function isPowerOfTwo(num: number): boolean {
  invariant(!Number.isNaN(num), `Argument num: ${num} should not be NaN.`);

  return num !== 0 && (num & (num - 1)) === 0;
}

export default isPowerOfTwo;
