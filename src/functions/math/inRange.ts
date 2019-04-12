import invariant from '../../.internal/invariant';

/**
 * Check if a number is in a specified range
 *
 * @example
 *
 * const num4 = 20;
 * inRange(0, num4, 10)
 * // => false
 *
 */

function inRange(min: number, num: number, max: number): boolean {
  invariant(
    min <= max,
    `Arguments min: ${min} should be smaller than or equal to max: ${max}`
  );

  return num >= min && num <= max;
}

export default inRange;
